import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, ExternalLink, CheckCircle } from 'lucide-react';
import EmailCapture from './EmailCapture';

const DumpsterProviderListings = ({ dumpsterSize, projectType }) => {
  const [providers, setProviders] = useState([]);
  const [userZip, setUserZip] = useState('');

  // Mock provider data - in production, this would come from an API
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
    // Simulate API call
    setProviders(mockProviders);
  }, [dumpsterSize]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
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
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Search
          </button>
        </div>

        {/* Provider Listings */}
        <div className="space-y-4">
          {providers.map((provider) => (
            <div 
              key={provider.id} 
              className={`border rounded-lg p-5 hover:shadow-lg transition ${
                provider.sponsored ? 'border-blue-400 bg-blue-50/30' : 'border-gray-200'
              }`}
            >
              {provider.sponsored && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  Sponsored
                </span>
              )}
              
              <div className="flex justify-between items-start mt-2">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{provider.name}</h3>
                  
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 font-medium">{provider.rating}</span>
                      <span className="text-gray-500 ml-1">({provider.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {provider.features.map((feature, idx) => (
                      <span key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-right ml-4">
                  <div className="text-2xl font-bold text-green-600">{provider.price}</div>
                  <div className="text-sm text-gray-500">for {dumpsterSize || '10'} yard</div>
                  <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <p className="font-semibold mb-1">Affiliate Disclosure:</p>
          <p>
            We may earn a commission when you contact providers through our links. 
            This does not affect the price you pay. Sponsored listings are clearly marked.
          </p>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Helpful Resources</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="#" className="p-4 border rounded-lg hover:shadow-md transition block">
            <h4 className="font-semibold text-blue-600 flex items-center gap-2">
              Dumpster Rental Guide
              <ExternalLink className="w-4 h-4" />
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Complete guide to renting, loading, and permits
            </p>
          </a>
          
          <a href="#" className="p-4 border rounded-lg hover:shadow-md transition block">
            <h4 className="font-semibold text-blue-600 flex items-center gap-2">
              Waste Calculator
              <ExternalLink className="w-4 h-4" />
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Estimate weight and prohibited items list
            </p>
          </a>
          
          <a href="#" className="p-4 border rounded-lg hover:shadow-md transition block">
            <h4 className="font-semibold text-blue-600 flex items-center gap-2">
              Local Regulations
              <ExternalLink className="w-4 h-4" />
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Permit requirements and placement rules
            </p>
          </a>
          
          <a href="#" className="p-4 border rounded-lg hover:shadow-md transition block">
            <h4 className="font-semibold text-blue-600 flex items-center gap-2">
              Cost Estimator
              <ExternalLink className="w-4 h-4" />
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Compare prices and save money tips
            </p>
          </a>
        </div>
      </div>

      {/* Email Capture for Remarketing */}
<EmailCapture source="provider-listings" />
    </div>
  );
};

export default DumpsterProviderListings;