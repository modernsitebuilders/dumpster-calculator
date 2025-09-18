// app/dumpster-rental-washington-dc/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Washington DC | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Washington DC. Compare local providers serving the District and surrounding areas.',
  keywords: 'dumpster rental washington dc, dc dumpster companies, roll off dumpster dc, district dumpster rental'
};

export default function WashingtonDCPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Washington, DC
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the District and DMV area
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your DC project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local DC Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Washington DC Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Next Day Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> nextdaydumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 15, 20, 30-yard options</p>
                  <p><strong>Features:</strong> Next-day delivery, no hidden fees</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> DC, Maryland, Virginia</p>
                  <p><strong>Specialties:</strong> Extended rental periods, transparent pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sun Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> sunrolloff.com</p>
                  <p><strong>Experience:</strong> Nearly 30 years in DC</p>
                  <p><strong>Features:</strong> Same-day service available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Washington DC metro</p>
                  <p><strong>Specialties:</strong> Flat-price containers, recycling services</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Can DMV</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> thecandmv.com</p>
                  <p><strong>Container Size:</strong> 20-yard (60 trash bags capacity)</p>
                  <p><strong>Features:</strong> 2.5 tons disposal included</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> DC, Maryland, Virginia (DMV)</p>
                  <p><strong>Specialties:</strong> Next-day availability, local focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Dumpster DC</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> budgetdumpster.com</p>
                  <p><strong>Features:</strong> Online ordering, Service Dashboard</p>
                  <p><strong>Requirements:</strong> 60 ft space, 23 ft vertical clearance</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> All DC neighborhoods</p>
                  <p><strong>Specialties:</strong> Bundled pricing, Georgetown to Union Market</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpsters.com DC</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpsters.com</p>
                  <p><strong>Pricing:</strong> $456-$959 typical range</p>
                  <p><strong>Container Sizes:</strong> 10 to 40-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> District-wide coverage</p>
                  <p><strong>Specialties:</strong> Upfront pricing, contractor services</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">WM Washington DC</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wm.com</p>
                  <p><strong>Features:</strong> National company, local service</p>
                  <p><strong>Container Sizes:</strong> Multiple sizes available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> DC and surrounding areas</p>
                  <p><strong>Specialties:</strong> Commercial and residential, recycling focus</p>
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

        {/* DC Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Washington DC Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Northwest DC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Georgetown</li>
                <li>Dupont Circle</li>
                <li>Foggy Bottom</li>
                <li>Cleveland Park</li>
                <li>Woodley Park</li>
                <li>Palisades</li>
                <li>Chevy Chase</li>
                <li>Tenleytown</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Northeast DC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Capitol Hill</li>
                <li>H Street</li>
                <li>NoMa</li>
                <li>Brookland</li>
                <li>Trinidad</li>
                <li>Ivy City</li>
                <li>Brentwood</li>
                <li>Eckington</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Southeast DC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Navy Yard</li>
                <li>Eastern Market</li>
                <li>Anacostia</li>
                <li>Congress Heights</li>
                <li>Washington Highlands</li>
                <li>Hillcrest</li>
                <li>Fairlawn</li>
                <li>Fort Dupont</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Southwest DC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>The Wharf</li>
                <li>Southwest Waterfront</li>
                <li>Bellevue</li>
                <li>Buzzard Point</li>
                <li>Near Southeast</li>
                <li>Nationals Park area</li>
                <li>Audi Field area</li>
                <li>Fort McNair</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Arlington, Alexandria, Bethesda, Silver Spring, 
              College Park, and all of the DMV (DC, Maryland, Virginia) region
            </p>
          </div>
        </section>

        {/* DC Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Washington DC Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Public Space Permits Required</h3>
              <p className="text-gray-600">
                DC requires Public Space Permits from DDOT for any street or sidewalk placement. Process can take several days - plan ahead for permits.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic District Restrictions</h3>
              <p className="text-gray-600">
                Georgetown, Capitol Hill, and other historic areas have strict placement rules. Some areas may require screening or have time limitations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Federal Property Proximity</h3>
              <p className="text-gray-600">
                Areas near federal buildings, monuments, and embassies have security restrictions. Verify placement rules for projects near government facilities.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rowhouse Renovations</h3>
              <p className="text-gray-600">
                Many DC neighborhoods feature historic rowhouses with limited street access. Companies offer smaller containers for tight urban spaces.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rapid Development Areas</h3>
              <p className="text-gray-600">
                Navy Yard, NoMa, and The Wharf are seeing massive development. High demand in these areas requires early booking.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Traffic & Parking Challenges</h3>
              <p className="text-gray-600">
                DC's complex traffic patterns and limited parking make timing crucial. Schedule deliveries to avoid rush hours and street cleaning days.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your DC project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}