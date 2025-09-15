// app/contact/page.js
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us - Dumpster Size Calculator | Partnership Inquiries',
  description: 'Contact our team for partnership opportunities, questions, or feedback about our dumpster size calculator. We respond within 24-48 hours.',
  keywords: 'contact dumpster calculator, partnership inquiries, dumpster rental partnerships',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Partnership inquiries, questions, or feedback - we'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Component */}
          <ContactForm />
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@dumpstercalculator.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* Partnership Info */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Partnership Opportunities</h3>
              <p className="text-gray-700 mb-4">
                Are you a dumpster rental company interested in receiving qualified leads? We connect thousands of customers with reliable providers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Qualified leads in your service area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Pay only for successful referrals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>No exclusive contracts required</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Select "Partnership Opportunity" in the form to learn more.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Common Questions</h3>
              <div className="space-y-3">
                <details className="cursor-pointer">
                  <summary className="font-semibold text-gray-800">How accurate is the calculator?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Our calculator provides estimates based on typical project sizes. Always confirm with your rental provider.
                  </p>
                </details>
                <details className="cursor-pointer">
                  <summary className="font-semibold text-gray-800">Do you provide dumpsters?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    No, we connect you with local providers. We're an independent resource.
                  </p>
                </details>
                <details className="cursor-pointer">
                  <summary className="font-semibold text-gray-800">Is the calculator free?</summary>
                  <p className="mt-2 text-gray-600 text-sm">
                    Yes, our calculator is completely free to use with no obligations.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Calculator CTA */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}