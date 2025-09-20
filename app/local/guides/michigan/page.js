// app/local/guides/michigan/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Snowflake, Factory } from 'lucide-react';

export const metadata = {
  title: "Michigan Dumpster Rental Guide | Detroit Metro Area",
  description: "Complete Michigan dumpster rental guide covering Detroit and surrounding areas. Industrial projects, winter considerations, and competitive providers.",
  keywords: "Michigan dumpster rental, Detroit dumpster rental, industrial dumpsters"
};

const michiganCities = [
  {
    name: 'Detroit',
    slug: 'detroit',
    priceRange: '$290-$490',
    providers: 7,
    image: '/images/cities/detroit-skyline.webp',
    neighborhoods: ['Downtown', 'Midtown', 'Corktown', 'Eastern Market', 'Riverfront', 'New Center'],
    specialNotes: 'Industrial heritage creates opportunities for large-scale projects. Competitive pricing due to lower overhead costs.',
    permitRequired: true,
    permitCost: '$35-$150',
    processingTime: '3-7 days'
  }
];

const stateFeatures = [
  {
    icon: <Factory className="w-6 h-6 text-gray-600" />,
    title: 'Industrial Heritage',
    description: 'Strong manufacturing base creates demand for industrial waste services. Experienced with heavy materials and large projects.'
  },
  {
    icon: <Snowflake className="w-6 h-6 text-blue-600" />,
    title: 'Winter Challenges',
    description: 'Heavy snow and freezing temperatures affect scheduling November-March. Plan for seasonal delays.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Competitive Rates',
    description: 'Below-average pricing compared to coastal markets. Good value with reliable service options.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Urban Renewal',
    description: 'Downtown revitalization creates steady demand for renovation and construction waste removal.'
  }
];

export default function MichiganStatePage() {
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
            <span className="text-gray-900">Michigan</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">MI</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Michigan Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Detroit metro • 7 providers • Industrial strength solutions
              </p>
            </div>
          </div>
        </div>

        {/* Michigan State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Michigan Market Overview
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

        {/* Detroit Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Detroit Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {michiganCities.map((city, index) => (
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
                      <span className="text-sm text-green-600 ml-2">(Great Value)</span>
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

                  {/* Industrial Strength Notice */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-gray-400">
                    <div className="flex items-center mb-2">
                      <Factory className="w-5 h-5 text-gray-600 mr-3" />
                      <span className="font-bold text-gray-800">Industrial Expertise</span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Detroit providers excel with heavy materials, manufacturing waste, and large-scale industrial projects. 
                      Strong experience with metal, concrete, and construction debris.
                    </p>
                  </div>

                  {/* Permit Info */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-semibold text-blue-800">Detroit Permits</span>
                    </div>
                    <p className="text-blue-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-blue-600 text-sm">
                      Streamlined permitting process. Reasonable fees compared to major metros.
                    </p>
                  </div>

                  {/* Winter Planning */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">❄️ Winter Considerations</h4>
                    <p className="text-blue-700 text-sm">
                      Heavy snow season November-March. Allow flexibility for weather delays and consider heated facilities for time-sensitive projects.
                    </p>
                  </div>

                  {/* Special Notes */}
                  <p className="text-gray-600 mb-6">
                    <strong>Market Advantages:</strong> {city.specialNotes}
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

        {/* Michigan-Specific Tips */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Michigan Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏭 Industrial Projects</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Leverage expertise with heavy materials</li>
                <li>• Ask about specialized containers for metal/concrete</li>
                <li>• Consider larger sizes for manufacturing waste</li>
                <li>• Discuss weight limits for industrial debris</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🌨️ Seasonal Planning</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Schedule major projects April-October</li>
                <li>• Allow extra time during winter months</li>
                <li>• Consider indoor staging areas</li>
                <li>• Plan for Great Lakes weather effects</li>
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
            Use our calculator to get personalized recommendations for your Michigan project
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