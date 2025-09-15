'use client';
import { useState } from 'react';
import DumpsterProviderListings from './components/DumpsterProviderListings';

export default function Home() {
  const [projectType, setProjectType] = useState('');
  const [squareFootage, setSquareFootage] = useState('');
  const [result, setResult] = useState(null);

  const projectTypes = {
    'bathroom': { factor: 0.5, name: 'Bathroom Remodel', avgSize: '40-100 sq ft' },
    'kitchen': { factor: 0.7, name: 'Kitchen Remodel', avgSize: '150-250 sq ft' },
    'roof': { factor: 1.2, name: 'Roof Replacement', avgSize: '1500-3000 sq ft' },
    'garage': { factor: 0.8, name: 'Garage Cleanout', avgSize: '400-600 sq ft' },
    'basement': { factor: 1.0, name: 'Basement Cleanout', avgSize: '800-1500 sq ft' },
    'yard': { factor: 0.6, name: 'Yard Waste', avgSize: 'Varies' },
    'construction': { factor: 1.5, name: 'Construction Debris', avgSize: 'Varies' },
    'whole-house': { factor: 2.0, name: 'Whole House Cleanout', avgSize: '1500-2500 sq ft' }
  };

  const calculateSize = () => {
    if (!projectType || !squareFootage) return;
    
    const project = projectTypes[projectType];
    const baseSize = parseInt(squareFootage) * project.factor;
    
    let recommendation;
    if (baseSize < 400) {
      recommendation = { 
        size: 10, 
        description: '10 Yard Dumpster',
        details: 'Perfect for small projects. Holds about 3 pickup truck loads.',
        price: '$250-$450'
      };
    } else if (baseSize < 800) {
      recommendation = { 
        size: 20, 
        description: '20 Yard Dumpster',
        details: 'Most popular size. Holds about 6 pickup truck loads.',
        price: '$300-$500'
      };
    } else if (baseSize < 1200) {
      recommendation = { 
        size: 30, 
        description: '30 Yard Dumpster',
        details: 'Great for large projects. Holds about 9 pickup truck loads.',
        price: '$400-$600'
      };
    } else {
      recommendation = { 
        size: 40, 
        description: '40 Yard Dumpster',
        details: 'Maximum size for major renovations. Holds about 12 pickup truck loads.',
        price: '$500-$750'
      };
    }
    
    setResult(recommendation);
  };

  const scrollToProviders = () => {
    const providersSection = document.getElementById('providers-section');
    if (providersSection) {
      providersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Size Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Find the right dumpster size for your project in 10 seconds
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-6">
            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What type of project?
              </label>
              <select 
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your project type...</option>
                {Object.entries(projectTypes).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.name} (typically {value.avgSize})
                  </option>
                ))}
              </select>
            </div>

            {/* Square Footage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project size (square feet)
              </label>
              <input 
                type="number"
                value={squareFootage}
                onChange={(e) => setSquareFootage(e.target.value)}
                placeholder="Enter square footage"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Tip: Multiply length × width to get square feet
              </p>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateSize}
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Calculate Dumpster Size
            </button>
          </div>

          {/* Result */}
          {result && (
            <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                Recommended: {result.description}
              </h2>
              <p className="text-gray-700 mb-2">{result.details}</p>
              <p className="text-lg font-semibold text-gray-900">
                Estimated Cost: {result.price}
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-6 space-y-3">
                <button 
                  onClick={scrollToProviders}
                  className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Get Free Quotes from Local Providers
                </button>
                <p className="text-sm text-gray-500 text-center">
                  We will connect you with 3 local companies for the best price
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Dumpster Sizes Explained
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">10 Yard Dumpster</h3>
              <p className="text-gray-600">Best for: Small bathroom remodels, garage cleanouts, small deck removal</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">20 Yard Dumpster</h3>
              <p className="text-gray-600">Best for: Large bathroom remodel, small kitchen remodel, flooring removal</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">30 Yard Dumpster</h3>
              <p className="text-gray-600">Best for: New construction, large home remodel, window replacement</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">40 Yard Dumpster</h3>
              <p className="text-gray-600">Best for: Commercial cleanouts, large construction projects, demolition</p>
            </div>
          </div>
        </div>

        {/* Provider Listings Section - Only show after calculation */}
        {result && (
          <div id="providers-section">
            <DumpsterProviderListings 
              dumpsterSize={result.size} 
              projectType={projectTypes[projectType]?.name}
            />
          </div>
        )}
      </div>
    </main>
  );
}