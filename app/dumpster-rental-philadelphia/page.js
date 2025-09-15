// app/dumpster-rental-philadelphia/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Philadelphia PA | Same Day Delivery | Best Prices',
  description: 'Dumpster rental in Philadelphia starting at $299. Same-day delivery available. Serving Center City, South Philly, Northeast, and surrounding areas.',
  keywords: 'dumpster rental philadelphia, philadelphia dumpster rental, dumpster rental philly, roll off dumpster philadelphia'
};

export default function PhiladelphiaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Philadelphia, PA
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Fast, reliable dumpster rentals serving Philadelphia and surrounding areas
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Same Day Delivery</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Best Local Prices</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ No Hidden Fees</span>
          </div>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Instant Size Recommendation</h2>
          <p className="mb-6">Use our free calculator to find the perfect dumpster size for your Philadelphia project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        {/* Local Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Philadelphia Dumpster Rental Prices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$299 - $399</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Perfect for South Philly rowhome cleanouts</li>
                <li>• Small bathroom/kitchen remodels</li>
                <li>• Garage cleanouts in Manayunk</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$399 - $499</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Full home renovations in Center City</li>
                <li>• Roof replacements in Northeast Philly</li>
                <li>• Estate cleanouts in Chestnut Hill</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$499 - $599</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• New construction in Fishtown</li>
                <li>• Commercial renovations</li>
                <li>• Large demolition projects</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$599 - $699</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial cleanouts in University City</li>
                <li>• Industrial projects in Navy Yard</li>
                <li>• Major construction debris</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Philadelphia Neighborhoods We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Center City</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Rittenhouse Square</li>
                <li>Old City</li>
                <li>Society Hill</li>
                <li>Washington Square</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Philly</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Passyunk Square</li>
                <li>Bella Vista</li>
                <li>Queen Village</li>
                <li>Point Breeze</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North/Northeast</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Fishtown</li>
                <li>Northern Liberties</li>
                <li>Port Richmond</li>
                <li>Mayfair</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Philly</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>University City</li>
                <li>Spruce Hill</li>
                <li>Clark Park</li>
                <li>Powelton Village</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving nearby areas:</strong> Bensalem, Upper Darby, Chester, Norristown, 
              Camden NJ, Cherry Hill NJ, and all of Greater Philadelphia
            </p>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Philadelphia Dumpster Permit Information</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold mb-3">Do you need a permit in Philadelphia?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Private property:</strong> No permit needed for driveways or private lots</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span><strong>Public street:</strong> Permit required from Streets Department ($75-150)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">!</span>
                <span><strong>Historic districts:</strong> Additional approval may be needed in Society Hill, Old City</span>
              </li>
            </ul>
            <p className="mt-4 text-sm">
              <strong>Permit Office:</strong> Philadelphia Streets Department<br />
              1401 John F. Kennedy Blvd, Room 830<br />
              Phone: (215) 686-5560
            </p>
          </div>
        </section>

        {/* Local Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Philadelphia-Specific Dumpster Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Narrow Streets in South Philly</h3>
              <p className="text-gray-600">
                Consider a 10-yard dumpster for tight rowhome blocks. Smaller footprint fits better on narrow streets.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Parking Considerations</h3>
              <p className="text-gray-600">
                Place "No Parking" signs 72 hours before delivery. PPA is strict about parking violations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Street Cleaning Schedule</h3>
              <p className="text-gray-600">
                Check Philadelphia street cleaning schedule to avoid conflicts with your rental period.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Local Disposal Facilities</h3>
              <p className="text-gray-600">
                Materials typically go to Waste Management facilities in North Philly or Republic Services in Chester County.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Philadelphia Dumpster Rental FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">How fast can I get a dumpster delivered in Philadelphia?</summary>
              <p className="mt-2 text-gray-600">
                Same-day delivery is available for orders placed before 12 PM. Most deliveries in Center City, 
                South Philly, and nearby areas can be completed within 24 hours.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What size dumpster for a Philadelphia rowhome renovation?</summary>
              <p className="mt-2 text-gray-600">
                Most rowhome renovations need a 20-yard dumpster. For single-room updates, a 10-yard works well. 
                Full gut renovations may require a 30-yard or multiple hauls.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Can I put concrete from my Philly basement in a dumpster?</summary>
              <p className="mt-2 text-gray-600">
                Yes, but you need a specific heavy debris dumpster. Regular dumpsters have weight limits that 
                concrete exceeds quickly. Expect to pay 30-50% more for concrete disposal.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Do you deliver to New Jersey?</summary>
              <p className="mt-2 text-gray-600">
                Yes! We serve Camden, Cherry Hill, and nearby NJ areas. Delivery fees may apply for locations 
                beyond 20 miles from Philadelphia.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent a Dumpster in Philadelphia?</h2>
          <p className="mb-6 text-gray-700">
            Get instant size recommendations and connect with trusted local providers
          </p>
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
              Get Free Quotes Now
            </Link>
            <p className="text-sm text-gray-600">
              Or call for immediate service: <strong>1-877-DUMPSTER</strong>
            </p>
          </div>
        </div>

        {/* Schema Markup for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Dumpster Rental Philadelphia",
              "provider": {
                "@type": "Organization",
                "name": "Dumpster Calculator"
              },
              "areaServed": {
                "@type": "City",
                "name": "Philadelphia",
                "addressRegion": "PA"
              },
              "serviceType": "Dumpster Rental",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://dumpstercalculator.com/dumpster-rental-philadelphia",
                "servicePhone": "1-877-DUMPSTER"
              }
            })
          }}
        />
      </div>
    </main>
  );
}