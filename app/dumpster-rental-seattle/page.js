// app/dumpster-rental-seattle/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Seattle WA | Rain-Ready Service | Best PNW Prices',
  description: 'Dumpster rental in Seattle starting at $400. Serving Bellevue, Tacoma, Everett, and all of Puget Sound. Weather-resistant containers.',
  keywords: 'dumpster rental seattle, dumpster rental washington, roll off dumpster seattle, bellevue dumpster rental'
};

export default function SeattlePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Seattle, WA
          </h1>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Seattle Dumpster Quote</h2>
          <p className="mb-6">Weather-resistant service across Puget Sound</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Seattle Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$400 - $525</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small renovations</li>
                <li>• Basement cleanouts</li>
                <li>• Garage projects</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$500 - $625</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Bathroom projects</li>
                <li>• Flooring replacement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$600 - $775</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• Construction debris</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$700 - $875</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Large demolition</li>
                <li>• Tech office buildouts</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Prices include 7-day rental period. Weather covers available for additional protection during rain season.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Seattle Metro Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Seattle Proper</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Capitol Hill</li>
                <li>Belltown</li>
                <li>Queen Anne</li>
                <li>Fremont</li>
                <li>Ballard</li>
                <li>Georgetown</li>
                <li>SoDo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Eastside</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Bellevue</li>
                <li>Redmond</li>
                <li>Kirkland</li>
                <li>Bothell</li>
                <li>Issaquah</li>
                <li>Sammamish</li>
                <li>Mercer Island</li>
                <li>Woodinville</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Sound</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Everett</li>
                <li>Lynnwood</li>
                <li>Mukilteo</li>
                <li>Mill Creek</li>
                <li>Edmonds</li>
                <li>Mountlake Terrace</li>
                <li>Brier</li>
                <li>Shoreline</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Sound</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Tacoma</li>
                <li>Federal Way</li>
                <li>Kent</li>
                <li>Renton</li>
                <li>Auburn</li>
                <li>Tukwila</li>
                <li>SeaTac</li>
                <li>Burien</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Extended Service:</strong> We serve all of King, Snohomish, and Pierce counties, 
              plus island communities with ferry coordination.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Seattle-Specific Dumpster Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-1">Rain Season Protection</h3>
              <p className="text-gray-600">
                October-May brings heavy rain. We provide weather-resistant covers and drainage systems to prevent water accumulation in containers.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-1">Steep Hill Delivery</h3>
              <p className="text-gray-600">
                Seattle's famous hills require specialized equipment. Our trucks are equipped for steep grade deliveries and narrow street access.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-1">Tech Campus Coordination</h3>
              <p className="text-gray-600">
                Amazon, Microsoft, and other tech companies have specific requirements. We're experienced with corporate security and scheduling protocols.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-1">Environmental Compliance</h3>
              <p className="text-gray-600">
                Seattle has strict recycling and waste diversion requirements. We sort materials and coordinate with approved disposal facilities.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-1">Ferry Schedule Coordination</h3>
              <p className="text-gray-600">
                Serving Vashon, Bainbridge, and other islands requires ferry scheduling. We coordinate delivery timing with Washington State Ferries.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Seattle Dumpster Rental FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Can dumpsters handle Seattle's rain?</summary>
              <p className="mt-2 text-gray-600">
                Absolutely! Our containers are designed for Pacific Northwest weather. We offer rain covers and proper drainage to prevent water issues.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Do you deliver to steep Seattle hills?</summary>
              <p className="mt-2 text-gray-600">
                Yes, our specialized trucks handle Seattle's famous hills. We assess access during scheduling and use appropriate equipment for safe delivery.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What about Seattle's recycling requirements?</summary>
              <p className="mt-2 text-gray-600">
                We comply with all Seattle waste diversion requirements, sorting materials and working with approved facilities to maximize recycling.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Can you serve the islands (Vashon, Bainbridge)?</summary>
              <p className="mt-2 text-gray-600">
                Yes, we coordinate with Washington State Ferries schedules. Island deliveries require advance planning but are handled regularly.
              </p>
            </details>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in Seattle?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed Washington providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Seattle Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}