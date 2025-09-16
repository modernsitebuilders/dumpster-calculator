'use client'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          
          {/* Brand & About Section */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              🗑️ Dumpster Calculator
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Free dumpster size calculator helping homeowners and contractors choose the right container size for renovations, cleanouts, and construction projects.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold mr-2">
                FREE
              </span>
              No email required • Instant results
            </div>
          </div>
          
          {/* Popular Guides */}
          <div>
            <h3 className="font-semibold text-white mb-4">Popular Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/bathroom-remodel-dumpster-size" className="hover:text-blue-400 transition-colors">
                  Bathroom Remodels
                </Link>
              </li>
              <li>
                <Link href="/blog/kitchen-renovation-dumpster-size" className="hover:text-blue-400 transition-colors">
                  Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link href="/blog/roof-replacement-dumpster-size" className="hover:text-blue-400 transition-colors">
                  Roof Replacement
                </Link>
              </li>
              <li>
                <Link href="/blog/garage-cleanout-dumpster-size" className="hover:text-blue-400 transition-colors">
                  Garage Cleanouts
                </Link>
              </li>
              <li>
                <Link href="/blog/do-i-need-dumpster-permit" className="hover:text-blue-400 transition-colors">
                  Permit Requirements
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Size Guides */}
          <div>
            <h3 className="font-semibold text-white mb-4">Size Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/10-yard-dumpster-guide" className="hover:text-blue-400 transition-colors">
                  10 Yard Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/20-yard-dumpster-guide" className="hover:text-blue-400 transition-colors">
                  20 Yard Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/30-yard-dumpster-guide" className="hover:text-blue-400 transition-colors">
                  30 Yard Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/40-yard-dumpster-guide" className="hover:text-blue-400 transition-colors">
                  40 Yard Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/what-size-dumpster-do-i-need" className="hover:text-blue-400 transition-colors">
                  Size Calculator Guide
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Local & Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#calculator" className="hover:text-blue-400 transition-colors">
                  Free Calculator
                </Link>
              </li>
              <li>
                <Link href="/local" className="hover:text-blue-400 transition-colors">
                  Local Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  All Blog Posts
                </Link>
              </li>
              <li>
                <Link href="/blog/dumpster-rental-cost-guide" className="hover:text-blue-400 transition-colors">
                  Pricing Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Popular Cities */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="font-semibold text-white mb-4">Popular Cities</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-2 text-sm">
            <Link href="/dumpster-rental-chicago" className="hover:text-blue-400 transition-colors">Chicago</Link>
            <Link href="/dumpster-rental-houston" className="hover:text-blue-400 transition-colors">Houston</Link>
            <Link href="/dumpster-rental-new-york" className="hover:text-blue-400 transition-colors">New York</Link>
            <Link href="/dumpster-rental-los-angeles" className="hover:text-blue-400 transition-colors">Los Angeles</Link>
            <Link href="/dumpster-rental-phoenix" className="hover:text-blue-400 transition-colors">Phoenix</Link>
            <Link href="/dumpster-rental-philadelphia" className="hover:text-blue-400 transition-colors">Philadelphia</Link>
            <Link href="/dumpster-rental-dallas" className="hover:text-blue-400 transition-colors">Dallas</Link>
            <Link href="/dumpster-rental-miami" className="hover:text-blue-400 transition-colors">Miami</Link>
            <Link href="/dumpster-rental-atlanta" className="hover:text-blue-400 transition-colors">Atlanta</Link>
            <Link href="/dumpster-rental-seattle" className="hover:text-blue-400 transition-colors">Seattle</Link>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Dumpster Calculator. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                We participate in affiliate programs and may earn commissions from qualifying purchases.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclosure" className="hover:text-blue-400 transition-colors">
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-blue-600 rounded-lg p-6 mt-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Need Help Choosing a Dumpster Size?
          </h3>
          <p className="text-blue-100 mb-4">
            Use our free calculator to get an instant recommendation
          </p>
          <Link 
            href="/#calculator" 
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Calculate My Size →
          </Link>
        </div>
      </div>
    </footer>
  );
}