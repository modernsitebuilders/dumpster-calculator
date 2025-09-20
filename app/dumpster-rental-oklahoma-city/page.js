// app/dumpster-rental-oklahoma-city/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Oklahoma City OK | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Oklahoma City. Compare local providers serving OKC and Central Oklahoma.',
  keywords: 'dumpster rental oklahoma city, okc dumpster companies, roll off dumpster oklahoma city, oklahoma dumpster rental'
};

export default function OklahomaCityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Oklahoma City, Oklahoma
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving OKC and Central Oklahoma
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Oklahoma City project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Oklahoma City Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Oklahoma City Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bin There Dump That OKC</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (405) 640-4345</p>
                  <p><strong>Website:</strong> okcdumpsterrental.com</p>
                  <p><strong>Owners:</strong> Jason & Heather Roberts</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Oklahoma City Metro area</p>
                  <p><strong>Specialties:</strong> Residential friendly since 2013, driveway protection, same/next day delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">EnviroDispose</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (405) 213-4593</p>
                  <p><strong>Website:</strong> envirodispose.com</p>
                  <p><strong>Features:</strong> Same-day service, online scheduling</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Oklahoma City and beyond</p>
                  <p><strong>Specialties:</strong> Locally owned, rapid response times, transparent pricing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cubic Waste Solutions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> cubicwaste.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20, 30, 40-yard dumpsters</p>
                  <p><strong>Experience:</strong> 50+ years in waste industry</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Oklahoma City and surrounding areas</p>
                  <p><strong>Specialties:</strong> Locally owned by Oklahomans, eco-friendly disposal, exceptional customer service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Junk Frog</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (405) 444-5865</p>
                  <p><strong>Website:</strong> junkfrog.com</p>
                  <p><strong>Experience:</strong> Serving Oklahomans since 2017</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Oklahoma City metro area</p>
                  <p><strong>Specialties:</strong> Flat-rate pricing, 10-day rental, mobile storage containers, recycling focus</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rancho Roll Off</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> ranchorolloff.com</p>
                  <p><strong>Container Sizes:</strong> 15, 20-yard dumpsters</p>
                  <p><strong>Features:</strong> 10 days included, flexible extensions</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Oklahoma City, Edmond, Yukon, Piedmont, Mustang, Moore, Guthrie</p>
                  <p><strong>Specialties:</strong> Community-focused, 5-star reviews, deep Oklahoma County roots</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Junk Boss</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> junk-boss.com</p>
                  <p><strong>Experience:</strong> Locally owned since 2012</p>
                  <p><strong>Awards:</strong> 2019 Angie's List Super Service Award</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Oklahoma City metro and surrounding areas</p>
                  <p><strong>Specialties:</strong> Same-day delivery by 11am, 250,000+ lbs recycled, professional crew</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heartland Recycling Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> heartlandrecyclingservices.com</p>
                  <p><strong>Container Sizes:</strong> 2, 4, 6, 10, 15-yard options</p>
                  <p><strong>Features:</strong> 48-hour service availability</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Oklahoma City and surrounding areas</p>
                  <p><strong>Specialties:</strong> Front-load and roll-off options, discounts for first responders/military</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">True Blue Cleanouts LLC</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (405) 413-4880</p>
                  <p><strong>Focus:</strong> Family owned, local small business</p>
                  <p><strong>Discounts:</strong> 10% for military, first responders, teachers</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Central Oklahoma and surrounding areas</p>
                  <p><strong>Specialties:</strong> Rental property cleanouts, foreclosure cleanup, construction debris</p>
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

        {/* Oklahoma City Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Oklahoma City Metro Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central OKC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Bricktown</li>
                <li>Deep Deuce</li>
                <li>Midtown</li>
                <li>Paseo</li>
                <li>Plaza District</li>
                <li>Automobile Alley</li>
                <li>Film Row</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North OKC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Edmond</li>
                <li>Guthrie</li>
                <li>Piedmont</li>
                <li>Cashion</li>
                <li>Arcadia</li>
                <li>Jones</li>
                <li>Luther</li>
                <li>Wellston</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South OKC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Moore</li>
                <li>Norman</li>
                <li>Newcastle</li>
                <li>Blanchard</li>
                <li>Tuttle</li>
                <li>Bridge Creek</li>
                <li>Goldsby</li>
                <li>Washington</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">West OKC</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Yukon</li>
                <li>Mustang</li>
                <li>Bethany</li>
                <li>Warr Acres</li>
                <li>El Reno</li>
                <li>Okarche</li>
                <li>Deer Creek</li>
                <li>Putnam City</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Canadian County, Cleveland County, Oklahoma County, 
              McClain County, and all of Central Oklahoma
            </p>
          </div>
        </section>

        {/* Oklahoma City Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Oklahoma City Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Energy Industry Boom</h3>
              <p className="text-gray-600">
                Oil and gas industry growth drives commercial construction and housing demand. Many providers specialize in industrial and energy sector projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Severe Weather Considerations</h3>
              <p className="text-gray-600">
                Tornado season (March-June) and severe storms create high demand for debris cleanup. Many companies offer emergency storm damage services.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Corporate Headquarters Growth</h3>
              <p className="text-gray-600">
                Major corporations relocating to OKC drive office construction and employee housing demand. Providers experienced with commercial buildouts.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">NBA Thunder & Sports Development</h3>
              <p className="text-gray-600">
                Paycom Center area development and sports-related construction create specialized demand for event venue and entertainment district projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Suburban Expansion</h3>
              <p className="text-gray-600">
                Rapid growth in Edmond, Moore, and surrounding suburbs creates constant new construction demand. Book early during peak building seasons.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Military & Government Presence</h3>
              <p className="text-gray-600">
                Tinker Air Force Base and state government facilities create steady demand for government contracting and base housing projects.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Oklahoma City project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}