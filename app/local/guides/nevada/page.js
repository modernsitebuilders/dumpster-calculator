// app/local/guides/nevada/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Sun } from 'lucide-react';

export const metadata = {
  title: "Nevada Dumpster Rental Guide | Las Vegas Metro Area",
  description: "Complete Nevada dumpster rental guide covering Las Vegas and surrounding areas. Desert construction, entertainment industry, and trusted providers.",
  keywords: "Nevada dumpster rental, Las Vegas dumpster rental, desert dumpster rental"
};

const nevadaCities = [
  {
    name: 'Las Vegas',
    slug: 'las-vegas',
    priceRange: '$310-$510',
    providers: 14,
    image: '/images/cities/las-vegas-skyline.webp',
    neighborhoods: ['Strip', 'Downtown', 'Henderson', 'Summerlin', 'Green Valley', 'Paradise'],
specialNotes: 'Entertainment capital with 24/7 construction activity. Desert conditions affect equipment and scheduling.',
    permitRequired: true,
    permitCost: '$60-$180',
    processingTime: '3-7 days'
  }
];

const stateFeatures = [
  {
    icon: <Sun className="w-6 h-6 text-yellow-600" />,
    title: 'Desert Conditions',
    description: 'Extreme heat requires special handling. Year-round construction season with unique desert considerations.'
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-600" />,
    title: '24/7 Operations',
    description: 'Entertainment industry creates unique scheduling needs. Many providers offer extended hours for casino projects.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Tourism Economy',
    description: 'Strong economy driven by tourism and construction. Competitive pricing with good provider availability.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    title: 'Construction Experience',
    description: 'High-end casino and resort construction expertise. Experience with large-scale commercial projects.'
  }
];

export default function NevadaStatePage() {
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
            <span className="text-gray-900">Nevada</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-yellow-600 font-bold text-2xl">NV</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Nevada Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Las Vegas metro • 14 providers • Entertainment capital
              </p>
            </div>
          </div>
        </div>

        {/* Nevada State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nevada Market Overview
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

        {/* Las Vegas Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Las Vegas Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {nevadaCities.map((city, index) => (
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

                  {/* Desert Heat Warning */}
                  <div className="bg-red-50 rounded-lg p-4 mb-6 border-l-4 border-red-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <span className="font-bold text-red-800">Extreme Heat Considerations</span>
                    </div>
                    <p className="text-red-700 text-sm">
                      Summer temperatures exceed 110°F. Plan for covered dumpster placement, odor management, 
                      and early morning/evening deliveries during peak heat months (June-September).
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
                      Las Vegas requires permits for public right-of-way. Strip area and major casino zones have special requirements.
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
            Nevada-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Desert Challenges</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Extreme summer heat affects materials</li>
                  <li>• Sand and dust protection needed</li>
                  <li>• UV exposure considerations</li>
                  <li>• Water scarcity affects cleaning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Entertainment Industry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 24/7 construction schedules common</li>
                  <li>• High-end casino project experience</li>
                  <li>• Strip area access restrictions</li>
                  <li>• Convention schedule considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-yellow-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Nevada Dumpster Rental?</h2>
            <p className="text-yellow-100 mb-6 text-lg">
              Get quotes from trusted local providers across Nevada's entertainment capital.
            </p>
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-block bg-white text-yellow-600 px-8 py-3 rounded-lg hover:bg-yellow-50 transition font-semibold text-lg"
              >
                Get Instant Quote
              </Link>
              <div className="text-sm text-yellow-200">
                <Link href="/local/guides" className="hover:underline">← Back to All State Guides</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}