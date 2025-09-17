'use client';
import React, { useState } from 'react';
import { 
  AlertCircle, CheckCircle2, ChevronRight, ChevronLeft, 
  Trash2, Home, Hammer, Trees, Package, Bath, ChefHat,
  Building, TreePine, Sparkles
} from 'lucide-react';
const DumpsterCalculatorWithMaterials = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    projectSize: '',
    materials: [],
    heavyMaterials: false
  });
  const [result, setResult] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Project types with emojis and descriptions
  const projectTypes = [
    { id: 'bathroom', label: 'Bathroom Remodel', icon: Bath, color: 'blue' },
    { id: 'kitchen', label: 'Kitchen Renovation', icon: ChefHat, color: 'green' },
    { id: 'roofing', label: 'Roofing Project', icon: Home, color: 'red' },
    { id: 'cleanout', label: 'House Cleanout', icon: Package, color: 'purple' },
    { id: 'landscaping', label: 'Yard/Landscaping', icon: TreePine, color: 'emerald' },
    { id: 'construction', label: 'Construction/Demo', icon: Hammer, color: 'orange' }
  ];

  // Project sizes based on type
  const getProjectSizes = (type) => {
    const sizeMap = {
      bathroom: [
        { id: 'small', label: 'Powder Room / Half Bath', desc: '< 40 sq ft', multiplier: 0.5 },
        { id: 'medium', label: 'Standard Full Bathroom', desc: '40-100 sq ft', multiplier: 1 },
        { id: 'large', label: 'Master Bathroom', desc: '> 100 sq ft', multiplier: 1.5 }
      ],
      kitchen: [
        { id: 'small', label: 'Galley Kitchen', desc: '< 150 sq ft', multiplier: 1 },
        { id: 'medium', label: 'Standard Kitchen', desc: '150-250 sq ft', multiplier: 1.5 },
        { id: 'large', label: 'Large/Open Kitchen', desc: '> 250 sq ft', multiplier: 2 }
      ],
      roofing: [
        { id: 'small', label: 'Small House/Ranch', desc: '1,000-1,500 sq ft', multiplier: 1 },
        { id: 'medium', label: 'Average House', desc: '1,500-2,500 sq ft', multiplier: 2 },
        { id: 'large', label: 'Large House', desc: '> 2,500 sq ft', multiplier: 3 }
      ],
      cleanout: [
        { id: 'small', label: '1-2 Rooms', desc: 'Garage or basement', multiplier: 1 },
        { id: 'medium', label: 'Half House', desc: '3-5 rooms', multiplier: 2 },
        { id: 'large', label: 'Whole House', desc: '6+ rooms', multiplier: 3 }
      ],
      landscaping: [
        { id: 'small', label: 'Small Yard', desc: '< 5,000 sq ft lot', multiplier: 1 },
        { id: 'medium', label: 'Average Yard', desc: '5,000-10,000 sq ft', multiplier: 2 },
        { id: 'large', label: 'Large Property', desc: '> 10,000 sq ft', multiplier: 3 }
      ],
      construction: [
        { id: 'small', label: 'Small Structure', desc: 'Shed, small addition', multiplier: 1 },
        { id: 'medium', label: 'Medium Project', desc: 'Room addition, deck', multiplier: 2 },
        { id: 'large', label: 'Major Construction', desc: 'Multiple rooms', multiplier: 3 }
      ]
    };
    return sizeMap[type] || [];
  };

  // Materials database with weight factors
  const materials = [
    // Light materials (low weight multiplier)
    { id: 'drywall', label: 'Drywall', icon: '🪵', weight: 'light', multiplier: 1, color: 'gray' },
    { id: 'carpet', label: 'Carpet & Padding', icon: '🏠', weight: 'light', multiplier: 0.5, color: 'blue' },
    { id: 'insulation', label: 'Insulation', icon: '📦', weight: 'light', multiplier: 0.3, color: 'pink' },
    { id: 'cardboard', label: 'Cardboard/Boxes', icon: '📦', weight: 'light', multiplier: 0.2, color: 'yellow' },
    
    // Medium materials
    { id: 'wood', label: 'Wood/Lumber', icon: '🪵', weight: 'medium', multiplier: 1.2, color: 'amber' },
    { id: 'furniture', label: 'Furniture', icon: '🪑', weight: 'medium', multiplier: 1, color: 'purple' },
    { id: 'cabinets', label: 'Cabinets', icon: '🗄️', weight: 'medium', multiplier: 1.3, color: 'indigo' },
    { id: 'flooring', label: 'Hardwood Flooring', icon: '🪵', weight: 'medium', multiplier: 1.5, color: 'orange' },
    
    // Heavy materials (high weight multiplier)
    { id: 'shingles', label: 'Roofing Shingles', icon: '🏠', weight: 'heavy', multiplier: 2.5, color: 'red', popular: true },
    { id: 'tile', label: 'Tile/Ceramic', icon: '🧱', weight: 'heavy', multiplier: 3, color: 'cyan' },
    { id: 'concrete', label: 'Concrete/Brick', icon: '🧱', weight: 'heavy', multiplier: 4, color: 'slate', warning: true },
    { id: 'dirt', label: 'Dirt/Soil', icon: '🌍', weight: 'heavy', multiplier: 3.5, color: 'amber', warning: true },
    { id: 'rock', label: 'Rock/Gravel', icon: '⛰️', weight: 'heavy', multiplier: 3.8, color: 'gray', warning: true }
  ];

  // Group materials by weight
  const materialsByWeight = {
    light: materials.filter(m => m.weight === 'light'),
    medium: materials.filter(m => m.weight === 'medium'),
    heavy: materials.filter(m => m.weight === 'heavy')
  };

  const toggleMaterial = (materialId) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.includes(materialId)
        ? prev.materials.filter(m => m !== materialId)
        : [...prev.materials, materialId],
      heavyMaterials: materials.find(m => m.id === materialId)?.weight === 'heavy' || prev.heavyMaterials
    }));
  };

  const calculateSize = () => {
    // Base calculations - these can be decimals, we'll round to standard sizes
    const baseSize = {
      bathroom: { 
        small: 10,   // Powder room - minimal debris
        medium: 12,  // Standard bathroom - between 10-20
        large: 18    // Master bath - closer to 20
      },
      kitchen: { 
        small: 12,   // Galley kitchen
        medium: 18,  // Standard kitchen
        large: 25    // Large kitchen with island
      },
      roofing: { 
        small: 15,   // 1000-1500 sq ft ≈ 15 squares
        medium: 22,  // 1500-2500 sq ft ≈ 25 squares
        large: 30    // 2500+ sq ft ≈ 35+ squares
      },
      cleanout: { 
        small: 10,   // 1-2 rooms or garage
        medium: 20,  // Half house
        large: 30    // Whole house with furniture
      },
      landscaping: { 
        small: 10,   // Small yard cleanup
        medium: 18,  // Average yard
        large: 25    // Large property
      },
      construction: { 
        small: 20,   // Small addition/shed
        medium: 25,  // Room addition
        large: 35    // Multiple rooms
      }
    };

    const recommendedBaseSize = baseSize[formData.projectType]?.[formData.projectSize] || 20;
    
    // Calculate weight factor from materials
    const selectedMaterials = materials.filter(m => formData.materials.includes(m.id));
    const avgWeightMultiplier = selectedMaterials.length > 0 
      ? selectedMaterials.reduce((sum, m) => sum + m.multiplier, 0) / selectedMaterials.length
      : 1;
    
    // Check for specific heavy materials that need strict limits
    const hasConcreteOrDirt = formData.materials.includes('concrete') || formData.materials.includes('dirt');
    const hasRock = formData.materials.includes('rock');
    const hasShingles = formData.materials.includes('shingles');
    const hasTile = formData.materials.includes('tile');
    
    // Calculate if we need multiple dumpsters due to weight
    let needsMultiple = false;
    let multipleRecommendation = null;
    
    // Adjust for weight - with strict caps for heavy materials
    let adjustedSize = recommendedBaseSize;
    let maxAllowedSize = 40; // default max
    
    // Set strict weight-based caps
    if (hasConcreteOrDirt || hasRock) {
      // Concrete/dirt/rock - heavy weight limits
      maxAllowedSize = 20;
      
      // If project needs more than 20 yards of heavy material, we MUST use multiple
      if (recommendedBaseSize > 20) {
        needsMultiple = true;
        // Calculate how many dumpsters needed
        if (recommendedBaseSize <= 30) {
          multipleRecommendation = { primary: 20, secondary: 10 };
        } else {
          multipleRecommendation = { primary: 20, secondary: 20 };
        }
        adjustedSize = 20; // Primary dumpster size
      } else {
        adjustedSize = Math.min(adjustedSize, 15);
      }
    } else if (avgWeightMultiplier > 3) {
      // Very heavy mix - cap at 20
      maxAllowedSize = 20;
      adjustedSize = Math.min(adjustedSize, 15);
    } else if (hasShingles || hasTile) {
      // Shingles/tile - cap at 20-30 depending on amount
      maxAllowedSize = 30;
      adjustedSize = Math.min(adjustedSize, 25);
    } else if (avgWeightMultiplier > 2) {
      // Moderate-heavy mix - cap at 30
      maxAllowedSize = 30;
      adjustedSize = Math.min(adjustedSize, 25);
    }
    
    // Round to STANDARD dumpster sizes - ALWAYS ROUND UP for safety
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
    
    // Apply the weight-based cap
    recommendedSize = Math.min(recommendedSize, maxAllowedSize);

    const hasHeavyMaterials = selectedMaterials.some(m => m.weight === 'heavy');
    const hasWarningMaterials = selectedMaterials.some(m => m.warning);
    
    // Track if this might be oversized (rounded up a lot)
    const significantlyOversized = (recommendedSize - adjustedSize) >= 8;
    const slightlyOversized = (recommendedSize - adjustedSize) >= 5;
    const goodFit = (recommendedSize - adjustedSize) <= 3;

    // Smart alternatives logic
    let alternatives = [];
    
    // Special handling for roofing projects
    const isRoofingProject = formData.projectType === 'roofing';
    
    // Only show alternatives when they make sense and we don't need multiple
    if (!needsMultiple && recommendedSize > 10) {
      // If we rounded up A LOT, offer smaller as budget option (but not for heavy materials)
      if (significantlyOversized && !isRoofingProject && avgWeightMultiplier < 2) {
        const smallerSize = recommendedSize === 40 ? 30 : recommendedSize === 30 ? 20 : 10;
        
        // Only suggest smaller if the calculated size was very close to fitting
        if (adjustedSize <= (smallerSize + 2)) {
          alternatives.push({ 
            size: smallerSize, 
            label: 'Tight Budget Option',
            description: 'Only if you break everything down and load very efficiently'
          });
        }
      }
      
      // For roofing, offer next size up if not at cap
      if (isRoofingProject && recommendedSize < maxAllowedSize && recommendedSize < 40) {
        const largerSize = recommendedSize === 10 ? 20 : recommendedSize === 20 ? 30 : 40;
        if (largerSize <= maxAllowedSize) {
          alternatives.push({ 
            size: largerSize, 
            label: 'Safe Choice',
            description: 'Accounts for multiple layers or unexpected materials'
          });
        }
      }
      
      // If it's a good fit but not heavy materials, offer larger for convenience
      else if (goodFit && avgWeightMultiplier < 2 && recommendedSize < 40) {
        const largerSize = recommendedSize === 10 ? 20 : recommendedSize === 20 ? 30 : 40;
        alternatives.push({ 
          size: largerSize, 
          label: 'Easier Loading',
          description: 'More room for convenient loading without breaking items down'
        });
      }
    }

    setResult({
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
        oversized: slightlyOversized && !isRoofingProject,
        weightCapped: recommendedSize === maxAllowedSize && hasHeavyMaterials
      },
      alternatives,
      isSmallProject: recommendedSize === 10 && adjustedSize <= 10,
      projectType: formData.projectType
    });
    
    setShowDetails(true);
  };

  const reset = () => {
    setFormData({
      projectType: '',
      projectSize: '',
      materials: [],
      heavyMaterials: false
    });
    setResult(null);
    setShowDetails(false);
    setCurrentStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Trash2 className="w-10 h-10 text-green-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Smart Dumpster Calculator</h1>
        </div>
        <p className="text-gray-600">Get the perfect size with material-specific calculations</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
            } font-bold transition-all duration-300`}>
              {currentStep > step ? <CheckCircle2 className="w-6 h-6" /> : step}
            </div>
            {step < 3 && (
              <div className={`w-20 h-1 ${
                currentStep > step ? 'bg-green-500' : 'bg-gray-200'
              } transition-all duration-300`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mb-6 px-4">
        <span className={`text-sm ${currentStep >= 1 ? 'text-green-600 font-semibold' : 'text-gray-400'}`}>
          Project Type
        </span>
        <span className={`text-sm ${currentStep >= 2 ? 'text-green-600 font-semibold' : 'text-gray-400'}`}>
          Size & Materials
        </span>
        <span className={`text-sm ${currentStep >= 3 ? 'text-green-600 font-semibold' : 'text-gray-400'}`}>
          Results
        </span>
      </div>

      {/* Step 1: Project Type */}
      {currentStep === 1 && (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">What type of project?</h2>
          <div className="grid grid-cols-2 gap-4">
            {projectTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setFormData({ ...formData, projectType: type.id });
                  setCurrentStep(2);
                }}
                className={`p-4 rounded-lg border-2 transition-all hover:scale-105 hover:shadow-md ${
                  formData.projectType === type.id
                    ? `border-${type.color}-500 bg-${type.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <type.icon className="w-8 h-8 mb-2" />
                <div className="font-medium">{type.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Size and Materials */}
      {currentStep === 2 && (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Project Details</h2>
          
          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Project Size:</h3>
            <div className="space-y-2">
              {getProjectSizes(formData.projectType).map((size) => (
                <button
                  key={size.id}
                  onClick={() => setFormData({ ...formData, projectSize: size.id })}
                  className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                    formData.projectSize === size.id
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{size.label}</div>
                  <div className="text-sm text-gray-600">{size.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Materials Selection */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-3">Select Materials:</h3>
            
            {/* Light Materials */}
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">💨 Light Materials</div>
              <div className="grid grid-cols-2 gap-2">
                {materialsByWeight.light.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => toggleMaterial(material.id)}
                    className={`p-2 rounded-lg border-2 text-sm transition-all ${
                      formData.materials.includes(material.id)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="mr-1">{material.icon}</span>
                    {material.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Medium Materials */}
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">📦 Medium Weight</div>
              <div className="grid grid-cols-2 gap-2">
                {materialsByWeight.medium.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => toggleMaterial(material.id)}
                    className={`p-2 rounded-lg border-2 text-sm transition-all ${
                      formData.materials.includes(material.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="mr-1">{material.icon}</span>
                    {material.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Heavy Materials */}
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">⚠️ Heavy Materials (Weight Limited)</div>
              <div className="grid grid-cols-2 gap-2">
                {materialsByWeight.heavy.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => toggleMaterial(material.id)}
                    className={`p-2 rounded-lg border-2 text-sm transition-all ${
                      formData.materials.includes(material.id)
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${material.warning ? 'ring-2 ring-yellow-200' : ''}`}
                  >
                    <span className="mr-1">{material.icon}</span>
                    {material.label}
                    {material.popular && (
                      <span className="ml-1 text-xs bg-yellow-100 text-yellow-800 px-1 rounded">Popular</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {formData.materials.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                Selected: {formData.materials.length} material{formData.materials.length > 1 ? 's' : ''}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(1)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </button>
            <button
              onClick={() => {
                calculateSize();
                setCurrentStep(3);
              }}
              disabled={!formData.projectSize || formData.materials.length === 0}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
            >
              Calculate Size
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {currentStep === 3 && result && (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            
            {result.needsMultiple ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Multiple Dumpsters Required
                </h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <p className="text-lg font-semibold text-red-800 mb-2">
                    Due to weight limits, you'll need:
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="bg-white rounded-lg p-3 border-2 border-red-300">
                      <span className="text-2xl font-bold text-gray-800">
                        {result.multipleRecommendation.primary} Yard
                      </span>
                    </div>
                    <span className="self-center text-2xl">+</span>
                    <div className="bg-white rounded-lg p-3 border-2 border-red-300">
                      <span className="text-2xl font-bold text-gray-800">
                        {result.multipleRecommendation.secondary} Yard
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-red-700 mt-3">
                    ⚠️ Heavy materials like concrete/dirt cannot be hauled in a single load due to DOT weight regulations. 
                    Splitting into multiple dumpsters prevents overweight fines and ensures safe transport.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Recommended Size: {result.recommendedSize} Yard Dumpster
                </h2>
                
                {result.weightAdjusted && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
                    <AlertCircle className="inline w-5 h-5 text-yellow-600 mr-2" />
                    <span className="text-sm text-yellow-800">
                      Size adjusted for heavy materials (weight limits apply)
                    </span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Project Summary - NEW SECTION */}
          <div className="mb-6 bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">Your Project:</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-medium mr-2">Type:</span>
                <span>{projectTypes.find(p => p.id === formData.projectType)?.label}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Size:</span>
                <span className="text-gray-800 font-medium">
                  {getProjectSizes(formData.projectType).find(s => s.id === formData.projectSize)?.label}
                </span>
                <span className="ml-2 text-gray-500">
                  ({getProjectSizes(formData.projectType).find(s => s.id === formData.projectSize)?.desc})
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-medium mr-2">Materials:</span>
                <span>{result.materials.length} selected</span>
              </div>
            </div>
          </div>

          {/* Warnings */}
          {(result.warnings.heavy || result.warnings.weightLimit) && (
            <div className="mb-6 space-y-3">
              {result.warnings.weightLimit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">⚠️ Weight Warning</h3>
                  <p className="text-sm text-red-700">
                    You selected extremely heavy materials (concrete/dirt/rock). The dumpster may appear less full due to weight limits.
                    Consider separating heavy materials or renting multiple smaller dumpsters.
                  </p>
                </div>
              )}
              
              {result.warnings.multipleLoads && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">📦 Multiple Loads Recommended</h3>
                  <p className="text-sm text-orange-700">
                    Due to the weight of your materials, you may need multiple dumpsters or loads.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Material Analysis */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-3">Material Analysis:</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-2">
                {result.materials.map((material) => (
                  <div key={material.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">{material.icon}</span>
                      <span className="text-sm">{material.label}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      material.weight === 'heavy' ? 'bg-red-100 text-red-700' :
                      material.weight === 'medium' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {material.weight}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Average Weight Factor:</span>
                  <span className={`font-semibold ${
                    result.avgWeight > 2.5 ? 'text-red-600' :
                    result.avgWeight > 1.5 ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {result.avgWeight.toFixed(1)}x
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Options */}
          {result.alternatives && result.alternatives.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Alternative Options:</h3>
              <div className="space-y-3">
                {result.alternatives.map((alt, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-800">
                          {alt.multiple ? `Multiple ${alt.size} Yard` : `${alt.size} Yard`}
                        </span>
                        <span className="ml-2 text-sm font-medium text-gray-600">
                          - {alt.label}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{alt.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pro Tips */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">💡 Pro Tips:</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              {result.isSmallProject ? (
                <>
                  <li>• A 10-yard dumpster holds about 3 pickup truck loads</li>
                  <li>• Perfect size for small bathroom or single room projects</li>
                  <li>• Keep prohibited items out (paint, batteries, tires)</li>
                </>
              ) : (
                <>
                  <li>• Load heavy materials first and evenly distribute weight</li>
                  <li>• Break down large items to maximize space</li>
                  <li>• Keep dumpster level with street for easier loading</li>
                </>
              )}
              {result.warnings.heavy && (
                <li>• Consider a separate load for concrete/dirt to avoid overage fees</li>
              )}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Adjust Details
            </button>
            <button
              onClick={reset}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              New Calculation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DumpsterCalculatorWithMaterials;