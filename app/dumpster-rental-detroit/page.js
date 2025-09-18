// app/dumpster-rental-detroit/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Detroit MI | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Detroit. Compare local providers serving Motor City and Southeast Michigan.',
  keywords: 'dumpster rental detroit, detroit dumpster companies, roll off dumpster detroit, michigan dumpster rental'
};

export default function DetroitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Detroit, Michigan
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Detroit and Southeast Michigan
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Detroit project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Detroit Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Detroit Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detroit Junk Busters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (313) 505-6611</p>
                  <p><strong>Website:</strong> detroitjunkbusters.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40-yard options</p>
                </div>
                <div>
                  <p><strong>Pricing:</strong> Starting at $355 for 10-yard</p>
                  <p><strong>Specialties:</strong> Rubber wheeled dumpsters, driveway friendly</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Knight Transfer</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 1-888-386-7787</p>
                  <p><strong>Website:</strong> dumpstr.com</p>
                  <p><strong>Features:</strong> Certified Detroit business, 4 generations</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Detroit metro area</p>
                  <p><strong>Specialties:</strong> Construction focus, Saturday service available</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Priority Waste</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> prioritywaste.com</p>
                  <p><strong>Features:</strong> Partners with Red Wings, Tigers, Grand Prix</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30, 40-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Detroit and all of Michigan</p>
                  <p><strong>Specialties:</strong> Michigan-based company, executive accessibility</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">DJ's Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (313) 989-6113</p>
                  <p><strong>Website:</strong> djsdumpsterrentals.com</p>
                  <p><strong>Container Sizes:</strong> 10, 20, 30-yard, rubber-wheeled</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Detroit metro area</p>
                  <p><strong>Specialties:</strong> 3+ day rentals, driveway friendly options</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Motor City Dumpster</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (844) 623-8677</p>
                  <p><strong>Website:</strong> motorcitydumpster.com</p>
                  <p><strong>Features:</strong> Rubber-coated wheels, same-day delivery</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Detroit, Warren, Southfield, Dearborn</p>
                  <p><strong>Specialties:</strong> Protects driveways, eco-friendly practices</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Signature Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (313) 551-8910</p>
                  <p><strong>Website:</strong> signaturedumpsterrentals.com</p>
                  <p><strong>Features:</strong> All-inclusive pricing, no hidden fees</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Detroit and surrounding areas</p>
                  <p><strong>Specialties:</strong> Direct rental (no brokers), satisfaction guarantee</p>
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

        {/* Detroit Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Detroit Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Detroit</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Midtown</li>
                <li>Corktown</li>
                <li>Greektown</li>
                <li>Eastern Market</li>
                <li>Rivertown</li>
                <li>New Center</li>
                <li>Brush Park</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Side</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Indian Village</li>
                <li>Jefferson-Chalmers</li>
                <li>Morningside</li>
                <li>East English Village</li>
                <li>Grosse Pointe</li>
                <li>Harper Woods</li>
                <li>St. Clair Shores</li>
                <li>Eastpointe</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West Side</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Dearborn</li>
                <li>Dearborn Heights</li>
                <li>Redford</li>
                <li>Livonia</li>
                <li>Garden City</li>
                <li>Westland</li>
                <li>Canton</li>
                <li>Plymouth</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Suburbs</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Warren</li>
                <li>Sterling Heights</li>
                <li>Troy</li>
                <li>Royal Oak</li>
                <li>Ferndale</li>
                <li>Southfield</li>
                <li>Birmingham</li>
                <li>Bloomfield Hills</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Ann Arbor, Novi, Farmington Hills, Rochester Hills, 
              Pontiac, and all of Southeast Michigan
            </p>
          </div>
        </section>

        {/* Detroit Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Detroit Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Urban Revitalization Projects</h3>
              <p className="text-gray-600">
                Detroit's ongoing renaissance creates constant demand for dumpsters. Downtown and Midtown developments keep rental companies busy year-round.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic Home Renovations</h3>
              <p className="text-gray-600">
                Many Detroit neighborhoods feature historic homes requiring careful renovation. Be aware of lead paint and asbestos disposal regulations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Winter Weather Challenges</h3>
              <p className="text-gray-600">
                Michigan winters can be harsh. Snow and ice may affect delivery schedules November through March. Many companies offer rubber-wheeled options for winter.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Right of Way Permits</h3>
              <p className="text-gray-600">
                City of Detroit requires Right of Way permits for street placement. Most companies can guide you through the permit process.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Auto Industry Influence</h3>
              <p className="text-gray-600">
                Many rental companies have contracts with auto plants and suppliers. This can affect availability during model changeovers and retooling periods.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Local Business Support</h3>
              <p className="text-gray-600">
                Detroit values supporting local businesses. Many companies are multi-generational, family-owned operations with deep community ties.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Detroit project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}