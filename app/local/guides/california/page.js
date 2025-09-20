// app/local/guides/california/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "California Dumpster Rental Guide | LA, San Diego, San Francisco, San Jose",
  description: "Complete California dumpster rental guide covering Los Angeles, San Diego, San Francisco, and San Jose. Local pricing, permits, and trusted providers.",
  keywords: "California dumpster rental, LA dumpster rental, San Diego dumpster rental, San Francisco dumpster rental, San Jose dumpster rental"
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
  },
  {
    name: 'San Jose',
    slug: 'san-jose',
    priceRange: '$370-$570',
    providers: 11,
    image: '/images/cities/san-jose-skyline.webp',
    neighborhoods: ['Downtown', 'Willow Glen', 'Almaden Valley', 'Evergreen', 'North San Jose', 'Cambrian Park'],
    specialNotes: 'Silicon Valley tech hub with high construction activity. Growing market demand.',
    permitRequired: true,
    permitCost: '$85-$250',
    processingTime: '5-10 days'
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
                4 major cities • 44 providers • Premium market pricing
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

        {/* California Cities Coverage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Major California Markets
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                    priority={index < 2}
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

                  {/* Environmental Regulations Warning */}
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6 border-l-4 border-yellow-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3" />
                      <span className="font-bold text-yellow-800">Environmental Compliance</span>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      California requires strict waste sorting and recycling compliance. Many materials must be separated. 
                      Verify disposal requirements with your provider.
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
                      {city.name} requires permits for public right-of-way placement. 
                      {city.name === 'San Francisco' && ' Most restrictive permitting in the state.'}
                      {city.name === 'San Jose' && ' Silicon Valley tech construction creates high demand.'}
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
            California-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Differences</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• LA: Entertainment industry and strict regulations</li>
                  <li>• San Francisco: Premium pricing and limited space</li>
                  <li>• San Diego: Coastal considerations and military presence</li>
                  <li>• San Jose: Tech boom and Silicon Valley growth</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Book 5-7 days in advance during peak seasons</li>
                  <li>• Understand strict recycling requirements</li>
                  <li>• Factor in premium pricing for budgeting</li>
                  <li>• Allow extra time for permit processing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your California Dumpster Rental?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Get quotes from trusted local providers across California's major markets.
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