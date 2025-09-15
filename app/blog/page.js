'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const blogPosts = [
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
      title: "Roof Replacement Dumpster Size Calculator & Guide",
      excerpt: "Roof replacement projects generate significant debris. Learn what dumpster size you need based on roof square footage, materials, and local disposal requirements.",
      slug: "roof-replacement-dumpster-size",
      category: "Roofing",
      readTime: "7 min read", 
      publishDate: "January 10, 2025",
      featured: false
    },
    {
      slug: 'prohibited-items-dumpster',
      title: 'What Can\'t Go in a Dumpster? Complete Prohibited Items List',
      excerpt: 'Complete guide to items you cannot put in a dumpster rental. Learn about prohibited materials, disposal alternatives, and how to avoid extra fees.',
      publishDate: 'January 5, 2025',
      readTime: '6 min read',
      category: 'Regulations',
      featured: true
    }
  ];

  const categories = [
    "All Posts",
    "Bathroom Renovation", 
    "Kitchen Renovation",
    "Roofing",
    "Regulations"
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dumpster Rental Guides & Tips
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Expert advice on choosing the right dumpster size for your renovation projects
          </p>
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Try Our Free Calculator
          </Link>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Show filtered posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === "All Posts" ? "All Articles" : selectedCategory}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.publishDate}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Stay Updated on Renovation Tips
          </h2>
          <p className="mb-6">
            Get expert advice on dumpster sizing, cost-saving tips, and renovation guides delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Renovation Projects</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/bathroom-remodel-dumpster-size" className="text-blue-600 hover:underline">Bathroom Remodels</Link></li>
                <li><Link href="/blog/kitchen-renovation-dumpster-size" className="text-blue-600 hover:underline">Kitchen Renovations</Link></li>
                <li><Link href="/blog/roof-replacement-dumpster-size" className="text-blue-600 hover:underline">Roof Replacements</Link></li>
                <li><Link href="/blog/prohibited-items-dumpster" className="text-blue-600 hover:underline">Prohibited Items</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Dumpster Sizes</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">10 Yard Dumpsters</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">20 Yard Dumpsters</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">30 Yard Dumpsters</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">40 Yard Dumpsters</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Local Guides</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/philadelphia-dumpster-rental" className="text-blue-600 hover:underline">Philadelphia</Link></li>
                <li><Link href="/miami-dumpster-rental" className="text-blue-600 hover:underline">Miami</Link></li>
                <li><Link href="/houston-dumpster-rental" className="text-blue-600 hover:underline">Houston</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">More Cities</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing a Dumpster Size?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our free calculator to get a personalized recommendation for your specific project
          </p>
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Calculate Your Dumpster Size
          </Link>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}