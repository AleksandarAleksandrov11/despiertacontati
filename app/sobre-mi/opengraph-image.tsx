import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Soy Tati. Terapeuta holística en Valencia. Práctica y al grano.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Sobre mí",
    title: "Soy Tati.",
    subtitle: "Terapeuta holística en Valencia. Práctica y al grano.",
  });
}
