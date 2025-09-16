// app/components/ResultsDisplay.js
'use client'
import { useState, useEffect } from 'react';
import { trackCalculatorUsage } from '../../utils/analytics';
export default function ResultsDisplay({ result, onQuoteRequest, onReset }) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);

  // Trigger entrance animation
  useEffect(() => {
    if (result) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [result]);

  // All dumpster sizes for comparison
  const allDumpsterSizes = [
    {
      size: 10,
      description: '10 Yard Dumpster',
      dimensions: '12\' L × 8\' W × 3.5\' H',
      capacity: '3-5 tons',
      bestFor: 'Small bathroom remodel, garage cleanout',
      cost: '$250-$400'
    },
    {
      size: 20,
      description: '20 Yard Dumpster',
      dimensions: '22\' L × 8\' W × 4.5\' H', 
      capacity: '5-7 tons',
      bestFor: 'Kitchen remodel, flooring project, deck removal',
      cost: '$350-$550'
    },
    {
      size: 30,
      description: '30 Yard Dumpster',
      dimensions: '22\' L × 8\' W × 6\' H',
      capacity: '7-10 tons', 
      bestFor: 'Large home addition, major renovation',
      cost: '$450-$650'
    },
    {
      size: 40,
      description: '40 Yard Dumpster',
      dimensions: '22\' L × 8\' W × 8\' H',
      capacity: '10+ tons',
      bestFor: 'Whole house renovation, construction project',
      cost: '$550-$750'
    }
  ];

  const handleQuoteRequest = () => {
    setShowQuoteForm(true);
    trackCalculatorUsage.sectionEngaged('quote_form');
    if (onQuoteRequest) onQuoteRequest();
  };

  const handleZipCodeSubmit = (e) => {
    e.preventDefault();
    if (zipCode && result) {
      trackCalculatorUsage.zipCodeEntered(zipCode);
      trackCalculatorUsage.quoteRequested(result.recommendedSize, zipCode);
      
      // Redirect to quotes or show providers
      window.open(`https://example-provider.com/quotes?size=${result.recommendedSize}&zip=${zipCode}`, '_blank');
    }
  };

  const handleReset = () => {
    setShowQuoteForm(false);
    setZipCode('');
    if (onReset) onReset();
  };

  if (!result) return null;

  const recommendedDumpster = allDumpsterSizes.find(d => 
    d.size === parseInt(result.recommendedSize.split('-')[0])
  );

  const otherSizes = allDumpsterSizes.filter(d => 
    d.size !== parseInt(result.recommendedSize.split('-')[0])
  );

  return (
    <div className={`space-y-6 ${isAnimating ? 'animate-slideUp' : ''}`}>
      {/* Main Result */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-3xl font-bold text-green-800 mb-2">
            Perfect Match Found!
          </h3>
          <p className="text-lg text-green-700">
            Based on your {result.projectType} project ({result.squareFootage} sq ft)
          </p>
        </div>

        {recommendedDumpster && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {recommendedDumpster.description}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📏</span>
                    <span><strong>Size:</strong> {recommendedDumpster.dimensions}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">⚖️</span>
                    <span><strong>Capacity:</strong> {recommendedDumpster.capacity}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-2">🎯</span>
                    <span><strong>Perfect for:</strong> {recommendedDumpster.bestFor}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-4">
                <h5 className="font-bold text-gray-900 mb-2">Estimated Cost</h5>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {recommendedDumpster.cost}
                </div>
                <p className="text-sm text-gray-600">
                  Typical rental period: 7-10 days
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  * Prices vary by location and provider
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleQuoteRequest}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition text-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          Get Local Quotes 📞
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition focus:ring-2 focus:ring-gray-500 focus:outline-none"
        >
          Start Over 🔄
        </button>
      </div>

      {/* Size Comparison */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-4">
          Compare All Sizes
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allDumpsterSizes.map((dumpster) => {
            const isRecommended = dumpster.size === parseInt(result.recommendedSize.split('-')[0]);
            
            return (
              <div 
                key={dumpster.size}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isRecommended 
                    ? 'border-green-500 bg-green-50 ring-2 ring-green-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold text-gray-900">
                    {dumpster.size} Yard
                  </div>
                  {isRecommended && (
                    <div className="text-green-600 font-semibold text-sm">
                      ✨ Your Match
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="text-gray-600">
                    <strong>Size:</strong> {dumpster.dimensions}
                  </div>
                  <div className="text-gray-600">
                    <strong>Cost:</strong> {dumpster.cost}
                  </div>
                  <div className="text-gray-600">
                    <strong>Best for:</strong> {dumpster.bestFor}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote Form */}
      {showQuoteForm && (
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
              autoComplete="postal-code"
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
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Get Quotes →
            </button>
          </form>
          <p className="text-xs text-blue-600 mt-2">
            Free quotes from local providers • No obligations
          </p>
        </div>
      )}

      {/* Additional Tips */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-bold text-amber-800 mb-2">💡 Pro Tips for Your Project</h4>
        <ul className="text-sm text-amber-700 space-y-1">
          <li>• Consider renting for 7-10 days to avoid rush fees</li>
          <li>• Check if your city requires permits for street placement</li>
          <li>• Don't exceed weight limits to avoid overage charges</li>
          <li>• Sort materials - some items require special disposal</li>
        </ul>
      </div>
    </div>
  );
}