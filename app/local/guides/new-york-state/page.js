// app/local/guides/new-york-state/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Building2 } from 'lucide-react';

export const metadata = {
  title: "New York State Dumpster Rental Guide | NYC Metro Area",
  description: "Complete New York dumpster rental guide covering NYC and surrounding areas. Premium pricing, strict regulations, and trusted providers in the metro area.",
  keywords: "New York dumpster rental, NYC dumpster rental, Manhattan dumpster rental, Brooklyn dumpster rental"
};

const newYorkCities = [
  {
    name: 'New York City',
    slug: 'new-york',
    priceRange: '$450-$750',
    providers: 18,
    image: '/images/cities/nyc-skyline.webp',
    neighborhoods: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island', 'Long Island'],
    specialNotes: 'Most expensive market in US. Extremely limited street space and strict regulations.',
    permitRequired: true,
    permitCost: '$45-$200',
    processingTime: '7-14 days'
  }
];

const stateFeatures = [
  {
    icon: <Building2 className="w-6 h-6 text-indigo-600" />,
    title: 'Urban Density',
    description: 'Highest population density requires specialized logistics. Limited placement options and tight scheduling.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-red-600" />,
    title: 'Premium Market',
    description: 'Highest prices nationally due to real estate costs, fuel, labor, and disposal fees. Expect premium rates.'
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-orange-600" />,
    title: 'Strict Regulations',
    description: 'Complex city regulations, DOT requirements, and building codes. Professional guidance recommended.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: 'Expert Providers',
    description: 'Highly experienced providers skilled in navigating NYC challenges and regulations.'
  }
];

export default function NewYorkStatePage() {
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
            <span className="text-gray-900">New York</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-indigo-600 font-bold text-2xl">NY</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                New York State Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                NYC metro • 18 providers • Premium market pricing
              </p>
            </div>
          </div>
        </div>

        {/* New York State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            New York Market Overview
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

        {/* NYC Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            New York City Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {newYorkCities.map((city, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{city.name}</h3>
                    <p className="text-blue-100">Serving {city.providers} local providers</p>
                  </div>
                </div>

                {/* City Info */}
<div className="p-8 flex flex-col">                  
                  {/* Pricing - Emphasized for NYC */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center text-red-600">
                      <DollarSign className="w-6 h-6 mr-2" />
                      <span className="font-bold text-xl">{city.priceRange}</span>
                      <span className="text-sm text-red-500 ml-2">(Premium Market)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="text-lg">{city.providers} providers</span>
                    </div>
                  </div>

                  {/* Borough Coverage */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Borough Coverage:</h4>
                    <p className="text-gray-600">
                      {city.neighborhoods.join(', ')}
                    </p>
                  </div>

                  {/* Permit Info - Complex for NYC */}
                  <div className="bg-orange-50 rounded-lg p-4 mb-6 border-l-4 border-orange-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-bold text-orange-800">Complex DOT Requirements</span>
                    </div>
                    <p className="text-orange-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-orange-600 text-sm">
                      NYC DOT permits required for street placement. Additional building permits may be needed for construction projects.
                    </p>
                  </div>

                  {/* Space Limitations Warning */}
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-yellow-800 mb-2">🚧 Space Limitations</h4>
                    <p className="text-yellow-700 text-sm">
                      Limited street space and parking restrictions. Consider private property placement when possible. Many providers require advance site surveys.
                    </p>
                  </div>

                  {/* Special Notes */}
<div className="bg-gray-50 rounded-lg p-4 mb-6">
  <h4 className="font-semibold text-gray-900 mb-2">Special Considerations:</h4>
  <p className="text-gray-700 text-sm">{city.specialNotes}</p>
</div>

{/* CTA Button */}
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

        {/* NYC-Specific Tips */}
        <div className="bg-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            NYC Dumpster Rental Success Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏢 Urban Logistics</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Book 2+ weeks in advance during peak seasons</li>
                <li>• Consider smaller sizes due to space constraints</li>
                <li>• Plan around street cleaning schedules</li>
                <li>• Coordinate with building management early</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">💰 Cost Management</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Get multiple quotes - prices vary significantly</li>
                <li>• Ask about private property discounts</li>
                <li>• Consider shared rentals with neighbors</li>
                <li>• Factor in potential permit and space rental costs</li>
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
            Use our calculator to get personalized recommendations for your NYC project
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