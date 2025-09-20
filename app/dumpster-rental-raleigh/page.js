// app/dumpster-rental-raleigh/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Raleigh NC | Local Companies & Size Guide',
  description: 'Find dumpster rental companies in Raleigh. Compare local providers serving the Triangle and Research Triangle Park.',
  keywords: 'dumpster rental raleigh, raleigh dumpster companies, roll off dumpster raleigh, north carolina dumpster rental'
};

export default function RaleighPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Local Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Raleigh, North Carolina
          </h1>
          <p className="text-xl text-gray-600">
            Find local dumpster rental companies serving the Triangle and Research Triangle Park
          </p>
        </div>

        {/* Quick Calculator CTA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Calculate Your Dumpster Size</h2>
          <p className="mb-6">Use our free calculator to determine what size dumpster you need for your Raleigh project</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Use Size Calculator
          </Link>
        </div>

        {/* Local Raleigh Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Raleigh Dumpster Rental Companies</h2>
          <div className="space-y-6">
            
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wall Recycling</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (919) 582-7777</p>
                  <p><strong>Website:</strong> wallrecycling.com</p>
                  <p><strong>Features:</strong> Online ordering, next-day delivery</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Raleigh and throughout North Carolina</p>
                  <p><strong>Specialties:</strong> Multiple NC locations, thousands of dumpsters, commercial & residential</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peak Disposal</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (919) 704-0940</p>
                  <p><strong>Website:</strong> peakdisposalnc.com</p>
                  <p><strong>Features:</strong> 24-hour notice availability, 7-day standard rental</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Wake County and surrounding areas</p>
                  <p><strong>Specialties:</strong> Family-owned, hundreds of 5-star reviews, extra days $10/day</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpster Dudez Raleigh</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpsterdudez.com/raleigh</p>
                  <p><strong>Features:</strong> Same-day delivery for last-minute orders</p>
                  <p><strong>Staff:</strong> Bright orange shirts, fully licensed drivers</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Raleigh and surrounding areas</p>
                  <p><strong>Specialties:</strong> Locally owned, transparent pricing, EZ ordering system</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waste Removal USA</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> (919) 299-9703</p>
                  <p><strong>Website:</strong> wasteremovalusa.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 20, 30, 40-yard options</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Raleigh, Durham, Burlington, Greensboro</p>
                  <p><strong>Specialties:</strong> Multiple size options, next-day pickup, project guidance</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dumpsters.com</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> dumpsters.com</p>
                  <p><strong>Pricing:</strong> $325-$650 range</p>
                  <p><strong>Features:</strong> Online scheduling, upfront rates</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Raleigh and surrounding areas</p>
                  <p><strong>Specialties:</strong> Professional team, 5-day delivery timeframe, top-rated support</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Forever Clean</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Website:</strong> foreverclean.com</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 30-yard dumpster rentals</p>
                  <p><strong>Focus:</strong> Environmental responsibility</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Raleigh area</p>
                  <p><strong>Specialties:</strong> Eco-friendly practices, reliable service</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Big Blue Dumpster Rentals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Based in:</strong> Fayetteville, NC</p>
                  <p><strong>Container Sizes:</strong> 10, 15, 21, 30-yard dumpsters</p>
                  <p><strong>Features:</strong> Heavy duty 11-yard options available</p>
                </div>
                <div>
                  <p><strong>Service Areas:</strong> Cumberland County and surrounding areas</p>
                  <p><strong>Specialties:</strong> Locally owned, residential & commercial clients</p>
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

        {/* Raleigh Area Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Triangle Area Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Central Raleigh</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>North Hills</li>
                <li>Five Points</li>
                <li>Glenwood South</li>
                <li>Warehouse District</li>
                <li>Cameron Village</li>
                <li>Mordecai</li>
                <li>Oakwood</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">North Raleigh</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>North Hills</li>
                <li>Falls of Neuse</li>
                <li>Six Forks</li>
                <li>Brier Creek</li>
                <li>Wake Forest</li>
                <li>Rolesville</li>
                <li>Youngsville</li>
                <li>Creedmoor</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">South Raleigh</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Garner</li>
                <li>Clayton</li>
                <li>Fuquay-Varina</li>
                <li>Holly Springs</li>
                <li>Apex</li>
                <li>Willow Spring</li>
                <li>Angier</li>
                <li>Knightdale</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Triangle</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Durham</li>
                <li>Chapel Hill</li>
                <li>Cary</li>
                <li>Morrisville</li>
                <li>RTP</li>
                <li>Carrboro</li>
                <li>Hillsborough</li>
                <li>Pittsboro</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Also serving:</strong> Wake County, Durham County, Orange County, 
              Johnston County, and all of the Research Triangle region
            </p>
          </div>
        </section>

        {/* Raleigh Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Raleigh Dumpster Considerations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Research Triangle Tech Boom</h3>
              <p className="text-gray-600">
                Massive tech and corporate growth creates constant office buildouts and residential upgrades. High demand means booking early is essential.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">University & Student Areas</h3>
              <p className="text-gray-600">
                NC State and surrounding universities create seasonal demand for move-out cleanouts and rental property turnovers. Plan around academic calendar.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Corporate Relocations</h3>
              <p className="text-gray-600">
                Major companies relocating to RTP drive residential construction and office renovations. Many providers specialize in corporate cleanup projects.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Tree-Lined Neighborhoods</h3>
              <p className="text-gray-600">
                Established neighborhoods with large trees can create access challenges. Discuss low-hanging branches and narrow driveways with providers.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Permit Requirements</h3>
              <p className="text-gray-600">
                Right-of-Way permits required for street placement. Fees vary by dumpster size and duration. Contact city for specific requirements.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Seasonal Weather Considerations</h3>
              <p className="text-gray-600">
                Hot, humid summers and occasional winter weather can affect project timelines. Spring and fall are peak construction seasons.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Calculator */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing a Size?</h2>
          <p className="mb-6 text-gray-700">
            Use our free calculator to determine the right dumpster size for your Raleigh project
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Dumpster Size
          </Link>
        </div>
      </div>
    </main>
  );
}