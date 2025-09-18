// app/dumpster-rental-miami/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Miami FL | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Miami. Compare local providers serving Miami-Dade County and South Florida.',
  keywords: 'dumpster rental miami, miami dumpster companies, roll off dumpster miami, south florida dumpster rental'
};

export default function MiamiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Miami, Florida
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Miami-Dade County and South Florida
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Miami project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Miami Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Miami Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Dumpster Rental Miami</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (305) 901-2696 / (305) 707-0978</p>
                  <p><strong>Website:</strong> affordabledumpsterrental.com/dumpster-rental-miami/</p>
                  <p><strong>Starting Price:</strong> $199 special</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Miami and surrounding areas</p>
                  <p><strong>Specialties:</strong> Construction, roofing projects, contractor services</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coastal Waste Inc.</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> coastalwasteinc.com/roll-off-dumpsters/miami-dade-county/</p>
                  <p><strong>Container Sizes:</strong> 10 to 40 cubic yards</p>
                  <p><strong>Features:</strong> Environmental sustainability focus</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Miami-Dade County, Miami</p>
                  <p><strong>Coverage:</strong> Brickell, Little Havana, Coral Gables</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pronto Waste Service</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 855-596-3278</p>
                  <p><strong>Website:</strong> prontowasteservice.com</p>
                  <p><strong>Experience:</strong> 10+ years in business</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Miami and Broward County</p>
                  <p><strong>Features:</strong> No hidden fees, on-time delivery guarantee</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Miami Dumpster</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpster-rental-miami.com</p>
                  <p><strong>Services:</strong> Roll-off rentals, junk removal, recycling</p>
                  <p><strong>Features:</strong> Low-cost rentals, variety of sizes</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Miami area</p>
                  <p><strong>Specialties:</strong> Environmental disposal, commercial & residential</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Up Waste</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Rating:</strong> Top-rated on Yelp</p>
                  <p><strong>Services:</strong> Local waste management, dumpster rentals</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Miami area</p>
                  <p><strong>Focus:</strong> Local company with community focus</p>
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

        {/* Miami Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Miami Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Downtown/Brickell</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown Miami</li>
                <li>Brickell</li>
                <li>Financial District</li>
                <li>Government Center</li>
                <li>Park West</li>
                <li>Omni</li>
                <li>Arts & Entertainment</li>
                <li>Bayfront Park</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Miami Beach</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>South Beach</li>
                <li>Mid Beach</li>
                <li>North Beach</li>
                <li>Bal Harbour</li>
                <li>Surfside</li>
                <li>Bay Harbor Islands</li>
                <li>Sunny Isles Beach</li>
                <li>Aventura</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Miami</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Little Havana</li>
                <li>Coral Gables</li>
                <li>Westchester</li>
                <li>Flagami</li>
                <li>Doral</li>
                <li>Fontainebleau</li>
                <li>Hialeah</li>
                <li>Miami Lakes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Miami</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Coconut Grove</li>
                <li>Pinecrest</li>
                <li>Palmetto Bay</li>
                <li>Cutler Bay</li>
                <li>Homestead</li>
                <li>South Miami Heights</li>
                <li>Kendall</li>
                <li>The Hammocks</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, 
              and all of Broward County
            </p>
          </div>
        </section>

        {/* Miami Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Miami Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Hurricane Season</h3>
              <p className="text-gray-600">
                Miami's hurricane season (June-November) can affect delivery schedules and create storm debris cleanup needs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tropical Heat & Humidity</h3>
              <p className="text-gray-600">
                Year-round heat and humidity make loading challenging. Plan work during cooler morning/evening hours.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Flooding Considerations</h3>
              <p className="text-gray-600">
                Miami's low elevation and frequent flooding require careful dumpster placement during rainy season.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Right-of-Way Permits</h3>
              <p className="text-gray-600">
                City of Miami requires Temporary Occupancy Permits for street placement. Contact city before delivery.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Condo/HOA Restrictions</h3>
              <p className="text-gray-600">
                Many Miami condos and communities have strict placement rules. Check with building management first.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tourism Impact</h3>
              <p className="text-gray-600">
                High tourism season can affect delivery schedules in South Beach and tourist areas. Plan accordingly.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Miami project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}