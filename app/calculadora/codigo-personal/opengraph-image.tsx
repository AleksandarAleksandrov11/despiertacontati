import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Calcula tu Código Personal: tu arcano personal y tus mapas de tarot con tu fecha de nacimiento.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Calculadora gratuita",
    title: "Calcula tu Código Personal",
    subtitle: "Tu arcano personal, tus cinco cartas, tus mapas de tarot y tu ciclo vital, con tu PDF.",
  });
}
