import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Soy Tati. Recuerda quién eres, recupera tu poder de elegir y crea tu nueva vida.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Quién soy",
    title: "Soy Tati.",
    subtitle: "Recuerda quién eres, recupera tu poder de elegir y crea tu nueva vida.",
  });
}
