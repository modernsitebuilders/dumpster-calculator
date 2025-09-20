// app/local/guides/oregon/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, TreePine, Cloud } from 'lucide-react';

export const metadata = {
  title: "Oregon State Dumpster Rental Guide | Portland Metro Area",
  description: "Complete Oregon dumpster rental guide covering Portland and surrounding areas. Environmental regulations, rain considerations, and eco-friendly providers.",
  keywords: "Oregon dumpster rental, Portland dumpster rental, eco-friendly dumpsters"
};

const oregonCities = [
  {
    name: 'Portland',
    slug: 'portland',
    priceRange: '$330-$530',
    providers: 6,
    image: '/images/cities/portland-skyline.webp',
    neighborhoods: ['Pearl District', 'Hawthorne', 'Alberta', 'Sellwood', 'Beaverton', 'Lake Oswego'],
    specialNotes: 'Strong environmental focus requires careful waste sorting. Rain affects outdoor projects year-round.',
    permitRequired: true,
    permitCost: '$40-$120',
    processingTime: '5-10 days'
  }
];

const stateFeatures = [
  {
    icon: <TreePine className="w-6 h-6 text-green-600" />,
    title: 'Environmental Focus',
    description: 'Strict recycling and composting requirements. Strong emphasis on sustainable waste management practices.'
  },
  {
    icon: <Cloud className="w-6 h-6 text-gray-600" />,
    title: 'Rain Considerations',
    description: 'Frequent precipitation requires covered containers and flexible scheduling. Plan for weather delays.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-blue-600" />,
    title: 'Moderate Pricing',
    description: 'Mid-range pricing with premiums for eco-friendly services. Green disposal options increasingly available.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Sustainable Options',
    description: 'Growing market for green construction and sustainable renovation projects. Eco-conscious providers.'
  }
];

export default function OregonStatePage() {
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
            <span className="text-gray-900">Oregon</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold text-2xl">OR</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Oregon Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Portland metro • 6 providers • Eco-friendly solutions
              </p>
            </div>
          </div>
        </div>

        {/* Oregon State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Oregon Market Overview
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

        {/* Portland Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Portland Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {oregonCities.map((city, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Metro Areas:</h4>
                    <p className="text-gray-600">
                      {city.neighborhoods.join(', ')}
                    </p>
                  </div>

                  {/* Environmental Requirements */}
                  <div className="bg-green-50 rounded-lg p-4 mb-6 border-l-4 border-green-400">
                    <div className="flex items-center mb-2">
                      <TreePine className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-bold text-green-800">Sustainability Requirements</span>
                    </div>
                    <p className="text-green-700 text-sm">
                      Portland requires separation of recyclables, organics, and construction materials. 
                      Many providers offer green disposal and LEED-compliant waste services.
                    </p>
                  </div>

                  {/* Permit Info */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-semibold text-blue-800">Portland Permits</span>
                    </div>
                    <p className="text-blue-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-blue-600 text-sm">
                      Street use permits required for public right-of-way placement in Portland metro area.
                    </p>
                  </div>

                  {/* Weather Notice */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">🌧️ Pacific Northwest Weather</h4>
                    <p className="text-gray-700 text-sm">
                      Expect rain October-May. Consider covered containers for extended rentals and allow extra time for weather-related delays.
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

        {/* Oregon-Specific Tips */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Oregon Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🌿 Green Practices</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Separate materials for maximum recycling</li>
                <li>• Ask about LEED certification support</li>
                <li>• Consider compostable waste options</li>
                <li>• Look for carbon-neutral disposal services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">☔ Weather Planning</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Request covered containers when available</li>
                <li>• Plan projects during drier summer months</li>
                <li>• Allow flexibility for rain delays</li>
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
            Use our calculator to get personalized recommendations for your Oregon project
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