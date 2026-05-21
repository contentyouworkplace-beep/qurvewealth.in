import Link from "next/link";
import Image from "next/image";
import { cities as CITIES } from "@/data/cities";
import { KEYWORD_PAGES } from "@/lib/keyword-pages";

const quickLinks = [
  { href: "/",                label: "Home" },
  { href: "/qurve-way",      label: "Qurve Way" },
  { href: "/baskets",        label: "Our Baskets" },
  { href: "/perspective",    label: "Perspective" },
  { href: "/blog",           label: "Blog" },
  { href: "/sip-calculator", label: "SIP Calculator" },
  { href: "/invest-now",     label: "Invest Now" },
  { href: "/mutual-funds",   label: "Mutual Fund Guides" },
  { href: "/keywords",       label: "All Topics" },
];

const topKeywordLinks = [
  { href: "/sip-investment",               label: "SIP Investment" },
  { href: "/elss-mutual-fund",             label: "ELSS Mutual Fund" },
  { href: "/index-fund",                   label: "Index Fund" },
  { href: "/mutual-fund-vs-fd",            label: "Mutual Fund vs FD" },
  { href: "/mutual-fund-taxation",         label: "Mutual Fund Taxation" },
  { href: "/large-cap-mutual-fund",        label: "Large Cap Mutual Fund" },
];

// Plain keyword pages only (no city)
const allKeywords = KEYWORD_PAGES.filter(p => !p.city);

// Group keywords by category
const keywordsByCategory = allKeywords.reduce<Record<string, typeof allKeywords>>((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p);
  return acc;
}, {});

// Group cities by region
const citiesByRegion = CITIES.reduce<Record<string, typeof CITIES>>((acc, c) => {
  if (!acc[c.region]) acc[c.region] = [];
  acc[c.region].push(c);
  return acc;
}, {});

const REGION_ORDER = ["North", "South", "West", "East", "Central", "Northeast"];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Main footer grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/8">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-5">
              <Image src="/logo.png" alt="Qurve Wealth — Mutual Fund Advisor India" width={160} height={44} className="h-10 w-auto logo-white" />
            </Link>
            <p className="text-sm leading-7 mb-4 max-w-[240px]">
              AMFI Registered Mutual Fund Advisor offering quant-driven SIP strategies and data-backed baskets across India.
            </p>
            <span className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 text-gold text-xs font-semibold px-3 py-1.5 rounded-full">
              ✓ AMFI ARN-356292 · Valid till March 2029
            </span>
            <div className="flex gap-2.5 mt-5">
              {["in", "f", "𝕏"].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-sm font-bold hover:bg-gold hover:border-gold hover:text-navy transition-all duration-200">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white text-xs font-bold uppercase tracking-widest mb-5">Quick Links</div>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5">
                    <span className="text-gold/60">→</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top keyword links */}
          <div>
            <div className="text-white text-xs font-bold uppercase tracking-widest mb-5">Top Topics</div>
            <ul className="space-y-2.5 mb-6">
              {topKeywordLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5">
                    <span className="text-gold/60">→</span> {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/keywords" className="text-sm text-gold/80 hover:text-gold flex items-center gap-1.5 mt-1">
                  <span>→</span> All 240 Topics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white text-xs font-bold uppercase tracking-widest mb-5">Get in Touch</div>
            <div className="space-y-4 text-sm mb-6">
              <div className="flex gap-3">
                <span className="text-gold mt-0.5">✉</span>
                <a href="mailto:support@qurvewealth.in" className="hover:text-white transition-colors">support@qurvewealth.in</a>
              </div>
              <div className="flex gap-3">
                <span className="text-gold mt-0.5">📍</span>
                <span className="leading-6">F Building, Konark Indrayu Enclave-2,<br />NIBM Undri Road, Pune – 411048</span>
              </div>
            </div>
            <Link href="/invest-now" className="inline-flex items-center gap-1.5 bg-gold text-white font-bold text-sm px-4 py-2.5 rounded-full hover:bg-gold-light transition-all">
              Schedule a Call →
            </Link>
          </div>
        </div>

        {/* ── ALL 240 KEYWORDS — grouped by category ────────── */}
        <div className="py-12 border-b border-white/8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-white text-xs font-bold uppercase tracking-widest">
              Mutual Fund Topics — All 240 Keywords
            </div>
            <Link href="/keywords" className="text-xs text-gold/70 hover:text-gold transition-colors">
              View All →
            </Link>
          </div>
          <div className="space-y-6">
            {Object.entries(keywordsByCategory).map(([cat, pages]) => (
              <div key={cat}>
                <div className="text-gold/60 text-xs font-semibold uppercase tracking-wider mb-2">{cat}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {pages.map(p => (
                    <Link
                      key={p.slug}
                      href={`/${p.slug}`}
                      className="text-xs text-white/40 hover:text-white/80 transition-colors"
                    >
                      {p.keyword}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ALL 200 CITIES — grouped by region ───────────── */}
        <div className="py-12 border-b border-white/8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-white text-xs font-bold uppercase tracking-widest">
              Mutual Fund Advisor — All 200 Cities Across India
            </div>
            <Link href="/mutual-fund-advisor" className="text-xs text-gold/70 hover:text-gold transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {REGION_ORDER.map(region => {
              const regionCities = citiesByRegion[region] ?? [];
              if (!regionCities.length) return null;
              return (
                <div key={region}>
                  <div className="text-gold/60 text-xs font-semibold uppercase tracking-wider mb-2">{region} India</div>
                  <ul className="space-y-1">
                    {regionCities.map(city => (
                      <li key={city.slug}>
                        <Link
                          href={`/mutual-fund-advisor/${city.slug}`}
                          className="text-xs text-white/40 hover:text-white/80 transition-colors"
                        >
                          {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom ────────────────────────────────────────── */}
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2025 Qurve Wealth · qurvewealth.in · All rights reserved.</span>
          <div className="flex gap-5">
            <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Disclaimer</span>
          </div>
        </div>
        <p className="pb-6 text-xs text-white/25 leading-6 max-w-4xl">
          Qurve Wealth is an AMFI Registered Mutual Fund Distributor (ARN-356292). Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not necessarily indicative or a guarantee of future performance. The information on this website is for educational purposes only and does not constitute financial advice.
        </p>
      </div>
    </footer>
  );
}
