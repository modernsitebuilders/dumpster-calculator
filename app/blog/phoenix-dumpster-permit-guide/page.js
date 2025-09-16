import Link from 'next/link';

export const metadata = {
  title: "Phoenix Dumpster Permit Guide 2025: Street Transportation Requirements",
  description: "Phoenix dumpster permits through Street Transportation Dept. 15-day processing, unique lid requirements, and city rental options. Complete guide.",
  openGraph: {
    title: "Phoenix Dumpster Permit Guide 2025: Requirements & Process",
    description: "Navigate Phoenix's permit system including unique container lid requirements and city rental options.",
    url: "/blog/phoenix-dumpster-permit-guide",
    type: "article",
  },
  alternates: {
    canonical: "/blog/phoenix-dumpster-permit-guide"
  }
};

export default function PhoenixDumpsterPermitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' > '}
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            {' > '}
            <span className="text-gray-700">Phoenix Dumpster Permit Guide</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              Regulations
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Phoenix Dumpster Permit Guide: Street Transportation Requirements
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Phoenix's Street Transportation Department manages dumpster permits through its Revocable Permit system for minor encroachments in public right-of-way. The city maintains less transparent fee schedules but offers unique city rental services.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Phoenix Street Transportation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Phoenix Dumpster Permit Quick Facts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Cost:</span>
                  <span className="text-yellow-600">Contact Required</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Processing Time:</span>
                  <span>15 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Authority:</span>
                  <span>Street Transportation Dept</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Permit Type:</span>
                  <span>Revocable Permit</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Unique Requirement:</span>
                  <span className="text-blue-600 font-bold">Container Lids</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">City Rental:</span>
                  <span className="text-green-600">Available</span>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Phoenix's Unique Requirements</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="font-semibold text-yellow-800 mb-2">Container Lid Requirement</h3>
                <p className="text-yellow-700 mb-2">
                  <strong>Phoenix uniquely requires container lids by city code</strong> (Chapter 27, Section 27-19, H). This is not typically required in other major cities.
                </p>
                <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                  <li>Loads must be properly secured during transport</li>
                  <li>Lids help prevent debris scatter</li>
                  <li>Reduces environmental impact</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h3 className="font-semibold text-green-800 mb-2">City Rental Option</h3>
                <p className="text-green-700 mb-2">
                  Phoenix offers city-operated dumpster rental services:
                </p>
                <ul className="list-disc pl-6 text-green-700 space-y-1">
                  <li><strong>$165 per pickup</strong> base rate</li>
                  <li><strong>$55 per ton</strong> for disposal</li>
                  <li>Alternative to private rental companies</li>
                  <li>May include permit handling</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When Permits Are Required</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Permit Required</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Containers in public right-of-way</li>
                  <li>Blocking sidewalks or streets</li>
                  <li>Construction project dumpsters</li>
                  <li>Commercial waste containers on public property</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-3">No Permit Needed</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Dumpsters entirely on private property</li>
                  <li>Containers not associated with construction</li>
                  <li>Residential driveways (if not blocking access)</li>
                  <li>Private parking lots</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Step 1: Determine Need</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Assess if dumpster will be in public right-of-way</li>
                  <li>Check if associated with permitted construction</li>
                  <li>Review placement location for clearance requirements</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Step 2: Submit Application</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Email str.revocablepermits@phoenix.gov</li>
                  <li>Include supporting documentation</li>
                  <li>Complete exhibit checklists</li>
                  <li>Request current fee schedule</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Step 3: Processing & Approval</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Average 15 business days processing time</li>
                  <li>Department review and approval</li>
                  <li>Receive permit documentation</li>
                  <li>Comply with placement restrictions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Phoenix Street Transportation Contact</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Permit Applications</h3>
                  <p className="text-gray-600 mb-4">str.revocablepermits@phoenix.gov</p>
                  
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-600">602-262-6284</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <p className="text-gray-600 mb-4">6:00 AM - 2:30 PM</p>
                  
                  <h3 className="font-semibold mb-2">Processing Time</h3>
                  <p className="text-gray-600">15 business days average</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Dumpster Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/dumpster-permit-requirements-major-cities" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Compare All Major Cities</h3>
                <p className="text-gray-600 text-sm">See how Phoenix compares to NYC, LA, Chicago, and Houston</p>
              </Link>
              <Link href="/dumpster-rental-phoenix" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Phoenix Dumpster Rental</h3>
                <p className="text-gray-600 text-sm">Find local dumpster rental companies in Phoenix</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}