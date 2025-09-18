// app/dumpster-rental-new-york/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental NYC | Manhattan, Brooklyn, Queens | Local Companies',
  description: 'Find dumpster rental companies in New York City. Compare local providers serving Manhattan, Brooklyn, Queens, Bronx, and Staten Island.',
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
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving all five boroughs
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local NYC Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">NYC Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guma Containers</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> gumacontainers.com</p>
                  <p><strong>Contact:</strong> Online form</p>
                  <p><strong>Fleet:</strong> 40+ trucks, 800+ containers</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Brooklyn, Bronx, Manhattan, Staten Island, Queens</p>
                  <p><strong>Focus:</strong> Construction & demolition projects</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster King NY</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpsterkingny.com</p>
                  <p><strong>Phone:</strong> 718-635-3311</p>
                  <p><strong>Based in:</strong> Brooklyn</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Bronx, Brooklyn, Queens, Manhattan, parts of Nassau County</p>
                  <p><strong>Services:</strong> Residential, commercial, and industrial projects</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Way Carting Inc</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> bestwaycarting.com</p>
                  <p><strong>Experience:</strong> 30+ years in business</p>
                  <p><strong>Container Sizes:</strong> 10-40 yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Brooklyn, Queens, NYC area</p>
                  <p><strong>Services:</strong> Construction waste removal, waste management</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">D.B. Container Service</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 718-257-2300</p>
                  <p><strong>Address:</strong> 129 Louisiana Ave, Brooklyn, NY 11207</p>
                  <p><strong>Hours:</strong> Mon-Fri 6am-6pm, Sat 7am-1pm</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> All five NYC boroughs</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20, 30, 40 yard containers</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">PCI Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpstercleanups.com</p>
                  <p><strong>Experience:</strong> 30+ years serving the region</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> NYC, Long Island, Westchester</p>
                  <p><strong>Services:</strong> Residential, commercial, construction</p>
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

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">NYC Neighborhoods</h2>
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
        </section>



        {/* NYC Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">NYC Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Space Constraints</h3>
              <p className="text-gray-600">
                NYC streets are often narrow. Consider smaller dumpster sizes if space is limited.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Parking Regulations</h3>
              <p className="text-gray-600">
                Be aware of alternate side parking rules and street cleaning schedules.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Building Requirements</h3>
              <p className="text-gray-600">
                Many buildings require advance notice and may have specific delivery requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your NYC project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}