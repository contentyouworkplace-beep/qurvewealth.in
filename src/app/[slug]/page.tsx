import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KEYWORD_PAGES, keywordPageBySlug } from "@/lib/keyword-pages";
import { GUIDES } from "@/lib/guides";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppForm from "@/components/WhatsAppForm";
import KeywordDensityBlock from "@/components/KeywordDensityBlock";

export function generateStaticParams() {
  return KEYWORD_PAGES.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = keywordPageBySlug[slug];
  if (!page) return {};

  const kw = page.keyword;
  const city = page.city;

  const title = city
    ? `${kw} in ${city} | Mutual Fund Advisor ${city} | Qurve Wealth`
    : `${kw} | Mutual Fund Guide India | Qurve Wealth`;

  const description = city
    ? `${kw} in ${city} — Qurve Wealth (AMFI ARN-356292) provides expert ${kw} advisory in ${city}. Start SIP investment in ${city} with zero minimum. Get free ${kw} guidance today.`
    : `${kw} — expert guide by Qurve Wealth (AMFI ARN-356292). Everything you need to know about ${kw} in India — returns, taxation, SIP strategy, and how to invest. Free ${kw} advice.`;

  return {
    title,
    description,
    keywords: city
      ? [kw, `${kw} ${city}`, `mutual fund ${city}`, `SIP investment ${city}`, `mutual fund advisor ${city}`]
      : [kw, `${kw} India`, "mutual fund India", "SIP investment India", "Qurve Wealth"],
    alternates: { canonical: `https://qurvewealth.in/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://qurvewealth.in/${slug}`,
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

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = keywordPageBySlug[slug];
  if (!page) notFound();

  const guide = GUIDES.find(g => g.slug === page.parentGuideSlug);
  const cat = CATEGORY_COLORS[page.category] ?? CATEGORY_COLORS["Concepts"];
  const cityName = page.city ?? null;

  const relatedGuides = GUIDES.filter(g => g.category === page.category).slice(0, 5);
  const relatedKeywords = KEYWORD_PAGES.filter(
    p => p.category === page.category && p.slug !== slug && p.city === page.city
  ).slice(0, 8);

  const h1 = cityName
    ? `${page.keyword.replace(/\b\w/g, c => c.toUpperCase())} — Expert Advice in ${cityName}`
    : `${page.keyword.replace(/\b\w/g, c => c.toUpperCase())} — Complete Guide`;

  const intro = cityName
    ? `Looking for expert guidance on <strong>${page.keyword}</strong> in <strong>${cityName}</strong>? Qurve Wealth is an AMFI-registered mutual fund distributor (ARN-356292) offering data-driven investment advisory to investors across ${cityName}. Whether you're starting your first SIP or building a diversified portfolio, our quant-driven approach helps you invest smarter.`
    : `Searching for the best information on <strong>${page.keyword}</strong>? This page gives you a focused, expert overview — and links directly to our in-depth guide. Qurve Wealth (AMFI ARN-356292) helps Indian investors make data-backed mutual fund decisions with zero minimum investment requirements.`;

  const cityFaqs = cityName
    ? [
        {
          q: `Where can I get mutual fund advice for ${page.keyword} in ${cityName}?`,
          a: `Qurve Wealth provides AMFI-registered (ARN-356292) mutual fund advisory across ${cityName}. Our onboarding is 100% digital — no branch visit required. We cover all aspects of ${page.keyword} with personalised portfolio recommendations.`,
        },
        {
          q: `Is Qurve Wealth available in ${cityName}?`,
          a: `Yes. Qurve Wealth serves investors across all of India including ${cityName}. Our digital platform means you get the same quality advisory as metro investors — from anywhere in ${cityName}.`,
        },
        {
          q: `What is the minimum SIP to invest in ${cityName}?`,
          a: `You can start a SIP with as little as ₹500/month. Qurve Wealth has no minimum investment barrier for ${cityName} investors. Our baskets — All Weather, Growth, and Smart Debt — are accessible to all income levels.`,
        },
      ]
    : guide?.faqs.slice(0, 3) ?? [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description: page.metaDescription,
    author: { "@type": "Organization", name: "Qurve Wealth", url: "https://qurvewealth.in" },
    publisher: {
      "@type": "Organization",
      name: "Qurve Wealth",
      logo: { "@type": "ImageObject", url: "https://qurvewealth.in/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://qurvewealth.in/${slug}` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityFaqs.map(f => ({
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
      { "@type": "ListItem", position: 2, name: "Keywords", item: "https://qurvewealth.in/topics" },
      { "@type": "ListItem", position: 3, name: page.keyword, item: `https://qurvewealth.in/${slug}` },
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
                { label: "Topics", href: "/keywords" },
                { label: page.keyword },
              ]}
              light
            />

            <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${cat.bg} ${cat.border} ${cat.text} mb-4`}>
                  {cat.icon} {page.category}
                  {cityName && <span className="ml-1 text-slate-500">· {cityName}</span>}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mt-3 mb-5 font-serif leading-tight">
                  {h1}
                </h1>
                <p className="text-base text-slate-200 leading-relaxed mb-6">{page.excerpt}</p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-gold">✓</span> AMFI ARN-356292
                  </div>
                  {cityName && (
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <span className="text-gold">✓</span> Serving {cityName}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-gold">✓</span> Free Advisory
                  </div>
                </div>
              </div>
              <div>
                <WhatsAppForm light />
              </div>
            </div>
          </div>
        </section>

        {/* Main */}
        <section className="py-16 px-6 bg-off-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Content */}
              <article className="lg:col-span-2 space-y-6">
                <AnimateOnScroll>
                  <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
                    <h2 className="text-xl font-bold text-navy mb-4 font-serif">
                      About: {page.keyword.replace(/\b\w/g, c => c.toUpperCase())}
                    </h2>
                    <p
                      className="text-slate-600 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: intro }}
                    />
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {page.excerpt}
                    </p>
                    {cityName && (
                      <p className="text-slate-600 leading-relaxed">
                        Investors in <strong>{cityName}</strong> can access Qurve Wealth's full suite of mutual fund services — including SIP planning, basket portfolios, and goal-based investing — entirely online. No physical visits. No high minimums. Just smart, data-driven investing.
                      </p>
                    )}
                  </div>
                </AnimateOnScroll>

                {/* 15x keyword density block */}
                <AnimateOnScroll>
                  <KeywordDensityBlock keyword={page.keyword} city={cityName ?? undefined} />
                </AnimateOnScroll>

                {/* Read Full Guide CTA */}
                {guide && (
                  <AnimateOnScroll>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 flex items-start gap-4">
                      <div className="text-2xl">📖</div>
                      <div>
                        <div className="font-bold text-navy mb-1">Read the Full Guide</div>
                        <p className="text-sm text-slate-600 mb-3">
                          This page focuses on <strong>{page.keyword}</strong>. For a complete deep-dive including returns data, taxation, and fund selection criteria, read our full guide.
                        </p>
                        <Link
                          href={`/mutual-funds/${guide.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                        >
                          {guide.title} →
                        </Link>
                      </div>
                    </div>
                  </AnimateOnScroll>
                )}

                {/* Baskets */}
                <AnimateOnScroll>
                  <div className="bg-white rounded-2xl border border-border p-8">
                    <h2 className="text-lg font-bold text-navy mb-5 font-serif">
                      Our Investment Baskets
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { icon: "🌦️", name: "All Weather", desc: "Balanced multi-asset basket for moderate risk investors", href: "/baskets#all-weather" },
                        { icon: "🚀", name: "Growth",      desc: "High-conviction equity basket for long-term wealth creation", href: "/baskets#growth" },
                        { icon: "🛡️", name: "Smart Debt",  desc: "Conservative debt basket for capital preservation", href: "/baskets#smart-debt" },
                      ].map(b => (
                        <Link
                          key={b.name}
                          href={b.href}
                          className="block border border-border rounded-xl p-4 hover:border-gold hover:shadow-sm transition-all group"
                        >
                          <div className="text-xl mb-2">{b.icon}</div>
                          <div className="font-bold text-navy text-sm group-hover:text-gold transition-colors">{b.name}</div>
                          <div className="text-xs text-slate-500 mt-1">{b.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* FAQs */}
                {cityFaqs.length > 0 && (
                  <AnimateOnScroll>
                    <div>
                      <h2 className="text-xl font-bold text-navy mb-5 font-serif">
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-4">
                        {cityFaqs.map((faq, i) => (
                          <div key={i} className="bg-white rounded-xl border border-border p-6">
                            <h3 className="font-bold text-navy mb-2 text-sm">
                              <span className="text-gold mr-2">Q{i + 1}.</span>{faq.q}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>
                )}

                {/* Related keywords */}
                {relatedKeywords.length > 0 && (
                  <AnimateOnScroll>
                    <div className="bg-white rounded-xl border border-border p-5">
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                        Related Topics
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {relatedKeywords.map(p => (
                          <Link
                            key={p.slug}
                            href={`/${p.slug}`}
                            className="text-xs bg-off-white border border-border text-slate-600 hover:text-gold hover:border-gold px-3 py-1.5 rounded-full transition-colors"
                          >
                            {p.keyword}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>
                )}

                {/* Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong>Disclaimer:</strong> This page is for educational and informational purposes only and does not constitute financial advice. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully. Past performance does not guarantee future results. Qurve Wealth is an AMFI Registered Mutual Fund Distributor (ARN-356292).
                  </p>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                <AnimateOnScroll>
                  <div className="gradient-navy rounded-2xl p-6 text-center sticky top-24">
                    <div className="text-gold text-2xl mb-3">🚀</div>
                    <h3 className="font-bold text-white mb-2 font-serif">
                      {cityName ? `Invest in ${cityName}` : "Start Investing"}
                    </h3>
                    <p className="text-slate-300 text-xs mb-5 leading-relaxed">
                      AMFI-registered · Quant-driven baskets · Zero minimum · 100% digital
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

                {relatedGuides.length > 0 && (
                  <AnimateOnScroll>
                    <div className="bg-white rounded-xl border border-border p-5">
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        Guides in {page.category}
                      </div>
                      <div className="space-y-3">
                        {relatedGuides.map(g => (
                          <Link key={g.slug} href={`/mutual-funds/${g.slug}`} className="block group">
                            <div className="text-sm font-medium text-navy group-hover:text-gold transition-colors leading-snug">
                              {g.title}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5">Read guide →</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>
                )}

                {cityName && (
                  <AnimateOnScroll>
                    <div className="bg-white rounded-xl border border-border p-5">
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        Investing in {cityName}
                      </div>
                      <Link
                        href={`/mutual-fund-advisor/${cityName.toLowerCase()}`}
                        className="block text-sm font-medium text-navy hover:text-gold transition-colors"
                      >
                        Mutual Fund Advisor in {cityName} →
                      </Link>
                    </div>
                  </AnimateOnScroll>
                )}

                <AnimateOnScroll>
                  <div className="bg-white rounded-xl border border-border p-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">All Topics</div>
                    <Link href="/mutual-funds" className="block text-sm text-gold font-semibold hover:text-gold-light transition-colors">
                      View All 40+ Guides →
                    </Link>
                  </div>
                </AnimateOnScroll>
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6 bg-white border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy font-serif mb-2">
                {cityName
                  ? `Get Expert Mutual Fund Advice in ${cityName}`
                  : `Have Questions About ${page.keyword.replace(/\b\w/g, c => c.toUpperCase())}?`}
              </h2>
              <p className="text-slate-500">
                Talk directly to a Qurve Wealth advisor on WhatsApp — free, no commitment.
              </p>
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
