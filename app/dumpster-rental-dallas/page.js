// app/dumpster-rental-dallas/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Dallas TX | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Dallas. Compare local providers serving the DFW Metroplex and surrounding areas.',
  keywords: 'dumpster rental dallas, DFW dumpster companies, roll off dumpster dallas, texas dumpster rental'
};

export default function DallasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Dallas, Texas
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the DFW Metroplex and surrounding areas
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Dallas project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Dallas Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dallas Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Frontier Waste Solutions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> frontierwaste.com/dallas-dumpster-rental/</p>
                  <p><strong>Starting Price:</strong> $185/haul</p>
                  <p><strong>Container Sizes:</strong> 20, 30, 40-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Dallas, Fort Worth, Garland, Irving, Carrollton, Addison</p>
                  <p><strong>Features:</strong> Free site surveys, transparent pricing, no hidden fees</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Dallas</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 972-345-2722</p>
                  <p><strong>Website:</strong> bintheredumpthat.com/dallas-dumpster-rentals/</p>
                  <p><strong>Features:</strong> 24-hour delivery, driveway protection</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Dallas and surrounding neighborhoods</p>
                  <p><strong>Coverage:</strong> Lakewood, Oak Cliff, Preston Hollow, Highland Park, Deep Ellum</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Dudez</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpsterdudez.com/dallas</p>
                  <p><strong>Owner:</strong> Jared (owner-operated)</p>
                  <p><strong>Container Sizes:</strong> 10 to 25-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Dallas area</p>
                  <p><strong>Features:</strong> EZ booking process, project team approach</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">VaVia Dallas/Fort Worth</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 817-482-3851</p>
                  <p><strong>Website:</strong> govavia.com/dallas-tx-dumpster-rental/</p>
                  <p><strong>Address:</strong> Kennedale, TX</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Dallas, Fort Worth, Arlington, DFW Metroplex</p>
                  <p><strong>Features:</strong> Family owned, no hidden fees, flexible scheduling</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red-E-Bins DFW</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dfw.redebins.us</p>
                  <p><strong>Container Sizes:</strong> 5, 10, 15-yard (specialty small sizes)</p>
                  <p><strong>Unique:</strong> Fits in compact car spaces</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Dallas metro area</p>
                  <p><strong>Features:</strong> Crane system, tight access, 7-day support</p>
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

        {/* Dallas Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">DFW Metroplex Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Dallas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown Dallas</li>
                <li>Deep Ellum</li>
                <li>Uptown</li>
                <li>Design District</li>
                <li>Victory Park</li>
                <li>Cityplace</li>
                <li>Knox-Henderson</li>
                <li>Bishop Arts District</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Dallas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Preston Hollow</li>
                <li>Highland Park</li>
                <li>University Park</li>
                <li>Lake Highlands</li>
                <li>Lakewood</li>
                <li>M Streets</li>
                <li>Greenville Avenue</li>
                <li>Forest Hills</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East/South Dallas</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Oak Cliff</li>
                <li>Fair Park</li>
                <li>Exposition Park</li>
                <li>Kessler Park</li>
                <li>Winnetka Heights</li>
                <li>Cedar Crest</li>
                <li>Pleasant Grove</li>
                <li>White Rock</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">DFW Suburbs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Fort Worth</li>
                <li>Arlington</li>
                <li>Plano</li>
                <li>Irving</li>
                <li>Garland</li>
                <li>Mesquite</li>
                <li>Carrollton</li>
                <li>Richardson</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Grand Prairie, Duncanville, DeSoto, Cedar Hill, 
              Mansfield, Euless, Bedford, Hurst, and all of DFW Metroplex
            </p>
          </div>
        </section>

        {/* Dallas Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dallas Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">DFW Size & Distance</h3>
              <p className="text-gray-600">
                The DFW Metroplex is huge - delivery fees often depend on distance from the company's location. Local companies may offer better rates.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Severe Weather Season</h3>
              <p className="text-gray-600">
                Spring brings tornadoes and severe storms to Dallas. Plan for weather delays and potential storm cleanup needs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Construction Boom</h3>
              <p className="text-gray-600">
                Dallas construction is booming. High demand means booking early is important, especially in growing suburbs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">HOA Communities</h3>
              <p className="text-gray-600">
                Many Dallas suburbs have strict HOA rules about dumpster placement. Check requirements before scheduling delivery.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Traffic & Timing</h3>
              <p className="text-gray-600">
                Dallas traffic is notorious. Many companies schedule deliveries during off-peak hours to avoid delays.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Summer Heat</h3>
              <p className="text-gray-600">
                Texas summers can be brutal (100°F+). Plan loading during cooler morning/evening hours and stay hydrated.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Dallas project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}