// app/dumpster-rental-denver/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Denver CO | Mountain Area Service | Best Colorado Prices',
  description: 'Dumpster rental in Denver starting at $350. Serving Boulder, Westminster, Arvada, and all of Front Range Colorado. Mountain delivery available.',
  keywords: 'dumpster rental denver, dumpster rental colorado, roll off dumpster denver, boulder dumpster rental'
};

export default function DenverPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Denver, CO
          </h1>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Denver Dumpster Quote</h2>
          <p className="mb-6">Reliable service from downtown to the mountains</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Denver Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$350 - $475</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small renovations</li>
                <li>• Basement cleanouts</li>
                <li>• Minor deck removal</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$450 - $575</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Bathroom renovations</li>
                <li>• Flooring projects</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$550 - $700</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• Construction debris</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$650 - $825</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Large demolition</li>
                <li>• Multi-unit buildings</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Prices include 7-day rental period. Mountain area delivery may have additional fees.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Denver Metro Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Denver Proper</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Capitol Hill</li>
                <li>Cherry Creek</li>
                <li>Highlands</li>
                <li>LoDo</li>
                <li>RiNo</li>
                <li>Stapleton</li>
                <li>Washington Park</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Westminster</li>
                <li>Thornton</li>
                <li>Northglenn</li>
                <li>Broomfield</li>
                <li>Commerce City</li>
                <li>Federal Heights</li>
                <li>Louisville</li>
                <li>Lafayette</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Arvada</li>
                <li>Wheat Ridge</li>
                <li>Lakewood</li>
                <li>Golden</li>
                <li>Edgewater</li>
                <li>Mountain View</li>
                <li>Applewood</li>
                <li>Berkley</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Littleton</li>
                <li>Englewood</li>
                <li>Centennial</li>
                <li>Highlands Ranch</li>
                <li>Lone Tree</li>
                <li>Greenwood Village</li>
                <li>Cherry Hills</li>
                <li>Columbine</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Mountain Areas:</strong> We also serve Boulder, Longmont, Superior, 
              Nederland, and other Front Range communities with specialized mountain delivery.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Denver-Specific Dumpster Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">High Altitude Considerations</h3>
              <p className="text-gray-600">
                Denver's 5,280-foot elevation affects truck performance. We use specialized equipment for reliable delivery and pickup at altitude.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Weather-Resistant Service</h3>
              <p className="text-gray-600">
                Colorado weather changes quickly. Our dumpsters include optional weather covers for snow protection and secure tie-downs for wind.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Mountain Community Access</h3>
              <p className="text-gray-600">
                Boulder, Golden, and foothills communities may have steep grades or narrow roads. We coordinate special delivery arrangements as needed.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Environmental Consciousness</h3>
              <p className="text-gray-600">
                Denver values sustainability. We partner with local recycling facilities and sort materials to minimize environmental impact.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Winter Operations</h3>
              <p className="text-gray-600">
                Snow season runs October-April. We monitor weather forecasts and may reschedule deliveries during major storms for safety.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Denver Dumpster Rental FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Can you deliver to the mountains near Denver?</summary>
              <p className="mt-2 text-gray-600">
                Yes! We serve Boulder, Golden, Nederland, and other Front Range communities. Mountain deliveries may have additional fees based on accessibility.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What about snow season deliveries?</summary>
              <p className="mt-2 text-gray-600">
                We operate year-round with specialized equipment. During major snowstorms, we may reschedule for safety but maintain service throughout winter.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Do I need a permit in Denver?</summary>
              <p className="mt-2 text-gray-600">
                Private property placement doesn't require permits. Street placement needs a Right-of-Way permit from Denver Public Works ($100-200).
              </p>
            </details>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in Denver?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed Colorado providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Denver Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}