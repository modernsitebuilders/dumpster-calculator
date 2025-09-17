import { MATERIALS } from '../constants/materials';

export const calculateDumpsterSize = (formData) => {
  // Base calculations
  const baseSize = {
    bathroom: { 
      small: 10,
      medium: 12,
      large: 18
    },
    kitchen: { 
      small: 12,
      medium: 18,
      large: 25
    },
    roofing: { 
      small: 15,
      medium: 22,
      large: 30
    },
    cleanout: { 
      small: 10,
      medium: 20,
      large: 30
    },
    landscaping: { 
      small: 10,
      medium: 15,
      large: 20
    },
    construction: { 
      small: 20,
      medium: 25,
      large: 35
    }
  };

  const recommendedBaseSize = baseSize[formData.projectType]?.[formData.projectSize] || 20;
  
  // Calculate weight factor from materials
  const selectedMaterials = MATERIALS.filter(m => formData.materials.includes(m.id));
  const avgWeightMultiplier = selectedMaterials.length > 0 
    ? selectedMaterials.reduce((sum, m) => sum + m.multiplier, 0) / selectedMaterials.length
    : 1;
  
  // Check for specific heavy materials
  const hasConcreteOrDirt = formData.materials.includes('concrete') || formData.materials.includes('dirt');
  const hasRock = formData.materials.includes('rock');
  const hasShingles = formData.materials.includes('shingles');
  const hasTile = formData.materials.includes('tile');
  
  let needsMultiple = false;
  let multipleRecommendation = null;
  let adjustedSize = recommendedBaseSize;
  let maxAllowedSize = 40;
  
  // Apply weight-based logic
  if (hasConcreteOrDirt || hasRock) {
    maxAllowedSize = 20;
    if (recommendedBaseSize > 20) {
      needsMultiple = true;
      multipleRecommendation = recommendedBaseSize <= 30 
        ? { primary: 20, secondary: 10 }
        : { primary: 20, secondary: 20 };
      adjustedSize = 20;
    } else {
      adjustedSize = Math.min(adjustedSize, 15);
    }
  } else if (avgWeightMultiplier > 3) {
    maxAllowedSize = 20;
    adjustedSize = Math.min(adjustedSize, 15);
  } else if (hasShingles || hasTile) {
    maxAllowedSize = 30;
    adjustedSize = Math.min(adjustedSize, 25);
  } else if (avgWeightMultiplier > 2) {
    maxAllowedSize = 30;
    adjustedSize = Math.min(adjustedSize, 25);
  }
  
  // Round to standard sizes
  let recommendedSize;
  if (adjustedSize <= 10) {
    recommendedSize = 10;
  } else if (adjustedSize <= 20) {
    recommendedSize = 20;
  } else if (adjustedSize <= 30) {
    recommendedSize = 30;
  } else {
    recommendedSize = 40;
  }
  
  recommendedSize = Math.min(recommendedSize, maxAllowedSize);

  // Generate alternatives and warnings
  const hasHeavyMaterials = selectedMaterials.some(m => m.weight === 'heavy');
  const hasWarningMaterials = selectedMaterials.some(m => m.warning);
  
  return {
    recommendedSize,
    baseSize: Math.round(recommendedBaseSize),
    adjustedSize: Math.round(adjustedSize),
    maxAllowed: maxAllowedSize,
    weightAdjusted: recommendedSize !== Math.round(recommendedBaseSize),
    materials: selectedMaterials,
    avgWeight: avgWeightMultiplier,
    needsMultiple,
    multipleRecommendation,
    warnings: {
      heavy: hasHeavyMaterials,
      weightLimit: hasWarningMaterials,
      multipleLoads: needsMultiple || avgWeightMultiplier > 3,
      weightCapped: recommendedSize === maxAllowedSize && hasHeavyMaterials
    },
    alternatives: generateAlternatives(recommendedSize, adjustedSize, avgWeightMultiplier, formData.projectType, maxAllowedSize, needsMultiple),
    isSmallProject: recommendedSize === 10 && adjustedSize <= 10,
    projectType: formData.projectType
  };
};

function generateAlternatives(recommendedSize, adjustedSize, avgWeightMultiplier, projectType, maxAllowedSize, needsMultiple) {
  const alternatives = [];
  const isRoofingProject = projectType === 'roofing';
  const significantlyOversized = (recommendedSize - adjustedSize) >= 8;
  const goodFit = (recommendedSize - adjustedSize) <= 3;

  if (!needsMultiple && recommendedSize > 10) {
    if (significantlyOversized && !isRoofingProject && avgWeightMultiplier < 2) {
      const smallerSize = recommendedSize === 40 ? 30 : recommendedSize === 30 ? 20 : 10;
      if (adjustedSize <= (smallerSize + 2)) {
        alternatives.push({ 
          size: smallerSize, 
          label: 'Tight Budget Option',
          description: 'Only if you break everything down and load very efficiently'
        });
      }
    }
    
    if (isRoofingProject && recommendedSize < maxAllowedSize && recommendedSize < 40) {
      const largerSize = recommendedSize === 10 ? 20 : recommendedSize === 20 ? 30 : 40;
      if (largerSize <= maxAllowedSize) {
        alternatives.push({ 
          size: largerSize, 
          label: 'Safe Choice',
          description: 'Accounts for multiple layers or unexpected materials'
        });
      }
    } else if (goodFit && avgWeightMultiplier < 2 && recommendedSize < 40) {
      const largerSize = recommendedSize === 10 ? 20 : recommendedSize === 20 ? 30 : 40;
      alternatives.push({ 
        size: largerSize, 
        label: 'Easier Loading',
        description: 'More room for convenient loading without breaking items down'
      });
    }
  }

  return alternatives;
}