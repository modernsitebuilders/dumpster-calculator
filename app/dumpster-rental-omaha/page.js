// app/dumpster-rental-omaha/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Omaha NE | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Omaha. Compare local providers serving the Greater Omaha area and Douglas County with competitive pricing.',
  keywords: 'dumpster rental omaha, omaha dumpster companies, roll off dumpster omaha, nebraska dumpster rental'
};

export default function OmahaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Omaha, Nebraska
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Greater Omaha and Douglas County
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Omaha project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Omaha Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Omaha Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Omaha</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (402) 242-3318</p>
                  <p><strong>Email:</strong> omaha@bintheredumpthat.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20, 30, 35, 40 yards</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Omaha area</p>
                  <p><strong>Features:</strong> Family-owned, residential friendly, driveway protection</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">402 Container</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (402) 979-5900</p>
                  <p><strong>Website:</strong> 402container.com</p>
                  <p><strong>Container Sizes:</strong> 12, 15, 20 yards</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Douglas, Sarpy, Dodge counties</p>
                  <p><strong>Features:</strong> Local expertise, transparent pricing, flexible terms</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can It Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (402) 915-DUMP (3867)</p>
                  <p><strong>Website:</strong> canitdump.com</p>
                  <p><strong>Container Sizes:</strong> 6, 10, 15, 20 yards</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Omaha, Bellevue, surrounding areas</p>
                  <p><strong>Features:</strong> 8-day standard rental, $10/day extensions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Rental Omaha HQ</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (531) 414-1486</p>
                  <p><strong>Address:</strong> 4294 N 25th Ave, Omaha, NE 68111</p>
                  <p><strong>Email:</strong> admin@omahadumpsterrentals.org</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Omaha and surrounding communities</p>
                  <p><strong>Features:</strong> Local family business, no hidden fees, fast delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">RMS Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (402) 510-7016</p>
                  <p><strong>Website:</strong> rmsdumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40 yards</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Omaha, Bellevue, Crescent IA</p>
                  <p><strong>Features:</strong> Same-day delivery, comprehensive cleanup</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">ASAP Containers</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (402) 598-4400</p>
                  <p><strong>Website:</strong> asapcontainers.com</p>
                  <p><strong>Features:</strong> Same-day delivery, online booking</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Omaha area</p>
                  <p><strong>Specialties:</strong> Construction debris, residential cleanouts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Management</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wm.com</p>
                  <p><strong>Services:</strong> Multiple sizes, online ordering, 24/7 access</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Omaha, Gretna, Millard, Elkhorn, Venice</p>
                  <p><strong>Features:</strong> LEED building support, recycling partnership</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">redbox+ of Omaha</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (402) 251-2211</p>
                  <p><strong>Email:</strong> mfredrickson@redboxplus.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30 yards (Standard & Elite)</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Omaha area</p>
                  <p><strong>Features:</strong> Unique 2-in-1 dumpster with portable restroom</p>
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

        {/* Omaha Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Omaha Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Downtown & Central</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown Omaha</li>
                <li>Old Market</li>
                <li>Midtown</li>
                <li>Blackstone</li>
                <li>Benson</li>
                <li>Florence</li>
                <li>North Omaha</li>
                <li>Near North Side</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Omaha</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>West Omaha</li>
                <li>Elkhorn</li>
                <li>Millard</li>
                <li>Aksarben</li>
                <li>Dundee</li>
                <li>Regency</li>
                <li>Rockbrook</li>
                <li>Village Pointe</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Omaha</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>South Omaha</li>
                <li>Bellevue</li>
                <li>Papillion</li>
                <li>La Vista</li>
                <li>Ralston</li>
                <li>Gretna</li>
                <li>Springfield</li>
                <li>Plattsmouth</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Metro Area</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Council Bluffs, IA</li>
                <li>Carter Lake, IA</li>
                <li>Crescent, IA</li>
                <li>Fremont</li>
                <li>Blair</li>
                <li>Wahoo</li>
                <li>Valley</li>
                <li>Waterloo</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> All of Douglas County, Sarpy County, Dodge County, 
              and Western Iowa communities
            </p>
          </div>
        </section>

        {/* Omaha Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Omaha Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Finance & Insurance Boom</h3>
              <p className="text-gray-600">
                Omaha leads national GDP growth driven by finance and insurance. Major projects include Mutual of Omaha's new headquarters and ongoing commercial construction downtown.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Corporate Headquarters Hub</h3>
              <p className="text-gray-600">
                Home to Fortune 500 companies like Berkshire Hathaway, Union Pacific, and major financial institutions. Corporate relocations and expansions drive steady construction demand.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Competitive Local Market</h3>
              <p className="text-gray-600">
                Omaha has numerous family-owned dumpster companies offering competitive rates. Standard rentals typically range 7-10 days with reasonable extension fees.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Weather Considerations</h3>
              <p className="text-gray-600">
                Nebraska experiences tornadoes and severe weather. Plan for potential delivery delays during storm seasons and consider covering dumpsters during storms.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Medical & Research Growth</h3>
              <p className="text-gray-600">
                Two medical schools and major hospitals make Omaha a healthcare hub. Medical facility construction and university projects provide consistent dumpster demand.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Iowa Border Service</h3>
              <p className="text-gray-600">
                Many companies serve both Nebraska and Iowa sides of the metro. Cross-state service is common for Council Bluffs and other Iowa communities.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Omaha project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}