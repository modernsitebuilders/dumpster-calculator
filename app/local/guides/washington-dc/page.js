// app/local/guides/washington-dc/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Building2, Shield } from 'lucide-react';

export const metadata = {
  title: "Washington DC Dumpster Rental Guide | Nation's Capital",
  description: "Complete Washington DC dumpster rental guide. Federal regulations, security considerations, premium pricing, and trusted providers in the nation's capital.",
  keywords: "Washington DC dumpster rental, DC dumpsters, federal district waste management"
};

const dcAreas = [
  {
    name: 'Washington DC',
    slug: 'washington-dc',
    priceRange: '$400-$650',
    providers: 14,
    image: '/images/cities/dc-skyline.webp',
    neighborhoods: ['Downtown', 'Capitol Hill', 'Dupont Circle', 'Georgetown', 'Adams Morgan', 'Foggy Bottom'],
    specialNotes: 'Federal regulations and security zones create unique challenges. Premium pricing due to high real estate costs.',
    permitRequired: true,
    permitCost: '$50 + $75-200/month',
    processingTime: '15 days'
  }
];

const stateFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: 'Federal Regulations',
    description: 'Security zones around government buildings require special clearances. Heightened security affects placement options.'
  },
  {
    icon: <Building2 className="w-6 h-6 text-gray-600" />,
    title: 'Dense Urban Core',
    description: 'Limited space and historic preservation rules create complex logistics. High-rise and renovation focus.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-red-600" />,
    title: 'Premium Market',
    description: 'Among highest costs nationally. Real estate prices, regulations, and security requirements drive up costs.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: 'Government Expertise',
    description: 'Providers experienced with federal contracting requirements and security protocols.'
  }
];

export default function WashingtonDCStatePage() {
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
            <span className="text-gray-900">Washington DC</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-2xl">DC</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Washington DC Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Federal district • 14 providers • Government regulations
              </p>
            </div>
          </div>
        </div>

        {/* DC Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Washington DC Market Overview
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

        {/* DC Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Washington DC Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {dcAreas.map((city, index) => (
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
                  
                  {/* Pricing - Premium Emphasized */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center text-red-600">
                      <DollarSign className="w-6 h-6 mr-2" />
                      <span className="font-bold text-xl">{city.priceRange}</span>
                      <span className="text-sm text-red-500 ml-2">(Premium)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="text-lg">{city.providers} providers</span>
                    </div>
                  </div>

                  {/* Areas */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Areas:</h4>
                    <p className="text-gray-600">
                      {city.neighborhoods.join(', ')}
                    </p>
                  </div>

                  {/* Security Zones Warning */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-400">
                    <div className="flex items-center mb-2">
                      <Shield className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-bold text-blue-800">Federal Security Considerations</span>
                    </div>
                    <p className="text-blue-700 text-sm">
                      Security zones around Capitol, White House, and federal buildings require special clearances. 
                      Some areas may have restricted access during events or elevated security levels.
                    </p>
                  </div>

                  {/* Permit Info - Complex */}
                  <div className="bg-orange-50 rounded-lg p-4 mb-6 border-l-4 border-orange-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="font-bold text-orange-800">DC Permit Requirements</span>
                    </div>
                    <p className="text-orange-700 text-sm mb-2">
                      Cost: {city.permitCost} • Processing: {city.processingTime}
                    </p>
                    <p className="text-orange-600 text-sm">
                      DC requires permits with both initial fees and monthly charges. Allow extra time for 
                      federal security clearances in sensitive areas.
                    </p>
                  </div>

                  {/* Historic Preservation */}
                  <div className="bg-amber-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-amber-800 mb-2">🏛️ Historic Preservation</h4>
                    <p className="text-amber-700 text-sm">
                      Many DC neighborhoods are historic districts with strict preservation rules. 
                      Georgetown and Capitol Hill require special consideration for placement and access.
                    </p>
                  </div>

                  {/* Special Notes */}
                  <p className="text-gray-600 mb-6">
                    <strong>Capital Reality:</strong> {city.specialNotes}
                  </p>

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

        {/* DC-Specific Tips */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Washington DC Dumpster Rental Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">🛡️ Security & Regulations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Check security clearance requirements early</li>
                <li>• Avoid placement near federal buildings when possible</li>
                <li>• Plan around government events and security changes</li>
                <li>• Consider background check requirements for workers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">💸 Cost Management</h3>
              <ul className="space-y-2 text-gray-700 text-small">
                <li>• Factor in monthly permit fees to project budget</li>
                <li>• Consider private property placement when available</li>
                <li>• Get multiple quotes due to high price variations</li>
                <li>• Plan around federal contracting requirements</li>
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
            Use our calculator to get personalized recommendations for your Washington DC project
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