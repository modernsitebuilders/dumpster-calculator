// app/dumpster-rental-portland/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Portland OR | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Portland. Compare local providers serving the Rose City and surrounding areas.',
  keywords: 'dumpster rental portland, portland dumpster companies, roll off dumpster portland, oregon dumpster rental'
};

export default function PortlandPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Portland, Oregon
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Portland and the Pacific Northwest
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Portland project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Portland Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Portland Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portland Disposal & Recycling</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (503) 281-8736</p>
                  <p><strong>Website:</strong> portlanddisposal.com</p>
                  <p><strong>Experience:</strong> Family-operated since 1936</p>
                </div>
                <div>
                  <p><strong>Container Sizes:</strong> 10, 15, 20, 30, 40-yard options</p>
                  <p><strong>Specialties:</strong> 80+ years experience, flexible pickup schedules</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spotless Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> spotlessdumpsterrental.com</p>
                  <p><strong>Features:</strong> Same-day delivery available</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Portland metro area</p>
                  <p><strong>Specialties:</strong> Compact trucks for tight spaces, garage placement</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">River City Environmental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> rivercityusa.com</p>
                  <p><strong>Features:</strong> Eco-friendly focus, transparent pricing</p>
                  <p><strong>Services:</strong> Residential and commercial rentals</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Portland and surrounding areas</p>
                  <p><strong>Specialties:</strong> Roll-off dumpsters, no hidden fees</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flannery's Drop Box Service</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (503) 777-2854</p>
                  <p><strong>Website:</strong> flannerysdropbox.com</p>
                  <p><strong>Features:</strong> Construction debris specialists</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Portland metro area</p>
                  <p><strong>Specialties:</strong> Drop box service, construction projects</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpsters City</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (503) 303-8634</p>
                  <p><strong>Website:</strong> dumpsterscity.com</p>
                  <p><strong>Container Sizes:</strong> 14 and 20-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Oregon and Washington</p>
                  <p><strong>Specialties:</strong> Residential and commercial, flexible scheduling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Dumpster Portland</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> budgetdumpster.com</p>
                  <p><strong>Features:</strong> Online ordering, flat rates</p>
                  <p><strong>Requirements:</strong> 60 ft space, 23 ft vertical clearance</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Portland neighborhoods</p>
                  <p><strong>Specialties:</strong> Service dashboard for online management</p>
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

        {/* Portland Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Portland Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Portland</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Pearl District</li>
                <li>Northwest District</li>
                <li>Old Town/Chinatown</li>
                <li>South Waterfront</li>
                <li>Lloyd District</li>
                <li>Central Eastside</li>
                <li>Kerns</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Portland</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Jade District</li>
                <li>Montavilla</li>
                <li>Mt. Tabor</li>
                <li>Belmont District</li>
                <li>Hawthorne</li>
                <li>Division</li>
                <li>Foster-Powell</li>
                <li>Lents</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Portland</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>St. Johns</li>
                <li>Kenton</li>
                <li>Mississippi District</li>
                <li>Alberta Arts District</li>
                <li>Overlook</li>
                <li>Piedmont</li>
                <li>Woodlawn</li>
                <li>Portsmouth</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Suburbs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Beaverton</li>
                <li>Lake Oswego</li>
                <li>Tigard</li>
                <li>Milwaukie</li>
                <li>Oregon City</li>
                <li>Gresham</li>
                <li>Hillsboro</li>
                <li>Vancouver, WA</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Clackamas County, Washington County, Multnomah County, 
              and Southwest Washington
            </p>
          </div>
        </section>

        {/* Portland Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Portland Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Environmental Regulations</h3>
              <p className="text-gray-600">
                Portland has strict recycling and disposal requirements. Many companies emphasize eco-friendly practices and proper sorting of materials.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rainy Season Challenges</h3>
              <p className="text-gray-600">
                October through May brings frequent rain. Cover loads to prevent water weight charges and keep debris from becoming waterlogged.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Permit Requirements</h3>
              <p className="text-gray-600">
                City requires encroachment permits for street placement. Oregon DEQ may require project surveys for certain materials - check before ordering.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Neighborhoods</h3>
              <p className="text-gray-600">
                Areas like Irvington, Ladd's Addition, and King have narrow streets and mature trees. Companies offer smaller trucks for tight access.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Urban Growth & Renovation</h3>
              <p className="text-gray-600">
                High demand for home renovations and ADU construction. Book early, especially during dry summer months when construction peaks.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Keep Portland Green</h3>
              <p className="text-gray-600">
                Strong community focus on sustainability. Many local companies prioritize recycling and diversion from landfills.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Portland project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}