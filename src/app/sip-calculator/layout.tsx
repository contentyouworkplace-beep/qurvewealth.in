import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIP Calculator India — Calculate SIP Returns Online | Qurve Wealth",
  description: "SIP calculator India — calculate your SIP investment returns online. Find out how much your monthly SIP will grow over 5, 10, 20 years. Free SIP calculator by Qurve Wealth (AMFI ARN-356292).",
  keywords: ["SIP calculator India", "SIP return calculator", "calculate SIP investment", "monthly SIP calculator India", "SIP maturity calculator"],
  alternates: { canonical: "https://qurvewealth.in/sip-calculator" },
  openGraph: {
    title: "SIP Calculator India — Calculate SIP Returns Online | Qurve Wealth",
    description: "Calculate your SIP investment returns online. Free SIP calculator India by Qurve Wealth (AMFI ARN-356292).",
    url: "https://qurvewealth.in/sip-calculator",
  },
};

export default function SIPCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
