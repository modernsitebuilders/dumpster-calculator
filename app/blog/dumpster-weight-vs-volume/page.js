// app/blog/dumpster-weight-vs-volume/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Weight vs Volume | When Each Matters Most',
  description: 'Understand when dumpster weight limits vs volume capacity matters for your project. Complete guide to choosing between weight and space considerations.',
  keywords: 'dumpster weight vs volume, weight limits, volume capacity, dumpster size guide'
};

export default function WeightVsVolumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-blue-600">Resources</Link>
          {' > '}
          <span className="text-gray-700">Weight vs Volume</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Dumpster Weight vs Volume: Understanding the Difference
        </h1>
        
        <div className="text-gray-600 mb-8">
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
            Size Selection
          </span>
          <p className="text-xl">
            Choosing the wrong dumpster based on volume alone is the #1 reason for overage fees. Learn when weight matters more than size.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-blue-900 mb-2">📊 The Key Insight</h2>
          <p className="text-blue-800">
            <strong>Volume</strong> = How much space you have (measured in cubic yards)<br/>
            <strong>Weight</strong> = How heavy your debris is (measured in tons)<br/>
            <strong>The Problem:</strong> You can exceed weight limits with a half-full dumpster!
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Reference: Weight vs Volume Priority</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-red-900">⚖️ Weight Matters More</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Concrete, brick, stone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Dirt, sand, gravel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Roofing shingles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Tile and ceramics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Plaster and drywall</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Dense hardwoods</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3 text-green-900">📦 Volume Matters More</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Household junk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Furniture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Cardboard and paper</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Plastic and foam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Light yard waste</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Understanding Dumpster Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Size</th>
                  <th className="px-4 py-3 text-center">Volume Capacity</th>
                  <th className="px-4 py-3 text-center">Typical Weight Limit</th>
                  <th className="px-4 py-3 text-center">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">10 Yard</td>
                  <td className="px-4 py-3 text-center">10 cubic yards</td>
                  <td className="px-4 py-3 text-center">2-3 tons</td>
                  <td className="px-4 py-3">Mixed light debris</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">20 Yard</td>
                  <td className="px-4 py-3 text-center">20 cubic yards</td>
                  <td className="px-4 py-3 text-center">3-4 tons</td>
                  <td className="px-4 py-3">Balanced projects</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">30 Yard</td>
                  <td className="px-4 py-3 text-center">30 cubic yards</td>
                  <td className="px-4 py-3 text-center">4-5 tons</td>
                  <td className="px-4 py-3">Volume-heavy projects</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">40 Yard</td>
                  <td className="px-4 py-3 text-center">40 cubic yards</td>
                  <td className="px-4 py-3 text-center">5-6 tons</td>
                  <td className="px-4 py-3">Large, light debris</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Notice how weight limits don't scale proportionally with volume - a 40-yard dumpster isn't allowed 4x the weight of a 10-yard!
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Real-World Examples</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Example 1: Bathroom Renovation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Materials:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Old tile and tub (2,000 lbs)</li>
                    <li>• Vanity and fixtures (300 lbs)</li>
                    <li>• Drywall and studs (500 lbs)</li>
                    <li>• Misc. debris (200 lbs)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Analysis:</p>
                  <p className="text-sm text-gray-600">
                    <strong>Total Weight:</strong> 3,000 lbs (1.5 tons)<br/>
                    <strong>Volume Needed:</strong> ~3-4 cubic yards<br/>
                    <strong>Best Choice:</strong> 10-yard dumpster<br/>
                    <strong>Why:</strong> Weight is well under limit, volume is minimal
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Example 2: Concrete Patio Removal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Materials:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 400 sq ft concrete, 4" thick</li>
                    <li>• Weight: ~20,000 lbs (10 tons)</li>
                    <li>• Volume: ~5 cubic yards</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Analysis:</p>
                  <p className="text-sm text-gray-600">
                    <strong>Problem:</strong> Would only fill 1/4 of a 20-yard dumpster<br/>
                    <strong>But:</strong> Exceeds weight limit by 2.5x!<br/>
                    <strong>Best Choice:</strong> 10-yard heavy debris dumpster<br/>
                    <strong>Why:</strong> Special pricing and higher weight limits
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">Example 3: House Cleanout</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Materials:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Furniture (2,000 lbs)</li>
                    <li>• Boxes and clothing (1,000 lbs)</li>
                    <li>• Appliances (800 lbs)</li>
                    <li>• Misc. household (1,200 lbs)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Analysis:</p>
                  <p className="text-sm text-gray-600">
                    <strong>Total Weight:</strong> 5,000 lbs (2.5 tons)<br/>
                    <strong>Volume Needed:</strong> 25-30 cubic yards<br/>
                    <strong>Best Choice:</strong> 30-yard dumpster<br/>
                    <strong>Why:</strong> Volume is the limiting factor here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Material Density Comparison</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="mb-4 text-gray-700">
              Understanding material density helps predict whether weight or volume will be your limiting factor:
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-3 rounded">
                <span className="font-medium">Concrete/Brick</span>
                <div className="flex items-center">
                  <div className="bg-red-500 h-4 rounded" style={{width: '200px'}}></div>
                  <span className="ml-3 text-sm font-bold">2,400 lbs/yard</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded">
                <span className="font-medium">Dirt/Sand</span>
                <div className="flex items-center">
                  <div className="bg-red-400 h-4 rounded" style={{width: '180px'}}></div>
                  <span className="ml-3 text-sm font-bold">2,200 lbs/yard</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded">
                <span className="font-medium">Asphalt Shingles</span>
                <div className="flex items-center">
                  <div className="bg-orange-400 h-4 rounded" style={{width: '140px'}}></div>
                  <span className="ml-3 text-sm font-bold">1,400 lbs/yard</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded">
                <span className="font-medium">Drywall</span>
                <div className="flex items-center">
                  <div className="bg-yellow-400 h-4 rounded" style={{width: '100px'}}></div>
                  <span className="ml-3 text-sm font-bold">500 lbs/yard</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded">
                <span className="font-medium">Mixed Household</span>
                <div className="flex items-center">
                  <div className="bg-green-400 h-4 rounded" style={{width: '60px'}}></div>
                  <span className="ml-3 text-sm font-bold">300 lbs/yard</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded">
                <span className="font-medium">Furniture/Bulky</span>
                <div className="flex items-center">
                  <div className="bg-green-500 h-4 rounded" style={{width: '40px'}}></div>
                  <span className="ml-3 text-sm font-bold">200 lbs/yard</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Choose: Weight vs Volume Decision Tree</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">Step 1: Identify Your Primary Material</h3>
                <p className="text-gray-600">
                  What makes up 50% or more of your debris?
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">Step 2: Check the Density</h3>
                <p className="text-gray-600">
                  <strong>Over 1,000 lbs/cubic yard?</strong> → Weight is your concern<br/>
                  <strong>Under 500 lbs/cubic yard?</strong> → Volume is your concern<br/>
                  <strong>In between?</strong> → Consider both factors
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">Step 3: Calculate Your Needs</h3>
                <div className="bg-gray-50 p-3 rounded mt-2">
                  <p className="text-sm font-mono">
                    Heavy materials: Size down, focus on weight limit<br/>
                    Light materials: Size up, focus on volume capacity<br/>
                    Mixed materials: Balance both, lean toward larger size
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">Step 4: Consider Special Options</h3>
                <p className="text-gray-600">
                  Ask about "heavy debris" pricing for dense materials or "high-volume" options for light debris
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Pro Tips for Each Scenario</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">When Weight is the Limit</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">→</span>
                  <span>Get the smallest dumpster that fits your volume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">→</span>
                  <span>Ask about heavy debris or concrete-only pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">→</span>
                  <span>Consider multiple smaller loads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">→</span>
                  <span>Separate heavy materials for recycling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">→</span>
                  <span>Load evenly to prevent tipping</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">When Volume is the Limit</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Break down furniture and boxes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Cut long items to fit better</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Fill hollow spaces in appliances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Stack flat items like plywood</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Consider compression for soft materials</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-red-500 font-bold mr-3">✗</span>
              <div>
                <h3 className="font-semibold mb-1">Choosing by Volume Alone</h3>
                <p className="text-gray-600 text-sm">
                  "I need 20 yards of space" without considering material weight
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-red-500 font-bold mr-3">✗</span>
              <div>
                <h3 className="font-semibold mb-1">Mixing Heavy and Light Without Planning</h3>
                <p className="text-gray-600 text-sm">
                  Loading concrete first, then finding no weight allowance for anything else
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-red-500 font-bold mr-3">✗</span>
              <div>
                <h3 className="font-semibold mb-1">Not Asking About Weight Limits</h3>
                <p className="text-gray-600 text-sm">
                  Assuming all same-sized dumpsters have the same weight limits
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-red-500 font-bold mr-3">✗</span>
              <div>
                <h3 className="font-semibold mb-1">Ignoring Water Weight</h3>
                <p className="text-gray-600 text-sm">
                  Not covering the dumpster during rain, adding tons of weight
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get the Right Size for Your Materials</h2>
          <p className="text-gray-700 mb-6">
            Our calculator considers both weight and volume for accurate sizing
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Your Needs
          </Link>
        </div>
      </div>
    </main>
  );
}