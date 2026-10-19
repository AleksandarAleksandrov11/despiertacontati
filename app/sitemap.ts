import type { MetadataRoute } from "next";
import { productos } from "@/content/tienda";
import { hayTestimonios } from "@/content/testimonios";
import { absoluteUrl } from "@/lib/utils";

type Route = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

const routes: Route[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/quien-soy", priority: 0.8, changeFrequency: "yearly" },
  { path: "/servicios", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/reiki", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/limpieza-energetica", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/meditacion", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/tarot-terapeutico", priority: 0.9, changeFrequency: "monthly" },
  { path: "/servicios/autoconocimiento", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tienda", priority: 0.9, changeFrequency: "weekly" },
  { path: "/calculadora", priority: 0.9, changeFrequency: "monthly" },
  { path: "/calculadora/matriz-del-destino", priority: 0.9, changeFrequency: "monthly" },
  { path: "/calculadora/compatibilidad-de-pareja", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tu-primera-pausa", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tablon", priority: 0.7, changeFrequency: "weekly" },
  ...(hayTestimonios ? [{ path: "/testimonios", priority: 0.6, changeFrequency: "monthly" as const }] : []),
  { path: "/contacto", priority: 0.8, changeFrequency: "yearly" },
  { path: "/condiciones-de-compra", priority: 0.3, changeFrequency: "yearly" },
  { path: "/aviso-legal", priority: 0.2, changeFrequency: "yearly" },
  { path: "/politica-de-privacidad", priority: 0.2, changeFrequency: "yearly" },
  { path: "/politica-de-cookies", priority: 0.2, changeFrequency: "yearly" },
];

const productRoutes: Route[] = productos
  .filter((producto) => producto.precio !== null)
  .map((producto) => ({ path: `/tienda/${producto.slug}`, priority: 0.7, changeFrequency: "monthly" }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...productRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
