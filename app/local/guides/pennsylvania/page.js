// app/local/guides/pennsylvania/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Building, Factory } from 'lucide-react';

export const metadata = {
  title: "Pennsylvania Dumpster Rental Guide | Philadelphia Metro Area",
  description: "Complete Pennsylvania dumpster rental guide covering Philadelphia and surrounding areas. Historic city challenges, industrial heritage, and trusted providers.",
  keywords: "Pennsylvania dumpster rental, Philadelphia dumpster rental, Philly dumpsters"
};

const pennsylvaniaCities = [
  {
    name: 'Philadelphia',
    slug: 'philadelphia',
    priceRange: '$320-$520',
    providers: 16,
    image: '/images/cities/philadelphia-skyline.webp',
    neighborhoods: ['Center City', 'Old City', 'Northern Liberties', 'Fishtown', 'South Philly', 'University City'],
    specialNotes: 'Dense urban environment with narrow streets. Historic districts require special considerations.',
    permitRequired: true,
    permitCost: '$80-$500/year',
    processingTime: '5 days'
  }
];

const stateFeatures = [
  {
    icon: <Building className="w-6 h-6 text-blue-600" />,
    title: 'Historic Challenges',
    description: 'Colonial-era city layout creates access challenges. Historic preservation rules affect placement options.'
  },
  {
    icon: <Factory className="w-6 h-6 text-gray-600" />,
    title: 'Industrial Heritage',
    description: 'Strong manufacturing history means experienced providers with heavy materials and industrial waste.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Moderate Pricing',
    description: 'Mid-Atlantic pricing with competitive options. Annual permits can provide cost savings for contractors.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Urban Renewal',
    description: 'Ongoing neighborhood revitalization creates consistent demand for renovation and construction services.'
  }
];

export default function PennsylvaniaStatePage() {
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
            <span className="text-gray-900">Pennsylvania</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">PA</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Pennsylvania Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Philadelphia metro • 16 providers • Historic city considerations
              </p>
            </div>
          </div>
        </div>

        {/* Pennsylvania State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Pennsylvania Market Overview
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

        {/* Philadelphia Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Philadelphia Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pennsylvaniaCities.map((city, index) => (
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

                  {/* Neighborhoods */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Popular Areas:</h4>
                    <p className="text-gray-600">
                      {city.neighborhoods.join(', ')}
                    </p>
                  </div>

                  {/* Historic Challenges */}
                  <div className="bg-amber-50 rounded-lg p-4 mb-6 border-l-4 border-amber-400">
                    <div className="flex items-center mb-2">
                      <Building className="w-5 h-5 text-amber-600 mr-3" />
                      <span className="font-bold text-amber-800">Historic District Considerations</span>
                    </div>
                    <p className="text-amber-700 text-sm">
                      Old City and Society Hill have strict placement rules. Colonial-era streets limit truck access. 
                      Historic preservation guidelines may apply to certain areas.
                    </p>
                  </div>

                  {/* Permit Info - Annual Option */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-bold text-blue-800">Annual Permit Available</span>
                    </div>
                    <p className="text-blue-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-blue-600 text-sm">
                      Philadelphia offers annual permits up to $500/year, which can be cost-effective for contractors 
                      with multiple projects.
                    </p>
                  </div>

                  {/* Urban Density */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">🏙️ Dense Urban Environment</h4>
                    <p className="text-gray-700 text-sm">
                      Narrow streets and limited parking require careful coordination. Many areas need smaller trucks 
                      or alternative placement strategies.
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

        {/* Pennsylvania-Specific Tips */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Pennsylvania Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🏛️ Historic Considerations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Check historic district requirements early</li>
                <li>• Plan for narrow street access challenges</li>
                <li>• Consider private property placement when possible</li>
                <li>• Coordinate with neighborhood associations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">💰 Cost Optimization</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Consider annual permits for multiple projects</li>
                <li>• Strong provider competition offers options</li>
                <li>• Suburban placement often more flexible</li>
                <li>• Plan around Eagles games and major events</li>
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
            Use our calculator to get personalized recommendations for your Pennsylvania project
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