import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppForm from "@/components/WhatsAppForm";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Mutual Fund Guides India | SIP, ELSS, Index Fund & More | Qurve Wealth",
  description: "Mutual fund guides India — 40+ expert guides on SIP investment, ELSS tax saving, index funds, large cap, small cap, debt funds, and mutual fund taxation. Free mutual fund guides by Qurve Wealth (AMFI ARN-356292).",
  keywords: ["mutual fund guides India", "SIP investment guide India", "ELSS mutual fund guide", "index fund guide India", "mutual fund types India"],
  alternates: { canonical: "https://qurvewealth.in/mutual-funds" },
};

const CATEGORIES = [
  { id: "Fund Types",           icon: "📊", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
  { id: "Investment Strategies",icon: "🎯", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { id: "Comparisons",          icon: "⚖️", color: "bg-amber-50 border-amber-200 text-amber-800" },
  { id: "Taxation",             icon: "🧾", color: "bg-red-50 border-red-200 text-red-800" },
  { id: "How-To Guides",        icon: "📋", color: "bg-purple-50 border-purple-200 text-purple-800" },
  { id: "Top Performers",       icon: "🏆", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
  { id: "Concepts",             icon: "💡", color: "bg-cyan-50 border-cyan-200 text-cyan-800" },
  { id: "Wealth Planning",      icon: "🌱", color: "bg-teal-50 border-teal-200 text-teal-800" },
  { id: "SIP Specific",         icon: "📈", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
];

export default function MutualFundsIndexPage() {
  const grouped = CATEGORIES.map(cat => ({
    ...cat,
    guides: GUIDES.filter(g => g.category === cat.id),
  }));

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Mutual Fund Guides" }]} light />
          <div className="mt-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">110+ Free Guides</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-serif">
              Mutual Fund<br />
              <span className="gradient-text">Knowledge Hub</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
              From fund types and SIP strategies to tax planning and wealth creation — every guide is written by Qurve Wealth's AMFI-registered advisors for Indian investors.
            </p>
          </div>
          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { v: "110+", l: "In-Depth Guides" },
              { v: "9",    l: "Categories" },
              { v: "1000+", l: "Words per Guide" },
              { v: "Free", l: "Always" },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold text-gold">{s.v}</div>
                <div className="text-xs text-slate-300 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-sm">
            <WhatsAppForm light />
          </div>
        </div>
      </section>

      {/* Category Quick Nav */}
      <section className="py-8 px-6 bg-white border-b border-border sticky top-16 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-off-white hover:bg-gold-pale hover:border-gold/30 text-slate-600 hover:text-navy transition-all"
              >
                {cat.icon} {cat.id}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Guides by Category */}
      {grouped.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id.toLowerCase().replace(/\s+/g, "-")}
          className={`py-16 px-6 ${i % 2 === 0 ? "bg-off-white" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-navy font-serif">{cat.id}</h2>
              </div>
              <p className="text-slate-400 text-sm mb-8">{cat.guides.length} guides in this category</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.guides.map(guide => (
                  <Link
                    key={guide.slug}
                    href={`/mutual-funds/${guide.slug}`}
                    className="group bg-white rounded-xl border border-border hover:border-gold/40 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <span className={`inline-flex text-xs font-semibold px-2.5 py-1 rounded-full border ${cat.color} mb-3`}>
                      {cat.icon} {cat.id}
                    </span>
                    <h3 className="font-bold text-navy group-hover:text-gold transition-colors text-sm leading-snug mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{guide.excerpt}</p>
                    <div className="mt-4 text-xs font-semibold text-navy-mid group-hover:text-gold transition-colors">
                      Read Guide →
                    </div>
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="gradient-navy py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Ready to <span className="gradient-text">Put Knowledge into Action?</span>
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Qurve Wealth's AMFI-registered advisors will help you build the right mutual fund portfolio — powered by quant models, not guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/invest-now" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-xl transition-all shadow-gold hover:-translate-y-0.5">
              Start Investing Today →
            </Link>
            <Link href="/sip-calculator" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all">
              Try SIP Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
