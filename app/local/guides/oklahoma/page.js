// app/local/guides/oklahoma/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Zap } from 'lucide-react';

export const metadata = {
  title: "Oklahoma Dumpster Rental Guide | Oklahoma City Metro Area",
  description: "Complete Oklahoma dumpster rental guide covering Oklahoma City and surrounding areas. Energy sector experience, tornado considerations, and trusted providers.",
  keywords: "Oklahoma dumpster rental, Oklahoma City dumpster rental, OKC dumpster rental"
};

const oklahomaCities = [
  {
    name: 'Oklahoma City',
    slug: 'oklahoma-city',
    priceRange: '$265-$465',
    providers: 9,
    image: '/images/cities/oklahoma-city-skyline.webp',
    neighborhoods: ['Downtown', 'Bricktown', 'Midtown', 'Edmond', 'Norman', 'Moore'],
    specialNotes: 'Energy sector hub with experience in industrial and commercial projects. Weather-dependent scheduling.',
    permitRequired: true,
    permitCost: '$40-$120',
    processingTime: '2-5 days'
  }
];

const stateFeatures = [
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Competitive Pricing',
    description: 'Below national average rates. Strong energy sector economy keeps costs reasonable.'
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-600" />,
    title: 'Energy Sector Experience',
    description: 'Providers experienced with oil & gas industry, industrial cleanouts, and commercial projects.'
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-red-600" />,
    title: 'Weather Awareness',
    description: 'Tornado season planning essential. Spring storms can affect delivery schedules.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    title: 'Central Coverage',
    description: 'Oklahoma City serves broader metro area with good availability throughout the region.'
  }
];

export default function OklahomaStatePage() {
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
            <span className="text-gray-900">Oklahoma</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-orange-600 font-bold text-2xl">OK</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Oklahoma Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Oklahoma City metro • 9 providers • Energy sector experience
              </p>
            </div>
          </div>
        </div>

        {/* Oklahoma State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Oklahoma Market Overview
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

        {/* Oklahoma City Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Oklahoma City Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {oklahomaCities.map((city, index) => (
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
                <div className="p-8 flex flex-col h-full">
                  
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

                  {/* Tornado Season Warning */}
                  <div className="bg-red-50 rounded-lg p-4 mb-6 border-l-4 border-red-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <span className="font-bold text-red-800">Tornado Season Planning</span>
                    </div>
                    <p className="text-red-700 text-sm">
                      March - June: Peak tornado season. Secure dumpster placement and consider weather delays. 
                      Some providers may require early pickup during severe weather warnings.
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
                      Oklahoma City requires permits for public right-of-way placement. Private property placement typically doesn't require permits.
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
            Oklahoma-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weather Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Spring: Tornado season, plan flexible scheduling</li>
                  <li>• Summer: Extreme heat, consider covered loads</li>
                  <li>• Fall: Ideal construction weather</li>
                  <li>• Winter: Ice storms can delay deliveries</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Oil & gas industry cleanouts</li>
                  <li>• Industrial facility maintenance</li>
                  <li>• Commercial construction projects</li>
                  <li>• Agricultural and rural service availability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-orange-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Oklahoma Dumpster Rental?</h2>
            <p className="text-orange-100 mb-6 text-lg">
              Get quotes from trusted local providers across Oklahoma's energy capital.
            </p>
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition font-semibold text-lg"
              >
                Get Instant Quote
              </Link>
              <div className="text-sm text-orange-200">
                <Link href="/local/guides" className="hover:underline">← Back to All State Guides</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}