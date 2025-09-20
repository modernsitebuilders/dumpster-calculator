// app/dumpster-rental-memphis/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Memphis TN | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Memphis. Compare local providers serving the Bluff City and Shelby County with competitive pricing.',
  keywords: 'dumpster rental memphis, memphis dumpster companies, roll off dumpster memphis, tennessee dumpster rental'
};

export default function MemphisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Memphis, Tennessee
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the Bluff City and Shelby County area
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Memphis project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Memphis Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Memphis Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jakes Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> jakesdumpsters.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40 yards</p>
                  <p><strong>Features:</strong> Local family-owned, expedited service available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Memphis and Fayette County</p>
                  <p><strong>Specialties:</strong> 7-day rental periods, concrete/asphalt dumpsters</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Memphis Dumpster Rental Bros</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (901) 613-0117</p>
                  <p><strong>Website:</strong> memphisdumpsterrentals.org</p>
                  <p><strong>Features:</strong> Licensed and insured, recycling services</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Memphis, Arlington, Bartlett, Collierville, Germantown</p>
                  <p><strong>Coverage:</strong> Shelby County and surrounding areas</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Dumpster Llamas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (901) 504-6566</p>
                  <p><strong>Website:</strong> thedumpsterllamas.com</p>
                  <p><strong>Features:</strong> Eco-friendly practices, prompt delivery/pickup</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Memphis area</p>
                  <p><strong>Specialties:</strong> Residential, construction, demolition projects</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Removal USA</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (901) 621-6699</p>
                  <p><strong>Email:</strong> sales@wasteremovalusa.com</p>
                  <p><strong>Features:</strong> Same-day/next-day delivery, flat-fee pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Memphis and surrounding areas</p>
                  <p><strong>Pricing:</strong> $588-$794 typical range</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aardvark Memphis</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> aardvarkmemphis.com</p>
                  <p><strong>Container Sizes:</strong> 15 cubic yard residential focus</p>
                  <p><strong>Features:</strong> Smaller, lighter trucks for driveways</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Memphis, Shelby County, DeSoto County MS</p>
                  <p><strong>Specialties:</strong> Residential-friendly, clean sanitized dumpsters</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mid-South Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Features:</strong> Born and raised in Memphis, local knowledge</p>
                  <p><strong>Services:</strong> Home renovation, construction, spring cleaning</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Memphis and surrounding areas</p>
                  <p><strong>Specialties:</strong> Competitive pricing, no hidden fees</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Connections of Memphis</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wasteconnections.com/memphis</p>
                  <p><strong>Services:</strong> Roll-off dumpsters, commercial waste</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Memphis Metro area</p>
                  <p><strong>Features:</strong> Extensive waste management services</p>
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

        {/* Memphis Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Memphis Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Downtown & Midtown</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown Memphis</li>
                <li>Beale Street</li>
                <li>Midtown</li>
                <li>Cooper-Young</li>
                <li>Overton Park</li>
                <li>Harbor Town</li>
                <li>Medical District</li>
                <li>South Main</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Memphis</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>East Memphis</li>
                <li>Germantown</li>
                <li>Collierville</li>
                <li>Cordova</li>
                <li>Bartlett</li>
                <li>Lakeland</li>
                <li>Arlington</li>
                <li>Eads</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Memphis</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>South Memphis</li>
                <li>Whitehaven</li>
                <li>Hickory Hill</li>
                <li>Orange Mound</li>
                <li>Binghampton</li>
                <li>Airport Area</li>
                <li>Horn Lake, MS</li>
                <li>Southaven, MS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Memphis</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>North Memphis</li>
                <li>Frayser</li>
                <li>Raleigh</li>
                <li>Berclair</li>
                <li>Millington</li>
                <li>Tipton County</li>
                <li>Covington</li>
                <li>Brighton</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> West Memphis AR, Olive Branch MS, Marion AR, 
              and all of Shelby County and DeSoto County
            </p>
          </div>
        </section>

        {/* Memphis Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Memphis Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Logistics Hub Growth</h3>
              <p className="text-gray-600">
                Memphis is a major logistics center with FedEx headquarters and Mississippi River port. High construction and warehouse demand drives consistent dumpster needs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Multi-State Service Area</h3>
              <p className="text-gray-600">
                Many companies serve Memphis metro including parts of Mississippi and Arkansas. Cross-state regulations may apply for certain materials.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Neighborhood Considerations</h3>
              <p className="text-gray-600">
                Areas like Cooper-Young and Midtown have older homes with narrow streets. Smaller dumpsters and careful placement are often required.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Weather Considerations</h3>
              <p className="text-gray-600">
                Memphis experiences hot, humid summers and occasional severe weather. Plan for potential delivery delays during storm seasons.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Recycling Opportunities</h3>
              <p className="text-gray-600">
                Many Memphis companies offer recycling services. Ask about separating materials like concrete, metal, and wood to reduce disposal costs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Competitive Local Market</h3>
              <p className="text-gray-600">
                Memphis has numerous local family-owned dumpster companies. Compare prices and services as competition keeps rates reasonable.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Memphis project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}