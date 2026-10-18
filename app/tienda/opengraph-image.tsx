import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Tienda. Meditaciones, lecturas y sesiones para seguir a tu ritmo.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Despierta con Tati",
    title: "Tienda.",
    subtitle: "Meditaciones, lecturas y sesiones para seguir a tu ritmo.",
  });
}
