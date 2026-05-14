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
  title: "Qurve Wealth — The Math Behind Your Mutual Funds",
  description:
    "AI-driven, data-backed mutual fund basket strategies. Smart investing for every market cycle. AMFI Registered ARN-356292. Based in Pune, India.",
  keywords: "mutual funds, investment, wealth management, SIP, baskets, AMFI, quantitative investing",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col bg-white text-slate-700`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
