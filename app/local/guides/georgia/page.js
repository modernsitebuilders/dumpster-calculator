// app/local/guides/georgia/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, TreePine } from 'lucide-react';

export const metadata = {
  title: "Georgia Dumpster Rental Guide | Atlanta Metro Area",
  description: "Complete Georgia dumpster rental guide covering Atlanta and surrounding areas. Rapid growth considerations, competitive pricing, and trusted providers.",
  keywords: "Georgia dumpster rental, Atlanta dumpster rental, metro Atlanta dumpsters"
};

const georgiaCities = [
  {
    name: 'Atlanta',
    slug: 'atlanta',
    priceRange: '$300-$500',
    providers: 12,
    image: '/images/cities/atlanta-skyline.webp',
    neighborhoods: ['Midtown', 'Buckhead', 'Virginia-Highland', 'Little Five Points', 'Decatur', 'Sandy Springs'],
    specialNotes: 'Rapidly growing metro area with extensive suburban coverage. Strong competition keeps prices competitive.',
    permitRequired: true,
    permitCost: '$20 + $10-25/day',
    processingTime: '7 days'
  }
];

const stateFeatures = [
  {
    icon: <TreePine className="w-6 h-6 text-green-600" />,
    title: 'Rapid Growth',
    description: 'Metro Atlanta is one of fastest-growing regions in US. High construction activity and expanding suburban development.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-blue-600" />,
    title: 'Competitive Rates',
    description: 'Strong provider competition keeps prices reasonable. Good value compared to other major metros.'
  },
  {
    icon: <MapPin className="w-6 h-6 text-purple-600" />,
    title: 'Metro Coverage',
    description: 'Excellent coverage throughout 28-county metro area. Suburban and rural service readily available.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-orange-600" />,
    title: 'Business Friendly',
    description: 'Streamlined permitting in most jurisdictions. Less bureaucratic than many major metros.'
  }
];

export default function GeorgiaStatePage() {
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
            <span className="text-gray-900">Georgia</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold text-2xl">GA</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Georgia Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Atlanta metro • 12 providers • Rapidly growing market
              </p>
            </div>
          </div>
        </div>

        {/* Georgia State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Georgia Market Overview
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

        {/* Atlanta Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Atlanta Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {georgiaCities.map((city, index) => (
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

                  {/* Permit Info */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-semibold text-blue-800">Atlanta Permit Requirements</span>
                    </div>
                    <p className="text-blue-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-blue-600 text-sm">
                      Atlanta requires permits for street placement. Daily fees apply after initial permit period.
                    </p>
                  </div>

                  {/* Growth Notice */}
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-green-800 mb-2">📈 Metro Growth Impact</h4>
                    <p className="text-green-700 text-sm">
                      Rapid suburban expansion means excellent coverage throughout metro area. New developments and renovations create consistent demand.
                    </p>
                  </div>

                  {/* Special Notes */}
                  <p className="text-gray-600 mb-6">
                    <strong>Market Advantage:</strong> {city.specialNotes}
                  </p>

                  {/* CTA Button */}
                  <Link 
                    href={`/dumpster-rental-${city.slug}`}
                    className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-colors font-semibold text-center text-lg"
                  >
                    View Atlanta Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CORRECT - Dynamic city name */}
<Link 
  href={`/dumpster-rental-${city.slug}`}
  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors font-semibold text-center text-lg"
>
  View {city.name} Guide →
</Link>

        {/* Georgia-Specific Tips */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Georgia Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏗️ Construction Boom</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Book early during peak construction seasons</li>
                <li>• Suburban areas offer more placement flexibility</li>
                <li>• Consider larger sizes for home renovation projects</li>
                <li>• Ask about multi-project discounts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🌡️ Climate Considerations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Hot, humid summers affect organic waste</li>
                <li>• Occasional severe weather requires flexibility</li>
                <li>• Year-round construction season</li>
                <li>• Spring storms may affect scheduling</li>
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
            Use our calculator to get personalized recommendations for your Georgia project
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