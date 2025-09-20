// app/dumpster-rental-san-jose/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental San Jose CA | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in San Jose. Compare local providers serving Silicon Valley and Santa Clara County.',
  keywords: 'dumpster rental san jose, san jose dumpster companies, roll off dumpster san jose, california dumpster rental'
};

export default function SanJosePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in San Jose, California
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Silicon Valley and Santa Clara County
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your San Jose project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local San Jose Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Jose Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">A&A Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (408) 684-5506</p>
                  <p><strong>Website:</strong> aandadumpsterrentalca.com</p>
                  <p><strong>Experience:</strong> 40+ years in Bay Area</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Jose, Gilroy, Bay Area, San Leandro to Redwood City</p>
                  <p><strong>Specialties:</strong> Locally owned, competitive rates, wide selection of sizes</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">GreenWaste Debris Boxes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (888) 533-9269</p>
                  <p><strong>Website:</strong> greenwaste.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Alameda, Santa Clara, San Mateo Counties, Sacramento</p>
                  <p><strong>Specialties:</strong> Construction & demolition recycling, 75% diversion rate, eco-friendly</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Value Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> sjdumpsterrental.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40-yard dumpsters</p>
                  <p><strong>Features:</strong> 24-hour delivery, multiple dumpster rentals</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Jose and surrounding areas</p>
                  <p><strong>Specialties:</strong> Professional drivers, competitive pricing, Bay Area construction projects</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">ECO BOX Recycling</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (408) 639-1373</p>
                  <p><strong>Website:</strong> ecoboxrecycling.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40 cubic yard debris boxes</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Jose to Hayward, broad Bay Area coverage</p>
                  <p><strong>Specialties:</strong> Environmental focus, same/next day delivery, great service reputation</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heartland Recycling Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (408) 912-2816</p>
                  <p><strong>Website:</strong> heartlandrecyclingservices.com</p>
                  <p><strong>Features:</strong> Top-rated service, same-day delivery available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Jose and surrounding areas</p>
                  <p><strong>Specialties:</strong> Dependable service, fair pricing, discounts for first responders/military</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">BigRentz San Jose</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> bigrentz.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40-yard dumpsters</p>
                  <p><strong>Features:</strong> Wide network of suppliers</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Jose, Santa Clara County</p>
                  <p><strong>Specialties:</strong> Best rates through supplier network, construction & residential focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Dumpster San Jose</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> budgetdumpster.com</p>
                  <p><strong>Features:</strong> Bundle pricing (delivery, pickup, rental)</p>
                  <p><strong>Permits:</strong> Revocable Encroachment Permit guidance</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Jose, Valley Fair, Mayfair areas</p>
                  <p><strong>Specialties:</strong> Generous rental periods, expert recommendations, empty-and-return service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Junk King San Jose</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> junk-king.com/locations/sanjose</p>
                  <p><strong>Services:</strong> Dumpster rental and junk removal</p>
                  <p><strong>Focus:</strong> DIY projects and large disposal jobs</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Jose and surrounding areas</p>
                  <p><strong>Specialties:</strong> Easy process, cleanouts, dual service offerings</p>
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

        {/* San Jose Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Silicon Valley Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central San Jose</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Japantown</li>
                <li>Rose Garden</li>
                <li>Willow Glen</li>
                <li>Cambrian Park</li>
                <li>West San Jose</li>
                <li>Berryessa</li>
                <li>East San Jose</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North San Jose</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Milpitas</li>
                <li>Fremont</li>
                <li>Union City</li>
                <li>Newark</li>
                <li>Alviso</li>
                <li>North San Jose</li>
                <li>Warm Springs</li>
                <li>Ardenwood</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South San Jose</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Morgan Hill</li>
                <li>Gilroy</li>
                <li>San Martin</li>
                <li>Coyote</li>
                <li>Almaden Valley</li>
                <li>Blossom Valley</li>
                <li>Silver Creek</li>
                <li>Edenvale</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Silicon Valley</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Cupertino</li>
                <li>Sunnyvale</li>
                <li>Santa Clara</li>
                <li>Mountain View</li>
                <li>Palo Alto</li>
                <li>Los Altos</li>
                <li>Campbell</li>
                <li>Saratoga</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Santa Clara County, Alameda County, San Mateo County, 
              and all of the Greater Bay Area
            </p>
          </div>
        </section>

        {/* San Jose Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Jose Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Silicon Valley Tech Boom</h3>
              <p className="text-gray-600">
                Constant tech company expansion drives massive commercial construction and office buildouts. High demand means booking well in advance is essential.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Premium Market Pricing</h3>
              <p className="text-gray-600">
                Bay Area's high cost of living affects dumpster rental prices. Expect premium rates but competitive service due to strong local economy.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Environmental Regulations</h3>
              <p className="text-gray-600">
                California has strict environmental rules. Many providers specialize in recycling and diversion to meet state mandates and reduce landfill waste.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Housing Shortage Renovations</h3>
              <p className="text-gray-600">
                Extreme housing costs drive renovation over relocation. High demand for home improvement and ADU (accessory dwelling unit) construction dumpsters.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Traffic & Access Challenges</h3>
              <p className="text-gray-600">
                Heavy Bay Area traffic can affect delivery times. Coordinate delivery windows to avoid rush hours on major highways like 101 and 880.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Permit Requirements</h3>
              <p className="text-gray-600">
                Revocable Encroachment Permit required for street placement. Contact San Jose Public Works Department for permit applications and requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your San Jose project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}