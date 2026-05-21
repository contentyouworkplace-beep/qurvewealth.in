import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Qurve Wealth — Mutual Fund Advisor India",
    short_name: "Qurve Wealth",
    description:
      "AMFI Registered Mutual Fund Advisor (ARN-356292). Quant-driven SIP strategies & data-backed mutual fund baskets across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#1C5E2E",
    theme_color: "#1C5E2E",
    orientation: "portrait",
    scope: "/",
    lang: "en-IN",
    categories: ["finance", "business"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "SIP Calculator",
        short_name: "SIP Calc",
        description: "Calculate SIP returns instantly",
        url: "/sip-calculator",
        icons: [{ src: "/icon.png", sizes: "512x512" }],
      },
      {
        name: "Start Investing",
        short_name: "Invest Now",
        description: "Begin your mutual fund journey",
        url: "/invest-now",
        icons: [{ src: "/icon.png", sizes: "512x512" }],
      },
    ],
  };
}
