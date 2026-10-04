import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/servicios", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/reiki", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/meditacion", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/tarot-terapeutico", priority: 0.9, changeFrequency: "monthly" },
  { path: "/sobre-mi", priority: 0.7, changeFrequency: "yearly" },
  { path: "/testimonios", priority: 0.6, changeFrequency: "monthly" },
  { path: "/tablon", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contacto", priority: 0.8, changeFrequency: "yearly" },
  { path: "/aviso-legal", priority: 0.2, changeFrequency: "yearly" },
  { path: "/politica-de-privacidad", priority: 0.2, changeFrequency: "yearly" },
  { path: "/politica-de-cookies", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
