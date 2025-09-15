// app/sitemap.js - FIXED TO USE /disclosure
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
    '/disclosure',  // FIXED: Use /disclosure instead of /affiliate-disclosure

    // EXISTING BLOG POSTS
    '/blog/what-size-dumpster-do-i-need',           
    '/blog/dumpster-rental-cost-guide',             
    '/blog/prohibited-items-dumpster',              
    '/blog/bathroom-remodel-dumpster-size',
    '/blog/kitchen-renovation-dumpster-size', 
    '/blog/roof-replacement-dumpster-size',

    // NEW DUMPSTER SIZE GUIDES
    '/blog/10-yard-dumpster-guide',
    '/blog/20-yard-dumpster-guide', 
    '/blog/30-yard-dumpster-guide',
    '/blog/40-yard-dumpster-guide',

    // NEW ROOM/PROJECT GUIDES
    '/blog/basement-cleanout-dumpster-size',
    '/blog/garage-cleanout-dumpster-size',
    '/blog/deck-removal-dumpster-size',
    '/blog/flooring-replacement-dumpster-size',
    '/blog/whole-house-renovation-dumpster-size',
    '/blog/construction-debris-dumpster-size',
    '/blog/landscaping-debris-dumpster-size',
    '/blog/moving-cleanout-dumpster-size',

    // ALL CITY PAGES
    '/dumpster-rental-atlanta',
    '/dumpster-rental-austin',
    '/dumpster-rental-boston',
    '/dumpster-rental-charlotte',
    '/dumpster-rental-chicago',
    '/dumpster-rental-dallas',
    '/dumpster-rental-denver',
    '/dumpster-rental-detroit',
    '/dumpster-rental-houston',
    '/dumpster-rental-los-angeles',
    '/dumpster-rental-miami',
    '/dumpster-rental-new-york',
    '/dumpster-rental-philadelphia',
    '/dumpster-rental-phoenix',
    '/dumpster-rental-portland',
    '/dumpster-rental-san-antonio',
    '/dumpster-rental-san-diego',
    '/dumpster-rental-san-francisco',
    '/dumpster-rental-seattle',
    '/dumpster-rental-washington-dc'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 
                    route.includes('blog') ? 'weekly' : 
                    route.includes('dumpster-rental') ? 'monthly' : 'monthly',
    priority: route === '' ? 1.0 : 
             route.includes('blog') && (route.includes('bathroom') || route.includes('kitchen') || route.includes('20-yard') || route.includes('what-size')) ? 0.9 :
             route.includes('blog') ? 0.8 : 
             route.includes('dumpster-rental') && (route.includes('new-york') || route.includes('los-angeles') || route.includes('chicago')) ? 0.8 :
             route.includes('dumpster-rental') ? 0.7 : 
             0.6,
  }));
}