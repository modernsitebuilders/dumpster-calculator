// app/dumpster-rental-boston/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Boston MA | Permit Included | Best Boston Prices',
  description: 'Dumpster rental in Boston starting at $450. Serving Back Bay, South End, Cambridge, and all of Greater Boston. Permit assistance included.',
  keywords: 'dumpster rental boston, dumpster rental cambridge, roll off dumpster boston, boston construction dumpster'
};

export default function BostonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Boston, MA
          </h1>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Boston Dumpster Quote with Permit Help</h2>
          <p className="mb-6">We handle Boston's complex permitting process for you</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        {/* Local Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Boston Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$450 - $575</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small brownstone projects</li>
                <li>• Basement cleanouts</li>
                <li>• Minor renovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$575 - $725</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen renovations</li>
                <li>• Bathroom gut jobs</li>
                <li>• Flooring replacement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$675 - $850</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house renovations</li>
                <li>• Multi-unit projects</li>
                <li>• Commercial work</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$775 - $950</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Large construction</li>
                <li>• Commercial demolition</li>
                <li>• Multi-building projects</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Prices include 7-day rental period. Boston permit assistance included. Higher costs due to limited disposal sites and traffic.
          </p>
        </section>

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Greater Boston Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Boston Proper</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Back Bay</li>
                <li>South End</li>
                <li>North End</li>
                <li>Beacon Hill</li>
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
                <li>Brookline</li>
                <li>Newton</li>
                <li>Waltham</li>
                <li>Lexington</li>
                <li>Burlington</li>
                <li>Woburn</li>
                <li>Winchester</li>
                <li>Melrose</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Shore</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Quincy</li>
                <li>Braintree</li>
                <li>Milton</li>
                <li>Dedham</li>
                <li>Needham</li>
                <li>Wellesley</li>
                <li>Framingham</li>
                <li>Natick</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Complex Permit Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Boston Dumpster Permit Requirements</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
            <h3 className="font-bold mb-3 text-red-800">⚠️ Boston Has Complex Permit Rules</h3>
            <p className="text-red-700 mb-3">
              Boston requires permits for most dumpster placements, even partially on public property. We handle this process for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-bold mb-3">When Permits Are Required</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Any public street placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Sidewalk encroachment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Blocking parking spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Historic districts (additional approval)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold mb-3">Our Permit Service</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>We file all paperwork for you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Include permit cost in quote</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Handle inspections if required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Know all neighborhood rules</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Boston Public Works:</strong> 1010 Massachusetts Ave, Boston, MA 02118 | Phone: (617) 635-7361<br />
              <strong>Permit Cost:</strong> $200-400 depending on location and duration
            </p>
          </div>
        </section>

        {/* Local Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Boston-Specific Dumpster Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Narrow Streets & Brownstones</h3>
              <p className="text-gray-600">
                Many Boston streets are too narrow for large dumpsters. We offer smaller "high-boy" dumpsters with same capacity, smaller footprint.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic District Considerations</h3>
              <p className="text-gray-600">
                Beacon Hill, North End, and Back Bay have strict rules. Some areas require special screening or placement restrictions.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Snow Emergency Routes</h3>
              <p className="text-gray-600">
                Winter rentals must avoid snow emergency routes. We track all Boston snow emergency restrictions and adjust placement accordingly.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">University Area Coordination</h3>
              <p className="text-gray-600">
                Cambridge and Allston projects need coordination with Harvard/MIT/BU schedules. Student move-in/out periods have special requirements.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">High Disposal Costs</h3>
              <p className="text-gray-600">
                Boston has limited disposal facilities, making costs higher than national average. Recycling when possible helps reduce fees.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in Boston?</h2>
          <p className="mb-6 text-gray-700">
            Let us handle the permits while you focus on your project
          </p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Boston Quotes with Permit Help
          </Link>
        </div>
      </div>
    </main>
  );
}