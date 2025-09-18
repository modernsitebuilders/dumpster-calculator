// app/dumpster-rental-los-angeles/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Los Angeles CA | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Los Angeles. Compare local providers serving LA, Hollywood, Santa Monica, and surrounding areas.',
  keywords: 'dumpster rental los angeles, LA dumpster companies, roll off dumpster los angeles, hollywood dumpster rental'
};

export default function LosAngelesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Los Angeles, California
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Los Angeles County and surrounding areas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your LA project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local LA Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Los Angeles Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Green Dumpster</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (818) 404-5865 (24/7)</p>
                  <p><strong>Website:</strong> thegreendumpster.com</p>
                  <p><strong>Features:</strong> GPS tracking, instant online booking</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Los Angeles County, San Fernando Valley</p>
                  <p><strong>Notes:</strong> Third-generation family business, graffiti-free dumpsters</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">American Reclamation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (888) 999-9330</p>
                  <p><strong>Website:</strong> americanreclamation.com</p>
                  <p><strong>Experience:</strong> 50+ years, three generations</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Los Angeles metro area</p>
                  <p><strong>Services:</strong> Full-service waste collection, recycling facility, CNG trucks</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Bins (Got Trash)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> gottrash.net</p>
                  <p><strong>Experience:</strong> 30+ years in LA area</p>
                  <p><strong>Container Sizes:</strong> 3-yard to 40-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater San Fernando Valley, LA County</p>
                  <p><strong>Features:</strong> Online booking, up to 8 days included</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">California Waste Services (CWS)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (800) 839-5550</p>
                  <p><strong>Website:</strong> californiawasteservices.com</p>
                  <p><strong>Specialties:</strong> LEED compliance, recycling facility</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Los Angeles, Long Beach, Orange County</p>
                  <p><strong>Container Sizes:</strong> 1, 3, 10, 20, 40-yard options</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">LA Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (213) 279-5046</p>
                  <p><strong>Website:</strong> ladumpsterrental.com</p>
                  <p><strong>Features:</strong> 7-day rentals, LEED certification</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Los Angeles area, Hollywood Hills, Downtown</p>
                  <p><strong>Specialties:</strong> Hard-to-reach locations, event services</p>
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

        {/* LA Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Los Angeles Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central LA</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Hollywood</li>
                <li>West Hollywood</li>
                <li>Mid-City</li>
                <li>Koreatown</li>
                <li>Silver Lake</li>
                <li>Echo Park</li>
                <li>Los Feliz</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Side</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Santa Monica</li>
                <li>Venice</li>
                <li>Beverly Hills</li>
                <li>West LA</li>
                <li>Culver City</li>
                <li>Marina del Rey</li>
                <li>Brentwood</li>
                <li>Pacific Palisades</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">San Fernando Valley</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Van Nuys</li>
                <li>North Hollywood</li>
                <li>Burbank</li>
                <li>Glendale</li>
                <li>Sherman Oaks</li>
                <li>Studio City</li>
                <li>Encino</li>
                <li>Woodland Hills</li>
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

        {/* LA Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">LA Dumpster Considerations</h2>
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
                Special equipment for Hollywood Hills and canyon properties. Many companies handle steep driveways and limited access.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Beach Cities</h3>
              <p className="text-gray-600">
                Service to Santa Monica, Venice, and South Bay areas. Check with companies about coastal permit requirements.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Traffic Considerations</h3>
              <p className="text-gray-600">
                LA traffic affects delivery times. Many companies offer early morning or weekend delivery to avoid peak hours.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Environmental Compliance</h3>
              <p className="text-gray-600">
                LA County has recycling requirements. Many companies offer LEED compliance and high diversion rates.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your LA project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}