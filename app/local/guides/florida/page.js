// app/local/guides/florida/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Sun, Waves } from 'lucide-react';

export const metadata = {
  title: "Florida Dumpster Rental Guide | Miami, Tampa, Jacksonville, Orlando",
  description: "Complete Florida dumpster rental guide covering Miami, Tampa, Jacksonville, and Orlando. Hurricane season considerations, coastal regulations, and trusted providers.",
  keywords: "Florida dumpster rental, Miami dumpster rental, Tampa dumpster rental, Jacksonville dumpster rental, Orlando dumpster rental"
};

const floridaCities = [
  {
    name: 'Miami',
    slug: 'miami',
    priceRange: '$340-$540',
    providers: 10,
    image: '/images/cities/miami-skyline.webp',
    neighborhoods: ['South Beach', 'Downtown Miami', 'Coral Gables', 'Coconut Grove', 'Wynwood', 'Brickell'],
    specialNotes: 'Hurricane season affects scheduling. Coastal regulations may apply in waterfront areas.',
    permitRequired: true,
    permitCost: '$35-$150',
    processingTime: '3-7 days'
  },
  {
    name: 'Tampa',
    slug: 'tampa',
    priceRange: '$315-$515',
    providers: 11,
    image: '/images/cities/tampa-skyline.webp',
    neighborhoods: ['Downtown', 'Ybor City', 'Hyde Park', 'Westshore', 'Davis Islands', 'Brandon'],
    specialNotes: 'Major port city with growing tech sector. Bay area logistics and convention center projects.',
    permitRequired: true,
    permitCost: '$45-$125',
    processingTime: '3-5 days'
  },
  {
    name: 'Jacksonville',
    slug: 'jacksonville',
    priceRange: '$295-$495',
    providers: 9,
    image: '/images/cities/jacksonville-skyline.webp',
    neighborhoods: ['Downtown', 'Riverside', 'Avondale', 'Southside', 'Mandarin', 'Neptune Beach'],
    specialNotes: 'Largest city by area in US. Military presence and port operations create diverse project needs.',
    permitRequired: true,
    permitCost: '$35-$115',
    processingTime: '2-5 days'
  },
  {
    name: 'Orlando',
    slug: 'orlando',
    priceRange: '$305-$505',
    providers: 12,
    image: '/images/cities/orlando-skyline.webp',
    neighborhoods: ['Downtown', 'Winter Park', 'Dr. Phillips', 'Mills 50', 'College Park', 'Lake Nona'],
    specialNotes: 'Tourism capital with theme park construction activity. Convention center and hospitality projects.',
    permitRequired: true,
    permitCost: '$50-$130',
    processingTime: '3-7 days'
  }
];

const stateFeatures = [
  {
    icon: <Sun className="w-6 h-6 text-yellow-600" />,
    title: 'Year-Round Construction',
    description: 'Consistent weather allows construction projects throughout the year. Peak season pricing during winter months.'
  },
  {
    icon: <Waves className="w-6 h-6 text-blue-600" />,
    title: 'Hurricane Preparedness',
    description: 'June-November hurricane season requires flexible scheduling and secure placement options.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Moderate Pricing',
    description: 'Competitive rates with seasonal variations. Winter snowbird season can increase demand and prices.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Coastal Expertise',
    description: 'Providers experienced with coastal regulations, salt air considerations, and flood zone requirements.'
  }
];

export default function FloridaStatePage() {
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
            <span className="text-gray-900">Florida</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-orange-600 font-bold text-2xl">FL</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Florida Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                4 major cities • 42 providers • Hurricane season considerations
              </p>
            </div>
          </div>
        </div>

        {/* Florida State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Florida Market Overview
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

        {/* Florida Cities Coverage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Major Florida Markets
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {floridaCities.map((city, index) => (
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

                  {/* Hurricane Season Warning */}
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6 border-l-4 border-yellow-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3" />
                      <span className="font-bold text-yellow-800">Hurricane Season Planning</span>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      June 1 - November 30: Allow flexible scheduling and consider secure placement during storm warnings. 
                      Some providers may require early pickup during hurricane watches.
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
                      {city.name} requires permits for public right-of-way placement. Coastal areas may have additional regulations.
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
            Florida-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hurricane Preparedness</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monitor weather forecasts during hurricane season</li>
                  <li>• Consider secure tie-downs for extended placements</li>
                  <li>• Plan alternative pickup dates during storm watches</li>
                  <li>• Storm debris cleanup creates high demand periods</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Miami: International business hub with strict codes</li>
                  <li>• Tampa: Port city with logistics infrastructure</li>
                  <li>• Jacksonville: Military presence and large geographic area</li>
                  <li>• Orlando: Tourism capital with theme park projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-orange-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Florida Dumpster Rental?</h2>
            <p className="text-orange-100 mb-6 text-lg">
              Get quotes from trusted local providers across Florida's major markets.
            </p>
            <div className="space-y-4">
              <Link 
                href="/" 
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition font-semibold text-lg"
              >
                Get Instant Quote
              </Link>
              <div className="text-sm text-orange-200">
                <Link href="/local/guides" className="hover:underline">← Back to All State Guides</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}