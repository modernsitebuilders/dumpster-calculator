// app/blog/concrete-disposal-guide/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Concrete Disposal Guide | How to Dispose of Concrete & Costs',
  description: 'Learn how to properly dispose of concrete, calculate weight, understand costs, and find recycling options. Complete guide to concrete waste management.',
  keywords: 'concrete disposal, concrete recycling, concrete weight, concrete dumpster, construction debris'
};

export default function ConcreteDisposalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-blue-600">Resources</Link>
          {' > '}
          <span className="text-gray-700">Concrete Disposal Guide</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Complete Guide to Concrete Disposal
        </h1>
        
        <div className="text-gray-600 mb-8">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
            Heavy Materials
          </span>
          <p className="text-xl">
            Concrete is one of the heaviest materials you'll dispose of. Learn how to handle it properly and avoid costly overage fees.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-red-900 mb-2">⚠️ Critical Weight Warning</h2>
          <p className="text-red-800">
            Concrete weighs approximately <strong>4,000 lbs (2 tons) per cubic yard</strong>. A single 10-yard dumpster filled with concrete can weigh 40,000 lbs - exceeding most weight limits by 4-5 times!
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Concrete Weight Calculator</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Common Concrete Items</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>• 4" thick driveway (per sq ft)</span>
                    <strong>50 lbs</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>• 6" thick slab (per sq ft)</span>
                    <strong>75 lbs</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>• Standard sidewalk section (3'x3'x4")</span>
                    <strong>450 lbs</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>• Cinder block (each)</span>
                    <strong>35 lbs</strong>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Quick Formula</h3>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="text-sm font-mono">
                    Length (ft) × Width (ft) × Thickness (ft) × 150 = Weight in lbs
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    *150 lbs per cubic foot is standard concrete weight
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Dumpster Options for Concrete</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">10-Yard Heavy Debris Dumpster</h3>
              <p className="text-gray-600 mb-2">
                <strong>Best for:</strong> Small concrete projects (patios, small driveways)
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Weight limit:</strong> Usually 6-10 tons for heavy debris
              </p>
              <p className="text-gray-600">
                <strong>Cost:</strong> $300-$500 (concrete-only pricing)
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">20-Yard Heavy Debris Dumpster</h3>
              <p className="text-gray-600 mb-2">
                <strong>Best for:</strong> Large driveways, foundation removal
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Weight limit:</strong> Usually 10-12 tons for heavy debris
              </p>
              <p className="text-gray-600">
                <strong>Cost:</strong> $400-$700 (concrete-only pricing)
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm">
                <strong>💡 Pro Tip:</strong> Many companies offer special "heavy debris" or "concrete-only" dumpsters with higher weight limits and lower costs than mixed waste dumpsters.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Concrete Disposal Options</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">1. Concrete Recycling Centers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Cost:</strong> $0-$20 per ton (often free)</li>
                <li>• <strong>Pros:</strong> Cheapest option, eco-friendly</li>
                <li>• <strong>Cons:</strong> You must transport it yourself</li>
                <li>• <strong>Best for:</strong> Small amounts with truck access</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">2. Heavy Debris Dumpster</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Cost:</strong> $300-$700</li>
                <li>• <strong>Pros:</strong> Convenient, handles large amounts</li>
                <li>• <strong>Cons:</strong> More expensive than recycling</li>
                <li>• <strong>Best for:</strong> Large projects, no truck access</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">3. Junk Removal Service</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Cost:</strong> $200-$800+</li>
                <li>• <strong>Pros:</strong> They do all the work</li>
                <li>• <strong>Cons:</strong> Most expensive option</li>
                <li>• <strong>Best for:</strong> Small amounts, no labor available</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">4. Offer as Free Fill</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Cost:</strong> Free</li>
                <li>• <strong>Pros:</strong> No cost, helps others</li>
                <li>• <strong>Cons:</strong> May take time to find takers</li>
                <li>• <strong>Best for:</strong> Clean, broken concrete chunks</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What NOT to Mix with Concrete</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="mb-4">
              Mixing these materials with concrete will result in rejection or contamination fees:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Dirt or soil (keep separate)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Trash or household waste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Wood or lumber</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Metal or rebar (remove if possible)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Asphalt (different recycling process)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Paint or chemicals</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Money-Saving Tips</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">1.</span>
              <div>
                <h3 className="font-semibold mb-1">Separate Concrete from Other Debris</h3>
                <p className="text-gray-600 text-sm">
                  Rent a concrete-only dumpster for heavy materials and a separate one for lighter debris. This often costs less than overage fees.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">2.</span>
              <div>
                <h3 className="font-semibold mb-1">Break Into Smaller Pieces</h3>
                <p className="text-gray-600 text-sm">
                  Pieces under 2 feet are easier to handle and pack more efficiently. Some recyclers require this size.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">3.</span>
              <div>
                <h3 className="font-semibold mb-1">Check for Free Recycling</h3>
                <p className="text-gray-600 text-sm">
                  Many areas have free concrete recycling centers. Search "concrete recycling near me" before renting.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-green-500 font-bold mr-3">4.</span>
              <div>
                <h3 className="font-semibold mb-1">Consider Reuse Options</h3>
                <p className="text-gray-600 text-sm">
                  Clean concrete can be used for retaining walls, garden borders, or fill material. List it free on Craigslist or Facebook Marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Concrete Disposal Needs</h2>
          <p className="text-gray-700 mb-6">
            Use our dumpster calculator to determine the right size for your concrete project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Dumpster Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}