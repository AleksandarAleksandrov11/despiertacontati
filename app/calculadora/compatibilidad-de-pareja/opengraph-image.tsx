import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Matriz del Destino de pareja: calcula vuestra compatibilidad gratis.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Compatibilidad de pareja",
    title: "Vuestra Matriz del Destino",
    subtitle: "La energía de vuestra relación a partir de vuestras dos fechas de nacimiento.",
  });
}
