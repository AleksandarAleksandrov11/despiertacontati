import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Matriz del Destino y Código Personal. Herramientas de autoconocimiento a partir de tu fecha de nacimiento.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Autoconocimiento",
    title: "Matriz del Destino y Código Personal",
    subtitle: "Herramientas de autoconocimiento a partir de tu fecha de nacimiento.",
  });
}
