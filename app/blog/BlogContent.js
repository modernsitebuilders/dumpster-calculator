// app/blog/BlogContent.js - Client component with optimizations
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Lazy load non-critical images
const BlogCard = ({ post, priority = false }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-40">
        <Image
  src={post.image}
  alt={post.title}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
  loading={priority ? 'eager' : 'lazy'}
  priority={index < 3} // Only first 3 images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJR..." // Add blur placeholder
/>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 flex-grow line-clamp-3">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{post.readTime}</span>
          <time dateTime={new Date(post.publishDate).toISOString()}>
            {new Date(post.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-block text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
          aria-label={`Read more about ${post.title}`}
          prefetch={false}
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default function BlogContent({ blogPosts }) {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [isLoading, setIsLoading] = useState(false);

  // Categories array - ensure all categories from your posts are included
  const categories = useMemo(() => [
    "All Posts", "Regulations", "House Areas", "Dumpster Sizes", 
    "Kitchen Renovation", "Bathroom Renovation", "Bedroom Renovation", 
    "Living Room Renovation", "Major Renovation", "Roofing", "Pricing", 
    "Outdoor Projects", "Flooring", "Construction", "Landscaping", 
    "Cleanouts", "Local Permits", "General Tips"
  ], []);

  // Initialize category from URL
  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams, categories]);

  // Memoize filtered posts
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All Posts") return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory, blogPosts]);

  // Handle category change with loading state
  const handleCategoryChange = useCallback((cat) => {
    setIsLoading(true);
    setSelectedCategory(cat);
    
    // Update URL without page reload
    const url = new URL(window.location);
    if (cat === "All Posts") {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', cat);
    }
    window.history.pushState({}, '', url);
    
    // Simulate loading for smooth transition
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with improved SEO */}
        <header>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Dumpster Calculator Blog
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Expert guides on dumpster sizing, permits, and project planning
          </p>
        </header>

        {/* Category Filter with improved performance */}
        <nav className="mb-8" aria-label="Blog categories">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                name="category-filter"
                id={`category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                  selectedCategory === cat
                    ? 'bg-yellow-500 text-black shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-yellow-100 hover:shadow-sm'
                }`}
                aria-pressed={selectedCategory === cat}
                aria-label={`Filter by ${cat} category`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        {/* Posts Grid with loading state */}
        <main>
          {isLoading ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 opacity-50 transition-opacity">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md h-96 animate-pulse">
                  <div className="w-full h-40 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.length === 0 ? (
                <p className="text-gray-500 col-span-full text-center py-12">
                  No posts found in this category.
                </p>
              ) : (
                filteredPosts.map((post, index) => (
                  <BlogCard 
                    key={post.slug} 
                    post={post} 
                    priority={index < 3} // Prioritize first 3 images
                  />
                ))
              )}
            </div>
          )}
        </main>

        {/* Add pagination for better performance with many posts */}
        {filteredPosts.length > 12 && (
          <nav className="mt-12 flex justify-center" aria-label="Pagination">
            <div className="flex space-x-2">
              <button 
                name="pagination-prev"
                type="button"
                className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                aria-label="Previous page"
              >
                Previous
              </button>
              <button 
                name="pagination-page"
                type="button"
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow"
                aria-current="page"
              >
                1
              </button>
              <button 
                name="pagination-page"
                type="button"
                className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                2
              </button>
              <button 
                name="pagination-next"
                type="button"
                className="px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}