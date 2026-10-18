import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Grupos y novedades. Grupos de meditación, la guía gratuita, novedades de la tienda y lo último en Instagram.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Tablón",
    title: "Grupos y novedades.",
    subtitle: "Grupos de meditación, la guía gratuita, novedades de la tienda y lo último en Instagram.",
  });
}
