// app/local/guides/page.js - LOCAL PRICING GUIDES PAGE
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export const metadata = {
  title: "Local Dumpster Rental Pricing Guides by City | Compare Providers",
  description: "Compare dumpster rental pricing and find trusted local providers in major US cities. City-specific pricing data and neighborhood coverage maps.",
  keywords: "dumpster rental pricing by city, city pricing guides"
};

export default function LocalGuidesPage() {
  const localGuides = [
    { name: 'Chicago', state: 'IL', slug: 'chicago', priceRange: '$325-$525', providers: 15 },
    { name: 'Houston', state: 'TX', slug: 'houston', priceRange: '$280-$480', providers: 12 },
    { name: 'New York', state: 'NY', slug: 'new-york', priceRange: '$450-$750', providers: 18 },
    { name: 'Los Angeles', state: 'CA', slug: 'los-angeles', priceRange: '$380-$580', providers: 14 },
    { name: 'Phoenix', state: 'AZ', slug: 'phoenix', priceRange: '$290-$490', providers: 10 },
    { name: 'Philadelphia', state: 'PA', slug: 'philadelphia', priceRange: '$320-$520', providers: 11 },
    { name: 'San Antonio', state: 'TX', slug: 'san-antonio', priceRange: '$270-$470', providers: 8 },
    { name: 'San Diego', state: 'CA', slug: 'san-diego', priceRange: '$350-$550', providers: 9 },
    { name: 'Dallas', state: 'TX', slug: 'dallas', priceRange: '$285-$485', providers: 13 },
    { name: 'Miami', state: 'FL', slug: 'miami', priceRange: '$340-$540', providers: 10 },
    { name: 'Atlanta', state: 'GA', slug: 'atlanta', priceRange: '$300-$500', providers: 12 },
    { name: 'Seattle', state: 'WA', slug: 'seattle', priceRange: '$380-$580', providers: 8 },
    { name: 'Denver', state: 'CO', slug: 'denver', priceRange: '$310-$510', providers: 9 },
    { name: 'Boston', state: 'MA', slug: 'boston', priceRange: '$400-$600', providers: 11 },
    { name: 'Detroit', state: 'MI', slug: 'detroit', priceRange: '$290-$490', providers: 7 },
    { name: 'Portland', state: 'OR', slug: 'portland', priceRange: '$330-$530', providers: 6 },
    { name: 'Charlotte', state: 'NC', slug: 'charlotte', priceRange: '$280-$480', providers: 8 },
    { name: 'Austin', state: 'TX', slug: 'austin', priceRange: '$295-$495', providers: 9 },
    { name: 'San Francisco', state: 'CA', slug: 'san-francisco', priceRange: '$450-$650', providers: 10 },
    { name: 'Washington DC', state: 'DC', slug: 'washington-dc', priceRange: '$380-$580', providers: 12 }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Local Dumpster Rental Pricing Guides
          </h1>
          <p className="text-xl text-gray-600">
            Find pricing, providers, and neighborhood coverage in your city
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localGuides.map((city) => (
            <div key={city.slug} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {city.name}, {city.state}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">20-Yard Pricing:</span>
                  <span className="font-semibold text-green-600">{city.priceRange}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Local Providers:</span>
                  <span className="font-semibold">{city.providers}+ companies</span>
                </div>
              </div>

              <Link 
                href={`/dumpster-rental-${city.slug}`}
                className="block bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                View {city.name} Guide →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/local" className="text-blue-600 hover:underline">
            ← Back to Local Hub
          </Link>
        </div>
      </div>
    </main>
  );
}