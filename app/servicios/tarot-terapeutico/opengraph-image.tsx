import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Tarot terapéutico. Crono Tarot, lecturas concretas y sesiones en directo, online.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Decisiones con claridad",
    title: "Tarot terapéutico",
    subtitle: "Crono Tarot, lecturas concretas y sesiones en directo, online.",
  });
}
