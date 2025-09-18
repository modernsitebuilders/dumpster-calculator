// app/dumpster-rental-philadelphia/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Philadelphia PA | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Philadelphia. Compare local providers serving the City of Brotherly Love and surrounding areas.',
  keywords: 'dumpster rental philadelphia, philly dumpster companies, roll off dumpster philadelphia, pennsylvania dumpster rental'
};

export default function PhiladelphiaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Philadelphia, Pennsylvania
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the City of Brotherly Love and surrounding areas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Philadelphia project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Philadelphia Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Philadelphia Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tri-State Waste & Recycling</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 215-288-8797</p>
                  <p><strong>Email:</strong> info@tswaste.com</p>
                  <p><strong>Website:</strong> tswaste.com</p>
                  <p><strong>Hours:</strong> 7am-5pm Mon-Sat</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Philadelphia County & surrounding counties</p>
                  <p><strong>Specialties:</strong> Family-owned, transparent pricing, personalized service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hippo Philly Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (215) 888-2203</p>
                  <p><strong>Website:</strong> philadelphia.hippodumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Philadelphia plus 30+ suburbs</p>
                  <p><strong>Coverage:</strong> Ardmore, Conshohocken, Media, Chester, and more</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Liberty Dumpster Rental Philadelphia</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> philadelphia.libertydumpster.com</p>
                  <p><strong>Features:</strong> Online ordering, no hidden fees</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Philadelphia area</p>
                  <p><strong>Specialties:</strong> Home renovations, construction, estate cleanouts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hart Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> hartandsonwaste.com/philadelphia-pa/</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20-yard options</p>
                  <p><strong>Features:</strong> Fast delivery, fair pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Every zip code in Philadelphia</p>
                  <p><strong>Specialties:</strong> Rowhomes, tight alley placement, city logistics</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accurate Recycling</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 610-623-7772</p>
                  <p><strong>Website:</strong> accuraterecycling.com/dumpster-rental-philadelphia/</p>
                  <p><strong>Experience:</strong> 4 generations of service</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Philadelphia region</p>
                  <p><strong>Services:</strong> Same-day rental, flexible scheduling, permit guidance</p>
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

        {/* Philadelphia Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Philadelphia Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Center City/South</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Center City</li>
                <li>Rittenhouse Square</li>
                <li>Society Hill</li>
                <li>Queen Village</li>
                <li>Bella Vista</li>
                <li>South Philadelphia</li>
                <li>Passyunk</li>
                <li>Point Breeze</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Philadelphia</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Northern Liberties</li>
                <li>Fishtown</li>
                <li>Kensington</li>
                <li>Frankford</li>
                <li>Germantown</li>
                <li>Mount Airy</li>
                <li>Chestnut Hill</li>
                <li>Olney</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Philadelphia</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>University City</li>
                <li>Powelton Village</li>
                <li>Mantua</li>
                <li>West Oak Lane</li>
                <li>Overbrook</li>
                <li>Wynnefield</li>
                <li>Cobbs Creek</li>
                <li>Southwest Philly</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Northwest/Suburbs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Manayunk</li>
                <li>Roxborough</li>
                <li>East Falls</li>
                <li>Fairmount</li>
                <li>Conshohocken</li>
                <li>Ardmore</li>
                <li>Media</li>
                <li>Chester</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Camden, NJ; Wilmington, DE; Montgomery County, Delaware County, 
              Chester County, and all of Greater Philadelphia
            </p>
          </div>
        </section>

        {/* Philadelphia Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Philadelphia Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rowhouse Challenges</h3>
              <p className="text-gray-600">
                Philadelphia's iconic rowhouses often have narrow streets and limited driveway space. Many companies specialize in tight placement.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Districts</h3>
              <p className="text-gray-600">
                Old City, Society Hill, and other historic areas may have special placement restrictions. Check with your rental company.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Street Permits</h3>
              <p className="text-gray-600">
                Philadelphia Streets Department permits required for street placement. Contact them at 215-686-5500 or check online.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Winter Weather</h3>
              <p className="text-gray-600">
                Philadelphia winters can bring snow and ice. Plan cleanup projects around weather and potential delivery delays.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Construction Boom</h3>
              <p className="text-gray-600">
                Philly's ongoing development means high demand for dumpsters. Book early, especially in popular renovation neighborhoods.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Philadelphia project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}