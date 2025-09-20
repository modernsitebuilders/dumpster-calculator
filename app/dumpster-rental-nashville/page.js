// app/dumpster-rental-nashville/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Nashville TN | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Nashville. Compare local providers serving Music City and Middle Tennessee.',
  keywords: 'dumpster rental nashville, nashville dumpster companies, roll off dumpster nashville, tennessee dumpster rental'
};

export default function NashvillePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Nashville, Tennessee
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Music City and Middle Tennessee
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Nashville project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Nashville Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nashville Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Dog Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> reddogdumpsters.com</p>
                  <p><strong>Reviews:</strong> 1,000+ local 5-star Google reviews</p>
                  <p><strong>Features:</strong> Same-day delivery guarantee before noon</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Nashville and Middle Tennessee</p>
                  <p><strong>Specialties:</strong> Locally owned, 10 & 15 yard dumpsters, flat rate pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">VaVia Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (615) 622-8888</p>
                  <p><strong>Address:</strong> 700 42nd Ave N, Nashville, TN 37209</p>
                  <p><strong>Experience:</strong> 20+ years in Nashville</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Nashville and Middle Tennessee</p>
                  <p><strong>Specialties:</strong> Locally owned, 10 & 15 yard containers, next-day delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clean Site Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> cleansitedumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20-yard roll-off dumpsters</p>
                  <p><strong>Pricing:</strong> $339-$489 range</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Nashville, Hendersonville, Franklin, Mt Juliet, Smyrna, Murfreesboro</p>
                  <p><strong>Specialties:</strong> Tight space delivery, residential & commercial focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nashville Dumpster Company</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> nashvilledumpster.co</p>
                  <p><strong>Container Sizes:</strong> 15, 20, 20(B), 30-yard options</p>
                  <p><strong>Features:</strong> Specialized dirt/rock containers available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Nashville Metro area</p>
                  <p><strong>Specialties:</strong> Construction projects, commercial jobs, large household cleanups</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">DumpStor of Nashville</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpstor.com/nashville-tn</p>
                  <p><strong>Container Sizes:</strong> 12 & 20-yard open top, DumpStor Pro</p>
                  <p><strong>Features:</strong> Innovative storage/dumpster combination units</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Nashville and surrounding areas</p>
                  <p><strong>Specialties:</strong> Tool protection, driveway protection, enclosed options</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpsters On Demand</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (615) 971-3668</p>
                  <p><strong>Website:</strong> dumpstersondemandllc.com</p>
                  <p><strong>Container Sizes:</strong> 15-yard roll-off bins</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Davidson County, Murfreesboro, Franklin, Hendersonville, Gallatin, Brentwood</p>
                  <p><strong>Specialties:</strong> Locally owned, Nashville Public Schools partner, driveway-friendly</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Griffin Waste Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> griffinwaste.com</p>
                  <p><strong>Container Size:</strong> 10-yard containers (12'L x 8'W x 4'H)</p>
                  <p><strong>Features:</strong> Extra wide gate, low deck positioning</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Nashville and surrounding areas</p>
                  <p><strong>Specialties:</strong> Same-day service, compact size for any driveway</p>
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

        {/* Nashville Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nashville Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Nashville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Music Row</li>
                <li>The Gulch</li>
                <li>SoBro</li>
                <li>Germantown</li>
                <li>East Nashville</li>
                <li>Green Hills</li>
                <li>Belle Meade</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Nashville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Hendersonville</li>
                <li>Goodlettsville</li>
                <li>White House</li>
                <li>Gallatin</li>
                <li>Madison</li>
                <li>Hermitage</li>
                <li>Old Hickory</li>
                <li>Lakewood</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Nashville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Franklin</li>
                <li>Brentwood</li>
                <li>Nolensville</li>
                <li>Antioch</li>
                <li>Smyrna</li>
                <li>La Vergne</li>
                <li>Murfreesboro</li>
                <li>Spring Hill</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Nashville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Bellevue</li>
                <li>Pegram</li>
                <li>Kingston Springs</li>
                <li>Ashland City</li>
                <li>Cheatham County</li>
                <li>Dickson</li>
                <li>White Bluff</li>
                <li>Fairview</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Wilson County, Williamson County, Sumner County, 
              Rutherford County, and all of Middle Tennessee
            </p>
          </div>
        </section>

        {/* Nashville Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nashville Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Music City Construction Boom</h3>
              <p className="text-gray-600">
                Nashville's explosive population growth creates massive construction demand. Book early as availability can be tight during peak building season.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic District Regulations</h3>
              <p className="text-gray-600">
                Many Nashville neighborhoods have historic preservation rules. Check permit requirements for downtown and historic areas.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Music Industry Renovations</h3>
              <p className="text-gray-600">
                High demand for studio and venue renovations. Many providers specialize in commercial entertainment industry projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Traffic & Event Considerations</h3>
              <p className="text-gray-600">
                Major events at Bridgestone Arena, Nissan Stadium, and music venues can cause traffic delays. Plan delivery times accordingly.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rolling Hills Terrain</h3>
              <p className="text-gray-600">
                Nashville's hilly terrain can create access challenges. Discuss driveway grades and placement options with rental companies.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Transplant Home Upgrades</h3>
              <p className="text-gray-600">
                Many newcomers renovating homes creates steady residential demand. Providers experienced with whole-house renovation projects.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Nashville project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}