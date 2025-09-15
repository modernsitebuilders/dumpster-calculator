// app/blog/20-yard-dumpster-guide/page.js
import Link from 'next/link';

export const metadata = {
  title: '20 Yard Dumpster Guide: Size, Cost & Best Projects (2025)',
  description: '20 yard dumpster complete guide. Perfect for kitchen renovations, large bathroom remodels, and flooring projects. Dimensions, pricing, and project examples.',
  keywords: '20 yard dumpster, kitchen renovation dumpster, flooring removal dumpster, medium dumpster rental'
};

export default function TwentyYardDumpsterGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">20 Yard Dumpster Guide</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            20 Yard Dumpster Guide: The Most Popular Size
          </h1>
          <div className="flex items-center text-gray-600">
            <span>September 15, 2025</span>
            <span className="mx-2">•</span>
            <span>7 min read</span>
          </div>
        </header>

        {/* Quick Facts Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">20 Yard Dumpster Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Dimensions:</strong> 22' L × 8' W × 4.5' H
            </div>
            <div>
              <strong>Capacity:</strong> 6-8 pickup truck loads
            </div>
            <div>
              <strong>Average Cost:</strong> $350 - $550
            </div>
            <div>
              <strong>Weight Limit:</strong> 3-4 tons (6,000-8,000 lbs)
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            The 20 yard dumpster is America's most popular rental size, striking the perfect balance between capacity and cost. It's ideal for medium-sized renovations and home improvement projects.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Projects Need a 20 Yard Dumpster?</h2>
            
            <div className="bg-white border rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-green-700">✅ Perfect For:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Kitchen Projects:</h4>
                  <ul className="space-y-1">
                    <li>• Full kitchen renovations</li>
                    <li>• Cabinet and appliance removal</li>
                    <li>• Countertop replacement</li>
                    <li>• Kitchen flooring projects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Bathroom Projects:</h4>
                  <ul className="space-y-1">
                    <li>• Large bathroom remodels</li>
                    <li>• Master bathroom gut jobs</li>
                    <li>• Multiple bathroom renovations</li>
                    <li>• Bathtub and shower replacements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Flooring Projects:</h4>
                  <ul className="space-y-1">
                    <li>• Hardwood floor removal</li>
                    <li>• Carpet removal (whole house)</li>
                    <li>• Tile removal (large areas)</li>
                    <li>• Laminate flooring removal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other Projects:</h4>
                  <ul className="space-y-1">
                    <li>• Deck removal (up to 500 sq ft)</li>
                    <li>• Large basement cleanouts</li>
                    <li>• Roof repairs (small sections)</li>
                    <li>• Fence removal (large yards)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-700">⚠️ Consider Upgrading When:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Whole house renovations (consider 30-yard)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Full roof replacements over 2,000 sq ft</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Major construction projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Multiple large rooms at once</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">20 Yard Dumpster Pricing by Region</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">Region</th>
                    <th className="border border-gray-300 p-3 text-left">Average Cost</th>
                    <th className="border border-gray-300 p-3 text-left">Peak Season</th>
                    <th className="border border-gray-300 p-3 text-left">Off Season</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Northeast</td>
                    <td className="border border-gray-300 p-3 font-semibold">$450 - $650</td>
                    <td className="border border-gray-300 p-3">$550 - $700</td>
                    <td className="border border-gray-300 p-3">$400 - $600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Southeast</td>
                    <td className="border border-gray-300 p-3 font-semibold">$350 - $500</td>
                    <td className="border border-gray-300 p-3">$400 - $550</td>
                    <td className="border border-gray-300 p-3">$325 - $475</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Midwest</td>
                    <td className="border border-gray-300 p-3 font-semibold">$375 - $525</td>
                    <td className="border border-gray-300 p-3">$425 - $575</td>
                    <td className="border border-gray-300 p-3">$350 - $500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">West Coast</td>
                    <td className="border border-gray-300 p-3 font-semibold">$500 - $700</td>
                    <td className="border border-gray-300 p-3">$600 - $800</td>
                    <td className="border border-gray-300 p-3">$475 - $650</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Peak Season:</strong> April - September | <strong>Off Season:</strong> October - March
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Size Comparison & Placement</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Physical Dimensions</h3>
                  <ul className="space-y-2">
                    <li><strong>Length:</strong> 22 feet</li>
                    <li><strong>Width:</strong> 8 feet</li>
                    <li><strong>Height:</strong> 4.5 feet</li>
                    <li><strong>Footprint:</strong> 176 square feet</li>
                    <li><strong>Driveway fit:</strong> Needs 25+ foot driveway</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Capacity Details</h3>
                  <ul className="space-y-2">
                    <li><strong>Pickup trucks:</strong> 6-8 full loads</li>
                    <li><strong>Cubic feet:</strong> 540 cubic feet</li>
                    <li><strong>Weight capacity:</strong> 3-4 tons</li>
                    <li><strong>Fill level:</strong> Don't overfill above rim</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Real Kitchen Renovation Example</h2>
            
            <div className="border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Case Study: Full Kitchen Remodel (200 sq ft)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Debris Removed:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 20 linear feet of cabinets</li>
                    <li>• Granite countertops (60 sq ft)</li>
                    <li>• Ceramic tile backsplash</li>
                    <li>• Old appliances (dishwasher, range)</li>
                    <li>• Hardwood flooring (200 sq ft)</li>
                    <li>• Some drywall and electrical</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Dumpster Usage:</strong> 85% full</li>
                    <li><strong>Total Cost:</strong> $475</li>
                    <li><strong>Rental Period:</strong> 7 days</li>
                    <li><strong>Perfect Size?</strong> Yes - room for extras</li>
                    <li><strong>Would 10-yard work?</strong> No, too small</li>
                    <li><strong>Weight:</strong> 3.2 tons (within limit)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Loading Strategies for Maximum Efficiency</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-green-700">Smart Loading Tips</h3>
                <ul className="space-y-2">
                  <li><strong>Heavy items first:</strong> Countertops, appliances, flooring</li>
                  <li><strong>Break down cabinets:</strong> Remove doors, separate components</li>
                  <li><strong>Fill gaps efficiently:</strong> Use smaller debris as filler</li>
                  <li><strong>Distribute weight:</strong> Don't load all heavy items on one side</li>
                  <li><strong>Save space:</strong> Nest items when possible</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Cost-Saving Tips</h3>
                <ul className="space-y-2">
                  <li><strong>Recycle metal:</strong> Take appliances to scrap dealers</li>
                  <li><strong>Donate usable items:</strong> Good cabinets, fixtures</li>
                  <li><strong>Plan timing:</strong> Coordinate with project phases</li>
                  <li><strong>Compare quotes:</strong> Get 3+ rental company quotes</li>
                  <li><strong>Avoid overages:</strong> Stay within weight limits</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">20 Yard vs Other Sizes: Decision Guide</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-semibold">Choose 20 Yard When:</h3>
                <p>You're renovating 1-2 rooms, doing a full kitchen remodel, removing flooring from multiple rooms, or tackling medium-sized projects where 10 yards feels too small.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h3 className="font-semibold">Downsize to 10 Yard When:</h3>
                <p>You're only doing a small bathroom, single room project, or working in very tight spaces where a 22-foot dumpster won't fit.</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <h3 className="font-semibold">Upgrade to 30 Yard When:</h3>
                <p>You're doing whole house renovations, major additions, large roofing projects (3,000+ sq ft), or multiple large rooms simultaneously.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Permit Requirements</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">When You Need a Permit</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">✅ No Permit Needed:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Private driveway placement</li>
                    <li>• Private property/yard</li>
                    <li>• Construction sites (usually)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📋 Permit Required:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Public street placement</li>
                    <li>• Sidewalk placement</li>
                    <li>• City right-of-way</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Tip:</strong> Most 20-yard dumpsters fit in standard driveways, avoiding permit requirements.
              </p>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">How much can I fit in a 20 yard dumpster?</summary>
              <p className="mt-2 text-gray-600">
                A 20 yard dumpster holds 6-8 pickup truck loads. Perfect for full kitchen renovations, large bathroom remodels, or flooring removal from multiple rooms.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Will a 20 yard dumpster fit in my driveway?</summary>
              <p className="mt-2 text-gray-600">
                You need at least 25 feet of length and 10 feet of width. Most standard driveways accommodate 20-yard dumpsters easily.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">What's the weight limit for a 20 yard dumpster?</summary>
              <p className="mt-2 text-gray-600">
                Most companies allow 3-4 tons (6,000-8,000 lbs). Heavy materials like concrete or dirt may hit weight limits before volume limits.
              </p>
            </details>
            
            <details className="border rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold">Is it cheaper to rent one 20-yard or two 10-yard dumpsters?</summary>
              <p className="mt-2 text-gray-600">
                One 20-yard is almost always cheaper. Two 10-yard rentals cost 30-50% more due to double delivery/pickup fees.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-green-50 rounded-lg p-8 text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent a 20 Yard Dumpster?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to confirm this is the right size for your project
          </p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Calculate Your Perfect Size
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-8 border-t">
          <Link href="/blog/10-yard-dumpster-guide" className="text-blue-600 hover:underline">
            ← 10 Yard Guide
          </Link>
          <Link href="/blog/30-yard-dumpster-guide" className="text-blue-600 hover:underline">
            30 Yard Guide →
          </Link>
        </div>
      </article>
    </main>
  );
}