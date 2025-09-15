import Link from 'next/link';

export const metadata = {
  title: 'Roof Replacement Dumpster Size Calculator & Complete Guide',
  description: 'Calculate the perfect dumpster size for your roof replacement project. Learn about costs, debris weight, and disposal tips for asphalt shingles, metal, and tile roofs.',
  keywords: 'roof replacement dumpster size, roofing debris disposal, shingle removal dumpster, roof tear off waste',
  openGraph: {
    title: 'Roof Replacement Dumpster Size Calculator & Complete Guide',
    description: 'Calculate the perfect dumpster size for your roof replacement project. Learn about costs, debris weight, and disposal tips.',
    url: 'https://dumpster-size-calculator.com/blog/roof-replacement-dumpster-size',
  }
};

export default function RoofReplacementDumpsterSize() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Roof Replacement Dumpster Size Guide
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Calculate the right dumpster size for your roofing project based on square footage and materials
          </p>
          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <p className="text-gray-700 mb-4">
              <strong>Quick Answer:</strong> Most residential roof replacements need a <strong>20-30 yard dumpster</strong>. Calculate 1 yard per 100 sq ft of roof for asphalt shingles, or use our calculator below.
            </p>
            <Link 
              href="/" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Calculate Your Roof Dumpster Size
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Roof Replacement Dumpster Size Chart
          </h2>
          
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Roof Square Footage</th>
                  <th className="border border-gray-300 p-3 text-left">Material Type</th>
                  <th className="border border-gray-300 p-3 text-left">Recommended Dumpster</th>
                  <th className="border border-gray-300 p-3 text-left">Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">1,000-1,500 sq ft</td>
                  <td className="border border-gray-300 p-3">Asphalt shingles</td>
                  <td className="border border-gray-300 p-3">15-20 yard dumpster</td>
                  <td className="border border-gray-300 p-3">$380-480</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">1,500-2,000 sq ft</td>
                  <td className="border border-gray-300 p-3">Asphalt shingles</td>
                  <td className="border border-gray-300 p-3">20-30 yard dumpster</td>
                  <td className="border border-gray-300 p-3">$450-580</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">2,000-2,500 sq ft</td>
                  <td className="border border-gray-300 p-3">Asphalt shingles</td>
                  <td className="border border-gray-300 p-3">30 yard dumpster</td>
                  <td className="border border-gray-300 p-3">$550-650</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">2,500+ sq ft</td>
                  <td className="border border-gray-300 p-3">Asphalt shingles</td>
                  <td className="border border-gray-300 p-3">30-40 yard dumpster</td>
                  <td className="border border-gray-300 p-3">$650-750</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Any size</td>
                  <td className="border border-gray-300 p-3">Tile or slate</td>
                  <td className="border border-gray-300 p-3">Add 1 size larger</td>
                  <td className="border border-gray-300 p-3">+ Weight fees possible</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> These estimates assume single-layer removal. If your roof has multiple layers of shingles, increase the dumpster size accordingly (typically add 50% more capacity).
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Roofing Material Weight and Volume Guide
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Asphalt Shingles</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Weight:</strong> 200-350 lbs per 100 sq ft</li>
                <li><strong>Volume:</strong> ~1 cubic yard per 100 sq ft</li>
                <li><strong>Layers:</strong> Multiple layers multiply weight</li>
                <li><strong>Disposal:</strong> Most common, easy to dispose</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-3">Heavy Materials</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Clay tiles:</strong> 600-800 lbs per 100 sq ft</li>
                <li><strong>Slate:</strong> 800-1,200 lbs per 100 sq ft</li>
                <li><strong>Concrete tiles:</strong> 400-600 lbs per 100 sq ft</li>
                <li><strong>Cedar shakes:</strong> 150-250 lbs per 100 sq ft</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
            <h4 className="font-semibold text-red-800 mb-2">Weight Limit Warning</h4>
            <p className="text-sm text-gray-700">
              Tile, slate, and concrete roofing materials are extremely heavy. A 20-yard dumpster can easily exceed its 3-4 ton weight limit with just 1,000 sq ft of tile removal. Consider multiple smaller dumpsters or arrange for special heavy debris pickup.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Factors That Affect Roof Dumpster Size
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Number of Layers</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Single Layer</h4>
                  <p className="text-sm text-gray-600">Use standard calculations. Most efficient for dumpster sizing.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Double Layer</h4>
                  <p className="text-sm text-gray-600">Add 75-100% to dumpster size. Weight considerations increase significantly.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Triple+ Layers</h4>
                  <p className="text-sm text-gray-600">Consider multiple dumpsters or professional removal due to extreme weight.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Roof Complexity</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Simple gable roof:</strong> Standard calculations apply</li>
                <li><strong>Hip roof:</strong> Add 10-15% for additional surface area</li>
                <li><strong>Complex roof with dormers:</strong> Add 20-25% for extra cutting and waste</li>
                <li><strong>Steep pitch (over 6/12):</strong> More difficult removal, potential for more breakage</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Additional Debris</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Gutters and downspouts:</strong> Usually minimal space needed</li>
                <li><strong>Fascia and trim replacement:</strong> Add 10-15% capacity</li>
                <li><strong>Chimney work:</strong> Brick and mortar are extremely heavy</li>
                <li><strong>Decking replacement:</strong> Plywood/OSB adds significant volume</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Can and Cannot Go in Your Roofing Dumpster
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Acceptable Roofing Debris</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Asphalt shingles and underlayment</li>
                <li>Roof decking (plywood, OSB)</li>
                <li>Roofing nails and staples</li>
                <li>Flashing (small amounts)</li>
                <li>Ridge vents and caps</li>
                <li>Gutters (aluminum, vinyl)</li>
                <li>Wood trim and fascia boards</li>
                <li>Insulation materials</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Items Requiring Special Disposal</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Asbestos shingles (requires certified removal)</li>
                <li>Large amounts of metal flashing (recycle separately)</li>
                <li>Satellite dishes and equipment</li>
                <li>Solar panels and wiring</li>
                <li>Masonry and concrete (extremely heavy)</li>
                <li>Paint and chemical products</li>
                <li>Tar and liquid roofing materials</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Roof Replacement Timeline and Dumpster Scheduling
          </h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-800">Day 1: Tear-Off (Highest Debris Volume)</h3>
              <p className="text-gray-600">Complete removal of old roofing materials. Generates 80-90% of total debris. Schedule dumpster delivery for morning of this day.</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-800">Day 2: Decking Repairs</h3>
              <p className="text-gray-600">Replace damaged decking. Minimal debris unless extensive repairs needed. Old plywood/OSB disposal.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800">Days 3-4: Installation</h3>
              <p className="text-gray-600">New shingle installation. Mainly packaging waste and cut-offs. Usually fits in existing dumpster space.</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Most roofing contractors prefer same-day dumpster delivery and pickup for tear-off day, then a second smaller dumpster for the installation phase if needed. This minimizes rental costs while ensuring adequate capacity.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cost-Saving Tips for Roof Replacement Dumpsters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Before the Project</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Get multiple quotes</strong> - Dumpster prices vary significantly</li>
                <li><strong>Check weight limits</strong> - Avoid overage fees for heavy materials</li>
                <li><strong>Coordinate with roofer</strong> - Many contractors have preferred vendors</li>
                <li><strong>Consider timing</strong> - Avoid peak storm seasons when prices spike</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">During the Project</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Separate metal</strong> - Take copper and aluminum to scrap yards</li>
                <li><strong>Load efficiently</strong> - Break up large decking pieces</li>
                <li><strong>Monitor weight</strong> - Stop loading if approaching limits</li>
                <li><strong>Schedule pickup promptly</strong> - Avoid extra daily fees</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Permit and Placement Considerations
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dumpster Placement</h3>
              <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
                <p className="text-sm text-gray-700">
                  <strong>Safety Priority:</strong> Roofing dumpsters must be positioned safely for debris dropping. Consider fall zones and property damage protection.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Close to work area</strong> - Minimize debris throwing distance</li>
                <li><strong>Ground protection</strong> - Use plywood on driveways and lawns</li>
                <li><strong>Clear overhead</strong> - Avoid power lines and tree branches</li>
                <li><strong>Neighbor consideration</strong> - Ensure placement doesn't block access</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Permit Requirements</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Private property</strong> - Usually no permit required</li>
                <li><strong>Street placement</strong> - Permit typically required from city/county</li>
                <li><strong>HOA restrictions</strong> - Check community rules and notification requirements</li>
                <li><strong>Time limits</strong> - Some areas restrict how long dumpsters can remain</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Roof Replacement Dumpster Mistakes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-3">Size Mistakes</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Underestimating layers</strong> - Multiple shingle layers create much more debris</li>
                <li><strong>Ignoring material type</strong> - Tile and slate are much heavier than shingles</li>
                <li><strong>Forgetting decking</strong> - Plywood replacement adds significant volume</li>
                <li><strong>Not planning for weather delays</strong> - Extended rental periods cost extra</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-3">Placement Mistakes</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Too far from house</strong> - Increases labor and cleanup time</li>
                <li><strong>Wrong side of house</strong> - Not considering wind direction and access</li>
                <li><strong>Blocking access</strong> - Preventing emergency vehicle or neighbor access</li>
                <li><strong>No ground protection</strong> - Damage to driveways and landscaping</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Planning a Roof Replacement?
          </h2>
          <p className="text-gray-600 mb-6">
            Get an accurate dumpster size recommendation based on your roof's square footage and materials
          </p>
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Calculate Your Roof Dumpster Size
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-800">How do I calculate my roof's square footage?</summary>
              <p className="mt-2 text-gray-600 text-sm">
                For simple roofs, multiply length × width of your house and add 10% for overhang. For complex roofs, measure each section separately. Remember, roof square footage is typically 10-40% larger than your home's footprint due to pitch and overhangs.
              </p>
            </details>
            
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-800">Can I put gutters in the same dumpster as shingles?</summary>
              <p className="mt-2 text-gray-600 text-sm">
                Yes, aluminum and vinyl gutters can go in roofing dumpsters. However, if you have large amounts of metal gutters, consider taking them to a scrap yard for cash instead of paying disposal fees.
              </p>
            </details>
            
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-800">What if my roof has multiple layers of shingles?</summary>
              <p className="mt-2 text-gray-600 text-sm">
                Multiple layers significantly increase debris volume and weight. For double layers, increase your dumpster size by 75-100%. For triple layers, consider renting two separate dumpsters to avoid weight overages.
              </p>
            </details>
            
            <details className="cursor-pointer">
              <summary className="font-semibold text-gray-800">How close to my house can the dumpster be placed?</summary>
              <p className="mt-2 text-gray-600 text-sm">
                Dumpsters should be positioned to minimize throwing distance while maintaining safety. Typically 10-20 feet from the house is ideal, considering fall zones and roof pitch. Always protect the ground surface and ensure safe access.
              </p>
            </details>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}