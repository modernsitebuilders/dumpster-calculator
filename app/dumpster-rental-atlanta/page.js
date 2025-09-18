// app/dumpster-rental-atlanta/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Atlanta GA | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Atlanta. Compare local providers serving Metro Atlanta and North Georgia.',
  keywords: 'dumpster rental atlanta, atlanta dumpster companies, roll off dumpster atlanta, georgia dumpster rental'
};

export default function AtlantaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Atlanta, Georgia
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Metro Atlanta and surrounding areas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Atlanta project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Atlanta Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Atlanta Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Arrow Waste</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> arrowwaste.com</p>
                  <p><strong>Experience:</strong> Serving Atlanta since 1994</p>
                  <p><strong>Features:</strong> Same-day service, large fleet</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Cobb, Henry, Rockdale, Newton counties</p>
                  <p><strong>Specialties:</strong> Metro Atlanta's largest, transparent pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Atlanta</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (404) 692-2838</p>
                  <p><strong>Website:</strong> atlantadumpsterrentals.net</p>
                  <p><strong>Features:</strong> 100% driveway protection, double doors</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Buckhead, Dunwoody, Roswell, Marietta</p>
                  <p><strong>Specialties:</strong> Residential friendly, fits in tight spaces</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">ADM Waste</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> atlantadumpsters.com</p>
                  <p><strong>Features:</strong> Family-owned, growing fleet</p>
                  <p><strong>Services:</strong> Roll-off and portable toilets</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Atlanta and surrounding areas</p>
                  <p><strong>Specialties:</strong> Licensed and insured, commercial focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hippo Atlanta Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (678) 808-9600</p>
                  <p><strong>Website:</strong> atlanta.hippodumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> 20+ Atlanta metro cities</p>
                  <p><strong>Specialties:</strong> Family-owned, same-day service, competitive pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dump Daddy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpdaddy.com</p>
                  <p><strong>Location:</strong> Office in Buford, GA</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Atlanta area</p>
                  <p><strong>Specialties:</strong> Driveway protection system, same-day service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">WG Waste</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (404) 709-8898</p>
                  <p><strong>Website:</strong> wgwaste.com</p>
                  <p><strong>Features:</strong> Five-star rating, front load services</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Atlanta metro area</p>
                  <p><strong>Specialties:</strong> Locally owned, transparent pricing, eco-friendly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> These companies are listed for informational purposes. Contact companies directly 
              for current pricing, availability, and service details. Always verify licensing and insurance.
            </p>
          </div>
        </section>

        {/* Atlanta Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Metro Atlanta Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Atlanta</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Midtown</li>
                <li>Buckhead</li>
                <li>Virginia-Highland</li>
                <li>Little Five Points</li>
                <li>Grant Park</li>
                <li>Old Fourth Ward</li>
                <li>West End</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Atlanta</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Sandy Springs</li>
                <li>Roswell</li>
                <li>Alpharetta</li>
                <li>Johns Creek</li>
                <li>Dunwoody</li>
                <li>Brookhaven</li>
                <li>Chamblee</li>
                <li>Peachtree Corners</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Atlanta</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Marietta</li>
                <li>Smyrna</li>
                <li>Kennesaw</li>
                <li>Acworth</li>
                <li>Powder Springs</li>
                <li>Austell</li>
                <li>Douglasville</li>
                <li>Mableton</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East/South Atlanta</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Decatur</li>
                <li>Stone Mountain</li>
                <li>Tucker</li>
                <li>Lawrenceville</li>
                <li>East Point</li>
                <li>College Park</li>
                <li>Union City</li>
                <li>Fairburn</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Conyers, McDonough, Stockbridge, Covington, 
              Canton, Woodstock, and all surrounding counties
            </p>
          </div>
        </section>

        {/* Atlanta Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Atlanta Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rapid Metro Growth</h3>
              <p className="text-gray-600">
                Atlanta's explosive growth creates constant demand for dumpsters. Book early, especially in booming areas like Alpharetta and Sandy Springs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Traffic Considerations</h3>
              <p className="text-gray-600">
                Atlanta traffic is notorious. Schedule deliveries outside rush hours (7-9 AM, 4-7 PM) to avoid delays and additional charges.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Film Industry Impact</h3>
              <p className="text-gray-600">
                Georgia's film industry creates periodic high demand. Areas near studios and filming locations may have limited availability during productions.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Neighborhoods</h3>
              <p className="text-gray-600">
                Areas like Grant Park, Inman Park, and Virginia-Highland have narrow streets and mature trees. Companies offer smaller trucks for these areas.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Weather Patterns</h3>
              <p className="text-gray-600">
                Summer storms can be intense. Cover loads during rainy season to prevent water weight charges. Spring is busiest for renovations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Sprawling Metro Area</h3>
              <p className="text-gray-600">
                Metro Atlanta covers multiple counties. Verify service areas for outlying locations as some companies have distance limitations.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Atlanta project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}