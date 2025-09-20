// app/local/guides/north-carolina/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Sun, Building2, TreePine } from 'lucide-react';

export const metadata = {
  title: "North Carolina Dumpster Rental Guide | Charlotte, Raleigh Metro Areas",
  description: "Complete North Carolina dumpster rental guide covering Charlotte and Raleigh. Banking hub growth, Research Triangle, and trusted providers.",
  keywords: "North Carolina dumpster rental, Charlotte dumpster rental, Raleigh dumpster rental"
};

const northCarolinaCities = [
  {
    name: 'Charlotte',
    slug: 'charlotte',
    priceRange: '$280-$480',
    providers: 11,
    image: '/images/cities/charlotte-skyline.webp',
    neighborhoods: ['Uptown', 'South End', 'NoDa', 'Dilworth', 'Myers Park', 'Ballantyne'],
    specialNotes: 'Rapidly growing financial center with extensive suburban development. Strong competition keeps prices competitive.',
    permitRequired: true,
    permitCost: '$30-$100',
    processingTime: '3-7 days'
  },
  {
    name: 'Raleigh',
    slug: 'raleigh',
    priceRange: '$290-$490',
    providers: 9,
    image: '/images/cities/raleigh-skyline.webp',
    neighborhoods: ['Downtown', 'North Hills', 'Cary', 'Apex', 'Wake Forest', 'Garner'],
    specialNotes: 'State capital and Research Triangle hub. University projects and government construction activity.',
    permitRequired: true,
    permitCost: '$35-$110',
    processingTime: '3-5 days'
  }
];

const stateFeatures = [
  {
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    title: 'Banking & Tech Hubs',
    description: 'Charlotte financial center and Raleigh Research Triangle drive commercial construction and corporate relocations.'
  },
  {
    icon: <TreePine className="w-6 h-6 text-green-600" />,
    title: 'Tree City Growth',
    description: 'Extensive tree coverage requires careful planning for residential projects and utility work.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Competitive Pricing',
    description: 'Below-average costs compared to major metros. Strong provider competition benefits customers.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Rapid Expansion',
    description: 'Fast-growing population and business relocations create consistent demand for waste services.'
  }
];

export default function NorthCarolinaStatePage() {
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
            <span className="text-gray-900">North Carolina</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">NC</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                North Carolina Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                2 major cities • 20 providers • Financial hub & Research Triangle
              </p>
            </div>
          </div>
        </div>

        {/* North Carolina State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            North Carolina Market Overview
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

        {/* North Carolina Cities Coverage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Major North Carolina Markets
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {northCarolinaCities.map((city, index) => (
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
                <div className="p-8 flex flex-col h-full">
                  
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

                  {/* Growth Market Alert */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-bold text-blue-800">Growth Market</span>
                    </div>
                    <p className="text-blue-700 text-sm">
                      {city.name === 'Charlotte' ? 
                        'Second-largest banking center in US. Corporate relocations and high-rise construction create steady demand.' :
                        'Research Triangle and state government drive tech sector growth. University projects and government construction activity.'
                      }
                    </p>
                  </div>

                  {/* Permit Info */}
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-semibold text-green-800">Permit Information</span>
                    </div>
                    <p className="text-green-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-green-600 text-sm">
                      {city.name} permits are reasonably priced with efficient processing. Business-friendly environment.
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

        {/* State-Specific Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            North Carolina-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Differences</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Charlotte: Banking hub with corporate construction</li>
                  <li>• Raleigh: Research Triangle tech and university projects</li>
                  <li>• Both cities: Extensive tree coverage requires planning</li>
                  <li>• Hurricane season affects eastern areas minimally</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plan around major sporting events and conventions</li>
                  <li>• Consider tree protection in historic neighborhoods</li>
                  <li>• Spring and fall are peak construction seasons</li>
                  <li>• University schedules affect Raleigh-Durham demand</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your North Carolina Dumpster Rental?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Get quotes from trusted local providers across North Carolina's major markets.
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