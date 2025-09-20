// app/dumpster-rental-tampa/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Tampa FL | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Tampa. Compare local providers serving Tampa Bay and Hillsborough County.',
  keywords: 'dumpster rental tampa, tampa dumpster companies, roll off dumpster tampa, florida dumpster rental'
};

export default function TampaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Tampa, Florida
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Tampa Bay and Hillsborough County
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Tampa project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Tampa Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tampa Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Today Tampa</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpstertoday.com</p>
                  <p><strong>Features:</strong> Same-day delivery, walk-in style dumpsters</p>
                  <p><strong>Payment:</strong> Text scheduling, online extensions</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Tampa Bay area, Wesley Chapel, Lutz, Lakeland</p>
                  <p><strong>Specialties:</strong> Driveway protection, no contact delivery, flexible terms</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Tampa</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (813) 302-1717</p>
                  <p><strong>Website:</strong> bintheredumpthat.com</p>
                  <p><strong>Container Sizes:</strong> 6, 10, 15, 20-yard bins</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Tampa and surrounding areas</p>
                  <p><strong>Specialties:</strong> Residential friendly, lime-green bins, protective boards</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speedy Dumpster Rental Tampa</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (813) 592-7748</p>
                  <p><strong>Website:</strong> speedydumpstertampa.com</p>
                  <p><strong>Focus:</strong> Family-owned, transparent pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Tampa and Hillsborough County, South Tampa</p>
                  <p><strong>Specialties:</strong> Construction contractors, property managers, competitive pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">MobileDumps Tampa</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> mobiledumps.com</p>
                  <p><strong>Features:</strong> Mobile dumpster trailers, back swinging doors</p>
                  <p><strong>Reviews:</strong> 500+ five-star reviews</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Tampa area</p>
                  <p><strong>Specialties:</strong> Husband & wife team, clean trailers, low deck positioning</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">VaVia Dumpster Rental Tampa</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (813) 696-3000</p>
                  <p><strong>Address:</strong> 11838 US Hwy 41 South, Gibsonton, FL 33534</p>
                  <p><strong>Owner:</strong> Greg Walters</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Tampa and surrounding areas</p>
                  <p><strong>Specialties:</strong> Locally owned, 10 & 15-yard containers, personalized service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peterson's Roll-Off Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> petersonsrolloffdumpsters.com</p>
                  <p><strong>Experience:</strong> Three generations strong</p>
                  <p><strong>Features:</strong> Same-day service available, emergency service</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Tampa, Brandon, Carrollwood, Lutz, Wesley Chapel, Zephyrhills</p>
                  <p><strong>Specialties:</strong> Flat rate pricing, fully insured, environmentally friendly</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Connections of Tampa</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wasteconnections.com/tampa</p>
                  <p><strong>Services:</strong> Commercial and residential waste disposal</p>
                  <p><strong>Features:</strong> Recycling services, garbage pickup</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Tampa and surrounding areas</p>
                  <p><strong>Specialties:</strong> Large company resources, hiring drivers and mechanics</p>
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

        {/* Tampa Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tampa Bay Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Tampa</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Ybor City</li>
                <li>Hyde Park</li>
                <li>Seminole Heights</li>
                <li>Riverside Heights</li>
                <li>Tampa Heights</li>
                <li>Channelside</li>
                <li>Westshore</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Tampa</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Carrollwood</li>
                <li>Lutz</li>
                <li>Wesley Chapel</li>
                <li>New Tampa</li>
                <li>University</li>
                <li>Temple Terrace</li>
                <li>Northdale</li>
                <li>Cheval</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Tampa</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>MacDill AFB</li>
                <li>Bayshore</li>
                <li>Palma Ceia</li>
                <li>Beach Park</li>
                <li>South Tampa</li>
                <li>Port Tampa</li>
                <li>Gandy</li>
                <li>Interbay</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Tampa</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Brandon</li>
                <li>Riverview</li>
                <li>Valrico</li>
                <li>Seffner</li>
                <li>Mango</li>
                <li>Plant City</li>
                <li>Fishhawk</li>
                <li>Lithia</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Pasco County, Pinellas County, Polk County, 
              Hillsborough County, and all of Tampa Bay area
            </p>
          </div>
        </section>

        {/* Tampa Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tampa Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rapid Growth & Development</h3>
              <p className="text-gray-600">
                Tampa Bay is one of Florida's fastest-growing regions. High construction demand means booking early is essential, especially during peak building season.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Hurricane Season Preparation</h3>
              <p className="text-gray-600">
                Tampa Bay faces hurricane threats June-November. Many companies offer emergency debris cleanup services and storm preparation.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Port City Industrial Needs</h3>
              <p className="text-gray-600">
                Major port and industrial activity creates demand for heavy materials disposal. Providers experienced with construction and industrial waste.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tech Hub Renovations</h3>
              <p className="text-gray-600">
                Growing tech sector brings office renovations and new construction. Many companies specialize in commercial cleanouts and buildouts.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Heat & Humidity Factors</h3>
              <p className="text-gray-600">
                Year-round heat and humidity affect debris decomposition. Plan for odor management and faster project timelines.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Sports & Entertainment Events</h3>
              <p className="text-gray-600">
                Buccaneers, Lightning, and other major events can impact traffic and availability. Plan around event schedules for better access.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Tampa project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}