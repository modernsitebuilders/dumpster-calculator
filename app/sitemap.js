// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://dumpster-size-calculator.com';
  
  const routes = [
    '',
    '/blog',
    '/blog/what-size-dumpster-do-i-need',           
    '/blog/dumpster-rental-cost-guide',             
    '/blog/prohibited-items-dumpster',              
    '/blog/bathroom-remodel-dumpster-size',
    '/blog/kitchen-renovation-dumpster-size', 
    '/blog/roof-replacement-dumpster-size',
    '/philadelphia-dumpster-rental',
    '/miami-dumpster-rental',
    '/houston-dumpster-rental',
    '/dumpster-rental-new-york',        // ADD THIS
    '/dumpster-rental-chicago',         // ADD THIS  
    '/dumpster-rental-los-angeles',     // ADD THIS
    '/contact',
    '/privacy',
    '/terms',
    '/disclosure'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route.includes('blog') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('blog') ? 0.8 : 0.7,
  }));
}