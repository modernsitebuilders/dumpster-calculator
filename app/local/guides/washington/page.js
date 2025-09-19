// app/local/guides/washington/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Cloud, Recycle } from 'lucide-react';

export const metadata = {
  title: "Washington State Dumpster Rental Guide | Seattle Metro Area",
  description: "Complete Washington dumpster rental guide covering Seattle and surrounding areas. Rain considerations, environmental regulations, and trusted providers.",
  keywords: "Washington dumpster rental, Seattle dumpster rental, Pacific Northwest dumpsters"
};

const washingtonCities = [
  {
    name: 'Seattle',
    slug: 'seattle',
    priceRange: '$380-$580',
    providers: 8,
    image: '/images/cities/seattle-skyline.webp',
    neighborhoods: ['Capitol Hill', 'Ballard', 'Fremont', 'Queen Anne', 'Bellevue', 'Redmond'],
    specialNotes: 'Rain affects scheduling year-round. Strong environmental regulations require careful sorting.',
    permitRequired: true,
    permitCost: '$50-$200',
    processingTime: '5-10 days'
  }
];

const stateFeatures = [
  {
    icon: <Cloud className="w-6 h-6 text-gray-600" />,
    title: 'Weather Planning',
    description: 'Frequent rain requires covered containers and flexible scheduling. Plan for seasonal delivery delays.'
  },
  {
    icon: <Recycle className="w-6 h-6 text-green-600" />,
    title: 'Environmental Focus',
    description: 'Strong recycling and waste sorting requirements. Many materials must be separated for proper disposal.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-blue-600" />,
    title: 'Premium Pricing',
    description: 'Higher costs due to environmental regulations and disposal fees. Expect 15-25% above national average.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Tech Hub Growth',
    description: 'Booming tech industry drives residential and commercial construction. High demand in metro areas.'
  }
];

export default function WashingtonStatePage() {
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
            <span className="text-gray-900">Washington</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-teal-600 font-bold text-2xl">WA</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Washington State Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Seattle metro • 8 providers • Environmental regulations
              </p>
            </div>
          </div>
        </div>

        {/* Washington State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Washington Market Overview
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

        {/* Seattle Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Seattle Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {washingtonCities.map((city, index) => (
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

                  {/* Environmental Requirements */}
                  <div className="bg-green-50 rounded-lg p-4 mb-6 border-l-4 border-green-400">
                    <div className="flex items-center mb-2">
                      <Recycle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-bold text-green-800">Recycling Requirements</span>
                    </div>
                    <p className="text-green-700 text-sm">
                      Washington requires separation of recyclables, organics, and hazardous materials. 
                      Additional fees may apply for improperly sorted waste.
                    </p>
                  </div>

                  {/* Permit Info */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-semibold text-blue-800">Seattle Permits</span>
                    </div>
                    <p className="text-blue-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-blue-600 text-sm">
                      Street use permits required for public right-of-way placement in Seattle.
                    </p>
                  </div>

                  {/* Weather Notice */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">☔ Weather Considerations</h4>
                    <p className="text-gray-700 text-sm">
                      Pacific Northwest weather can affect delivery schedules. Consider covered containers during rainy months (October-May).
                    </p>
                  </div>

                  {/* Special Notes */}
                  <p className="text-gray-600 mb-6">
                    <strong>Local Reality:</strong> {city.specialNotes}
                  </p>

                  {/* CTA Button */}
                  <Link 
                    href={`/dumpster-rental-${city.slug}`}
                    className="block w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-lg transition-colors font-semibold text-center text-lg"
                  >
                    View Seattle Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Washington-Specific Tips */}
        <div className="bg-teal-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Washington Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">♻️ Environmental Compliance</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Separate recyclables before disposal</li>
                <li>• Compost organic materials where required</li>
                <li>• Ask providers about green disposal options</li>
                <li>• Avoid hazardous materials in dumpsters</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🌧️ Weather Planning</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Request covered containers for extended rentals</li>
                <li>• Allow extra time during winter months</li>
                <li>• Plan around major storm systems</li>
                <li>• Consider placement on paved surfaces</li>
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
            Use our calculator to get personalized recommendations for your Washington project
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