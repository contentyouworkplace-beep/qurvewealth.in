import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const pillars = [
  {
    icon: "📊",
    title: "Data Over Emotion",
    front: "Every allocation decision is backed by quantitative signals — not market sentiment or fear.",
    back: "We process momentum scores, valuation ratios, and macro indicators before touching a single weight. Emotions get left at the door.",
  },
  {
    icon: "🔄",
    title: "Systematic Rebalancing",
    front: "Portfolios drift as markets move. We correct this systematically before it costs you returns.",
    back: "Our model triggers rebalance signals based on threshold breaches and cycle transitions — not calendar dates. When the model says act, we act.",
  },
  {
    icon: "🌊",
    title: "Cycle Adaptation",
    front: "Markets move in cycles. Our strategy moves with them — not against them.",
    back: "By identifying the current market phase (expansion, peak, correction, recovery), we tilt allocations to the asset classes best positioned for that phase.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    front: "No black boxes. No hidden logic. You see every fund, every weight, every reason.",
    back: "We publish the rationale for every allocation and rebalance. Your money, your understanding.",
  },
  {
    icon: "🛡️",
    title: "Risk Management",
    front: "We define downside limits before we chase upside. Capital protection is non-negotiable.",
    back: "Each basket has drawdown thresholds and concentration limits built into the model. We don't take risks we can't explain.",
  },
];

const marketCycles = [
  {
    icon: "🌱",
    phase: "Expansion",
    desc: "GDP rising, earnings growing, credit expanding. We tilt toward equity-heavy baskets and cyclical sector funds.",
    action: "↑ Equity Exposure",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    icon: "⚡",
    phase: "Peak",
    desc: "Markets euphoric, valuations stretched, inflation rising. We begin reducing risk and rotating to defensive quality.",
    action: "→ Quality Tilt",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    dot: "bg-amber-500",
  },
  {
    icon: "🌧️",
    phase: "Correction",
    desc: "Volatility spikes, sentiment sours. We hold debt, liquid funds, and gold — preserving capital for the next cycle.",
    action: "↓ Risk Reduction",
    color: "bg-red-50 border-red-200 text-red-700",
    dot: "bg-red-500",
  },
  {
    icon: "🌅",
    phase: "Recovery",
    desc: "Leading indicators turn. Valuations compress. We gradually re-enter equity with a focus on beaten-down quality.",
    action: "↑ Selective Re-entry",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
  },
];

const investmentSteps = [
  { num: "01", title: "Goal Discovery", desc: "We start with your time horizon, risk appetite, and investment objective — not product pitches." },
  { num: "02", title: "Basket Selection", desc: "Based on your profile, we recommend one or more baskets that align with your goals." },
  { num: "03", title: "Signal Analysis", desc: "Our model evaluates 50+ macro, sector, and momentum signals to generate allocation weights." },
  { num: "04", title: "Fund Assignment", desc: "Weights are mapped to specific SEBI-regulated schemes from our curated AMC universe." },
  { num: "05", title: "Execution", desc: "You invest through licensed MFD infrastructure — secure, paperless, and fully compliant." },
  { num: "06", title: "Ongoing Management", desc: "We monitor signals continuously and trigger rebalances when the model demands adjustment." },
];

export default function QurveWayPage() {
  return (
    <div className="flex flex-col">
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="gradient-navy pt-28 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gold/8 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Qurve Way</span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Philosophy</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-serif">
            Where Data Shapes<br />
            <span className="gradient-text">Every Allocation</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            At Qurve, we believe that consistent wealth creation is a function of process, not prediction. Our investment philosophy is built on five non-negotiable pillars — all driven by data, not instinct.
          </p>
        </div>
      </section>

      {/* ── Philosophy Intro ──────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Why It Matters</span>
              <h2 className="text-4xl font-bold text-navy mt-4 mb-6 font-serif">
                Most Investors Lose to the Market.<br />We Change That.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Research consistently shows that investor returns lag fund returns — not because the funds are bad, but because investors buy high and sell low. Fear and greed override logic every time.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Qurve removes that variable. Our quantitative model makes allocation decisions before emotions can interfere. The result is disciplined, repeatable, cycle-aware investing that compounds over time.
              </p>
              <Link
                href="/invest-now"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-gold"
              >
                Start Investing →
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            {/* Model visual card */}
            <div className="gradient-navy rounded-2xl p-8 shadow-gold">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-6">Model Signal Dashboard</div>
              <div className="space-y-5">
                {[
                  { label: "Momentum Signal", pct: 78, color: "bg-gold" },
                  { label: "Valuation Score", pct: 54, color: "bg-blue-400" },
                  { label: "Sector Strength", pct: 85, color: "bg-qurve-emerald" },
                  { label: "Risk Score", pct: 32, color: "bg-red-400" },
                ].map(bar => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{bar.label}</span>
                      <span className="text-white font-bold">{bar.pct}%</span>
                    </div>
                    <div className="progress-bar bg-white/10">
                      <div
                        className={`h-full ${bar.color} rounded-full transition-all duration-700`}
                        style={{ width: `${bar.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="inline-flex items-center gap-3 bg-qurve-emerald-bg rounded-xl px-5 py-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-qurve-emerald animate-pulse2 inline-block" />
                  <span className="text-qurve-emerald font-bold text-sm font-mono">MODEL OUTPUT: REBALANCE — EQUITY ↑</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Five Pillars ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Core Principles</span>
              <h2 className="text-4xl font-bold text-navy mt-3 mb-4 font-serif">Five Pillars of the Qurve Way</h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                These are not guidelines. They are non-negotiable constraints baked into every decision we make.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.07}>
                <div className="group relative h-64 cursor-pointer" style={{ perspective: "1000px" }}>
                  {/* Front */}
                  <div className="absolute inset-0 bg-white border border-border rounded-2xl p-6 flex flex-col transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                    <div className="text-4xl mb-4">{p.icon}</div>
                    <h3 className="font-bold text-navy mb-2">{p.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.front}</p>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 gradient-navy rounded-2xl p-6 flex flex-col opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <div className="text-3xl mb-4">{p.icon}</div>
                    <h3 className="font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{p.back}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Cycles ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Adaptive Strategy</span>
              <h2 className="text-4xl font-bold text-navy mt-3 mb-4 font-serif">Reading the Market Cycle</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Every phase of the economic cycle creates different risks and opportunities. We position your portfolio to capture one and avoid the other.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketCycles.map((c, i) => (
              <AnimateOnScroll key={c.phase} delay={i * 0.08}>
                <div className={`rounded-2xl border-2 ${c.color} p-7 h-full`}>
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <h3 className="font-bold text-navy text-lg">{c.phase}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                  <div className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full border ${c.color}`}>
                    {c.action}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Track Analyse Adapt ───────────────────────────────── */}
      <section className="gradient-navy py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Ongoing Process</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-4 font-serif">Track. Analyse. Adapt.</h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Investing doesn't end at allocation. Our model runs continuously — so your portfolio is always current with the market.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "👁️",
                title: "Track",
                items: ["50+ macro & sector signals", "Daily NAV & flow data", "Market breadth indicators", "Sentiment & volatility indices"],
              },
              {
                icon: "🔬",
                title: "Analyse",
                items: ["Momentum score computation", "Valuation percentile ranking", "Sector rotation mapping", "Risk-adjusted return modelling"],
              },
              {
                icon: "⚙️",
                title: "Adapt",
                items: ["Weight recalibration triggers", "Fund-level swap recommendations", "Rebalance signal generation", "Investor notification & review"],
              },
            ].map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="text-4xl mb-5">{card.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-6">{card.title}</h3>
                  <ul className="space-y-3">
                    {card.items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                        <span className="text-gold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment Process ────────────────────────────────── */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <AnimateOnScroll>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">The Journey</span>
              <h2 className="text-4xl font-bold text-navy mt-4 mb-6 font-serif">Your Investment Process, End to End</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                From your first conversation with us to ongoing portfolio management — every step is deliberate, documented, and driven by data.
              </p>

              {/* Quick stats card */}
              <div className="gradient-navy rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: "50+", label: "Signals Monitored" },
                    { val: "11+", label: "AMC Partners" },
                    { val: "3", label: "Smart Baskets" },
                    { val: "₹0", label: "Minimum Investment" },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="text-3xl font-bold text-gold font-serif">{s.val}</div>
                      <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            {/* Timeline */}
            <div className="relative">
              {/* Gradient line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/40 to-transparent" />
              <div className="space-y-8">
                {investmentSteps.map((step, i) => (
                  <div key={step.num} className="flex gap-6 pl-0">
                    {/* Gold circle */}
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-gold z-10">
                      <span className="text-navy font-bold text-sm">{step.num}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-bold text-navy mb-1">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              The Qurve Way is<br />
              <span className="gradient-text">Your Way Forward</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Systematic. Transparent. Data-driven. Start your journey with a basket built for your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/invest-now"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 shadow-gold hover:-translate-y-0.5"
              >
                Start Investing →
              </Link>
              <Link
                href="/baskets"
                className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200"
              >
                Explore Baskets
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
