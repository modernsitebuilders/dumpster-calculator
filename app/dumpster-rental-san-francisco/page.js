// app/dumpster-rental-san-francisco/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental San Francisco CA | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in San Francisco. Compare local providers serving the City by the Bay and surrounding areas.',
  keywords: 'dumpster rental san francisco, SF dumpster companies, roll off dumpster san francisco, bay area dumpster rental'
};

export default function SanFranciscoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in San Francisco, California
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the City by the Bay and surrounding areas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your San Francisco project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local San Francisco Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Francisco Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recology San Francisco</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (888) 404-4008</p>
                  <p><strong>Website:</strong> recology.com/recology-san-francisco/debris-boxes/</p>
                  <p><strong>Payment:</strong> Visa/Mastercard only</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Francisco (official city partner)</p>
                  <p><strong>Features:</strong> 14-day max rental, special event collection</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Citywide Debris Box & Recycling</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 415-822-3688</p>
                  <p><strong>Website:</strong> citywidedebrisbox.com</p>
                  <p><strong>Experience:</strong> Family-owned since 1990</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Francisco Bay Area</p>
                  <p><strong>Certifications:</strong> Woman-Owned SF Local Business Enterprise (WBE/LBE)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Golden Gate Dumpster</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (415) 520-4600</p>
                  <p><strong>Website:</strong> goldengatedumpster.com</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Francisco area</p>
                  <p><strong>Features:</strong> Reliable and affordable waste management</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Junk King San Francisco</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> junk-king.com/locations/sanfrancisco/dumpster-rental</p>
                  <p><strong>Features:</strong> Same-day service available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Francisco area</p>
                  <p><strong>Specialties:</strong> Urban-focused rentals, transparent pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Rental Dogs</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpsterrentaldogs.com/dumpster-rental-san-francisco-ca/</p>
                  <p><strong>Features:</strong> No hidden fees, on-time delivery</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Francisco area</p>
                  <p><strong>Services:</strong> Construction, cleanouts, foreclosure cleanup</p>
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

        {/* San Francisco Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Francisco Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central SF</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Financial District</li>
                <li>Union Square</li>
                <li>SOMA</li>
                <li>Mission Bay</li>
                <li>Potrero Hill</li>
                <li>Dogpatch</li>
                <li>Civic Center</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North/Northeast</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>North Beach</li>
                <li>Fisherman's Wharf</li>
                <li>Russian Hill</li>
                <li>Nob Hill</li>
                <li>Chinatown</li>
                <li>Telegraph Hill</li>
                <li>Marina District</li>
                <li>Presidio</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West SF</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pacific Heights</li>
                <li>Fillmore</li>
                <li>Richmond District</li>
                <li>Sunset District</li>
                <li>Golden Gate Park</li>
                <li>Haight-Ashbury</li>
                <li>Western Addition</li>
                <li>Japantown</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South SF</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Mission District</li>
                <li>Castro</li>
                <li>Noe Valley</li>
                <li>Glen Park</li>
                <li>Bernal Heights</li>
                <li>Excelsior</li>
                <li>Visitacion Valley</li>
                <li>Bayview</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Daly City, South San Francisco, Oakland, Berkeley, 
              San Mateo, and all of the Bay Area
            </p>
          </div>
        </section>

        {/* San Francisco Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Francisco Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Steep Hills & Narrow Streets</h3>
              <p className="text-gray-600">
                SF's famous hills and narrow streets can challenge dumpster delivery. Many companies specialize in tight urban placement.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Street Space Permits Required</h3>
              <p className="text-gray-600">
                Street placement requires a Street Space Permit from SF Public Works Department. Apply in advance for public right-of-way use.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Environmental Regulations</h3>
              <p className="text-gray-600">
                SF has strict environmental rules. No hazardous waste, e-waste, or toxic materials. Many companies focus on recycling and green disposal.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">High Cost of Living Impact</h3>
              <p className="text-gray-600">
                San Francisco's high costs affect all services including dumpster rentals. Expect higher prices than other California cities.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Victorian/Historic Homes</h3>
              <p className="text-gray-600">
                Many SF homes are historic Victorians requiring careful renovation. Discuss lead paint and asbestos disposal rules with your rental company.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tech Industry Demand</h3>
              <p className="text-gray-600">
                High demand from tech company office buildouts and relocations. Book early, especially in SOMA and Mission Bay areas.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your San Francisco project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}