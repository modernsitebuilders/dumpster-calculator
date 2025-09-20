// app/local/guides/texas/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Thermometer } from 'lucide-react';

export const metadata = {
  title: "Texas Dumpster Rental Guide | Houston, Dallas, San Antonio, Austin, Fort Worth",
  description: "Complete Texas dumpster rental guide covering Houston, Dallas, San Antonio, Austin, and Fort Worth. Local pricing, permits, and trusted providers across the Lone Star State.",
  keywords: "Texas dumpster rental, Houston dumpster rental, Dallas dumpster rental, San Antonio dumpster rental, Austin dumpster rental, Fort Worth dumpster rental"
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
  },
  {
    name: 'Fort Worth',
    slug: 'fort-worth',
    priceRange: '$275-$475',
    providers: 10,
    image: '/images/cities/fort-worth-skyline.webp',
    neighborhoods: ['Downtown', 'Sundance Square', 'Near Southside', 'Cultural District', 'TCU Area', 'Alliance'],
    specialNotes: 'Historic cowtown with modern development. Part of DFW Metroplex logistics hub.',
    permitRequired: true,
    permitCost: '$50-$140',
    processingTime: '3-7 days'
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
                5 major cities • 50 providers • Competitive market pricing
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

        {/* Texas Cities Coverage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Major Texas Markets
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {texasCities.map((city, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Popular Areas:</h4>
                    <p className="text-gray-600">
                      {city.neighborhoods.join(', ')}
                    </p>
                  </div>

                  {/* Heat Warning */}
                  <div className="bg-red-50 rounded-lg p-4 mb-6 border-l-4 border-red-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <span className="font-bold text-red-800">Summer Heat Planning</span>
                    </div>
                    <p className="text-red-700 text-sm">
                      June - September: Extreme heat (100°F+) affects waste decomposition and loading conditions. 
                      Consider covered placement and plan work during cooler morning hours.
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
                      {city.name === 'Dallas' && ' Escalating fees for violations.'}
                      {city.name === 'Fort Worth' && ' Part of DFW Metroplex regulations.'}
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
            Texas-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Differences</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Houston: Energy capital with industrial expertise</li>
                  <li>• Dallas/Fort Worth: DFW Metroplex logistics hub</li>
                  <li>• Austin: Tech boom creating high demand</li>
                  <li>• San Antonio: Military and medical center growth</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plan around extreme summer heat</li>
                  <li>• Book 3-5 days in advance during peak seasons</li>
                  <li>• Consider permit processing times</li>
                  <li>• Account for rapid population growth in Austin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-red-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Texas Dumpster Rental?</h2>
            <p className="text-red-100 mb-6 text-lg">
              Get quotes from trusted local providers across the Lone Star State.
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