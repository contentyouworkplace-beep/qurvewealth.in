import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          background: "linear-gradient(145deg, #1C5E2E 0%, #2D7A42 60%, #1C5E2E 100%)",
          borderRadius: 112,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Gold arc / curve decoration */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 60,
            right: 60,
            bottom: 60,
            borderRadius: "50%",
            border: "6px solid rgba(201,168,76,0.35)",
            display: "flex",
          }}
        />

        {/* Q letter */}
        <div
          style={{
            fontSize: 280,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1,
            letterSpacing: "-12px",
            marginTop: -10,
            fontFamily: "Georgia, serif",
            textShadow: "0 4px 24px rgba(0,0,0,0.25)",
            display: "flex",
          }}
        >
          Q
        </div>

        {/* Gold underline accent */}
        <div
          style={{
            position: "absolute",
            bottom: 90,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 7,
            background: "#C9A84C",
            borderRadius: 4,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
