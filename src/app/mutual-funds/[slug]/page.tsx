import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES } from "@/lib/guides";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppForm from "@/components/WhatsAppForm";
import KeywordDensityBlock from "@/components/KeywordDensityBlock";

/* ── Static Params ─────────────────────────────────── */
export function generateStaticParams() {
  return GUIDES.map(g => ({ slug: g.slug }));
}

/* ── Metadata ──────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find(g => g.slug === slug);
  if (!guide) return {};

  const kw = guide.keywords[0];
  const title = `${kw.replace(/\b\w/g, c => c.toUpperCase())} | Complete Guide India | Qurve Wealth`;
  const description = `${kw} — complete guide by Qurve Wealth (AMFI ARN-356292). Learn everything about ${kw} in India — returns, taxation, SIP strategy, and top funds. Expert ${kw} advice, free.`;

  return {
    title,
    description,
    keywords: guide.keywords,
    alternates: { canonical: `https://qurvewealth.in/mutual-funds/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://qurvewealth.in/mutual-funds/${slug}`,
      type: "article",
    },
  };
}

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  "Fund Types":            { bg: "bg-emerald-50",  border: "border-emerald-200", text: "text-emerald-800", icon: "📊" },
  "Investment Strategies": { bg: "bg-blue-50",     border: "border-blue-200",    text: "text-blue-800",    icon: "🎯" },
  "Comparisons":           { bg: "bg-amber-50",    border: "border-amber-200",   text: "text-amber-800",   icon: "⚖️" },
  "Taxation":              { bg: "bg-red-50",      border: "border-red-200",     text: "text-red-800",     icon: "🧾" },
  "How-To Guides":         { bg: "bg-purple-50",   border: "border-purple-200",  text: "text-purple-800",  icon: "📋" },
  "Top Performers":        { bg: "bg-yellow-50",   border: "border-yellow-200",  text: "text-yellow-800",  icon: "🏆" },
  "Concepts":              { bg: "bg-cyan-50",     border: "border-cyan-200",    text: "text-cyan-800",    icon: "💡" },
  "Wealth Planning":       { bg: "bg-teal-50",     border: "border-teal-200",    text: "text-teal-800",    icon: "🌱" },
  "SIP Specific":          { bg: "bg-indigo-50",   border: "border-indigo-200",  text: "text-indigo-800",  icon: "📈" },
};

function renderContent(content: string) {
  return content.split("\n\n").map((para, i) => {
    if (para.startsWith("## ")) {
      return (
        <h2 key={i} className="text-xl font-bold text-navy mt-8 mb-3 font-serif">
          {para.replace("## ", "")}
        </h2>
      );
    }
    if (para.startsWith("### ")) {
      return (
        <h3 key={i} className="text-lg font-semibold text-navy mt-6 mb-2">
          {para.replace("### ", "")}
        </h3>
      );
    }
    return (
      <p key={i} className="text-slate-600 leading-relaxed mb-4">
        {para}
      </p>
    );
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = GUIDES.find(g => g.slug === slug);
  if (!guide) notFound();

  const cat = CATEGORY_COLORS[guide.category] ?? CATEGORY_COLORS["Concepts"];
  const related = GUIDES.filter(g => g.category === guide.category && g.slug !== slug).slice(0, 4);
  const otherCats = GUIDES.filter(g => g.category !== guide.category).slice(0, 6);

  /* JSON-LD */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    author: { "@type": "Organization", name: "Qurve Wealth", url: "https://qurvewealth.in" },
    publisher: {
      "@type": "Organization",
      name: "Qurve Wealth",
      logo: { "@type": "ImageObject", url: "https://qurvewealth.in/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://qurvewealth.in/mutual-funds/${slug}` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://qurvewealth.in" },
      { "@type": "ListItem", position: 2, name: "Mutual Funds", item: "https://qurvewealth.in/mutual-funds" },
      { "@type": "ListItem", position: 3, name: guide.title, item: `https://qurvewealth.in/mutual-funds/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="flex flex-col">
        {/* Hero */}
        <section className="gradient-hero pt-28 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Mutual Funds", href: "/mutual-funds" },
                { label: guide.title },
              ]}
              light
            />

            <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Title + Content Preview */}
              <div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${cat.bg} ${cat.border} ${cat.text} mb-4`}>
                  {cat.icon} {guide.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 font-serif leading-tight">
                  {guide.title}
                </h1>
                <p className="text-lg text-slate-200 leading-relaxed mb-6">{guide.excerpt}</p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-gold">✓</span> AMFI ARN-356292
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-gold">✓</span> India-Specific
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-gold">✓</span> Free Resource
                  </div>
                </div>
              </div>

              {/* Right: WhatsApp Form */}
              <div>
                <WhatsAppForm light />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <section className="py-16 px-6 bg-off-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Article body */}
              <article className="lg:col-span-2">
                <AnimateOnScroll>
                  <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <div className="prose prose-slate max-w-none">
                      {renderContent(guide.content)}
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Keywords */}
                <AnimateOnScroll>
                  <div className="mt-6 bg-white rounded-xl border border-border p-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Related Topics</div>
                    <div className="flex flex-wrap gap-2">
                      {guide.keywords.map(kw => (
                        <span key={kw} className="text-xs bg-off-white border border-border text-slate-500 px-3 py-1 rounded-full">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* FAQ Section */}
                <AnimateOnScroll>
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-navy mb-6 font-serif">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      {guide.faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-xl border border-border p-6">
                          <h3 className="font-bold text-navy mb-3 text-sm leading-snug">
                            <span className="text-gold mr-2">Q{i + 1}.</span>{faq.q}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* 15x keyword density */}
                <AnimateOnScroll>
                  <div className="mt-8">
                    <KeywordDensityBlock keyword={guide.keywords[0]} />
                  </div>
                </AnimateOnScroll>

                {/* Disclaimer */}
                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong>Disclaimer:</strong> This guide is for educational purposes only and does not constitute financial advice. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance does not guarantee future results. Qurve Wealth is an AMFI Registered Mutual Fund Distributor (ARN-356292).
                  </p>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Invest CTA */}
                <AnimateOnScroll>
                  <div className="gradient-navy rounded-2xl p-6 text-center sticky top-24">
                    <div className="text-gold text-2xl mb-3">🚀</div>
                    <h3 className="font-bold text-white mb-2 font-serif">Start Investing with Qurve</h3>
                    <p className="text-slate-300 text-xs mb-5 leading-relaxed">
                      AMFI-registered · Quant-driven baskets · Zero minimum investment · 100% digital
                    </p>
                    <Link
                      href="/invest-now"
                      className="block w-full text-center bg-gold hover:bg-gold-light text-white font-bold text-sm px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                    >
                      Get Started →
                    </Link>
                    <Link
                      href="/sip-calculator"
                      className="block w-full text-center bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all mt-2"
                    >
                      SIP Calculator
                    </Link>
                    <div className="mt-4 text-xs text-white/40">ARN-356292 · Valid till March 2029</div>
                  </div>
                </AnimateOnScroll>

                {/* Related in same category */}
                {related.length > 0 && (
                  <AnimateOnScroll>
                    <div className="bg-white rounded-xl border border-border p-5">
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        More in {guide.category}
                      </div>
                      <div className="space-y-3">
                        {related.map(r => (
                          <Link
                            key={r.slug}
                            href={`/mutual-funds/${r.slug}`}
                            className="block group"
                          >
                            <div className="text-sm font-medium text-navy group-hover:text-gold transition-colors leading-snug">
                              {r.title}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5">Read guide →</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>
                )}

                {/* Explore other topics */}
                <AnimateOnScroll>
                  <div className="bg-white rounded-xl border border-border p-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Explore More Topics</div>
                    <div className="space-y-2">
                      {otherCats.map(r => (
                        <Link
                          key={r.slug}
                          href={`/mutual-funds/${r.slug}`}
                          className="block text-sm text-slate-600 hover:text-gold transition-colors"
                        >
                          → {r.title}
                        </Link>
                      ))}
                      <Link href="/mutual-funds" className="block text-sm text-gold font-semibold mt-2 hover:text-gold-light transition-colors">
                        View All 110+ Guides →
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Baskets */}
                <AnimateOnScroll>
                  <div className="bg-white rounded-xl border border-border p-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Our Baskets</div>
                    <div className="space-y-3">
                      {[
                        { name: "🌦️ All Weather", desc: "Balanced multi-asset", href: "/baskets#all-weather" },
                        { name: "🚀 Growth",      desc: "High-conviction equity", href: "/baskets#growth" },
                        { name: "🛡️ Smart Debt",  desc: "Conservative debt", href: "/baskets#smart-debt" },
                      ].map(b => (
                        <Link key={b.name} href={b.href} className="flex items-center justify-between group">
                          <div>
                            <div className="text-sm font-medium text-navy group-hover:text-gold transition-colors">{b.name}</div>
                            <div className="text-xs text-slate-400">{b.desc}</div>
                          </div>
                          <span className="text-gold text-xs">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom WhatsApp CTA */}
        <section className="py-16 px-6 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy font-serif mb-2">Have Questions About {guide.title}?</h2>
              <p className="text-slate-500">Talk directly to a Qurve Wealth advisor on WhatsApp — free, no commitment.</p>
            </div>
            <div className="max-w-lg mx-auto">
              <WhatsAppForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
