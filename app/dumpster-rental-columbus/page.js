// app/dumpster-rental-columbus/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Columbus OH | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Columbus. Compare local providers serving Central Ohio and Franklin County.',
  keywords: 'dumpster rental columbus, columbus dumpster companies, roll off dumpster columbus, ohio dumpster rental'
};

export default function ColumbusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Columbus, Ohio
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Central Ohio and Franklin County
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Columbus project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Columbus Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Columbus Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Frog Hauling</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> froghauling.com</p>
                  <p><strong>Experience:</strong> Nearly 20 years in Columbus</p>
                  <p><strong>Features:</strong> Green dumpsters, same-day service, online ordering</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> 30-mile radius of downtown Columbus, Franklin County</p>
                  <p><strong>Specialties:</strong> Family owned, $5/day rental fee, protective pallets, recycling focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rumpke Dumpster Rental</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> rumpke.com</p>
                  <p><strong>Container Types:</strong> Roll-off dumpsters, various sizes</p>
                  <p><strong>Features:</strong> Short-term and long-term rentals</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Columbus and Franklin County</p>
                  <p><strong>Specialties:</strong> Large variety of dumpsters, commercial & residential, proper scheduling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Columbus</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (614) 683-2747</p>
                  <p><strong>Website:</strong> bintheredumpthat.com</p>
                  <p><strong>Owners:</strong> Jeff & Tyler Nuckles</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Columbus Ohio area</p>
                  <p><strong>Specialties:</strong> Family owned, same-day delivery, driveway protection, clean green bins</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Address:</strong> 1400 Harmon Ave, Columbus, OH 43223</p>
                  <p><strong>Experience:</strong> 20+ years in Columbus area</p>
                  <p><strong>Features:</strong> Licensed, bonded, and insured</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Dublin, Canal Winchester, Franklin County</p>
                  <p><strong>Specialties:</strong> Same-day delivery, no hidden fees, fast pickup</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Today Columbus</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpstertoday.com</p>
                  <p><strong>Features:</strong> Walk-in style dumpsters, same/next day delivery</p>
                  <p><strong>Weight:</strong> First 2,000 lbs free, additional just $0.05/lb</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Columbus and surrounding areas</p>
                  <p><strong>Specialties:</strong> 100% on-time delivery, easy scheduling, walk-in doors</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Barker's Bins Dumpster Service</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Container Sizes:</strong> 10, 15, 20, 25-yard containers</p>
                  <p><strong>Dimensions:</strong> 14' and 16' long options</p>
                  <p><strong>Features:</strong> Same-day service usually available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Central Ohio area</p>
                  <p><strong>Specialties:</strong> Family-owned, transparent pricing, zero hidden fees, residential driveways</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">BDR Blessed Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> bdrblesseddumpsterrentals.us</p>
                  <p><strong>Container Size:</strong> 13-yard dumpsters</p>
                  <p><strong>Features:</strong> Rubber wheels, 1-2 day rentals</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Columbus and surrounding areas</p>
                  <p><strong>Specialties:</strong> Driveway protection, tight spaces, curbside pickup starting at $125</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hapybox Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (614) 414-6962</p>
                  <p><strong>Features:</strong> Online booking available</p>
                  <p><strong>Focus:</strong> Practical and financial needs</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Columbus area</p>
                  <p><strong>Specialties:</strong> Exceptional service, faster delivery and pickup, competitive pricing</p>
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

        {/* Columbus Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Columbus Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Columbus</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Short North</li>
                <li>German Village</li>
                <li>Victorian Village</li>
                <li>Brewery District</li>
                <li>Arena District</li>
                <li>Italian Village</li>
                <li>Harrison West</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Columbus</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Worthington</li>
                <li>Powell</li>
                <li>Delaware</li>
                <li>Westerville</li>
                <li>Dublin</li>
                <li>Upper Arlington</li>
                <li>Clintonville</li>
                <li>Grandview Heights</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Columbus</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Grove City</li>
                <li>Pickerington</li>
                <li>Reynoldsburg</li>
                <li>Canal Winchester</li>
                <li>Groveport</li>
                <li>Obetz</li>
                <li>Lockbourne</li>
                <li>Commercial Point</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East/West Columbus</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Gahanna</li>
                <li>New Albany</li>
                <li>Bexley</li>
                <li>Whitehall</li>
                <li>Hilliard</li>
                <li>Galloway</li>
                <li>Lincoln Village</li>
                <li>Valleyview</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Franklin County, Delaware County, Fairfield County, 
              Licking County, and all of Central Ohio
            </p>
          </div>
        </section>

        {/* Columbus Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Columbus Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tech Hub Growth</h3>
              <p className="text-gray-600">
                Columbus is emerging as a major tech center with companies like Google, Amazon, and Intel. High demand for office construction and data center projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Ohio State University Impact</h3>
              <p className="text-gray-600">
                Large student population creates seasonal demand for move-out cleanouts and rental property turnovers. Plan around academic calendar for best availability.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Fortune 500 Headquarters</h3>
              <p className="text-gray-600">
                Major corporations like Nationwide, American Electric Power, and Cardinal Health drive commercial construction and office renovations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Neighborhoods</h3>
              <p className="text-gray-600">
                German Village and other historic areas have preservation requirements. Discuss access routes and placement restrictions with providers.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Government Center Activity</h3>
              <p className="text-gray-600">
                State capital status creates steady government facility construction and renovation demand. Many providers experienced with public sector projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Suburban Expansion</h3>
              <p className="text-gray-600">
                Rapid growth in Dublin, New Albany, and surrounding suburbs creates constant residential construction. Book early during peak building seasons.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Columbus project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}