import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental San Francisco CA | Golden Gate Service | Premium Bay Area',
  description: 'Dumpster rental in San Francisco starting at $550. Serving the city, peninsula, and Bay Area. Steep hill specialists and eco-conscious disposal.',
  keywords: 'dumpster rental san francisco, dumpster rental bay area, roll off dumpster sf, peninsula dumpster rental'
};

export default function SanFranciscoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in San Francisco, CA
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Premium dumpster service for the Golden Gate City and Bay Area
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Steep Hill Experts</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Premium Service</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Zero Waste Goals</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get San Francisco Dumpster Quote</h2>
          <p className="mb-6">Premium service for the City by the Bay</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Francisco Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$550 - $675</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small renovations</li>
                <li>• Apartment cleanouts</li>
                <li>• Minor projects</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$650 - $775</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Bathroom renovations</li>
                <li>• Victorian restorations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$750 - $925</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• Commercial renovation</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$850 - $1,025</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Tech office buildouts</li>
                <li>• Large construction</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Francisco Bay Area We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">SF Neighborhoods</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Financial District</li>
                <li>SOMA</li>
                <li>Mission</li>
                <li>Castro</li>
                <li>Haight-Ashbury</li>
                <li>Nob Hill</li>
                <li>Russian Hill</li>
                <li>Presidio</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Peninsula</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Palo Alto</li>
                <li>Mountain View</li>
                <li>Sunnyvale</li>
                <li>Redwood City</li>
                <li>San Mateo</li>
                <li>Menlo Park</li>
                <li>Foster City</li>
                <li>Belmont</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Bay</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Oakland</li>
                <li>Berkeley</li>
                <li>Alameda</li>
                <li>Emeryville</li>
                <li>San Leandro</li>
                <li>Hayward</li>
                <li>Fremont</li>
                <li>Union City</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Bay</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Marin County</li>
                <li>Sausalito</li>
                <li>Mill Valley</li>
                <li>San Rafael</li>
                <li>Tiburon</li>
                <li>Novato</li>
                <li>Petaluma</li>
                <li>Napa</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in San Francisco?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed Bay Area providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get San Francisco Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}