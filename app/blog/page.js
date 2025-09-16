// app/blog/page.js - COMPLETE WITH ALL BLOG POSTS (SERVER-SIDE COMPATIBLE)
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function BlogIndex() {
  
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const category = params.get('category');
      if (category) {
        setSelectedCategory(category);
      }
    }
  }, []);
  const blogPosts = [
    // FEATURED HIGH-PRIORITY POSTS FIRST
    {
      title: "Do I Need a Dumpster Permit? Complete Guide by State & City",
      excerpt: "Complete guide to dumpster permits. Learn when you need a permit, costs by city, how to apply, and alternatives. Covers all 50 states and major cities.",
      slug: "do-i-need-dumpster-permit",
      category: "Regulations",
      readTime: "12 min read",
      publishDate: "September 15, 2025",
      featured: true
    },
    {
      title: "Garage Cleanout Dumpster Size: Complete Guide & Cost Breakdown",
      excerpt: "Complete guide to choosing the right dumpster size for garage cleanouts. Includes pricing, tips for organizing, and what you can/cannot dispose of.",
      slug: "garage-cleanout-dumpster-size",
      category: "House Areas",
      readTime: "9 min read",
      publishDate: "September 15, 2025",
      featured: true
    },
    
    // EXISTING FEATURED POSTS
    {
      title: "What Size Dumpster for Bathroom Remodel? Complete 2025 Guide",
      excerpt: "Planning a bathroom renovation? Learn exactly what dumpster size you need, costs, and tips for debris disposal. Covers everything from small updates to full gut renovations.",
      slug: "bathroom-remodel-dumpster-size",
      category: "Bathroom Renovation",
      readTime: "8 min read",
      publishDate: "January 15, 2025",
      featured: true
    },
    {
      title: "Kitchen Renovation Dumpster Size Guide: What Size Do You Need?",
      excerpt: "Complete guide to choosing the right dumpster size for kitchen remodels. From cabinet replacement to full gut renovations, learn what size fits your project scope.",
      slug: "kitchen-renovation-dumpster-size", 
      category: "Kitchen Renovation",
      readTime: "10 min read",
      publishDate: "January 12, 2025",
      featured: true
    },
    {
      title: "What Size Dumpster Do I Need? Complete Size Guide",
      excerpt: "Learn how to choose the right dumpster size for any project. Complete guide covering 10, 20, 30, and 40-yard dumpsters with real project examples.",
      slug: "what-size-dumpster-do-i-need",
      category: "General Tips", 
      readTime: "7 min read",
      publishDate: "January 3, 2025",
      featured: true
    },
    {
      slug: 'prohibited-items-dumpster',
      title: 'What Can\'t Go in a Dumpster? Complete Prohibited Items List',
      excerpt: 'Complete guide to items you cannot put in a dumpster rental. Learn about prohibited materials, disposal alternatives, and how to avoid extra fees.',
      publishDate: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Regulations',
      featured: true
    },

    // NEW HIGH-PRIORITY HOUSE AREAS
    {
      title: "Attic Cleanout Dumpster Size Guide: Insulation & Storage Removal",
      excerpt: "Planning an attic cleanout? Learn what dumpster size you need, how to handle insulation and old belongings, plus cost-saving tips for seasonal cleanouts.",
      slug: "attic-cleanout-dumpster-size",
      category: "House Areas",
      readTime: "8 min read",
      publishDate: "January 16, 2025",
      featured: false
    },
    {
      title: "Basement Cleanout Dumpster Size Guide: Water Damage & Storage Removal",
      excerpt: "Basement cleanouts often involve water damage, mold remediation, and decades of stored belongings. Learn how to choose the right dumpster size for wet materials and heavy debris.",
      slug: "basement-cleanout-dumpster-size",
      category: "House Areas",
      readTime: "8 min read",
      publishDate: "January 16, 2025",
      featured: false
    },

    // NEW REGULATIONS CATEGORY EXPANSION
    {
      title: "Dumpster Weight Limits & Overage Fees: How to Avoid Extra Charges",
      excerpt: "Avoid costly overage fees! Complete guide to dumpster weight limits, how weights are calculated, and tips to stay under the limit for every project type.",
      slug: "weight-limits-overage-fees",
      category: "Regulations",
      readTime: "8 min read",
      publishDate: "January 18, 2025",
      featured: false
    },
    {
      title: "HOA Dumpster Rules & Restrictions: Complete Guide",
      excerpt: "Navigate HOA dumpster rules with confidence. Learn common restrictions, how to get approval, and alternatives for strict HOA communities.",
      slug: "hoa-dumpster-rules",
      category: "Regulations",
      readTime: "7 min read",
      publishDate: "September 16, 2025",
      featured: false
    },

    // NEW RENOVATION GUIDES
    {
      title: "Bedroom Renovation Dumpster Size Guide: Complete Remodel Planning",
      excerpt: "Bedroom renovations range from simple cosmetic updates to complete gut jobs. Learn how to choose the right dumpster size based on your renovation scope and room size.",
      slug: "bedroom-renovation-dumpster-size",
      category: "Bedroom Renovation",
      readTime: "7 min read",
      publishDate: "January 20, 2025",
      featured: false
    },
    {
      title: "Whole House Renovation Dumpster Size Guide: Complete Planning Strategy",
      excerpt: "Whole house renovations generate massive amounts of debris that require strategic planning. Learn multi-dumpster strategies, phasing options, and cost optimization techniques.",
      slug: "whole-house-renovation-dumpster-size",
      category: "Major Renovation",
      readTime: "12 min read",
      publishDate: "January 22, 2025",
      featured: false
    },

    // DUMPSTER SIZE GUIDES
    {
      title: "10 Yard Dumpster Guide: Small Projects & Pricing",
      excerpt: "Complete guide to 10 yard dumpsters. Perfect for small renovations, cleanouts, and minor construction projects. Dimensions, costs, and project examples.",
      slug: "10-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "6 min read",
      publishDate: "January 8, 2025",
      featured: false
    },
    {
      title: "20 Yard Dumpster Guide: The Most Popular Size",
      excerpt: "20 yard dumpster complete guide. Perfect for kitchen renovations, large bathroom remodels, and flooring projects. Dimensions, pricing, and project examples.",
      slug: "20-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "7 min read",
      publishDate: "January 9, 2025",
      featured: false
    },
    {
      title: "30 Yard Dumpster Guide: Large Projects & Construction",
      excerpt: "30 yard dumpster complete guide. Ideal for new construction, large renovations, and commercial projects. Full breakdown of costs and capabilities.",
      slug: "30-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "8 min read",
      publishDate: "January 10, 2025",
      featured: false
    },
    {
      title: "40 Yard Dumpster Guide: Commercial & Major Construction",
      excerpt: "40 yard dumpster complete guide. The largest standard size for major commercial projects, large construction, and industrial cleanouts.",
      slug: "40-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "7 min read",
      publishDate: "January 11, 2025",
      featured: false
    },

    // ADDITIONAL PROJECT GUIDES
    {
      title: "Roof Replacement Dumpster Size Calculator & Guide",
      excerpt: "Roof replacement projects generate significant debris. Learn what dumpster size you need based on roof square footage, materials, and local disposal requirements.",
      slug: "roof-replacement-dumpster-size",
      category: "Roofing",
      readTime: "7 min read", 
      publishDate: "January 10, 2025",
      featured: false
    },
    {
      title: "Dumpster Rental Cost Guide: What You'll Really Pay in 2025",
      excerpt: "Complete breakdown of dumpster rental costs including size pricing, delivery fees, permits, and hidden charges. Get accurate estimates for your project budget.",
      slug: "dumpster-rental-cost-guide",
      category: "Pricing",
      readTime: "9 min read",
      publishDate: "January 7, 2025",
      featured: false
    },

    // ALL PROJECT GUIDES (from your actual file structure)
    {
      title: "Deck Removal Dumpster Size: Complete Teardown Guide",
      excerpt: "Planning to remove an old deck? Learn what dumpster size you need based on deck materials, size, and disposal requirements. Wood, composite, and metal deck removal.",
      slug: "deck-removal-dumpster-size",
      category: "Outdoor Projects",
      readTime: "6 min read",
      publishDate: "January 25, 2025",
      featured: false
    },
    {
      title: "Flooring Removal Dumpster Size: Complete Demo Guide",
      excerpt: "Flooring demolition creates significant debris. Learn what dumpster size you need for carpet, hardwood, tile, and laminate removal projects.",
      slug: "flooring-removal-dumpster-size",
      category: "Flooring",
      readTime: "7 min read",
      publishDate: "January 25, 2025",
      featured: false
    },
    {
      title: "Flooring Replacement Dumpster Size: Complete Material Guide", 
      excerpt: "Flooring replacement generates both old and new material waste. Learn what dumpster size you need for complete flooring renovation projects.",
      slug: "flooring-replacement-dumpster-size",
      category: "Flooring",
      readTime: "7 min read",
      publishDate: "January 26, 2025",
      featured: false
    },
    {
      title: "Living Room Renovation Dumpster Size: Complete Remodel Guide",
      excerpt: "Living room renovations involve furniture, flooring, and entertainment systems. Learn how to size dumpsters for family room and living space remodels.",
      slug: "living-room-renovation-dumpster-size",
      category: "Living Room Renovation",
      readTime: "8 min read",
      publishDate: "January 24, 2025",
      featured: false
    },
    {
      title: "Construction Debris Dumpster Size: Commercial & Residential Guide",
      excerpt: "Construction projects generate diverse debris types. Learn how to size dumpsters for new construction, renovations, and commercial building projects.",
      slug: "construction-debris-dumpster-size",
      category: "Construction",
      readTime: "9 min read",
      publishDate: "January 27, 2025", 
      featured: false
    },
    {
      title: "Landscaping Cleanup Dumpster Size: Seasonal & Project Guide",
      excerpt: "Landscaping cleanups require proper debris disposal. Learn what dumpster size you need for seasonal yard work, tree trimming, and garden renovations.",
      slug: "landscaping-cleanup-dumpster-size",
      category: "Landscaping",
      readTime: "6 min read",
      publishDate: "January 28, 2025",
      featured: false
    },
    {
      title: "Landscaping Debris Dumpster Size: Yard Waste & Tree Removal",
      excerpt: "Landscaping projects create unique disposal challenges. Learn what dumpster size you need for tree removal, yard cleanups, and landscaping renovations.",
      slug: "landscaping-debris-dumpster-size",
      category: "Landscaping",
      readTime: "6 min read",
      publishDate: "January 28, 2025",
      featured: false
    },
    {
      title: "Moving Cleanout Dumpster Size: Complete Relocation Guide",
      excerpt: "Moving generates significant unwanted items. Learn how to size dumpsters for house cleanouts, estate sales, and relocation debris disposal.",
      slug: "moving-cleanout-dumpster-size",
      category: "Cleanouts",
      readTime: "7 min read", 
      publishDate: "January 29, 2025",
      featured: false
    },

    // CITY-SPECIFIC PERMIT GUIDES
    {
      title: "Chicago Dumpster Permit Guide: Requirements & Applications",
      excerpt: "Complete guide to Chicago dumpster permits. Learn requirements, costs, application process, and alternatives for Chicagoland area projects.",
      slug: "chicago-dumpster-permit-guide",
      category: "Local Permits",
      readTime: "8 min read",
      publishDate: "February 1, 2025",
      featured: false
    },
    {
      title: "Houston Dumpster Permit Guide: Harris County Requirements",
      excerpt: "Houston dumpster permit requirements and application process. Complete guide for Harris County and surrounding areas including permit alternatives.",
      slug: "houston-dumpster-permit-guide",
      category: "Local Permits", 
      readTime: "7 min read",
      publishDate: "February 2, 2025",
      featured: false
    },
    {
      title: "Los Angeles Dumpster Permit Guide: City Requirements",
      excerpt: "LA dumpster permit requirements, costs, and application process. Complete guide for Los Angeles County and surrounding municipalities.",
      slug: "los-angeles-dumpster-permit-guide",
      category: "Local Permits",
      readTime: "8 min read", 
      publishDate: "February 3, 2025",
      featured: false
    },
    {
      title: "NYC Dumpster Permit Guide: Complete Requirements",
      excerpt: "New York City dumpster permit requirements and DOT applications. Complete guide for all five boroughs including costs and alternatives.",
      slug: "nyc-dumpster-permit-guide",
      category: "Local Permits",
      readTime: "9 min read",
      publishDate: "February 4, 2025", 
      featured: false
    },
    {
      title: "Phoenix Dumpster Permit Guide: Maricopa County Rules",
      excerpt: "Phoenix dumpster permit requirements and application process. Complete guide for Maricopa County including residential and commercial permits.",
      slug: "phoenix-dumpster-permit-guide",
      category: "Local Permits",
      readTime: "7 min read",
      publishDate: "February 5, 2025",
      featured: false
    },

    // ADDITIONAL GUIDES
    {
      title: "Dumpster Permit Requirements: Complete State-by-State Guide",
      excerpt: "Comprehensive guide to dumpster permit requirements across all 50 states. Learn when permits are required and how to obtain them.",
      slug: "dumpster-permit-requirements",
      category: "Regulations",
      readTime: "10 min read",
      publishDate: "February 6, 2025",
      featured: false
    },
    {
      title: "Dumpster Placement Rules: Complete Property Guide",
      excerpt: "Learn proper dumpster placement rules for driveways, streets, and properties. Avoid fines and ensure safe, legal placement.",
      slug: "dumpster-placement-rules",
      category: "Regulations",
      readTime: "6 min read",
      publishDate: "February 7, 2025",
      featured: false
    }
  ];

  const categories = ["All Posts", "Regulations", "House Areas", "Dumpster Sizes", "Kitchen Renovation", "Bathroom Renovation", "Bedroom Renovation", "Living Room Renovation", "Major Renovation", "Roofing", "Pricing", "Outdoor Projects", "Flooring", "Construction", "Landscaping", "Cleanouts", "Local Permits", "General Tips"];

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Size Calculator Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert guides for choosing the right dumpster size for any project
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === "All Posts" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {blogPosts.filter(post => post.featured).map((post) => (
                <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.publishDate}</span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Description */}
        {selectedCategory === "Local Guides" && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-purple-800 mb-2">Local Market Guides</h2>
            <p className="text-purple-700">
              In-depth analysis of dumpster rental markets in major cities. Compare providers, understand pricing trends, 
              and find the best companies in your area. These guides complement our city-specific pricing pages.
            </p>
          </div>
        )}

        {selectedCategory === "Local Permits" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-red-800 mb-2">Local Permit Requirements</h2>
            <p className="text-red-700">
              City-specific dumpster permit guides covering requirements, costs, application processes, and regulations. 
              Essential reading before placing a dumpster on public property.
            </p>
          </div>
        )}

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    post.category === 'Local Permits' ? 'bg-red-100 text-red-800' :
                    post.category === 'Local Guides' ? 'bg-purple-100 text-purple-800' :
                    post.category === 'Dumpster Sizes' ? 'bg-green-100 text-green-800' :
                    post.category === 'Pricing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.publishDate}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              No articles found in "{selectedCategory}"
            </h3>
            <button 
              onClick={() => setSelectedCategory("All Posts")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              View All Posts
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
<div className="bg-blue-600 rounded-lg p-8 text-center text-white mb-12">
  <h2 className="text-2xl font-bold mb-4">
    Stay Updated on Renovation Tips
  </h2>
  <p className="mb-6">
    Get expert advice on dumpster sizing, cost-saving tips, and renovation guides delivered to your inbox.
  </p>
  <div className="max-w-md mx-auto flex gap-3">
    <label htmlFor="blog-newsletter-email" className="sr-only">
      Email Address
    </label>
    <input 
      type="email"
      id="blog-newsletter-email"
      name="email"
      autocomplete="email"
      placeholder="Enter your email"
      className="flex-1 px-4 py-2 rounded text-gray-900 placeholder-gray-500 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-white"
    />
    <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
      Subscribe
    </button>
  </div>
</div>

        {/* Popular Topics - UPDATED WITH NEW CATEGORIES */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">House Areas</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/garage-cleanout-dumpster-size" className="text-blue-600 hover:underline">Garage Cleanouts</Link></li>
                <li><Link href="/blog/attic-cleanout-dumpster-size" className="text-blue-600 hover:underline">Attic Cleanouts</Link></li>
                <li><Link href="/blog/basement-cleanout-dumpster-size" className="text-blue-600 hover:underline">Basement Cleanouts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Regulations</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/do-i-need-dumpster-permit" className="text-blue-600 hover:underline">Permit Requirements</Link></li>
                <li><Link href="/blog/prohibited-items-dumpster" className="text-blue-600 hover:underline">Prohibited Items</Link></li>
                <li><Link href="/blog/hoa-dumpster-rules" className="text-blue-600 hover:underline">HOA Rules</Link></li>
                <li><Link href="/blog/weight-limits-overage-fees" className="text-blue-600 hover:underline">Weight Limits</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Renovations</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/bathroom-remodel-dumpster-size" className="text-blue-600 hover:underline">Bathroom Remodels</Link></li>
                <li><Link href="/blog/kitchen-renovation-dumpster-size" className="text-blue-600 hover:underline">Kitchen Renovations</Link></li>
                <li><Link href="/blog/bedroom-renovation-dumpster-size" className="text-blue-600 hover:underline">Bedroom Renovations</Link></li>
                <li><Link href="/blog/whole-house-renovation-dumpster-size" className="text-blue-600 hover:underline">Whole House</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Dumpster Sizes</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/10-yard-dumpster-guide" className="text-blue-600 hover:underline">10 Yard Guide</Link></li>
                <li><Link href="/blog/20-yard-dumpster-guide" className="text-blue-600 hover:underline">20 Yard Guide</Link></li>
                <li><Link href="/blog/30-yard-dumpster-guide" className="text-blue-600 hover:underline">30 Yard Guide</Link></li>
                <li><Link href="/blog/40-yard-dumpster-guide" className="text-blue-600 hover:underline">40 Yard Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing a Dumpster Size?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our free calculator to get instant recommendations for your specific project
          </p>
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
          >
            Try Our Calculator →
          </Link>
        </div>
      </div>
    </main>
  );
}