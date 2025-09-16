import Link from 'next/link';

export const metadata = {
  title: "Construction Debris Dumpster Size Guide 2025: 20-Yard vs 30-Yard Calculator",
  description: "Choose the right dumpster size for construction debris. Calculate based on project type, material weight, and disposal requirements. Expert contractor guide.",
  openGraph: {
    title: "Construction Debris Dumpster Size Guide: Expert Calculator",
    description: "Get the perfect dumpster size for construction and demolition projects. Avoid weight limits and save money.",
    url: "/blog/construction-debris-dumpster-size",
    type: "article",
  },
  alternates: {
    canonical: "/blog/construction-debris-dumpster-size"
  }
};

export default function ConstructionDebrisDumpsterSizePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' > '}
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            {' > '}
            <span className="text-gray-700">Construction Debris Dumpster Size</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              Dumpster Sizes
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Construction Debris Dumpster Size Guide: 20-Yard vs 30-Yard Calculator
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Construction and demolition projects generate heavy, bulky debris that requires careful dumpster sizing. Learn how to calculate the right size based on project type, material weight, and disposal requirements.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Contractor Tips</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Quick Size Guide */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Construction Debris Dumpster Quick Guide</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">20 Yard</div>
                <div className="text-sm text-gray-600 mb-2">Small Projects</div>
                <div className="text-xs text-gray-500">Bathroom, flooring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">30 Yard</div>
                <div className="text-sm text-gray-600 mb-2">Medium Projects</div>
                <div className="text-xs text-gray-500">Room additions, roofing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">40 Yard</div>
                <div className="text-sm text-gray-600 mb-2">Large Projects</div>
                <div className="text-xs text-gray-500">Whole house, commercial</div>
              </div>
            </div>
          </div>

          {/* Weight Considerations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Weight Considerations for Construction Debris</h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <h3 className="font-semibold text-red-800 mb-2">Weight Limits Are Critical</h3>
              <p className="text-red-700 mb-3">
                Construction debris is much heavier than household waste. Exceeding weight limits results in expensive overage fees, sometimes doubling your rental cost.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-red-800 mb-2">Typical Weight Limits:</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                    <li>20-yard: 2-4 tons</li>
                    <li>30-yard: 3-5 tons</li>
                    <li>40-yard: 4-6 tons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-800 mb-2">Heavy Materials:</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                    <li>Concrete and asphalt</li>
                    <li>Drywall and plaster</li>
                    <li>Roofing materials</li>
                    <li>Brick and stone</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Material Weight Guide</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Material Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Weight Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sizing Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Wood framing, drywall</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Moderate</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Standard sizing applies</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Roofing shingles</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600">Heavy</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Size up or use multiple containers</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Concrete, brick, stone</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">Very Heavy</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Dedicated container recommended</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Insulation, packaging</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Light</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Volume fills before weight</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Project Type Sizing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dumpster Sizing by Construction Project Type</h2>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-3">20-Yard Dumpster: Small Construction Projects</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Ideal Projects:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Bathroom renovations</li>
                      <li>Kitchen remodels (without cabinets)</li>
                      <li>Flooring replacement (1-2 rooms)</li>
                      <li>Window replacement projects</li>
                      <li>Small room additions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Debris Capacity:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>15-20 squares of drywall</li>
                      <li>500-800 sq ft of flooring</li>
                      <li>1-2 bathroom gut renovations</li>
                      <li>Typical weight: 2-4 tons</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">30-Yard Dumpster: Medium Construction Projects</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Ideal Projects:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Room additions (500-1000 sq ft)</li>
                      <li>Roofing projects (average home)</li>
                      <li>Kitchen gut renovations</li>
                      <li>Basement finishing</li>
                      <li>Deck/patio construction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Debris Capacity:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>25-35 squares of roofing</li>
                      <li>1000-1500 sq ft of flooring</li>
                      <li>3-4 room renovations</li>
                      <li>Typical weight: 3-5 tons</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-3">40-Yard Dumpster: Large Construction Projects</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Ideal Projects:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Whole house renovations</li>
                      <li>Large commercial projects</li>
                      <li>Multi-story additions</li>
                      <li>Complete roof replacements (large homes)</li>
                      <li>Demolition projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Debris Capacity:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>40+ squares of roofing</li>
                      <li>2000+ sq ft of flooring</li>
                      <li>5+ room renovations</li>
                      <li>Typical weight: 4-6 tons</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Special Material Considerations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Material Disposal Considerations</h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Prohibited Items</h3>
                <p className="text-red-700 text-sm mb-2">Most construction dumpsters cannot accept:</p>
                <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                  <li>Hazardous materials (paint, solvents, asbestos)</li>
                  <li>Electronics and appliances</li>
                  <li>Tires and automotive fluids</li>
                  <li>Propane tanks and batteries</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Heavy Material Strategy</h3>
                <p className="text-yellow-700 text-sm mb-2">For concrete, brick, or roofing debris:</p>
                <ul className="list-disc pl-6 text-yellow-700 space-y-1 text-sm">
                  <li>Consider a dedicated heavy debris container</li>
                  <li>Mix heavy materials with lighter debris</li>
                  <li>Use multiple smaller containers instead of one large</li>
                  <li>Load heavy items first, lighter items on top</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-green-800 mb-2">Recyclable Materials</h3>
                <p className="text-green-700 text-sm mb-2">Separate these for potential cost savings:</p>
                <ul className="list-disc pl-6 text-green-700 space-y-1 text-sm">
                  <li>Clean wood and lumber</li>
                  <li>Metal components and fixtures</li>
                  <li>Concrete and masonry (clean)</li>
                  <li>Cardboard packaging materials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cost Optimization */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Optimization for Construction Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-3">Money-Saving Strategies</h3>
                <ul className="list-disc pl-6 text-green-700 space-y-2 text-sm">
                  <li><strong>Right-size your container:</strong> Avoid paying for unused capacity</li>
                  <li><strong>Plan your timeline:</strong> Coordinate rental period with project phases</li>
                  <li><strong>Load efficiently:</strong> Break down large items, fill gaps</li>
                  <li><strong>Separate materials:</strong> Keep recyclables separate when possible</li>
                  <li><strong>Schedule strategically:</strong> Avoid peak construction season if possible</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Typical Rental Costs</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-green-600">20-Yard Construction</h4>
                    <p className="text-sm text-gray-600">$400-$650 (1 week rental)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600">30-Yard Construction</h4>
                    <p className="text-sm text-gray-600">$500-$750 (1 week rental)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600">40-Yard Construction</h4>
                    <p className="text-sm text-gray-600">$600-$900 (1 week rental)</p>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-medium mb-2">Additional costs may include:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Permit fees ($50-$200)</li>
                    <li>Overage charges ($75-$100/ton)</li>
                    <li>Extended rental ($15-$25/day)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Project Planning */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Construction Dumpster Planning Checklist</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Pre-Project Planning</h3>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li><strong>Calculate debris volume:</strong> Estimate square footage and material types</li>
                  <li><strong>Check local permits:</strong> Many areas require permits for construction dumpsters</li>
                  <li><strong>Plan placement location:</strong> Ensure access for delivery truck and pickup</li>
                  <li><strong>Coordinate with project timeline:</strong> Schedule delivery to match demolition phases</li>
                  <li><strong>Review material restrictions:</strong> Confirm what can and cannot go in container</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">During Your Project</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Load strategically:</strong> Heavy items on bottom, break down large pieces</li>
                  <li><strong>Monitor weight:</strong> Stop loading if approaching weight limits</li>
                  <li><strong>Keep materials dry:</strong> Cover container if rain is expected</li>
                  <li><strong>Maintain safe access:</strong> Keep walkways clear around container</li>
                  <li><strong>Document project:</strong> Take photos for insurance or permit purposes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Construction Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/what-size-dumpster-do-i-need" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Dumpster Size Calculator</h3>
                <p className="text-gray-600 text-sm">Use our calculator to determine the perfect dumpster size for any project</p>
              </Link>
              <Link href="/blog/30-yard-dumpster-guide" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">30-Yard Dumpster Guide</h3>
                <p className="text-gray-600 text-sm">Complete guide to 30-yard dumpsters for medium construction projects</p>
              </Link>
              <Link href="/blog/roof-replacement-dumpster-size" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Roof Replacement Guide</h3>
                <p className="text-gray-600 text-sm">Specific sizing for roofing projects and shingle disposal</p>
              </Link>
              <Link href="/blog/dumpster-rental-cost-guide" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Dumpster Rental Costs</h3>
                <p className="text-gray-600 text-sm">Understanding pricing factors and how to save money on rentals</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}