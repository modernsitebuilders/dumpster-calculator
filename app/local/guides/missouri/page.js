// app/local/guides/missouri/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Building } from 'lucide-react';

export const metadata = {
  title: "Missouri Dumpster Rental Guide | Kansas City Metro Area",
  description: "Complete Missouri dumpster rental guide covering Kansas City and surrounding areas. Midwest values, barbecue country, and trusted providers.",
  keywords: "Missouri dumpster rental, Kansas City dumpster rental, KC dumpster rental"
};

const missouriCities = [
  {
    name: 'Kansas City',
    slug: 'kansas-city',
    priceRange: '$280-$480',
    providers: 10,
    image: '/images/cities/kansas-city-skyline.webp',
    neighborhoods: ['Downtown', 'Country Club Plaza', 'Westport', 'River Market', 'Crossroads', 'Power & Light'],
    specialNotes: 'Major Midwest hub with fountains and parks. Good provider availability across metro area.',
    permitRequired: true,
    permitCost: '$50-$125',
    processingTime: '3-5 days'
  }
];

const stateFeatures = [
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Midwest Value',
    description: 'Competitive pricing with strong Midwest work ethic. Good value for construction and renovation projects.'
  },
  {
    icon: <Building className="w-6 h-6 text-blue-600" />,
    title: 'Transportation Hub',
    description: 'Strategic location with excellent logistics infrastructure. Good coverage throughout metro area.'
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-600" />,
    title: 'Seasonal Planning',
    description: 'Four distinct seasons affect scheduling. Spring and fall are peak construction periods.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Urban Amenities',
    description: 'City of fountains with extensive parks system. Providers experienced with urban placement challenges.'
  }
];

export default function MissouriStatePage() {
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
            <span className="text-gray-900">Missouri</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-red-600 font-bold text-2xl">MO</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Missouri Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Kansas City metro • 10 providers • Midwest transportation hub
              </p>
            </div>
          </div>
        </div>

        {/* Missouri State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Missouri Market Overview
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

        {/* Kansas City Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Kansas City Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {missouriCities.map((city, index) => (
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

                  {/* Weather Planning */}
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6 border-l-4 border-yellow-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3" />
                      <span className="font-bold text-yellow-800">Seasonal Weather Planning</span>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      Winter ice storms and summer thunderstorms can affect delivery schedules. Spring and fall offer 
                      the most reliable weather for construction projects.
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
                      Kansas City requires permits for public street placement. Historic areas may have additional restrictions.
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
            Missouri-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fountain and park proximity restrictions</li>
                  <li>• Historic district preservation rules</li>
                  <li>• BBQ and entertainment district access</li>
                  <li>• Chiefs and Royals game day traffic</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plan around seasonal weather patterns</li>
                  <li>• Consider sports schedule for downtown projects</li>
                  <li>• Verify placement near fountain areas</li>
                  <li>• Account for metro area sprawl in scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-red-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Missouri Dumpster Rental?</h2>
            <p className="text-red-100 mb-6 text-lg">
              Get quotes from trusted local providers across Kansas City's metro area.
            </p>
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition font-semibold text-lg"
              >
                Get Instant Quote
              </Link>
              <div className="text-sm text-red-200">
                <Link href="/local/guides" className="hover:underline">← Back to All State Guides</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}