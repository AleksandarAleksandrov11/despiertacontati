import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Limpieza energética de casas y espacios. Renueva y armoniza la energía de tu hogar o tu espacio de trabajo en Valencia.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Armonía en tu hogar",
    title: "Limpieza energética de casas y espacios",
    subtitle: "Renueva y armoniza la energía de tu hogar o tu espacio de trabajo en Valencia.",
  });
}
