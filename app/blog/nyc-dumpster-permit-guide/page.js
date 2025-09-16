import Link from 'next/link';

export const metadata = {
  title: "NYC Dumpster Permit 2025: $50 Fee, Requirements & How to Apply Online",
  description: "Get your NYC dumpster permit fast. $50 fee, 5-day limit, same-day processing. Avoid $18,000 fines with our complete DOT permit guide.",
  openGraph: {
    title: "NYC Dumpster Permit Guide 2025: Complete Requirements & Costs",
    description: "Everything you need to know about NYC dumpster permits. $50 fee, online application, and penalty avoidance.",
    url: "/blog/nyc-dumpster-permit-guide",
    type: "article",
  },
  alternates: {
    canonical: "/blog/nyc-dumpster-permit-guide"
  }
};

export default function NYCDumpsterPermitPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "NYC Dumpster Permit Guide: $50 Fee, Requirements & Application Process",
    "author": {
      "@type": "Organization",
      "name": "Dumpster Size Calculator"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Dumpster Size Calculator"
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "description": "Complete guide to NYC dumpster permits including costs, requirements, application process, and penalty avoidance.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://dumpster-size-calculator.com/blog/nyc-dumpster-permit-guide"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {' > '}
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              {' > '}
              <span className="text-gray-700">NYC Dumpster Permit Guide</span>
            </nav>
            
            <div className="mb-6">
              <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold mb-4">
                Regulations
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                NYC Dumpster Permit Guide: $50 Fee, 5-Day Limit & $18,000 Penalty Risk
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Planning a construction project in New York City? NYC requires $50 permits for all dumpsters placed on public streets or sidewalks, with strict five-day limits and same-day processing available.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>January 15, 2025</span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span>NYC DOT Requirements</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {/* Quick Facts */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">NYC Dumpster Permit Quick Facts</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Cost:</span>
                    <span className="text-green-600 font-bold">$50 flat fee</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>Maximum 5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Processing:</span>
                    <span>Same/next business day</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Authority:</span>
                    <span>NYC DOT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Application:</span>
                    <span>Online only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Max Penalty:</span>
                    <span className="text-red-600 font-bold">$18,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Can Apply */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Can Apply for NYC Dumpster Permits?</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800">
                  <strong>Important:</strong> Only registered carting companies can obtain permits – property owners cannot apply directly.
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                This requirement ensures professional waste management and proper container placement. If you're a property owner, you'll need to work with a licensed waste management company that can handle the permit application for you.
              </p>
            </section>

            {/* When You Don't Need a Permit */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">When You DON'T Need a Permit in NYC</h2>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <p className="text-green-800">
                  <strong>Good News:</strong> Dumpsters placed entirely on private property like driveways don't require permits.
                </p>
              </div>
              <p className="text-gray-600">
                This exemption can save significant time and money for residential projects where the dumpster can fit completely on your property without blocking sidewalks or streets.
              </p>
            </section>

            {/* Application Process */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">NYC Dumpster Permit Application Process</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 1: Verify Eligibility</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Must be a registered carting company</li>
                    <li>Container must be commercial grade</li>
                    <li>Cannot be used for perishable waste</li>
                    <li>Cannot be used for construction debris from permitted worksites</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Online Application</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Visit nycstreets.net</li>
                    <li>Complete the commercial refuse container permit form</li>
                    <li>Submit required documentation</li>
                    <li>Pay $50 fee online</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Approval & Placement</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Receive approval same or next business day</li>
                    <li>Print permit for display</li>
                    <li>Place container according to approved specifications</li>
                    <li>Remove within 5-day limit</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Placement Restrictions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">NYC Dumpster Placement Restrictions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Prohibited Locations</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Near special events</li>
                    <li>During construction embargoes</li>
                    <li>Blocking fire hydrants</li>
                    <li>Obstructing crosswalks</li>
                    <li>In no-parking zones</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Commercial grade containers only</li>
                    <li>Proper permit display</li>
                    <li>Reflective markings if required</li>
                    <li>Clean surrounding area</li>
                    <li>Remove by deadline</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Penalties and Enforcement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Penalties and Enforcement</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-4">
                <h3 className="font-semibold text-red-800 mb-2">High Penalty Risk</h3>
                <p className="text-red-700 mb-2">
                  Violations are enforced by DOT HIQA inspectors and can result in:
                </p>
                <ul className="list-disc pl-6 text-red-700 space-y-1">
                  <li>Standard permit violations per city schedule</li>
                  <li>Related violations like illegal dumping: <strong>up to $18,000 plus vehicle impoundment</strong></li>
                  <li>Each day of violation counts as separate offense</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">NYC DOT Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-gray-600 mb-4">718-433-3100</p>
                    
                    <h3 className="font-semibold mb-2">Online Portal</h3>
                    <p className="text-gray-600">nycstreets.net</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Permit Office</h3>
                    <p className="text-gray-600">
                      55 Water Street<br/>
                      Concourse Level<br/>
                      New York, NY 10041
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
                  <h3 className="font-semibold text-gray-900 mb-2">Compare All Major Cities</h3>
                  <p className="text-gray-600 text-sm">See how NYC compares to LA, Chicago, Houston, and Phoenix</p>
                </Link>
                <Link href="/dumpster-rental-new-york" className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">NYC Dumpster Rental</h3>
                  <p className="text-gray-600 text-sm">Find local dumpster rental companies in New York City</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}