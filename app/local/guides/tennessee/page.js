// app/local/guides/tennessee/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Music } from 'lucide-react';

export const metadata = {
  title: "Tennessee Dumpster Rental Guide | Nashville, Memphis Metro Areas",
  description: "Complete Tennessee dumpster rental guide covering Nashville and Memphis. Music city construction, logistics hub experience, and trusted providers.",
  keywords: "Tennessee dumpster rental, Nashville dumpster rental, Memphis dumpster rental"
};

const tennesseeCities = [
  {
    name: 'Nashville',
    slug: 'nashville',
    priceRange: '$290-$490',
    providers: 11,
    image: '/images/cities/nashville-skyline.webp',
    neighborhoods: ['Downtown', 'Music Row', 'The Gulch', 'Green Hills', 'Belle Meade', 'East Nashville'],
    specialNotes: 'Rapid growth and construction boom. High demand market with music industry projects.',
    permitRequired: true,
    permitCost: '$50-$150',
    processingTime: '3-7 days'
  },
  {
    name: 'Memphis',
    slug: 'memphis',
    priceRange: '$275-$475',
    providers: 9,
    image: '/images/cities/memphis-skyline.webp',
    neighborhoods: ['Downtown', 'Midtown', 'East Memphis', 'Germantown', 'Cordova', 'Bartlett'],
    specialNotes: 'Major logistics and distribution hub. Experience with large commercial and industrial projects.',
    permitRequired: true,
    permitCost: '$45-$125',
    processingTime: '2-5 days'
  }
];

const stateFeatures = [
  {
    icon: <Music className="w-6 h-6 text-purple-600" />,
    title: 'Entertainment Industry',
    description: 'Experience with music venues, event spaces, and entertainment district construction projects.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Moderate Pricing',
    description: 'Competitive Southern pricing with no state income tax benefits. Good value for construction projects.'
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: 'Growing Markets',
    description: 'Nashville experiencing rapid growth. Memphis serves as major distribution hub for the region.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-orange-600" />,
    title: 'Logistics Experience',
    description: 'Strong infrastructure and experience with large-scale commercial and industrial waste management.'
  }
];

export default function TennesseeStatePage() {
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
            <span className="text-gray-900">Tennessee</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-purple-600 font-bold text-2xl">TN</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Tennessee Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                2 major cities • 20 providers • Music city growth market
              </p>
            </div>
          </div>
        </div>

        {/* Tennessee State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tennessee Market Overview
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

        {/* Cities Coverage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Major Tennessee Markets
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tennesseeCities.map((city, index) => (
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
<div className="p-8 flex flex-col">                  
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

                  {/* Growth Market Alert */}
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6 border-l-4 border-yellow-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3" />
                      <span className="font-bold text-yellow-800">High Demand Market</span>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      {city.name === 'Nashville' ? 
                        'Rapid population growth and construction boom. Book 5-7 days in advance, especially during peak construction season.' :
                        'Major logistics hub with consistent commercial demand. Industrial projects may require specialized equipment.'
                      }
                    </p>
                  </div>

                  {/* Permit Info */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-semibold text-blue-800">Permit Information</span>
                    </div>
                    <p className="text-blue-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-blue-600 text-sm">
                      {city.name} requires permits for public right-of-way placement. Historic districts may have additional requirements.
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

        {/* State-Specific Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tennessee-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nashville Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Music venue and entertainment construction</li>
                  <li>• High growth area with increased demand</li>
                  <li>• Historic Music Row preservation rules</li>
                  <li>• Tourist event scheduling considerations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Memphis Advantages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Major FedEx hub with logistics expertise</li>
                  <li>• Industrial and warehouse experience</li>
                  <li>• Mississippi River logistics access</li>
                  <li>• Lower costs than Nashville market</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-purple-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Tennessee Dumpster Rental?</h2>
            <p className="text-purple-100 mb-6 text-lg">
              Get quotes from trusted local providers across Tennessee's major markets.
            </p>
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition font-semibold text-lg"
              >
                Get Instant Quote
              </Link>
              <div className="text-sm text-purple-200">
                <Link href="/local/guides" className="hover:underline">← Back to All State Guides</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}