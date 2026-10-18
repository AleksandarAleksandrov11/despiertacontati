import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Reiki y terapias energéticas. Reiki, péndulo hebreo, análisis de chakras y sanación akásica en Valencia y online.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Calma y equilibrio",
    title: "Reiki y terapias energéticas",
    subtitle: "Reiki, péndulo hebreo, análisis de chakras y sanación akásica en Valencia y online.",
  });
}
