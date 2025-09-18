// app/dumpster-rental-chicago/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Chicago IL | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Chicago. Compare local providers serving the city and suburbs. Free size calculator included.',
  keywords: 'dumpster rental chicago, chicago dumpster companies, roll off dumpster chicago, chicago waste removal'
};

export default function ChicagoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Chicago, Illinois
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Chicago and the surrounding suburbs
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Chicago project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Chicago Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Chicago Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tri-State Disposal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 708-388-9910 / 708-360-7005</p>
                  <p><strong>Website:</strong> tri-statedisposal.com</p>
                  <p><strong>Experience:</strong> Family owned since 1995</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Chicagoland Area & Northwest Indiana</p>
                  <p><strong>Services:</strong> Roll-off dumpsters, residential waste collection, recycling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brackenbox</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 708-339-4100</p>
                  <p><strong>Website:</strong> brackenbox.com</p>
                  <p><strong>Experience:</strong> In business since 2003</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Chicago & Northwest Indiana (based in Markham, IL)</p>
                  <p><strong>Specialties:</strong> Construction, demolition, residential cleanouts</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Chicagoland</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> bintheredumpthat.com/chicagoland-dumpster-rentals/</p>
                  <p><strong>Specialties:</strong> "Residential Friendly" service</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Chicagoland area</p>
                  <p><strong>Services:</strong> Construction, residential, yard waste, next-day delivery available</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Micro Dumpster</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> microdumpster.com</p>
                  <p><strong>Specialties:</strong> Mini dumpsters (3.5-yard & 7-yard)</p>
                  <p><strong>Unique:</strong> Garage delivery, wheelbarrow ramp</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Chicago and northern suburbs</p>
                  <p><strong>Coverage:</strong> Arlington Heights, Glenview, Northbrook, Skokie</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Big Box Disposal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> bigboxdisposal.com</p>
                  <p><strong>Experience:</strong> Family owned 10+ years</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Southwest Chicago suburbs</p>
                  <p><strong>Coverage:</strong> Chicago Ridge, Orland Park, Tinley Park, Oak Lawn</p>
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

        {/* Chicago Neighborhoods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Chicago Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">City of Chicago</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Lincoln Park</li>
                <li>Wicker Park</li>
                <li>River North</li>
                <li>Logan Square</li>
                <li>Bucktown</li>
                <li>The Loop</li>
                <li>Gold Coast</li>
                <li>Lakeview</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Suburbs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Evanston</li>
                <li>Skokie</li>
                <li>Glenview</li>
                <li>Northbrook</li>
                <li>Arlington Heights</li>
                <li>Des Plaines</li>
                <li>Park Ridge</li>
                <li>Highland Park</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Suburbs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Oak Park</li>
                <li>Naperville</li>
                <li>Downers Grove</li>
                <li>Elmhurst</li>
                <li>Schaumburg</li>
                <li>Wheaton</li>
                <li>Glen Ellyn</li>
                <li>Lombard</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Suburbs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Orland Park</li>
                <li>Tinley Park</li>
                <li>Oak Lawn</li>
                <li>Chicago Ridge</li>
                <li>Palos Hills</li>
                <li>Hickory Hills</li>
                <li>Markham</li>
                <li>Harvey</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Northwest Indiana, Milwaukee area, and surrounding communities throughout the greater Chicago metropolitan area
            </p>
          </div>
        </section>

        {/* Chicago Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Chicago Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Winter Weather</h3>
              <p className="text-gray-600">
                Chicago winters can affect delivery schedules. Plan ahead during snow season and consider covered loading.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Alley Access</h3>
              <p className="text-gray-600">
                Many Chicago properties have alley access. This can be ideal for dumpster placement without blocking streets.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">City Permits</h3>
              <p className="text-gray-600">
                Check with the City of Chicago for permit requirements if placing dumpsters on public property.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Neighborhood Variations</h3>
              <p className="text-gray-600">
                Different Chicago neighborhoods may have varying access restrictions and HOA requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Chicago project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}