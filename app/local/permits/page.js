// app/local/permits/page.js - LOCAL PERMITS PAGE  
import Link from 'next/link';
import { FileText, Clock, DollarSign, AlertCircle } from 'lucide-react';

export const metadata = {
  title: "Dumpster Permit Requirements by City | Local Regulations Guide",
  description: "Complete guide to dumpster permit requirements, costs, and application processes for major US cities. Avoid fines with our local permit guides.",
  keywords: "dumpster permit requirements by city, local dumpster permits, permit costs, permit applications"
};

export default function LocalPermitsPage() {
  const permitGuides = [
    { name: 'Chicago', state: 'IL', slug: 'chicago', permitRequired: true, cost: '$21-$488', processingTime: '5-10 days', complexity: 'High' },
    { name: 'Houston', state: 'TX', slug: 'houston', permitRequired: true, cost: '$50-$150', processingTime: '3-5 days', complexity: 'Medium' },
    { name: 'New York', state: 'NY', slug: 'new-york', permitRequired: true, cost: '$45-$200', processingTime: '7-14 days', complexity: 'High' },
    { name: 'Los Angeles', state: 'CA', slug: 'los-angeles', permitRequired: true, cost: '$63-$400', processingTime: '5-10 days', complexity: 'Medium' },
    { name: 'Phoenix', state: 'AZ', slug: 'phoenix', permitRequired: true, cost: '$25-$100', processingTime: '15 days', complexity: 'Medium' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Permit Requirements by City  
          </h1>
          <p className="text-xl text-gray-600">
            Navigate local permit requirements and avoid costly fines
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
            <div>
              <h3 className="font-bold text-yellow-800">Important Note</h3>
              <p className="text-yellow-700 text-sm">
                Permit requirements change frequently. Always verify current requirements with your local municipality before placing a dumpster.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {permitGuides.map((city) => (
            <div key={city.slug} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {city.name}, {city.state}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  city.complexity === 'High' ? 'bg-red-100 text-red-800' :
                  city.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {city.complexity} Complexity
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">Permit Cost:</span>
                  </div>
                  <span className="font-semibold">{city.cost}</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">Processing Time:</span>
                  </div>
                  <span className="font-semibold">{city.processingTime}</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">Street Placement:</span>
                  </div>
                  <span className="font-semibold text-red-600">Permit Required</span>
                </div>
              </div>

              <Link 
                href={`/blog/${city.slug}-dumpster-permit-guide`}
                className="block bg-red-600 text-white text-center py-3 rounded-lg hover:bg-red-700 transition font-semibold"
              >
                View {city.name} Permit Guide →
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