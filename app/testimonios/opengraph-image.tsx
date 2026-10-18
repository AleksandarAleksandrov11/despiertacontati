import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Lo que cuentan. Experiencias reales con Despierta con Tati.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Testimonios",
    title: "Lo que cuentan.",
    subtitle: "Experiencias reales con Despierta con Tati.",
  });
}
