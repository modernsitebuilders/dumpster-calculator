import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Washington DC | Nation\'s Capital Service | Best DMV Prices',
  description: 'Dumpster rental in Washington DC starting at $475. Serving DC, Northern Virginia, and Maryland. Government and commercial specialists.',
  keywords: 'dumpster rental washington dc, dumpster rental dmv, roll off dumpster dc, alexandria dumpster rental'
};

export default function WashingtonDCPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Washington, DC
          </h1>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Washington DC Dumpster Quote</h2>
          <p className="mb-6">Professional service for the DMV region</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Washington DC Area Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$475 - $575</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small projects</li>
                <li>• Townhouse cleanouts</li>
                <li>• Minor renovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$575 - $675</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Bathroom renovations</li>
                <li>• Historic restorations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$675 - $825</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• Government facilities</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$775 - $925</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Federal contracts</li>
                <li>• Large construction</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">DMV Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Washington DC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Capitol Hill</li>
                <li>Dupont Circle</li>
                <li>Georgetown</li>
                <li>Adams Morgan</li>
                <li>Shaw</li>
                <li>Logan Circle</li>
                <li>Foggy Bottom</li>
                <li>Navy Yard</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Northern Virginia</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Alexandria</li>
                <li>Arlington</li>
                <li>Falls Church</li>
                <li>McLean</li>
                <li>Vienna</li>
                <li>Tysons</li>
                <li>Reston</li>
                <li>Fairfax</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Maryland</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Bethesda</li>
                <li>Silver Spring</li>
                <li>Rockville</li>
                <li>Chevy Chase</li>
                <li>Potomac</li>
                <li>Gaithersburg</li>
                <li>College Park</li>
                <li>Hyattsville</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Extended Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Annapolis MD</li>
                <li>Frederick MD</li>
                <li>Manassas VA</li>
                <li>Leesburg VA</li>
                <li>Woodbridge VA</li>
                <li>Stafford VA</li>
                <li>Charles County MD</li>
                <li>Prince William VA</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in Washington DC?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed DMV providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get DC Area Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}