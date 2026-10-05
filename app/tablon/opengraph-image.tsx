import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Grupos, cursos y novedades. Grupos de meditación, cursos de Reiki y meditaciones grabadas.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Tablón",
    title: "Grupos, cursos y novedades.",
    subtitle: "Grupos de meditación, cursos de Reiki y meditaciones grabadas.",
  });
}
