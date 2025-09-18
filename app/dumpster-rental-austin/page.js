// app/dumpster-rental-austin/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Austin TX | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Austin. Compare local providers serving Central Texas and the Hill Country.',
  keywords: 'dumpster rental austin, austin dumpster companies, roll off dumpster austin, texas dumpster rental'
};

export default function AustinPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Austin, Texas
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Austin and Central Texas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Austin project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Austin Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Austin Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rubbish Inc Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (512) 298-5445</p>
                  <p><strong>Website:</strong> rubbish-inc.com</p>
                  <p><strong>Features:</strong> Both rentals and junk removal services</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Austin, Cedar Park, Round Rock, Central Texas</p>
                  <p><strong>Specialties:</strong> Locally-owned, contractor program, emergency cleanup</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grime Time Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (512) 790-7078</p>
                  <p><strong>Website:</strong> grimetime.com</p>
                  <p><strong>Features:</strong> Same-day service, no hidden fees</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Austin and Central Texas</p>
                  <p><strong>Specialties:</strong> Founded 2021, transparent pricing, porta potty rentals</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Austex Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (512) 292-3867</p>
                  <p><strong>Website:</strong> austexdumpsters.com</p>
                  <p><strong>Features:</strong> 2-hour turnaround time</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Austin metro area</p>
                  <p><strong>Specialties:</strong> Same-day delivery, competitive pricing, sizes 10-30 yards</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumposaurus Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (512) 774-5666</p>
                  <p><strong>Website:</strong> dumposaurus.com</p>
                  <p><strong>Owner:</strong> Shawn Mansur & family</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Austin, Bastrop, Bee Cave, Buda, Kyle, Lakeway</p>
                  <p><strong>Specialties:</strong> Family-owned, local Austin company, education-focused</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hook-N-Haul Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> hooknhauldumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 10, 12, 20, 30, 40 cubic yards</p>
                  <p><strong>Features:</strong> Hook lift system, flat rate pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Austin and surrounding areas</p>
                  <p><strong>Specialties:</strong> Driveway-friendly, no hidden fees, CDL licensed</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">A-Tex Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> atexdumpsters.com</p>
                  <p><strong>Features:</strong> Same-day delivery available</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20, 30-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Austin and surrounding areas</p>
                  <p><strong>Specialties:</strong> Family-owned, transparent pricing, flexible terms</p>
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

        {/* Austin Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Austin Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Austin</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>East Austin</li>
                <li>South Congress</li>
                <li>Hyde Park</li>
                <li>Clarksville</li>
                <li>Tarrytown</li>
                <li>Zilker</li>
                <li>Bouldin Creek</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Austin</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Round Rock</li>
                <li>Cedar Park</li>
                <li>Leander</li>
                <li>Pflugerville</li>
                <li>Georgetown</li>
                <li>Hutto</li>
                <li>Liberty Hill</li>
                <li>Wells Branch</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Austin</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Buda</li>
                <li>Kyle</li>
                <li>San Marcos</li>
                <li>Dripping Springs</li>
                <li>Manchaca</li>
                <li>Slaughter Lane</li>
                <li>Circle C</li>
                <li>Sunset Valley</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Austin</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Lakeway</li>
                <li>Bee Cave</li>
                <li>West Lake Hills</li>
                <li>Rollingwood</li>
                <li>Spicewood</li>
                <li>Lago Vista</li>
                <li>Marble Falls</li>
                <li>Lost Creek</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Bastrop, Elgin, Lockhart, Taylor, 
              and all of Central Texas and the Hill Country
            </p>
          </div>
        </section>

        {/* Austin Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Austin Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rapid Growth & High Demand</h3>
              <p className="text-gray-600">
                Austin's booming population and construction market creates high demand. Book early, especially during spring/summer construction season.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Heat Considerations</h3>
              <p className="text-gray-600">
                Texas heat can be extreme May-September. Schedule deliveries early morning and stay hydrated when loading dumpsters.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Keep Austin Weird & Green</h3>
              <p className="text-gray-600">
                Austin prioritizes environmental responsibility. Many local companies emphasize recycling and eco-friendly disposal practices.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tech Hub Renovations</h3>
              <p className="text-gray-600">
                With many tech workers moving to Austin, home office renovations are common. Companies are experienced with residential remodeling projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Festival & Event Season</h3>
              <p className="text-gray-600">
                During SXSW, ACL, and other major events, availability may be limited and streets congested. Plan accordingly.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Hill Country Accessibility</h3>
              <p className="text-gray-600">
                Properties in the Hill Country may have steep driveways or limited access. Discuss placement options with rental companies.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Austin project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}