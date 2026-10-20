import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Hablemos. Cuéntame qué necesitas. Sesiones online.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Contacto",
    title: "Hablemos.",
    subtitle: "Cuéntame qué necesitas. Sesiones online.",
  });
}
