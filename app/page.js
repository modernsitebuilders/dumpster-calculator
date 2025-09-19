'use client';
import React, { useState } from 'react';
import { getCityFromZip, getLocalContent } from '../utils/zipToCityMapping';
import Link from 'next/link';
import { trackCalculatorUsage } from '../utils/analytics';
import dynamic from 'next/dynamic';

const DumpsterCalculatorWithMaterials = dynamic(
  () => import('@/calculator-v2/components/calculator/CalculatorV2.jsx')
    .catch(() => {
      // Return a fallback component with display name
      const FallbackComponent = () => (
        <div className="text-center p-8 bg-yellow-50 rounded-lg">
          <p className="text-yellow-800">Calculator temporarily unavailable. Please refresh the page.</p>
        </div>
      );
      FallbackComponent.displayName = 'CalculatorFallback';
      return FallbackComponent;
    }),
  { 
    loading: () => <div>Loading calculator...</div>,
    ssr: false 
  }
);

export default function Home() {
  const [zipCode, setZipCode] = useState('');
  const [localContent, setLocalContent] = useState(null);
  const [showLocalContent, setShowLocalContent] = useState(false);

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator-section');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    trackCalculatorUsage.sectionEngaged('hero_button_clicked');
  };

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

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white overflow-hidden">
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
                  ✔ Advanced Calculator • ✔ Weight Calculations • ✔ No Overage Fees
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Find the Perfect 
                  <span className="text-yellow-300"> Dumpster Size</span> for Your Project
                </h1>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Smart calculations that consider material weight, not just volume.
                  <span className="text-blue-200 font-medium"> Avoid costly overage fees with accurate recommendations.</span>
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-700">Free Tool</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-gray-900">Weight</div>
                  <div className="text-sm text-gray-700">Smart™</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-md">
                  <div className="text-2xl font-bold text-gray-900">DOT</div>
                  <div className="text-sm text-gray-700">Compliant</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <button 
                  onClick={scrollToCalculator}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                >
                  Calculate My Dumpster Size →
                </button>
              </div>
              
              <div className="text-sm text-blue-200">
                NEW: Material weight calculations prevent overage fees
              </div>
            </div>

            {/* Right Column - Benefits Card */}
            <div className="relative">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white border-opacity-30">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Why Our Calculator is Different
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✔</span>
                    </span>
                    <span className="text-gray-700 font-medium">Considers material weight, not just size</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✔</span>
                    </span>
                    <span className="text-gray-700 font-medium">Prevents costly weight overage fees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✔</span>
                    </span>
                    <span className="text-gray-700 font-medium">DOT regulation compliant recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✔</span>
                    </span>
                    <span className="text-gray-700 font-medium">Warns when multiple dumpsters needed</span>
                  </div>
                </div>
                
                {/* Warning Badge */}
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700 text-center font-medium">
                    ⚠️ Standard calculators can result in $500+ overage fees for heavy materials
                  </p>
                </div>
              </div>

              {/* NEW Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-black p-3 rounded-full shadow-lg">
                <span className="text-sm font-bold">NEW!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Calculator Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div id="calculator-section" className="container mx-auto px-4 py-12 max-w-7xl">
          
          {/* Beta Notice */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                <div>
                  <p className="text-sm font-semibold text-blue-900">
                    Advanced Material-Weight Calculator
                  </p>
                  <p className="text-xs text-blue-700">
                    Our new calculator considers both volume AND weight to prevent overage fees
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* New Materials Calculator */}
          <DumpsterCalculatorWithMaterials />
        </div>
      </div>

      {/* Common Sizes Explained Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Understanding Dumpster Sizes & Weight Limits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">10 Yard Dumpster</h3>
              <p className="text-gray-600 mb-2">Best for: Small bathroom remodels, garage cleanouts</p>
              <p className="text-sm text-red-600 font-medium">⚠️ Weight Limit: 2-4 tons (watch for tile/concrete)</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">20 Yard Dumpster</h3>
              <p className="text-gray-600 mb-2">Best for: Large bathroom, kitchen remodels, roofing</p>
              <p className="text-sm text-red-600 font-medium">⚠️ Weight Limit: 3-4 tons (shingles add up fast)</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">30 Yard Dumpster</h3>
              <p className="text-gray-600 mb-2">Best for: Large home remodels, new construction</p>
              <p className="text-sm text-red-600 font-medium">⚠️ Weight Limit: 4-5 tons (still applies!)</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">40 Yard Dumpster</h3>
              <p className="text-gray-600 mb-2">Best for: Commercial cleanouts (light materials only)</p>
              <p className="text-sm text-red-600 font-medium">⚠️ Weight Limit: 5-6 tons (never for concrete/dirt)</p>
            </div>
          </div>

          {/* New Weight Warning Box */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-yellow-900 mb-2">
              Why Weight Matters More Than Size
            </h3>
            <p className="text-yellow-800">
              A 40-yard dumpster filled with concrete will hit weight limits at only 25% full. 
              Our calculator prevents these expensive mistakes by considering your specific materials.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Guides Section */}
      <div className="bg-gray-50 py-16">
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
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Project Guides</h3>
              <p className="text-gray-600 text-sm mb-4">
                Room-by-room guides with material-specific recommendations
              </p>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
                View Project Guides →
              </Link>
            </div>

            {/* Weight Guides */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  </div>
  <h3 className="text-lg font-semibold mb-3">Weight Limits Guide</h3>
  <p className="text-gray-600 text-sm mb-4">
    Learn how different materials affect weight limits and costs
  </p>
  <Link href="/blog/weight-limits-overage-fees" className="text-blue-600 hover:text-blue-800 font-semibold">
    Understanding Weight →
  </Link>
</div>

            {/* Local Information */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Local Information</h3>
              <p className="text-gray-600 text-sm mb-4">
                Pricing, permits, and providers in your area
              </p>
  
  {/* Improved ZIP Code Form */}
  <form onSubmit={handleZipCodeSubmit} className="mb-4">
  <div className="flex flex-col gap-2 max-w-xs mx-auto">
    <input
      type="text"
      id="zipcode-input"
      name="zipcode"
      value={zipCode}
      onChange={handleZipCodeChange}
      placeholder="Enter ZIP code"
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 text-center font-medium"
      maxLength="5"
      aria-label="Enter ZIP code"
      pattern="[0-9]{5}"
      inputMode="numeric"
    />
    <button
      type="submit"
      className={`w-full px-6 py-2.5 rounded-lg font-semibold transition-all ${
        zipCode.length === 5 
          ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5' 
          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
      }`}
      disabled={zipCode.length !== 5}
    >
      Find
    </button>
  </div>
  
  {/* Optional: Add a helper text */}
  {zipCode.length > 0 && zipCode.length < 5 && (
    <p className="text-xs text-gray-500 mt-2 text-center">
      Enter {5 - zipCode.length} more digit{5 - zipCode.length !== 1 ? 's' : ''}
    </p>
  )}
</form>
</div>
          </div>
{showLocalContent && localContent && (
  <div className="mb-12">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Local Information for {localContent.city.name}
        {localContent.city.state && `, ${localContent.city.state}`}
      </h2>
    </div>
    
    {/* Add this section to display the local guides */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Local Pricing Guide */}
      {localContent.localGuides && localContent.localGuides.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Local Pricing & Providers</h3>
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
              <Link 
                href={guide.url}
                className="block mt-3 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                View Guide →
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Permit Guide (if exists) */}
      {localContent.permitGuides && localContent.permitGuides.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Permit Requirements</h3>
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
              <Link 
                href={guide.url}
                className="block mt-3 bg-red-600 text-white text-center py-2 rounded-lg hover:bg-red-700 transition font-semibold"
              >
                View Permit Guide →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)}

          {/* Popular Resources */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-center mb-6">Popular Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  <Link href="/blog/concrete-disposal-guide" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <h4 className="font-semibold text-gray-900">Concrete Disposal</h4>
  </Link>
  
  <Link href="/blog/roofing-shingle-weight-calculator" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <h4 className="font-semibold text-gray-900">Shingle Weight Guide</h4>
  </Link>
  
  <Link href="/blog/how-to-avoid-dumpster-overage-fees" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <h4 className="font-semibold text-gray-900">Avoid Overage Fees</h4>
  </Link>
  
  <Link href="/blog/dumpster-weight-vs-volume" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <h4 className="font-semibold text-gray-900">Weight vs Volume</h4>
  </Link>
</div>
          </div>
        </div>
      </div>
    </main>
  );
}