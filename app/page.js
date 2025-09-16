'use client';
import React, { useState, useEffect } from 'react';
import { MapPin, FileText, DollarSign, ExternalLink, Calculator, ChevronRight } from 'lucide-react';
import { getCityFromZip, getLocalContent } from '../utils/zipToCityMapping';
import DumpsterProviderListings from './components/DumpsterProviderListings';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import Link from 'next/link';
import { trackCalculatorUsage } from '../utils/analytics';

export default function Home() {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculatorError, setCalculatorError] = useState(null);
  
  // ZIP CODE STATE VARIABLES (keep existing)
  const [zipCode, setZipCode] = useState('');
  const [localContent, setLocalContent] = useState(null);
  const [showLocalContent, setShowLocalContent] = useState(false);

  // Your original projectTypes (keep exactly as-is)
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

  // SCROLL TO PROVIDERS FUNCTION (keep existing)
  const scrollToProviders = () => {
    document.getElementById('providers-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Add this function for scrolling to calculator (from our earlier work)
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator-section');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    trackCalculatorUsage.sectionEngaged('size_guides_button_clicked');
  };
  
  // ZIP CODE HANDLER FUNCTIONS (keep existing)
  const handleZipCodeSubmit = (e) => {
    e.preventDefault();
    if (zipCode.length === 5) {
      const content = getLocalContent(zipCode);
      setLocalContent(content);
      setShowLocalContent(true);
      trackCalculatorUsage.zipCodeSubmitted(zipCode);
    }
  };

  const handleZipCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(value);
    if (value.length !== 5) {
      setShowLocalContent(false);
    }
  };

  // Your original calculateSize function (keep exactly as-is, just handle form data)
  const handleCalculatorSubmit = (formData) => {
    setIsCalculating(true);
    setCalculatorError(null);
    
    const { projectType, squareFootage } = formData;
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

    // ADD CALCULATION TRACKING (keep existing)
    const calculationResult = {
      recommendedSize: recommendedSize,
      totalVolume: Math.round(baseSize / 27),
      projectType: projectType,
      squareFootage: parseInt(squareFootage)
    };
    
    trackCalculatorUsage.calculationCompleted(calculationResult);
    trackCalculatorUsage.projectCombination(projectType, recommendedSize, squareFootage);
    trackCalculatorUsage.stepCompleted(3, 'calculation_completed');

    // Set results for ResultsDisplay component
    setResult({
      recommendedSize: recommendedSize,
      totalVolume: Math.round(baseSize / 27),
      projectType: project.name,
      squareFootage: parseInt(squareFootage)
    });
    
    setIsCalculating(false);
  };

  const handleCalculatorError = (error) => {
    setCalculatorError(error);
  };

  const handleReset = () => {
    setResult(null);
    setIsCalculating(false);
    setCalculatorError(null);
  };

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section (keep exactly as-is) */}
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
                  onClick={() => document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' })}
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
        <div id="calculator-section" className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Error Display */}
          {calculatorError && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-red-700">{calculatorError}</span>
              </div>
            </div>
          )}

          {/* CLEAN COMPONENT USAGE - Just two components */}
          {!result ? (
            <CalculatorForm 
              onCalculate={handleCalculatorSubmit}
              isCalculating={isCalculating}
            />
          ) : (
            <ResultsDisplay 
              result={result}
              onReset={handleReset}
            />
          )}

          {/* Info Section (keep existing) */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8 mt-8">
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

          {/* Provider Listings Section (keep existing) */}
          {result && (
            <div id="providers-section">
              <DumpsterProviderListings 
                dumpsterSize={result.size} 
                projectType={result.projectType}
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Expert Guides Section (keep exactly as-is, just update Size Guides button) */}
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

          {/* Resource Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* Project Guides */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Project Guides</h3>
              <p className="text-gray-600 text-sm mb-4">
                Room-by-room guides for kitchens, bathrooms, basements, and major renovations.
              </p>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
                View Renovation Guides →
              </Link>
            </div>

            {/* Size Guides - UPDATED BUTTON */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Size Guides</h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete breakdowns of 10, 20, 30, and 40-yard dumpsters with real project examples.
              </p>
              <button 
                onClick={scrollToCalculator}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Find My Size
              </button>
            </div>

            {/* Local Information (keep exactly as-is) */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Local Information</h3>
              <p className="text-gray-600 text-sm mb-4">
                Enter your ZIP code to see pricing, permits, and providers in your area.
              </p>
              
              {/* ZIP Code Input */}
              <form onSubmit={handleZipCodeSubmit} className="flex gap-2 max-w-xs mx-auto mb-4">
                <input
                  type="text"
                  value={zipCode}
                  onChange={handleZipCodeChange}
                  placeholder="ZIP code"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-center text-sm"
                  maxLength="5"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg transition text-sm"
                  disabled={zipCode.length !== 5}
                >
                  Find
                </button>
              </form>
              
              <Link href="/local" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                View All Local Guides →
              </Link>
            </div>
          </div>

          {/* Local Content Results (keep exactly as-is) */}
          {showLocalContent && localContent && (
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  📍 Local Information for {localContent.city.name}
                  {localContent.city.state && `, ${localContent.city.state}`}
                </h2>
                <p className="text-gray-600">
                  {localContent.hasLocalContent 
                    ? "Here's what's available in your area:"
                    : "We're expanding to your area soon. Check out these general resources:"
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                
                {/* Local Pricing Guide */}
                {localContent.hasLocalContent && localContent.localGuides.length > 0 && (
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Local Pricing Guide</h3>
                        <p className="text-gray-600 text-sm">Pricing & providers in your city</p>
                      </div>
                    </div>
                    
                    {localContent.localGuides.map((guide, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="font-bold text-lg mb-2">{guide.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                            {guide.category}
                          </span>
                          <span className="text-xs text-gray-500">{guide.readTime}</span>
                        </div>
                      </div>
                    ))}
                    
                    <Link 
                      href={localContent.localGuides[0]?.url}
                      className="block bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition font-semibold mt-4"
                    >
                      View {localContent.city.name} Pricing →
                    </Link>
                  </div>
                )}

                {/* Local Permit Guide */}
                {localContent.hasLocalContent && localContent.permitGuides.length > 0 && (
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                    <div className="flex items-center mb-4">
                      <svg className="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Permit Requirements</h3>
                        <p className="text-gray-600 text-sm">Local regulations & applications</p>
                      </div>
                    </div>
                    
                    {localContent.permitGuides.map((guide, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="font-bold text-lg mb-2">{guide.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs px-3 py-1 bg-red-100 text-red-800 rounded-full font-semibold">
                            {guide.category}
                          </span>
                          <span className="text-xs text-gray-500">{guide.readTime}</span>
                        </div>
                      </div>
                    ))}
                    
                    <Link 
                      href={localContent.permitGuides[0]?.url}
                      className="block bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition font-semibold mt-4"
                    >
                      View {localContent.city.name} Permits →
                    </Link>
                  </div>
                )}

                {/* No Local Content Available */}
                {!localContent.hasLocalContent && (
                  <div className="md:col-span-2">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                      <h3 className="text-xl font-bold text-yellow-800 mb-2">
                        Coming to {localContent.city.name} Soon!
                      </h3>
                      <p className="text-yellow-700 mb-4">
                        We're working on adding specific content for your area. Check out our general guides:
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/blog/dumpster-rental-cost-guide" className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition text-sm font-semibold">
                          General Pricing Guide
                        </Link>
                        <Link href="/blog/do-i-need-dumpster-permit" className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition text-sm font-semibold">
                          Permit Requirements
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Popular Resources (keep existing) */}
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