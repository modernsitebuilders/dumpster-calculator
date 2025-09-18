// app/dumpster-rental-dallas/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Dallas TX | Same Day Service | Best DFW Prices',
  description: 'Dumpster rental in Dallas starting at $300. Serving Plano, Arlington, Fort Worth, and all of DFW metroplex. Same-day delivery available.',
  keywords: 'dumpster rental dallas, dumpster rental DFW, roll off dumpster dallas, dumpster rental plano, dumpster rental fort worth'
};

export default function DallasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Dallas, TX
          </h1>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Instant Dallas Dumpster Quote</h2>
          <p className="mb-6">Fast, reliable service across the DFW metroplex</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        {/* Local Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dallas Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$300 - $425</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small home projects</li>
                <li>• Garage cleanouts</li>
                <li>• Minor renovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$400 - $525</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen renovations</li>
                <li>• Bathroom remodels</li>
                <li>• Flooring projects</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$500 - $650</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house renovations</li>
                <li>• New construction</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$600 - $775</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Multi-unit buildings</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Prices include 7-day rental period. Texas has some of the most competitive dumpster rental rates in the US.
          </p>
        </section>

        {/* DFW Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">DFW Metroplex Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Dallas County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Dallas</li>
                <li>Plano</li>
                <li>Richardson</li>
                <li>Garland</li>
                <li>Irving</li>
                <li>Mesquite</li>
                <li>Carrollton</li>
                <li>Farmers Branch</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tarrant County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Fort Worth</li>
                <li>Arlington</li>
                <li>Grand Prairie</li>
                <li>Euless</li>
                <li>Bedford</li>
                <li>Hurst</li>
                <li>Keller</li>
                <li>Southlake</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Collin County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>McKinney</li>
                <li>Frisco</li>
                <li>Allen</li>
                <li>Wylie</li>
                <li>Murphy</li>
                <li>Prosper</li>
                <li>Celina</li>
                <li>The Colony</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Denton County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Denton</li>
                <li>Lewisville</li>
                <li>Flower Mound</li>
                <li>Coppell</li>
                <li>Grapevine</li>
                <li>Highland Village</li>
                <li>Lake Dallas</li>
                <li>Little Elm</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Texas-Specific Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dallas-Specific Dumpster Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Weather Considerations</h3>
              <p className="text-gray-600">
                Texas heat can make debris handling tough. Schedule deliveries for early morning (6-8 AM) during summer months.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Storm Season Planning</h3>
              <p className="text-gray-600">
                March-May tornado season and summer storms create high demand. Book dumpsters in advance during storm cleanup periods.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibent mb-1">HOA Requirements</h3>
              <p className="text-gray-600">
                Many DFW neighborhoods have strict HOA rules. Plano, Frisco, and Southlake often require advance approval for dumpster placement.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Construction Boom Areas</h3>
              <p className="text-gray-600">
                Frisco, McKinney, and Prosper have heavy construction. Plan for potential delivery delays during peak building season.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in the DFW Area?</h2>
          <p className="mb-6 text-gray-700">
            Get competitive quotes from licensed DFW providers
          </p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get DFW Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}