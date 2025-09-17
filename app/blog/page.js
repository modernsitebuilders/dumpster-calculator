// app/blog/page.js - Complete with all blog post images
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
      featured: true,
      image: "/images/blog/building-permit.jpg"
    },
    {
      title: "Garage Cleanout Dumpster Size: Complete Guide & Cost Breakdown",
      excerpt: "Complete guide to choosing the right dumpster size for garage cleanouts. Includes pricing, tips for organizing, and what you can/cannot dispose of.",
      slug: "garage-cleanout-dumpster-size",
      category: "House Areas",
      readTime: "9 min read",
      publishDate: "September 15, 2025",
      featured: true,
      image: "/images/blog/garage-cleanout.jpg"
    },
    {
      title: "What Size Dumpster for Bathroom Remodel? Complete 2025 Guide",
      excerpt: "Planning a bathroom renovation? Learn exactly what dumpster size you need, costs, and tips for debris disposal. Covers everything from small updates to full gut renovations.",
      slug: "bathroom-remodel-dumpster-size",
      category: "Bathroom Renovation",
      readTime: "8 min read",
      publishDate: "January 15, 2025",
      featured: true,
      image: "/images/blog/bathroom-remodel.jpg"
    },
    {
      title: "Kitchen Renovation Dumpster Size Guide: What Size Do You Need?",
      excerpt: "Complete guide to choosing the right dumpster size for kitchen remodels. From cabinet replacement to full gut renovations, learn what size fits your project scope.",
      slug: "kitchen-renovation-dumpster-size", 
      category: "Kitchen Renovation",
      readTime: "10 min read",
      publishDate: "January 12, 2025",
      featured: true,
      image: "/images/blog/kitchen-renovation.jpg"
    },
    {
      title: "What Size Dumpster Do I Need? Complete Size Guide",
      excerpt: "Learn how to choose the right dumpster size for any project. Complete guide covering 10, 20, 30, and 40-yard dumpsters with real project examples.",
      slug: "what-size-dumpster-do-i-need",
      category: "General Tips", 
      readTime: "7 min read",
      publishDate: "January 3, 2025",
      featured: true,
      image: "/images/blog/construction-debris.jpg"
    },
    {
      slug: 'prohibited-items-dumpster',
      title: 'What Can\'t Go in a Dumpster? Complete Prohibited Items List',
      excerpt: 'Complete guide to items you cannot put in a dumpster rental. Learn about prohibited materials, disposal alternatives, and how to avoid extra fees.',
      publishDate: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Regulations',
      featured: true,
      image: "/images/blog/prohibited-items.jpg"
    },

    // NON-FEATURED POSTS
    {
      title: "Attic Cleanout Dumpster Size Guide: Insulation & Storage Removal",
      excerpt: "Planning an attic cleanout? Learn what dumpster size you need, how to handle insulation and old belongings, plus cost-saving tips for seasonal cleanouts.",
      slug: "attic-cleanout-dumpster-size",
      category: "House Areas",
      readTime: "8 min read",
      publishDate: "January 16, 2025",
      featured: false,
      image: "/images/blog/attic-cleanout.jpg"
    },
    {
      title: "Basement Cleanout Dumpster Size Guide: Water Damage & Storage Removal",
      excerpt: "Basement cleanouts often involve water damage, mold remediation, and decades of stored belongings. Learn how to choose the right dumpster size for wet materials and heavy debris.",
      slug: "basement-cleanout-dumpster-size",
      category: "House Areas",
      readTime: "8 min read",
      publishDate: "January 16, 2025",
      featured: false,
      image: "/images/blog/basement-cleanout.jpg"
    },
    {
      title: "Dumpster Weight Limits & Overage Fees: How to Avoid Extra Charges",
      excerpt: "Avoid costly overage fees! Complete guide to dumpster weight limits, how weights are calculated, and tips to stay under the limit for every project type.",
      slug: "weight-limits-overage-fees",
      category: "Regulations",
      readTime: "8 min read",
      publishDate: "January 18, 2025",
      featured: false,
      image: "/images/blog/weight-limits.jpg"
    },
    {
      title: "HOA Dumpster Rules & Restrictions: Complete Guide",
      excerpt: "Navigate HOA dumpster rules with confidence. Learn common restrictions, how to get approval, and alternatives for strict HOA communities.",
      slug: "hoa-dumpster-rules",
      category: "Regulations",
      readTime: "7 min read",
      publishDate: "September 16, 2025",
      featured: false,
      image: "/images/blog/hoa-rules.jpg"
    },
    {
      title: "Bedroom Renovation Dumpster Size Guide: Complete Remodel Planning",
      excerpt: "Bedroom renovations range from simple cosmetic updates to complete gut jobs. Learn how to choose the right dumpster size based on your renovation scope and room size.",
      slug: "bedroom-renovation-dumpster-size",
      category: "Bedroom Renovation",
      readTime: "7 min read",
      publishDate: "January 20, 2025",
      featured: false,
      image: "/images/blog/bedroom-renovation.jpg"
    },
    {
      title: "Whole House Renovation Dumpster Size Guide: Complete Planning Strategy",
      excerpt: "Whole house renovations generate massive amounts of debris that require strategic planning. Learn multi-dumpster strategies, phasing options, and cost optimization techniques.",
      slug: "whole-house-renovation-dumpster-size",
      category: "Major Renovation",
      readTime: "12 min read",
      publishDate: "January 22, 2025",
      featured: false,
      image: "/images/blog/whole-house-renovation.jpg"
    },
    {
      title: "10 Yard Dumpster Guide: Small Projects & Pricing",
      excerpt: "Complete guide to 10 yard dumpsters. Perfect for small renovations, cleanouts, and minor construction projects. Dimensions, costs, and project examples.",
      slug: "10-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "6 min read",
      publishDate: "January 8, 2025",
      featured: false,
      image: "/images/blog/construction-debris.jpg"
    },
    {
      title: "20 Yard Dumpster Guide: The Most Popular Size",
      excerpt: "20 yard dumpster complete guide. Perfect for kitchen renovations, large bathroom remodels, and flooring projects. Dimensions, pricing, and project examples.",
      slug: "20-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "7 min read",
      publishDate: "January 9, 2025",
      featured: false,
      image: "/images/blog/construction-debris.jpg"
    },
    {
      title: "30 Yard Dumpster Guide: Large Projects & Construction",
      excerpt: "30 yard dumpster complete guide. Ideal for new construction, large renovations, and commercial projects. Full breakdown of costs and capabilities.",
      slug: "30-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "8 min read",
      publishDate: "January 10, 2025",
      featured: false,
      image: "/images/blog/construction-debris.jpg"
    },
    {
      title: "40 Yard Dumpster Guide: Commercial & Major Construction",
      excerpt: "40 yard dumpster complete guide. The largest standard size for major commercial projects, large construction, and industrial cleanouts.",
      slug: "40-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "7 min read",
      publishDate: "January 11, 2025",
      featured: false,
      image: "/images/blog/construction-debris.jpg"
    },
    {
      title: "Roof Replacement Dumpster Size Calculator & Guide",
      excerpt: "Roof replacement projects generate significant debris. Learn what dumpster size you need based on roof square footage, materials, and local disposal requirements.",
      slug: "roof-replacement-dumpster-size",
      category: "Roofing",
      readTime: "7 min read", 
      publishDate: "January 10, 2025",
      featured: false,
      image: "/images/blog/construction-debris.jpg"
    },
    {
      title: "Dumpster Rental Cost Guide: What You'll Really Pay in 2025",
      excerpt: "Complete breakdown of dumpster rental costs including size pricing, delivery fees, permits, and hidden charges. Get accurate estimates for your project budget.",
      slug: "dumpster-rental-cost-guide",
      category: "Pricing",
      readTime: "9 min read",
      publishDate: "January 7, 2025",
      featured: false,
      image: "/images/blog/construction-debris.jpg"
    },
    {
      title: "Deck Removal Dumpster Size: Complete Teardown Guide",
      excerpt: "Planning to remove an old deck? Learn what dumpster size you need based on deck materials, size, and disposal requirements. Wood, composite, and metal deck removal.",
      slug: "deck-removal-dumpster-size",
      category: "Outdoor Projects",
      readTime: "6 min read",
      publishDate: "January 25, 2025",
      featured: false,
      image: "/images/blog/deck-removal.jpg"
    },
    {
      title: "Flooring Removal Dumpster Size: Complete Demo Guide",
      excerpt: "Flooring demolition creates significant debris. Learn what dumpster size you need for carpet, hardwood, tile, and laminate removal projects.",
      slug: "flooring-removal-dumpster-size",
      category: "Flooring",
      readTime: "7 min read",
      publishDate: "January 25, 2025",
      featured: false,
      image: "/images/blog/flooring-removal.jpg"
    },
    {
      title: "Flooring Replacement Dumpster Size: Complete Material Guide", 
      excerpt: "Flooring replacement generates both old and new material waste. Learn what dumpster size you need for complete flooring renovation projects.",
      slug: "flooring-replacement-dumpster-size",
      category: "Flooring",
      readTime: "7 min read",
      publishDate: "January 26, 2025",
      featured: false,
      image: "/images/blog/flooring-removal.jpg"
    },
    {
      title: "Living Room Renovation Dumpster Size: Complete Remodel Guide",
      excerpt: "Living room renovations involve furniture, flooring, and entertainment systems. Learn how to size dumpsters for family room and living space remodels.",
      slug: "living-room-renovation-dumpster-size",
      category: "Living Room Renovation",
      readTime: "8 min read",
      publishDate: "January 24, 2025",
      featured: false,
      image: "/images/blog/living-room-renovation.jpg"
    },
    {
      title: "Construction Debris Dumpster Size: Commercial & Residential Guide",
      excerpt: "Construction projects generate diverse debris types. Learn how to size dumpsters for new construction, renovations, and commercial building projects.",
      slug: "construction-debris-dumpster-size",
      category: "Construction",
      readTime: "9 min read",
      publishDate: "January 27, 2025", 
      featured: false,
      image: "/images/blog/construction-debris.jpg"
    },
    {
      title: "Landscaping Cleanup Dumpster Size: Seasonal & Project Guide",
      excerpt: "Landscaping cleanups require proper debris disposal. Learn what dumpster size you need for seasonal yard work, tree trimming, and garden renovations.",
      slug: "landscaping-cleanup-dumpster-size",
      category: "Landscaping",
      readTime: "6 min read",
      publishDate: "January 28, 2025",
      featured: false,
      image: "/images/blog/landscaping-debris.jpg"
    },
    {
      title: "Landscaping Debris Dumpster Size: Yard Waste & Tree Removal",
      excerpt: "Landscaping projects create unique disposal challenges. Learn what dumpster size you need for tree removal, yard cleanups, and landscaping renovations.",
      slug: "landscaping-debris-dumpster-size",
      category: "Landscaping",
      readTime: "6 min read",
      publishDate: "January 28, 2025",
      featured: false,
      image: "/images/blog/landscaping-debris.jpg"
    },
    {
      title: "Moving Cleanout Dumpster Size: Complete Relocation Guide",
      excerpt: "Moving generates significant unwanted items. Learn how to size dumpsters for house cleanouts, estate sales, and relocation debris disposal.",
      slug: "moving-cleanout-dumpster-size",
      category: "Cleanouts",
      readTime: "7 min read", 
      publishDate: "January 29, 2025",
      featured: false,
      image: "/images/blog/construction-debris.jpg"
    },

    // CITY-SPECIFIC PERMIT GUIDES
    {
      title: "Chicago Dumpster Permit Guide: Requirements & Applications",
      excerpt: "Complete guide to Chicago dumpster permits. Learn requirements, costs, application process, and alternatives for Chicagoland area projects.",
      slug: "chicago-dumpster-permit-guide",
      category: "Local Permits",
      readTime: "8 min read",
      publishDate: "February 1, 2025",
      featured: false,
      image: "/images/blog/building-permit.jpg"
    },
    {
      title: "Houston Dumpster Permit Guide: Harris County Requirements",
      excerpt: "Houston dumpster permit requirements and application process. Complete guide for Harris County and surrounding areas including permit alternatives.",
      slug: "houston-dumpster-permit-guide",
      category: "Local Permits", 
      readTime: "7 min read",
      publishDate: "February 2, 2025",
      featured: false,
      image: "/images/blog/building-permit.jpg"
    },
    {
      title: "Los Angeles Dumpster Permit Guide: City Requirements",
      excerpt: "LA dumpster permit requirements, costs, and application process. Complete guide for Los Angeles County and surrounding municipalities.",
      slug: "los-angeles-dumpster-permit-guide",
      category: "Local Permits",
      readTime: "8 min read", 
      publishDate: "February 3, 2025",
      featured: false,
      image: "/images/blog/building-permit.jpg"
    },
    {
      title: "NYC Dumpster Permit Guide: Complete Requirements",
      excerpt: "New York City dumpster permit requirements and DOT applications. Complete guide for all five boroughs including costs and alternatives.",
      slug: "nyc-dumpster-permit-guide",
      category: "Local Permits",
      readTime: "9 min read",
      publishDate: "February 4, 2025", 
      featured: false,
      image: "/images/blog/building-permit.jpg"
    },
    {
      title: "Phoenix Dumpster Permit Guide: Maricopa County Rules",
      excerpt: "Phoenix dumpster permit requirements and application process. Complete guide for Maricopa County including residential and commercial permits.",
      slug: "phoenix-dumpster-permit-guide",
      category: "Local Permits",
      readTime: "7 min read",
      publishDate: "February 5, 2025",
      featured: false,
      image: "/images/blog/building-permit.jpg"
    },

    // ADDITIONAL GUIDES
    {
      title: "Dumpster Permit Requirements: Complete State-by-State Guide",
      excerpt: "Comprehensive guide to dumpster permit requirements across all 50 states. Learn when permits are required and how to obtain them.",
      slug: "dumpster-permit-requirements",
      category: "Regulations",
      readTime: "10 min read",
      publishDate: "February 6, 2025",
      featured: false,
      image: "/images/blog/building-permit.jpg"
    },
    {
      title: "Dumpster Placement Rules: Complete Property Guide",
      excerpt: "Learn proper dumpster placement rules for driveways, streets, and properties. Avoid fines and ensure safe, legal placement.",
      slug: "dumpster-placement-rules",
      category: "Regulations",
      readTime: "6 min read",
      publishDate: "February 7, 2025",
      featured: false,
      image: "/images/blog/hoa-rules.jpg"
    }
  ];

  const categories = ["All Posts", "Regulations", "House Areas", "Dumpster Sizes", "Kitchen Renovation", "Bathroom Renovation", "Bedroom Renovation", "Living Room Renovation", "Major Renovation", "Roofing", "Pricing", "Outdoor Projects", "Flooring", "Construction", "Landscaping", "Cleanouts", "Local Permits", "General Tips"];

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Rest of your existing component code stays the same...
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Dumpster Calculator Blog</h1>

        {/* Category Filter */}
        <div className="mb-8">
          <nav className="flex flex-wrap gap-3" aria-label="Blog categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-yellow-500 text-black shadow-md'
                    : 'bg-white text-gray-700 hover:bg-yellow-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">No posts found in this category.</p>
          ) : (
            filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 flex-grow">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <time dateTime={new Date(post.publishDate).toISOString()}>
                      {new Date(post.publishDate).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-block text-yellow-600 hover:text-yellow-700 font-semibold"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}