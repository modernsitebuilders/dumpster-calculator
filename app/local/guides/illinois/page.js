// app/local/guides/illinois/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Wind } from 'lucide-react';

export const metadata = {
  title: "Illinois Dumpster Rental Guide | Chicago Metro Area",
  description: "Complete Illinois dumpster rental guide covering Chicago and surrounding areas. Local pricing, complex permit requirements, and trusted providers.",
  keywords: "Illinois dumpster rental, Chicago dumpster rental, Chicago permits"
};

const illinoisCities = [
  {
    name: 'Chicago',
    slug: 'chicago',
    priceRange: '$325-$525',
    providers: 15,
    image: '/images/cities/chicago-skyline.webp',
    neighborhoods: ['Loop', 'Lincoln Park', 'Wicker Park', 'River North', 'Gold Coast', 'Millennium Park'],
    specialNotes: 'Harsh winters affect scheduling and equipment performance. Complex city regulations require advance planning.',
    permitRequired: true,
    permitCost: '$21-$488',
    processingTime: '5-10 days'
  }
];

const stateFeatures = [
  {
    icon: <Wind className="w-6 h-6 text-blue-600" />,
    title: 'Weather Challenges',
    description: 'Harsh winters affect delivery schedules. Summer construction season creates high demand periods.'
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-red-600" />,
    title: 'Complex Permits',
    description: 'Chicago has one of the most complex permitting systems in the US. Requirements vary by neighborhood.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Seasonal Pricing',
    description: 'Prices fluctuate significantly between seasons. Winter rates often 20-30% lower than summer.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Urban Expertise',
    description: 'Providers experienced with tight city spaces, parking restrictions, and high-rise projects.'
  }
];

export default function IllinoisStatePage() {
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
            <span className="text-gray-900">Illinois</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">IL</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Illinois Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Chicago metro • 15 providers • Complex permitting requirements
              </p>
            </div>
          </div>
        </div>

        {/* Illinois State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Illinois Market Overview
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

        {/* Chicago Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Chicago Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {illinoisCities.map((city, index) => (
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
<div className="p-8 flex flex-col">                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-green-600">
                      <DollarSign className="w-6 h-6 mr-2" />
                      <span className="font-bold text-xl">{city.priceRange}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="text-lg">{city.providers} providers</span>
                    </div>
                  </div>

                  {/* Neighborhoods */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Popular Areas:</h4>
                    <p className="text-gray-600">
                      {city.neighborhoods.join(', ')}
                    </p>
                  </div>

                  {/* Permit Info - Emphasized for Chicago */}
                  <div className="bg-red-50 rounded-lg p-4 mb-6 border-l-4 border-red-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <span className="font-bold text-red-800">Complex Permit Requirements</span>
                    </div>
                    <p className="text-red-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-red-600 text-sm">
                      Chicago requires permits for most dumpster placements. Requirements vary significantly by ward and street type.
                    </p>
                  </div>

                  {/* Special Notes */}
<div className="bg-gray-50 rounded-lg p-4 mb-6">
  <h4 className="font-semibold text-gray-900 mb-2">Special Considerations:</h4>
  <p className="text-gray-700 text-sm">{city.specialNotes}</p>
</div>

                  {/* CORRECT - Dynamic city name */}
<Link 
  href={`/dumpster-rental-${city.slug}`}
  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors font-semibold text-center text-lg"
>
  View {city.name} Guide →
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chicago-Specific Tips */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Chicago Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">📋 Permit Navigation</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Check ward-specific requirements first</li>
                <li>• Allow extra time for permit processing</li>
                <li>• Consider private property placement to avoid permits</li>
                <li>• Keep permits visible during rental period</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">❄️ Seasonal Planning</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Book early for spring/summer construction season</li>
                <li>• Winter deliveries may be delayed by weather</li>
                <li>• Consider covered dumpsters for snow/ice protection</li>
                <li>• Plan around street cleaning schedules</li>
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
            Use our calculator to get personalized recommendations for your Chicago project
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