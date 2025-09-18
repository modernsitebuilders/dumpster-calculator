// app/dumpster-rental-boston/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Boston MA | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Boston. Compare local providers serving Greater Boston and the North Shore.',
  keywords: 'dumpster rental boston, boston dumpster companies, roll off dumpster boston, massachusetts dumpster rental'
};

export default function BostonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Boston, Massachusetts
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Greater Boston and the North Shore
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Boston project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Boston Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Boston Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diamond Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (617) 522-1841</p>
                  <p><strong>Website:</strong> diamonddumpsterrentals.com</p>
                  <p><strong>Features:</strong> Same-day delivery available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Roslindale, Canton, Greater Boston</p>
                  <p><strong>Specialties:</strong> Founded 2021, locally-owned, emergency drop-offs</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Homestead Disposal Inc</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (781) 320-0516</p>
                  <p><strong>Website:</strong> homestead-disposal.com</p>
                  <p><strong>Container Sizes:</strong> 10 and 15-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Boston, Metro West, South Shore</p>
                  <p><strong>Specialties:</strong> Same-day/next-day delivery, transparent pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Disposal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (781) 246-2090</p>
                  <p><strong>Website:</strong> quickdisposal.com</p>
                  <p><strong>Experience:</strong> Serving MA since 1995</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Middlesex and Essex counties</p>
                  <p><strong>Specialties:</strong> Family-owned for 25+ years, demolition services</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hippo Dumpster Rental Boston</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (617) 890-9058</p>
                  <p><strong>Website:</strong> hippodumpstersma.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Boston and surrounding areas</p>
                  <p><strong>Specialties:</strong> Family-owned, multiple locations, competitive pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Dumpster</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> budgetdumpster.com</p>
                  <p><strong>Features:</strong> Upfront pricing, bundled services</p>
                  <p><strong>Requirements:</strong> 60 ft space, 23 ft vertical clearance</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Boston area</p>
                  <p><strong>Specialties:</strong> Low prices, transparent pricing, fast service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Casella Waste Systems</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (617) 765-4780</p>
                  <p><strong>Website:</strong> casella.com</p>
                  <p><strong>Experience:</strong> 50+ years in business</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Boston and surrounding areas</p>
                  <p><strong>Specialties:</strong> All-inclusive pricing, commercial and residential</p>
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

        {/* Boston Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Greater Boston Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Boston Proper</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Back Bay</li>
                <li>Beacon Hill</li>
                <li>North End</li>
                <li>South End</li>
                <li>Financial District</li>
                <li>Fenway</li>
                <li>South Boston</li>
                <li>Charlestown</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cambridge Area</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Cambridge</li>
                <li>Somerville</li>
                <li>Arlington</li>
                <li>Belmont</li>
                <li>Watertown</li>
                <li>Medford</li>
                <li>Malden</li>
                <li>Everett</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Shore</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Lynn</li>
                <li>Salem</li>
                <li>Peabody</li>
                <li>Beverly</li>
                <li>Danvers</li>
                <li>Marblehead</li>
                <li>Swampscott</li>
                <li>Saugus</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Metro West</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Newton</li>
                <li>Brookline</li>
                <li>Waltham</li>
                <li>Lexington</li>
                <li>Framingham</li>
                <li>Natick</li>
                <li>Wellesley</li>
                <li>Needham</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Quincy, Braintree, Milton, Dedham, 
              Woburn, Burlington, and all of Eastern Massachusetts
            </p>
          </div>
        </section>

        {/* Boston Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Boston Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Narrow Historic Streets</h3>
              <p className="text-gray-600">
                Many Boston streets are too narrow for large dumpsters. Companies offer smaller footprint options for tight spaces in Beacon Hill, North End, and Back Bay.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Complex Permit Process</h3>
              <p className="text-gray-600">
                Boston requires permits from multiple departments for street placement. Many companies handle this complex process for you - always ask about permit assistance.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Snow Emergency Routes</h3>
              <p className="text-gray-600">
                Winter rentals must avoid snow emergency routes. Companies track restrictions and will adjust placement to comply with city requirements.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">University Move-In/Out Periods</h3>
              <p className="text-gray-600">
                September 1st and May 31st are extremely busy due to student moves. Book early during these periods as availability is limited.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Higher Disposal Costs</h3>
              <p className="text-gray-600">
                Limited disposal facilities in Eastern Massachusetts mean higher costs than national average. Prices reflect transportation to distant facilities.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Building Materials</h3>
              <p className="text-gray-600">
                Many Boston buildings contain lead paint and asbestos. Ensure your rental company can handle these materials with proper disposal procedures.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Boston project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}