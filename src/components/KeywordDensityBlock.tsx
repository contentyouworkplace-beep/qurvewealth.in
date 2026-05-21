interface Props {
  keyword: string;
  city?: string;
}

export default function KeywordDensityBlock({ keyword, city }: Props) {
  const kw = keyword;
  const loc = city ? ` in ${city}` : " in India";
  const Loc = city ? ` in ${city}` : "";

  // 15 natural uses of the keyword across varied sentence structures
  const sentences = [
    `Understanding <strong>${kw}</strong> is the first step toward building long-term wealth through mutual funds.`,
    `Investors searching for <strong>${kw}</strong> guidance can rely on Qurve Wealth's AMFI-registered advisory.`,
    `The right <strong>${kw}</strong> strategy depends on your risk appetite, time horizon, and financial goals.`,
    `Qurve Wealth simplifies <strong>${kw}</strong> with data-driven recommendations tailored to your portfolio.`,
    `Whether you are a first-time investor or experienced, <strong>${kw}</strong>${loc} offers compelling wealth creation potential.`,
    `Our quant-driven approach to <strong>${kw}</strong> ensures you avoid emotional decision-making and stay invested.`,
    `Getting started with <strong>${kw}</strong> requires only a KYC-compliant account and as little as ₹500/month.`,
    `The tax efficiency of <strong>${kw}</strong> makes it one of the most sought-after investment options in India.`,
    `Qurve Wealth's research team continuously monitors <strong>${kw}</strong> performance across market cycles.`,
    `Long-term SIP investments in <strong>${kw}</strong> harness the power of compounding to multiply your wealth.`,
    `Comparing <strong>${kw}</strong> with alternatives like FDs, PPF, and stocks shows its superior post-tax returns.`,
    `SEBI-regulated infrastructure ensures that your <strong>${kw}</strong> investment is fully transparent and secure.`,
    `The best time to start your <strong>${kw}</strong> journey${Loc} is today — every month of delay costs you compounding.`,
    `Qurve Wealth provides free, no-commitment consultation on <strong>${kw}</strong> to investors across all income levels.`,
    `Speak to a Qurve Wealth advisor today to build a personalised <strong>${kw}</strong> portfolio aligned with your goals.`,
  ];

  return (
    <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
      <h2 className="text-lg font-bold text-navy mb-5 font-serif">
        Everything You Need to Know About {keyword.replace(/\b\w/g, c => c.toUpperCase())}
      </h2>
      <ul className="space-y-3">
        {sentences.map((s, i) => (
          <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
            <span className="text-gold font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
            <span dangerouslySetInnerHTML={{ __html: s }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
