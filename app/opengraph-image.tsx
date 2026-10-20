import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Despierta. Recuerda quién eres, empodérate y crea tu nueva vida.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Terapeuta holística",
    title: "Despierta.",
    subtitle: "Recuerda quién eres, empodérate y crea tu nueva vida.",
  });
}
