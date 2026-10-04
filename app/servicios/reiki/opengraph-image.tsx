import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Reiki en Valencia y online Primero, bajar revoluciones. Sesiones y cursos de Reiki.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Reiki",
    title: "Reiki en Valencia y online",
    subtitle: "Primero, bajar revoluciones. Sesiones y cursos de Reiki.",
  });
}
