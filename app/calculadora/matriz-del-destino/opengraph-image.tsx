import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Calcula tu Matriz del Destino gratis con tu fecha de nacimiento.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Calculadora gratuita",
    title: "Calcula tu Matriz del Destino",
    subtitle: "Tu energía personal, tu talento, tu centro y tus propósitos, con tu PDF gratuito.",
  });
}
