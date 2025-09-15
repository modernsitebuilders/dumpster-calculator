import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental San Antonio TX | Alamo City Service | Best Texas Prices',
  description: 'Dumpster rental in San Antonio starting at $300. Serving downtown, suburbs, and all of Bexar County. Military and commercial specialists.',
  keywords: 'dumpster rental san antonio, dumpster rental texas, roll off dumpster san antonio, bexar county dumpster'
};

export default function SanAntonioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in San Antonio, TX
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Alamo City dumpster service for residential, commercial, and military projects
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Military Friendly</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Historic District Approved</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Fiesta Ready</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get San Antonio Dumpster Quote</h2>
          <p className="mb-6">Reliable service from downtown to the military bases</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Antonio Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$300 - $400</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small projects</li>
                <li>• Base housing cleanouts</li>
                <li>• Minor renovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$400 - $500</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Bathroom renovations</li>
                <li>• Military relocations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$500 - $625</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• New construction</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$600 - $750</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Multi-unit facilities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Antonio Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central SA</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Riverwalk</li>
                <li>Alamo Heights</li>
                <li>Monte Vista</li>
                <li>King William</li>
                <li>Mahncke Park</li>
                <li>Dignowity Hill</li>
                <li>Government Hill</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North SA</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Stone Oak</li>
                <li>Castle Hills</li>
                <li>Hollywood Park</li>
                <li>Shavano Park</li>
                <li>Leon Valley</li>
                <li>Balcones Heights</li>
                <li>Terrell Hills</li>
                <li>Olmos Park</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Military Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Fort Sam Houston</li>
                <li>Lackland AFB</li>
                <li>Randolph AFB</li>
                <li>Joint Base SA</li>
                <li>Camp Bullis</li>
                <li>Kelly Field</li>
                <li>Brooks City Base</li>
                <li>Port San Antonio</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Outer Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Schertz</li>
                <li>Cibolo</li>
                <li>New Braunfels</li>
                <li>Boerne</li>
                <li>Helotes</li>
                <li>Selma</li>
                <li>Universal City</li>
                <li>Converse</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in San Antonio?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed Texas providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get San Antonio Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}