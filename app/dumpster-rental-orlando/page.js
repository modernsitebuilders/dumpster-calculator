// app/dumpster-rental-orlando/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Orlando FL | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Orlando. Compare local providers serving Central Florida and the theme park corridor.',
  keywords: 'dumpster rental orlando, orlando dumpster companies, roll off dumpster orlando, florida dumpster rental'
};

export default function OrlandoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Orlando, Florida
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Orlando and Central Florida
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Orlando project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Orlando Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Orlando Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Rental Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (407) 295-0400</p>
                  <p><strong>Website:</strong> grddumpster.com</p>
                  <p><strong>Experience:</strong> 20 years serving Orlando area</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Orlando area</p>
                  <p><strong>Specialties:</strong> Family-owned, 15-day rental period, flip-tops for businesses</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Today Orlando</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (407) 801-3867</p>
                  <p><strong>Website:</strong> dumpstertoday.com</p>
                  <p><strong>Features:</strong> Same-day delivery, walk-in style dumpsters</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Orlando metro area</p>
                  <p><strong>Specialties:</strong> Text updates, online scheduling, guaranteed on-time delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Medic</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpstermedic.com</p>
                  <p><strong>Features:</strong> Custom dumpster rentals, flat rate pricing</p>
                  <p><strong>Container Sizes:</strong> Multiple sizes available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Orlando and surrounding counties</p>
                  <p><strong>Specialties:</strong> Construction projects, text/email updates, reliable scheduling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">AFAB Orlando Dumpster Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (321) 377-7714</p>
                  <p><strong>Website:</strong> afaborlando.com</p>
                  <p><strong>Experience:</strong> Serving since 2006</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Orlando and Central Florida</p>
                  <p><strong>Specialties:</strong> Walk-in doors, 6-18 yard containers, residential & commercial</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Orlando</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> orlandodumpsterrental.net</p>
                  <p><strong>Features:</strong> Residential friendly, unique roll-off system</p>
                  <p><strong>Container Sizes:</strong> Multiple size options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Orlando, Casselberry, DeLand, Daytona Beach, Leesburg</p>
                  <p><strong>Specialties:</strong> Tight space access, residential focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Orlando Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (407) 972-9700</p>
                  <p><strong>Website:</strong> dumpsterrentalorlandofla.com</p>
                  <p><strong>Features:</strong> 24/7 availability, mobile dump trailers</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> 60-mile radius of Orlando and Tampa</p>
                  <p><strong>Specialties:</strong> Emergency services, property-friendly trailers, same-day service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Liberty Hauling Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (407) 977-4187</p>
                  <p><strong>Website:</strong> libertyhaulingservices.com</p>
                  <p><strong>Experience:</strong> 30+ years in Central Florida</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Orlando and Central Florida</p>
                  <p><strong>Specialties:</strong> Family-owned, insurance claims, estate cleanouts, 10-30 yard containers</p>
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

        {/* Orlando Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Orlando Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Orlando</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>College Park</li>
                <li>Lake Eola Heights</li>
                <li>Thornton Park</li>
                <li>Parramore</li>
                <li>Milk District</li>
                <li>Ivanhoe Village</li>
                <li>South Eola</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Orlando</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Altamonte Springs</li>
                <li>Winter Park</li>
                <li>Maitland</li>
                <li>Longwood</li>
                <li>Casselberry</li>
                <li>Apopka</li>
                <li>Mount Dora</li>
                <li>Sanford</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Orlando</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Kissimmee</li>
                <li>St. Cloud</li>
                <li>Celebration</li>
                <li>Poinciana</li>
                <li>Hunters Creek</li>
                <li>Meadow Woods</li>
                <li>Belle Isle</li>
                <li>Edgewood</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East/West Orlando</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Winter Garden</li>
                <li>Ocoee</li>
                <li>Windermere</li>
                <li>Dr. Phillips</li>
                <li>Bay Hill</li>
                <li>University</li>
                <li>Azalea Park</li>
                <li>Union Park</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Lake County, Seminole County, Osceola County, 
              Volusia County, and all of Central Florida
            </p>
          </div>
        </section>

        {/* Orlando Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Orlando Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tourism & Construction Boom</h3>
              <p className="text-gray-600">
                Orlando's massive tourism industry and population growth create constant construction activity. Book dumpsters early, especially during peak tourist seasons.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Theme Park Corridor Traffic</h3>
              <p className="text-gray-600">
                I-4 and major tourism corridors can be congested. Plan delivery times to avoid rush hours and theme park traffic.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Hurricane Season Preparation</h3>
              <p className="text-gray-600">
                Central Florida faces hurricane threats June-November. Many companies offer emergency cleanup services after storms.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Vacation Rental Cleanouts</h3>
              <p className="text-gray-600">
                High concentration of Airbnb and vacation rentals creates demand for quick turnover cleanouts. Many companies specialize in this market.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Sandy Soil Considerations</h3>
              <p className="text-gray-600">
                Central Florida's sandy soil makes driveway protection important. Many companies offer protective boards to prevent damage.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Growth & Development</h3>
              <p className="text-gray-600">
                Rapid suburban expansion means many new neighborhoods. Providers are experienced with new construction and residential development projects.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Orlando project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}