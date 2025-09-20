// app/local/guides/arizona/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Sun, Thermometer } from 'lucide-react';

export const metadata = {
  title: "Arizona Dumpster Rental Guide | Phoenix Metro Area",
  description: "Complete Arizona dumpster rental guide covering Phoenix and surrounding areas. Desert climate considerations, competitive pricing, and trusted providers.",
  keywords: "Arizona dumpster rental, Phoenix dumpster rental, desert waste management"
};

const arizonaCities = [
  {
    name: 'Phoenix',
    slug: 'phoenix',
    priceRange: '$295-$495',
    providers: 12,
    image: '/images/cities/phoenix-skyline.webp',
    neighborhoods: ['Downtown', 'Scottsdale', 'Tempe', 'Mesa', 'Glendale', 'Chandler'],
    specialNotes: 'Extreme summer heat affects scheduling. Rapidly growing metro area with extensive suburban coverage.',
    permitRequired: true,
    permitCost: '$25-$100',
    processingTime: '15 days'
  }
];

const stateFeatures = [
  {
    icon: <Thermometer className="w-6 h-6 text-red-600" />,
    title: 'Extreme Heat',
    description: 'Summer temperatures exceed 115°F. Early morning and evening scheduling essential June-September.'
  },
  {
    icon: <Sun className="w-6 h-6 text-orange-600" />,
    title: 'Year-Round Construction',
    description: 'Mild winters allow continuous construction. Peak building season October-April when temperatures moderate.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Competitive Rates',
    description: 'Below-average costs with strong provider competition. Good value for desert southwest region.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Rapid Growth',
    description: 'Fast-expanding metro area with new developments. Strong demand for residential and commercial services.'
  }
];

export default function ArizonaStatePage() {
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
            <span className="text-gray-900">Arizona</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-orange-600 font-bold text-2xl">AZ</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Arizona Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Phoenix metro • 12 providers • Desert climate considerations
              </p>
            </div>
          </div>
        </div>

        {/* Arizona State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Arizona Market Overview
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

        {/* Phoenix Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Phoenix Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {arizonaCities.map((city, index) => (
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

                  {/* Metro Areas */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Metro Coverage:</h4>
                    <p className="text-gray-600">
                      {city.neighborhoods.join(', ')}
                    </p>
                  </div>

                  {/* Heat Warning */}
                  <div className="bg-red-50 rounded-lg p-4 mb-6 border-l-4 border-red-400">
                    <div className="flex items-center mb-2">
                      <Thermometer className="w-5 h-5 text-red-600 mr-3" />
                      <span className="font-bold text-red-800">Extreme Heat Considerations</span>
                    </div>
                    <p className="text-red-700 text-sm">
                      Summer temperatures can exceed 115°F. Schedule deliveries and pickups for early morning or evening hours 
                      June-September to protect workers and equipment.
                    </p>
                  </div>

                  {/* Permit Info */}
                  <div className="bg-orange-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-semibold text-orange-800">Phoenix Permits</span>
                    </div>
                    <p className="text-orange-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-orange-600 text-sm">
                      Phoenix requires permits for street placement. Allow extra time for city processing.
                    </p>
                  </div>

                  {/* Growth Opportunity */}
                  <div className="bg-purple-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-purple-800 mb-2">🌵 Desert Boom</h4>
                    <p className="text-purple-700 text-sm">
                      Phoenix is one of fastest-growing metros in US. New developments and population influx create 
                      consistent demand for waste services.
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

        {/* Arizona-Specific Tips */}
        <div className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Arizona Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🌡️ Heat Management</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Schedule deliveries before 10 AM or after 6 PM in summer</li>
                <li>• Cover organic waste to prevent extreme odors</li>
                <li>• Ensure adequate shade for workers when possible</li>
                <li>• Plan major projects for fall/winter/spring months</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏜️ Desert Considerations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Dust storms may affect delivery schedules</li>
                <li>• UV exposure degrades some container materials faster</li>
                <li>• Consider placement on paved surfaces when possible</li>
                <li>• Flash flood awareness in wash areas</li>
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
            Use our calculator to get personalized recommendations for your Arizona project
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