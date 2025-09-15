// app/blog/prohibited-items-dumpster/page.js
import Link from 'next/link';

export const metadata = {
  title: 'What Can\'t Go in a Dumpster? Complete List of Prohibited Items (2025)',
  description: 'Complete guide to items you cannot put in a dumpster rental. Learn about prohibited materials, disposal alternatives, and how to avoid extra fees.',
  keywords: 'prohibited dumpster items, what can\'t go in dumpster, dumpster rental restrictions, hazardous waste disposal'
};

export default function ProhibitedItemsPost() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Prohibited Items in Dumpsters</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What Can't Go in a Dumpster? Complete Prohibited Items List
          </h1>
          <div className="flex items-center text-gray-600">
            <span>January 5, 2025</span>
            <span className="mx-2">•</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Throwing the wrong items in your dumpster can result in hefty fines, environmental damage, and rejection of your entire load. This guide covers everything you can't put in a dumpster and how to dispose of these items properly.
          </p>

          {/* Warning Box */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-red-800 mb-3">⚠️ Important Warning</h2>
            <p className="text-red-700">
              Prohibited items found in your dumpster can result in:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-red-700">
              <li>Fines of $100-$500 per item</li>
              <li>Rejection of entire load at landfill</li>
              <li>Criminal charges for hazardous materials</li>
              <li>Additional transportation and disposal fees</li>
            </ul>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Universal Prohibited Items (Never Allowed)</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-bold mb-2">1. Hazardous Chemicals</h3>
                <p className="mb-2">These pose serious environmental and health risks:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Paint (wet/oil-based)</li>
                  <li>Motor oil and automotive fluids</li>
                  <li>Pesticides and herbicides</li>
                  <li>Pool chemicals</li>
                  <li>Cleaning solvents</li>
                  <li>Antifreeze</li>
                </ul>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm"><strong>Disposal alternative:</strong> Local household hazardous waste collection days or permanent drop-off facilities.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-bold mb-2">2. Electronics (E-Waste)</h3>
                <p className="mb-2">Contains toxic materials like lead and mercury:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Televisions and monitors</li>
                  <li>Computers and laptops</li>
                  <li>Printers and scanners</li>
                  <li>Cell phones</li>
                  <li>Microwaves</li>
                </ul>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm"><strong>Disposal alternative:</strong> Best Buy, Staples, or local e-waste recycling centers accept these free.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-bold mb-2">3. Appliances with Freon</h3>
                <p className="mb-2">Freon must be professionally removed:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Refrigerators</li>
                  <li>Freezers</li>
                  <li>Air conditioners</li>
                  <li>Dehumidifiers</li>
                  <li>Water coolers</li>
                </ul>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm"><strong>Disposal alternative:</strong> Schedule appliance pickup with your utility company (often free) or scrap metal recyclers.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-bold mb-2">4. Tires</h3>
                <p className="mb-2">Banned from landfills in most states:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Car tires</li>
                  <li>Truck tires</li>
                  <li>Motorcycle tires</li>
                  <li>Tractor tires</li>
                </ul>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm"><strong>Disposal alternative:</strong> Tire retailers often accept old tires for $2-5 each. Auto shops may take them free with new tire purchase.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-bold mb-2">5. Batteries</h3>
                <p className="mb-2">Contains corrosive and toxic materials:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Car batteries</li>
                  <li>Lithium-ion batteries</li>
                  <li>Rechargeable batteries</li>
                  <li>Laptop batteries</li>
                </ul>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm"><strong>Disposal alternative:</strong> Auto parts stores (for car batteries), Home Depot, Lowes, or battery recycling centers.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-bold mb-2">6. Medical Waste</h3>
                <p className="mb-2">Biohazard materials require special handling:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Needles and syringes</li>
                  <li>Medications</li>
                  <li>Blood-contaminated items</li>
                  <li>Medical sharps</li>
                </ul>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm"><strong>Disposal alternative:</strong> Pharmacy take-back programs, hospital disposal programs, or mail-back services.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-bold mb-2">7. Asbestos</h3>
                <p className="mb-2">Extremely hazardous material requiring professional removal:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Old insulation</li>
                  <li>Ceiling tiles (pre-1980)</li>
                  <li>Vinyl flooring (pre-1980)</li>
                  <li>Pipe insulation</li>
                </ul>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm"><strong>Disposal alternative:</strong> Licensed asbestos removal contractors only. Never handle yourself.</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-bold mb-2">8. Propane Tanks</h3>
                <p className="mb-2">Explosion risk even when empty:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Grill tanks</li>
                  <li>Camping cylinders</li>
                  <li>Forklift tanks</li>
                  <li>RV tanks</li>
                </ul>
                <div className="mt-3 p-3 bg-green-50 rounded">
                  <p className="text-sm"><strong>Disposal alternative:</strong> Propane suppliers, hardware stores, or hazardous waste facilities.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Sometimes Prohibited (Check First)</h2>
            <p className="mb-4">These items may be allowed with special arrangements or additional fees:</p>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠️</span>
                  <div>
                    <strong>Mattresses and Box Springs:</strong> Some companies accept for $25-50 extra fee
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠️</span>
                  <div>
                    <strong>Railroad Ties:</strong> Treated wood requires special disposal
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠️</span>
                  <div>
                    <strong>Dirt and Concrete:</strong> Often requires separate "clean fill" dumpster
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠️</span>
                  <div>
                    <strong>Tree Stumps:</strong> May be prohibited or require extra fees
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">⚠️</span>
                  <div>
                    <strong>Hot Water Heaters:</strong> Allowed if drained completely
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What CAN Go in a Dumpster?</h2>
            <p className="mb-4">Most non-hazardous solid waste is acceptable:</p>
            
            <div className="bg-green-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>✓ Household junk and furniture</li>
                  <li>✓ Construction debris (wood, drywall)</li>
                  <li>✓ Yard waste and branches</li>
                  <li>✓ Carpet and flooring</li>
                  <li>✓ Clothing and textiles</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Non-electronic appliances</li>
                  <li>✓ Roofing shingles</li>
                  <li>✓ Siding and windows</li>
                  <li>✓ Cardboard and paper</li>
                  <li>✓ Plastic and metal (non-hazardous)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-3">Need Help Choosing the Right Dumpster?</h3>
            <p className="mb-4">
              Use our calculator to find the perfect size and connect with providers who can guide you on local restrictions.
            </p>
            <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              Calculate Dumpster Size →
            </Link>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How to Avoid Prohibited Item Fees</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Sort before you toss:</strong> Separate prohibited items before loading the dumpster.
              </li>
              <li>
                <strong>Ask your provider:</strong> Each company may have slightly different restrictions.
              </li>
              <li>
                <strong>Schedule separate pickups:</strong> Many items like appliances have free pickup options.
              </li>
              <li>
                <strong>Host a hazardous waste day:</strong> Coordinate with neighbors for group disposal.
              </li>
              <li>
                <strong>Donate or sell:</strong> Working appliances and electronics can be donated.
              </li>
              <li>
                <strong>When in doubt, ask:</strong> Call before putting questionable items in the dumpster.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">State-Specific Restrictions</h2>
            <p className="mb-4">
              Some states have additional restrictions. Common examples:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>California:</strong> Universal waste (batteries, mercury thermostats) strictly prohibited</li>
              <li><strong>Massachusetts:</strong> CRTs and TVs banned from all disposal</li>
              <li><strong>Pennsylvania:</strong> Leaf waste banned during certain months</li>
              <li><strong>New York:</strong> Electronic waste banned statewide</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Always check your local and state regulations as they change frequently.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
            <p>
              Knowing what can't go in your dumpster saves money and protects the environment. When planning your project, budget time to properly dispose of prohibited items through appropriate channels. Most communities offer free or low-cost disposal options for hazardous materials—you just need to plan ahead.
            </p>
          </section>
        </div>

        {/* Author Box */}
        <div className="border-t pt-8 mt-12">
          <p className="text-sm text-gray-600">
            Last updated: January 5, 2025 | Written by the Dumpster Calculator Team
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-8 border-t">
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
          <Link href="/" className="text-blue-600 hover:underline">
            Find Your Dumpster Size →
          </Link>
        </div>
      </article>
    </main>
  );
}