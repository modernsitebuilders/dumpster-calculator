// app/dumpster-rental-denver/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Denver CO | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Denver. Compare local providers serving the Mile High City and Front Range.',
  keywords: 'dumpster rental denver, denver dumpster companies, roll off dumpster denver, colorado dumpster rental'
};

export default function DenverPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Denver, Colorado
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the Mile High City and Front Range
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Denver project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Denver Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Denver Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">5280 Waste</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (720) 884-0300</p>
                  <p><strong>Website:</strong> 5280waste.com</p>
                  <p><strong>Features:</strong> Direct local calls, no call center</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Denver metro, Front Range</p>
                  <p><strong>Specialties:</strong> Only locally owned Denver waste hauler, sustainability focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sam's Hauling Denver</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> samshauling.com</p>
                  <p><strong>Experience:</strong> 25+ years in business</p>
                  <p><strong>Features:</strong> Small-footprint containers, side doors</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Denver area</p>
                  <p><strong>Specialties:</strong> Family-owned, "best prices in Denver," no hidden fees</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Liberty Dumpster Rental Denver</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> denver.libertydumpster.com</p>
                  <p><strong>Features:</strong> Online booking, transparent pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Denver area</p>
                  <p><strong>Services:</strong> Home renovation, construction, estate cleanouts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">ASL Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (303) 981-2288</p>
                  <p><strong>Website:</strong> asldumpster.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Denver and surrounding Colorado areas</p>
                  <p><strong>Discounts:</strong> Military, first responder, teacher discounts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Denver Dumpster Rental Center</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 720-573-2424</p>
                  <p><strong>Website:</strong> denverdumpsterrental.org</p>
                  <p><strong>Features:</strong> Family-owned, green company</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Denver area</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20, 30-yard options</p>
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

        {/* Denver Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Denver Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Denver</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>LoDo (Lower Downtown)</li>
                <li>RiNo (River North)</li>
                <li>Capitol Hill</li>
                <li>Five Points</li>
                <li>Cherry Creek</li>
                <li>Washington Park</li>
                <li>City Park</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Denver</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Highland</li>
                <li>Berkeley</li>
                <li>Regis</li>
                <li>Chaffee Park</li>
                <li>Sunnyside</li>
                <li>Thornton</li>
                <li>Westminster</li>
                <li>Northglenn</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Denver</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Glendale</li>
                <li>Englewood</li>
                <li>Littleton</li>
                <li>Centennial</li>
                <li>Aurora</li>
                <li>Greenwood Village</li>
                <li>Cherry Hills Village</li>
                <li>Lone Tree</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Denver</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Lakewood</li>
                <li>Golden</li>
                <li>Wheat Ridge</li>
                <li>Arvada</li>
                <li>Edgewater</li>
                <li>Mountain View</li>
                <li>Sloan Lake</li>
                <li>West Colfax</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Boulder, Fort Collins, Colorado Springs, 
              Pueblo, and all of the Front Range
            </p>
          </div>
        </section>

        {/* Denver Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Denver Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Mile High Altitude</h3>
              <p className="text-gray-600">
                Denver's 5,280-foot elevation can make physical work more demanding. Take breaks when loading dumpsters and stay hydrated.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Seasonal Weather Challenges</h3>
              <p className="text-gray-600">
                Colorado weather is unpredictable - sudden snowstorms even in spring/fall can affect delivery schedules. Plan for weather delays.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Green Focus</h3>
              <p className="text-gray-600">
                Denver prioritizes sustainability. Many local companies emphasize recycling and eco-friendly disposal practices.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Home Renovations</h3>
              <p className="text-gray-600">
                Many Denver neighborhoods have historic homes requiring careful renovation. Be aware of lead paint and asbestos disposal regulations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rapid Development</h3>
              <p className="text-gray-600">
                Denver's booming growth creates high demand for dumpsters. Book early, especially in developing areas like RiNo and Stapleton.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Local Business Preference</h3>
              <p className="text-gray-600">
                Denver values local businesses. Several locally-owned companies offer personalized service and community support.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Denver project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}