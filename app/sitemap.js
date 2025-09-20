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

    // NEW STRATEGIC BLOG POSTS (BATCH 1-5)
    '/blog/estate-cleanout-dumpster-size',
    '/blog/dumpster-rental-duration-calculator',
    '/blog/seasonal-dumpster-rental-guide',
    '/blog/emergency-disaster-cleanup-dumpster-guide',
    '/blog/diy-vs-professional-dumpster-loading',

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

    // NEW CITY PERMIT GUIDES (FOR THE NEW CITIES WE ADDED)
    '/blog/tampa-dumpster-permit-guide',
    '/blog/jacksonville-dumpster-permit-guide', 
    '/blog/orlando-dumpster-permit-guide',
    '/blog/fort-worth-dumpster-permit-guide',
    '/blog/san-jose-dumpster-permit-guide',
    '/blog/raleigh-dumpster-permit-guide',
    '/blog/virginia-beach-dumpster-permit-guide',
    '/blog/omaha-dumpster-permit-guide',
    '/blog/oklahoma-city-dumpster-permit-guide',
    '/blog/nashville-dumpster-permit-guide',
    '/blog/memphis-dumpster-permit-guide',
    '/blog/kansas-city-dumpster-permit-guide',
    '/blog/columbus-dumpster-permit-guide',
    '/blog/louisville-dumpster-permit-guide',
    '/blog/las-vegas-dumpster-permit-guide',

    // ADDITIONAL REGULATION GUIDES  
    '/blog/hoa-dumpster-rules',
    '/blog/dumpster-permit-requirements',
    '/blog/dumpster-placement-rules',

    // ALL ACTUAL STATE PAGES (NOW 23 STATES TOTAL)
    // EXISTING STATES (UPDATED WITH MORE CITIES)
    '/local/guides/california',        // Now has 4 cities: LA, San Diego, SF, San Jose
    '/local/guides/texas',             // Now has 5 cities: Houston, Dallas, San Antonio, Austin, Fort Worth
    '/local/guides/florida',           // Now has 4 cities: Miami, Tampa, Jacksonville, Orlando
    '/local/guides/north-carolina',    // Now has 2 cities: Charlotte, Raleigh
    
    // EXISTING STATES (UNCHANGED)
    '/local/guides/new-york-state',
    '/local/guides/illinois',
    '/local/guides/georgia',
    '/local/guides/washington',
    '/local/guides/colorado',
    '/local/guides/massachusetts',
    '/local/guides/michigan', 
    '/local/guides/oregon',
    '/local/guides/pennsylvania',
    '/local/guides/arizona',
    '/local/guides/washington-dc',

    // NEW STATE PAGES (8 NEW STATES)
    '/local/guides/virginia',          // Virginia Beach
    '/local/guides/nebraska',          // Omaha
    '/local/guides/oklahoma',          // Oklahoma City
    '/local/guides/tennessee',         // Nashville, Memphis
    '/local/guides/missouri',          // Kansas City
    '/local/guides/ohio',              // Columbus
    '/local/guides/kentucky',          // Louisville
    '/local/guides/nevada',            // Las Vegas

    // PRIORITY CITY PAGES (TOP MARKETS - EXISTING)
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
    '/dumpster-rental-washington-dc',   // DMV area

    // NEW CITY PAGES (FOR THE NEW CITIES WE ADDED)
    '/dumpster-rental-tampa',           // Florida major market
    '/dumpster-rental-jacksonville',    // Florida major market
    '/dumpster-rental-orlando',         // Florida major market
    '/dumpster-rental-fort-worth',      // Texas DFW market
    '/dumpster-rental-san-jose',        // Silicon Valley
    '/dumpster-rental-raleigh',         // North Carolina capital
    '/dumpster-rental-virginia-beach',  // Virginia coast
    '/dumpster-rental-omaha',           // Nebraska hub
    '/dumpster-rental-oklahoma-city',   // Oklahoma capital
    '/dumpster-rental-nashville',       // Tennessee music city
    '/dumpster-rental-memphis',         // Tennessee logistics hub
    '/dumpster-rental-kansas-city',     // Missouri hub
    '/dumpster-rental-columbus',        // Ohio capital
    '/dumpster-rental-louisville',      // Kentucky derby city
    '/dumpster-rental-las-vegas'        // Nevada entertainment capital
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