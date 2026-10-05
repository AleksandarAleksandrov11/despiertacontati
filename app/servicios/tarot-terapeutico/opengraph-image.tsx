import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Tarot terapéutico en Valencia y online Un espejo para ver claro y decidir mejor.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Tarot terapéutico",
    title: "Tarot terapéutico en Valencia y online",
    subtitle: "Un espejo para ver claro y decidir mejor.",
  });
}
