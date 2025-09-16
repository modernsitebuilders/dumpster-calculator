// app/components/CalculatorForm.js
'use client'
import { useState, useEffect, useRef } from 'react';
import { trackCalculatorUsage } from '../../utils/analytics';

export default function CalculatorForm({ onCalculate, isCalculating = false }) {
  // Form state
  const [projectType, setProjectType] = useState('');
  const [squareFootage, setSquareFootage] = useState('');
  const [materialType, setMaterialType] = useState('standard');
  
  // Validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  // Tracking state
  const startTimeRef = useRef(null);
  const [hasTrackedView, setHasTrackedView] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  // Track calculator view on mount
  useEffect(() => {
    if (!hasTrackedView) {
      trackCalculatorUsage.calculatorViewed();
      startTimeRef.current = Date.now();
      setHasTrackedView(true);
    }
  }, [hasTrackedView]);

  // Track step completion
  const markStepCompleted = (stepNumber, stepName) => {
    const stepKey = `${stepNumber}_${stepName}`;
    if (!completedSteps.has(stepKey)) {
      setCompletedSteps(prev => new Set([...prev, stepKey]));
      trackCalculatorUsage.stepCompleted(stepNumber, stepName);
    }
  };

  // Validation functions
  const validateProjectType = (type) => {
    if (!type) return 'Please select a project type';
    return '';
  };

  const validateSquareFootage = (sqft) => {
    if (!sqft) return 'Please enter square footage';
    if (isNaN(sqft) || sqft <= 0) return 'Please enter a valid number';
    if (sqft > 10000) return 'Maximum 10,000 sq ft supported';
    return '';
  };

  // Clear errors when user fixes them
  const clearError = (field) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Handlers
  const handleProjectTypeChange = (type) => {
    setProjectType(type);
    setTouched(prev => ({ ...prev, projectType: true }));
    clearError('projectType');
    
    trackCalculatorUsage.projectTypeSelected(type);
    markStepCompleted(1, 'project_type');
    
    // Validate immediately
    const error = validateProjectType(type);
    if (error) {
      setErrors(prev => ({ ...prev, projectType: error }));
    }
  };

  const handleSquareFootageChange = (e) => {
    const sqft = e.target.value;
    setSquareFootage(sqft);
    setTouched(prev => ({ ...prev, squareFootage: true }));
    clearError('squareFootage');
    
    if (sqft && sqft.length >= 2) {
      trackCalculatorUsage.squareFootageEntered(sqft);
      markStepCompleted(2, 'square_footage');
    }
  };

  const handleMaterialChange = (material) => {
    setMaterialType(material);
    trackCalculatorUsage.materialSelected(material);
    markStepCompleted(3, 'material_type');
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const projectError = validateProjectType(projectType);
    const sqftError = validateSquareFootage(squareFootage);
    
    const newErrors = {
      projectType: projectError,
      squareFootage: sqftError
    };
    
    setErrors(newErrors);
    setTouched({ projectType: true, squareFootage: true });
    
    // If no errors, submit
    if (!projectError && !sqftError) {
      const formData = {
        projectType,
        squareFootage: parseInt(squareFootage),
        materialType
      };
      
      markStepCompleted(4, 'calculation_initiated');
      onCalculate(formData);
    }
  };

  const handleReset = () => {
    setProjectType('');
    setSquareFootage('');
    setMaterialType('standard');
    setErrors({});
    setTouched({});
    setCompletedSteps(new Set());
    
    trackCalculatorUsage.calculatorReset();
    startTimeRef.current = Date.now();
  };

  return (
    <div id="calculator" className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Free Dumpster Size Calculator
        </h2>
        <p className="text-gray-600">
          Get accurate sizing recommendations for your project
        </p>
        </div>

      <form onSubmit={handleCalculate} className="space-y-6">
        {/* Step 1: Project Type */}
        <div>
          <h3 className="text-xl font-semibold mb-4">What's your project?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { id: 'bathroom', label: '🚿 Bathroom Remodel', popular: true },
              { id: 'kitchen', label: '🏠 Kitchen Renovation', popular: true },
              { id: 'roof', label: '🏠 Roof Replacement' },
              { id: 'garage_cleanout', label: '🚗 Garage Cleanout', popular: true },
              { id: 'basement', label: '🏠 Basement Cleanout' },
              { id: 'whole_house', label: '🏗️ Whole House Reno' },
              { id: 'deck', label: '🌲 Deck/Patio Removal' },
              { id: 'other', label: '📦 Other Project' }
            ].map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => handleProjectTypeChange(project.id)}
                onFocus={() => trackCalculatorUsage.sectionEngaged('project_type_select')}
                className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  projectType === project.id
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-blue-300'
                } ${project.popular ? 'ring-2 ring-yellow-200' : ''}`}
                aria-pressed={projectType === project.id}
              >
                <div className="font-medium">{project.label}</div>
                {project.popular && (
                  <div className="text-xs text-yellow-600 font-semibold mt-1">Most Popular</div>
                )}
              </button>
            ))}
          </div>
          {errors.projectType && touched.projectType && (
            <p className="text-red-600 text-sm mt-2 flex items-center">
              <span className="mr-1">⚠️</span> {errors.projectType}
            </p>
          )}
        </div>

        {/* Step 2: Square Footage */}
        {projectType && (
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4">
              {projectType === 'roof' ? 'Roof square footage?' : 
               projectType.includes('cleanout') ? 'Approximate area to clean out?' :
               'Total square footage?'}
            </h3>
            <div className="relative">
              <label htmlFor="square-footage" className="sr-only">
                Enter square footage
              </label>
              <input
  type="number"
  id="square-footage"
  name="squareFootage"
  value={squareFootage}
  onChange={handleSquareFootageChange}
  onFocus={() => trackCalculatorUsage.sectionEngaged('square_footage_input')}
  placeholder="Enter square footage"
  className={`w-full p-4 border-2 rounded-lg focus:outline-none text-lg transition-colors hide-number-arrows ${
    errors.squareFootage && touched.squareFootage 
      ? 'border-red-500 focus:border-red-500' 
      : 'border-gray-300 focus:border-blue-500'
  }`}
  min="1"
  max="10000"
  aria-describedby={errors.squareFootage ? 'sqft-error' : 'sqft-help'}
/>
              <span className="absolute right-4 top-4 text-gray-500">sq ft</span>
            </div>
            {errors.squareFootage && touched.squareFootage ? (
              <p id="sqft-error" className="text-red-600 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span> {errors.squareFootage}
              </p>
            ) : (
              <p id="sqft-help" className="mt-2 text-sm text-gray-600">
                💡 Tip: Measure length × width, or estimate if unsure
              </p>
            )}
          </div>
        )}

        {/* Step 3: Material Type */}
        {squareFootage && (
          <div className="animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4">What type of materials?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'light', label: '🪶 Light Materials', desc: 'Drywall, insulation, cardboard' },
                { id: 'standard', label: '📦 Standard Mix', desc: 'Typical renovation debris', popular: true },
                { id: 'heavy', label: '🧱 Heavy Materials', desc: 'Concrete, tile, brick' }
              ].map((material) => (
                <button
                  key={material.id}
                  type="button"
                  onClick={() => handleMaterialChange(material.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    materialType === material.id
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-blue-300'
                  } ${material.popular ? 'ring-2 ring-yellow-200' : ''}`}
                  aria-pressed={materialType === material.id}
                >
                  <div className="font-medium">{material.label}</div>
                  <div className="text-sm text-gray-600 mt-1">{material.desc}</div>
                  {material.popular && (
                    <div className="text-xs text-yellow-600 font-semibold mt-1">Recommended</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Calculate Button */}
        {projectType && squareFootage && (
          <div className="animate-fadeIn pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isCalculating || Object.values(errors).some(error => error)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {isCalculating ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calculating...
                  </span>
                ) : (
                  'Calculate My Dumpster Size 🎯'
                )}
              </button>
              
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition focus:ring-2 focus:ring-gray-500 focus:outline-none"
              >
                Reset 🔄
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}