// app/local/guides/california/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "California Dumpster Rental Guide | LA, San Diego, San Francisco",
  description: "Complete California dumpster rental guide covering Los Angeles, San Diego, and San Francisco. Local pricing, permits, and trusted providers.",
  keywords: "California dumpster rental, LA dumpster rental, San Diego dumpster rental, San Francisco dumpster rental"
};

const californiaCities = [
  {
    name: 'Los Angeles',
    slug: 'los-angeles',
    priceRange: '$380-$580',
    providers: 14,
    image: '/images/cities/los-angeles-skyline.webp',
    neighborhoods: ['Hollywood', 'Beverly Hills', 'Santa Monica', 'Downtown LA', 'West Hollywood', 'Venice'],
    specialNotes: 'Strict permitting in many areas. High demand market.',
    permitRequired: true,
    permitCost: '$63-$400',
    processingTime: '5-10 days'
  },
  {
    name: 'San Diego',
    slug: 'san-diego',
    priceRange: '$350-$550',
    providers: 9,
    image: '/images/cities/san-diego-skyline.webp',
    neighborhoods: ['Gaslamp Quarter', 'Balboa Park', 'Mission Beach', 'La Jolla', 'Hillcrest', 'Pacific Beach'],
    specialNotes: 'Coastal regulations may apply in some areas.',
    permitRequired: true,
    permitCost: '$50-$200',
    processingTime: '3-7 days'
  },
  {
    name: 'San Francisco',
    slug: 'san-francisco',
    priceRange: '$450-$650',
    providers: 10,
    image: '/images/cities/san-francisco-skyline.webp',
    neighborhoods: ['SOMA', 'Mission District', 'Castro', 'Nob Hill', 'Pacific Heights', 'Chinatown'],
    specialNotes: 'Most expensive market. Limited street space for placement.',
    permitRequired: true,
    permitCost: '$484 + $205/month',
    processingTime: '10-15 days'
  }
];

const stateFeatures = [
  {
    icon: <AlertCircle className="w-6 h-6 text-red-600" />,
    title: 'Environmental Regulations',
    description: 'California has strict waste disposal and recycling requirements. Many materials must be sorted.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Premium Pricing Market',
    description: 'Higher costs due to regulations, fuel costs, and disposal fees. Expect 20-40% above national average.'
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: 'Advance Booking Required',
    description: 'High demand market. Book 3-7 days in advance, especially in LA and SF metro areas.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Comprehensive Coverage',
    description: 'Excellent provider network throughout major metro areas and Central Valley.'
  }
];

export default function CaliforniaStatePage() {
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
            <span className="text-gray-900">California</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">CA</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                California Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                3 major cities • 33 providers • Premium market pricing
              </p>
            </div>
          </div>
        </div>

        {/* California State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            California Market Overview
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

        {/* Cities Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            California Cities We Cover
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {californiaCities.map((city, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                
                {/* City Image */}
                <div className="relative h-48">
                  <Image
                    src={city.image}
                    alt={`${city.name} skyline`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{city.name}</h3>
                    <p className="text-blue-100">Serving {city.providers} local providers</p>
                  </div>
                </div>

                {/* City Info */}
                <div className="p-6">
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-green-600">
                      <DollarSign className="w-5 h-5 mr-1" />
                      <span className="font-bold text-lg">{city.priceRange}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {city.providers} providers
                    </div>
                  </div>

                  {/* Neighborhoods */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Areas:</h4>
                    <p className="text-gray-600 text-sm">
                      {city.neighborhoods.slice(0, 4).join(', ')}
                      {city.neighborhoods.length > 4 && ` + ${city.neighborhoods.length - 4} more`}
                    </p>
                  </div>

                  {/* Permit Info */}
                  <div className="bg-yellow-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center mb-1">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      <span className="font-semibold text-yellow-800 text-sm">Permit Required</span>
                    </div>
                    <p className="text-yellow-700 text-xs">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                  </div>

                  {/* Special Notes */}
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>Note:</strong> {city.specialNotes}
                  </p>

                  {/* CTA Button */}
                  <Link 
                    href={`/dumpster-rental-${city.slug}`}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold text-center"
                  >
                    View {city.name} Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* California Tips */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            California Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🌍 Environmental Requirements</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Separate recyclables from general waste</li>
                <li>• Construction debris requires special handling</li>
                <li>• Green waste has specific disposal requirements</li>
                <li>• Hazardous materials prohibited in all dumpsters</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">💰 Cost Optimization</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Book 5-7 days in advance for better pricing</li>
                <li>• Consider smaller sizes due to weight limits</li>
                <li>• Ask about recycling discounts</li>
                <li>• Group projects with neighbors when possible</li>
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
            Use our calculator to get personalized recommendations for your California project
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