import type { Metadata } from "next";
import Link from "next/link";
import { KEYWORD_PAGES } from "@/lib/keyword-pages";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Mutual Fund Topics & Keywords | Qurve Wealth",
  description: "Browse 240+ mutual fund topics — SIP, ELSS, large cap, index funds, taxation, NRI investing and more. Expert guides by Qurve Wealth (AMFI ARN-356292).",
  keywords: ["mutual fund topics", "mutual fund keywords", "SIP guide", "ELSS guide", "mutual fund investment india"],
  alternates: { canonical: "https://qurvewealth.in/keywords" },
};

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  "Fund Types":            { bg: "bg-emerald-50",  border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-400" },
  "Investment Strategies": { bg: "bg-blue-50",     border: "border-blue-200",    text: "text-blue-700",    dot: "bg-blue-400" },
  "Comparisons":           { bg: "bg-amber-50",    border: "border-amber-200",   text: "text-amber-700",   dot: "bg-amber-400" },
  "Taxation":              { bg: "bg-red-50",      border: "border-red-200",     text: "text-red-700",     dot: "bg-red-400" },
  "How-To Guides":         { bg: "bg-purple-50",   border: "border-purple-200",  text: "text-purple-700",  dot: "bg-purple-400" },
  "Top Performers":        { bg: "bg-yellow-50",   border: "border-yellow-200",  text: "text-yellow-700",  dot: "bg-yellow-400" },
  "Concepts":              { bg: "bg-cyan-50",     border: "border-cyan-200",    text: "text-cyan-700",    dot: "bg-cyan-400" },
  "Wealth Planning":       { bg: "bg-teal-50",     border: "border-teal-200",    text: "text-teal-700",    dot: "bg-teal-400" },
  "SIP Specific":          { bg: "bg-indigo-50",   border: "border-indigo-200",  text: "text-indigo-700",  dot: "bg-indigo-400" },
};

const CATEGORY_ICONS: Record<string, string> = {
  "Fund Types":            "📊",
  "Investment Strategies": "🎯",
  "Comparisons":           "⚖️",
  "Taxation":              "🧾",
  "How-To Guides":         "📋",
  "Top Performers":        "🏆",
  "Concepts":              "💡",
  "Wealth Planning":       "🌱",
  "SIP Specific":          "📈",
};

export default function KeywordsIndexPage() {
  // Only plain (no-city) keyword pages for the index
  const plainPages = KEYWORD_PAGES.filter(p => !p.city);

  // Group by category
  const grouped = plainPages.reduce<Record<string, typeof plainPages>>((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  const categories = Object.keys(grouped).sort();

  const sitelinksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mutual Fund Topics",
    url: "https://qurvewealth.in/keywords",
    numberOfItems: plainPages.length,
    itemListElement: plainPages.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.keyword,
      url: `https://qurvewealth.in/${p.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSchema) }} />

      <div className="flex flex-col">
        {/* Hero */}
        <section className="gradient-hero pt-28 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Mutual Fund Topics" }]}
              light
            />
            <div className="mt-8 max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-4 leading-tight">
                240+ Mutual Fund Topics
              </h1>
              <p className="text-lg text-slate-200 leading-relaxed">
                Expert guides covering every mutual fund topic — fund types, SIP strategies, taxation, comparisons, and how-to guides. All content by Qurve Wealth (AMFI ARN-356292).
              </p>
              <div className="flex flex-wrap gap-4 mt-6 text-sm text-white/70">
                <span className="flex items-center gap-1.5"><span className="text-gold">✓</span> {plainPages.length} topics covered</span>
                <span className="flex items-center gap-1.5"><span className="text-gold">✓</span> {categories.length} categories</span>
                <span className="flex items-center gap-1.5"><span className="text-gold">✓</span> AMFI ARN-356292</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories + Topics */}
        <section className="py-16 px-6 bg-off-white">
          <div className="max-w-7xl mx-auto space-y-14">
            {categories.map(cat => {
              const pages = grouped[cat];
              const colors = CATEGORY_COLORS[cat] ?? CATEGORY_COLORS["Concepts"];
              const icon = CATEGORY_ICONS[cat] ?? "📌";
              return (
                <AnimateOnScroll key={cat}>
                  <div>
                    {/* Category header */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold mb-5 ${colors.bg} ${colors.border} ${colors.text}`}>
                      <span>{icon}</span>
                      <span>{cat}</span>
                      <span className="font-normal opacity-60">· {pages.length} topics</span>
                    </div>

                    {/* Keyword pills */}
                    <div className="flex flex-wrap gap-2">
                      {pages.map(p => (
                        <Link
                          key={p.slug}
                          href={`/${p.slug}`}
                          className={`inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border transition-all hover:-translate-y-0.5 hover:shadow-sm ${colors.bg} ${colors.border} ${colors.text} hover:border-gold`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0`} />
                          {p.keyword}
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </section>

        {/* City sections — Pune & Mumbai quick access */}
        <section className="py-14 px-6 bg-white border-t border-border">
          <div className="max-w-7xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-2xl font-bold text-navy font-serif mb-2">Topics by City</h2>
              <p className="text-slate-500 text-sm mb-8">Same expert topics — with local context for your city.</p>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { city: "Pune",   suffix: "pune",   desc: "240 topics for Pune investors",   icon: "🏙️" },
                { city: "Mumbai", suffix: "mumbai", desc: "240 topics for Mumbai investors",  icon: "🌆" },
              ].map(c => (
                <AnimateOnScroll key={c.city}>
                  <div className="bg-off-white border border-border rounded-2xl p-6">
                    <div className="text-2xl mb-3">{c.icon}</div>
                    <h3 className="font-bold text-navy mb-1">{c.city}</h3>
                    <p className="text-sm text-slate-500 mb-4">{c.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {KEYWORD_PAGES.filter(p => p.city === c.city).slice(0, 6).map(p => (
                        <Link
                          key={p.slug}
                          href={`/${p.slug}`}
                          className="text-xs bg-white border border-border text-slate-600 hover:text-gold hover:border-gold px-3 py-1.5 rounded-full transition-colors"
                        >
                          {p.keyword}
                        </Link>
                      ))}
                      <Link
                        href={`/mutual-fund-advisor/${c.suffix}`}
                        className="text-xs bg-gold/10 border border-gold/30 text-gold font-semibold px-3 py-1.5 rounded-full hover:bg-gold/20 transition-colors"
                      >
                        Advisor in {c.city} →
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 px-6 bg-off-white border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-2xl font-bold text-navy font-serif mb-3">Ready to Start Investing?</h2>
              <p className="text-slate-500 mb-6">Qurve Wealth · AMFI ARN-356292 · Zero minimum investment · 100% digital</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/invest-now" className="bg-gold hover:bg-gold-light text-white font-bold px-8 py-3 rounded-xl transition-all hover:-translate-y-0.5">
                  Get Started →
                </Link>
                <Link href="/mutual-funds" className="bg-white border border-border text-navy font-semibold px-8 py-3 rounded-xl hover:border-gold transition-all">
                  Browse All Guides
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </div>
    </>
  );
}
