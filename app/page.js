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
    <main className="min-h-screen">
      {/* Enhanced Hero Section - Full Width */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  ✓ Free Calculator • ✓ Instant Results • ✓ No Email Required
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Find the Perfect 
                  <span className="text-yellow-300"> Dumpster Size</span> for Your Project
                </h1>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Get instant, accurate recommendations for any home renovation, cleanout, or construction project. 
                  Used by over <strong className="text-white">25,000+ homeowners</strong> nationwide.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">25K+</div>
                  <div className="text-sm text-blue-100">Projects Sized</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">4.9★</div>
                  <div className="text-sm text-blue-100">User Rating</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300">100%</div>
                  <div className="text-sm text-blue-100">Free Tool</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full lg:w-auto bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition duration-200 text-lg shadow-lg"
                >
                  Calculate My Dumpster Size →
                </button>
                <p className="text-sm text-blue-200">
                  Takes 30 seconds • No signup required • Get instant results
                </p>
              </div>
            </div>

            {/* Right Column - White Background */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Get Your Answer in 30 Seconds</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">No email or signup required</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Based on 25,000+ real projects</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Includes accurate cost estimates</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">Covers all project types</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-sm font-bold">FREE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </div>

      {/* Main Content - Contained */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Calculator */}
          <div id="calculator" className="bg-white rounded-lg shadow-lg p-8 mb-8">
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
      </div>
    </main>
  );
}