// app/sitemap.js - COMPLETE SITEMAP WITH ALL ACTUAL PAGES
export default function sitemap() {
  const baseUrl = 'https://dumpster-size-calculator.com';
  
  const routes = [
    // MAIN PAGES
    '',
    '/blog',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/disclosure',

    // LOCAL HUB PAGES
    '/local',
    '/local/guides',
    '/local/permits',

    // EXISTING BLOG POSTS (CONFIRMED WORKING)
    '/blog/what-size-dumpster-do-i-need',           
    '/blog/dumpster-rental-cost-guide',             
    '/blog/prohibited-items-dumpster',              
    '/blog/bathroom-remodel-dumpster-size',
    '/blog/kitchen-renovation-dumpster-size', 
    '/blog/roof-replacement-dumpster-size',
    '/blog/do-i-need-dumpster-permit',
    '/blog/concrete-disposal-guide',
    '/blog/roofing-shingle-weight-calculator',
    '/blog/how-to-avoid-dumpster-overage-fees',
    '/blog/dumpster-weight-vs-volume',

    // NEW DUMPSTER SIZE GUIDES
    '/blog/10-yard-dumpster-guide',
    '/blog/20-yard-dumpster-guide', 
    '/blog/30-yard-dumpster-guide',
    '/blog/40-yard-dumpster-guide',

    // NEW ROOM/PROJECT GUIDES (ALL FROM YOUR FILE STRUCTURE)
    '/blog/basement-cleanout-dumpster-size',
    '/blog/garage-cleanout-dumpster-size',
    '/blog/attic-cleanout-dumpster-size',
    '/blog/weight-limits-overage-fees',
    '/blog/bedroom-renovation-dumpster-size', 
    '/blog/whole-house-renovation-dumpster-size',

    // ALL PROJECT GUIDES (MATCHING YOUR FILES)
    '/blog/deck-removal-dumpster-size',
    '/blog/flooring-removal-dumpster-size',
    '/blog/flooring-replacement-dumpster-size',
    '/blog/living-room-renovation-dumpster-size',
    '/blog/construction-debris-dumpster-size',
    '/blog/landscaping-debris-dumpster-size',
    '/blog/moving-cleanout-dumpster-size',

    // CITY-SPECIFIC PERMIT GUIDES (FROM YOUR FILES)
    '/blog/chicago-dumpster-permit-guide',
    '/blog/houston-dumpster-permit-guide',
    '/blog/los-angeles-dumpster-permit-guide',
    '/blog/nyc-dumpster-permit-guide',
    '/blog/phoenix-dumpster-permit-guide',
    '/blog/philadelphia-dumpster-permit-guide',
    '/blog/atlanta-dumpster-permit-guide',
    '/blog/denver-dumpster-permit-guide',
    '/blog/dallas-dumpster-permit-guide',
    '/blog/boston-dumpster-permit-guide',
    '/blog/seattle-dumpster-permit-guide',
    '/blog/detroit-dumpster-permit-guide',
    '/blog/portland-dumpster-permit-guide',
    '/blog/charlotte-dumpster-permit-guide',
    '/blog/austin-dumpster-permit-guide',
    '/blog/san-antonio-dumpster-permit-guide',
    '/blog/san-diego-dumpster-permit-guide',
    '/blog/miami-dumpster-permit-guide',
    '/blog/san-francisco-dumpster-permit-guide',
    '/blog/washington-dc-dumpster-permit-guide',

    // ADDITIONAL REGULATION GUIDES  
    '/blog/hoa-dumpster-rules',
    '/blog/dumpster-permit-requirements',
    '/blog/dumpster-placement-rules',

    // ALL ACTUAL STATE PAGES (15 STATES BUILT)
    '/local/guides/california',
    '/local/guides/texas', 
    '/local/guides/new-york-state',
    '/local/guides/illinois',
    '/local/guides/florida',
    '/local/guides/georgia',
    '/local/guides/washington',
    '/local/guides/colorado',
    '/local/guides/massachusetts',
    '/local/guides/michigan', 
    '/local/guides/oregon',
    '/local/guides/north-carolina',
    '/local/guides/pennsylvania',
    '/local/guides/arizona',
    '/local/guides/washington-dc',

    // PRIORITY CITY PAGES (TOP MARKETS)
    '/dumpster-rental-new-york',        // Highest search volume
    '/dumpster-rental-los-angeles',     // Second biggest market  
    '/dumpster-rental-chicago',         // Major midwest hub
    '/dumpster-rental-houston',         // Largest Texas market
    '/dumpster-rental-miami',           // Southeast hub
    '/dumpster-rental-philadelphia',    // Your local market
    '/dumpster-rental-phoenix',         // Southwest hub
    '/dumpster-rental-dallas',          // Texas market
    '/dumpster-rental-atlanta',         // Southeast market
    '/dumpster-rental-seattle',         // Pacific Northwest
    '/dumpster-rental-denver',          // Mountain West
    '/dumpster-rental-boston',          // New England
    '/dumpster-rental-detroit',         // Rust Belt
    '/dumpster-rental-portland',        // Pacific Northwest
    '/dumpster-rental-charlotte',       // Southeast
    '/dumpster-rental-austin',          // Texas tech hub
    '/dumpster-rental-san-antonio',     // Texas market
    '/dumpster-rental-san-diego',       // Southern California
    '/dumpster-rental-san-francisco',   // Northern California
    '/dumpster-rental-washington-dc'    // DMV area
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 
                    route === '/local' || route === '/local/guides' || route === '/local/permits' ? 'weekly' :
                    route.includes('blog') ? 'weekly' : 
                    route.includes('dumpster-rental') ? 'monthly' : 'monthly',
    priority: route === '' ? 1.0 :
             route === '/local' ? 0.9 :
             route === '/local/guides' || route === '/local/permits' ? 0.8 :
             route.includes('blog') && (route.includes('bathroom') || route.includes('kitchen') || route.includes('20-yard') || route.includes('what-size')) ? 0.9 :
             route.includes('blog') ? 0.8 : 
             route.includes('dumpster-rental') && (route.includes('new-york') || route.includes('los-angeles') || route.includes('chicago')) ? 0.8 :
             route.includes('dumpster-rental') ? 0.7 : 
             0.6,
  }));
}