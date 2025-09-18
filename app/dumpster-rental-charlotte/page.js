// app/dumpster-rental-charlotte/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Charlotte NC | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Charlotte. Compare local providers serving the Queen City and surrounding counties.',
  keywords: 'dumpster rental charlotte, charlotte dumpster companies, roll off dumpster charlotte, north carolina dumpster rental'
};

export default function CharlottePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Charlotte, North Carolina
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the Queen City and surrounding areas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Charlotte project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Charlotte Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Charlotte Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Griffin Waste</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (704) 825-7878</p>
                  <p><strong>Website:</strong> griffinwaste.com</p>
                  <p><strong>Features:</strong> Same-day local service, wide loading door</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Uptown, South End, NoDa, Myers Park, Ballantyne</p>
                  <p><strong>Specialties:</strong> Locally operated, no hidden fees, low 4-foot walls</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Willow Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> willowdumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40-yard options</p>
                  <p><strong>Features:</strong> Locally owned and operated</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Charlotte and surrounding counties</p>
                  <p><strong>Specialties:</strong> Licensed and insured, contractor's first choice</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">VaVia Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> govavia.com</p>
                  <p><strong>Container Sizes:</strong> 10 and 15-yard options</p>
                  <p><strong>Features:</strong> No hidden fees, transparent pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Charlotte metro area</p>
                  <p><strong>Specialties:</strong> Specialized in small spaces, driveway placement</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Viking Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> vikingdumpsters.com</p>
                  <p><strong>Features:</strong> Driver tracking available</p>
                  <p><strong>Services:</strong> Courtesy text notifications</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Charlotte and surrounding areas</p>
                  <p><strong>Specialties:</strong> Protection boards included, same-day pickup available</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">DumpStor of Charlotte</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (980) 393-3867</p>
                  <p><strong>Website:</strong> dumpstor.com/charlotte-nc</p>
                  <p><strong>Container Sizes:</strong> 12 and 20-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Charlotte area</p>
                  <p><strong>Specialties:</strong> Driveway protection, fits in parking space, DumpStor Pro combo units</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Connections of Charlotte</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wasteconnections.com/charlotte</p>
                  <p><strong>Experience:</strong> 25+ years serving Charlotte</p>
                  <p><strong>Features:</strong> Grapple truck services available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Mecklenburg, Cabarrus, Gaston, Iredell, York County SC</p>
                  <p><strong>Specialties:</strong> Commercial and residential, recycling options</p>
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

        {/* Charlotte Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Charlotte Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Charlotte</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Uptown</li>
                <li>South End</li>
                <li>NoDa</li>
                <li>Plaza Midwood</li>
                <li>Elizabeth</li>
                <li>Dilworth</li>
                <li>Myers Park</li>
                <li>Cotswold</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Charlotte</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>University City</li>
                <li>Highland Creek</li>
                <li>Huntersville</li>
                <li>Cornelius</li>
                <li>Davidson</li>
                <li>Mooresville</li>
                <li>Concord</li>
                <li>Harrisburg</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Charlotte</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Ballantyne</li>
                <li>Pineville</li>
                <li>Matthews</li>
                <li>Mint Hill</li>
                <li>Indian Trail</li>
                <li>Waxhaw</li>
                <li>Fort Mill, SC</li>
                <li>Rock Hill, SC</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Charlotte</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Steele Creek</li>
                <li>Mountain Island</li>
                <li>Belmont</li>
                <li>Mount Holly</li>
                <li>Gastonia</li>
                <li>Kings Mountain</li>
                <li>Cramerton</li>
                <li>Lowell</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Monroe, Kannapolis, Statesville, Shelby, 
              and all of Mecklenburg, Cabarrus, Gaston, and surrounding counties
            </p>
          </div>
        </section>

        {/* Charlotte Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Charlotte Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Banking & Business Hub Growth</h3>
              <p className="text-gray-600">
                Charlotte's status as the second-largest banking center creates constant commercial renovation demand. Book early for Uptown and South End projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rapid Suburban Expansion</h3>
              <p className="text-gray-600">
                Areas like Ballantyne, University City, and surrounding towns are booming. New construction and home renovations keep dumpster demand high year-round.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Neighborhoods</h3>
              <p className="text-gray-600">
                Dilworth, Myers Park, and Plaza Midwood have mature trees and narrow streets. Many companies offer smaller footprint options for these areas.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">NASCAR & Event Season</h3>
              <p className="text-gray-600">
                Race weeks and major events at Bank of America Stadium create traffic and availability challenges. Plan accordingly during these periods.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Carolina Weather Patterns</h3>
              <p className="text-gray-600">
                Humid summers and occasional ice storms affect project timing. Spring and fall are busiest for renovations and cleanouts.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Multi-County Service Areas</h3>
              <p className="text-gray-600">
                Charlotte metro spans North and South Carolina. Some companies serve both states - verify service areas for outlying locations.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Charlotte project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}