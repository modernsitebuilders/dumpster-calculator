import Link from 'next/link';
// app/terms/page.js
export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By using our dumpster size calculator, you agree to these Terms of Service. If you 
              disagree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="mb-4">
              Our website provides a free calculator to estimate dumpster sizes for various projects. 
              We also connect users with third-party dumpster rental providers. We are not a dumpster 
              rental company ourselves.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Accuracy Disclaimer</h2>
            <p className="mb-4">
              While we strive to provide accurate recommendations, dumpster size suggestions are 
              estimates only. Actual needs may vary based on:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Specific materials being disposed</li>
              <li>Local regulations and restrictions</li>
              <li>Weight limits and disposal fees</li>
              <li>Individual project variations</li>
            </ul>
            <p className="mb-4 font-semibold">
              Always consult with rental providers for final sizing and pricing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="mb-4">
              When we connect you with dumpster rental providers:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>We are not responsible for their services, pricing, or policies</li>
              <li>Any contract is between you and the provider directly</li>
              <li>We may receive affiliate commissions (disclosed separately)</li>
              <li>We do not guarantee availability or specific pricing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information when using our calculator</li>
              <li>Verify all information with rental providers</li>
              <li>Comply with local waste disposal regulations</li>
              <li>Not use our service for any illegal purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE OF 
              OUR SERVICE.
            </p>
            <p className="mb-4">
              Our total liability shall not exceed $100 or the amount you paid us (if any), 
              whichever is less.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including the calculator logic, design, and text, is our 
              property or licensed to us. You may not reproduce or redistribute our content without 
              written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Continued use of our website 
              after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of [Your State], United States, without regard to 
              conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, contact us at:
            </p>
            <p className="mb-4">
              Email: legal@dumpstercalculator.com<br />
              Website: https://dumpstercalculator.com
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