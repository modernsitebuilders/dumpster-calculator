// app/dumpster-rental-san-antonio/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental San Antonio TX | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in San Antonio. Compare local providers serving the Alamo City and South Texas region.',
  keywords: 'dumpster rental san antonio, san antonio dumpster companies, roll off dumpster san antonio, south texas dumpster rental'
};

export default function SanAntonioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in San Antonio, Texas
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the Alamo City and South Texas region
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your San Antonio project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local San Antonio Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Antonio Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">South Texas Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (210) 372-8666</p>
                  <p><strong>Website:</strong> southtexasdumpsters.com</p>
                  <p><strong>Address:</strong> 12668 TX-1064 Loop, San Antonio, TX</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Antonio, Austin, all of South Texas</p>
                  <p><strong>Specialties:</strong> Family-owned, oil field services, waste consultants</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That San Antonio</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> satxdumpsterrental.com</p>
                  <p><strong>Certifications:</strong> SCTRCA certified ESBE, SBE, WBE</p>
                  <p><strong>Features:</strong> Driveway protection, tight space fitting</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Antonio and surrounding areas</p>
                  <p><strong>Specialties:</strong> "Residential Friendly" service, construction industry</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">VaVia San Antonio</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> govavia.com/san-antonio-tx-dumpster-rental/</p>
                  <p><strong>Container Sizes:</strong> 10, 15-yard roll-offs</p>
                  <p><strong>Features:</strong> Garage placement, real-time updates</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Antonio area</p>
                  <p><strong>Specialties:</strong> Same-day/next-day delivery, fast service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliant Dumpster Rental San Antonio</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> sanantonio.reliantdumpster.com</p>
                  <p><strong>Starting Price:</strong> $220 plus daily rate</p>
                  <p><strong>Features:</strong> Pay only for what you use, upfront pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Antonio area</p>
                  <p><strong>Specialties:</strong> No hidden fees, zero bureaucracy</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">San Antonio Disposal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 210-812-4291</p>
                  <p><strong>Website:</strong> sanantoniodisposal.com</p>
                  <p><strong>Container Sizes:</strong> 20, 30, 40-yard roll-offs</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater San Antonio</p>
                  <p><strong>Features:</strong> Walk-in doorways, empty and return service</p>
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

        {/* San Antonio Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Antonio Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central San Antonio</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Southtown</li>
                <li>King William</li>
                <li>Lavaca</li>
                <li>River Walk</li>
                <li>Pearl District</li>
                <li>Monte Vista</li>
                <li>Mahncke Park</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North San Antonio</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Alamo Heights</li>
                <li>Terrell Hills</li>
                <li>Olmos Park</li>
                <li>Castle Hills</li>
                <li>Shavano Park</li>
                <li>Hollywood Park</li>
                <li>Hill Country Village</li>
                <li>Stone Oak</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West/Northwest</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Medical Center</li>
                <li>Northwest Hills</li>
                <li>Helotes</li>
                <li>Leon Valley</li>
                <li>Bandera Road</li>
                <li>Lackland AFB</li>
                <li>Westover Hills</li>
                <li>Scenic Oaks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East/South</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Eastside</li>
                <li>Dignowity Hill</li>
                <li>Government Hill</li>
                <li>Riverside</li>
                <li>Southside</li>
                <li>Brooks</li>
                <li>Mission San José</li>
                <li>Roosevelt Park</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> New Braunfels, Seguin, Boerne, Kerrville, Austin, 
              Eagle Ford region, and all of South Texas
            </p>
          </div>
        </section>

        {/* San Antonio Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Antonio Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Districts</h3>
              <p className="text-gray-600">
                San Antonio has numerous historic districts with special regulations. Check requirements in areas like King William and Monte Vista.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">No Permits Required</h3>
              <p className="text-gray-600">
                According to city regulations, permits aren't required for dumpsters on private property, but placement on public property is prohibited.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Fiesta Season</h3>
              <p className="text-gray-600">
                April's Fiesta San Antonio creates high demand for dumpsters. Book early during this major citywide celebration.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Military Community</h3>
              <p className="text-gray-600">
                With Joint Base San Antonio and multiple military installations, many companies serve military families with flexible scheduling.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Oil Field Services</h3>
              <p className="text-gray-600">
                South Texas is oil country - many companies offer specialized services for Eagle Ford Shale and energy sector projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Evening Delivery Limits</h3>
              <p className="text-gray-600">
                Local ordinance prevents dumpster delivery after 10 PM. Plan accordingly for same-day service requests.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your San Antonio project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}