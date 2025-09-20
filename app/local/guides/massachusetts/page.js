// app/local/guides/massachusetts/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Building, Ship } from 'lucide-react';

export const metadata = {
  title: "Massachusetts Dumpster Rental Guide | Boston Metro Area",
  description: "Complete Massachusetts dumpster rental guide covering Boston and surrounding areas. Historic district regulations, premium pricing, and trusted providers.",
  keywords: "Massachusetts dumpster rental, Boston dumpster rental, New England dumpsters"
};

const massachusettsCities = [
  {
    name: 'Boston',
    slug: 'boston',
    priceRange: '$400-$600',
    providers: 11,
    image: '/images/cities/boston-skyline.webp',
    neighborhoods: ['Back Bay', 'North End', 'Beacon Hill', 'Cambridge', 'Somerville', 'Quincy'],
    specialNotes: 'Historic districts have strict regulations. Narrow streets and limited parking create placement challenges.',
    permitRequired: true,
    permitCost: '$50-$1,490/month',
    processingTime: '7+ days'
  }
];

const stateFeatures = [
  {
    icon: <Building className="w-6 h-6 text-blue-600" />,
    title: 'Historic Regulations',
    description: 'Historic districts require special permits and placement restrictions. Colonial-era streets limit truck access.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-red-600" />,
    title: 'Premium Market',
    description: 'Among highest costs in nation. Boston permit fees can exceed $1,400/month for some locations.'
  },
  {
    icon: <Ship className="w-6 h-6 text-navy-600" />,
    title: 'Dense Urban Area',
    description: 'Compact city layout requires careful logistics. Limited placement options and strict scheduling.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: 'Experienced Providers',
    description: 'Local expertise in navigating complex regulations and tight urban spaces throughout New England.'
  }
];

export default function MassachusettsStatePage() {
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
            <span className="text-gray-900">Massachusetts</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">MA</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Massachusetts Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Boston metro • 11 providers • Historic district considerations
              </p>
            </div>
          </div>
        </div>

        {/* Massachusetts State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Massachusetts Market Overview
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

        {/* Boston Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Boston Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {massachusettsCities.map((city, index) => (
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
                  
                  {/* Pricing - Emphasized for Boston */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center text-red-600">
                      <DollarSign className="w-6 h-6 mr-2" />
                      <span className="font-bold text-xl">{city.priceRange}</span>
                      <span className="text-sm text-red-500 ml-2">(Premium)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="text-lg">{city.providers} providers</span>
                    </div>
                  </div>

                  {/* Neighborhoods */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Metro Coverage:</h4>
                    <p className="text-gray-600">
                      {city.neighborhoods.join(', ')}
                    </p>
                  </div>

                  {/* Historic District Warning */}
                  <div className="bg-amber-50 rounded-lg p-4 mb-6 border-l-4 border-amber-400">
                    <div className="flex items-center mb-2">
                      <Building className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="font-bold text-amber-800">Historic District Regulations</span>
                    </div>
                    <p className="text-amber-700 text-sm">
                      Back Bay, Beacon Hill, and North End have strict placement rules. 
                      Additional approvals may be required for historic properties.
                    </p>
                  </div>

                  {/* Permit Info - Complex for Boston */}
                  <div className="bg-red-50 rounded-lg p-4 mb-6 border-l-4 border-red-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <span className="font-bold text-red-800">Expensive Permit Requirements</span>
                    </div>
                    <p className="text-red-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-red-600 text-sm">
                      Boston has some of the highest permit costs in the nation. Monthly fees can exceed $1,400 for prime locations.
                    </p>
                  </div>

                  {/* Access Challenges */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">🚛 Access Challenges</h4>
                    <p className="text-blue-700 text-sm">
                      Narrow colonial-era streets and limited parking. Many areas require smaller trucks or hand-loading.
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

        {/* Massachusetts-Specific Tips */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Massachusetts Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏛️ Historic Considerations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Check historic district requirements early</li>
                <li>• Consider private property placement when possible</li>
                <li>• Allow extra time for permit approvals</li>
                <li>• Coordinate with historical commissions if needed</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">💸 Cost Management</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Factor permit costs into project budget</li>
                <li>• Compare pricing across metro area</li>
                <li>• Consider shorter rental periods</li>
                <li>• Ask about volume discounts for contractors</li>
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
            Use our calculator to get personalized recommendations for your Massachusetts project
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