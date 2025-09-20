// app/local/guides/kentucky/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, TreePine } from 'lucide-react';

export const metadata = {
  title: "Kentucky Dumpster Rental Guide | Louisville Metro Area",
  description: "Complete Kentucky dumpster rental guide covering Louisville and surrounding areas. Derby city, bourbon country, and trusted providers.",
  keywords: "Kentucky dumpster rental, Louisville dumpster rental, derby city dumpster rental"
};

const kentuckyCities = [
  {
    name: 'Louisville',
    slug: 'louisville',
    priceRange: '$275-$475',
    providers: 9,
    image: '/images/cities/louisville-skyline.webp',
    neighborhoods: ['Downtown', 'Highlands', 'Germantown', 'St. Matthews', 'Jeffersontown', 'Okolona'],
    specialNotes: 'Derby city with Ohio River access. Experience with historic preservation and event planning.',
    permitRequired: true,
    permitCost: '$40-$110',
    processingTime: '3-5 days'
  }
];

const stateFeatures = [
  {
    icon: <TreePine className="w-6 h-6 text-green-600" />,
    title: 'Bourbon Heritage',
    description: 'Experience with distillery projects, bourbon industry facilities, and historic preservation requirements.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-blue-600" />,
    title: 'Southern Value',
    description: 'Competitive Southern pricing with good regional coverage. Cost-effective for construction projects.'
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-600" />,
    title: 'Derby Season',
    description: 'Kentucky Derby and Thunder Over Louisville create peak demand periods in late April/early May.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-orange-600" />,
    title: 'River City Access',
    description: 'Ohio River logistics hub with good transportation infrastructure and regional coverage.'
  }
];

export default function KentuckyStatePage() {
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
            <span className="text-gray-900">Kentucky</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">KY</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Kentucky Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Louisville metro • 9 providers • Derby city heritage
              </p>
            </div>
          </div>
        </div>

        {/* Kentucky State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Kentucky Market Overview
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

        {/* Louisville Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Louisville Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {kentuckyCities.map((city, index) => (
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

                  {/* Derby Season Alert */}
                  <div className="bg-purple-50 rounded-lg p-4 mb-6 border-l-4 border-purple-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-purple-600 mr-3" />
                      <span className="font-bold text-purple-800">Derby Season Planning</span>
                    </div>
                    <p className="text-purple-700 text-sm">
                      Kentucky Derby week (late April/early May): Extremely high demand and premium pricing. 
                      Book 2-3 weeks in advance for any projects during Derby festivities.
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
                      Louisville Metro requires permits for public right-of-way. Historic districts may have preservation requirements.
                    </p>
                  </div>

                  {/* Special Notes */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Special Considerations:</h4>
                    <p className="text-gray-700 text-sm">{city.specialNotes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* State-Specific Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Kentucky-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Derby Season Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• April 15-May 15: Peak demand period</li>
                  <li>• Thunder Over Louisville air show affects scheduling</li>
                  <li>• Derby week premium pricing applies</li>
                  <li>• Tourist areas have access restrictions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Historic preservation experience</li>
                  <li>• Bourbon industry facility knowledge</li>
                  <li>• Ohio River logistics access</li>
                  <li>• Louisville Slugger district familiarity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Kentucky Dumpster Rental?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Get quotes from trusted local providers across Kentucky's Derby city.
            </p>
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold text-lg"
              >
                Get Instant Quote
              </Link>
              <div className="text-sm text-blue-200">
                <Link href="/local/guides" className="hover:underline">← Back to All State Guides</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}