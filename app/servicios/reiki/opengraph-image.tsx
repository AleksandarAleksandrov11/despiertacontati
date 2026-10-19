import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Reiki y terapias energéticas. Reiki con péndulo hebreo, análisis de chakras y sanación akáshica, online.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Calma y equilibrio",
    title: "Reiki y terapias energéticas",
    subtitle: "Reiki con péndulo hebreo, análisis de chakras y sanación akáshica, online.",
  });
}
