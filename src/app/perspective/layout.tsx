import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perspective — Mutual Fund Investing Insights India | Qurve Wealth",
  description: "Perspective — mutual fund investing insights and deep research from Qurve Wealth. Data-driven views on Indian markets, SIP investing, and wealth creation strategies for Indian investors.",
  keywords: ["mutual fund investing insights India", "mutual fund research India", "investing perspective India", "Qurve Wealth research"],
  alternates: { canonical: "https://qurvewealth.in/perspective" },
  openGraph: {
    title: "Perspective — Mutual Fund Investing Insights India | Qurve Wealth",
    description: "Data-driven mutual fund investing insights and market perspectives from Qurve Wealth (AMFI ARN-356292).",
    url: "https://qurvewealth.in/perspective",
  },
};

export default function PerspectiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
