import Link from 'next/link';

export const metadata = {
  title: "Philadelphia Dumpster Permit Guide 2025: RFID Requirements & Applications",
  description: "Complete guide to Philadelphia dumpster permits including RFID medallions, licensing tiers, costs up to $500/year, and application process.",
  openGraph: {
    title: "Philadelphia Dumpster Permit Guide: Complete Requirements",
    description: "Navigate Philadelphia's complex dumpster permit system with RFID tracking, three-tiered licensing, and strict enforcement.",
    url: "/blog/philadelphia-dumpster-permit-guide",
    type: "article",
  },
  alternates: {
    canonical: "/blog/philadelphia-dumpster-permit-guide"
  }
};

export default function PhiladelphiaDumpsterPermitGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            {' > '}
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            {' > '}
            <span className="text-gray-700">Philadelphia Dumpster Permit Guide</span>
          </nav>
          
          <div className="mb-6">
            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
              Local Permits
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Philadelphia Dumpster Permit Guide: RFID Requirements & Three-Tier System
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Philadelphia operates one of the most complex dumpster permit systems in the US, requiring RFID medallions and distinguishing between one-time private property licenses and annual public right-of-way licenses.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>9 min read</span>
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
              <h2 className="text-xl font-bold text-blue-900 mb-2">Quick Facts: Philadelphia Permits</h2>
              <ul className="space-y-2 text-blue-900">
                <li><strong>Private Property License:</strong> $80-150 (one-time fee)</li>
                <li><strong>Public Right-of-Way:</strong> $200-500 annually</li>
                <li><strong>Construction License:</strong> $75 per 3 dumpsters</li>
                <li><strong>RFID Medallion Required:</strong> All dumpsters</li>
                <li><strong>Processing Time:</strong> 5 business days online, same-day in person</li>
                <li><strong>Apply at:</strong> eCLIPSE online or 1401 JFK Blvd</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Philadelphia's Unique RFID System</h2>
            <p className="text-gray-700 mb-4">
              Philadelphia is the only major US city requiring RFID medallions on all dumpsters. Every licensed dumpster receives a radio frequency identification medallion that transmits:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>License number</li>
              <li>Licensee contact information</li>
              <li>Approved placement location</li>
              <li>License expiration date</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm"><strong>Important:</strong> Lost medallions cost $75 to replace, damaged ones $25. Operating without a medallion triggers immediate fines.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Types of Dumpster Licenses</h2>
            
            <h3 className="text-xl font-semibold mb-3">1. Private Property Dumpster License</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <ul className="space-y-2">
                <li><strong>Cost:</strong> $80-150 (one-time fee, never expires)</li>
                <li><strong>Requirements:</strong> Complete screening from public view</li>
                <li><strong>Screening options:</strong> Opaque fencing, shrubbery, or enclosed sheds</li>
                <li><strong>Best for:</strong> Businesses with private lots or loading areas</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">2. Public Right-of-Way License</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <ul className="space-y-2">
                <li><strong>Cost:</strong> $200-500 annually</li>
                <li><strong>Renewal:</strong> Required every year</li>
                <li><strong>Streets Department approval:</strong> Required for placement</li>
                <li><strong>Center City restriction:</strong> No new dumpsters in defined zone</li>
              </ul>
              <p className="text-sm mt-2 text-gray-600">
                <strong>Center City Zone:</strong> Between Bainbridge St, Spring Garden St, Delaware River, and Schuylkill River - no new dumpsters unless one existed before Sept 2016.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">3. Construction Dumpster License</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <ul className="space-y-2">
                <li><strong>Cost:</strong> $75 per 3 dumpsters (fleet license)</li>
                <li><strong>Coverage:</strong> Entire fleet, not individual containers</li>
                <li><strong>Ideal for:</strong> Construction companies with multiple projects</li>
                <li><strong>Includes:</strong> RFID medallions for all units</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Restrictions & Requirements</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <h3 className="font-bold mb-2">⏰ Time Restrictions</h3>
              <p><strong>No servicing between 9:00 PM and 7:00 AM citywide</strong></p>
              <p className="text-sm mt-2">City Avenue requires special permission for early morning/late evening service</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold">Servicing Frequency Requirements:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>General waste: Weekly minimum</li>
                <li>Garbage: Twice weekly minimum</li>
                <li>Compacting units: Within 24 hours of reaching capacity</li>
              </ul>

              <h3 className="font-bold mt-4">Food Waste Rules:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>No grindable food waste in dumpsters</li>
                <li>Restaurants must use garbage disposals</li>
                <li>All non-grindable garbage must be bagged</li>
              </ul>

              <h3 className="font-bold mt-4">Maintenance Requirements:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Clean area around dumpster regularly</li>
                <li>Clean and sanitize dumpster every 6 months minimum</li>
                <li>Cannot clean dumpsters on sidewalks or streets</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Penalties & Enforcement</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <h3 className="font-bold text-red-900 mb-2">⚠️ Violation Penalties</h3>
              <ul className="space-y-2 text-red-900">
                <li>Code violations: Up to $300 per day plus court costs</li>
                <li>Illegal dumping: Up to $5,000 per item</li>
                <li>Missing medallion: Immediate fine</li>
                <li>License revocation: Unpaid fines over $300 after 10 days</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              The Department of Licenses and Inspections coordinates with SWEEP for enforcement. All violations process through the eCLIPSE system with automatic escalation for unpaid fines.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">Online Application (Recommended)</h3>
                <ul className="text-sm space-y-1">
                  <li>System: eCLIPSE</li>
                  <li>Processing: 5 business days</li>
                  <li>Payment: Credit card or e-check</li>
                  <li>Available: 24/7</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold mb-2">In-Person Application</h3>
                <ul className="text-sm space-y-1">
                  <li>Location: 1401 JFK Blvd</li>
                  <li>Processing: Often same-day</li>
                  <li>Payment: Cash, check, card</li>
                  <li>Hours: M-F 8am-4:30pm</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm"><strong>Streets Department Permits:</strong> For temporary placement (up to 7 days), apply separately at Streets Department for $40 permit.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Department of Licenses & Inspections</h3>
                  <p className="text-gray-600">1401 JFK Boulevard, Room 1160</p>
                  <p className="text-gray-600">Philadelphia, PA 19102</p>
                  <p className="text-gray-600">Phone: (215) 686-8686</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Streets Department</h3>
                  <p className="text-gray-600">1401 JFK Boulevard, Room 830</p>
                  <p className="text-gray-600">Philadelphia, PA 19102</p>
                  <p className="text-gray-600">Phone: (215) 686-5560</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/dumpster-permit-requirements-major-cities" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Compare All Major Cities</h3>
                <p className="text-gray-600 text-sm">See how Philadelphia compares to other major US cities</p>
              </Link>
              <Link href="/dumpster-rental-philadelphia" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">Philadelphia Dumpster Rental</h3>
                <p className="text-gray-600 text-sm">Find local dumpster rental companies in Philadelphia</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}