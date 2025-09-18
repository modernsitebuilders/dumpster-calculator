// app/dumpster-rental-new-york/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental NYC | Manhattan, Brooklyn, Queens | Same Day Service',
  description: 'Dumpster rental in New York City starting at $399. Same-day delivery in Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Licensed and insured.',
  keywords: 'dumpster rental nyc, dumpster rental new york, manhattan dumpster rental, brooklyn dumpster rental, roll off dumpster nyc'
};

export default function NewYorkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in New York City
          </h1>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Instant NYC Dumpster Quote</h2>
          <p className="mb-6">Calculate the perfect size for your NYC project and get local quotes</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        {/* Local Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">NYC Dumpster Rental Prices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$399 - $499</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Perfect for NYC apartment cleanouts</li>
                <li>• Small renovation in brownstones</li>
                <li>• Studio/1BR apartment projects</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$499 - $599</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Multi-room renovations</li>
                <li>• Restaurant/retail cleanouts</li>
                <li>• 2-3BR apartment cleanouts</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$599 - $749</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Townhouse renovations</li>
                <li>• Commercial office cleanouts</li>
                <li>• Multi-unit building projects</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$749 - $899</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Large construction sites</li>
                <li>• Building demolition</li>
                <li>• Major commercial projects</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            * NYC prices include delivery, pickup, and disposal. Permit fees additional where required.
          </p>
        </section>

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">NYC Neighborhoods We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Manhattan</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Upper East Side</li>
                <li>Upper West Side</li>
                <li>Midtown</li>
                <li>Chelsea</li>
                <li>Greenwich Village</li>
                <li>Tribeca</li>
                <li>Financial District</li>
                <li>Harlem</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Brooklyn</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Williamsburg</li>
                <li>DUMBO</li>
                <li>Park Slope</li>
                <li>Brooklyn Heights</li>
                <li>Bed-Stuy</li>
                <li>Bushwick</li>
                <li>Bay Ridge</li>
                <li>Flatbush</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Queens</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Astoria</li>
                <li>Long Island City</li>
                <li>Flushing</li>
                <li>Forest Hills</li>
                <li>Jackson Heights</li>
                <li>Bayside</li>
                <li>Jamaica</li>
                <li>Ridgewood</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Bronx</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Riverdale</li>
                <li>Fordham</li>
                <li>Pelham Bay</li>
                <li>Morris Park</li>
                <li>Kingsbridge</li>
                <li>Hunts Point</li>
                <li>Tremont</li>
                <li>Mott Haven</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Staten Island</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>St. George</li>
                <li>Stapleton</li>
                <li>Tottenville</li>
                <li>Great Kills</li>
                <li>New Dorp</li>
                <li>Port Richmond</li>
                <li>Todt Hill</li>
                <li>West Brighton</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving nearby:</strong> Newark, Jersey City, Hoboken, Yonkers, 
              Mount Vernon, New Rochelle, and all of Greater New York Area
            </p>
          </div>
        </section>

        {/* NYC Permit Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">NYC Dumpster Permit Requirements</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold mb-3">NYC Street Permit Requirements</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span><strong>Street/Sidewalk placement:</strong> Requires NYC DOT permit ($95+ depending on borough)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Private property:</strong> No permit needed for driveways or private lots</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">!</span>
                <span><strong>Co-op/Condo buildings:</strong> May need building management approval</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">!</span>
                <span><strong>Landmark districts:</strong> Additional approval required in historic areas</span>
              </li>
            </ul>
            <p className="mt-4 text-sm">
              <strong>NYC Department of Transportation</strong><br />
              Permit Office: 55 Water Street, New York, NY 10041<br />
              Phone: 311 or (212) NEW-YORK<br />
              <strong>Processing time:</strong> 3-5 business days (expedited available)
            </p>
          </div>
        </section>

        {/* NYC-Specific Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">NYC Dumpster Rental Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tight Space Solutions</h3>
              <p className="text-gray-600">
                NYC streets are narrow. Consider 10-yard dumpsters for easier placement. We offer "high-side" options for same capacity in smaller footprint.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Alternate Side Parking</h3>
              <p className="text-gray-600">
                Schedule delivery/pickup around street cleaning. We track ASP schedules for all NYC streets to avoid tickets.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Building Requirements</h3>
              <p className="text-gray-600">
                Many NYC buildings require COI (Certificate of Insurance). We provide this free within 24 hours.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Weekend Delivery</h3>
              <p className="text-gray-600">
                Best time for NYC delivery is early morning (6-8 AM) or weekends when traffic is lighter. Saturday delivery available.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Elevator Buildings</h3>
              <p className="text-gray-600">
                For high-rise cleanouts, coordinate with building management. We can place dumpsters in loading docks or designated areas.
              </p>
            </div>
          </div>
        </section>

        {/* NYC FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">NYC Dumpster Rental FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">How quickly can I get a dumpster in NYC?</summary>
              <p className="mt-2 text-gray-600">
                Same-day delivery available for orders placed before noon. Manhattan and Brooklyn typically within 2-4 hours. 
                Outer boroughs within 24 hours. Emergency service available.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Do I need a permit for a dumpster in NYC?</summary>
              <p className="mt-2 text-gray-600">
                Yes, if placing on any public property (street, sidewalk). Private property (driveways, lots) doesn't require 
                city permits but may need building approval. We help with permit applications.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What size dumpster for NYC apartment cleanout?</summary>
              <p className="mt-2 text-gray-600">
                Studio/1BR: 10-yard. 2-3BR: 20-yard. Entire brownstone: 30-yard. Remember NYC apartments 
                accumulate more than suburban homes due to limited storage.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Can you place dumpsters on NYC sidewalks?</summary>
              <p className="mt-2 text-gray-600">
                Only with proper DOT permits. Sidewalk must be 12+ feet wide to maintain 8-foot pedestrian path. 
                We handle permit applications and compliance.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What's not allowed in NYC dumpsters?</summary>
              <p className="mt-2 text-gray-600">
                NYC has strict rules: No electronics (e-waste), appliances with Freon, batteries, paint, chemicals. 
                Mattresses require wrapping in plastic. We provide full prohibited items list.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for NYC Dumpster Rental?</h2>
          <p className="mb-6 text-gray-700">
            Get instant quotes from licensed NYC dumpster rental companies
          </p>
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
              Get NYC Quotes Now
            </Link>
            <p className="text-sm text-gray-600">
              Or call for immediate NYC service: <strong>1-877-NYC-DUMP</strong>
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
              "name": "Dumpster Rental New York City",
              "provider": {
                "@type": "Organization",
                "name": "Dumpster Size Calculator"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "New York",
                  "addressRegion": "NY"
                },
                {
                  "@type": "Place",
                  "name": "Manhattan"
                },
                {
                  "@type": "Place",
                  "name": "Brooklyn"
                },
                {
                  "@type": "Place",
                  "name": "Queens"
                },
                {
                  "@type": "Place",
                  "name": "Bronx"
                },
                {
                  "@type": "Place",
                  "name": "Staten Island"
                }
              ],
              "serviceType": "Dumpster Rental",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://dumpster-size-calculator.com/dumpster-rental-new-york",
                "servicePhone": "1-877-NYC-DUMP"
              }
            })
          }}
        />
      </div>
    </main>
  );
}