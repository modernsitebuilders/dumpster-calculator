import Link from 'next/link';

export const metadata = {
  title: "Flooring Removal Dumpster Size Guide 2025: Carpet, Tile & Hardwood Disposal",
  description: "Choose the right dumpster size for flooring removal. Expert guide for carpet, tile, hardwood, and laminate disposal with square footage calculator.",
  openGraph: {
    title: "Flooring Removal Dumpster Size Guide: Complete Disposal Calculator",
    description: "Get the perfect dumpster size for any flooring removal project. Calculate by material type and square footage.",
    url: "/blog/flooring-removal-dumpster-size",
    type: "article",
  },
  alternates: {
    canonical: "/blog/flooring-removal-dumpster-size"
  }
};

export default function FlooringRemovalDumpsterSizePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' > '}
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            {' > '}
            <span className="text-gray-700">Flooring Removal Dumpster Size</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              House Areas
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Flooring Removal Dumpster Size Guide: Carpet, Tile & Hardwood Disposal
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Removing old flooring generates significant debris that varies by material type. Learn how to calculate the right dumpster size based on square footage, flooring material, and disposal requirements.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Flooring Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Flooring Removal Quick Calculator</h2>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">Carpet</div>
                <div className="text-xs text-gray-500">1 yard per 100 sq ft</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">Hardwood</div>
                <div className="text-xs text-gray-500">1 yard per 80 sq ft</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-red-600">Tile</div>
                <div className="text-xs text-gray-500">1 yard per 60 sq ft</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-600">Laminate</div>
                <div className="text-xs text-gray-500">1 yard per 90 sq ft</div>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dumpster Sizing by Flooring Material</h2>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Carpet Removal</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Volume Characteristics:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>High volume, low weight material</li>
                      <li>Carpet padding significantly increases volume</li>
                      <li>Can be rolled and compressed</li>
                      <li>Includes tack strips and staples</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Sizing Guidelines:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li><strong>500 sq ft:</strong> 10-yard dumpster</li>
                      <li><strong>1,000 sq ft:</strong> 15-yard dumpster</li>
                      <li><strong>1,500 sq ft:</strong> 20-yard dumpster</li>
                      <li><strong>2,000+ sq ft:</strong> 30-yard dumpster</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-green-50 rounded p-3">
                  <p className="text-green-800 text-sm">
                    <strong>Pro Tip:</strong> Cut carpet into 6-foot strips for easier handling and more efficient dumpster loading.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Hardwood Flooring Removal</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Weight Considerations:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Solid hardwood is heavy and dense</li>
                      <li>Engineered hardwood is lighter</li>
                      <li>Includes nails, staples, and adhesive</li>
                      <li>May include subflooring removal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Sizing Guidelines:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li><strong>400 sq ft:</strong> 10-yard dumpster</li>
                      <li><strong>800 sq ft:</strong> 15-yard dumpster</li>
                      <li><strong>1,200 sq ft:</strong> 20-yard dumpster</li>
                      <li><strong>1,600+ sq ft:</strong> 30-yard dumpster</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-blue-50 rounded p-3">
                  <p className="text-blue-800 text-sm">
                    <strong>Weight Alert:</strong> Hardwood can reach weight limits before volume limits. Consider multiple smaller containers for large projects.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Tile and Stone Removal</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Heavy Material Factors:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Ceramic and porcelain tile are very heavy</li>
                      <li>Natural stone is extremely heavy</li>
                      <li>Mortar and grout add significant weight</li>
                      <li>Backer board doubles the volume</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Sizing Guidelines:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li><strong>300 sq ft:</strong> 10-yard dumpster</li>
                      <li><strong>600 sq ft:</strong> 15-yard dumpster</li>
                      <li><strong>900 sq ft:</strong> 20-yard dumpster</li>
                      <li><strong>1,200+ sq ft:</strong> 30-yard or multiple containers</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-red-50 rounded p-3">
                  <p className="text-red-800 text-sm">
                    <strong>Critical:</strong> Tile removal often hits weight limits before volume limits. Consider dedicated heavy debris containers.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-600 mb-3">Laminate and Vinyl Removal</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Material Properties:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Lightweight synthetic materials</li>
                      <li>Easy to break down and stack</li>
                      <li>Minimal underlayment typically</li>
                      <li>Can include transition strips</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Sizing Guidelines:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li><strong>600 sq ft:</strong> 10-yard dumpster</li>
                      <li><strong>1,200 sq ft:</strong> 15-yard dumpster</li>
                      <li><strong>1,800 sq ft:</strong> 20-yard dumpster</li>
                      <li><strong>2,400+ sq ft:</strong> 30-yard dumpster</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-purple-50 rounded p-3">
                  <p className="text-purple-800 text-sm">
                    <strong>Efficiency Tip:</strong> Laminate and vinyl can be efficiently stacked, making them volume-efficient for dumpster loading.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Removal Considerations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Multiple Layer Removal</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-800 mb-2">
                    <strong>Double or triple your estimates</strong> when removing multiple layers:
                  </p>
                  <ul className="list-disc pl-6 text-yellow-700 space-y-1 text-sm">
                    <li>Carpet over hardwood over subflooring</li>
                    <li>Vinyl over linoleum over adhesive</li>
                    <li>Tile over old tile or cement board</li>
                    <li>Laminate over underlayment over subflooring</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Hazardous Material Concerns</h3>
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-red-800 mb-2">
                    <strong>Test before removal</strong> if materials are from before 1980:
                  </p>
                  <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                    <li>Asbestos in vinyl tile and adhesives</li>
                    <li>Lead in paint under flooring</li>
                    <li>Special disposal requirements apply</li>
                    <li>Professional removal may be required</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Subfloor and Underlayment</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-semibold mb-2">When Subfloor Removal Needed:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Water damage or rot</li>
                      <li>Structural modifications</li>
                      <li>Height adjustments</li>
                      <li>Severe adhesive contamination</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-semibold mb-2">Volume Impact:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Plywood subflooring: Add 50% volume</li>
                      <li>OSB subflooring: Add 40% volume</li>
                      <li>Cement board: Add 60% volume and weight</li>
                      <li>Underlayment: Add 20% volume</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Room-by-Room Removal Guide</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-blue-600 mb-2">Kitchen Flooring Removal</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                    <li><strong>Typical size:</strong> 150-300 sq ft</li>
                    <li><strong>Common materials:</strong> Tile, vinyl, hardwood</li>
                    <li><strong>Dumpster need:</strong> 10-yard usually sufficient</li>
                    <li><strong>Special note:</strong> Often includes cabinet toe-kick removal</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-green-600 mb-2">Living Room Removal</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                    <li><strong>Typical size:</strong> 300-500 sq ft</li>
                    <li><strong>Common materials:</strong> Carpet, hardwood, laminate</li>
                    <li><strong>Dumpster need:</strong> 10-15 yard depending on material</li>
                    <li><strong>Special note:</strong> Often includes padding and tack strips</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-purple-600 mb-2">Bathroom Flooring Removal</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                    <li><strong>Typical size:</strong> 50-150 sq ft</li>
                    <li><strong>Common materials:</strong> Tile, vinyl, laminate</li>
                    <li><strong>Dumpster need:</strong> 10-yard usually sufficient</li>
                    <li><strong>Special note:</strong> Heavy tile with cement board backing</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-red-600 mb-2">Whole House Projects</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                    <li><strong>Typical size:</strong> 1,500-3,000 sq ft</li>
                    <li><strong>Mixed materials:</strong> Various flooring types</li>
                    <li><strong>Dumpster need:</strong> 30-40 yard or multiple containers</li>
                    <li><strong>Special note:</strong> Plan for phased removal</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-600 mb-2">Commercial Spaces</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                    <li><strong>Typical size:</strong> Varies widely</li>
                    <li><strong>Common materials:</strong> Commercial carpet, VCT, concrete</li>
                    <li><strong>Dumpster need:</strong> Calculate 1 yard per 80-100 sq ft</li>
                    <li><strong>Special note:</strong> May require multiple containers</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Quick Calculation Formula</h3>
                  <p className="text-blue-700 text-sm mb-2">
                    <strong>Basic Formula:</strong> Square Footage ÷ Material Factor = Dumpster Yards Needed
                  </p>
                  <ul className="list-disc pl-6 text-blue-700 space-y-1 text-sm">
                    <li>Carpet: Divide by 100</li>
                    <li>Hardwood: Divide by 80</li>
                    <li>Tile: Divide by 60</li>
                    <li>Laminate/Vinyl: Divide by 90</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost and Planning Considerations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Typical Rental Costs</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-3">
                    <h4 className="font-medium">10-Yard Dumpster</h4>
                    <p className="text-sm text-gray-600">$250-$450 (3-7 days)</p>
                    <p className="text-xs text-gray-500">Best for single rooms</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h4 className="font-medium">20-Yard Dumpster</h4>
                    <p className="text-sm text-gray-600">$350-$600 (3-7 days)</p>
                    <p className="text-xs text-gray-500">Best for multiple rooms</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-3">
                    <h4 className="font-medium">30-Yard Dumpster</h4>
                    <p className="text-sm text-gray-600">$450-$750 (3-7 days)</p>
                    <p className="text-xs text-gray-500">Best for whole house projects</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Money-Saving Tips</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
                  <li><strong>Accurate measurement:</strong> Measure twice to avoid oversizing</li>
                  <li><strong>Efficient loading:</strong> Break down materials to maximize space</li>
                  <li><strong>Timing coordination:</strong> Schedule delivery when ready to load</li>
                  <li><strong>Material separation:</strong> Keep recyclables separate when possible</li>
                  <li><strong>Weight management:</strong> Mix heavy and light materials</li>
                  <li><strong>Local permits:</strong> Check if street placement requires permits</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Flooring Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/flooring-replacement-dumpster-size" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Flooring Replacement Guide</h3>
                <p className="text-gray-600 text-sm">Complete guide for flooring replacement projects including removal and installation debris</p>
              </Link>
              <Link href="/blog/what-size-dumpster-do-i-need" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Dumpster Size Calculator</h3>
                <p className="text-gray-600 text-sm">Use our calculator to determine the perfect dumpster size for any project</p>
              </Link>
              <Link href="/blog/bathroom-remodel-dumpster-size" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Bathroom Remodel Guide</h3>
                <p className="text-gray-600 text-sm">Bathroom renovation sizing including flooring removal</p>
              </Link>
              <Link href="/blog/kitchen-renovation-dumpster-size" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Kitchen Renovation Guide</h3>
                <p className="text-gray-600 text-sm">Kitchen remodel debris including flooring and cabinet removal</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}