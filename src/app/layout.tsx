import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qurvewealth.in"),
  title: {
    default: "Mutual Fund Advisor India | SIP Investment | Qurve Wealth",
    template: "%s | Qurve Wealth",
  },
  description:
    "Qurve Wealth — AMFI Registered Mutual Fund Advisor (ARN-356292). Expert SIP investment advice, quant-driven mutual fund baskets, and data-backed portfolio strategies for investors across India.",
  keywords: [
    "mutual fund advisor India",
    "SIP investment India",
    "AMFI registered mutual fund advisor",
    "quant investing India",
    "mutual fund baskets India",
    "best mutual fund India",
    "systematic investment plan",
    "mutual fund distributor India",
    "Qurve Wealth",
  ],
  authors: [{ name: "Qurve Wealth", url: "https://qurvewealth.in" }],
  creator: "Qurve Wealth",
  publisher: "Qurve Wealth",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://qurvewealth.in",
    siteName: "Qurve Wealth",
    title: "Mutual Fund Advisor India | SIP Investment | Qurve Wealth",
    description:
      "Qurve Wealth — AMFI Registered Mutual Fund Advisor (ARN-356292). SIP investment advice, quant-driven mutual fund baskets, and data-backed portfolio strategies for investors across India.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Qurve Wealth — Mutual Fund Advisor India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutual Fund Advisor India | SIP Investment | Qurve Wealth",
    description: "AMFI Registered Mutual Fund Advisor (ARN-356292). Quant-driven SIP & mutual fund baskets across India.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://qurvewealth.in",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png",    type: "image/png", sizes: "512x512" },
    ],
    apple:   [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://qurvewealth.in/#organization",
  name: "Qurve Wealth",
  url: "https://qurvewealth.in",
  logo: "https://qurvewealth.in/logo.png",
  description:
    "AMFI Registered Mutual Fund Distributor (ARN-356292) offering quantitative, data-driven mutual fund basket strategies for Indian investors.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "F Building, Konark Indrayu Enclave-2, NIBM Undri Road",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411048",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  telephone: "",
  email: "support@qurvewealth.in",
  sameAs: [
    "https://www.linkedin.com/company/qurve-wealth",
    "https://twitter.com/qurvewealth",
    "https://www.instagram.com/qurvewealth",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "AMFI Registration",
    name: "ARN-356292",
    recognizedBy: { "@type": "Organization", name: "AMFI (Association of Mutual Funds in India)" },
  },
  serviceType: "Mutual Fund Distribution",
  currenciesAccepted: "INR",
  paymentAccepted: "Online Transfer, UPI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Favicon & theme */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#1C5E2E" />
        <meta name="msapplication-TileColor" content="#1C5E2E" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col bg-white text-slate-700`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
