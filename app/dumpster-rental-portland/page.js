import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Portland OR | Keep Portland Clean | Best Oregon Prices',
  description: 'Dumpster rental in Portland starting at $375. Serving Beaverton, Gresham, Lake Oswego, and all of Metro Portland. Eco-friendly disposal.',
  keywords: 'dumpster rental portland, dumpster rental oregon, roll off dumpster portland, beaverton dumpster rental'
};

export default function PortlandPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Portland, OR
          </h1>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Portland Dumpster Quote</h2>
          <p className="mb-6">Sustainable waste solutions for Rose City projects</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Portland Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$375 - $475</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small renovations</li>
                <li>• Basement cleanouts</li>
                <li>• Garden projects</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$475 - $575</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Bathroom renovations</li>
                <li>• Flooring replacement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$575 - $725</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• Construction debris</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$675 - $825</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Multi-unit buildings</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Portland Metro Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Portland Proper</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pearl District</li>
                <li>Hawthorne</li>
                <li>Alberta Arts</li>
                <li>Mississippi</li>
                <li>Division</li>
                <li>Sellwood</li>
                <li>Irvington</li>
                <li>Laurelhurst</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Westside</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Beaverton</li>
                <li>Tigard</li>
                <li>Lake Oswego</li>
                <li>Milwaukie</li>
                <li>Tualatin</li>
                <li>Hillsboro</li>
                <li>Oregon City</li>
                <li>West Linn</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Eastside</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Gresham</li>
                <li>Happy Valley</li>
                <li>Clackamas</li>
                <li>Damascus</li>
                <li>Boring</li>
                <li>Sandy</li>
                <li>Troutdale</li>
                <li>Wood Village</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Extended Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Vancouver WA</li>
                <li>Camas WA</li>
                <li>Battle Ground WA</li>
                <li>St. Helens</li>
                <li>Scappoose</li>
                <li>Forest Grove</li>
                <li>McMinnville</li>
                <li>Newberg</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in Portland?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed Oregon providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Portland Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}