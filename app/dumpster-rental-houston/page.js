// app/dumpster-rental-houston/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Houston TX | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Houston. Compare local providers serving Harris County and surrounding areas.',
  keywords: 'dumpster rental houston, houston dumpster companies, roll off dumpster houston, harris county waste removal'
};

export default function HoustonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Houston, Texas
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Houston, Harris County, and surrounding areas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Houston project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Houston Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Houston Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Samson Disposal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (713) 300-3966</p>
                  <p><strong>Website:</strong> samsondisposal.com</p>
                  <p><strong>Experience:</strong> 25 years in Houston</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Houston and surrounding areas</p>
                  <p><strong>Specialties:</strong> Competitive pricing, large inventory, flexible rental periods</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Control Waste Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (281) 537-8442</p>
                  <p><strong>Experience:</strong> Family-owned since 2003</p>
                  <p><strong>Features:</strong> Same-day delivery (call before 10 AM)</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Houston area</p>
                  <p><strong>Services:</strong> Roll-off dumpsters, compactors, residential & commercial</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Houston</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> bintheredumpthat.com/houston-dumpster-rentals/</p>
                  <p><strong>Specialties:</strong> "Residential Friendly" service</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Houston area</p>
                  <p><strong>Services:</strong> Next-day delivery, property protection, construction & residential</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alpha Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> alphadumpsters.com/houston-tx-dumpster-rental/</p>
                  <p><strong>Service Center:</strong> Dickinson (serves Houston)</p>
                  <p><strong>Experience:</strong> 20+ years in waste hauling</p>
                </div>
                <div>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40-yard options</p>
                  <p><strong>Features:</strong> Transparent pricing, no hidden fees</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Connections of Houston</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wasteconnections.com/houston/</p>
                  <p><strong>Features:</strong> Newest truck fleet, no unexplainable fees</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Houston market and surrounding areas</p>
                  <p><strong>Services:</strong> Roll-off dumpsters, commercial waste, recycling solutions</p>
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

        {/* Houston Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Houston Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Inner Loop</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Midtown</li>
                <li>River Oaks</li>
                <li>The Heights</li>
                <li>Montrose</li>
                <li>Museum District</li>
                <li>Fourth Ward</li>
                <li>East End</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Southwest Houston</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Bellaire</li>
                <li>West University</li>
                <li>Meyerland</li>
                <li>Sugar Land</li>
                <li>Missouri City</li>
                <li>Pearland</li>
                <li>Southside Place</li>
                <li>Stafford</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Northwest Houston</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Spring Branch</li>
                <li>Memorial</li>
                <li>Cypress</li>
                <li>Tomball</li>
                <li>The Woodlands</li>
                <li>Spring</li>
                <li>Katy</li>
                <li>Energy Corridor</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Southeast Houston</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Clear Lake</li>
                <li>League City</li>
                <li>Friendswood</li>
                <li>Pasadena</li>
                <li>Deer Park</li>
                <li>La Porte</li>
                <li>Seabrook</li>
                <li>Galena Park</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Conroe, Huntsville, Baytown, Texas City, Brazoria County, 
              Fort Bend County, and all of Greater Houston area
            </p>
          </div>
        </section>

        {/* Houston Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Houston Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Hurricane Season Preparation</h3>
              <p className="text-gray-600">
                Houston's hurricane season (June-November) can affect delivery schedules. Plan cleanup projects accordingly.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Heat and Humidity</h3>
              <p className="text-gray-600">
                Texas heat can make loading dumpsters challenging. Consider early morning or evening work during summer months.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Flooding Considerations</h3>
              <p className="text-gray-600">
                Houston's flood-prone areas may require special placement considerations. Discuss with your rental company.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Oil Industry Projects</h3>
              <p className="text-gray-600">
                Many Houston companies serve industrial and energy sector projects. Ask about specialized services if needed.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Harris County Regulations</h3>
              <p className="text-gray-600">
                Check Harris County and individual city requirements for permits when placing dumpsters on public property.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Houston project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}