import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental San Diego CA | America\'s Finest Service | Best SoCal Prices',
  description: 'Dumpster rental in San Diego starting at $425. Serving beaches, downtown, and all of San Diego County. Ocean-friendly disposal.',
  keywords: 'dumpster rental san diego, dumpster rental california, roll off dumpster san diego, la jolla dumpster rental'
};

export default function SanDiegoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in San Diego, CA
          </h1>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get San Diego Dumpster Quote</h2>
          <p className="mb-6">Beach to backcountry dumpster service</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Diego Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$425 - $525</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small beach house projects</li>
                <li>• Garage cleanouts</li>
                <li>• Minor renovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$525 - $625</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Bathroom renovations</li>
                <li>• Pool area projects</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$625 - $775</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• Construction debris</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$725 - $875</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Multi-unit buildings</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Diego County Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central San Diego</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Gaslamp Quarter</li>
                <li>Hillcrest</li>
                <li>North Park</li>
                <li>South Park</li>
                <li>Golden Hill</li>
                <li>Balboa Park</li>
                <li>Mission Hills</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Coastal Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>La Jolla</li>
                <li>Pacific Beach</li>
                <li>Mission Beach</li>
                <li>Ocean Beach</li>
                <li>Point Loma</li>
                <li>Sunset Cliffs</li>
                <li>Del Mar</li>
                <li>Solana Beach</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Carlsbad</li>
                <li>Encinitas</li>
                <li>Escondido</li>
                <li>Oceanside</li>
                <li>Vista</li>
                <li>San Marcos</li>
                <li>Poway</li>
                <li>Rancho Bernardo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East/South County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Chula Vista</li>
                <li>National City</li>
                <li>Bonita</li>
                <li>El Cajon</li>
                <li>La Mesa</li>
                <li>Santee</li>
                <li>Alpine</li>
                <li>Jamul</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in San Diego?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed California providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get San Diego Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}
