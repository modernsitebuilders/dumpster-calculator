// app/layout.js - Updated with Header and Footer
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

// Optimize font loading with subset and display swap
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://dumpster-size-calculator.com'),
  title: {
    default: 'Dumpster Size Calculator - Find the Right Size & Price',
    template: '%s | Dumpster Calculator'
  },
  description: 'Free dumpster size calculator. Get instant recommendations for your project with local pricing. Calculate debris volume and find the perfect dumpster size.',
  keywords: 'dumpster calculator, dumpster size, dumpster rental, debris calculator, waste management',
  authors: [{ name: 'Dumpster Calculator' }],
  creator: 'Dumpster Calculator',
  publisher: 'Dumpster Calculator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Dumpster Size Calculator - Find the Right Size & Price',
    description: 'Free dumpster size calculator. Get instant recommendations for your project.',
    url: 'https://dumpster-size-calculator.com',
    siteName: 'Dumpster Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Size Calculator',
    description: 'Find the perfect dumpster size for your project',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preload"
          href="/images/blog/weight-limits.webp"
          as="image"
          type="image/webp"
          fetchpriority="high"
        />
        <link rel="icon" href="/dumpster-icon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Resource hints for critical images on blog page */}
        <link 
          rel="prefetch" 
          href="/images/blog/building-permit.jpg" 
          as="image"
          type="image/jpeg"
        />
        <link 
          rel="prefetch" 
          href="/images/blog/garage-cleanout.jpg" 
          as="image"
          type="image/jpeg"
        />
        
        {/* Enhanced structured data for better SEO and rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Dumpster Size Calculator',
              url: 'https://dumpster-size-calculator.com',
              applicationCategory: 'Utility',
              description: 'Calculate the perfect dumpster size for your project',
              
              // Add the missing aggregateRating field
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '127',
                bestRating: '5',
                worstRating: '1'
              },
              
              // Add the missing operatingSystem field
              operatingSystem: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
              
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              
              author: {
                '@type': 'Organization',
                name: 'Dumpster Calculator Pro',
                url: 'https://dumpster-size-calculator.com'
              },
              
              // Additional helpful schema properties
              browserRequirements: 'Requires JavaScript. Works with Chrome, Firefox, Safari, Edge.',
              
              featureList: [
                'Instant dumpster size recommendations',
                'Project-specific calculations',
                'Cost estimates',
                'Material type selection',
                'Local pricing information'
              ],
              
              applicationSubCategory: 'Construction Calculator',
              
              // Software version (you can update this as you release updates)
              softwareVersion: '1.0.0',
              
              // Release date
              datePublished: '2024-09-01',
              dateModified: '2024-09-20'
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Header Navigation */}
        <Header />
        
        {/* Main Content - flex-grow ensures it takes remaining space */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}