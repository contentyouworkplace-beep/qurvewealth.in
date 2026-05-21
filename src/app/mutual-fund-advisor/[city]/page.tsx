import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug, generateCityStaticParams } from "@/lib/cities";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import KeywordDensityBlock from "@/components/KeywordDensityBlock";

export async function generateStaticParams() {
  return generateCityStaticParams();
}

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const title = `Mutual Fund Advisor ${city.name} | SIP Investment ${city.name} | Qurve Wealth`;
  const description = `Mutual fund advisor ${city.name} — Qurve Wealth (AMFI ARN-356292) offers expert SIP investment plans and quant-driven mutual fund baskets in ${city.name}, ${city.state}. Best mutual fund advisor ${city.name} with zero minimum investment. Start today.`;

  return {
    title,
    description,
    keywords: [
      `mutual fund advisor ${city.name}`,
      `SIP investment ${city.name}`,
      `best mutual fund advisor ${city.name}`,
      `mutual fund ${city.name}`,
      `SIP plan ${city.name}`,
      `mutual fund distributor ${city.name}`,
      `invest mutual fund ${city.name} ${city.state}`,
    ],
    alternates: {
      canonical: `https://qurvewealth.in/mutual-fund-advisor/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://qurvewealth.in/mutual-fund-advisor/${slug}`,
      type: "website",
    },
  };
}

function getCityContent(city: NonNullable<ReturnType<typeof getCityBySlug>>) {
  const intros: Record<number, string> = {
    1: `${city.name} is one of India's most economically vibrant cities — home to a growing population of working professionals, entrepreneurs, and high-net-worth individuals who understand the value of smart, systematic investing. Yet most investors in ${city.name} still rely on tips, agents pushing commission-heavy products, or worse — keeping money idle in savings accounts. Qurve Wealth is changing that.`,
    2: `${city.name}, ${city.state}'s rapidly growing economic hub, is seeing a surge in first-generation investors who want their money to work smarter. Whether you are a working professional, a business owner, or someone just starting their investment journey in ${city.name}, Qurve Wealth brings institutional-quality, data-driven mutual fund strategies directly to you.`,
    3: `${city.name} represents the heart of aspirational India — a city where financial awareness is growing fast but quality investment guidance has remained scarce. Qurve Wealth bridges that gap by bringing AMFI-registered, quantitative mutual fund advisory to investors in ${city.name}, ${city.state}, with no minimum investment and complete transparency.`,
    4: `Investors in ${city.name}, ${city.state} deserve the same quality of financial guidance that metro cities have had access to for decades. Qurve Wealth makes that possible — an AMFI-registered mutual fund advisor that uses real market data, not gut feelings, to build your investment portfolio.`,
  };

  const faqs = [
    {
      q: `Is Qurve Wealth a registered mutual fund advisor in ${city.name}?`,
      a: `Yes. Qurve Wealth operates under AMFI Registration Number ARN-356292, valid till March 2029. We are authorised to distribute and advise on mutual fund investments across all of India, including ${city.name}, ${city.state}. All transactions are processed through SEBI-regulated infrastructure.`,
    },
    {
      q: `What is the minimum SIP investment amount for ${city.name} investors?`,
      a: `There is no minimum investment requirement imposed by Qurve Wealth. You can start a SIP with as little as ₹500 per scheme. Our philosophy is that great investing should be accessible to every investor in ${city.name} — not gated behind high minimums.`,
    },
    {
      q: `How do I get started with mutual fund investing in ${city.name}?`,
      a: `Simply fill in the contact form on our Invest Now page. Our team will reach out within 1 business day, understand your financial goals, and recommend the most suitable basket from our All Weather, Smart Debt, or Growth strategies. Onboarding is fully digital — no branch visits required.`,
    },
  ];

  return { intro: intros[city.tier] || intros[3], faqs };
}

const basketHighlights = [
  {
    icon: "🌦️",
    name: "All Weather Basket",
    risk: "Moderate",
    horizon: "3+ Years",
    desc: "A balanced multi-asset basket designed to perform through bull runs, corrections, and sideways markets.",
    href: "/baskets#all-weather",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    icon: "🛡️",
    name: "Smart Debt Basket",
    risk: "Low",
    horizon: "1–3 Years",
    desc: "Navigate interest rate cycles intelligently. Beat FDs consistently with a conservative debt strategy.",
    href: "/baskets#smart-debt",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: "🚀",
    name: "Growth Basket",
    risk: "High",
    horizon: "5+ Years",
    desc: "High-conviction equity basket for long-term wealth creation. Momentum + valuation driven.",
    href: "/baskets#growth",
    badge: "bg-amber-100 text-amber-700",
  },
];

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const { intro, faqs } = getCityContent(city);

  // Nearby cities (same state, different from current)
  const nearbyCities = CITIES.filter(
    c => c.state === city.state && c.slug !== city.slug
  ).slice(0, 8);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `Qurve Wealth — Mutual Fund Advisor in ${city.name}`,
    url: `https://qurvewealth.in/mutual-fund-advisor/${slug}`,
    description: `AMFI Registered Mutual Fund Advisor in ${city.name}, ${city.state}. Quant-driven SIP investment strategies and mutual fund baskets.`,
    areaServed: { "@type": "City", name: city.name, addressRegion: city.state, addressCountry: "IN" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "F Building, Konark Indrayu Enclave-2, NIBM Undri Road",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411048",
      addressCountry: "IN",
    },
    telephone: "",
    email: "support@qurvewealth.in",
    hasCredential: { "@type": "EducationalOccupationalCredential", name: "AMFI ARN-356292" },
    serviceType: "Mutual Fund Distribution",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="gradient-hero pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-white/3 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Mutual Fund Advisors", href: "/mutual-fund-advisor" },
              { label: city.name },
            ]}
            light={true}
          />

          <div className="mt-8">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-slate-200 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-qurve-emerald animate-pulse2 inline-block" />
              AMFI Registered · ARN-356292 · Serving {city.name}
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 font-serif">
              Mutual Fund Advisor<br />
              in <span className="gradient-text">{city.name}</span>
            </h1>

            <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
              Qurve Wealth brings AMFI-registered, quant-driven mutual fund advisory to {city.name}, {city.state}.
              Data-backed SIP investment strategies. Zero minimum investment. Full transparency.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/invest-now"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-gold hover:-translate-y-0.5"
              >
                Start Investing in {city.name} →
              </Link>
              <Link
                href="/baskets"
                className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                View Baskets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-5 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-x-8 gap-y-2 justify-center">
          {["AMFI Registered ARN-356292", "Zero Minimum Investment", "SEBI-Regulated Funds", "No Hidden Charges", "Fully Digital Onboarding"].map(t => (
            <div key={t} className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="text-navy font-bold">✓</span> {t}
            </div>
          ))}
        </div>
      </section>

      {/* ── About Section ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-off-white">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Mutual Fund Advisor · {city.name}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-3 mb-6 font-serif">
                  Smart Investing for {city.name} Investors
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">{intro}</p>
                <p className="text-slate-600 leading-relaxed">
                  As an AMFI-registered Mutual Fund Distributor (ARN-356292), we use quantitative signals —
                  momentum scores, valuation metrics, sector strength indices, and market cycle detection — to
                  build and rebalance mutual fund baskets that outperform across different market conditions.
                  No guesswork. No emotion-driven decisions. Just systematic wealth creation for every investor
                  in {city.name}.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: "📊", title: "Quant-Driven Decisions", desc: `Our model evaluates 50+ signals to determine the optimal fund allocation for ${city.name} investors at any given market phase.` },
                  { icon: "🔄", title: "Systematic Rebalancing", desc: "Portfolio weights are adjusted when signals demand — not based on fear or excitement. Your allocation stays aligned with market conditions." },
                  { icon: "🛡️", title: "SEBI-Regulated Safety", desc: `All investments are held in your name in SEBI-regulated mutual fund schemes. Qurve is only your advisor — your money is always yours.` },
                  { icon: "₹0", title: "Zero Minimum Investment", desc: `Start your SIP in ${city.name} with as little as ₹500. Great investing shouldn't require large minimums.` },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-xl p-5 border border-border">
                    <div className="text-2xl shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-bold text-navy text-sm mb-1">{item.title}</div>
                      <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Basket Recommendations ────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Strategies</span>
              <h2 className="text-3xl font-bold text-navy mt-3 mb-4 font-serif">
                Choose Your Investment Basket in {city.name}
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Every Qurve basket is quantitatively constructed, systematically rebalanced, and designed
                for a specific risk-return objective. Available to all investors in {city.name}, {city.state}.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {basketHighlights.map((basket, i) => (
              <AnimateOnScroll key={basket.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border hover:border-gold/40 hover:shadow-gold hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col h-full">
                  <div className="text-4xl mb-4">{basket.icon}</div>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${basket.badge}`}>
                    {basket.risk} Risk · {basket.horizon}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-3">{basket.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{basket.desc}</p>
                  <Link
                    href={basket.href}
                    className="inline-flex items-center gap-1 text-navy font-semibold text-sm hover:text-gold transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/invest-now"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-mid text-white font-bold px-10 py-4 rounded-xl transition-all duration-200"
            >
              Start Your SIP in {city.name} →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Qurve ──────────────────────────────────── */}
      <section className="gradient-navy py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Why Qurve</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-4 font-serif">
                Why {city.name} Investors Choose Qurve Wealth
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📈", title: "Data Over Gut Feeling", desc: "Every fund selection and weight is driven by 50+ quantitative signals — not agent commissions or market tips." },
              { icon: "🔍", title: "Full Transparency", desc: "See every fund, every weight, every signal that drove the allocation. No black boxes. Your money, your understanding." },
              { icon: "🏛️", title: "AMFI Registered", desc: "ARN-356292, valid till 2029. You invest with a fully regulated, SEBI-compliant mutual fund distributor." },
              { icon: "🌊", title: "Cycle-Aware Strategy", desc: "We identify market phases — expansion, correction, recovery — and adjust your portfolio accordingly." },
              { icon: "📱", title: "Fully Digital", desc: "Invest from anywhere in India. No branch visits. KYC, onboarding, and portfolio tracking are 100% online." },
              { icon: "💬", title: "Dedicated Support", desc: "Every investor gets personal attention. We're not a platform — we're your mutual fund advisor." },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.07}>
                <div className="glass rounded-xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">FAQ</span>
              <h2 className="text-3xl font-bold text-navy mt-3 mb-4 font-serif">
                Mutual Fund FAQs for {city.name} Investors
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 0.07}>
                <div className="bg-off-white rounded-xl border border-border p-6">
                  <h3 className="font-bold text-navy mb-3 text-base">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-off-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl border border-border shadow-sm p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">
                Ready to Invest Smarter in {city.name}?
              </h2>
              <p className="text-slate-500 mb-8 max-w-xl mx-auto">
                Join investors across {city.state} who have moved from guesswork to systematic, data-driven mutual
                fund investing with Qurve Wealth. Zero minimum. No hidden charges. Full transparency.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/invest-now"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 shadow-gold hover:-translate-y-0.5"
                >
                  Get Started Today →
                </Link>
                <Link
                  href="/baskets"
                  className="inline-flex items-center gap-2 bg-off-white hover:bg-border text-navy font-semibold px-10 py-4 rounded-xl border border-border transition-all duration-200"
                >
                  Explore Baskets
                </Link>
              </div>
              <p className="text-xs text-slate-400 mt-6">
                AMFI Registered MFD · ARN-356292 · Serving investors across {city.state} and all of India
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Keyword Density Block ─────────────────────────────── */}
      <section className="py-10 px-6 bg-off-white border-t border-border">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <KeywordDensityBlock keyword={`mutual fund advisor ${city.name}`} city={city.name} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Nearby Cities ─────────────────────────────────────── */}
      {nearbyCities.length > 0 && (
        <section className="py-16 px-6 bg-white border-t border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-bold text-navy mb-6">
              Mutual Fund Advisor Near {city.name} — Other {city.state} Cities We Serve
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map(c => (
                <Link
                  key={c.slug}
                  href={`/mutual-fund-advisor/${c.slug}`}
                  className="inline-flex items-center gap-1.5 bg-off-white hover:bg-gold-pale border border-border hover:border-gold/30 text-slate-600 hover:text-navy text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Mutual Fund Advisor {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
