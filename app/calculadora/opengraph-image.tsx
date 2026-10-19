import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Calculadora gratuita de la Matriz del Destino, individual y de pareja.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Calculadora gratuita",
    title: "Tu Matriz del Destino",
    subtitle: "Calcula tu matriz o la de tu pareja y descarga tu lectura en PDF, gratis.",
  });
}
