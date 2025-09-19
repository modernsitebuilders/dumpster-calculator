import Link from 'next/link';

export const metadata = {
  title: "Miami Dumpster Permit Guide 2025: City vs County Jurisdiction & iBuild System",
  description: "Complete guide to Miami dumpster permits. Navigate complex city-county jurisdictions, iBuild Miami digital permits, solid waste surcharges, and municipality-specific rules.",
  openGraph: {
    title: "Miami Dumpster Permit Guide: Complete Requirements",
    description: "Navigate Miami's complex jurisdictional requirements between city and county permit systems.",
    url: "/blog/miami-dumpster-permit-guide",
    type: "article",
  },
  alternates: {
    canonical: "/blog/miami-dumpster-permit-guide"
  }
};

export default function MiamiDumpsterPermitGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' > '}
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            {' > '}
            <span className="text-gray-700">Miami Dumpster Permit Guide</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              Local Permits
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Miami Dumpster Permit Guide: Complex Jurisdictional Navigation
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Miami's unique city-county structure creates overlapping jurisdictions, with separate requirements for City of Miami, Miami-Dade County, and individual municipalities like Miami Beach and Coral Gables.
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
              <h2 className="text-xl font-bold text-blue-900 mb-2">Quick Facts: Miami Permits</h2>
              <ul className="space-y-2 text-blue-900">
                <li><strong>City Permits:</strong> $50-$150 via iBuild Miami</li>
                <li><strong>County Requirements:</strong> General Hauler Permits for commercial</li>
                <li><strong>Processing:</strong> Digital only, no in-person applications</li>
                <li><strong>Insurance:</strong> $1 million liability for commercial haulers</li>
                <li><strong>Surcharges:</strong> Construction waste fees 0.22%-2.5%</li>
                <li><strong>Municipalities:</strong> Each has independent requirements</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Miami's Jurisdictions</h2>
            
            <p className="text-gray-700 mb-4">
              Miami's permit system is uniquely complex due to overlapping city, county, and municipal authorities. Your permit requirements depend on the exact location of your project.
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Jurisdiction</th>
                    <th className="px-4 py-3 text-left font-semibold">Applies To</th>
                    <th className="px-4 py-3 text-left font-semibold">Permit System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">City of Miami</td>
                    <td className="px-4 py-3">Within city limits</td>
                    <td className="px-4 py-3">iBuild Miami</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Miami-Dade County</td>
                    <td className="px-4 py-3">County roads & commercial</td>
                    <td className="px-4 py-3">County permits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Miami Beach</td>
                    <td className="px-4 py-3">Miami Beach only</td>
                    <td className="px-4 py-3">Independent system</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Coral Gables</td>
                    <td className="px-4 py-3">Coral Gables only</td>
                    <td className="px-4 py-3">Independent system</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Other Municipalities</td>
                    <td className="px-4 py-3">Their boundaries</td>
                    <td className="px-4 py-3">Varies by city</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm"><strong>Important:</strong> Always verify which jurisdiction controls your placement location. County roads within city limits may require county permits.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">City of Miami - iBuild System</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold mb-3">iBuild Miami Digital Platform:</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Application:</strong> 100% digital, no in-person option
                  <p className="text-gray-600 text-sm">All permits processed through iBuild Miami portal</p>
                </li>
                <li>
                  <strong>Fees:</strong> $50-$150 based on duration and location
                  <p className="text-gray-600 text-sm">Additional fees for busy commercial districts</p>
                </li>
                <li>
                  <strong>Processing:</strong> 3-5 business days standard
                  <p className="text-gray-600 text-sm">Expedited options available for additional fee</p>
                </li>
                <li>
                  <strong>iPW System:</strong> Public works projects
                  <p className="text-gray-600 text-sm">Separate system for infrastructure work</p>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Miami-Dade County Requirements</h2>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-3">General Hauler Permits:</h3>
              <p className="text-gray-700 mb-3">Commercial waste haulers operating in Miami-Dade must obtain:</p>
              <ul className="space-y-2">
                <li>• General Hauler Permit from County</li>
                <li>• $1 million vehicle liability insurance</li>
                <li>• Specific vehicle identification numbers</li>
                <li>• Annual renewal requirements</li>
                <li>• Compliance with waste disposal regulations</li>
              </ul>
              
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> This applies to dumpster rental companies, not individual customers.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Construction Solid Waste Surcharges</h2>
            
            <p className="text-gray-700 mb-4">
              Miami imposes solid waste surcharges on construction projects based on project type and value:
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Project Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Rate</th>
                    <th className="px-4 py-3 text-left font-semibold">Minimum</th>
                    <th className="px-4 py-3 text-left font-semibold">Maximum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Residential</td>
                    <td className="px-4 py-3">$0.22 per $100</td>
                    <td className="px-4 py-3">$26</td>
                    <td className="px-4 py-3">$600</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Commercial</td>
                    <td className="px-4 py-3">2.5% of cost</td>
                    <td className="px-4 py-3">$57</td>
                    <td className="px-4 py-3">$10,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Demolition</td>
                    <td className="px-4 py-3">Special rates</td>
                    <td className="px-4 py-3">Varies</td>
                    <td className="px-4 py-3">No cap</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm"><strong>Example:</strong> A $100,000 commercial renovation would incur a $2,500 solid waste surcharge in addition to permit fees.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process - City of Miami</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 1: Create iBuild Account</h3>
                <p className="text-gray-600">Register at iBuild Miami with business information</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 2: Select Permit Type</h3>
                <p className="text-gray-600">Choose right-of-way occupancy permit</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 3: Enter Location Details</h3>
                <p className="text-gray-600">Specific address and placement location</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 4: Upload Documents</h3>
                <p className="text-gray-600">Site plan, insurance, business license</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 5: Calculate & Pay Fees</h3>
                <p className="text-gray-600">$50-$150 plus any surcharges</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-1">Step 6: Digital Review</h3>
                <p className="text-gray-600">3-5 business days for approval</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Municipality-Specific Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Miami Beach</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Stricter noise ordinances</li>
                  <li>• Enhanced placement restrictions</li>
                  <li>• Tourist area limitations</li>
                  <li>• Ocean Drive special rules</li>
                  <li>• Higher permit fees</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Coral Gables</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Aesthetic requirements</li>
                  <li>• Historic district rules</li>
                  <li>• Miracle Mile restrictions</li>
                  <li>• Residential protections</li>
                  <li>• Design review possible</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Aventura</h3>
                <ul className="space-y-1 text-sm">
                  <li>• HOA coordination required</li>
                  <li>• Condo association rules</li>
                  <li>• Limited street placement</li>
                  <li>• Separate city permits</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Key Biscayne</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Island-specific rules</li>
                  <li>• Environmental protections</li>
                  <li>• Hurricane season limits</li>
                  <li>• Beach proximity restrictions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance Requirements</h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Commercial Haulers Must Maintain:</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Vehicle Liability:</strong> $1 million minimum
                  <p className="text-gray-600 text-sm">Per occurrence coverage required</p>
                </li>
                <li>
                  <strong>General Liability:</strong> Often required separately
                  <p className="text-gray-600 text-sm">Protects against property damage</p>
                </li>
                <li>
                  <strong>Additional Insured:</strong> City/County as needed
                  <p className="text-gray-600 text-sm">Must be named on policy</p>
                </li>
                <li>
                  <strong>Certificate:</strong> Current and valid
                  <p className="text-gray-600 text-sm">Upload to permit application</p>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Placement Restrictions</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-3">Prohibited Placement Areas:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm">
                  <li>• Fire lanes and hydrants</li>
                  <li>• Emergency vehicle routes</li>
                  <li>• Bus stops and transit areas</li>
                  <li>• Handicapped parking zones</li>
                  <li>• School zones during hours</li>
                </ul>
                <ul className="space-y-1 text-sm">
                  <li>• Beach access points</li>
                  <li>• Tourist pedestrian areas</li>
                  <li>• Historic district streets</li>
                  <li>• Major thoroughfares</li>
                  <li>• Hurricane evacuation routes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">City of Miami - Resilience & Public Works</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Phone: (305) 416-1200</p>
                    <p className="text-gray-600">Portal: iBuild Miami</p>
                    <p className="text-gray-600">Public Works: iPW system</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Miami Riverside Center</p>
                    <p className="text-gray-600">444 SW 2nd Avenue, 8th Floor</p>
                    <p className="text-gray-600">Miami, FL 33130</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Miami-Dade County - Solid Waste</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">General Hauler Permits</p>
                    <p className="text-gray-600">Phone: (305) 514-6666</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Department of Solid Waste</p>
                    <p className="text-gray-600">Management Division</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hurricane Season Considerations</h2>
            
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="font-bold mb-3">June 1 - November 30 Special Rules:</h3>
              <ul className="space-y-2">
                <li>• Dumpsters must be secured or removed before storms</li>
                <li>• 48-hour removal notice may be issued</li>
                <li>• Cannot block evacuation routes</li>
                <li>• Enhanced securing requirements in wind zones</li>
                <li>• Potential permit suspension during warnings</li>
              </ul>
              <p className="text-sm mt-3 text-yellow-900">
                <strong>Tip:</strong> Plan projects outside hurricane season when possible to avoid disruptions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips for Miami Permits</h2>
            <div className="space-y-3">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm"><strong>💡 Jurisdiction Check:</strong> Always verify whether city, county, or municipal rules apply - GPS coordinates can help determine exact jurisdiction.</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm"><strong>🏖️ Beach Cities:</strong> Miami Beach, Key Biscayne, and Surfside have significantly stricter rules - budget extra time and fees.</p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm"><strong>💰 Surcharge Calculator:</strong> Factor construction waste surcharges into project budgets - they can add thousands to large projects.</p>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm"><strong>🌀 Hurricane Planning:</strong> Include contingency plans for dumpster removal during hurricane warnings in your permit application.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/dumpster-permit-requirements-major-cities" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Compare All Major Cities</h3>
                <p className="text-gray-600 text-sm">See how Miami compares to other major US cities</p>
              </Link>
              <Link href="/dumpster-rental-miami" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Miami Dumpster Rental</h3>
                <p className="text-gray-600 text-sm">Find local dumpster rental companies in Miami</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}