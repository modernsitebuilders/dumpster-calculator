import Link from 'next/link';

export const metadata = {
  title: 'How We Make Money - Affiliate Disclosure',
  description: 'Learn how Dumpster Size Calculator earns revenue through affiliate partnerships',
  robots: 'noindex, nofollow',
};

export default function AffiliateDisclosure() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">How We Make Money</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              Our goal is to help homeowners and contractors find the right dumpster size for their projects 
              through our free calculator. We believe in transparency about how we support this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Earn Revenue</h2>
            
            <h3 className="text-xl font-semibold mb-3">Affiliate Partnerships</h3>
            <p className="mb-4">
              We partner with reputable dumpster rental companies and may earn a commission when you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Request a quote through our website</li>
              <li>Rent a dumpster from our partner companies</li>
              <li>Click on partner links from our site</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
            <p className="mb-4">
              When you request quotes, we may share your contact information with qualified dumpster 
              rental providers in your area. We may receive compensation for these qualified leads.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What This Means for You</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">✅ You Pay Nothing Extra</h3>
              <p className="text-green-700">
                Our affiliate relationships never increase your costs. You pay the same price whether 
                you come to us first or go directly to the rental company.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">✅ Our Calculator Stays Free</h3>
              <p className="text-blue-700">
                Affiliate partnerships allow us to keep our dumpster size calculator completely free 
                for all users, with no hidden fees or subscription costs.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">✅ We Only Recommend Quality Partners</h3>
              <p className="text-purple-700">
                We carefully vet our partners and only work with licensed, insured dumpster rental 
                companies with good customer service records.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Partner Companies</h2>
            <p className="mb-4">
              We currently work with or are in the process of partnering with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>National dumpster rental companies (Waste Management, Republic Services, Budget Dumpster)</li>
              <li>Regional waste management providers</li>
              <li>Local dumpster rental companies in major metropolitan areas</li>
              <li>Lead generation networks (HomeAdvisor, Angi)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Editorial Independence</h2>
            <p className="mb-4">
              While we earn revenue through partnerships, this does not influence our calculator's 
              recommendations. Our dumpster size suggestions are based on:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Industry standard calculations</li>
              <li>Project type and square footage</li>
              <li>Material density considerations</li>
              <li>User feedback and real-world data</li>
            </ul>
            <p className="mb-4 font-semibold">
              We never inflate size recommendations to increase rental fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">FTC Compliance</h2>
            <p className="mb-4">
              In accordance with Federal Trade Commission guidelines, we clearly disclose our affiliate 
              relationships. Look for phrases like:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>"Partner companies"</li>
              <li>"We may earn a commission"</li>
              <li>"Affiliate links"</li>
            </ul>
            <p className="mb-4">
              These disclosures help you make informed decisions about our recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
            <p className="mb-4">
              We believe in complete transparency. If you have questions about our business model, 
              partnerships, or how we make money, please contact us:
            </p>
            <p className="mb-4">
              Email: info@dumpstercalculator.com<br />
              Or use our <Link href="/contact" className="text-blue-600 hover:underline">contact form</Link>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="mb-4">
              We're committed to helping you find the right dumpster size and connect with quality 
              rental providers. Our affiliate relationships help us maintain this free service while 
              never compromising on the quality of our recommendations.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}