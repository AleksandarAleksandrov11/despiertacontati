import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fontsDir = join(process.cwd(), "assets/fonts");
const fonts = Promise.all([
  readFile(join(fontsDir, "cormorant-garamond-500.ttf")),
  readFile(join(fontsDir, "cormorant-garamond-500-italic.ttf")),
  readFile(join(fontsDir, "manrope-500.ttf")),
]);

const chakras = ["#d9776f", "#e9a66b", "#e8c96a", "#8fb996", "#7fb3d5", "#7c86c2", "#a88bc7"];

export async function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  const [serif, serifItalic, sans] = await fonts;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#fbf7f2",
          backgroundImage:
            "radial-gradient(circle at 88% 12%, #f6e9e6 0%, rgba(246,233,230,0) 42%), radial-gradient(circle at 8% 92%, #f1ecf6 0%, rgba(241,236,246,0) 40%), radial-gradient(circle at 70% 95%, #eef3ec 0%, rgba(238,243,236,0) 35%)",
          color: "#3f2e3a",
          fontFamily: "Manrope",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#6e5a66" }}>
            {eyebrow}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {chakras.map((color) => (
              <div key={color} style={{ width: 12, height: 12, borderRadius: 999, backgroundColor: color }} />
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "CormorantItalic", fontSize: title.length > 34 ? 84 : 104, lineHeight: 1.02, maxWidth: 1000 }}>
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#6e5a66", maxWidth: 900, lineHeight: 1.4 }}>
              {subtitle}
            </div>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontFamily: "CormorantItalic", fontSize: 40, color: "#9c5f6c" }}>despierta</span>
            <span style={{ fontFamily: "Cormorant", fontSize: 26, color: "#6e5a66" }}>con</span>
            <span style={{ fontFamily: "CormorantItalic", fontSize: 40, color: "#8e5f80" }}>Tati</span>
          </div>
          <div style={{ display: "flex", color: "#6e5a66" }}>
            {site.location.label} · {site.url.replace("https://www.", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Cormorant", data: serif, style: "normal", weight: 500 },
        { name: "CormorantItalic", data: serifItalic, style: "normal", weight: 500 },
        { name: "Manrope", data: sans, style: "normal", weight: 500 },
      ],
    },
  );
}
