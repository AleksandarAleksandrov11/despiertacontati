import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Tu primera pausa. Una guía sencilla para empezar a meditar y tu primera meditación guiada, gratis.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Guía gratuita",
    title: "Tu primera pausa",
    subtitle: "Una guía sencilla para empezar a meditar y tu primera meditación guiada, gratis.",
  });
}
