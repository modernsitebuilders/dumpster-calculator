// app/local/page.js - MAIN LOCAL HUB PAGE
import Link from 'next/link';
import { MapPin, FileText, DollarSign } from 'lucide-react';

export const metadata = {
  title: "Local Dumpster Rental Information by City | Permits & Pricing",
  description: "Find city-specific dumpster rental pricing, permit requirements, and local regulations for major US cities. Complete local guides for your area.",
  keywords: "local dumpster rental, city permits, dumpster pricing by city, local regulations"
};

export default function LocalHubPage() {
  const majorCities = [
    { name: 'Chicago', state: 'IL', slug: 'chicago' },
    { name: 'Houston', state: 'TX', slug: 'houston' },
    { name: 'New York', state: 'NY', slug: 'new-york' },
    { name: 'Los Angeles', state: 'CA', slug: 'los-angeles' },
    { name: 'Phoenix', state: 'AZ', slug: 'phoenix' },
    { name: 'Philadelphia', state: 'PA', slug: 'philadelphia' },
    { name: 'San Antonio', state: 'TX', slug: 'san-antonio' },
    { name: 'San Diego', state: 'CA', slug: 'san-diego' },
    { name: 'Dallas', state: 'TX', slug: 'dallas' },
    { name: 'Miami', state: 'FL', slug: 'miami' },
    { name: 'Atlanta', state: 'GA', slug: 'atlanta' },
    { name: 'Seattle', state: 'WA', slug: 'seattle' },
    { name: 'Denver', state: 'CO', slug: 'denver' },
    { name: 'Boston', state: 'MA', slug: 'boston' },
    { name: 'Detroit', state: 'MI', slug: 'detroit' },
    { name: 'Portland', state: 'OR', slug: 'portland' },
    { name: 'Charlotte', state: 'NC', slug: 'charlotte' },
    { name: 'Austin', state: 'TX', slug: 'austin' },
    { name: 'San Francisco', state: 'CA', slug: 'san-francisco' },
    { name: 'Washington DC', state: 'DC', slug: 'washington-dc' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Local Dumpster Rental Information
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find city-specific pricing, permit requirements, and local regulations
          </p>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/local/guides" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Pricing & Providers
            </Link>
            <Link href="/local/permits" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Permits & Regulations
            </Link>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Local Guides Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Local Pricing & Providers</h2>
                <p className="text-gray-600">Find trusted companies in your area</p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold">City-Specific Pricing</h4>
                  <p className="text-gray-600 text-sm">Real pricing data for each major city</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold">Neighborhood Coverage</h4>
                  <p className="text-gray-600 text-sm">Areas served by local providers</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold">Trusted Companies</h4>
                  <p className="text-gray-600 text-sm">Vetted local dumpster rental providers</p>
                </div>
              </div>
            </div>
            <Link href="/local/guides" className="block bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              View All Local Guides →
            </Link>
          </div>

          {/* Permits Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Permits & Regulations</h2>
                <p className="text-gray-600">Navigate local requirements</p>
              </div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold">Permit Requirements</h4>
                  <p className="text-gray-600 text-sm">When and where permits are needed</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold">Application Process</h4>
                  <p className="text-gray-600 text-sm">Step-by-step permit applications</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold">Costs & Timeline</h4>
                  <p className="text-gray-600 text-sm">Fees and processing times</p>
                </div>
              </div>
            </div>
            <Link href="/local/permits" className="block bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition font-semibold">
              View All Permit Guides →
            </Link>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Select Your City
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {majorCities.map((city) => (
              <div key={city.slug} className="text-center">
                <Link 
                  href={`/dumpster-rental-${city.slug}`}
                  className="block p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <MapPin className="w-6 h-6 text-gray-400 group-hover:text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm">
                    {city.name}
                  </h3>
                  <p className="text-gray-500 text-xs">{city.state}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Calculator */}
        <div className="text-center mt-12">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Dumpster Size Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}