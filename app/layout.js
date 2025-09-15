import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dumpster Size Calculator - Find the Right Dumpster Size for Your Project",
  description: "Free dumpster size calculator. Get instant recommendations for bathroom remodels, kitchen renovations, roofing projects, and cleanouts. Compare sizes from 10 to 40 yards.",
  keywords: "dumpster size calculator, dumpster rental, waste management, construction debris, home renovation",
  openGraph: {
    title: "Dumpster Size Calculator",
    description: "Find the perfect dumpster size for your project with our free calculator",
    url: "https://dumpster-size-calculator.com",
    siteName: "Dumpster Size Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dumpster Size Calculator",
    description: "Find the perfect dumpster size for your project",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dumpster-size-calculator.com", 
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/dumpster-icon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* JSON-LD Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Dumpster Size Calculator",
              "description": "Calculate the right dumpster size for your construction or renovation project",
              "url": "https://dumpster-size-calculator.com", 
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2451"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}