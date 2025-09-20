// app/local/guides/ohio/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, DollarSign, Users, Clock, AlertCircle, CheckCircle, Factory } from 'lucide-react';

export const metadata = {
  title: "Ohio Dumpster Rental Guide | Columbus Metro Area",
  description: "Complete Ohio dumpster rental guide covering Columbus and surrounding areas. Industrial heritage, university town, and trusted providers.",
  keywords: "Ohio dumpster rental, Columbus dumpster rental, midwest dumpster rental"
};

const ohioCities = [
  {
    name: 'Columbus',
    slug: 'columbus',
    priceRange: '$285-$485',
    providers: 12,
    image: '/images/cities/columbus-skyline.webp',
    neighborhoods: ['Downtown', 'Short North', 'German Village', 'Victorian Village', 'Clintonville', 'Dublin'],
    specialNotes: 'State capital and university town. OSU campus projects and government facilities experience.',
    permitRequired: true,
    permitCost: '$45-$130',
    processingTime: '3-7 days'
  }
];

const stateFeatures = [
  {
    icon: <Factory className="w-6 h-6 text-gray-600" />,
    title: 'Industrial Heritage',
    description: 'Strong manufacturing background with experience in heavy industrial and commercial waste management.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    title: 'Competitive Pricing',
    description: 'Midwest pricing with good competition among providers. Reasonable rates for most project types.'
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: 'University Market',
    description: 'OSU campus creates consistent demand. Student housing and university construction projects common.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
    title: 'Central Ohio Hub',
    description: 'Columbus serves broader central Ohio region with good coverage and established provider network.'
  }
];

export default function OhioStatePage() {
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
            <span className="text-gray-900">Ohio</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <span className="text-red-600 font-bold text-2xl">OH</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                Ohio Dumpster Rental Guide
              </h1>
              <p className="text-xl text-gray-600">
                Columbus metro • 12 providers • University and government hub
              </p>
            </div>
          </div>
        </div>

        {/* Ohio State Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ohio Market Overview
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

        {/* Columbus Focus */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Columbus Metro Coverage
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ohioCities.map((city, index) => (
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

                  {/* University Schedule Alert */}
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6 border-l-4 border-yellow-400">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3" />
                      <span className="font-bold text-yellow-800">University Schedule Impact</span>
                    </div>
                    <p className="text-yellow-700 text-sm">
                      OSU academic calendar affects demand. Fall move-in and spring projects create peak periods. 
                      Football game days may impact downtown access.
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
                      Columbus requires permits for public right-of-way placement. Historic districts like German Village have special requirements.
                    </p>
                  </div>

                  {/* Special Notes */}
                  <div className="bg-gray-50 rounded-lg p-4">
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
            Ohio-Specific Tips
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">University Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• OSU campus projects require special coordination</li>
                  <li>• Student housing moves create seasonal demand</li>
                  <li>• Football game days affect downtown access</li>
                  <li>• Academic calendar impacts availability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plan around major OSU events</li>
                  <li>• Historic district compliance important</li>
                  <li>• Government facility projects common</li>
                  <li>• Industrial experience valuable for heavy projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-red-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Find Your Ohio Dumpster Rental?</h2>
            <p className="text-red-100 mb-6 text-lg">
              Get quotes from trusted local providers across Ohio's capital region.
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