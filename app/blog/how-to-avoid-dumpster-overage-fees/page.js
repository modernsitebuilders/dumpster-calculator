// app/blog/how-to-avoid-dumpster-overage-fees/page.js
import Link from 'next/link';

export const metadata = {
  title: 'How to Avoid Dumpster Overage Fees | 10 Money-Saving Tips',
  description: 'Learn proven strategies to avoid costly dumpster overage fees. Expert tips on loading, weight management, and choosing the right size.',
  keywords: 'dumpster overage fees, avoid extra charges, dumpster weight limit, save money dumpster rental'
};

export default function AvoidOverageFeesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {' > '}
          <Link href="/blog" className="hover:text-blue-600">Resources</Link>
          {' > '}
          <span className="text-gray-700">Avoid Overage Fees</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Avoid Dumpster Overage Fees
        </h1>
        
        <div className="text-gray-600 mb-8">
          <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
            Cost Savings
          </span>
          <p className="text-xl">
            Overage fees can add hundreds to your rental cost. Follow these proven strategies to stay within limits and save money.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-green-900 mb-2">💰 Potential Savings</h2>
          <p className="text-green-800">
            Average overage fees: <strong>$60-$150 per ton</strong> over limit<br/>
            Typical overages: <strong>1-3 tons</strong> = $60-$450 in extra fees<br/>
            Following these tips can save you <strong>hundreds of dollars</strong>!
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">The 10 Best Ways to Avoid Overage Fees</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Choose the Right Size from the Start</h3>
                  <p className="text-gray-600 mb-3">
                    It's better to get a slightly larger dumpster than risk overages. The extra $50-100 for a bigger size is less than typical overage fees.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="text-sm">
                      <strong>Example:</strong> 20-yard upgrade = +$75 | Overage fee for 2 tons = $120-300
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Know Your Weight Limits</h3>
                  <p className="text-gray-600 mb-3">
                    Every dumpster has a weight limit. Ask for this number upfront and write it down.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 10-yard: Usually 2-3 tons (4,000-6,000 lbs)</li>
                    <li>• 20-yard: Usually 3-4 tons (6,000-8,000 lbs)</li>
                    <li>• 30-yard: Usually 4-5 tons (8,000-10,000 lbs)</li>
                    <li>• 40-yard: Usually 5-6 tons (10,000-12,000 lbs)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Separate Heavy Materials</h3>
                  <p className="text-gray-600 mb-3">
                    Don't mix heavy materials with regular trash. Consider separate disposal for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-red-50 p-3 rounded">
                      <strong className="text-red-700">Heavy Items:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• Concrete/brick</li>
                        <li>• Dirt/soil</li>
                        <li>• Roofing shingles</li>
                        <li>• Tile/stone</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <strong className="text-green-700">Light Items:</strong>
                      <ul className="text-gray-600 mt-1">
                        <li>• Household junk</li>
                        <li>• Cardboard/paper</li>
                        <li>• Plastic/foam</li>
                        <li>• Wood trim</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Load Strategically</h3>
                  <p className="text-gray-600 mb-3">
                    How you load makes a huge difference in fitting more without exceeding weight:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Break down items:</strong> Disassemble furniture, cut lumber to fit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Fill hollow spaces:</strong> Put small items inside appliances, drawers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Layer flat items:</strong> Stack plywood, drywall, doors flat on bottom</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Distribute weight:</strong> Spread heavy items evenly, not all on one side</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Keep Materials Dry</h3>
                  <p className="text-gray-600 mb-3">
                    Water adds significant weight. A rained-on dumpster can easily add 1-2 tons!
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Cover with a tarp when rain is expected</li>
                    <li>• Don't put absorbent materials (carpet, mattresses) in before rain</li>
                    <li>• Request a dumpster with a lid if available</li>
                    <li>• Schedule pickup before major storms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">6</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Donate or Sell Usable Items</h3>
                  <p className="text-gray-600 mb-3">
                    Remove weight AND help others. Many items can be donated instead of trashed:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <ul className="text-gray-600 space-y-1">
                      <li>• Appliances that work</li>
                      <li>• Furniture in decent condition</li>
                      <li>• Building materials (Habitat ReStore)</li>
                      <li>• Electronics</li>
                    </ul>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Clothing and textiles</li>
                      <li>• Books and media</li>
                      <li>• Kitchen items</li>
                      <li>• Tools and equipment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">7</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Recycle Metals Separately</h3>
                  <p className="text-gray-600 mb-3">
                    Metal is heavy and valuable. Take it to a scrap yard instead:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Get paid:</strong> $50-200+ for a pickup truck load</li>
                    <li>• <strong>Save weight:</strong> Easily save 500-2,000 lbs</li>
                    <li>• <strong>Items to scrap:</strong> Appliances, pipes, wire, aluminum siding</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">8</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Don't Fill Above the Rim</h3>
                  <p className="text-gray-600 mb-3">
                    Overloaded dumpsters can't be hauled and incur fees:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Keep everything below the top edge</li>
                    <li>• Nothing should stick out the sides</li>
                    <li>• Driver can refuse pickup if overloaded</li>
                    <li>• You'll pay a trip fee PLUS still need to remove items</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">9</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Estimate Weight Before Loading</h3>
                  <p className="text-gray-600 mb-3">
                    Use these rough estimates to track your weight:
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <ul className="space-y-1">
                      <li>• <strong>Sofa:</strong> 150-250 lbs</li>
                      <li>• <strong>Refrigerator:</strong> 250-300 lbs</li>
                      <li>• <strong>Mattress:</strong> 50-150 lbs</li>
                      <li>• <strong>Carpet (per room):</strong> 100-200 lbs</li>
                      <li>• <strong>Drywall (per sheet):</strong> 50-70 lbs</li>
                      <li>• <strong>Roofing (per square):</strong> 250-350 lbs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">10</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">Ask About "Clean Load" Discounts</h3>
                  <p className="text-gray-600 mb-3">
                    Some companies offer discounts for single-material loads:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Concrete only:</strong> Often 30-50% cheaper</li>
                    <li>• <strong>Clean wood:</strong> May qualify for reduced rates</li>
                    <li>• <strong>Yard waste:</strong> Usually cheapest option</li>
                    <li>• <strong>Metal only:</strong> Some companies haul free</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Red Flags: Signs You're Approaching the Limit</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">⚠️</span>
                <span>Dumpster is only half full but you've loaded all heavy materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">⚠️</span>
                <span>Truck springs are compressed when delivering empty dumpster (heavy container)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">⚠️</span>
                <span>You're disposing of materials from the "heavy" list above</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">⚠️</span>
                <span>Materials got rained on and are now waterlogged</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">⚠️</span>
                <span>Dumpster is less than 75% full but feels "heavy"</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What If You're Already Over?</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-bold mb-2">Option 1: Remove Heavy Items</h3>
              <p className="text-gray-600">
                Take out concrete, dirt, or shingles and dispose separately. Scrap yards or recycling centers often take these materials cheaply.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-bold mb-2">Option 2: Get a Second Dumpster</h3>
              <p className="text-gray-600">
                If you're way over, renting a second smaller dumpster is often cheaper than massive overage fees.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-bold mb-2">Option 3: Negotiate with Company</h3>
              <p className="text-gray-600">
                Call before pickup and explain. Some companies offer one-time courtesy discounts or payment plans.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate the Right Size First Time</h2>
          <p className="text-gray-700 mb-6">
            Avoid overages by choosing the right dumpster size from the start
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}