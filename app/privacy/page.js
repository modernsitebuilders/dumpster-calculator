import Link from 'next/link';
// app/privacy/page.js
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              When you use our dumpster size calculator, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Information you provide: ZIP code, project details, email (if provided)</li>
              <li>Automatic information: IP address, browser type, usage data via Google Analytics</li>
              <li>Cookies: We use cookies to improve your experience and analyze site traffic</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide dumpster size recommendations</li>
              <li>To connect you with local dumpster rental providers</li>
              <li>To improve our calculator and user experience</li>
              <li>To send relevant information if you opt-in to our email list</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Dumpster rental companies (only when you request quotes)</li>
              <li>Service providers who assist in operating our website</li>
              <li>Google Analytics for website improvement</li>
            </ul>
            <p className="mb-4 font-semibold">
              We NEVER sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Affiliate Disclosure</h2>
            <p className="mb-4">
              We participate in affiliate programs with dumpster rental companies. This means we may 
              earn a commission when you request a quote or rent a dumpster through our links. This 
              does not affect the price you pay, and we only recommend reputable providers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access the information we have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@dumpstercalculator.com<br />
              Website: https://dumpstercalculator.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the Last updated date.
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