// app/local/guides/north-carolina/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Sun, Building2 } from 'lucide-react';

export const metadata = {
  title: "North Carolina Dumpster Rental Guide | Charlotte Metro Area",
  description: "Complete North Carolina dumpster rental guide covering Charlotte and surrounding areas. Banking hub growth, competitive pricing, and trusted providers.",
  keywords: "North Carolina dumpster rental, Charlotte dumpster rental, banking district dumpsters"
};

const northCarolinaCities = [
  {
    name: 'Charlotte',
    slug: 'charlotte',
    priceRange: '$280-$480',
    providers: 11,
    image: '/images/cities/charlotte-skyline.webp',
    neighborhoods: ['Uptown', 'South End', 'NoDa', 'Dilworth', 'Myers Park', 'Ballantyne'],
    specialNotes: 'Rapidly growing financial center with extensive suburban development. Strong competition keeps prices competitive.',
    permitRequired: true,
    permitCost: '$30-$100',
    processingTime: '3-7 days'
  }
];

const stateFeatures = [
  {
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    title: 'Banking Hub Growth',
    description: 'Second-largest financial center in US drives commercial and residential construction. High-rise and suburban demand.'
  },
  {
    icon: <Sun className="w-6 h-6 text-yellow-600" />,
    title: 'Year-Round Season',
    description: 'Mild climate allows construction projects throughout the year. Occasional severe weather requires flexibility.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Competitive Pricing',
    description: 'Below-average costs compared to major metros. Strong provider competition benefits customers.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Rapid Expansion',
    description: 'Fast-growing population and business relocations create consistent demand for waste services.'
  }
];

export default function NorthCarolinaStatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/local/guides" className="flex items-center hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to State Guides
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">North Carolina</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">NC</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                North Carolina Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Charlotte metro • 11 providers • Financial hub growth
              </p>
            </div>
          </div>
        </div>

        {/* North Carolina State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            North Carolina Market Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stateFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <h3 className="font-semibold text-gray-900 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Charlotte Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Charlotte Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {northCarolinaCities.map((city, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                
                {/* City Image */}
                <div className="relative h-48">
                  <Image
                    src={city.image}
                    alt={`${city.name} skyline`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{city.name}</h3>
                    <p className="text-blue-100">Serving {city.providers} local providers</p>
                  </div>
                </div>

                {/* City Info */}
                <div className="p-8">
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-green-600">
                      <DollarSign className="w-6 h-6 mr-2" />
                      <span className="font-bold text-xl">{city.priceRange}</span>
                      <span className="text-sm text-green-600 ml-2">(Competitive)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="text-lg">{city.providers} providers</span>
                    </div>
                  </div>

                  {/* Neighborhoods */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Metro Areas:</h4>
                    <p className="text-gray-600">
                      {city.neighborhoods.join(', ')}
                    </p>
                  </div>

                  {/* Financial Hub Growth */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-400">
                    <div className="flex items-center mb-2">
                      <Building2 className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-bold text-blue-800">Financial Center Expansion</span>
                    </div>
                    <p className="text-blue-700 text-sm">
                      Charlotte is the second-largest banking center in the US. Corporate relocations and high-rise construction 
                      create steady demand for both commercial and residential waste services.
                    </p>
                  </div>

                  {/* Permit Info */}
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-semibold text-green-800">Charlotte Permits</span>
                    </div>
                    <p className="text-green-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-green-600 text-sm">
                      Reasonable permit costs and efficient processing. Business-friendly environment.
                    </p>
                  </div>

                  {/* Growth Advantage */}
                  <div className="bg-purple-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-purple-800 mb-2">📈 Market Growth</h4>
                    <p className="text-purple-700 text-sm">
                      Rapid population and business growth means expanding service areas and competitive provider options. 
                      New developments throughout metro area.
                    </p>
                  </div>

                  {/* Special Notes */}
                  <p className="text-gray-600 mb-6">
                    <strong>Market Benefits:</strong> {city.specialNotes}
                  </p>

                  {/* CTA Button */}
                  <Link 
                    href={`/dumpster-rental-${city.slug}`}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors font-semibold text-center text-lg"
                  >
                    View Charlotte Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* North Carolina-Specific Tips */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            North Carolina Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏢 Business Growth</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Take advantage of competitive pricing</li>
                <li>• Multiple providers create options</li>
                <li>• Consider suburban placement flexibility</li>
                <li>• Ask about corporate account discounts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🌤️ Climate Benefits</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Mild winters allow year-round projects</li>
                <li>• Plan around occasional severe weather</li>
                <li>• Summer heat requires odor management</li>
                <li>• Hurricane season affects coastal areas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Dumpster Size?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our calculator to get personalized recommendations for your North Carolina project
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Calculate My Size →
            </Link>
            <Link 
              href="/local/guides"
              className="bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse All States
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}