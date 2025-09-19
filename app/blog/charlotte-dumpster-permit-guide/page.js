import Link from 'next/link';

export const metadata = {
  title: "Charlotte Dumpster Permit Guide 2025: CDOT Requirements & 25-Foot Setbacks",
  description: "Complete guide to Charlotte dumpster permits. Learn about Right-of-Way Use Permits, strict 25-foot setbacks, Cityworks Portal applications, and neighborhood restrictions.",
  openGraph: {
    title: "Charlotte Dumpster Permit Guide: Complete Requirements",
    description: "Navigate Charlotte's strict setback requirements and neighborhood-specific regulations through CDOT's digital permit system.",
    url: "/blog/charlotte-dumpster-permit-guide",
    type: "article",
  },
  alternates: {
    canonical: "/blog/charlotte-dumpster-permit-guide"
  }
};

export default function CharlotteDumpsterPermitGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' > '}
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            {' > '}
            <span className="text-gray-700">Charlotte Dumpster Permit Guide</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              Local Permits
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Charlotte Dumpster Permit Guide: Strict Neighborhood Setbacks
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Charlotte enforces some of the strictest setback requirements in the nation, with 25-foot minimum distances from residential areas and comprehensive neighborhood-specific rules.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>7 min read</span>
              <span>Updated: September 2025</span>
              <span>By: Permit Expert Team</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-900 mb-2">Quick Facts: Charlotte Permits</h2>
              <ul className="space-y-2 text-blue-900">
                <li><strong>Permit Type:</strong> Right-of-Way Use Permit</li>
                <li><strong>Processing Time:</strong> 3-7 business days</li>
                <li><strong>Maximum Duration:</strong> 30 days (extensions available)</li>
                <li><strong>Key Requirement:</strong> 25-foot setback from residential</li>
                <li><strong>Application:</strong> CDOT Cityworks Portal</li>
                <li><strong>Fees:</strong> Based on annual User Fee Schedule</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Charlotte's Unified Development Ordinance</h2>
            
            <p className="text-gray-700 mb-4">
              Charlotte's dumpster regulations fall under the Unified Development Ordinance (UDO), which establishes some of the most restrictive setback requirements in the country. Understanding these requirements is crucial for compliance.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-red-900 mb-2">Critical Setback Requirements</h3>
              <ul className="space-y-2">
                <li>🏠 <strong>25 feet</strong> minimum from residential neighborhoods</li>
                <li>🛣️ <strong>25 feet</strong> minimum from public streets</li>
                <li>🚦 <strong>30-72 inches</strong> height restrictions at intersections</li>
                <li>📐 No placement in sight triangles</li>
                <li>🚶 Clear pedestrian pathways required</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm"><strong>Note:</strong> These setbacks significantly limit placement options in dense areas. Many properties cannot accommodate compliant placement.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Neighborhood Place Types</h2>
            
            <p className="text-gray-700 mb-4">
              Charlotte categorizes areas into different "Place Types" with varying regulations:
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Place Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Restrictions</th>
                    <th className="px-4 py-3 text-left font-semibold">Special Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Neighborhood 1</td>
                    <td className="px-4 py-3">Most restrictive</td>
                    <td className="px-4 py-3">Enhanced setbacks, limited hours</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Neighborhood 2</td>
                    <td className="px-4 py-3">Highly restrictive</td>
                    <td className="px-4 py-3">Standard 25-foot setbacks apply</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Community Activity Center</td>
                    <td className="px-4 py-3">Moderate</td>
                    <td className="px-4 py-3">Business hour restrictions</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Regional Activity Center</td>
                    <td className="px-4 py-3">Least restrictive</td>
                    <td className="px-4 py-3">Standard requirements only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 1: Access Cityworks Portal</h3>
                <p className="text-gray-600">Visit CDOT's Cityworks Public Portal and create account</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 2: Select Right-of-Way Use Permit</h3>
                <p className="text-gray-600">Choose appropriate permit type for dumpster placement</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 3: Complete Application</h3>
                <p className="text-gray-600">Provide placement address, duration (max 30 days), dimensions</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 4: Submit Site Plan</h3>
                <p className="text-gray-600">Upload detailed site plan showing setback compliance</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 5: Provide Insurance</h3>
                <p className="text-gray-600">Submit proof of liability insurance</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 6: Pay Fees</h3>
                <p className="text-gray-600">Pay according to current User Fee Schedule</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 7: Await Review</h3>
                <p className="text-gray-600">3-7 business days standard, complex cases take longer</p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm"><strong>Tip:</strong> Site plans must clearly demonstrate all setback compliance. Include measurements from property lines, streets, and neighboring structures.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Documentation</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-3">Essential Documents for Application:</h3>
              <ul className="space-y-2">
                <li>✓ Detailed site plan with measurements</li>
                <li>✓ Property owner authorization (if applicable)</li>
                <li>✓ Proof of liability insurance</li>
                <li>✓ Duration and purpose statement</li>
                <li>✓ Traffic control plan (for busy streets)</li>
                <li>✓ Company registration/license</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Placement Restrictions</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-bold text-red-900 mb-2">Prohibited Areas</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Within sight triangles</li>
                  <li>• Blocking fire lanes</li>
                  <li>• On sidewalks (unless no alternative)</li>
                  <li>• Near school zones</li>
                  <li>• Historic district streets</li>
                  <li>• Emergency vehicle routes</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-yellow-900 mb-2">Special Considerations</h3>
                <ul className="space-y-1 text-sm">
                  <li>• HOA restrictions may apply</li>
                  <li>• Uptown has additional rules</li>
                  <li>• South End restrictions vary</li>
                  <li>• Plaza Midwood special zones</li>
                  <li>• NoDa arts district limits</li>
                  <li>• Myers Park regulations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Duration & Extensions</h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Permit Duration Guidelines:</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Standard Permit:</strong> Up to 30 days
                  <p className="text-gray-600 text-sm">Most common for residential and small commercial projects</p>
                </li>
                <li>
                  <strong>Extensions:</strong> Available through reapplication
                  <p className="text-gray-600 text-sm">Must apply before current permit expires</p>
                </li>
                <li>
                  <strong>Long-term Projects:</strong> Multiple permits required
                  <p className="text-gray-600 text-sm">Construction projects may need sequential permits</p>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Requirements</h2>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold mb-2">Mandatory Safety Features</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <ul className="space-y-2">
                  <li>✓ Reflective markers on corners</li>
                  <li>✓ Company identification visible</li>
                  <li>✓ Permit number displayed</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Warning lights if needed</li>
                  <li>✓ Traffic cones for street placement</li>
                  <li>✓ Maintain sight lines</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <p className="text-gray-700 mb-3">
                Charlotte's fees are determined by the annual User Fee Schedule, which is updated each fiscal year. Fees typically include:
              </p>
              <ul className="space-y-2">
                <li>• Application processing fee</li>
                <li>• Daily right-of-way use charge</li>
                <li>• Inspection fees (if applicable)</li>
                <li>• Extension fees for renewals</li>
              </ul>
              <p className="text-sm mt-3 text-yellow-900">
                <strong>Note:</strong> Contact CDOT for current fee schedule as rates change annually.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Charlotte Department of Transportation (CDOT)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Phone: (704) 336-4119</p>
                  <p className="text-gray-600">Portal: CDOT Cityworks</p>
                  <p className="text-gray-600">Email: Via Cityworks Portal</p>
                </div>
                <div>
                  <p className="text-gray-600">Address: 600 East 4th Street</p>
                  <p className="text-gray-600">Charlotte, NC 28202</p>
                  <p className="text-gray-600">Hours: Mon-Fri 8am-5pm</p>
                </div>
              </div>
              <p className="text-sm mt-3 text-gray-600">
                Located in the Charlotte-Mecklenburg Government Center
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips for Charlotte Permits</h2>
            <div className="space-y-3">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm"><strong>💡 Setback Strategy:</strong> Measure twice, apply once. Charlotte's 25-foot setbacks are strictly enforced and non-negotiable.</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm"><strong>📍 Place Type Check:</strong> Verify your property's Place Type designation before applying - requirements vary significantly.</p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm"><strong>📋 Site Plan Detail:</strong> Include comprehensive measurements and neighbor notifications to expedite approval.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/dumpster-permit-requirements-major-cities" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Compare All Major Cities</h3>
                <p className="text-gray-600 text-sm">See how Charlotte compares to other major US cities</p>
              </Link>
              <Link href="/dumpster-rental-charlotte" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Charlotte Dumpster Rental</h3>
                <p className="text-gray-600 text-sm">Find local dumpster rental companies in Charlotte</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}