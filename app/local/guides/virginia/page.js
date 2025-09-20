// app/local/guides/virginia/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Waves } from 'lucide-react';

export const metadata = {
  title: "Virginia Dumpster Rental Guide | Virginia Beach Metro Area",
  description: "Complete Virginia dumpster rental guide covering Virginia Beach and surrounding areas. Coastal regulations, tourism considerations, and trusted providers.",
  keywords: "Virginia dumpster rental, Virginia Beach dumpster rental, coastal dumpster rental"
};

const virginiaCities = [
  {
    name: 'Virginia Beach',
    slug: 'virginia-beach',
    priceRange: '$320-$520',
    providers: 12,
    image: '/images/cities/virginia-beach-skyline.webp',
    neighborhoods: ['Oceanfront', 'Town Center', 'Kempsville', 'Chesapeake Bay', 'Sandbridge', 'Little Creek'],
    specialNotes: 'Tourist destination with seasonal demand variations. Coastal regulations apply.',
    permitRequired: true,
    permitCost: '$75-$200',
    processingTime: '3-7 days'
  }
];

const stateFeatures = [
  {
    icon: <Waves className="w-6 h-6 text-blue-600" />,
    title: 'Coastal Regulations',
    description: 'Special considerations for beachfront areas, flood zones, and environmental protection requirements.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Seasonal Pricing',
    description: 'Higher rates during summer tourist season (May-September). Off-season discounts available.'
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-600" />,
    title: 'Tourism Impact',
    description: 'Summer months see increased demand. Book 5-7 days in advance during peak tourist season.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Military Friendly',
    description: 'Experienced with military housing regulations and base access requirements in Norfolk area.'
  }
];

export default function VirginiaStatePage() {
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
            <span className="text-gray-900">Virginia</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">VA</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Virginia Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Virginia Beach metro • 12 providers • Coastal considerations
              </p>
            </div>
          </div>
        </div>

        {/* Virginia State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Virginia Market Overview
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

        {/* Virginia Beach Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Virginia Beach Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {virginiaCities.map((city, index) => (
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

                  {/* Tourist Season Warning */}
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6 border-l-4 border-yellow-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3" />
                      <span className="font-bold text-yellow-800">Tourist Season Planning</span>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      Memorial Day - Labor Day: High demand during peak tourist season. Book early and expect premium pricing. 
                      Consider off-season scheduling for non-urgent projects.
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
                      Virginia Beach requires permits for right-of-way placement. Oceanfront areas may have additional restrictions during tourist season.
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

        {/* CORRECT - Dynamic city name */}
<Link 
  href={`/dumpster-rental-${city.slug}`}
  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors font-semibold text-center text-lg"
>
  View {city.name} Guide →
</Link>

        {/* State-Specific Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Virginia-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Coastal Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Salt air corrosion affects dumpster longevity</li>
                  <li>• Flood zone regulations may apply</li>
                  <li>• Beach access roads have weight restrictions</li>
                  <li>• Sand and wind protection recommended</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schedule deliveries outside peak traffic hours</li>
                  <li>• Consider military base access requirements</li>
                  <li>• Plan around major tourism events</li>
                  <li>• Verify HOA rules in resort communities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Virginia Dumpster Rental?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Get quotes from trusted local providers across Virginia's coastal communities.
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