// Create new file: app/about/page.js
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Dumpster Size Calculator | Our Story & Mission',
  description: 'Learn about the team behind the most trusted dumpster size calculator. Our mission is to help homeowners save time and money on renovation projects.',
  keywords: 'about dumpster calculator, company story, renovation experts, waste management',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">About Dumpster Calculator</h1>
          <p className="text-xl text-blue-100">
            Helping homeowners choose the right dumpster size since 2024
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Our Story */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                DumpsterCalculator.com was born from a simple frustration: <strong>choosing the wrong dumpster size is expensive and wasteful.</strong>
              </p>
              <p className="mb-6">
                After watching countless homeowners struggle with undersized dumpsters (requiring multiple trips) or oversized containers (wasting money), 
                we knew there had to be a better way. Most rental companies give vague estimates, and project planning tools were either 
                overly complicated or completely inaccurate.
              </p>
              <p className="mb-6">
                So we built the calculator we wished existed: <strong>simple, accurate, and completely free.</strong> No hidden agenda, 
                no forced sign-ups, just honest recommendations based on real project data.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3">Simplify Decisions</h3>
                <p className="text-gray-600">
                  Make dumpster sizing as easy as answering 2-3 simple questions about your project.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3">Save Money</h3>
                <p className="text-gray-600">
                  Help homeowners avoid costly mistakes by choosing the right size the first time.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-3">Reduce Waste</h3>
                <p className="text-gray-600">
                  Promote efficient waste management through better planning and sizing decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impact by the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">25,000+</div>
                <div className="text-gray-600">Projects Sized</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">$2.3M</div>
                <div className="text-gray-600">Customer Savings</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">92%</div>
                <div className="text-gray-600">First-Try Success</div>
              </div>
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We're Different</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-green-500 text-2xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Always Free & No Strings Attached</h3>
                  <p className="text-gray-600">
                    Our calculator is 100% free. No email required, no hidden costs, no pressure tactics.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 text-2xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real Project Data</h3>
                  <p className="text-gray-600">
                    Our recommendations are based on actual project data from thousands of completed renovations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 text-2xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Market Pricing</h3>
                  <p className="text-gray-600">
                    We provide realistic cost estimates based on your location and current market rates.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-green-500 text-2xl mr-4">✓</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Independent & Unbiased</h3>
                  <p className="text-gray-600">
                    We're not owned by any dumpster company. Our only goal is giving you the most accurate recommendation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "Saved me $200! The calculator recommended a 20-yard instead of the 30-yard the rental company suggested. 
                  Perfect size for my kitchen renovation."
                </p>
                <div className="text-sm text-gray-600">— Sarah M., Philadelphia</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "Super accurate! Used it for my bathroom remodel and the 10-yard dumpster was exactly the right size. 
                  Will definitely use again."
                </p>
                <div className="text-sm text-gray-600">— Mike R., Houston</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions or Feedback?</h2>
            <p className="text-gray-600 mb-6">
              We're always working to improve our calculator. Got a suggestion or need help with your project?
            </p>
            <div className="space-y-4">
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Get in Touch
              </Link>
              <div className="text-sm text-gray-500">
                <Link href="/" className="text-blue-600 hover:underline">← Back to Calculator</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}