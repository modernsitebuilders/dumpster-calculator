import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Kansas City MO | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Kansas City. Compare local providers serving the KC Metro area with competitive pricing and fast delivery.',
  keywords: 'dumpster rental kansas city, kansas city dumpster companies, roll off dumpster kansas city, missouri dumpster rental'
};

export default function KansasCityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Kansas City, Missouri
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the KC Metro area and surrounding counties
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Kansas City project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Kansas City Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">U-LOAD-IT Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> uloaditkc.com</p>
                  <p><strong>Experience:</strong> Serving Kansas City since 1997</p>
                  <p><strong>Container Sizes:</strong> 8, 12, 20, 30, 40 cubic yards</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Both Kansas and Missouri sides</p>
                  <p><strong>Features:</strong> 1,000+ 5-star reviews, same-day service, 24-hour online booking</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">KC Disposal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (816) 342-5833</p>
                  <p><strong>Website:</strong> kansascitydisposal.com</p>
                  <p><strong>Services:</strong> Residential and commercial dumpsters</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Kansas City metro</p>
                  <p><strong>Features:</strong> Quick delivery, professional service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">KC Dumpster Company</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> kcdumpster.com</p>
                  <p><strong>Focus:</strong> Most affordable dumpster rental services</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Kansas City area</p>
                  <p><strong>Features:</strong> Quality service, timely deliveries</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Management</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wm.com</p>
                  <p><strong>Services:</strong> Multiple sizes, affordable pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Kansas City MO, Fairfax, Independence, Mission</p>
                  <p><strong>Features:</strong> LEED building support, recycling partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Kansas City Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Missouri Side</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown Kansas City</li>
                <li>Country Club Plaza</li>
                <li>Independence</li>
                <li>Blue Springs</li>
                <li>Lee's Summit</li>
                <li>Raytown</li>
                <li>Grandview</li>
                <li>Belton</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Kansas Side</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Overland Park</li>
                <li>Olathe</li>
                <li>Kansas City KS</li>
                <li>Shawnee</li>
                <li>Lenexa</li>
                <li>Leawood</li>
                <li>Prairie Village</li>
                <li>Mission</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North KC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>North Kansas City</li>
                <li>Gladstone</li>
                <li>Liberty</li>
                <li>Parkville</li>
                <li>Platte Woods</li>
                <li>Riverside</li>
                <li>Smithville</li>
                <li>Excelsior Springs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Suburban Areas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Lake Winnebago</li>
                <li>Grain Valley</li>
                <li>Pleasant Hill</li>
                <li>Harrisonville</li>
                <li>Peculiar</li>
                <li>Raymore</li>
                <li>Oak Grove</li>
                <li>Greenwood</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Kansas City Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Sports Economy Boom</h3>
              <p className="text-gray-600">
                Chiefs and Royals success drives construction and renovation demand. Stadium area and downtown see high activity.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibent mb-1">Two-State Metro</h3>
              <p className="text-gray-600">
                Kansas City spans Missouri and Kansas. Ensure your provider serves both sides and understands cross-state regulations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Severe Weather</h3>
              <p className="text-gray-600">
                Kansas City experiences tornadoes and severe storms. Plan for potential delivery delays during storm season (spring/summer).
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}