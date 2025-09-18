// app/dumpster-rental-chicago/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Chicago IL | Same Day Delivery | Best Prices',
  description: 'Dumpster rental in Chicago starting at $325. Serving Downtown, North Side, South Side, and all Chicagoland. Winter service available.',
  keywords: 'dumpster rental chicago, chicago dumpster rental, roll off dumpster chicago, dumpster rental chicagoland'
};

export default function ChicagoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Chicago, IL
          </h1>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Chicago Dumpster Quote</h2>
          <p className="mb-6">Calculate size for your Chicago project - from Lincoln Park to Hyde Park</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Chicago Dumpster Prices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$325 - $425</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Condo cleanouts in River North</li>
                <li>• Small renovations in Lincoln Park</li>
                <li>• Garage cleanouts in suburbs</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$425 - $525</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Bungalow renovations</li>
                <li>• Restaurant remodels in Loop</li>
                <li>• Two-flat cleanouts</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Chicago Neighborhoods Served</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">North Side</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Lincoln Park</li>
                <li>Lakeview</li>
                <li>Wicker Park</li>
                <li>Bucktown</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Downtown</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>The Loop</li>
                <li>River North</li>
                <li>Gold Coast</li>
                <li>West Loop</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Side</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Hyde Park</li>
                <li>Bronzeville</li>
                <li>Bridgeport</li>
                <li>Beverly</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Suburbs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Naperville</li>
                <li>Schaumburg</li>
                <li>Oak Park</li>
                <li>Evanston</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
          <h3 className="font-bold mb-3">Chicago Permit Info</h3>
          <p>Alley placement usually OK without permit. Street placement requires permit from Department of Transportation.</p>
          <p className="mt-2 text-sm">Permit Office: 121 N LaSalle St • Phone: 311</p>
        </div>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Chicago Dumpster Rental?</h2>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Chicago Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}