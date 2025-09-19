// app/local/guides/texas/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Thermometer } from 'lucide-react';

export const metadata = {
  title: "Texas Dumpster Rental Guide | Houston, Dallas, San Antonio, Austin",
  description: "Complete Texas dumpster rental guide covering Houston, Dallas, San Antonio, and Austin. Local pricing, permits, and trusted providers across the Lone Star State.",
  keywords: "Texas dumpster rental, Houston dumpster rental, Dallas dumpster rental, San Antonio dumpster rental, Austin dumpster rental"
};

const texasCities = [
  {
    name: 'Houston',
    slug: 'houston',
    priceRange: '$280-$480',
    providers: 12,
    image: '/images/cities/houston-skyline.webp',
    neighborhoods: ['Downtown', 'Galleria', 'River Oaks', 'Heights', 'Montrose', 'Energy Corridor'],
    specialNotes: 'Major metropolitan area with extensive service coverage.',
    permitRequired: true,
    permitCost: '$50-$150',
    processingTime: '3-5 days'
  },
  {
    name: 'Dallas',
    slug: 'dallas',
    priceRange: '$285-$485',
    providers: 11,
    image: '/images/cities/dallas-skyline.webp',
    neighborhoods: ['Downtown', 'Deep Ellum', 'Uptown', 'Bishop Arts', 'Knox-Henderson', 'Design District'],
    specialNotes: 'Part of DFW Metroplex. Escalating permit fees for violations.',
    permitRequired: true,
    permitCost: '$240+ (escalating)',
    processingTime: '48 hours - 2 weeks'
  },
  {
    name: 'San Antonio',
    slug: 'san-antonio',
    priceRange: '$270-$470',
    providers: 8,
    image: '/images/cities/san-antonio-skyline.webp',
    neighborhoods: ['Downtown', 'Southtown', 'King William', 'Stone Oak', 'Alamo Heights', 'Medical Center'],
    specialNotes: 'Growing city with expanding service areas.',
    permitRequired: true,
    permitCost: '$25-$75',
    processingTime: '3-7 days'
  },
  {
    name: 'Austin',
    slug: 'austin',
    priceRange: '$295-$495',
    providers: 9,
    image: '/images/cities/austin-skyline.webp',
    neighborhoods: ['Downtown', 'South Austin', 'East Austin', 'Zilker', 'Mueller', 'Cedar Park'],
    specialNotes: 'Rapidly growing tech hub with high construction activity.',
    permitRequired: true,
    permitCost: '$50-$125',
    processingTime: '5-10 days'
  }
];

const stateFeatures = [
  {
    icon: <Thermometer className="w-6 h-6 text-red-600" />,
    title: 'Heat Considerations',
    description: 'Extreme summer heat affects waste decomposition. Plan for odor management and faster scheduling.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Competitive Pricing',
    description: 'Generally 15-25% below national average. Strong competition among providers keeps costs reasonable.'
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    title: 'Wide Service Areas',
    description: 'Extensive coverage across major metro areas and rural regions. Good provider availability.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Business-Friendly',
    description: 'Streamlined permitting in most areas. Less restrictive regulations than many states.'
  }
];

export default function TexasStatePage() {
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
            <span className="text-gray-900">Texas</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-red-600 font-bold text-2xl">TX</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Texas Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                4 major cities • 40 providers • Competitive market pricing
              </p>
            </div>
          </div>
        </div>

        {/* Texas State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Texas Market Overview
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
            Texas Cities We Cover
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {texasCities.map((city, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                
                {/* City Image */}
                <div className="relative h-48">
                  <Image
                    src={city.image}
                    alt={`${city.name} skyline`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
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
                    className="block w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold text-center"
                  >
                    View {city.name} Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Texas Tips */}
        <div className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Texas Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🌡️ Weather Considerations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Schedule delivery/pickup early morning in summer</li>
                <li>• Cover organic waste to prevent odors in heat</li>
                <li>• Plan around severe weather seasons</li>
                <li>• Allow extra time during hurricane season</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">💰 Cost Savings</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Compare prices across metro areas</li>
                <li>• Book during off-peak construction seasons</li>
                <li>• Consider longer rental periods for discounts</li>
                <li>• Ask about volume discounts for multiple projects</li>
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
            Use our calculator to get personalized recommendations for your Texas project
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