import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppForm from "@/components/WhatsAppForm";

export const metadata: Metadata = {
  title: "Mutual Fund Baskets India | All Weather, Growth, Smart Debt | Qurve Wealth",
  description: "Mutual fund baskets India — Qurve Wealth offers quant-driven All Weather, Growth, and Smart Debt mutual fund baskets. AMFI ARN-356292. Invest in the right mutual fund basket for your goals.",
  keywords: ["mutual fund baskets India", "all weather mutual fund basket", "growth mutual fund basket", "smart debt mutual fund", "quant mutual fund India"],
  alternates: { canonical: "https://qurvewealth.in/baskets" },
  openGraph: {
    title: "Mutual Fund Baskets India | All Weather, Growth, Smart Debt | Qurve Wealth",
    description: "Mutual fund baskets India — quant-driven All Weather, Growth, and Smart Debt baskets by Qurve Wealth (AMFI ARN-356292).",
    url: "https://qurvewealth.in/baskets",
  },
};

const baskets = [
  {
    id: "all-weather",
    icon: "🌦️",
    name: "All Weather",
    tagline: "Resilience through every market phase",
    color: "blue",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    headerBg: "bg-gradient-to-r from-blue-900 to-navy",
    desc1: "The All Weather Basket is our flagship multi-asset strategy, engineered to deliver consistent risk-adjusted returns regardless of the market environment. Inspired by the principle that different assets perform in different economic conditions, we blend equity, debt, and hybrid funds in proportions that adapt as cycles shift.",
    desc2: "Whether markets are soaring or correcting, the All Weather Basket is designed to participate in gains while cushioning against sharp drawdowns. It is the ideal choice for investors who want steady compounding without the stomach-churning volatility of pure equity.",
    details: [
      { label: "No. of Schemes", value: "8–10 Fund Schemes" },
      { label: "Risk Level", value: "Moderate" },
      { label: "Ideal Horizon", value: "3+ Years" },
      { label: "Equity Exposure", value: "40–70% (Dynamic)" },
      { label: "Rebalancing", value: "✓ Systematic (Signal-Based)" },
      { label: "Min. Investment", value: "Zero" },
    ],
    forWhom: [
      { icon: "🎯", title: "First-Time Investors", desc: "A balanced, well-diversified basket that doesn't require deep market knowledge to understand." },
      { icon: "📅", title: "3–7 Year Horizon", desc: "Ideal for goals like buying a car, funding a sabbatical, or building a medium-term corpus." },
      { icon: "⚖️", title: "Moderate Risk Appetite", desc: "Comfortable with some NAV fluctuation but want meaningful downside protection." },
    ],
  },
  {
    id: "smart-debt",
    icon: "🛡️",
    name: "Smart Debt",
    tagline: "Capital protection with smart yield",
    color: "emerald",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-200",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    headerBg: "bg-gradient-to-r from-emerald-900 to-navy",
    desc1: "The Smart Debt Basket is our conservative fixed-income strategy, designed for investors who prioritise capital preservation while still beating traditional savings instruments. We navigate the interest rate cycle intelligently — rotating across short duration, dynamic bond, credit risk, and gilt funds based on our macro model.",
    desc2: "Unlike a static debt fund, the Smart Debt Basket responds to RBI policy signals, yield curve movements, and credit spread data to position your money where the risk-return trade-off is most favourable at any given time.",
    details: [
      { label: "No. of Schemes", value: "5–7 Fund Schemes" },
      { label: "Risk Level", value: "Low" },
      { label: "Ideal Horizon", value: "1–3 Years" },
      { label: "Equity Exposure", value: "0–10% (Minimal)" },
      { label: "Rebalancing", value: "✓ Systematic (Signal-Based)" },
      { label: "Min. Investment", value: "Zero" },
    ],
    forWhom: [
      { icon: "💰", title: "Conservative Savers", desc: "Looking to move beyond FDs and savings accounts without taking on equity risk." },
      { icon: "📆", title: "1–3 Year Goals", desc: "Emergency corpus, short-term savings, or parking money between major investments." },
      { icon: "🏦", title: "FD Migrators", desc: "Investors who want post-tax returns that consistently beat fixed deposits." },
    ],
  },
  {
    id: "growth",
    icon: "🚀",
    name: "Growth",
    tagline: "Aggressive alpha for long-term wealth",
    color: "amber",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    headerBg: "bg-gradient-to-r from-amber-900 to-navy",
    desc1: "The Growth Basket is our high-conviction equity strategy, built for investors with a long time horizon and the temperament to ride market volatility in pursuit of superior wealth creation. This is not a diversified index fund — it is an active, concentrated equity basket driven by strong momentum and valuation signals.",
    desc2: "We target funds with strong factor exposures — quality, momentum, and low volatility — and rotate across market caps and sectors based on where the model sees the best risk-adjusted alpha over the next 12–18 months. For patient, informed investors, this basket is designed to be a wealth-compounding engine.",
    details: [
      { label: "No. of Schemes", value: "10–14 Fund Schemes" },
      { label: "Risk Level", value: "High" },
      { label: "Ideal Horizon", value: "5+ Years" },
      { label: "Equity Exposure", value: "80–100%" },
      { label: "Rebalancing", value: "✓ Systematic (Signal-Based)" },
      { label: "Min. Investment", value: "Zero" },
    ],
    forWhom: [
      { icon: "📈", title: "Long-Term Wealth Builders", desc: "Focused on creating significant wealth over 7–10+ year horizons, willing to accept short-term volatility." },
      { icon: "🧠", title: "Informed Investors", desc: "Understand that equity can fall 30–40% in corrections and have the conviction to stay invested." },
      { icon: "🎓", title: "Retirement & Legacy Planners", desc: "Building a large equity corpus for retirement, children's education, or generational wealth." },
    ],
  },
];

const comparisonRows = [
  { feature: "No. of Schemes", allWeather: "8–10", smartDebt: "5–7", growth: "10–14" },
  { feature: "Risk Level", allWeather: "Moderate", smartDebt: "Low", growth: "High", colored: true },
  { feature: "Ideal Horizon", allWeather: "3+ Years", smartDebt: "1–3 Years", growth: "5+ Years" },
  { feature: "Equity Exposure", allWeather: "40–70%", smartDebt: "0–10%", growth: "80–100%" },
  { feature: "Rebalancing", allWeather: "✓ Systematic", smartDebt: "✓ Systematic", growth: "✓ Systematic", green: true },
  { feature: "Min. Investment", allWeather: "Zero", smartDebt: "Zero", growth: "Zero", greenAll: true },
];

const riskColors: Record<string, string> = {
  Moderate: "bg-amber-100 text-amber-700",
  Low: "bg-emerald-100 text-emerald-700",
  High: "bg-red-100 text-red-700",
};

export default function BasketsPage() {
  return (
    <div className="flex flex-col">
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="gradient-navy pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Baskets</span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Smart Baskets</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-serif">
            Three Baskets.<br />
            <span className="gradient-text">One Framework.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
            Each Qurve basket is quantitatively constructed, systematically rebalanced, and built around a specific risk-return objective. Choose the one that fits your goals — or combine them.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-4 mb-10">
            {baskets.map(b => (
              <a
                key={b.id}
                href={`#${b.id}`}
                className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
              >
                {b.icon} {b.name}
              </a>
            ))}
          </div>
          <div className="max-w-sm">
            <WhatsAppForm light />
          </div>
        </div>
      </section>

      {/* ── Basket Sections ───────────────────────────────────── */}
      {baskets.map((basket, idx) => (
        <section
          key={basket.id}
          id={basket.id}
          className={`py-24 px-6 ${idx % 2 === 0 ? "bg-white" : "bg-off-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <AnimateOnScroll>
              {/* Header */}
              <div className={`rounded-2xl ${basket.headerBg} p-10 mb-12 flex items-center gap-6`}>
                <div className="text-6xl">{basket.icon}</div>
                <div>
                  <div className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 ${basket.badgeBg} ${basket.badgeText}`}>
                    Smart Basket
                  </div>
                  <h2 className="text-4xl font-bold text-white font-serif">{basket.name}</h2>
                  <p className="text-slate-300 mt-1">{basket.tagline}</p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <AnimateOnScroll>
                <div>
                  <p className="text-slate-600 leading-relaxed mb-5 text-lg">{basket.desc1}</p>
                  <p className="text-slate-600 leading-relaxed">{basket.desc2}</p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.12}>
                {/* Detail card */}
                <div className={`rounded-2xl border-2 ${basket.accentBorder} ${basket.accentBg} p-8`}>
                  <h3 className="font-bold text-navy mb-6 text-lg">Basket Specifications</h3>
                  <div className="space-y-4">
                    {basket.details.map(row => (
                      <div key={row.label} className="flex justify-between items-center py-3 border-b border-border/60 last:border-0">
                        <span className="text-slate-500 text-sm">{row.label}</span>
                        <span className={`font-semibold text-sm ${
                          row.value === "Zero"
                            ? "text-qurve-emerald"
                            : row.value.includes("✓")
                            ? "text-qurve-emerald"
                            : "text-navy"
                        }`}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/invest-now"
                      className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-6 py-4 rounded-xl transition-all duration-200"
                    >
                      Invest in {basket.name} →
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Who is it for */}
            <AnimateOnScroll delay={0.1}>
              <div>
                <h3 className="font-bold text-navy text-xl mb-6">Who is it for?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {basket.forWhom.map(w => (
                    <div key={w.title} className="bg-white rounded-xl p-6 border border-border">
                      <div className="text-3xl mb-3">{w.icon}</div>
                      <h4 className="font-bold text-navy mb-2">{w.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      {/* ── Comparison Table ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Side by Side</span>
              <h2 className="text-4xl font-bold text-navy mt-3 mb-4 font-serif">Compare All Baskets</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Not sure which basket is right for you? Here's a quick comparison.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-2xl overflow-hidden">
                <thead>
                  <tr className="gradient-navy">
                    <th className="text-left px-6 py-5 text-slate-300 font-semibold text-sm">Feature</th>
                    <th className="text-center px-6 py-5 text-white font-bold">🌦️ All Weather</th>
                    <th className="text-center px-6 py-5 text-white font-bold">🛡️ Smart Debt</th>
                    <th className="text-center px-6 py-5 text-white font-bold">🚀 Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-off-white"}>
                      <td className="px-6 py-4 text-slate-600 text-sm font-medium">{row.feature}</td>
                      {[row.allWeather, row.smartDebt, row.growth].map((val, j) => (
                        <td key={j} className="px-6 py-4 text-center">
                          {row.colored ? (
                            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${riskColors[val] ?? ""}`}>
                              {val}
                            </span>
                          ) : row.green || row.greenAll ? (
                            <span className="text-qurve-emerald font-semibold text-sm">{val}</span>
                          ) : (
                            <span className="text-navy font-semibold text-sm">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="gradient-navy py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        </div>
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-serif">
              Find Your Basket.<br />
              <span className="gradient-text">Start Building Wealth.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Zero minimums. Full transparency. Systematic rebalancing. Start with the basket that fits your goals today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/invest-now"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 shadow-gold hover:-translate-y-0.5"
              >
                Start Investing →
              </Link>
              <Link
                href="/qurve-way"
                className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200"
              >
                Learn the Qurve Way
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
