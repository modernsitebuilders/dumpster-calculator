// app/blog/page.js - Production-Ready Modern Blog Page
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Clock, TrendingUp, Home, Gavel, Calculator, Hammer, DollarSign, Trees, Truck, MapPin, Info, Search, ArrowRight } from 'lucide-react';

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

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
      image: "/images/blog/dumpster-sizes.jpg"
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
      title: "Weight Limits & Overage Fees: How to Avoid Extra Charges",
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
      image: "/images/blog/10-yard-dumpster.jpg"
    },
    {
      title: "20 Yard Dumpster Guide: The Most Popular Size",
      excerpt: "20 yard dumpster complete guide. Perfect for kitchen renovations, large bathroom remodels, and flooring projects. Dimensions, pricing, and project examples.",
      slug: "20-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "7 min read",
      publishDate: "January 9, 2025",
      featured: false,
      image: "/images/blog/20-yard-dumpster.jpg"
    },
    {
      title: "30 Yard Dumpster Guide: Large Projects & Construction",
      excerpt: "30 yard dumpster complete guide. Ideal for new construction, large renovations, and commercial projects. Full breakdown of costs and capabilities.",
      slug: "30-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "8 min read",
      publishDate: "January 10, 2025",
      featured: false,
      image: "/images/blog/30-yard-dumpster.jpg"
    },
    {
      title: "40 Yard Dumpster Guide: Commercial & Major Construction",
      excerpt: "40 yard dumpster complete guide. The largest standard size for major commercial projects, large construction, and industrial cleanouts.",
      slug: "40-yard-dumpster-guide",
      category: "Dumpster Sizes",
      readTime: "7 min read",
      publishDate: "January 11, 2025",
      featured: false,
      image: "/images/blog/40-yard-dumpster.jpg"
    },
    {
      title: "Roof Replacement Dumpster Size Calculator & Guide",
      excerpt: "Roof replacement projects generate significant debris. Learn what dumpster size you need based on roof square footage, materials, and local disposal requirements.",
      slug: "roof-replacement-dumpster-size",
      category: "Roofing",
      readTime: "7 min read",
      publishDate: "January 10, 2025",
      featured: false,
      image: "/images/blog/roof-replacement.jpg"
    },
    {
      title: "Dumpster Rental Cost Guide: What You'll Really Pay in 2025",
      excerpt: "Complete breakdown of dumpster rental costs including size pricing, delivery fees, permits, and hidden charges. Get accurate estimates for your project budget.",
      slug: "dumpster-rental-cost-guide",
      category: "Pricing",
      readTime: "9 min read",
      publishDate: "January 7, 2025",
      featured: false,
      image: "/images/blog/cost-guide.jpg"
    },
    // Add remaining posts with their images...
  ];

  const categoryIcons = {
    "All Posts": <Home className="w-4 h-4" />,
    "Regulations": <Gavel className="w-4 h-4" />,
    "House Areas": <Home className="w-4 h-4" />,
    "Dumpster Sizes": <Calculator className="w-4 h-4" />,
    "Kitchen Renovation": <Hammer className="w-4 h-4" />,
    "Bathroom Renovation": <Hammer className="w-4 h-4" />,
    "Bedroom Renovation": <Hammer className="w-4 h-4" />,
    "Living Room Renovation": <Hammer className="w-4 h-4" />,
    "Major Renovation": <Hammer className="w-4 h-4" />,
    "Roofing": <Home className="w-4 h-4" />,
    "Pricing": <DollarSign className="w-4 h-4" />,
    "Outdoor Projects": <Trees className="w-4 h-4" />,
    "Flooring": <Home className="w-4 h-4" />,
    "Construction": <Truck className="w-4 h-4" />,
    "Landscaping": <Trees className="w-4 h-4" />,
    "Cleanouts": <Truck className="w-4 h-4" />,
    "Local Permits": <MapPin className="w-4 h-4" />,
    "General Tips": <Info className="w-4 h-4" />
  };

  const categories = ["All Posts", "Regulations", "House Areas", "Dumpster Sizes", "Kitchen Renovation", "Bathroom Renovation", "Bedroom Renovation", "Living Room Renovation", "Major Renovation", "Roofing", "Pricing", "Outdoor Projects", "Flooring", "Construction", "Landscaping", "Cleanouts", "Local Permits", "General Tips"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Dumpster Rental Resource Center
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert guides, calculators, and tips for your next project
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills with Icons */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            <style jsx>{`
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoryIcons[category] || <Info className="w-4 h-4" />}
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Featured Articles Carousel */}
        {selectedCategory === "All Posts" && !searchQuery && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Guides</h2>
                <p className="text-gray-600 mt-2">Most popular resources this month</p>
              </div>
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block"
                >
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 relative">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                      priority={true}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 p-6 text-white">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Main Articles Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchQuery ? 'Search Results' : selectedCategory === "All Posts" ? 'All Articles' : selectedCategory}
            </h2>
            <span className="text-gray-500">
              {filteredPosts.length} articles
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group block"
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      post.category === 'Regulations' ? 'bg-red-100 text-red-700' :
                      post.category === 'Pricing' ? 'bg-green-100 text-green-700' :
                      post.category === 'House Areas' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <span className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory("All Posts");
                  setSearchQuery("");
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                View All Articles
              </button>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Get Expert Renovation Tips
            </h2>
            <p className="text-blue-100 mb-8">
              Weekly guides on dumpster sizing, cost-saving tips, and project planning delivered to your inbox.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button 
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

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