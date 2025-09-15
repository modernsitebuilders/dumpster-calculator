// app/dumpster-rental-los-angeles/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Los Angeles CA | Same Day Service | Best LA Prices',
  description: 'Dumpster rental in Los Angeles starting at $350. Serving Hollywood, Beverly Hills, Santa Monica, Downtown LA, and all of LA County. Same-day delivery available.',
  keywords: 'dumpster rental los angeles, dumpster rental LA, roll off dumpster los angeles, dumpster rental hollywood, dumpster rental beverly hills'
};

export default function LosAngelesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Los Angeles, CA
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Reliable dumpster rentals serving LA County from the beaches to the valleys
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Same Day Delivery</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Film Set Specialists</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Eco-Friendly Disposal</span>
          </div>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Instant LA Dumpster Quote</h2>
          <p className="mb-6">Calculate the perfect size for your Los Angeles project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        {/* Local Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Los Angeles Dumpster Rental Prices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$350 - $450</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Hollywood apartment cleanouts</li>
                <li>• Small home remodels in West LA</li>
                <li>• Garage cleanouts in the Valley</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$450 - $550</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Beverly Hills home renovations</li>
                <li>• Restaurant remodels on Sunset</li>
                <li>• Office cleanouts Downtown</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$550 - $650</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Malibu estate cleanouts</li>
                <li>• Commercial construction</li>
                <li>• Film set breakdown</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$650 - $800</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Major studio productions</li>
                <li>• Large demolition projects</li>
                <li>• Warehouse cleanouts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">LA Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central LA</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Hollywood</li>
                <li>West Hollywood</li>
                <li>Beverly Hills</li>
                <li>Koreatown</li>
                <li>Silver Lake</li>
                <li>Los Feliz</li>
                <li>Echo Park</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Side</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Santa Monica</li>
                <li>Venice</li>
                <li>Brentwood</li>
                <li>Westwood</li>
                <li>Pacific Palisades</li>
                <li>Mar Vista</li>
                <li>Culver City</li>
                <li>Marina del Rey</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">The Valley</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Burbank</li>
                <li>Glendale</li>
                <li>Studio City</li>
                <li>Sherman Oaks</li>
                <li>Encino</li>
                <li>Woodland Hills</li>
                <li>North Hollywood</li>
                <li>Van Nuys</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Bay</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Manhattan Beach</li>
                <li>Hermosa Beach</li>
                <li>Redondo Beach</li>
                <li>El Segundo</li>
                <li>Torrance</li>
                <li>Hawthorne</li>
                <li>Palos Verdes</li>
                <li>Long Beach</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Pasadena, Malibu, Calabasas, Thousand Oaks, 
              Orange County, and all of Greater Los Angeles
            </p>
          </div>
        </section>

        {/* LA-Specific Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">LA Dumpster Rental Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Film Industry Service</h3>
              <p className="text-gray-600">
                Specialized service for studio lots and location shoots. Quick setup/removal for production schedules.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Hillside Properties</h3>
              <p className="text-gray-600">
                Special equipment for Hollywood Hills and canyon properties. We handle steep driveways and limited access.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Beach Cities</h3>
              <p className="text-gray-600">
                Same-day service to Santa Monica, Venice, and South Bay. We know coastal permit requirements.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Green Disposal</h3>
              <p className="text-gray-600">
                LA County recycling compliance. We sort and divert 65% of waste from landfills per city requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent a Dumpster in LA?</h2>
          <p className="mb-6 text-gray-700">
            Get instant quotes from licensed Los Angeles providers
          </p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get LA Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}