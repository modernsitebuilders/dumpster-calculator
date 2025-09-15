'use client';
import { useState, useEffect } from 'react';
import DumpsterProviderListings from './components/DumpsterProviderListings';
import Link from 'next/link';
import { trackCalculatorUsage } from '../utils/analytics'; // FIXED: Correct path for app/page.js

export default function Home() {
  const [projectType, setProjectType] = useState('');
  const [squareFootage, setSquareFootage] = useState('');
  const [result, setResult] = useState(null);
  const [hasTrackedView, setHasTrackedView] = useState(false);

  // ADD CALCULATOR VIEW TRACKING
  useEffect(() => {
    if (!hasTrackedView) {
      trackCalculatorUsage.calculatorViewed();
      setHasTrackedView(true);
    }
  }, [hasTrackedView]);

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

  // UPDATE PROJECT TYPE HANDLER WITH TRACKING
  const handleProjectTypeChange = (value) => {
    setProjectType(value);
    if (value) {
      trackCalculatorUsage.projectTypeSelected(value);
      trackCalculatorUsage.stepCompleted(1, 'project_type_selected');
    }
  };

  // UPDATE SQUARE FOOTAGE HANDLER WITH TRACKING
  const handleSquareFootageChange = (value) => {
    setSquareFootage(value);
    if (value && value.length >= 2) {
      trackCalculatorUsage.squareFootageEntered(value);
      trackCalculatorUsage.stepCompleted(2, 'square_footage_entered');
    }
  };

  // SCROLL TO PROVIDERS FUNCTION
  const scrollToProviders = () => {
    document.getElementById('providers-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // UPDATE CALCULATE FUNCTION WITH TRACKING
  const calculateSize = () => {
    if (!projectType || !squareFootage) return;
    
    const project = projectTypes[projectType];
    const baseSize = parseInt(squareFootage) * project.factor;
    
    let recommendation;
    let recommendedSize;
    
    if (baseSize < 400) {
      recommendedSize = '10-yard';
      recommendation = { 
        size: 10, 
        description: '10 Yard Dumpster',
        details: 'Perfect for small projects. Holds about 3 pickup truck loads.',
        price: '$250-$450'
      };
    } else if (baseSize < 800) {
      recommendedSize = '20-yard';
      recommendation = { 
        size: 20, 
        description: '20 Yard Dumpster',
        details: 'Most popular size. Holds about 6 pickup truck loads.',
        price: '$300-$500'
      };
    } else if (baseSize < 1200) {
      recommendedSize = '30-yard';
      recommendation = { 
        size: 30, 
        description: '30 Yard Dumpster',
        details: 'Great for large projects. Holds about 9 pickup truck loads.',
        price: '$400-$600'
      };
    } else {
      recommendedSize = '40-yard';
      recommendation = { 
        size: 40, 
        description: '40 Yard Dumpster',
        details: 'Maximum size for major renovations. Holds about 12 pickup truck loads.',
        price: '$500-$750'
      };
    }

    setResult(recommendation);

    // ADD CALCULATION TRACKING
    const calculationResult = {
      recommendedSize: recommendedSize,
      totalVolume: Math.round(baseSize / 27),
      projectType: projectType,
      squareFootage: parseInt(squareFootage)
    };

    trackCalculatorUsage.calculationCompleted(calculationResult);
    trackCalculatorUsage.projectCombination(projectType, recommendedSize, squareFootage);
    trackCalculatorUsage.stepCompleted(3, 'calculation_completed');
  };

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                  <span className="text-blue-200 font-medium"> Free calculator based on industry data.</span>
                </p>
              </div>

              {/* Stats Cards - Clean white background */}
<div className="grid grid-cols-3 gap-4 mb-8">
  <div className="bg-white rounded-lg p-4 text-center shadow-md">
    <div className="text-2xl font-bold text-gray-900">100%</div>
    <div className="text-sm text-gray-700">Free Tool</div>
  </div>
  <div className="bg-white rounded-lg p-4 text-center shadow-md">
    <div className="text-2xl font-bold text-gray-900">30sec</div>
    <div className="text-sm text-gray-700">Get Results</div>
  </div>
  <div className="bg-white rounded-lg p-4 text-center shadow-md">
    <div className="text-2xl font-bold text-gray-900">0</div>
    <div className="text-sm text-gray-700">Email Required</div>
  </div>
</div>

              {/* CTA Button */}
              <div className="mb-6">
                <button 
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                >
                  Calculate My Dumpster Size →
                </button>
              </div>
              
              <div className="text-sm text-blue-200">
                Takes 30 seconds • No signup required • Get instant results
              </div>
            </div>

            {/* Right Column - Benefits Card */}
            <div className="relative">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white border-opacity-30">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Get Your Answer in 30 Seconds
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">No email or signup required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Based on 25,000+ real projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Includes accurate cost estimates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700">Covers all project types</span>
                  </div>
                </div>
              </div>

              {/* FREE Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-sm font-bold">FREE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Calculator with tracking */}
          <div id="calculator" className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="space-y-6">
              {/* Project Type with tracking */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What type of project?
                </label>
                <select
                  value={projectType}
                  onChange={(e) => handleProjectTypeChange(e.target.value)}
                  onFocus={() => trackCalculatorUsage.sectionEngaged('project_type_select')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your project type</option>
                  {Object.entries(projectTypes).map(([key, project]) => (
                    <option key={key} value={key}>
                      {project.name} ({project.avgSize})
                    </option>
                  ))}
                </select>
              </div>

              {/* Square Footage with tracking */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project size (square feet)
                </label>
                <input 
                  type="number"
                  value={squareFootage}
                  onChange={(e) => handleSquareFootageChange(e.target.value)}
                  onFocus={() => trackCalculatorUsage.sectionEngaged('square_footage_input')}
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

            {/* SINGLE Result section with tracking */}
            {result && (
              <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Recommended: {result.description}
                </h2>
                <p className="text-green-700 mb-2">{result.details}</p>
                <p className="text-green-600 font-semibold mb-4">
                  Estimated Cost: {result.price}
                </p>
                
                {/* CTA Buttons */}
                <div className="mt-6 space-y-3">
                  <button 
                    onClick={() => {
                      trackCalculatorUsage.quoteRequested(result.size + '-yard', 'unknown');
                      trackCalculatorUsage.stepCompleted(4, 'quote_requested');
                      scrollToProviders();
                    }}
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

          {/* Provider Listings Section */}
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
      
      {/* Expert Guides Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Dumpster Guides & Local Information
            </h2>
            <p className="text-xl text-gray-600">
              Get professional advice for your specific project and location
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Guides */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Project Guides</h3>
              <p className="text-gray-600 text-sm mb-4">
                Detailed guides for bathroom remodels, kitchen renovations, roofing projects, and more.
              </p>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
                View Renovation Guides →
              </Link>
            </div>

            {/* Size Guides */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Size Guides</h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete breakdowns of 10, 20, 30, and 40-yard dumpsters with real project examples and pricing.
              </p>
              <Link href="/blog/20-yard-dumpster-guide" className="text-blue-600 hover:text-blue-800 font-semibold">
                View Size Guides →
              </Link>
            </div>

            {/* Local Information */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Local Guides</h3>
              <p className="text-gray-600 text-sm mb-4">
                City-specific pricing, permit requirements, and local regulations for 20+ major cities.
              </p>
              <Link href="/dumpster-rental-chicago" className="text-blue-600 hover:text-blue-800 font-semibold">
                View Local Guides →
              </Link>
            </div>
          </div>

          {/* Quick Links to Popular Content */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-center mb-6">Popular Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/blog/bathroom-remodel-dumpster-size" className="block text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                <span className="text-sm font-medium text-gray-700 hover:text-blue-600">Bathroom Remodels</span>
              </Link>
              <Link href="/blog/kitchen-renovation-dumpster-size" className="block text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                <span className="text-sm font-medium text-gray-700 hover:text-blue-600">Kitchen Renovations</span>
              </Link>
              <Link href="/blog/20-yard-dumpster-guide" className="block text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                <span className="text-sm font-medium text-gray-700 hover:text-blue-600">20 Yard Guide</span>
              </Link>
              <Link href="/dumpster-rental-new-york" className="block text-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                <span className="text-sm font-medium text-gray-700 hover:text-blue-600">NYC Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}