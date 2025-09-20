import React from 'react';
import Link from 'next/link';
import { MapPin, Users, DollarSign, ArrowRight, Clock, FileText } from 'lucide-react';

const StateGuide = () => {
  const stateData = [
    {
      name: 'California',
      cities: ['Los Angeles', 'San Diego', 'San Francisco', 'San Jose'],
      cityCount: 4,
      avgPrice: '$380-$580',
      providers: 44,
      slug: 'california',
      abbreviation: 'CA'
    },
    {
      name: 'Texas', 
      cities: ['Houston', 'Dallas', 'San Antonio', 'Austin', 'Fort Worth'],
      cityCount: 5,
      avgPrice: '$280-$490',
      providers: 50,
      slug: 'texas',
      abbreviation: 'TX'
    },
    {
      name: 'Florida',
      cities: ['Miami', 'Tampa', 'Jacksonville', 'Orlando'],
      cityCount: 4,
      avgPrice: '$315-$520',
      providers: 42,
      slug: 'florida',
      abbreviation: 'FL'
    },
    {
      name: 'New York',
      cities: ['New York City'],
      cityCount: 1,
      avgPrice: '$450-$750',
      providers: 18,
      slug: 'new-york-state',
      abbreviation: 'NY'
    },
    {
      name: 'Illinois',
      cities: ['Chicago'],
      cityCount: 1,
      avgPrice: '$325-$525',
      providers: 15,
      slug: 'illinois',
      abbreviation: 'IL'
    },
    {
      name: 'North Carolina',
      cities: ['Charlotte', 'Raleigh'],
      cityCount: 2,
      avgPrice: '$285-$485',
      providers: 20,
      slug: 'north-carolina',
      abbreviation: 'NC'
    },
    {
      name: 'Tennessee',
      cities: ['Nashville', 'Memphis'],
      cityCount: 2,
      avgPrice: '$285-$485',
      providers: 20,
      slug: 'tennessee',
      abbreviation: 'TN'
    },
    {
      name: 'Georgia',
      cities: ['Atlanta'],
      cityCount: 1,
      avgPrice: '$300-$500',
      providers: 14,
      slug: 'georgia',
      abbreviation: 'GA'
    },
    {
      name: 'Washington',
      cities: ['Seattle'],
      cityCount: 1,
      avgPrice: '$380-$580',
      providers: 11,
      slug: 'washington',
      abbreviation: 'WA'
    },
    {
      name: 'Colorado',
      cities: ['Denver'],
      cityCount: 1,
      avgPrice: '$310-$510',
      providers: 10,
      slug: 'colorado',
      abbreviation: 'CO'
    },
    {
      name: 'Massachusetts',
      cities: ['Boston'],
      cityCount: 1,
      avgPrice: '$400-$600',
      providers: 13,
      slug: 'massachusetts',
      abbreviation: 'MA'
    },
    {
      name: 'Pennsylvania',
      cities: ['Philadelphia'],
      cityCount: 1,
      avgPrice: '$320-$520',
      providers: 16,
      slug: 'pennsylvania',
      abbreviation: 'PA'
    },
    {
      name: 'Arizona',
      cities: ['Phoenix'],
      cityCount: 1,
      avgPrice: '$295-$495',
      providers: 12,
      slug: 'arizona',
      abbreviation: 'AZ'
    },
    {
      name: 'Michigan',
      cities: ['Detroit'],
      cityCount: 1,
      avgPrice: '$290-$490',
      providers: 9,
      slug: 'michigan',
      abbreviation: 'MI'
    },
    {
      name: 'Oregon',
      cities: ['Portland'],
      cityCount: 1,
      avgPrice: '$330-$530',
      providers: 8,
      slug: 'oregon',
      abbreviation: 'OR'
    },
    {
      name: 'Washington DC',
      cities: ['Washington DC'],
      cityCount: 1,
      avgPrice: '$400-$650',
      providers: 14,
      slug: 'washington-dc',
      abbreviation: 'DC'
    },
    {
      name: 'Virginia',
      cities: ['Virginia Beach'],
      cityCount: 1,
      avgPrice: '$320-$520',
      providers: 12,
      slug: 'virginia',
      abbreviation: 'VA'
    },
    {
      name: 'Ohio',
      cities: ['Columbus'],
      cityCount: 1,
      avgPrice: '$285-$485',
      providers: 12,
      slug: 'ohio',
      abbreviation: 'OH'
    },
    {
      name: 'Missouri',
      cities: ['Kansas City'],
      cityCount: 1,
      avgPrice: '$280-$480',
      providers: 10,
      slug: 'missouri',
      abbreviation: 'MO'
    },
    {
      name: 'Nevada',
      cities: ['Las Vegas'],
      cityCount: 1,
      avgPrice: '$310-$510',
      providers: 14,
      slug: 'nevada',
      abbreviation: 'NV'
    },
    {
      name: 'Kentucky',
      cities: ['Louisville'],
      cityCount: 1,
      avgPrice: '$275-$475',
      providers: 9,
      slug: 'kentucky',
      abbreviation: 'KY'
    },
    {
      name: 'Oklahoma',
      cities: ['Oklahoma City'],
      cityCount: 1,
      avgPrice: '$265-$465',
      providers: 9,
      slug: 'oklahoma',
      abbreviation: 'OK'
    },
    {
      name: 'Nebraska',
      cities: ['Omaha'],
      cityCount: 1,
      avgPrice: '$275-$475',
      providers: 8,
      slug: 'nebraska',
      abbreviation: 'NE'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Local Dumpster Rental Guides by State
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Select your state to find pricing and providers in your area
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              23 States Covered
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              350+ Providers
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Updated Weekly
            </div>
          </div>
        </div>

        {/* State Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stateData.map((state, index) => (
            <Link 
              key={index}
              href={`/local/guides/${state.slug}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 p-6 cursor-pointer group hover:border-blue-300 transform hover:-translate-y-1">
                {/* State Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                      <span className="text-blue-600 font-bold text-lg">{state.abbreviation}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{state.name}</h3>
                      <p className="text-sm text-gray-500">{state.cityCount} {state.cityCount === 1 ? 'city' : 'cities'}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                {/* Cities List */}
                <div className="mb-4">
                  <p className="text-gray-700 text-sm">
                    {state.cities.join(', ')}
                  </p>
                </div>

                {/* Stats Row */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span className="font-semibold">Avg: {state.avgPrice}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{state.providers} providers</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="w-full bg-blue-600 group-hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium text-center">
                  View {state.name} Guides
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          
          {/* Pricing Info */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <DollarSign className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Pricing Information</h2>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Prices shown are for 10-yard dumpsters</li>
              <li>• Includes 7-day rental and pickup</li>
              <li>• Weight limits typically 2-4 tons</li>
              <li>• Final pricing depends on location and materials</li>
            </ul>
          </div>

          {/* Permit Info */}
          <div className="bg-yellow-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-yellow-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Permit Requirements</h2>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Required for street/sidewalk placement</li>
              <li>• Not needed for private driveways</li>
              <li>• Costs vary $25-$500+ by city</li>
              <li>• Processing time: 1-15 business days</li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See Your State?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our calculator to get recommendations for any location in the US
          </p>
          <Link href="/" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Use Dumpster Calculator →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StateGuide;