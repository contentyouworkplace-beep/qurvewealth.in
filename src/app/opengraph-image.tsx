import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Qurve Wealth — Mutual Fund Advisor India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #0D3318 0%, #1C5E2E 45%, #0D3318 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Gold circle glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Bottom-left glow */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(45,122,66,0.4) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* AMFI badge top-right */}
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.30)",
            borderRadius: 40,
            padding: "10px 20px",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C9A84C", display: "flex" }} />
          <span style={{ color: "#C9A84C", fontSize: 18, fontFamily: "Arial, sans-serif", fontWeight: 600, letterSpacing: 0.5, display: "flex" }}>
            AMFI ARN-356292
          </span>
        </div>

        {/* Logo mark — Q icon */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "linear-gradient(145deg, #1C5E2E, #2D7A42)",
            border: "2px solid rgba(201,168,76,0.40)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <span style={{ color: "#FFFFFF", fontSize: 44, fontWeight: 900, lineHeight: 1, fontFamily: "Georgia, serif", display: "flex" }}>Q</span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 760,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ display: "flex" }}>Mutual Fund Advisor</span>
          <span style={{ color: "#C9A84C", display: "flex" }}>Across India</span>
        </div>

        {/* Subline */}
        <p
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.70)",
            marginBottom: 44,
            maxWidth: 680,
            lineHeight: 1.5,
            fontFamily: "Arial, sans-serif",
            display: "flex",
          }}
        >
          Quant-driven SIP strategies & data-backed mutual fund baskets. Zero minimum. Fully digital.
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {[
            { v: "200+", l: "Cities" },
            { v: "996",  l: "SEO Pages" },
            { v: "₹0",   l: "Min. Investment" },
            { v: "100%", l: "Transparent" },
          ].map(s => (
            <div key={s.l} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ color: "#C9A84C", fontSize: 32, fontWeight: 900, fontFamily: "Georgia, serif", display: "flex" }}>{s.v}</span>
              <span style={{ color: "rgba(255,255,255,0.50)", fontSize: 16, fontFamily: "Arial, sans-serif", marginTop: 4, display: "flex" }}>{s.l}</span>
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            right: 80,
            color: "rgba(255,255,255,0.35)",
            fontSize: 20,
            fontFamily: "Arial, sans-serif",
            display: "flex",
          }}
        >
          qurvewealth.in
        </div>
      </div>
    ),
    { ...size }
  );
}
