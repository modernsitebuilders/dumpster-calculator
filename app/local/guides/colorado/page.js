// app/local/guides/colorado/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Mountain, Snowflake } from 'lucide-react';

export const metadata = {
  title: "Colorado State Dumpster Rental Guide | Denver Metro Area",
  description: "Complete Colorado dumpster rental guide covering Denver and surrounding areas. Altitude considerations, seasonal factors, and trusted providers.",
  keywords: "Colorado dumpster rental, Denver dumpster rental, mountain dumpster rental"
};

const coloradoCities = [
  {
    name: 'Denver',
    slug: 'denver',
    priceRange: '$310-$510',
    providers: 9,
    image: '/images/cities/denver-skyline.webp',
    neighborhoods: ['LoDo', 'Capitol Hill', 'Highlands', 'RiNo', 'Cherry Creek', 'Lakewood'],
    specialNotes: 'Mile-high altitude affects logistics. Seasonal weather creates scheduling challenges.',
    permitRequired: true,
    permitCost: '$25-$100',
    processingTime: '5-10 days'
  }
];

const stateFeatures = [
  {
    icon: <Mountain className="w-6 h-6 text-gray-600" />,
    title: 'Altitude Logistics',
    description: 'High altitude affects truck performance and delivery routes. Mountain access may be limited in winter.'
  },
  {
    icon: <Snowflake className="w-6 h-6 text-blue-600" />,
    title: 'Seasonal Challenges',
    description: 'Winter snow affects scheduling and access. Peak construction season runs April-October.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Reasonable Rates',
    description: 'Competitive pricing with seasonal variations. Mountain deliveries may include surcharges.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Growing Market',
    description: 'Rapid population growth and tech industry expansion drive construction and renovation demand.'
  }
];

export default function ColoradoStatePage() {
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
            <span className="text-gray-900">Colorado</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-purple-600 font-bold text-2xl">CO</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Colorado Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Denver metro • 9 providers • Mountain logistics
              </p>
            </div>
          </div>
        </div>

        {/* Colorado State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Colorado Market Overview
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

        {/* Denver Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Denver Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coloradoCities.map((city, index) => (
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

                  {/* Altitude Considerations */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-400">
                    <div className="flex items-center mb-2">
                      <Mountain className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-bold text-blue-800">Mile High Considerations</span>
                    </div>
                    <p className="text-blue-700 text-sm">
                      Denver's 5,280 ft elevation affects truck performance and routing. 
                      Mountain areas may require specialized equipment or have seasonal access limits.
                    </p>
                  </div>

                  {/* Permit Info */}
                  <div className="bg-purple-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                      <span className="font-semibold text-purple-800">Denver Permits</span>
                    </div>
                    <p className="text-purple-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-purple-600 text-sm">
                      Denver requires permits for street placement. Streamlined process compared to many metros.
                    </p>
                  </div>

                  {/* Seasonal Notice */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">❄️ Seasonal Planning</h4>
                    <p className="text-gray-700 text-sm">
                      Winter weather can impact deliveries and pickups. Peak construction season runs April through October.
                    </p>
                  </div>

                  {/* Special Notes */}
                  <p className="text-gray-600 mb-6">
                    <strong>Local Factors:</strong> {city.specialNotes}
                  </p>

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

        {/* Colorado-Specific Tips */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Colorado Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏔️ Mountain Considerations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Confirm truck access for mountain properties</li>
                <li>• Plan around seasonal road closures</li>
                <li>• Consider altitude effects on delivery vehicles</li>
                <li>• Ask about mountain delivery surcharges</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🌨️ Weather Planning</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Schedule projects during mild weather months</li>
                <li>• Allow flexibility for snow delays</li>
                <li>• Consider covered containers in winter</li>
                <li>• Plan for rapid weather changes</li>
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
            Use our calculator to get personalized recommendations for your Colorado project
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