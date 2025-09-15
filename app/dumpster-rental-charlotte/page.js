// app/dumpster-rental-phoenix/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Phoenix AZ | Desert Delivery | Best Arizona Prices',
  description: 'Dumpster rental in Phoenix starting at $275. Serving Scottsdale, Tempe, Mesa, and all of Valley of the Sun. Heat-resistant service.',
  keywords: 'dumpster rental phoenix, dumpster rental arizona, roll off dumpster phoenix, scottsdale dumpster rental'
};

export default function PhoenixPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Phoenix, AZ
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Desert-tough dumpster service for the Valley of the Sun
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Heat Resistant</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Early Morning Delivery</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✓ Valley-Wide Service</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Phoenix Dumpster Quote</h2>
          <p className="mb-6">Beat the heat with early morning delivery</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Phoenix Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$275 - $375</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small projects</li>
                <li>• Pool area cleanouts</li>
                <li>• Garage renovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$375 - $475</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Tile removal</li>
                <li>• Bathroom renovations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$475 - $600</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• New construction</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$575 - $725</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Large construction</li>
                <li>• Multi-building sites</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Prices include 7-day rental period. Arizona has some of the most competitive rates in the Southwest.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Phoenix Valley Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Phoenix Proper</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown Phoenix</li>
                <li>Central Phoenix</li>
                <li>North Phoenix</li>
                <li>Ahwatukee</li>
                <li>Arcadia</li>
                <li>Biltmore</li>
                <li>Camelback</li>
                <li>Desert Ridge</li>
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
                <li>Apache Junction</li>
                <li>Queen Creek</li>
                <li>Fountain Hills</li>
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
              <h3 className="font-semibold mb-2">North Valley</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Paradise Valley</li>
                <li>Cave Creek</li>
                <li>Carefree</li>
                <li>Anthem</li>
                <li>New River</li>
                <li>Desert Hills</li>
                <li>North Scottsdale</li>
                <li>Deer Valley</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Extended Service:</strong> We also serve Tucson, Flagstaff, Sedona, 
              and other Arizona communities with advance scheduling.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Phoenix Desert Climate Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold mb-1">Extreme Heat Management</h3>
              <p className="text-gray-600">
                Summer temperatures exceed 115°F. We schedule deliveries for dawn hours (5-7 AM) and provide heat-resistant containers and covers.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold mb-1">Monsoon Season Preparation</h3>
              <p className="text-gray-600">
                July-September brings sudden storms and flash floods. Our dumpsters include secure tie-downs and drainage features for safety.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold mb-1">Desert Landscaping Projects</h3>
              <p className="text-gray-600">
                Removing desert plants, rocks, and hardscaping is common. We specialize in heavy desert debris and coordinate with xeriscape contractors.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold mb-1">HOA Requirements</h3>
              <p className="text-gray-600">
                Many Valley communities have strict HOA rules about dumpster placement and screening. We provide guidance on compliance and timing.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold mb-1">Pool Renovation Specialists</h3>
              <p className="text-gray-600">
                Pool remodels and removals are common in Phoenix. We handle pool coping, decking, and equipment disposal with proper drainage considerations.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Phoenix Dumpster Rental FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What time do you deliver in Phoenix summers?</summary>
              <p className="mt-2 text-gray-600">
                Summer deliveries start at 5 AM to beat the heat. We complete most deliveries by 8 AM when temperatures are still manageable for our crew.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Can dumpsters handle desert heat?</summary>
              <p className="mt-2 text-gray-600">
                Yes! Our dumpsters are built for extreme conditions. We use reinforced materials and heat-resistant coatings to prevent warping or damage.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What about monsoon season?</summary>
              <p className="mt-2 text-gray-600">
                We monitor weather closely during monsoon season (July-September) and may reschedule deliveries during flash flood warnings for safety.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Do you serve Scottsdale and Paradise Valley?</summary>
              <p className="mt-2 text-gray-600">
                Absolutely! We're familiar with upscale community requirements and provide discrete, professional service that meets HOA standards.
              </p>
            </details>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in Phoenix?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed Arizona providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Phoenix Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}