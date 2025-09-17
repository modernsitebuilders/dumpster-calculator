// calculator-v2/core/engine/calculator.js

import { PROJECT_TYPES, MATERIALS, DUMPSTER_SIZES, CALCULATION_CONFIG } from '../data/constants.js';

export class DumpsterCalculator {
  calculate(input) {
    // Validate input
    const validation = this.validateInput(input);
    if (!validation.isValid) {
      return { error: validation.errors };
    }
    
    // Core calculations
    const volume = this.calculateVolume(input);
    const weight = this.calculateWeight(input, volume);
    
    // Get recommendations
    const sizeByVolume = this.recommendByVolume(volume);
    const sizeByWeight = this.recommendByWeight(weight);
    
    // Determine primary constraint
    const needsMultipleDumpsters = weight >= CALCULATION_CONFIG.FEDERAL_WEIGHT_LIMIT;
    const isWeightConstrained = sizeByWeight > sizeByVolume || needsMultipleDumpsters;
    const recommendedSize = needsMultipleDumpsters ? 10 : Math.max(sizeByVolume, sizeByWeight);
    
    return {
      success: true,
      recommendation: {
        size: recommendedSize,
        volume: volume,
        weight: weight,
        isWeightConstrained,
        needsMultipleDumpsters,
        fillPercentage: isWeightConstrained
          ? Math.round((weight / CALCULATION_CONFIG.FEDERAL_WEIGHT_LIMIT) * 100)
          : Math.round((volume / recommendedSize) * 100),
        alternatives: this.getAlternatives(recommendedSize),
        warnings: this.generateWarnings(input, weight, volume),
        breakdown: this.getBreakdown(input, volume, weight)
      }
    };
  }
  
  validateInput(input) {
    const errors = [];
    
    if (!input.projectType) {
      errors.push('Project type is required');
    }
    
    if (!input.size && !input.sqft) {
      errors.push('Size information is required');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  
  calculateVolume(input) {
    const project = PROJECT_TYPES[input.projectType];
    if (!project) throw new Error(`Unknown project type: ${input.projectType}`);
    
    const sqft = input.sqft || input.size;
    const baseVolume = sqft * project.cubicYardsPerSqFt;
    
    // Apply safety buffer
    return baseVolume * (1 + CALCULATION_CONFIG.SAFETY_BUFFER);
  }
  
  calculateWeight(input, volume) {
    const project = PROJECT_TYPES[input.projectType];
    
    if (input.materials && input.materials.length > 0) {
      // Calculate weight for specific materials
      let totalWeight = 0;
      
      input.materials.forEach(materialId => {
        const material = MATERIALS[materialId];
        if (material) {
          totalWeight += volume * material.lbsPerCubicYard;
        }
      });
      
      // Return average if multiple materials, or total if single material
      return input.materials.length > 1 ? totalWeight / input.materials.length : totalWeight;
    }
    
    // Use project average
    return volume * project.avgWeightPerCubicYard;
  }
  
  recommendByVolume(volume) {
    if (volume <= 10) return 10;
    if (volume <= 20) return 20;
    if (volume <= 30) return 30;
    return 40;
  }
  
  recommendByWeight(weight) {
    // Special handling for extreme overweight situations
    if (weight >= CALCULATION_CONFIG.FEDERAL_WEIGHT_LIMIT) {
      // Return a high number to trigger weight constraint
      return 99;
    }
    
    // Conservative weight-based sizing
    if (weight <= 5000) return 10;
    if (weight <= 10000) return 20;
    if (weight <= 15000) return 30;
    return 40;
  }
  
  generateWarnings(input, weight, volume) {
    const warnings = [];
    
    if (weight > CALCULATION_CONFIG.FEDERAL_WEIGHT_LIMIT * 0.8) {
      warnings.push({
        type: 'weight',
        message: 'Heavy materials detected. Dumpster may appear less full due to weight limits.'
      });
    }
    
    if (weight >= CALCULATION_CONFIG.FEDERAL_WEIGHT_LIMIT) {
      warnings.push({
        type: 'weight-exceeded',
        message: 'Weight exceeds federal hauling limits. Multiple dumpsters will be required.'
      });
    }
    
    if (input.materials?.includes('concrete')) {
      warnings.push({
        type: 'material',
        message: 'Concrete is extremely heavy. Consider ordering multiple smaller dumpsters.'
      });
    }
    
    return warnings;
  }
  
  getBreakdown(input, volume, weight) {
    const project = PROJECT_TYPES[input.projectType];
    return {
      inputSqFt: input.sqft || input.size,
      calculatedVolume: volume.toFixed(1),
      estimatedWeight: weight.toFixed(0),
      safetyBuffer: `${(CALCULATION_CONFIG.SAFETY_BUFFER * 100)}%`,
      formula: `(${input.sqft || input.size} sq ft × ${project.cubicYardsPerSqFt}) × 1.25`
    };
  }
  
  getAlternatives(recommendedSize) {
    const alternatives = [];
    
    if (recommendedSize > 10) {
      alternatives.push({
        size: recommendedSize - 10,
        reason: 'Budget option - if you\'re confident about volume',
        savings: '$50-100'
      });
    }
    
    if (recommendedSize < 40) {
      alternatives.push({
        size: recommendedSize + 10,
        reason: 'Extra capacity - recommended if unsure',
        additionalCost: '$50-100'
      });
    }
    
    return alternatives;
  }
}

export default DumpsterCalculator;