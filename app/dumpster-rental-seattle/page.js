// app/dumpster-rental-seattle/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Seattle WA | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Seattle. Compare local providers serving the Emerald City and Puget Sound region.',
  keywords: 'dumpster rental seattle, seattle dumpster companies, roll off dumpster seattle, washington dumpster rental'
};

export default function SeattlePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Seattle, Washington
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Seattle and the Puget Sound region
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Seattle project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Seattle Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Seattle Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">PNW Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> pnwdumpstersrental.com</p>
                  <p><strong>Features:</strong> Dumpsters stay on trailer platform</p>
                  <p><strong>Available:</strong> 24/7 customer service</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Seattle metro area</p>
                  <p><strong>Specialties:</strong> No permit needed (classified as vehicles), driveway protection</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">NW Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> nwdumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40-yard options</p>
                  <p><strong>Features:</strong> Works 7 days a week</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Seattle, Tacoma, Bellevue, Everett, Olympia</p>
                  <p><strong>Specialties:</strong> 24-hour delivery, recycling focus, no hidden fees</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Haul It All Pros</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> haulitallpros.com</p>
                  <p><strong>Location:</strong> Based in Buckley, WA</p>
                  <p><strong>Features:</strong> Scrap metal recycling credit system</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> King, Pierce, Kitsap, Thurston counties</p>
                  <p><strong>Specialties:</strong> Licensed and insured, flexible rental periods</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">ABC Hauling</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> abchauling.com</p>
                  <p><strong>Features:</strong> Locally owned and operated</p>
                  <p><strong>Pricing:</strong> Control costs by weight management</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Seattle, Kirkland, Maple Valley</p>
                  <p><strong>Specialties:</strong> Transparent pricing, 24-48 hour scheduling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Junk & Demolition Pros</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> junkproswa.com</p>
                  <p><strong>Features:</strong> Full service rentals and junk removal</p>
                  <p><strong>Booking:</strong> Online booking with instant confirmation</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Seattle, Redmond, East Side</p>
                  <p><strong>Specialties:</strong> Pioneer Square experience, demolition services</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Dumpster Seattle</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> budgetdumpster.com</p>
                  <p><strong>Features:</strong> Online ordering, bundled pricing</p>
                  <p><strong>Requirements:</strong> 60 ft space, 23 ft vertical clearance</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> All Seattle neighborhoods</p>
                  <p><strong>Specialties:</strong> Pike Place to residential areas, generous rental periods</p>
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

        {/* Seattle Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Seattle Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Seattle</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Capitol Hill</li>
                <li>Queen Anne</li>
                <li>Fremont</li>
                <li>Wallingford</li>
                <li>University District</li>
                <li>South Lake Union</li>
                <li>Belltown</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Seattle</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Ballard</li>
                <li>Greenwood</li>
                <li>Northgate</li>
                <li>Lake City</li>
                <li>Wedgwood</li>
                <li>Green Lake</li>
                <li>Phinney Ridge</li>
                <li>Crown Hill</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Seattle</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Georgetown</li>
                <li>Beacon Hill</li>
                <li>Columbia City</li>
                <li>Rainier Valley</li>
                <li>West Seattle</li>
                <li>Alki</li>
                <li>White Center</li>
                <li>Burien</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Side</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Bellevue</li>
                <li>Redmond</li>
                <li>Kirkland</li>
                <li>Issaquah</li>
                <li>Sammamish</li>
                <li>Mercer Island</li>
                <li>Newcastle</li>
                <li>Renton</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Tacoma, Everett, Federal Way, Kent, 
              Auburn, and all of King, Pierce, and Snohomish counties
            </p>
          </div>
        </section>

        {/* Seattle Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Seattle Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Constant Rain Considerations</h3>
              <p className="text-gray-600">
                Seattle's frequent rain can add significant water weight to debris. Cover loads or factor in potential weight overages during rainy months.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Steep Hills & Narrow Streets</h3>
              <p className="text-gray-600">
                Many Seattle neighborhoods have steep grades and narrow streets. Companies offer trailer-mounted options for challenging placement locations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Street Vacation Permits</h3>
              <p className="text-gray-600">
                Seattle requires street vacation permits from Department of Transportation for public right-of-way placement. Private property placement avoids this requirement.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tech Industry Growth</h3>
              <p className="text-gray-600">
                Amazon, Microsoft, and tech sector growth drives constant construction and renovation. Book early in South Lake Union and Bellevue areas.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Environmental Focus</h3>
              <p className="text-gray-600">
                Seattle prioritizes recycling and waste diversion. Most companies emphasize green practices and construction debris recycling.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Transfer Station Options</h3>
              <p className="text-gray-600">
                North Seattle (1350 N 34th St) and South Seattle (130 S Kenyon St) transfer stations handle most waste. Know which your provider uses for proximity.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Seattle project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}