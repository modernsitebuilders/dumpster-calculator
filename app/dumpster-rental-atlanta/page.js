// app/dumpster-rental-atlanta/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Atlanta GA | Same Day Service | Best ATL Prices',
  description: 'Dumpster rental in Atlanta starting at $325. Serving Buckhead, Midtown, Decatur, and all of Metro Atlanta. Same-day delivery available.',
  keywords: 'dumpster rental atlanta, dumpster rental ATL, roll off dumpster atlanta, dumpster rental buckhead, dumpster rental midtown atlanta'
};

export default function AtlantaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Atlanta, GA
          </h1>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Instant Atlanta Dumpster Quote</h2>
          <p className="mb-6">Calculate the perfect size for your Atlanta project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        {/* Local Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Atlanta Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$325 - $425</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small bathroom remodels</li>
                <li>• Garage cleanouts</li>
                <li>• Minor deck removal</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$425 - $550</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen renovations</li>
                <li>• Flooring replacement</li>
                <li>• Large bathroom remodels</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$525 - $675</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house renovations</li>
                <li>• New construction</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$625 - $775</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Film/TV productions</li>
                <li>• Major demolition</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Prices include 7-day rental period. Extended rentals available. Permit fees additional where required.
          </p>
        </section>

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Atlanta Metro Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">City of Atlanta</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Midtown</li>
                <li>Buckhead</li>
                <li>Downtown</li>
                <li>Virginia-Highland</li>
                <li>Grant Park</li>
                <li>Inman Park</li>
                <li>Old Fourth Ward</li>
                <li>Poncey-Highland</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Alpharetta</li>
                <li>Roswell</li>
                <li>Sandy Springs</li>
                <li>Johns Creek</li>
                <li>Dunwoody</li>
                <li>Brookhaven</li>
                <li>Chamblee</li>
                <li>Doraville</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">East Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Decatur</li>
                <li>Avondale Estates</li>
                <li>Stone Mountain</li>
                <li>Tucker</li>
                <li>Clarkston</li>
                <li>Scottdale</li>
                <li>Pine Lake</li>
                <li>Lithonia</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South/West Metro</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Marietta</li>
                <li>Smyrna</li>
                <li>Vinings</li>
                <li>East Point</li>
                <li>College Park</li>
                <li>Hapeville</li>
                <li>Forest Park</li>
                <li>Morrow</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving nearby areas:</strong> Kennesaw, Acworth, Woodstock, Canton, 
              Lawrenceville, Duluth, Norcross, Peachtree City, Newnan, and all of Metro Atlanta
            </p>
          </div>
        </section>

        {/* Local Regulations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Atlanta Dumpster Permit Information</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold mb-3">Do you need a permit in Atlanta?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Private property:</strong> No permit needed for driveways or private lots</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span><strong>Public street/right-of-way:</strong> Permit required from Atlanta Public Works ($50-100)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">!</span>
                <span><strong>Film productions:</strong> Special permits may be needed through Atlanta Film Office</span>
              </li>
            </ul>
            <p className="mt-4 text-sm">
              <strong>Permit Office:</strong> Atlanta Public Works Department<br />
              55 Trinity Ave SW, Suite 3900<br />
              Phone: (404) 330-6240
            </p>
          </div>
        </section>

        {/* Local Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Atlanta-Specific Dumpster Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Film Industry Considerations</h3>
              <p className="text-gray-600">
                Atlanta is a major film hub. We coordinate with production schedules and understand studio requirements for waste management.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic District Considerations</h3>
              <p className="text-gray-600">
                Grant Park, Inman Park, and Virginia-Highland may have additional restrictions. Check with local historic preservation office.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Traffic and Delivery Times</h3>
              <p className="text-gray-600">
                Best delivery times are 7-9 AM or after 7 PM to avoid Atlanta traffic. I-285 and downtown congestion can delay deliveries.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">HOA and Condo Requirements</h3>
              <p className="text-gray-600">
                Many Buckhead and Midtown buildings require advance notice and COI. We handle all documentation for high-rise projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Recycling and Disposal</h3>
              <p className="text-gray-600">
                Materials go to Republic Services or Advanced Disposal facilities. Atlanta encourages recycling - we sort materials when possible.
              </p>
            </div>
          </div>
        </section>

        {/* Atlanta FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Atlanta Dumpster Rental FAQs</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">How quickly can I get a dumpster in Atlanta?</summary>
              <p className="mt-2 text-gray-600">
                Same-day delivery available for orders placed before 11 AM. Most Atlanta areas can get delivery within 2-4 hours during business hours.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What size dumpster for Atlanta bungalow renovation?</summary>
              <p className="mt-2 text-gray-600">
                Most Atlanta bungalows (1,200-1,800 sq ft) need a 20 or 30-yard dumpster for full renovations. Kitchen/bath only typically needs 10-20 yard.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Can you deliver to high-rise buildings in Midtown?</summary>
              <p className="mt-2 text-gray-600">
                Yes, we regularly service high-rise construction and renovations. Building management approval and COI required. Loading dock placement preferred.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Do you work with Atlanta film productions?</summary>
              <p className="mt-2 text-gray-600">
                Absolutely! We're experienced with film and TV production waste management. We can coordinate with location managers and handle special scheduling requirements.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent a Dumpster in Atlanta?</h2>
          <p className="mb-6 text-gray-700">
            Get instant quotes from licensed Atlanta providers
          </p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Atlanta Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}