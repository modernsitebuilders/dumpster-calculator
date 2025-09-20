import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Louisville KY | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Louisville. Compare local providers serving the Derby City and Jefferson County with competitive pricing.',
  keywords: 'dumpster rental louisville, louisville dumpster companies, roll off dumpster louisville, kentucky dumpster rental'
};

export default function LouisvillePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Louisville, Kentucky
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the Derby City and Jefferson County
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Louisville project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Louisville Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Moon Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (502) 772-2821</p>
                  <p><strong>Website:</strong> moondumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 6 to 40 cubic yards</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Louisville, Lexington, Jefferson County</p>
                  <p><strong>Features:</strong> Locally owned, bright green dumpsters, eco-friendly</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best Deal Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> bestdealdumpsters.com</p>
                  <p><strong>Services:</strong> Dumpster rentals and portable restrooms</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Louisville area</p>
                  <p><strong>Features:</strong> Competitive rates, online ordering available</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">WasteNow</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wastenow.com</p>
                  <p><strong>Experience:</strong> Serving Louisville since 2013</p>
                  <p><strong>Services:</strong> Dumpsters and portable restrooms</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> All of Kentuckiana</p>
                  <p><strong>Features:</strong> Top local waste management business</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Management</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wm.com</p>
                  <p><strong>Services:</strong> Multiple dumpster sizes, easy online booking</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Louisville, Elizabethtown, Shelbyville, Southern Indiana</p>
                  <p><strong>Features:</strong> National company with local service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Today Louisville</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpstertoday.com/locations/louisville-ky</p>
                  <p><strong>Features:</strong> Same-day service, easy online ordering</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Louisville area</p>
                  <p><strong>Specialties:</strong> Clean, affordable roll-off dumpsters</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Louisville Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Downtown & Central</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown Louisville</li>
                <li>Old Louisville</li>
                <li>The Highlands</li>
                <li>Clifton</li>
                <li>Crescent Hill</li>
                <li>Germantown</li>
                <li>Butchertown</li>
                <li>NuLu</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Louisville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>St. Matthews</li>
                <li>Lyndon</li>
                <li>Middletown</li>
                <li>Douglass Hills</li>
                <li>Hurstbourne</li>
                <li>Prospect</li>
                <li>Anchorage</li>
                <li>Jeffersontown</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Louisville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Iroquois</li>
                <li>Pleasure Ridge Park</li>
                <li>Valley Station</li>
                <li>Fairdale</li>
                <li>Okolona</li>
                <li>Fern Creek</li>
                <li>Hillview</li>
                <li>Brooks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West & North</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>West End</li>
                <li>Shively</li>
                <li>Portland</li>
                <li>Chickasaw</li>
                <li>Newburg</li>
                <li>Parkland</li>
                <li>Russell</li>
                <li>California</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Louisville Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Manufacturing & Logistics Hub</h3>
              <p className="text-gray-600">
                Louisville is a major manufacturing center with UPS Worldport and Ford plants. Industrial and commercial dumpster demand remains high year-round.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Derby City Events</h3>
              <p className="text-gray-600">
                Kentucky Derby and other major events can affect delivery schedules in late spring. Plan ahead for May projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Neighborhoods</h3>
              <p className="text-gray-600">
                Old Louisville and other historic areas have narrow streets and parking restrictions. Smaller dumpsters may be required.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Louisville project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}