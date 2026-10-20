import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Calcula tu arcano personal y tu Código Personal: tarot numerológico con tu fecha de nacimiento.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Calculadora gratuita",
    title: "Tu Arcano y tu Código Personal",
    subtitle: "Tarot numerológico: tu carta personal y tus cinco cartas, con tu PDF.",
  });
}
