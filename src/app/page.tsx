import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FaqAccordion from "@/components/FaqAccordion";

const partners = [
  { name: "HDFC Mutual Fund",     logo: "/logos/HDFC.png" },
  { name: "SBI Mutual Fund",      logo: "/logos/SBI.png" },
  { name: "ICICI Prudential",     logo: "/logos/ICICI.png" },
  { name: "Axis Mutual Fund",     logo: "/logos/AXIS.png" },
  { name: "Kotak Mahindra MF",   logo: "/logos/KOTAK.png" },
  { name: "Nippon India MF",      logo: "/logos/NIPPON.png" },
  { name: "DSP Mutual Fund",      logo: "/logos/DSP.png" },
  { name: "Tata Mutual Fund",     logo: "/logos/TATA.png" },
  { name: "Aditya Birla SL MF",   logo: "/logos/ADITYA.png" },
  { name: "Edelweiss MF",         logo: "/logos/EDELWEISS.png" },
  { name: "Motilal Oswal MF",     logo: "/logos/MOTILAL.png" },
];

const whyFeatures = [
  {
    icon: "📊",
    title: "Data-Driven Allocation",
    desc: "Every basket is built using quantitative signals — momentum scores, valuation metrics, and sector strength indices — not gut feeling.",
  },
  {
    icon: "🔄",
    title: "Systematic Rebalancing",
    desc: "Markets change. So do your allocations. Our model rebalances automatically to keep your portfolio aligned with current conditions.",
  },
  {
    icon: "🌊",
    title: "Cycle-Aware Strategy",
    desc: "We identify where we are in the market cycle — expansion, peak, correction, or recovery — and adjust fund weights accordingly.",
  },
  {
    icon: "🔍",
    title: "Full Transparency",
    desc: "See every fund, every weight, every rationale. No black boxes. Your money, your understanding.",
  },
  {
    icon: "🛡️",
    title: "Rigorous Risk Management",
    desc: "Each basket has a defined risk profile with drawdown controls. We protect capital as diligently as we grow it.",
  },
  {
    icon: "₹0",
    title: "Zero Minimum Investment",
    desc: "Start with whatever you have. Our philosophy is that great investing should be accessible — not gated behind high minimums.",
  },
];

const howItWorks = [
  { step: "01", title: "Tell Us Your Goal", desc: "Share your investment horizon, risk comfort, and what you're saving for." },
  { step: "02", title: "Pick Your Basket", desc: "Choose from All Weather, Smart Debt, or Growth — or combine them." },
  { step: "03", title: "We Analyse the Market", desc: "Our quantitative model evaluates 50+ signals across macro and sector data." },
  { step: "04", title: "Funds Are Allocated", desc: "Weights are assigned to SEBI-regulated mutual fund schemes based on our model output." },
  { step: "05", title: "You Invest via MFD", desc: "Transactions happen through licensed MFD infrastructure — regulated, secure, and paperless." },
  { step: "06", title: "We Monitor & Rebalance", desc: "Markets shift. We review allocations regularly and rebalance when signals demand it." },
];

const baskets = [
  {
    id: "all-weather",
    icon: "🌦️",
    name: "All Weather",
    tagline: "Resilience through every market phase",
    desc: "A balanced multi-asset basket designed to perform steadily across bull runs, corrections, and sideways markets.",
    theme: "blue",
    accent: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    schemes: "8–10",
    risk: "Moderate",
    horizon: "3+ Years",
  },
  {
    id: "smart-debt",
    icon: "🛡️",
    name: "Smart Debt",
    tagline: "Capital protection with smart yield",
    desc: "A conservative debt-oriented basket that navigates interest rate cycles to deliver superior fixed-income returns.",
    theme: "green",
    accent: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    schemes: "5–7",
    risk: "Low",
    horizon: "1–3 Years",
  },
  {
    id: "growth",
    icon: "🚀",
    name: "Growth",
    tagline: "Aggressive alpha for long-term wealth",
    desc: "A high-conviction equity basket for investors with a long horizon and appetite for higher volatility in exchange for superior returns.",
    theme: "amber",
    accent: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    schemes: "10–14",
    risk: "High",
    horizon: "5+ Years",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Pune",
    text: "I was always confused about which mutual fund to pick. Qurve's All Weather basket gave me a clear, data-backed strategy. 14 months in and I couldn't be happier with how it's navigated the volatility.",
    rating: 5,
  },
  {
    name: "Rahul Desai",
    role: "Entrepreneur, Mumbai",
    text: "The transparency is what sold me. I can see exactly why each fund is in the basket and what signals drove the last rebalance. No other platform gives you that level of insight.",
    rating: 5,
  },
  {
    name: "Ananya Krishnan",
    role: "Doctor, Bengaluru",
    text: "As someone who doesn't have time to track markets, Qurve's systematic approach is exactly what I needed. The Smart Debt basket has been outperforming my old FDs consistently.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What exactly is a Qurve Basket?",
    a: "A Qurve Basket is a curated portfolio of SEBI-regulated mutual fund schemes, weighted by our quantitative model. Each basket has a defined objective (All Weather, Smart Debt, or Growth) and is rebalanced systematically based on market signals — not emotions.",
  },
  {
    q: "Is there a minimum investment amount?",
    a: "No. We believe great investing should be accessible to everyone. You can start with as little as ₹500 per scheme. There is no platform-level minimum imposed by Qurve.",
  },
  {
    q: "How does rebalancing work?",
    a: "Our model continuously monitors macro indicators, momentum signals, valuation scores, and sector data. When the model detects a meaningful shift, we update the basket weights and notify you. You decide whether to act on the rebalance.",
  },
  {
    q: "Is Qurve SEBI/AMFI registered?",
    a: "Yes. Qurve Wealth operates under AMFI Registered ARN-356292. All mutual fund transactions are processed through licensed MFD infrastructure, fully regulated and compliant.",
  },
  {
    q: "Are my investments safe?",
    a: "Your investments are held directly in your name in SEBI-regulated mutual fund schemes — not with Qurve. Qurve only provides advisory and basket management services. This structure ensures your capital is always under your control.",
  },
  {
    q: "Can I withdraw my money anytime?",
    a: "Yes. Open-ended mutual funds can be redeemed anytime. Proceeds typically reach your bank account within 2–3 business days (T+2 or T+3 depending on the scheme category).",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="gradient-navy relative overflow-hidden pt-24 pb-20 px-6 min-h-screen flex items-center">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/8 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-qurve-emerald/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-qurve-emerald animate-pulse2 inline-block" />
              <span className="text-sm text-slate-300 font-medium">AMFI Registered · ARN-356292</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-serif">
              The{" "}
              <span className="gradient-text">Math</span>{" "}
              Behind Your<br />Mutual Funds
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-lg">
              Qurve builds quantitative mutual fund baskets driven by real market signals — momentum, valuation, sector strength, and cycle detection. No guesswork. Just systematic wealth creation.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                href="/baskets"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-gold hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Baskets →
              </Link>
              <Link
                href="/qurve-way"
                className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                The Qurve Way
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "11+", label: "AMC Partners" },
                { value: "3", label: "Smart Baskets" },
                { value: "₹0", label: "Min. Investment" },
                { value: "100%", label: "Transparent" },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gold font-serif">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero Visual */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-2 text-sm font-semibold text-white animate-float-y z-20">
              📈 Systematic Rebalancing
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 text-sm font-semibold text-white animate-float-delay z-20">
              🔄 Cycle-Aware Strategy
            </div>

            {/* Card */}
            <div className="glass rounded-2xl p-6 w-full max-w-sm shadow-gold">
              <div className="text-xs text-slate-400 font-medium mb-4 uppercase tracking-wider">Qurve Smart Baskets</div>
              <div className="space-y-4">
                {[
                  { icon: "🌦️", name: "All Weather", risk: "Moderate", return: "+12.4%", color: "text-blue-400" },
                  { icon: "🛡️", name: "Smart Debt", risk: "Low", return: "+8.2%", color: "text-qurve-emerald" },
                  { icon: "🚀", name: "Growth", risk: "High", return: "+18.7%", color: "text-gold" },
                ].map(b => (
                  <div key={b.name} className="flex items-center justify-between bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{b.icon}</span>
                      <div>
                        <div className="text-white font-semibold text-sm">{b.name}</div>
                        <div className="text-xs text-slate-400">{b.risk} Risk</div>
                      </div>
                    </div>
                    <div className={`font-bold text-sm ${b.color}`}>{b.return}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-500">
                <span>1Y Indicative Returns</span>
                <span className="text-gold">Past performance ≠ guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners Scrolling Track ──────────────────────────── */}
      <section className="bg-white py-10 border-y border-border overflow-hidden">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Trusted AMC Partners</span>
        </div>
        <div className="relative mask-fade overflow-hidden">
          <div className="flex gap-10 items-center animate-scroll-left w-max">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-border shadow-sm h-16 w-36"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={100}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Qurve ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Why Qurve</span>
              <h2 className="text-4xl font-bold text-navy mt-3 mb-4 font-serif">
                Investing Deserves Better than Guesswork
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                We built Qurve because we believed the tools used by institutional investors deserved to be democratised.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFeatures.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl p-8 border border-border hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-gold relative overflow-hidden cursor-default">
                  {/* Top gold border on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="text-4xl mb-5">{f.icon}</div>
                  <h3 className="text-lg font-bold text-navy mb-3">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────── */}
      <section className="gradient-navy py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">The Process</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-4 font-serif">
                How It Works
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                From goal-setting to systematic rebalancing — here's how Qurve manages your wealth.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 0.08}>
                <div className="glass rounded-2xl p-7 h-full">
                  <div className="text-gold font-bold text-xs mb-4 font-mono">{step.step}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Baskets Preview ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Our Strategies</span>
              <h2 className="text-4xl font-bold text-navy mt-3 mb-4 font-serif">
                Three Baskets. One Framework.
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Every basket is quantitatively constructed, systematically maintained, and fully transparent.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-3 gap-8">
            {baskets.map((basket, i) => (
              <AnimateOnScroll key={basket.id} delay={i * 0.1}>
                <div className={`rounded-2xl border-2 ${basket.accent} p-8 flex flex-col h-full`}>
                  <div className="text-4xl mb-4">{basket.icon}</div>
                  <h3 className="text-2xl font-bold text-navy mb-1 font-serif">{basket.name}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">{basket.tagline}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{basket.desc}</p>

                  <div className="space-y-3 mb-8 flex-1">
                    {[
                      { label: "No. of Schemes", value: basket.schemes },
                      { label: "Risk Level", value: basket.risk },
                      { label: "Ideal Horizon", value: basket.horizon },
                      { label: "Min. Investment", value: "Zero" },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between text-sm">
                        <span className="text-slate-500">{row.label}</span>
                        <span className={`font-semibold ${row.value === "Zero" ? "text-qurve-emerald" : "text-navy"}`}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/baskets#${basket.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/baskets"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors border-b-2 border-navy/20 hover:border-gold pb-0.5"
            >
              Compare All Baskets →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="py-24 px-6 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">Investor Stories</span>
              <h2 className="text-4xl font-bold text-navy mt-3 mb-4 font-serif">
                What Our Investors Say
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-border shadow-sm h-full flex flex-col">
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 italic">"{t.text}"</p>
                  <div>
                    <div className="font-bold text-navy">{t.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">FAQ</span>
              <h2 className="text-4xl font-bold text-navy mt-3 mb-4 font-serif">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500">
                Everything you need to know before you start investing with Qurve.
              </p>
            </div>
          </AnimateOnScroll>
          <FaqAccordion faqs={faqs} />
          <div className="text-center mt-10">
            <Link href="/invest-now" className="text-navy font-semibold hover:text-gold transition-colors underline underline-offset-4">
              Have more questions? Talk to us →
            </Link>
          </div>
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
              Ready to Let the Data<br />
              <span className="gradient-text">Work for You?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
              Join investors who have moved beyond tips and guesswork. Start with any amount. No lock-ins. Full transparency.
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
                View Baskets
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
