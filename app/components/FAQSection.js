// app/components/FAQSection.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How does your dumpster size calculator work?",
          answer: "Our calculator uses industry-proven formulas based on project type and square footage. We factor in average debris density, project scope, and material types to recommend the most cost-effective dumpster size for your specific needs."
        },
        {
          question: "Is the calculator really free?",
          answer: "Yes! Our calculator is completely free with no hidden costs, no email signup required, and no obligation to purchase. We earn commissions when you choose to get quotes through our recommended providers, but using the calculator is always free."
        },
        {
          question: "How accurate are the size recommendations?",
          answer: "Our recommendations are based on data from over 25,000 real projects. While every project is unique, our calculator is accurate for 90%+ of standard home renovations and cleanouts. For unusual projects, we recommend going one size up."
        }
      ]
    },
    {
      category: "Dumpster Sizes",
      questions: [
        {
          question: "What's the most popular dumpster size?",
          answer: "The 20-yard dumpster is the most popular size, accounting for about 40% of all rentals. It's perfect for medium-sized projects like kitchen renovations, large bathroom remodels, and flooring removal projects."
        },
        {
          question: "What happens if I choose the wrong size?",
          answer: "If you choose too small, most companies will swap it for a larger size for an additional fee ($100-200). If you choose too large, you'll pay more upfront but won't face additional charges. It's usually better to go one size up if you're unsure."
        },
        {
          question: "Can I fit a dumpster in my driveway?",
          answer: "Most residential driveways can accommodate 10-20 yard dumpsters. You need about 22-25 feet of length for a 20-yard dumpster. 30+ yard dumpsters may require street placement and permits in some areas."
        }
      ]
    },
    {
      category: "Costs & Pricing",
      questions: [
        {
          question: "How much does dumpster rental cost?",
          answer: "Costs vary by location and size: 10-yard ($250-450), 20-yard ($300-500), 30-yard ($400-600), 40-yard ($500-750). Prices include delivery, pickup, and disposal for standard weight limits. Additional fees may apply for overages or extended rental periods."
        },
        {
          question: "What affects dumpster rental pricing?",
          answer: "Key factors include: dumpster size, rental duration, location, disposal fees, weight limits, and material type. Urban areas typically cost more, and heavy materials like concrete may incur additional charges."
        },
        {
          question: "Are there any hidden fees?",
          answer: "Reputable companies include basic costs upfront. Potential additional charges include: permit fees ($10-100), overage fees ($40-100/ton), extended rental ($5-15/day), and prohibited item disposal. Always ask for a complete quote."
        }
      ]
    },
    {
      category: "Permits & Regulations",
      questions: [
        {
          question: "Do I need a permit for a dumpster?",
          answer: "Permits are typically required only when placing dumpsters on public property (streets, sidewalks). Dumpsters on your private property (driveway, yard) usually don't require permits. Requirements vary by city - check our local guides for specific information."
        },
        {
          question: "How do I get a dumpster permit?",
          answer: "Contact your local city/county office or building department. You'll typically need: property address, dumpster size/duration, placement location, and permit fee ($10-200). Most permits are approved within 1-3 business days."
        },
        {
          question: "What items are prohibited in dumpsters?",
          answer: "Common prohibited items include: hazardous materials, batteries, paint, tires, appliances with refrigerants, electronics, and medical waste. Each company has specific restrictions - ask your provider for a complete list."
        }
      ]
    },
    {
      category: "Project-Specific",
      questions: [
        {
          question: "What size dumpster for kitchen renovation?",
          answer: "Kitchen renovations typically need 20-yard dumpsters. Small updates (counters, paint) may fit in 10-yard, while full gut renovations with structural changes often require 30-yard. Include cabinets, appliances, and flooring in your calculations."
        },
        {
          question: "What size for bathroom remodel?",
          answer: "Most bathroom remodels fit in 10-20 yard dumpsters. Small half-bath updates need 10-yard, while full bathroom gut renovations (especially with tile removal) typically require 20-yard dumpsters."
        },
        {
          question: "What about roofing projects?",
          answer: "Roof replacement needs vary greatly by square footage: 1,500 sq ft = 20-yard, 2,500 sq ft = 30-yard, 3,500+ sq ft = 40-yard. Consider multiple layers of old shingles, which significantly increase debris volume."
        }
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-16" id="faq-section">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common dumpster sizing questions
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h3 className="text-lg font-semibold flex items-center">
                  {category.category === "Getting Started" && (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  {category.category === "Dumpster Sizes" && (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4m-4 0l4 4m8-4h4m0 0v4m0-4l-4 4M4 16v4m0 0h4m0 0l-4-4m12 4l4-4m0 0v-4m0 4h-4" />
                    </svg>
                  )}
                  {category.category === "Costs & Pricing" && (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  )}
                  {category.category === "Permits & Regulations" && (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {category.category === "Project-Specific" && (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {category.category}
                </h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems.has(globalIndex);
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left focus:outline-none focus:bg-gray-50 hover:bg-gray-50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          <svg 
                            className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Need More Help?
          </h3>
          <p className="text-gray-700 mb-6">
            Check out our comprehensive guides for detailed project-specific information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog/what-size-dumpster-do-i-need" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Complete Size Guide
            </Link>
            <Link 
              href="/blog/dumpster-rental-cost-guide" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Pricing Guide
            </Link>
            <Link 
              href="/local" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Local Guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}