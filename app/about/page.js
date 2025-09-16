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

        {/* Our Mission - KEEP THIS */}
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

{/* REPLACE "Impact by the Numbers" with THIS: */}
<section className="mb-12">
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Calculator</h2>
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div className="bg-green-50 rounded-lg p-6">
        <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
        <div className="text-gray-600">Free to Use</div>
      </div>
      <div className="bg-blue-50 rounded-lg p-6">
        <div className="text-3xl font-bold text-blue-600 mb-2">Industry</div>
        <div className="text-gray-600">Based Data</div>
      </div>
      <div className="bg-purple-50 rounded-lg p-6">
        <div className="text-3xl font-bold text-purple-600 mb-2">No</div>
        <div className="text-gray-600">Email Required</div>
      </div>
    </div>
  </div>
</section>

{/* How We're Different - KEEP BUT UPDATE */}
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
          <h3 className="text-xl font-semibold mb-2">Industry Standard Calculations</h3>
          <p className="text-gray-600">
            Our recommendations are based on established industry standards and project data.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="text-green-500 text-2xl mr-4">✓</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Local Market Pricing</h3>
          <p className="text-gray-600">
            We provide realistic cost estimates based on current market rates.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="text-green-500 text-2xl mr-4">✓</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Independent & Unbiased</h3>
          <p className="text-gray-600">
            We're not owned by any dumpster company. Our goal is giving you accurate recommendations.
          </p>
        </div>
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