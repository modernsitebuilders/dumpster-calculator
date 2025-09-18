// app/dumpster-rental-detroit/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Dumpster Rental Detroit MI | Motor City Service | Best Michigan Prices',
  description: 'Dumpster rental in Detroit starting at $350. Serving downtown, suburbs, and all of Metro Detroit. Renovation and construction specialists.',
  keywords: 'dumpster rental detroit, dumpster rental michigan, roll off dumpster detroit, metro detroit dumpster'
};

export default function DetroitPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental in Detroit, MI
          </h1>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Detroit Dumpster Quote</h2>
          <p className="mb-6">Reliable service for Motor City projects</p>
          <Link href="/" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
            Calculate Size & Get Quotes
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Detroit Dumpster Rental Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">10 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$350 - $450</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Small renovations</li>
                <li>• Basement cleanouts</li>
                <li>• Minor demolition</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">20 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$450 - $575</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Kitchen remodels</li>
                <li>• Bathroom renovations</li>
                <li>• Flooring replacement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">30 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$550 - $700</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Whole house projects</li>
                <li>• Construction debris</li>
                <li>• Large cleanouts</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">40 Yard Dumpster</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$650 - $825</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Commercial projects</li>
                <li>• Industrial cleanup</li>
                <li>• Multi-unit buildings</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Prices include 7-day rental period. Detroit renewal projects may qualify for special rates.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Metro Detroit Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Detroit Proper</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Downtown</li>
                <li>Midtown</li>
                <li>Corktown</li>
                <li>Eastern Market</li>
                <li>Belle Isle</li>
                <li>Riverfront</li>
                <li>New Center</li>
                <li>Campus Martius</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Oakland County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Birmingham</li>
                <li>Troy</li>
                <li>Southfield</li>
                <li>Royal Oak</li>
                <li>Farmington Hills</li>
                <li>Novi</li>
                <li>Rochester Hills</li>
                <li>Bloomfield Hills</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Wayne County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Dearborn</li>
                <li>Livonia</li>
                <li>Westland</li>
                <li>Canton</li>
                <li>Redford</li>
                <li>Garden City</li>
                <li>Inkster</li>
                <li>Taylor</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Macomb County</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Sterling Heights</li>
                <li>Warren</li>
                <li>Clinton Township</li>
                <li>Macomb Township</li>
                <li>Chesterfield</li>
                <li>Shelby Township</li>
                <li>St. Clair Shores</li>
                <li>Roseville</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Extended Service:</strong> We serve all of Wayne, Oakland, and Macomb counties, 
              plus Washtenaw, Livingston, and other Southeast Michigan areas.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Detroit-Specific Dumpster Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Urban Renewal Projects</h3>
              <p className="text-gray-600">
                Detroit's revitalization creates unique challenges. We specialize in historic building renovations and coordinate with city development programs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Auto Industry Coordination</h3>
              <p className="text-gray-600">
                We work with automotive facilities and suppliers on specialized industrial cleanup projects. Experience with manufacturing debris and schedules.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Winter Weather Operations</h3>
              <p className="text-gray-600">
                Michigan winters are harsh. We maintain year-round service with specialized equipment for snow and ice conditions.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Stadium and Event Coordination</h3>
              <p className="text-gray-600">
                Tigers, Lions, Red Wings games affect downtown traffic. We plan deliveries around sports schedules and major events.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-1">Historic District Requirements</h3>
              <p className="text-gray-600">
                Corktown and other historic areas have preservation rules. We understand heritage building renovation requirements and debris handling.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Rent in Detroit?</h2>
          <p className="mb-6 text-gray-700">Get quotes from licensed Michigan providers</p>
          <Link href="/" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition">
            Get Detroit Quotes Now
          </Link>
        </div>
      </div>
    </main>
  );
}