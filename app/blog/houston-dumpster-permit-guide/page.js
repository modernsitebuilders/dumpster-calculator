import Link from 'next/link';

export const metadata = {
  title: "Houston Dumpster Permit 2025: Dual System for Public vs Private Property",
  description: "Houston's unique dual permit system: Combustible Waste permits for private property ($187-$783) + Mobility permits for public placement. Complete guide.",
  openGraph: {
    title: "Houston Dumpster Permit Guide 2025: Most Complex System in US",
    description: "Navigate Houston's complex dual permit system for dumpsters on private vs public property.",
    url: "/blog/houston-dumpster-permit-guide",
    type: "article",
  },
  alternates: {
    canonical: "/blog/houston-dumpster-permit-guide"
  }
};

export default function HoustonDumpsterPermitPage() {
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
            <span className="text-gray-700">Houston Dumpster Permit Guide</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              Regulations
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Houston Dumpster Permit Guide: Dual System for Public vs Private Property
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Houston operates the most complex permit structure among major US cities, requiring different permits for public versus private property placement. Commercial properties need permits for containers exceeding 50 cubic feet.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Houston Public Works</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Unique System Alert */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">Houston's Unique Dual System</h2>
            <p className="text-yellow-700">
              <strong>Unlike other major cities,</strong> Houston requires separate permits for dumpsters on private property (commercial) versus public right-of-way placement. This is the only major US city with mandatory private property permits.
            </p>
          </div>

          {/* Quick Decision Tree */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Permit Do You Need?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Private Property Permits</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="font-medium text-blue-800">Combustible Waste Storage Permit</p>
                    <p className="text-blue-700 text-sm">Required for containers greater than 50 cubic feet on commercial property</p>
                  </div>
                  <div className="text-sm space-y-1">
                    <p><strong>Cost:</strong> $187.96 - $783.27</p>
                    <p><strong>Duration:</strong> 1-3 years</p>
                    <p><strong>Authority:</strong> Solid Waste Management Dept</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Public Property Permits</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded p-3">
                    <p className="font-medium text-green-800">Mobility Permit</p>
                    <p className="text-green-700 text-sm">Required for containers in public right-of-way</p>
                  </div>
                  <div className="text-sm space-y-1">
                    <p><strong>Cost:</strong> Variable (contact required)</p>
                    <p><strong>Duration:</strong> Project-specific</p>
                    <p><strong>Authority:</strong> Houston Public Works</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Private Property Requirements */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Private Property: Combustible Waste Storage Permits</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">When Required</h3>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <ul className="list-disc pl-6 text-red-700 space-y-1">
                  <li><strong>All commercial properties</strong> with dumpsters exceeding 50 cubic feet</li>
                  <li><strong>Any commercial dumpster</strong> on-site more than 60 days regardless of size</li>
                  <li><strong>Multiple dumpsters</strong> of any size on commercial property</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Fee Structure</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Permit Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Single Dumpster</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Annual</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$187.96</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Multiple Dumpsters</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Annual</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$391.82</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Multiple Dumpsters</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">3 Years</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$783.27</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Requirements</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Notarized deed restriction affidavit</strong></li>
                <li>Compliance documentation</li>
                <li>Property ownership verification</li>
                <li>Site plan showing dumpster placement</li>
                <li>Screening plan (if adjacent to streets/residential)</li>
              </ul>
            </div>
          </section>

          {/* Public Property Requirements */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Public Property: Mobility Permits</h2>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Application Process</h3>
              <ol className="list-decimal pl-6 text-blue-700 space-y-1">
                <li>Apply online at geopermit.houstontx.gov/traffic/</li>
                <li>Submit detailed placement plans</li>
                <li>Pay applicable fees (variable by project)</li>
                <li>Receive approval before placement</li>
              </ol>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Typical Requirements</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Traffic control plan if needed</li>
                  <li>Safety markings and barriers</li>
                  <li>Proper insurance documentation</li>
                  <li>Restoration bond for street damage</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Screening Requirements */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mandatory Screening Requirements</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Houston enforces <strong>screening requirements when dumpsters are adjacent to streets or residential properties</strong>. This applies to both private and public property placements.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Acceptable Screening</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Solid fencing or walls</li>
                    <li>Landscaping barriers</li>
                    <li>Architectural screening</li>
                    <li>Temporary construction barriers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Height Requirements</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Minimum height to obscure container</li>
                    <li>Maximum height per zoning requirements</li>
                    <li>Compliance with sight line regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Important Restrictions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Restrictions & Limitations</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">Non-Transferable Permits</h3>
                <p className="text-red-700">
                  Permits are <strong>non-transferable between property owners</strong> and <strong>non-refundable once issued</strong>. New owners must apply for new permits.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Appeals Process</h3>
                <p className="text-yellow-700">
                  Appeals must be filed within <strong>30 days with bonds equaling twice the penalty amount</strong>. Administrative hearings required for Chapter 10 violations.
                </p>
              </div>
            </div>
          </section>

          {/* Penalties */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Penalties and Enforcement</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="font-semibold text-red-800 mb-2">Violation Penalties</h3>
              <div className="space-y-2 text-red-700">
                <p><strong>$50 - $2,000</strong> depending on violation type and location</p>
                <p><strong>Administrative hearings</strong> required for Chapter 10 violations</p>
                <p><strong>Daily accumulating fines</strong> for ongoing violations</p>
                <p><strong>Permit revocation</strong> possible for serious violations</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Houston Department Contacts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Private Property Permits</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Department:</strong> Solid Waste Management</p>
                  <p><strong>Phone:</strong> 832-393-0459</p>
                  <p><strong>Mail:</strong><br/>
                  P.O. Box 1562<br/>
                  Houston, TX 77251</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Public Property Permits</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Department:</strong> Houston Public Works</p>
                  <p><strong>Online:</strong> geopermit.houstontx.gov/traffic/</p>
                  <p><strong>Type:</strong> Mobility Permits</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Dumpster Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/dumpster-permit-requirements-major-cities" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Compare All Major Cities</h3>
                <p className="text-gray-600 text-sm">See how Houston's complex system compares to other cities</p>
              </Link>
              <Link href="/dumpster-rental-houston" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Houston Dumpster Rental</h3>
                <p className="text-gray-600 text-sm">Find local dumpster rental companies in Houston</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}