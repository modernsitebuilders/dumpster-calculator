// app/blog/roofing-shingle-weight-calculator/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Roofing Shingle Weight Calculator | How Much Do Shingles Weigh?',
  description: 'Calculate the weight of roofing shingles by type, squares, and layers. Essential guide for roof tear-offs and avoiding dumpster overage fees.',
  keywords: 'shingle weight, roofing weight calculator, asphalt shingles, roof tear off, roofing disposal'
};

export default function ShingleWeightPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-blue-600">Resources</Link>
          {' > '}
          <span className="text-gray-700">Shingle Weight Guide</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Roofing Shingle Weight Calculator & Guide
        </h1>
        
        <div className="text-gray-600 mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
            Roofing Materials
          </span>
          <p className="text-xl">
            Accurately calculate shingle weight for your roofing project to choose the right dumpster size and avoid overage fees.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-yellow-900 mb-2">📋 Quick Reference</h2>
          <p className="text-yellow-800">
            <strong>Average roof tear-off:</strong> 2-4 tons (4,000-8,000 lbs)<br/>
            <strong>Most common dumpster size:</strong> 20-yard for single layer, 30-yard for multiple layers<br/>
            <strong>Weight per square (100 sq ft):</strong> 200-350 lbs for asphalt shingles
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shingle Weight by Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Shingle Type</th>
                  <th className="px-4 py-3 text-center">Weight per Square</th>
                  <th className="px-4 py-3 text-center">Weight per Bundle</th>
                  <th className="px-4 py-3 text-center">Bundles per Square</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">3-Tab Asphalt</td>
                  <td className="px-4 py-3 text-center">200-250 lbs</td>
                  <td className="px-4 py-3 text-center">60-80 lbs</td>
                  <td className="px-4 py-3 text-center">3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Architectural Asphalt</td>
                  <td className="px-4 py-3 text-center">250-350 lbs</td>
                  <td className="px-4 py-3 text-center">70-90 lbs</td>
                  <td className="px-4 py-3 text-center">3-4</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Wood Shingles</td>
                  <td className="px-4 py-3 text-center">200-350 lbs</td>
                  <td className="px-4 py-3 text-center">50-80 lbs</td>
                  <td className="px-4 py-3 text-center">4-5</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Clay Tiles</td>
                  <td className="px-4 py-3 text-center">600-1,500 lbs</td>
                  <td className="px-4 py-3 text-center">N/A</td>
                  <td className="px-4 py-3 text-center">N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Concrete Tiles</td>
                  <td className="px-4 py-3 text-center">750-1,100 lbs</td>
                  <td className="px-4 py-3 text-center">N/A</td>
                  <td className="px-4 py-3 text-center">N/A</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Slate</td>
                  <td className="px-4 py-3 text-center">800-1,500 lbs</td>
                  <td className="px-4 py-3 text-center">N/A</td>
                  <td className="px-4 py-3 text-center">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Calculate Your Roof's Shingle Weight</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-gray-200">
                <h3 className="font-semibold mb-3">Step 1: Calculate Roof Size in Squares</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Roof Area (sq ft) ÷ 100 = Number of Squares
                </p>
                <p className="text-xs text-gray-500">
                  Example: 2,000 sq ft roof = 20 squares
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border border-gray-200">
                <h3 className="font-semibold mb-3">Step 2: Multiply by Shingle Weight</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Squares × Weight per Square = Total Weight
                </p>
                <p className="text-xs text-gray-500">
                  Example: 20 squares × 250 lbs = 5,000 lbs (2.5 tons)
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border border-gray-200">
                <h3 className="font-semibold mb-3">Step 3: Account for Layers</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Total Weight × Number of Layers = Final Weight
                </p>
                <p className="text-xs text-gray-500">
                  Example: 5,000 lbs × 2 layers = 10,000 lbs (5 tons)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Roof Sizes & Weights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Small Home (1,500 sq ft)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Roof area:</strong> ~2,000 sq ft (20 squares)</li>
                <li>• <strong>Single layer:</strong> 2-3.5 tons</li>
                <li>• <strong>Two layers:</strong> 4-7 tons</li>
                <li>• <strong>Recommended:</strong> 20-yard dumpster</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Average Home (2,000 sq ft)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Roof area:</strong> ~2,500 sq ft (25 squares)</li>
                <li>• <strong>Single layer:</strong> 2.5-4.5 tons</li>
                <li>• <strong>Two layers:</strong> 5-9 tons</li>
                <li>• <strong>Recommended:</strong> 20-30 yard dumpster</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Large Home (3,000 sq ft)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Roof area:</strong> ~3,500 sq ft (35 squares)</li>
                <li>• <strong>Single layer:</strong> 3.5-6 tons</li>
                <li>• <strong>Two layers:</strong> 7-12 tons</li>
                <li>• <strong>Recommended:</strong> 30-40 yard dumpster</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Very Large Home (4,000+ sq ft)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Roof area:</strong> ~5,000 sq ft (50 squares)</li>
                <li>• <strong>Single layer:</strong> 5-8.5 tons</li>
                <li>• <strong>Two layers:</strong> 10-17 tons</li>
                <li>• <strong>Recommended:</strong> 40-yard or multiple dumpsters</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Additional Weight Factors</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold mb-2">Underlayment & Felt Paper</h3>
              <p className="text-gray-600">
                Add 5-10% to total weight. Saturated felt can be surprisingly heavy.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold mb-2">Plywood or OSB Decking</h3>
              <p className="text-gray-600">
                If replacing decking, add 1.5-2.5 lbs per sq ft (40-50 lbs per sheet).
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold mb-2">Flashing, Vents & Accessories</h3>
              <p className="text-gray-600">
                Add 500-1,000 lbs for miscellaneous roofing materials.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold mb-2">Water Saturation</h3>
              <p className="text-gray-600">
                Wet shingles can weigh 50-100% more. Cover dumpster if rain is expected.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Best Dumpster Sizes for Roofing</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Roof Size (Squares)</th>
                  <th className="px-4 py-3 text-center">Single Layer</th>
                  <th className="px-4 py-3 text-center">Two Layers</th>
                  <th className="px-4 py-3 text-center">Three+ Layers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">10-15 squares</td>
                  <td className="px-4 py-3 text-center">15-yard</td>
                  <td className="px-4 py-3 text-center">20-yard</td>
                  <td className="px-4 py-3 text-center">30-yard</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">15-25 squares</td>
                  <td className="px-4 py-3 text-center">20-yard</td>
                  <td className="px-4 py-3 text-center">30-yard</td>
                  <td className="px-4 py-3 text-center">40-yard</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">25-35 squares</td>
                  <td className="px-4 py-3 text-center">30-yard</td>
                  <td className="px-4 py-3 text-center">40-yard</td>
                  <td className="px-4 py-3 text-center">Multiple</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">35+ squares</td>
                  <td className="px-4 py-3 text-center">40-yard</td>
                  <td className="px-4 py-3 text-center">Multiple</td>
                  <td className="px-4 py-3 text-center">Multiple</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Pro Tips for Roofing Disposal</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Use a Roofing Shovel</h3>
                  <p className="text-gray-600 text-sm">
                    Speeds up removal and reduces labor costs significantly.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Place Dumpster Close</h3>
                  <p className="text-gray-600 text-sm">
                    Position near the roof edge to minimize carrying distance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Load Heavy to Light</h3>
                  <p className="text-gray-600 text-sm">
                    Put tiles and multiple layers on bottom, lighter debris on top.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Cover in Rain</h3>
                  <p className="text-gray-600 text-sm">
                    Wet shingles add significant weight and overage fees.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Separate Metals</h3>
                  <p className="text-gray-600 text-sm">
                    Remove flashing and gutters - they can be recycled for cash.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 font-bold mr-3">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Break Into Sections</h3>
                  <p className="text-gray-600 text-sm">
                    Remove and dispose in sections to avoid overloading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Roofing Project</h2>
          <p className="text-gray-700 mb-6">
            Use our calculator to determine the right dumpster size for your roofing tear-off
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Dumpster Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}