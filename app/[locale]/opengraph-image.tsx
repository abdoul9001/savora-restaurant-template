import { ImageResponse } from "next/og";

export const alt = "INTIMISSIME · Restaurant & Lounge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#FFFFFF", color: "#111827" }}>
        <div style={{ fontSize: 28, letterSpacing: 10, color: "#C59B27", display: "flex" }}>RESTAURANT & LOUNGE</div>
        <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: 8, display: "flex" }}>INTIMISSIME</div>
        <div style={{ fontSize: 36, color: "#4B5563", display: "flex" }}>Lomé · Togo</div>
        <div style={{ width: 160, height: 4, background: "#C59B27", marginTop: 32, display: "flex" }} />
      </div>
    ),
    size,
  );
}