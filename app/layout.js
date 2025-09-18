// app/layout.js - Updated with Header and Footer
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';

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
  metadataBase: new URL('https://yourdomain.com'),
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
    url: 'https://yourdomain.com',
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
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="/favicon.ico" />
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
        
        {/* Add structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Dumpster Size Calculator',
              url: 'https://yourdomain.com',
              applicationCategory: 'Utility',
              description: 'Calculate the perfect dumpster size for your project',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              author: {
                '@type': 'Organization',
                name: 'Dumpster Calculator',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
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
        
        {/* Load non-critical scripts after page load */}
        <Script
          id="performance-monitor"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Monitor Core Web Vitals
              if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
                try {
                  // Monitor Largest Contentful Paint
                  const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('LCP:', lastEntry.startTime);
                  });
                  lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
                  
                  // Monitor First Input Delay
                  const fidObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                      console.log('FID:', entry.processingStart - entry.startTime);
                    });
                  });
                  fidObserver.observe({ type: 'first-input', buffered: true });
                  
                  // Monitor Cumulative Layout Shift
                  let clsValue = 0;
                  const clsObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                      if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        console.log('CLS:', clsValue);
                      }
                    }
                  });
                  clsObserver.observe({ type: 'layout-shift', buffered: true });
                } catch (e) {
                  console.error('Performance monitoring error:', e);
                }
              }
            `,
          }}
        />
        
        {/* Google Analytics - Load after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_path: window.location.pathname,
              send_page_view: true,
            });
          `}
        </Script>
      </body>
    </html>
  );
}