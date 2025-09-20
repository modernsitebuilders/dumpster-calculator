// app/dumpster-rental-fort-worth/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Fort Worth TX | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Fort Worth. Compare local providers serving the DFW Metroplex with competitive pricing and fast delivery.',
  keywords: 'dumpster rental fort worth, fort worth dumpster companies, roll off dumpster fort worth, dfw dumpster rental'
};

export default function FortWorthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Fort Worth, Texas
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the DFW Metroplex and Tarrant County
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Fort Worth project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Fort Worth Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Fort Worth Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sweet Dumps</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (817) 677-0040</p>
                  <p><strong>Website:</strong> sweetdumps.com</p>
                  <p><strong>Experience:</strong> Serving Fort Worth for 8+ years</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Fort Worth, Arlington Heights, Westover Hills, North Richland Hills</p>
                  <p><strong>Features:</strong> Next-day delivery, same-day often available, locally owned</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Frontier Waste Solutions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (817) 921-8080</p>
                  <p><strong>Address:</strong> 2301 Hemphill St, Fort Worth, TX 76110</p>
                  <p><strong>Website:</strong> frontierwaste.com</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Fort Worth, Forest Hill, Benbrook, Lake Worth, Saginaw, Burleson</p>
                  <p><strong>Pricing:</strong> Starting at $185/haul, upfront pricing, no hidden fees</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Fort Worth</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (682) 327-1696</p>
                  <p><strong>Website:</strong> bintheredumpthat.com/fort-worth</p>
                  <p><strong>Container Sizes:</strong> 4, 10, 14, 20 yards</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Fort Worth, Arlington, Mansfield, Dallas area</p>
                  <p><strong>Features:</strong> Residential friendly, driveway protection, next-day delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wildcat Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wildcatdumps.com</p>
                  <p><strong>Container Sizes:</strong> 15, 20, 30 cubic yards</p>
                  <p><strong>Features:</strong> Same-day delivery available, driveway friendly</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Fort Worth and Tarrant County</p>
                  <p><strong>Specialties:</strong> Construction projects, residential cleanouts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Supply</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (817) 807-5903</p>
                  <p><strong>Website:</strong> dumpster-supply.com</p>
                  <p><strong>Rating:</strong> BBB Accredited with A+ Rating</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> All 11 counties of DFW Metroplex</p>
                  <p><strong>Features:</strong> Locally owned, transparent pricing, flexible rental options</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Big Tex Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (817) 293-4477</p>
                  <p><strong>Website:</strong> dumpwithbigtex.com</p>
                  <p><strong>Container Sizes:</strong> Trailer, 15, 20 yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Fort Worth and North Texas</p>
                  <p><strong>Features:</strong> Community-focused, flexible scheduling, 5-star ratings</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Today Fort Worth</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (817) 285-5555</p>
                  <p><strong>Website:</strong> dumpstertoday.com/locations/fort-worth-tx</p>
                  <p><strong>Container Sizes:</strong> 12, 18 yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Fort Worth area</p>
                  <p><strong>Features:</strong> Same-day delivery, walk-in doors, 100% on-time guarantee</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Removal USA</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (817) 550-5083</p>
                  <p><strong>Website:</strong> wasteremovalusa.com</p>
                  <p><strong>Features:</strong> Same-day/next-day delivery, flat-fee pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Fort Worth, Dallas, Highland Park</p>
                  <p><strong>Specialties:</strong> Residential and commercial projects</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sundance Disposal Solutions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> sundancedisposal.com</p>
                  <p><strong>Features:</strong> Transparent pricing, no hidden fees, brokerage network</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Fort Worth and nationwide coverage</p>
                  <p><strong>Delivery:</strong> Next-day roll-off delivery standard</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Management</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wm.com</p>
                  <p><strong>Container Sizes:</strong> 20, 30, 40 yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Fort Worth, River Oaks, Westover Hills, White Settlement, Lake Worth</p>
                  <p><strong>Features:</strong> National company with local service</p>
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

        {/* Fort Worth Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Fort Worth Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Fort Worth</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown Fort Worth</li>
                <li>Sundance Square</li>
                <li>Cultural District</li>
                <li>Near Southside</li>
                <li>Trinity Park</li>
                <li>Fairmount</li>
                <li>Magnolia Heights</li>
                <li>Berkeley</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Fort Worth</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Westover Hills</li>
                <li>River Oaks</li>
                <li>Benbrook</li>
                <li>White Settlement</li>
                <li>Westworth Village</li>
                <li>Lake Worth</li>
                <li>Sansom Park</li>
                <li>Forest Hill</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Fort Worth</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>North Richland Hills</li>
                <li>Haltom City</li>
                <li>Richland Hills</li>
                <li>Watauga</li>
                <li>Saginaw</li>
                <li>Blue Mound</li>
                <li>Keller</li>
                <li>Southlake</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Fort Worth</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Burleson</li>
                <li>Crowley</li>
                <li>Everman</li>
                <li>Kennedale</li>
                <li>Arlington</li>
                <li>Mansfield</li>
                <li>Grand Prairie</li>
                <li>Cedar Hill</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> All of Tarrant County, Johnson County, and the entire DFW Metroplex
            </p>
          </div>
        </section>

        {/* Fort Worth Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Fort Worth Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">DFW Metroplex Expansion</h3>
              <p className="text-gray-600">
                Fort Worth is part of the rapidly growing DFW Metroplex. Corporate relocations and residential development drive consistent dumpster demand across Tarrant County.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Stockyards & Cultural District</h3>
              <p className="text-gray-600">
                Fort Worth's famous Stockyards and Cultural District see constant renovation and event cleanup needs. Many companies specialize in commercial and event waste management.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Competitive Local Market</h3>
              <p className="text-gray-600">
                Fort Worth has numerous local dumpster companies offering competitive rates starting around $185. Strong competition benefits customers with better pricing and service.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Texas Weather Considerations</h3>
              <p className="text-gray-600">
                North Texas experiences severe storms, tornadoes, and extreme heat. Plan for potential weather delays and consider covered dumpsters during storm season.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Oil & Gas Industry Presence</h3>
              <p className="text-gray-600">
                Fort Worth sits on the Barnett Shale formation. Energy industry construction and infrastructure projects provide steady commercial dumpster demand.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Same-Day Service Available</h3>
              <p className="text-gray-600">
                Many Fort Worth companies offer same-day delivery if ordered by 10am. This rapid service supports the fast-paced construction and renovation market.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Fort Worth project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}