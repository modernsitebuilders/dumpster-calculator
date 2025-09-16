import Link from 'next/link';

export const metadata = {
  title: "Dumpster Placement Rules 2025: Property vs Street Guidelines & Permits",
  description: "Learn proper dumpster placement rules for private property vs public streets. Avoid permits, fines, and liability issues with our complete guide.",
  openGraph: {
    title: "Dumpster Placement Rules: Complete Property & Street Guide",
    description: "Master dumpster placement to avoid permits, fines, and liability. Private property vs street placement rules explained.",
    url: "/blog/dumpster-placement-rules",
    type: "article",
  },
  alternates: {
    canonical: "/blog/dumpster-placement-rules"
  }
};

export default function DumpsterPlacementRulesPage() {
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
            <span className="text-gray-700">Dumpster Placement Rules</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              Regulations
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dumpster Placement Rules: Property vs Street Guidelines & Permits
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Proper dumpster placement is crucial for avoiding permits, fines, and liability issues. Learn the difference between private property and public street placement, plus essential safety and legal requirements.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>6 min read</span>
              <span>•</span>
              <span>Legal Guidelines</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Quick Reference */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Placement Quick Reference</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Private Property (Preferred)</h3>
                <ul className="list-disc pl-6 text-green-700 space-y-1 text-sm">
                  <li>No permits typically required</li>
                  <li>Your responsibility and liability</li>
                  <li>More flexible timing</li>
                  <li>Lower overall cost</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Public Street (Restricted)</h3>
                <ul className="list-disc pl-6 text-yellow-700 space-y-1 text-sm">
                  <li>Permits almost always required</li>
                  <li>Municipal liability rules</li>
                  <li>Time and location restrictions</li>
                  <li>Additional fees and insurance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Private Property Placement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Private Property Placement Guidelines</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ideal Private Property Locations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-600 mb-2">Best Options:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li><strong>Driveway:</strong> Most common and accessible</li>
                      <li><strong>Side yard:</strong> If accessible to delivery truck</li>
                      <li><strong>Backyard:</strong> If truck can reach (rare)</li>
                      <li><strong>Private parking area:</strong> Commercial properties</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 mb-2">Avoid These Areas:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Septic system or drain field</li>
                      <li>Underground utilities</li>
                      <li>Soft ground that trucks can't support</li>
                      <li>Areas with low-hanging wires or branches</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Property Protection Requirements</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-3">Protect your property from damage during delivery and pickup:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Plywood protection:</strong> Place boards under dumpster to protect asphalt or concrete</li>
                    <li><strong>Clear the path:</strong> Remove cars, outdoor furniture, and obstacles</li>
                    <li><strong>Mark underground utilities:</strong> Call 811 before placement if uncertain</li>
                    <li><strong>Check overhead clearance:</strong> Ensure 23+ feet of vertical clearance</li>
                    <li><strong>Firm, level ground:</strong> Avoid soft soil that could cause sinking</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">HOA and Neighbor Considerations</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-800 mb-2">Even on your own property, consider these factors:</p>
                  <ul className="list-disc pl-6 text-blue-700 space-y-1 text-sm">
                    <li><strong>HOA rules:</strong> Check covenants for dumpster restrictions</li>
                    <li><strong>Neighbor relations:</strong> Position away from neighbor windows if possible</li>
                    <li><strong>Local ordinances:</strong> Some cities restrict visible dumpsters</li>
                    <li><strong>Noise considerations:</strong> Schedule delivery/pickup during reasonable hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Public Street Placement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Public Street Placement Rules</h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
              <h3 className="font-semibold text-red-800 mb-2">Permit Requirements</h3>
              <p className="text-red-700 mb-3">
                <strong>Nearly all municipalities require permits for dumpsters on public property.</strong> Placing without permits can result in fines, towing, and liability issues.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-red-800 mb-2">Typical Permit Costs:</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                    <li>Small cities: $25-$100</li>
                    <li>Major cities: $50-$500+</li>
                    <li>Processing time: 1-15 days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-800 mb-2">Additional Requirements:</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                    <li>Insurance certificates</li>
                    <li>Reflective markings/cones</li>
                    <li>Time limitations</li>
                    <li>Traffic impact studies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Street Placement Safety Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Mandatory Safety Measures:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li><strong>Reflective tape:</strong> On all visible sides</li>
                      <li><strong>Traffic cones:</strong> Around the container</li>
                      <li><strong>Warning signs:</strong> If required by permit</li>
                      <li><strong>Proper lighting:</strong> For evening/night visibility</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Distance Requirements:</h4>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>15+ feet from fire hydrants</li>
                      <li>10+ feet from driveways</li>
                      <li>5+ feet from mailboxes</li>
                      <li>Clear sight lines for traffic</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Street Placement Restrictions</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Time Restrictions</h4>
                    <ul className="list-disc pl-6 text-yellow-700 space-y-1 text-sm">
                      <li>No placement during rush hours in some cities</li>
                      <li>Maximum duration limits (typically 7-14 days)</li>
                      <li>No weekend/holiday placement in business districts</li>
                      <li>Early morning delivery restrictions in residential areas</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Prohibited Locations</h4>
                    <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                      <li>Bus stops and transit zones</li>
                      <li>Handicapped parking spaces</li>
                      <li>Fire lanes and emergency access routes</li>
                      <li>Intersections and crosswalks</li>
                      <li>Loading zones and taxi stands</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Liability and Insurance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability and Insurance Considerations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Private Property Liability</h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800 mb-3">
                    <strong>Generally lower liability risk,</strong> but you're responsible for:
                  </p>
                  <ul className="list-disc pl-6 text-green-700 space-y-1">
                    <li>Damage to your property (driveways, landscaping)</li>
                    <li>Injuries on your property related to the dumpster</li>
                    <li>Ensuring proper access for delivery trucks</li>
                    <li>Compliance with local property use regulations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Public Street Liability</h3>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-red-800 mb-3">
                    <strong>Higher liability exposure</strong> includes responsibility for:
                  </p>
                  <ul className="list-disc pl-6 text-red-700 space-y-1">
                    <li>Traffic accidents involving the dumpster</li>
                    <li>Pedestrian injuries around the container</li>
                    <li>Property damage to vehicles or public infrastructure</li>
                    <li>Violations of permit conditions and safety requirements</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Insurance Requirements</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Placement Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Insurance Needed</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Typical Coverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Private Property</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Usually Included</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Rental company liability</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Public Street</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Often Required</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$1M+ general liability</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Commercial Projects</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Usually Required</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$2M+ commercial coverage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dumpster Placement Best Practices</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Planning and Preparation</h3>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li><strong>Site assessment:</strong> Walk the delivery route and placement area</li>
                  <li><strong>Utility marking:</strong> Call 811 to mark underground utilities (free service)</li>
                  <li><strong>Permit research:</strong> Check local requirements well in advance</li>
                  <li><strong>Neighbor notification:</strong> Inform neighbors of delivery timing</li>
                  <li><strong>Access preparation:</strong> Clear obstacles and ensure truck access</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Delivery Day Checklist</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <ul className="list-disc pl-6 text-blue-700 space-y-2">
                    <li><strong>Be present:</strong> Guide the driver to optimal placement</li>
                    <li><strong>Document condition:</strong> Take photos before and after delivery</li>
                    <li><strong>Verify placement:</strong> Ensure container meets all requirements</li>
                    <li><strong>Understand pickup process:</strong> Confirm pickup scheduling and access needs</li>
                    <li><strong>Review restrictions:</strong> Confirm prohibited items and weight limits</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Placement Mistakes to Avoid</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Avoid These Errors:</h4>
                    <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                      <li>Blocking emergency vehicle access</li>
                      <li>Placing over septic systems</li>
                      <li>Ignoring overhead power lines</li>
                      <li>Assuming permits aren't needed</li>
                      <li>Placing on unstable ground</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Cost-Adding Mistakes:</h4>
                    <ul className="list-disc pl-6 text-yellow-700 space-y-1 text-sm">
                      <li>Property damage from poor placement</li>
                      <li>Permit violations and fines</li>
                      <li>Extra pickup fees for access issues</li>
                      <li>Emergency relocation costs</li>
                      <li>Liability claims from accidents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Reference Guide */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Decision Guide</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Choose Your Placement Strategy:</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-green-700 mb-1">Private Property (Recommended)</h4>
                  <p className="text-gray-600 text-sm">
                    <strong>Choose when:</strong> You have adequate space, truck access, and firm ground. Saves money and avoids permits.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-medium text-yellow-700 mb-1">Public Street (When Necessary)</h4>
                  <p className="text-gray-600 text-sm">
                    <strong>Choose when:</strong> No private space available or access impossible. Plan for permits, safety measures, and additional costs.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-blue-700 mb-1">Alternative Solutions</h4>
                  <p className="text-gray-600 text-sm">
                    <strong>Consider:</strong> Smaller dumpster on property, multiple containers, or temporary access improvements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Dumpster Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/dumpster-permit-requirements-major-cities" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Permit Requirements by City</h3>
                <p className="text-gray-600 text-sm">Complete guide to permit costs and requirements in major US cities</p>
              </Link>
              <Link href="/blog/dumpster-rental-cost-guide" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Dumpster Rental Costs</h3>
                <p className="text-gray-600 text-sm">Understanding pricing factors including permits and placement fees</p>
              </Link>
              <Link href="/blog/what-size-dumpster-do-i-need" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Dumpster Size Calculator</h3>
                <p className="text-gray-600 text-sm">Use our calculator to determine the perfect dumpster size for your space</p>
              </Link>
              <Link href="/blog/prohibited-items-dumpster" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Prohibited Items Guide</h3>
                <p className="text-gray-600 text-sm">Learn what cannot go in dumpsters and alternative disposal methods</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}