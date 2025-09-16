import Link from 'next/link';

export const metadata = {
  title: "Chicago Dumpster Permit 2025: $1M Insurance Required, Class A/B Sizes",
  description: "Chicago dumpster permits require $1 million insurance + $5,000 credit. Learn Class A/B requirements, $21-$488 fees, and avoid $3,000 penalties.",
  openGraph: {
    title: "Chicago Dumpster Permit Guide 2025: Insurance & Requirements",
    description: "Complete guide to Chicago's complex dumpster permit system including insurance requirements and Class A/B classifications.",
    url: "/blog/chicago-dumpster-permit-guide",
    type: "article",
  },
  alternates: {
    canonical: "/blog/chicago-dumpster-permit-guide"
  }
};

export default function ChicagoDumpsterPermitPage() {
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
            <span className="text-gray-700">Chicago Dumpster Permit Guide</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              Regulations
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Chicago Dumpster Permit Guide: $1M Insurance Required, Class A/B Sizes
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Chicago operates the most sophisticated permit system among major cities, requiring $1 million insurance, $5,000 credit, and dividing containers into Class A (30 yards or less) and Class B (greater than 30 yards) categories.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>CDOT Requirements</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Quick Facts */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Chicago Dumpster Permit Quick Facts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Application Fee:</span>
                  <span>$21.51 - $88.17</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Usage Fee:</span>
                  <span>$50 - $400</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Insurance Required:</span>
                  <span className="text-red-600 font-bold">$1 Million</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Letter of Credit:</span>
                  <span className="text-red-600 font-bold">$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>3 or 30 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Max Penalty:</span>
                  <span className="text-red-600 font-bold">$3,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Class A vs Class B */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Class A vs Class B Container Classifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Class A Containers</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Size:</span>
                    <span>30 cubic yards or less</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Typical Uses:</span>
                    <span>Residential, small commercial</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Most common for home renovations, small construction projects, and office cleanouts.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Class B Containers</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Size:</span>
                    <span>Greater than 30 cubic yards</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Typical Uses:</span>
                    <span>Large commercial, industrial</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Required for major construction projects, large commercial renovations, and industrial cleanouts.
                </p>
              </div>
            </div>
          </section>

          {/* Fee Structure */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Chicago Dumpster Permit Fee Structure</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Fees by Location</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Application Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Residential Streets</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$21.51</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Arterial Streets</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$53.79</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Central Business District</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$88.17</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Usage Fees by Duration and Size</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">3-Day Permits</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Class A: $50 - $150 depending on location</li>
                    <li>Class B: $100 - $200 depending on location</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">30-Day Permits</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Class A: $200 - $300 depending on location</li>
                    <li>Class B: $300 - $400 depending on location</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Insurance Requirements */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance & Financial Requirements</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-4">
              <h3 className="font-semibold text-red-800 mb-2">Mandatory Requirements</h3>
              <ul className="list-disc pl-6 text-red-700 space-y-1">
                <li><strong>$1 million commercial general liability insurance</strong> naming Chicago as additional insured</li>
                <li><strong>$5,000 irrevocable letter of credit</strong></li>
                <li>Valid business license</li>
                <li>Registered waste hauler status</li>
              </ul>
            </div>
            <p className="text-gray-600">
              These requirements ensure financial responsibility and proper cleanup in case of accidents or violations. The letter of credit serves as a guarantee for potential cleanup costs or penalties.
            </p>
          </section>

          {/* Application Process */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">
                  <strong>Online Only:</strong> All applications must be submitted through ipi.cityofchicago.org with account creation required.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="font-semibold mb-2">Step 1: Account Setup</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Create account at ipi.cityofchicago.org</li>
                    <li>Upload insurance documentation</li>
                    <li>Submit letter of credit</li>
                    <li>Verify business registration</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Permit Application</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Select container class (A or B)</li>
                    <li>Choose duration (3-day or 30-day)</li>
                    <li>Specify exact placement location</li>
                    <li>Pay application and usage fees</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Approval & Compliance</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Receive permit approval</li>
                    <li>Display permit prominently</li>
                    <li>Follow placement restrictions</li>
                    <li>Remove by deadline (no extensions)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Placement Restrictions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Strict Placement Restrictions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Distance Requirements</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>40 feet</strong> from bus stops</li>
                  <li><strong>20 feet</strong> from fire hydrants</li>
                  <li><strong>10 feet</strong> from disabled parking spaces</li>
                  <li><strong>10 feet</strong> from crosswalks</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">General Prohibitions</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Blocking traffic flow</li>
                  <li>Obstructing emergency access</li>
                  <li>Interfering with utilities</li>
                  <li>Violating ADA compliance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Penalties */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Penalties and Enforcement</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="font-semibold text-red-800 mb-2">Escalating Penalty Structure</h3>
              <div className="space-y-2 text-red-700">
                <p><strong>$250 - $3,000</strong> depending on location and violation type</p>
                <p><strong>Each day counts as separate offense</strong></p>
                <p>Potential criminal prosecution for repeated violations</p>
                <p>Container removal and impoundment possible</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CDOT Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">CDOTPermitsupport@cityofchicago.org</p>
                  
                  <h3 className="font-semibold mb-2">Online Portal</h3>
                  <p className="text-gray-600">ipi.cityofchicago.org</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Important Notes</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>No extensions allowed</li>
                    <li>Account required before applying</li>
                    <li>Insurance must be current</li>
                    <li>Letter of credit irrevocable</li>
                  </ul>
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
                <p className="text-gray-600 text-sm">See how Chicago compares to NYC, LA, Houston, and Phoenix</p>
              </Link>
              <Link href="/dumpster-rental-chicago" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Chicago Dumpster Rental</h3>
                <p className="text-gray-600 text-sm">Find local dumpster rental companies in Chicago</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}