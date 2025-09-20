// app/dumpster-rental-virginia-beach/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Virginia Beach VA | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Virginia Beach. Compare local providers serving Hampton Roads and the Virginia Beach area with competitive pricing.',
  keywords: 'dumpster rental virginia beach, virginia beach dumpster companies, roll off dumpster virginia beach, hampton roads dumpster rental'
};

export default function VirginiaBeachPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Virginia Beach, Virginia
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving Hampton Roads and the Virginia Beach area
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Virginia Beach project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Virginia Beach Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Virginia Beach Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That Virginia Beach</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (757) 271-3500</p>
                  <p><strong>Locations:</strong> 913 First Colonial Rd STE 202B</p>
                  <p><strong>Container Sizes:</strong> 4, 6, 10, 14, 20 yards</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Virginia Beach, Hampton, Portsmouth</p>
                  <p><strong>Features:</strong> Residential friendly, driveway protection, 24-hour delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Today Virginia Beach</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpstertoday.com/locations/virginia-beach</p>
                  <p><strong>Container Sizes:</strong> 12 yard, 18 yard options</p>
                  <p><strong>Features:</strong> Walk-in doors, 100% on-time delivery guarantee</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Virginia Beach area</p>
                  <p><strong>Pricing:</strong> Starting at $299 for 3-day rental</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Removal USA</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (757) 320-2272</p>
                  <p><strong>Website:</strong> wasteremovalusa.com</p>
                  <p><strong>Features:</strong> Same-day/next-day delivery, flat-fee pricing</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Virginia Beach and surrounding areas</p>
                  <p><strong>Specialties:</strong> Long-term rentals, swap services</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget Dumpster</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> budgetdumpster.com/virginia-beach-va</p>
                  <p><strong>Services:</strong> Multiple dumpster sizes, flat-rate pricing</p>
                  <p><strong>Features:</strong> Expert support, simple terms</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> All Virginia Beach zip codes</p>
                  <p><strong>Coverage:</strong> 23451-23464, 23518</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ultimate Dumpsters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (888) 303-5608</p>
                  <p><strong>Website:</strong> ultimatedumpsters.com</p>
                  <p><strong>Experience:</strong> Serving since 2006, 180,000+ delivered</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Virginia Beach and beyond</p>
                  <p><strong>Features:</strong> Delivery in as little as 2 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Management</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> wm.com</p>
                  <p><strong>Services:</strong> Multiple sizes, easy pickup and delivery</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Virginia Beach and Hampton Roads</p>
                  <p><strong>Features:</strong> Environmental stewardship, reliable service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Hampton Roads Providers</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Services:</strong> Same-day service available</p>
                  <p><strong>Coverage:</strong> Chesapeake, Norfolk, Suffolk, Portsmouth</p>
                </div>
                <div>
                  <p><strong>Features:</strong> Military discounts, senior discounts</p>
                  <p><strong>Specialties:</strong> Dump trailer rentals, junk removal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> These companies are listed for informational purposes. Contact companies directly 
              for current pricing, availability, and service details. Always verify licensing and insurance.
            </p>
          </div>
        </section>

        {/* Virginia Beach Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Virginia Beach Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Oceanfront & Resort</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Virginia Beach Oceanfront</li>
                <li>Sandbridge</li>
                <li>Croatan Beach</li>
                <li>Dam Neck</li>
                <li>Little Creek</li>
                <li>Shore Drive</li>
                <li>Chic's Beach</li>
                <li>Bay Colony</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Central Virginia Beach</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Town Center</li>
                <li>Pembroke</li>
                <li>Kempsville</li>
                <li>Princess Anne</li>
                <li>Red Mill</li>
                <li>Lynnhaven</li>
                <li>Great Neck</li>
                <li>Hilltop</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Virginia Beach</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Pungo</li>
                <li>Blackwater</li>
                <li>Creeds</li>
                <li>Princess Anne Plaza</li>
                <li>Landstown</li>
                <li>Salem</li>
                <li>Courthouse</li>
                <li>Bayside</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hampton Roads Region</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Norfolk</li>
                <li>Chesapeake</li>
                <li>Portsmouth</li>
                <li>Suffolk</li>
                <li>Hampton</li>
                <li>Newport News</li>
                <li>York County</li>
                <li>James City County</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> All of Hampton Roads, Eastern Shore, 
              and the Greater Tidewater region
            </p>
          </div>
        </section>

        {/* Virginia Beach Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Virginia Beach Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Military & Defense Growth</h3>
              <p className="text-gray-600">
                Virginia Beach hosts major military installations including Naval Air Station Oceana and Little Creek. Military construction and housing demand drives steady dumpster needs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tourism Season Impact</h3>
              <p className="text-gray-600">
                Summer tourism season creates high demand for commercial dumpsters near the Oceanfront. Plan ahead for May-September projects in resort areas.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Coastal Weather Considerations</h3>
              <p className="text-gray-600">
                Hurricane season and coastal storms can affect delivery schedules. Many companies recommend covering dumpsters during storms to prevent water weight issues.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Right-of-Way Permits</h3>
              <p className="text-gray-600">
                Virginia Beach requires Right of Way Permits for street placement. Contact the Permits & Inspections Office for street or sidewalk blocking permits.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Beach Community Restrictions</h3>
              <p className="text-gray-600">
                Oceanfront and beach communities often have strict HOA rules and narrow access roads. Consider smaller dumpsters for beach house renovations.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Military Discounts Available</h3>
              <p className="text-gray-600">
                Many local companies offer military and senior discounts. Ask about special pricing for active duty, veterans, and military families.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Virginia Beach project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}