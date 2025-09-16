'use client'
import { useState, useEffect, useRef } from 'react';
import { trackCalculatorUsage } from '../utils/analytics';

export default function Calculator() {
  // Existing state
  const [projectType, setProjectType] = useState('');
  const [squareFootage, setSquareFootage] = useState('');
  const [materialType, setMaterialType] = useState('standard');
  const [result, setResult] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [zipCode, setZipCode] = useState('');

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

  // Track exit point on unmount
  useEffect(() => {
    return () => {
      if (startTimeRef.current) {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        trackCalculatorUsage.timeSpentTracking(timeSpent);
        
        // Determine exit point
        if (!result) {
          if (!projectType) trackCalculatorUsage.exitPoint('project_selection');
          else if (!squareFootage) trackCalculatorUsage.exitPoint('square_footage');
          else trackCalculatorUsage.exitPoint('before_calculation');
        } else if (!showQuoteForm) {
          trackCalculatorUsage.exitPoint('after_results');
        } else {
          trackCalculatorUsage.exitPoint('quote_form');
        }
      }
    };
  }, [result, projectType, squareFootage, showQuoteForm]);

  // Track step completion
  const markStepCompleted = (stepNumber, stepName) => {
    const stepKey = `${stepNumber}_${stepName}`;
    if (!completedSteps.has(stepKey)) {
      setCompletedSteps(prev => new Set([...prev, stepKey]));
      trackCalculatorUsage.stepCompleted(stepNumber, stepName);
    }
  };

  const handleProjectTypeChange = (type) => {
    setProjectType(type);
    trackCalculatorUsage.projectTypeSelected(type);
    markStepCompleted(1, 'project_type');
  };

  const handleSquareFootageChange = (e) => {
    const sqft = e.target.value;
    setSquareFootage(sqft);
    
    if (sqft && sqft.length >= 2) { // Track after user enters meaningful data
      trackCalculatorUsage.squareFootageEntered(sqft);
      markStepCompleted(2, 'square_footage');
    }
  };

  const handleMaterialChange = (material) => {
    setMaterialType(material);
    trackCalculatorUsage.materialSelected(material);
    markStepCompleted(3, 'material_type');
  };

  const calculateDumpsterSize = () => {
    if (!projectType || !squareFootage) return;

    const sqft = parseInt(squareFootage);
    let baseVolume;
    
    // Project type multipliers
    const multipliers = {
      'bathroom': 0.5,
      'kitchen': 0.8,
      'roof': 1.2,
      'garage_cleanout': 0.3,
      'basement': 0.6,
      'whole_house': 2.0,
      'deck': 0.4
    };

    baseVolume = sqft * (multipliers[projectType] || 0.5);

    // Material adjustments
    if (materialType === 'heavy') baseVolume *= 1.3;
    if (materialType === 'light') baseVolume *= 0.8;

    // Determine recommended size
    let recommendedSize;
    if (baseVolume <= 10) recommendedSize = '10-yard';
    else if (baseVolume <= 20) recommendedSize = '20-yard';
    else if (baseVolume <= 30) recommendedSize = '30-yard';
    else recommendedSize = '40-yard';

    const calculationResult = {
      recommendedSize,
      totalVolume: Math.round(baseVolume),
      projectType,
      squareFootage: sqft,
      materialType
    };

    setResult(calculationResult);

    // Track calculation completion
    trackCalculatorUsage.calculationCompleted(calculationResult);
    trackCalculatorUsage.projectCombination(projectType, recommendedSize, sqft);
    markStepCompleted(4, 'calculation_completed');
  };

  const handleQuoteRequest = () => {
    setShowQuoteForm(true);
    trackCalculatorUsage.sectionEngaged('quote_form');
    markStepCompleted(5, 'quote_form_opened');
  };

  const handleZipCodeSubmit = (e) => {
    e.preventDefault();
    if (zipCode && result) {
      trackCalculatorUsage.zipCodeEntered(zipCode);
      trackCalculatorUsage.quoteRequested(result.recommendedSize, zipCode);
      markStepCompleted(6, 'quote_requested');
      
      // Redirect to quotes or show providers
      window.open(`https://example-provider.com/quotes?size=${result.recommendedSize}&zip=${zipCode}`, '_blank');
    }
  };

  const resetCalculator = () => {
    setProjectType('');
    setSquareFootage('');
    setMaterialType('standard');
    setResult(null);
    setShowQuoteForm(false);
    setZipCode('');
    setCompletedSteps(new Set());
    
    trackCalculatorUsage.calculatorReset();
    startTimeRef.current = Date.now(); // Reset timer
  };

  return (
    <div id="calculator" className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Free Dumpster Size Calculator
        </h2>
        <p className="text-gray-600">
          Get your perfect dumpster size recommendation in under 30 seconds
        </p>
      </div>

      <div className="space-y-6">
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
                onClick={() => handleProjectTypeChange(project.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                  projectType === project.id
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-blue-300'
                } ${project.popular ? 'ring-2 ring-yellow-200' : ''}`}
              >
                <div className="font-medium">{project.label}</div>
                {project.popular && (
                  <div className="text-xs text-yellow-600 font-semibold mt-1">Most Popular</div>
                )}
              </button>
            ))}
          </div>
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
                placeholder="Enter square footage"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                onFocus={() => trackCalculatorUsage.sectionEngaged('square_footage_input')}
              />
              <span className="absolute right-4 top-4 text-gray-500">sq ft</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              💡 Tip: Measure length × width, or estimate if unsure
            </div>
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
                  onClick={() => handleMaterialChange(material.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                    materialType === material.id
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-blue-300'
                  } ${material.popular ? 'ring-2 ring-yellow-200' : ''}`}
                >
                  <div className="font-medium">{material.label}</div>
                  <div className="text-sm text-gray-600">{material.desc}</div>
                  {material.popular && (
                    <div className="text-xs text-yellow-600 font-semibold mt-1">Most Common</div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="mt-6">
              <button
                onClick={calculateDumpsterSize}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition text-lg"
              >
                Calculate My Dumpster Size 🎯
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 animate-slideUp">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              ✅ Recommended: {result.recommendedSize} Dumpster
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Perfect For:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {result.squareFootage} sq ft {result.projectType} project</li>
                  <li>• {result.materialType} materials</li>
                  <li>• Estimated {result.totalVolume} cubic yards of debris</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Typical Cost Range:</h4>
                <div className="text-lg font-bold text-green-600">
                  {result.recommendedSize === '10-yard' ? '$250-$400' :
                    result.recommendedSize === '20-yard' ? '$350-$550' :
                    result.recommendedSize === '30-yard' ? '$450-$650' :
                    '$550-$750'}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleQuoteRequest}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition flex-1"
              >
                Get Local Quotes 📞
              </button>
              <button
                onClick={resetCalculator}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Start Over 🔄
              </button>
            </div>
          </div>
        )}

        {/* Quote Form */}
        {showQuoteForm && result && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 animate-slideUp">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Get Quotes for {result.recommendedSize} Dumpster
            </h3>
            <form onSubmit={handleZipCodeSubmit} className="flex gap-3">
              <label htmlFor="zip-code" className="sr-only">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip-code"
                name="zipCode"
                autocomplete="postal-code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter your ZIP code"
                className="flex-1 p-3 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
                maxLength="5"
                pattern="[0-9]{5}"
                required
                onFocus={() => trackCalculatorUsage.sectionEngaged('zip_code_input')}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Get Quotes →
              </button>
            </form>
            <p className="text-xs text-blue-600 mt-2">
              Free quotes from local providers • No obligations
            </p>
          </div>
        )}
      </div>
    </div>
  );
}