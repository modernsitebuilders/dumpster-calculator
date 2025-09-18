// app/dumpster-rental-san-diego/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental San Diego CA | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in San Diego. Compare local providers serving America\'s Finest City and surrounding areas.',
  keywords: 'dumpster rental san diego, san diego dumpster companies, roll off dumpster san diego, california dumpster rental'
};

export default function SanDiegoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in San Diego, California
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving San Diego County and surrounding areas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your San Diego project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local San Diego Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Diego Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Haul'n Off Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (619) 720-4511</p>
                  <p><strong>Website:</strong> haulnoff.com</p>
                  <p><strong>Features:</strong> Dirt and concrete specialists</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Diego, La Mesa</p>
                  <p><strong>Specialties:</strong> Construction debris, competitive overage pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobiledumps San Diego</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (619) 629-4751</p>
                  <p><strong>Website:</strong> mobiledumps.com</p>
                  <p><strong>Features:</strong> Mobile dumpsters, relocatable units</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Diego County</p>
                  <p><strong>Specialties:</strong> Same-day delivery, back swinging doors, low deck</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">EDCO Disposal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> san-diego.edcodisposal.com</p>
                  <p><strong>Experience:</strong> Family-owned since 1967</p>
                  <p><strong>Features:</strong> Residential and commercial services</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Southern California</p>
                  <p><strong>Specialties:</strong> Locally operated, recycling focus, multiple cart sizes</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trash Daddy Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> trashdaddydumpsters.com</p>
                  <p><strong>Features:</strong> 500+ 5-star reviews</p>
                  <p><strong>Container Sizes:</strong> 15, 20-yard high-side options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> All San Diego neighborhoods</p>
                  <p><strong>Specialties:</strong> Family-owned, no hidden fees, driveway-friendly</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Rental Dogs</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpsterrentaldogs.com</p>
                  <p><strong>Container Sizes:</strong> 10 to 40 cubic yards</p>
                  <p><strong>Features:</strong> Nationwide operation</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Chula Vista, El Cajon, Escondido, Encinitas</p>
                  <p><strong>Specialties:</strong> Fast delivery, foreclosure cleanouts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">ZTERS</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> zters.com</p>
                  <p><strong>Features:</strong> Nationwide company</p>
                  <p><strong>Pricing:</strong> $397-$677 depending on size</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> San Diego County</p>
                  <p><strong>Specialties:</strong> 10-day rental periods, decade of experience</p>
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

        {/* San Diego Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Diego County Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central San Diego</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Gaslamp Quarter</li>
                <li>Little Italy</li>
                <li>Hillcrest</li>
                <li>North Park</li>
                <li>South Park</li>
                <li>Golden Hill</li>
                <li>Normal Heights</li>
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
                <li>Coronado</li>
                <li>Imperial Beach</li>
                <li>Del Mar</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Escondido</li>
                <li>Oceanside</li>
                <li>Carlsbad</li>
                <li>Encinitas</li>
                <li>Vista</li>
                <li>San Marcos</li>
                <li>Poway</li>
                <li>Rancho Bernardo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East/South County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>El Cajon</li>
                <li>La Mesa</li>
                <li>Santee</li>
                <li>Lakeside</li>
                <li>Chula Vista</li>
                <li>National City</li>
                <li>Bonita</li>
                <li>Spring Valley</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Jamul, Alpine, Ramona, Valley Center, 
              Fallbrook, and all of San Diego County
            </p>
          </div>
        </section>

        {/* San Diego Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">San Diego Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Year-Round Construction Weather</h3>
              <p className="text-gray-600">
                San Diego's mild climate means construction happens year-round. Book early as demand stays consistently high throughout all seasons.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Coastal Community Restrictions</h3>
              <p className="text-gray-600">
                Beach communities like La Jolla, Del Mar, and Coronado have strict placement rules. Many areas require permits for street placement.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Military Base Proximity</h3>
              <p className="text-gray-600">
                Areas near military installations may have special requirements. Verify access and security needs for projects near bases.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Canyon & Hillside Properties</h3>
              <p className="text-gray-600">
                Many San Diego homes are on slopes or canyons. Companies offer smaller trucks and mobile units for difficult access properties.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Environmental Regulations</h3>
              <p className="text-gray-600">
                California has strict disposal and recycling requirements. Most companies emphasize green practices and proper sorting.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tourist Season Impact</h3>
              <p className="text-gray-600">
                Summer tourism and events like Comic-Con create traffic challenges. Plan deliveries around major events and beach traffic.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your San Diego project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}