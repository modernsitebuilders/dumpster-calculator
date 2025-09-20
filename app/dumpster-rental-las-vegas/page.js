// app/dumpster-rental-las-vegas/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Las Vegas NV | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Las Vegas. Compare local providers serving the Las Vegas Valley and surrounding areas.',
  keywords: 'dumpster rental las vegas, las vegas dumpster companies, roll off dumpster las vegas, nevada dumpster rental'
};

export default function LasVegasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Las Vegas, Nevada
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the Las Vegas Valley and surrounding areas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Las Vegas project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Las Vegas Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Las Vegas Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eclipse Waste Management</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> eclipsewaste.com</p>
                  <p><strong>Features:</strong> Same-day service, 4-hour delivery guarantee</p>
                  <p><strong>Container Sizes:</strong> 6-40 yard roll-off dumpsters</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Las Vegas and surrounding areas</p>
                  <p><strong>Specialties:</strong> Locally owned, 10+1 free reward program, full liability insurance</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Junk Control Las Vegas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (702) 202-6206</p>
                  <p><strong>Website:</strong> lasvegasjunkremoval.org</p>
                  <p><strong>Experience:</strong> 10+ years, 66,000+ jobs completed</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Las Vegas area, Henderson</p>
                  <p><strong>Specialties:</strong> 10-40 yard dumpsters, same-day service, 15% cheaper than competitors</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Western Elite</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> westernelite.com</p>
                  <p><strong>Features:</strong> Guaranteed graffiti-free dumpsters</p>
                  <p><strong>Focus:</strong> Custom waste solutions</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Las Vegas, Henderson, Summerlin</p>
                  <p><strong>Specialties:</strong> Commercial & residential, sustainable practices, unmatched customer service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trash Daddy Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (725) 218-1088</p>
                  <p><strong>Website:</strong> trashdaddydumpsters.com</p>
                  <p><strong>Pricing:</strong> Mid-$400s to mid-$500s range</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Las Vegas metro area, extensive zip code coverage</p>
                  <p><strong>Specialties:</strong> Flat-rate pricing, 10-day rental period, online booking</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Dudez Las Vegas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpsterdudez.com/las-vegas</p>
                  <p><strong>Owner:</strong> Andrew Remboldt (acquired October 2024)</p>
                  <p><strong>Container Sizes:</strong> 10-25 yard dumpsters</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Greater Las Vegas area</p>
                  <p><strong>Specialties:</strong> Family-owned, transparent pricing, flexible scheduling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luna's Inc</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> lunasinc.com</p>
                  <p><strong>Features:</strong> Online dumpster rental</p>
                  <p><strong>Focus:</strong> Construction clean up and recycling</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Las Vegas area</p>
                  <p><strong>Specialties:</strong> Recycling services, construction debris, environmental focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">JunkMan Las Vegas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Focus:</strong> Mini bin rental specialist</p>
                  <p><strong>Features:</strong> HOA approved, tire-based containers</p>
                  <p><strong>Experience:</strong> 15 years serving locally</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Las Vegas and surrounding areas</p>
                  <p><strong>Specialties:</strong> Tight spaces, smaller dumpsters, property protection</p>
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

        {/* Las Vegas Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Las Vegas Valley Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Las Vegas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>The Strip</li>
                <li>Downtown</li>
                <li>Arts District</li>
                <li>Paradise</li>
                <li>Winchester</li>
                <li>Spring Valley</li>
                <li>Enterprise</li>
                <li>Sunrise Manor</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Las Vegas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Summerlin</li>
                <li>Canyon Gate</li>
                <li>Red Rock</li>
                <li>Mountain's Edge</li>
                <li>Southern Highlands</li>
                <li>The Lakes</li>
                <li>Centennial Hills</li>
                <li>Providence</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Las Vegas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Henderson</li>
                <li>Green Valley</li>
                <li>Whitney</li>
                <li>Boulder City</li>
                <li>Seven Hills</li>
                <li>Anthem</li>
                <li>MacDonald Ranch</li>
                <li>Lake Las Vegas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Las Vegas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>North Las Vegas</li>
                <li>Aliante</li>
                <li>Tule Springs</li>
                <li>Nellis AFB</li>
                <li>Sunrise</li>
                <li>Nellis</li>
                <li>Craig Ranch</li>
                <li>Eldorado</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Clark County, Mesquite, Laughlin, 
              Pahrump, and surrounding Nevada communities
            </p>
          </div>
        </section>

        {/* Las Vegas Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Las Vegas Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Entertainment & Construction Boom</h3>
              <p className="text-gray-600">
                Constant casino, hotel, and residential construction creates high demand. Book early, especially during major convention seasons and peak building periods.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Extreme Desert Heat</h3>
              <p className="text-gray-600">
                Summer temperatures exceed 110°F. Schedule deliveries early morning and work during cooler hours. Heat affects decomposition and creates odors quickly.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tourist Corridor Traffic</h3>
              <p className="text-gray-600">
                Strip and downtown areas have heavy traffic and restricted access. Plan delivery times to avoid peak tourist hours and major event traffic.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Wind & Dust Concerns</h3>
              <p className="text-gray-600">
                Desert winds can blow debris from dumpsters. Many companies provide covers or recommend securing lightweight materials during windy periods.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Special Event Considerations</h3>
              <p className="text-gray-600">
                Major conventions (CES, NAB) and events can limit availability and create access challenges. Plan around major event calendars for better service.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">HOA & Resort Communities</h3>
              <p className="text-gray-600">
                Many upscale communities have strict aesthetic requirements. Some companies specialize in HOA-approved, visually appealing containers.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Las Vegas project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}