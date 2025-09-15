import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Miami FL - Size Calculator & Local Providers',
  description: 'Find the right dumpster size for your Miami project. Free calculator plus local Miami-Dade County dumpster rental companies. Get quotes from trusted providers.',
  keywords: 'dumpster rental Miami, Miami dumpster sizes, Miami-Dade waste management, South Beach dumpster rental, Coral Gables dumpster, Miami construction dumpster',
  openGraph: {
    title: 'Dumpster Rental Miami FL - Size Calculator & Local Providers',
    description: 'Find the right dumpster size for your Miami project. Free calculator plus local Miami-Dade County dumpster rental companies.',
    url: 'https://dumpster-size-calculator.com/miami-dumpster-rental',
  }
};

export default function MiamiDumpsterRental() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Miami, Florida
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Find the perfect dumpster size for your Miami project with our free calculator
          </p>
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Use Free Size Calculator
          </Link>
        </div>

        {/* Miami-Specific Intro */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Dumpster Rentals for Miami Projects
          </h2>
          <p className="text-gray-600 mb-4">
            Whether you're renovating a South Beach condo, cleaning out a Coral Gables estate, or managing construction debris in Downtown Miami, our calculator helps you choose the right dumpster size. Miami's unique building requirements and hurricane preparedness standards make proper waste management crucial for any project.
          </p>
          <p className="text-gray-600">
            From Little Havana home renovations to Brickell high-rise construction, we connect you with trusted Miami-Dade County dumpster rental providers who understand local regulations and permit requirements.
          </p>
        </div>

        {/* Popular Project Types in Miami */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Miami Dumpster Rental Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Hurricane Cleanup</h3>
              <p className="text-gray-600 text-sm mb-4">
                Post-storm debris removal throughout Miami-Dade County. Quick cleanup is essential for insurance claims and safety.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Condo Renovations</h3>
              <p className="text-gray-600 text-sm mb-4">
                High-rise apartment and condo remodels in Brickell, South Beach, and Downtown Miami require careful waste management.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pool Deck Removal</h3>
              <p className="text-gray-600 text-sm">
                Miami's pool culture means frequent deck renovations and pool area remodeling projects.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Roof Replacement</h3>
              <p className="text-gray-600 text-sm mb-4">
                Hurricane-resistant roofing upgrades are common in Miami. Proper debris disposal is required by local codes.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Landscaping Projects</h3>
              <p className="text-gray-600 text-sm mb-4">
                Tropical landscaping and palm tree removal generate significant yard waste in Miami's climate.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Estate Cleanouts</h3>
              <p className="text-gray-600 text-sm">
                Large home cleanouts in Coral Gables, Pinecrest, and other established Miami neighborhoods.
              </p>
            </div>
          </div>
        </div>

        {/* Miami Neighborhoods Served */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Miami Areas We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Central Miami</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown Miami</li>
                <li>• Brickell</li>
                <li>• South Beach</li>
                <li>• Miami Beach</li>
                <li>• Key Biscayne</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">West Miami</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Coral Gables</li>
                <li>• Little Havana</li>
                <li>• Westchester</li>
                <li>• Doral</li>
                <li>• Hialeah</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">South Miami</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pinecrest</li>
                <li>• Kendall</li>
                <li>• Homestead</li>
                <li>• South Miami</li>
                <li>• Palmetto Bay</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dumpster Sizes for Miami */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Dumpster Sizes Available in Miami
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">10 Yard Dumpster</h3>
              <p className="text-sm text-gray-600 mb-2">Perfect for small Miami projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bathroom remodels</li>
                <li>• Small condo cleanouts</li>
                <li>• Minor landscaping</li>
                <li>• Typical cost: $250-350</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">20 Yard Dumpster</h3>
              <p className="text-sm text-gray-600 mb-2">Most popular size in Miami</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Kitchen renovations</li>
                <li>• Pool deck removal</li>
                <li>• Medium home cleanouts</li>
                <li>• Typical cost: $350-450</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">30 Yard Dumpster</h3>
              <p className="text-sm text-gray-600 mb-2">Large Miami renovations</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Whole house cleanouts</li>
                <li>• Large construction projects</li>
                <li>• Hurricane debris removal</li>
                <li>• Typical cost: $450-550</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">40 Yard Dumpster</h3>
              <p className="text-sm text-gray-600 mb-2">Major Miami projects</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Large construction sites</li>
                <li>• Major estate cleanouts</li>
                <li>• Commercial renovations</li>
                <li>• Typical cost: $550-650</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Miami Regulations */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Miami Dumpster Permit Requirements
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Street Placement Permits</h3>
              <p className="text-gray-600 text-sm">
                Miami-Dade County requires permits for dumpsters placed on public streets or right-of-way. Contact the Miami-Dade Public Works Department at (305) 375-4507 for permit applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Hurricane Season Considerations</h3>
              <p className="text-gray-600 text-sm">
                During hurricane season (June-November), dumpster placement may be restricted. Many companies will collect dumpsters before major storms approach South Florida.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Prohibited Items</h3>
              <p className="text-gray-600 text-sm">
                Miami-Dade has strict disposal regulations. Prohibited items include paint, chemicals, tires, batteries, and appliances with refrigerants. Electronics must be disposed of through Miami-Dade's e-waste program.
              </p>
            </div>
          </div>
        </div>

        {/* Local Providers */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Miami Dumpster Rental Companies
          </h2>
          <p className="text-gray-600 mb-4">
            Compare quotes from these trusted Miami-area dumpster rental providers:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800">Waste Management Miami</h3>
              <p className="text-sm text-gray-600">Serving all of Miami-Dade County</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800">Republic Services</h3>
              <p className="text-sm text-gray-600">Construction and residential dumpsters</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800">Miami Dumpster Rental Pro</h3>
              <p className="text-sm text-gray-600">Local Miami specialist</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-800">Budget Dumpster</h3>
              <p className="text-sm text-gray-600">Online booking and competitive rates</p>
            </div>
          </div>
        </div>

        {/* FAQ for Miami */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Miami Dumpster Rental FAQ
          </h2>
          <div className="space-y-4">
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-800">How much does dumpster rental cost in Miami?</summary>
              <p className="mt-2 text-gray-600 text-sm">
                Miami dumpster rental prices range from $250-350 for 10-yard dumpsters to $550-650 for 40-yard containers. Prices vary by location, with South Beach and Brickell typically higher due to access challenges.
              </p>
            </details>
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-800">Do I need a permit for dumpster rental in Miami?</summary>
              <p className="mt-2 text-gray-600 text-sm">
                You need a permit if placing the dumpster on a public street or right-of-way in Miami-Dade County. Private property placement typically doesn't require permits. Check with Miami-Dade Public Works for current requirements.
              </p>
            </details>
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-800">What can't I put in a Miami dumpster?</summary>
              <p className="mt-2 text-gray-600 text-sm">
                Prohibited items include hazardous materials, paint, chemicals, tires, batteries, appliances with refrigerants, and electronics. Miami-Dade has special disposal programs for these items.
              </p>
            </details>
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-800">How long can I keep a dumpster in Miami?</summary>
              <p className="mt-2 text-gray-600 text-sm">
                Most Miami dumpster rentals include 7-10 days. Extended rental periods are available for an additional daily fee. During hurricane season, collection schedules may be adjusted for safety.
              </p>
            </details>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Find Your Miami Dumpster Size?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our free calculator to determine the perfect dumpster size for your Miami project
          </p>
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Calculate Dumpster Size
          </Link>
        </div>

        {/* Back to Calculator */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}