import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invest Now — Start SIP Investment with Qurve Wealth | Mutual Fund Advisor India",
  description: "Invest now with Qurve Wealth — AMFI Registered Mutual Fund Advisor (ARN-356292). Start your SIP investment in India with zero minimum. Quant-driven mutual fund baskets for every goal.",
  keywords: ["invest in mutual fund India", "start SIP investment India", "mutual fund advisor invest now", "zero minimum SIP India", "Qurve Wealth invest"],
  alternates: { canonical: "https://qurvewealth.in/invest-now" },
  openGraph: {
    title: "Invest Now — Start SIP Investment | Qurve Wealth",
    description: "Start your SIP investment with Qurve Wealth (AMFI ARN-356292). Zero minimum, quant-driven mutual fund baskets across India.",
    url: "https://qurvewealth.in/invest-now",
  },
};

export default function InvestNowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
