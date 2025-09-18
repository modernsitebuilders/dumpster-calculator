// app/dumpster-rental-phoenix/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Phoenix AZ | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Phoenix. Compare local providers serving Maricopa County and surrounding areas.',
  keywords: 'dumpster rental phoenix, phoenix dumpster companies, roll off dumpster phoenix, scottsdale dumpster rental'
};

export default function PhoenixPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Phoenix, Arizona
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Phoenix, Scottsdale, and the Valley
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Phoenix project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Phoenix Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Phoenix Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Az Junk Removal & Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 602-799-4181</p>
                  <p><strong>Website:</strong> azjunkremoval.com/dumpster-rental/</p>
                  <p><strong>Location:</strong> Waddell (serves Phoenix metro)</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Phoenix, Peoria, Avondale, Buckeye, Surprise, Glendale</p>
                  <p><strong>Specialties:</strong> Same-day service, property management, residential focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">VaVia Dumpster Rental Phoenix</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> govavia.com/phoenix-az-dumpster-rental/</p>
                  <p><strong>Features:</strong> Transparent pricing, no hidden fees</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Phoenix area</p>
                  <p><strong>Specialties:</strong> Locally owned, personalized service, flexible rental periods</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Phoenix-Scottsdale</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> bintheredumpthat.com/phoenix-scottsdale-dumpster-rentals/</p>
                  <p><strong>Owner:</strong> Les Englund (38+ years in Phoenix, ASU graduate)</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Phoenix and Scottsdale</p>
                  <p><strong>Specialties:</strong> "Residential Friendly" service, driveway-friendly bins</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">redbox+ Dumpsters of Phoenix East Valley</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 480-454-5844</p>
                  <p><strong>Website:</strong> redboxplus.com/phoenix-east-valley/</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Phoenix, Scottsdale, Cave Creek, Fountain Hills, Paradise Valley</p>
                  <p><strong>Unique:</strong> 2-in-1 dumpster with porta potty option</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quarry Rentals Phoenix</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> quarryrents.com/dumpsters/phoenix</p>
                  <p><strong>Features:</strong> Same-day delivery, 7-day standard rental</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Phoenix area</p>
                  <p><strong>Services:</strong> Permit handling, free consultation, inert material dumpsters</p>
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

        {/* Phoenix Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Phoenix Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Phoenix</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown Phoenix</li>
                <li>Midtown</li>
                <li>Arcadia</li>
                <li>Biltmore</li>
                <li>Central Corridor</li>
                <li>Camelback East</li>
                <li>Paradise Valley</li>
                <li>Ahwatukee</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Valley</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Scottsdale</li>
                <li>Tempe</li>
                <li>Mesa</li>
                <li>Chandler</li>
                <li>Gilbert</li>
                <li>Fountain Hills</li>
                <li>Cave Creek</li>
                <li>Carefree</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Valley</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Glendale</li>
                <li>Peoria</li>
                <li>Surprise</li>
                <li>Avondale</li>
                <li>Goodyear</li>
                <li>Buckeye</li>
                <li>Litchfield Park</li>
                <li>Tolleson</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Phoenix</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Deer Valley</li>
                <li>Desert Ridge</li>
                <li>North Mountain</li>
                <li>Moon Valley</li>
                <li>Anthem</li>
                <li>New River</li>
                <li>Sun City</li>
                <li>Sun City West</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Apache Junction, Queen Creek, Maricopa, Wickenburg, 
              and all of Maricopa County
            </p>
          </div>
        </section>

        {/* Phoenix Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Phoenix Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Extreme Heat</h3>
              <p className="text-gray-600">
                Phoenix summers can exceed 115°F. Plan loading during cooler morning/evening hours. Stay hydrated.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Desert Landscaping</h3>
              <p className="text-gray-600">
                Many Phoenix properties have gravel yards and desert plants. Protect surfaces during dumpster placement.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Monsoon Season</h3>
              <p className="text-gray-600">
                July-September monsoons bring dust storms and flash floods. Consider covered loading during storms.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">HOA Restrictions</h3>
              <p className="text-gray-600">
                Many Phoenix neighborhoods have strict HOA rules. Check requirements before dumpster delivery.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">City Permits</h3>
              <p className="text-gray-600">
                Phoenix requires permits for street placement. Many companies can handle the permitting process.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Phoenix project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}