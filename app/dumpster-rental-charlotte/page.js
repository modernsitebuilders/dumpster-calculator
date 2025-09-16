// app/dumpster-rental-charlotte/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Charlotte NC | Queen City Service | Best Carolina Prices',
  description: 'Dumpster rental in Charlotte starting at $280. Serving Ballantyne, Uptown, South End, and all of Queen City. Professional service.',
  keywords: 'dumpster rental charlotte, dumpster rental north carolina, roll off dumpster charlotte, ballantyne dumpster rental'
};

export default function CharlottePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Charlotte, NC
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional dumpster service for the Queen City
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Fast Delivery</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ All Neighborhoods</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Competitive Rates</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Charlotte Dumpster Quote</h2>
          <p className="mb-6">Professional service throughout the Queen City</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Charlotte Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$280 - $380</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small cleanouts</li>
                <li>• Bathroom remodels</li>
                <li>• Garage cleaning</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$380 - $480</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Flooring projects</li>
                <li>• Deck removal</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$480 - $600</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• New construction</li>
                <li>• Large renovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$580 - $720</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Multi-building sites</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Prices include 7-day rental period. North Carolina offers competitive rates throughout the Carolinas.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Charlotte Metro Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Charlotte</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Uptown</li>
                <li>South End</li>
                <li>NoDa</li>
                <li>Plaza Midwood</li>
                <li>Dilworth</li>
                <li>Myers Park</li>
                <li>Fourth Ward</li>
                <li>First Ward</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Charlotte</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Ballantyne</li>
                <li>SouthPark</li>
                <li>Pineville</li>
                <li>Blakeney</li>
                <li>Arboretum</li>
                <li>Rea Farms</li>
                <li>Stonecrest</li>
                <li>Carmel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Charlotte</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>University City</li>
                <li>Concord Mills</li>
                <li>Highland Creek</li>
                <li>Northlake</li>
                <li>Huntersville</li>
                <li>Cornelius</li>
                <li>Davidson</li>
                <li>Mooresville</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East/West Charlotte</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Matthews</li>
                <li>Mint Hill</li>
                <li>Indian Trail</li>
                <li>Stallings</li>
                <li>Gastonia</li>
                <li>Belmont</li>
                <li>Mount Holly</li>
                <li>Waxhaw</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Extended Service:</strong> We also serve Rock Hill, Kannapolis, Concord, 
              and other Charlotte metro communities with advance scheduling.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Charlotte Project Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Weather & Seasonal Planning</h3>
              <p className="text-gray-600">
                Charlotte's humid subtropical climate means year-round projects. Spring storms and summer heat require covered containers for certain materials.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tree Removal & Landscaping</h3>
              <p className="text-gray-600">
                Charlotte's urban forest requires specialized disposal. We handle tree debris, brush, and landscaping waste following city guidelines.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic District Regulations</h3>
              <p className="text-gray-600">
                Myers Park, Dilworth, and other historic areas have special requirements. We coordinate with historic commissions for renovation projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">HOA Community Guidelines</h3>
              <p className="text-gray-600">
                Many Charlotte neighborhoods have HOA restrictions on dumpster placement and timing. We provide compliant service and screening options.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Construction Boom Support</h3>
              <p className="text-gray-600">
                Charlotte's rapid growth creates high demand for construction dumpsters. We maintain large inventory for residential and commercial projects.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Charlotte Dumpster Rental FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Do I need a permit in Charlotte?</summary>
              <p className="mt-2 text-gray-600">
                Street placement requires a permit from Charlotte DOT. Driveway and private property placement typically doesn't require permits.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">How far in advance should I book?</summary>
              <p className="mt-2 text-gray-600">
                Charlotte's growing market means 2-3 days advance booking is recommended, especially during peak construction season (March-October).
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What about HOA communities?</summary>
              <p className="mt-2 text-gray-600">
                Many Charlotte neighborhoods have HOA guidelines. We provide discrete placement options and work with community requirements for timing and screening.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Can you handle large construction debris?</summary>
              <p className="mt-2 text-gray-600">
                Yes! Charlotte's construction boom keeps us busy with concrete, steel, and heavy materials. We have specialized equipment for construction sites.
              </p>
            </details>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in Charlotte?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed North Carolina providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Charlotte Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}