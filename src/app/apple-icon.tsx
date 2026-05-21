import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(145deg, #1C5E2E 0%, #2D7A42 60%, #1C5E2E 100%)",
          borderRadius: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Q letter */}
        <div
          style={{
            fontSize: 100,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1,
            letterSpacing: "-4px",
            marginTop: -4,
            fontFamily: "Georgia, serif",
            display: "flex",
          }}
        >
          Q
        </div>

        {/* Gold underline accent */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            width: 28,
            height: 3,
            background: "#C9A84C",
            borderRadius: 2,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
