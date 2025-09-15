// app/dumpster-rental-austin/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Austin TX | Same Day Service | Best ATX Prices',
  description: 'Dumpster rental in Austin starting at $300. Serving South Austin, North Austin, Cedar Park, and all of Central Texas. Same-day delivery available.',
  keywords: 'dumpster rental austin, dumpster rental ATX, roll off dumpster austin, cedar park dumpster rental'
};

export default function AustinPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Austin, TX
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Keep Austin weird and clean with reliable dumpster rentals across Central Texas
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Same Day Delivery</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Music Festival Ready</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Eco-Friendly Disposal</span>
          </div>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Austin Dumpster Quote</h2>
          <p className="mb-6">Fast service from South Austin to Cedar Park</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        {/* Local Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Austin Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$300 - $400</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small projects</li>
                <li>• Garage cleanouts</li>
                <li>• Minor renovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$400 - $500</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Bathroom renovations</li>
                <li>• Flooring replacement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$500 - $625</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• New construction</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$600 - $750</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Multi-unit buildings</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Prices include 7-day rental period. Austin has competitive rates due to multiple local providers.
          </p>
        </section>

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Austin Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Austin</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>East Austin</li>
                <li>South Austin</li>
                <li>Hyde Park</li>
                <li>Zilker</li>
                <li>Barton Hills</li>
                <li>Clarksville</li>
                <li>Bouldin Creek</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Austin</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Cedar Park</li>
                <li>Round Rock</li>
                <li>Pflugerville</li>
                <li>Leander</li>
                <li>Georgetown</li>
                <li>Hutto</li>
                <li>Liberty Hill</li>
                <li>Brushy Creek</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Austin</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Lakeway</li>
                <li>Bee Cave</li>
                <li>West Lake Hills</li>
                <li>Rollingwood</li>
                <li>Sunset Valley</li>
                <li>Dripping Springs</li>
                <li>Spicewood</li>
                <li>Point Venture</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Austin</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Buda</li>
                <li>Kyle</li>
                <li>Dripping Springs</li>
                <li>Manchaca</li>
                <li>Oak Hill</li>
                <li>Circle C</li>
                <li>Westlake</li>
                <li>Brodie Lane</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving nearby areas:</strong> San Marcos, New Braunfels, Bastrop, 
              Elgin, Manor, Del Valle, and all of Travis, Williamson, and Hays Counties
            </p>
          </div>
        </section>

        {/* Local Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Austin-Specific Dumpster Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Music Festival Seasons</h3>
              <p className="text-gray-600">
                SXSW (March) and ACL (October) create high demand. Book dumpsters well in advance during festival seasons for guaranteed availability.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Keep Austin Green</h3>
              <p className="text-gray-600">
                Austin prioritizes environmental responsibility. We sort materials for recycling and work with local facilities to minimize landfill waste.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Texas Heat Considerations</h3>
              <p className="text-gray-600">
                Summer temperatures exceed 100°F. Schedule deliveries for early morning (6-8 AM) and consider covering dumpsters to prevent heat damage to debris.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rapid Growth Areas</h3>
              <p className="text-gray-600">
                Cedar Park, Pflugerville, and Leander are booming. Expect potential delivery delays during peak construction season (spring/summer).
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Lake Travis Projects</h3>
              <p className="text-gray-600">
                Waterfront properties may have special access requirements. We coordinate with lakeside communities for dock and narrow road deliveries.
              </p>
            </div>
          </div>
        </section>

        {/* Austin FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Austin Dumpster Rental FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Do I need a permit for a dumpster in Austin?</summary>
              <p className="mt-2 text-gray-600">
                Private property placement typically doesn't require permits. Public street placement requires a permit from Austin Transportation Department ($50-150). We can help with the application process.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What size dumpster for Austin bungalow renovation?</summary>
              <p className="mt-2 text-gray-600">
                Most Austin bungalows (900-1,200 sq ft) need a 20-yard dumpster for full renovations. Kitchen/bathroom only projects typically need 10-15 yard containers.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Can you deliver during SXSW or ACL?</summary>
              <p className="mt-2 text-gray-600">
                Yes, but book 2-3 weeks in advance. Festival traffic creates delays, so we schedule deliveries for early morning hours and coordinate with event logistics.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Do you service the Domain and tech corridor?</summary>
              <p className="mt-2 text-gray-600">
                Absolutely! We regularly service commercial projects in the Domain, tech campuses, and North Austin business districts. We understand corporate scheduling requirements.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent a Dumpster in Austin?</h2>
          <p className="mb-6 text-gray-700">
            Get instant quotes from licensed Austin providers
          </p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Austin Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}