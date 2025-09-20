// app/dumpster-rental-jacksonville/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Jacksonville FL | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Jacksonville. Compare local providers serving the River City and Northeast Florida.',
  keywords: 'dumpster rental jacksonville, jacksonville dumpster companies, roll off dumpster jacksonville, florida dumpster rental'
};

export default function JacksonvillePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Jacksonville, Florida
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the River City and Northeast Florida
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Jacksonville project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Jacksonville Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Jacksonville Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Jacksonville</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (904) 500-2838</p>
                  <p><strong>Website:</strong> bintheredumpthat.com</p>
                  <p><strong>Container Sizes:</strong> 6, 10, 15, 20-yard bins</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Jacksonville and surrounding areas</p>
                  <p><strong>Specialties:</strong> Residential friendly, protective boards, next-day delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Dudez Jacksonville</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpsterdudez.com/jacksonville</p>
                  <p><strong>Container Sizes:</strong> 10-25 yard dumpsters</p>
                  <p><strong>Features:</strong> Fast delivery, same-day upgrades available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Jacksonville and surrounding areas</p>
                  <p><strong>Specialties:</strong> Locally owned, EZ ordering, professional drivers in orange shirts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">VaVia Dumpster Rental Jacksonville</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> govavia.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15-yard containers</p>
                  <p><strong>Features:</strong> Same-day delivery, transparent pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Jacksonville and surrounding areas</p>
                  <p><strong>Specialties:</strong> Locally owned franchise, personalized service, flexible scheduling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Griffin Waste Services Jacksonville</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> griffinwaste.com</p>
                  <p><strong>Owners:</strong> Danielle & David (35+ years combined experience)</p>
                  <p><strong>Container Size:</strong> 12'L x 8'W x 4'H containers</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Jacksonville, Duval, St. Johns Counties</p>
                  <p><strong>Specialties:</strong> Same-day service, extra wide gate, transparent pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">redbox+ Dumpsters of Jacksonville</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (904) 567-7709</p>
                  <p><strong>Website:</strong> redboxplus.com/jacksonville</p>
                  <p><strong>Features:</strong> Commercial & residential roll-off rentals</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Jacksonville, Atlantic Beach, Neptune Beach, Ponte Vedra, St. Augustine</p>
                  <p><strong>Specialties:</strong> Locally owned, portable toilet services, reliable pickup</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">CW Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> rentcwdumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 12, 15, 18-yard roll-off bins</p>
                  <p><strong>Availability:</strong> 7 days a week service</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Jacksonville and surrounding areas</p>
                  <p><strong>Specialties:</strong> Family-owned, weekend availability, trusted by contractors</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gopher Waste</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> gopherwaste.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20, 30-yard dumpsters</p>
                  <p><strong>Features:</strong> Flexible rental periods (2-8 days)</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> 62 communities in Jacksonville area</p>
                  <p><strong>Specialties:</strong> Discount pricing for shorter rentals, impeccable service reputation</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discount Dumpster Jacksonville</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> discountdumpsterco.com</p>
                  <p><strong>Features:</strong> 14-day rental period, flat-rate pricing</p>
                  <p><strong>Focus:</strong> Family-owned, locally sourced</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Jacksonville and surrounding areas</p>
                  <p><strong>Specialties:</strong> Elite service, upfront discounts, accepts major credit cards</p>
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

        {/* Jacksonville Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Jacksonville Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Jacksonville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Riverside</li>
                <li>Avondale</li>
                <li>Springfield</li>
                <li>Brooklyn</li>
                <li>LaVilla</li>
                <li>San Marco</li>
                <li>Southbank</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Jacksonville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Fernandina Beach</li>
                <li>Yulee</li>
                <li>Callahan</li>
                <li>Hilliard</li>
                <li>Northside</li>
                <li>Oceanway</li>
                <li>New Berlin</li>
                <li>Bryceville</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Jacksonville</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Southside</li>
                <li>Mandarin</li>
                <li>Orange Park</li>
                <li>Fleming Island</li>
                <li>Green Cove Springs</li>
                <li>Middleburg</li>
                <li>Fruit Cove</li>
                <li>Julington Creek</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Beaches & East</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Jacksonville Beach</li>
                <li>Neptune Beach</li>
                <li>Atlantic Beach</li>
                <li>Ponte Vedra Beach</li>
                <li>Mayport</li>
                <li>Sawgrass</li>
                <li>Nocatee</li>
                <li>St. Augustine</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Duval County, Nassau County, Clay County, 
              St. Johns County, and all of Northeast Florida
            </p>
          </div>
        </section>

        {/* Jacksonville Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Jacksonville Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Largest City by Area in US</h3>
              <p className="text-gray-600">
                Jacksonville's 840 square miles create unique logistics challenges. Travel times between areas can be significant - plan delivery timing accordingly.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Major Port & Industrial Growth</h3>
              <p className="text-gray-600">
                JAXPORT expansion and industrial development create high demand for construction dumpsters. Many providers specialize in heavy materials and commercial projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Military Presence Impact</h3>
              <p className="text-gray-600">
                Naval Air Station Jacksonville and other military installations create steady demand for base housing and off-base residential renovations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Hurricane Season Preparation</h3>
              <p className="text-gray-600">
                Coastal location requires hurricane preparation June-November. Many companies offer emergency debris cleanup and storm damage restoration services.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Beach Communities Access</h3>
              <p className="text-gray-600">
                Beach areas have narrow streets and limited parking. Discuss access routes and placement options for coastal properties with providers.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Rapid Suburban Expansion</h3>
              <p className="text-gray-600">
                Fast-growing suburbs create constant new construction and renovation demand. Book early during peak building seasons for best availability.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Jacksonville project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}