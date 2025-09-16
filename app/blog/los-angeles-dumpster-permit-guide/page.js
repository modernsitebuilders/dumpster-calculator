import Link from 'next/link';

export const metadata = {
  title: "Los Angeles Dumpster Permit 2025: $54-$121 Tiered Fee Structure",
  description: "LA dumpster permits cost $54-$121 based on street type. Learn StreetsLA requirements, 30-day duration, 72-hour advance notice, and avoid $1,000 fines.",
  openGraph: {
    title: "Los Angeles Dumpster Permit Guide 2025: Complete Requirements",
    description: "Navigate LA's tiered permit fee structure and Bureau of Street Services requirements.",
    url: "/blog/los-angeles-dumpster-permit-guide",
    type: "article",
  },
  alternates: {
    canonical: "/blog/los-angeles-dumpster-permit-guide"
  }
};

export default function LosAngelesDumpsterPermitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' > '}
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            {' > '}
            <span className="text-gray-700">Los Angeles Dumpster Permit Guide</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              Regulations
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Los Angeles Dumpster Permit Guide: $54-$121 Tiered Fee Structure
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Los Angeles structures its permit system through the Bureau of Street Services (StreetsLA), with fees varying by street type. Base processing fees start at $33, with additional charges based on location classification.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>6 min read</span>
              <span>•</span>
              <span>StreetsLA Requirements</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">LA Dumpster Permit Quick Facts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Base Fee:</span>
                  <span>$33</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total Cost:</span>
                  <span>$54.51 - $121.17</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>30 days</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Authority:</span>
                  <span>Bureau of Street Services</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Advance Notice:</span>
                  <span>72 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Max Penalty:</span>
                  <span className="text-red-600 font-bold">$1,000</span>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tiered Fee Structure by Street Type</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Base Fee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Additional Fee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Cost</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Residential Streets</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$33</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$21.51</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">$54.51</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Arterial Streets</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$33</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$53.79</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">$86.79</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Central Business District</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$33</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">$88.17</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">$121.17</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Street Type Definitions</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                <li><strong>Residential:</strong> Local neighborhood streets with lower traffic volume</li>
                <li><strong>Arterial:</strong> Major thoroughfares and busy commercial streets</li>
                <li><strong>Central Business District:</strong> Downtown LA core area with highest traffic and restrictions</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Requirements</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Step 1: Advance Planning</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li><strong>72-hour minimum advance notice</strong> required for inspections</li>
                  <li>Submit application before dumpster delivery</li>
                  <li>Include detailed placement plans</li>
                  <li>Specify exact dates and duration</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Step 2: Online Application</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Apply at bsspermits.lacity.org</li>
                  <li>Select appropriate street classification</li>
                  <li>Upload required documentation</li>
                  <li>Pay applicable fees online</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Step 3: Inspection & Approval</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Bureau of Street Services conducts inspection</li>
                  <li>Receive permit approval</li>
                  <li>Display permit visibly on container</li>
                  <li>Follow all placement restrictions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Traffic Restrictions</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Peak Hour Prohibitions</h3>
              <p className="text-yellow-700 mb-2">
                Work is prohibited during peak traffic hours without special approval:
              </p>
              <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                <li><strong>Weekday mornings:</strong> 6:00 AM - 9:00 AM</li>
                <li><strong>Weekday evenings:</strong> 3:30 PM - 7:00 PM</li>
                <li>Special events may have additional restrictions</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Penalties and Enforcement</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="font-semibold text-red-800 mb-2">Escalating Penalty Structure</h3>
              <div className="space-y-2 text-red-700">
                <p><strong>First violation:</strong> $250 fine</p>
                <p><strong>Second violation (within 12 months):</strong> $500 fine</p>
                <p><strong>Third violation (within 12 months):</strong> $1,000 fine</p>
                <p><strong>Four or more violations:</strong> May constitute misdemeanor subject to criminal prosecution</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bureau of Street Services Contact</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Office Location</h3>
                  <p className="text-gray-600 mb-4">
                    1149 S. Broadway, Suite 350<br/>
                    Los Angeles, CA 90015
                  </p>
                  
                  <h3 className="font-semibold mb-2">Online Portal</h3>
                  <p className="text-gray-600">bsspermits.lacity.org</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Key Requirements</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>72-hour advance notice</li>
                    <li>Extensions available upon request</li>
                    <li>No peak hour work</li>
                    <li>Inspection required</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Dumpster Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/dumpster-permit-requirements-major-cities" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Compare All Major Cities</h3>
                <p className="text-gray-600 text-sm">See how LA compares to NYC, Chicago, Houston, and Phoenix</p>
              </Link>
              <Link href="/dumpster-rental-los-angeles" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">LA Dumpster Rental</h3>
                <p className="text-gray-600 text-sm">Find local dumpster rental companies in Los Angeles</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}