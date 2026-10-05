import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Calma, claridad y decisión. Reiki, meditación y tarot terapéutico en Valencia y online.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Servicios",
    title: "Calma, claridad y decisión.",
    subtitle: "Reiki, meditación y tarot terapéutico en Valencia y online.",
  });
}
