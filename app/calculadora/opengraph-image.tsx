import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Calculadoras gratuitas: Matriz del Destino, compatibilidad de pareja y Código Personal.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Calculadoras gratuitas",
    title: "Lo que dice tu fecha de nacimiento",
    subtitle: "Tu Matriz del Destino, la de tu pareja o tu Código Personal, con tu lectura en PDF.",
  });
}
