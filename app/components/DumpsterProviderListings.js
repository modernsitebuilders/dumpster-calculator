// Update your app/components/DumpsterProviderListings.js

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, ExternalLink, CheckCircle } from 'lucide-react';
import EmailCapture from './EmailCapture';

const DumpsterProviderListings = ({ dumpsterSize, projectType }) => {
  const [providers, setProviders] = useState([]);
  const [userZip, setUserZip] = useState('');

  // Mock provider data - for placeholder only
  const mockProviders = [
    {
      id: 1,
      name: "Quick Disposal Inc",
      price: "$385",
      rating: 4.8,
      reviews: 127,
      phone: "1-800-DUMPSTER",
      features: ["Same Day Delivery", "No Hidden Fees", "14 Day Rental"],
      sponsored: true
    },
    {
      id: 2,
      name: "Green Waste Solutions",
      price: "$360",
      rating: 4.6,
      reviews: 89,
      phone: "1-888-WASTE-GO",
      features: ["Eco-Friendly", "Price Match", "7 Day Rental"],
      sponsored: true
    },
    {
      id: 3,
      name: "Local Haulers LLC",
      price: "$399",
      rating: 4.5,
      reviews: 45,
      phone: "1-877-HAULERS",
      features: ["Family Owned", "Flexible Terms", "Free Consultation"],
      sponsored: false
    }
  ];

  useEffect(() => {
    setProviders(mockProviders);
  }, [dumpsterSize]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 relative">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center z-10 rounded-lg">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Provider Directory Coming Soon</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-md">
            We're partnering with verified local dumpster companies to bring you the best prices and service.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>In the meantime:</strong> Use our calculator results to contact local providers directly. 
              Search "[your city] dumpster rental" to find companies in your area.
            </p>
          </div>
          <div className="space-y-2 text-sm text-gray-500">
            <p>📧 Want to be notified when we launch?</p>
            <p>Sign up for our newsletter below</p>
          </div>
        </div>
      </div>

      {/* Placeholder Content (grayed out behind overlay) */}
      <div className="opacity-20">
        {/* Local Provider Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Find Local Dumpster Providers</h2>
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Enter ZIP code"
              value={userZip}
              onChange={(e) => setUserZip(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Placeholder Provider Listings */}
          <div className="space-y-4">
            {providers.map((provider) => (
              <div 
                key={provider.id} 
                className="border rounded-lg p-5 bg-gray-50"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    {provider.sponsored && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mb-2 inline-block">
                        Sponsored
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-400 mb-1">{provider.name}</h3>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                        <span className="text-sm text-gray-400">{provider.rating} ({provider.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4 text-gray-300" />
                        <span className="text-sm text-gray-400">{provider.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-400 mb-1">{provider.price}</div>
                    <div className="text-sm text-gray-400">for {dumpsterSize} yard</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {provider.features.map((feature, index) => (
                    <span key={index} className="flex items-center gap-1 text-xs bg-gray-200 text-gray-400 px-2 py-1 rounded">
                      <CheckCircle className="w-3 h-3" />
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg font-semibold" disabled>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer - Still Important */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-400 mb-2">Affiliate Disclosure:</h3>
          <p className="text-sm text-gray-400">
            We may earn a commission when you contact providers through our links. This does not affect the price you pay. 
            Sponsored listings are clearly marked.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DumpsterProviderListings;