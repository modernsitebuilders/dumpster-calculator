// Replace your entire app/components/DumpsterProviderListings.js

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, ExternalLink, CheckCircle } from 'lucide-react';

const DumpsterProviderListings = ({ dumpsterSize, projectType }) => {
  const [userZip, setUserZip] = useState('');

  return (
    <div className="w-full max-w-4xl mx-auto p-6 relative">
      {/* Diagonal Coming Soon Banner */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-10">
        <div className="absolute top-8 -right-12 bg-yellow-400 text-gray-800 px-16 py-2 rotate-45 shadow-lg border-2 border-yellow-500">
          <span className="font-bold text-sm">DEMO - COMING SOON</span>
        </div>
      </div>

      {/* Provider Interface Preview */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 opacity-75">
        <h2 className="text-2xl font-bold mb-4 text-gray-600">Find Local Dumpster Providers</h2>
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter ZIP code"
            value={userZip}
            onChange={(e) => setUserZip(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg bg-gray-50 text-gray-500"
            maxLength="5"
            disabled
          />
          <button 
            className="px-6 py-2 bg-gray-400 text-white rounded-lg flex items-center gap-2"
            disabled
          >
            <MapPin className="w-4 h-4" />
            Search
          </button>
        </div>

        {/* Wireframe Provider Listings */}
        <div className="space-y-4">
          {/* Provider 1 */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 bg-gray-50">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mb-2 inline-block border">
                  Sponsored
                </span>
                <div className="bg-gray-200 h-6 w-48 rounded mb-2"></div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                    <div className="bg-gray-200 h-4 w-24 rounded"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4 text-gray-300" />
                    <div className="bg-gray-200 h-4 w-32 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-gray-200 h-8 w-16 rounded mb-1"></div>
                <div className="text-sm text-gray-400">for {dumpsterSize} yard</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 h-6 w-24 rounded"></span>
              <span className="bg-gray-200 h-6 w-20 rounded"></span>
              <span className="bg-gray-200 h-6 w-28 rounded"></span>
            </div>
            
            <div className="bg-gray-300 h-10 w-full rounded"></div>
          </div>

          {/* Provider 2 */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 bg-gray-50">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded mb-2 inline-block border">
                  Sponsored
                </span>
                <div className="bg-gray-200 h-6 w-44 rounded mb-2"></div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                    <div className="bg-gray-200 h-4 w-20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4 text-gray-300" />
                    <div className="bg-gray-200 h-4 w-28 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-gray-200 h-8 w-16 rounded mb-1"></div>
                <div className="text-sm text-gray-400">for {dumpsterSize} yard</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 h-6 w-20 rounded"></span>
              <span className="bg-gray-200 h-6 w-24 rounded"></span>
              <span className="bg-gray-200 h-6 w-16 rounded"></span>
            </div>
            
            <div className="bg-gray-300 h-10 w-full rounded"></div>
          </div>

          {/* Provider 3 */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 bg-gray-50">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="bg-gray-200 h-6 w-40 rounded mb-2"></div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                    <div className="bg-gray-200 h-4 w-20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4 text-gray-300" />
                    <div className="bg-gray-200 h-4 w-32 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-gray-200 h-8 w-16 rounded mb-1"></div>
                <div className="text-sm text-gray-400">for {dumpsterSize} yard</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 h-6 w-28 rounded"></span>
              <span className="bg-gray-200 h-6 w-24 rounded"></span>
              <span className="bg-gray-200 h-6 w-20 rounded"></span>
            </div>
            
            <div className="bg-gray-300 h-10 w-full rounded"></div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 rounded-lg p-4 opacity-75">
        <h3 className="font-semibold text-gray-600 mb-2">Preview: Provider Directory Interface</h3>
        <p className="text-sm text-gray-600">
          This shows how our provider directory will work once launched. We're currently partnering with verified local companies to bring you the best prices and service.
        </p>
      </div>
    </div>
  );
};

export default DumpsterProviderListings;