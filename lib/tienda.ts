import { site } from "@/content/site";
import { categorias, type Producto } from "@/content/tienda";
import { absoluteUrl } from "./utils";

export function formatPrice(value: number) {
  const amount = Number.isInteger(value) ? String(value) : value.toFixed(2).replace(".", ",");
  return `${amount} €`;
}

export function productHref(producto: Producto) {
  if (producto.precio === null) return producto.calculadora ?? producto.enlace ?? "/contacto";
  return `/tienda/${producto.slug}`;
}

export type Directo = NonNullable<Producto["directo"]>[number];

export function isDigital(producto: Producto) {
  return producto.tipo === "meditacion" || producto.tipo === "lectura";
}

export function buyMessage(producto: Producto, detalle?: string, directo?: Directo) {
  if (directo) {
    const lead = `Hola Tati, quiero ${producto.nombre} en directo, ${directo.duracion} (${formatPrice(directo.precio)}).${detalle ? ` ${detalle}` : ""}`;
    return `${lead} He leído y acepto las condiciones de compra. ¿Qué disponibilidad tienes?`;
  }
  const price = producto.precio === null ? "" : ` (${formatPrice(producto.precio)})`;
  const lead = `Hola Tati, quiero comprar ${producto.nombre}${price}.${detalle ? ` ${detalle}` : ""}`;
  if (isDigital(producto)) {
    return `${lead} He leído y acepto las condiciones de compra y solicito el inicio inmediato del suministro del contenido digital. ¿Me indicas cómo realizar el pago?`;
  }
  if (producto.tipo === "espacio") return `${lead} He leído y acepto las condiciones de compra. Te paso la dirección del espacio. ¿Me indicas cómo realizar el pago?`;
  return `${lead} He leído y acepto las condiciones de compra. ¿Qué disponibilidad tienes?`;
}

export function notifyMessage(producto: Producto) {
  return `Hola Tati, avísame cuando esté disponible «${producto.nombre}».`;
}

export function infoMessage(producto: Producto) {
  return `Hola Tati, me gustaría información sobre ${producto.nombre}.`;
}

export function productJsonLd(producto: Producto) {
  if (producto.precio === null) return null;
  const url = absoluteUrl(`/tienda/${producto.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: producto.nombre,
    description: producto.frase,
    url,
    image: absoluteUrl(`/tienda/${producto.slug}/opengraph-image`),
    brand: { "@type": "Brand", name: site.name },
    category: categorias.find((categoria) => categoria.id === producto.categoria)?.nav,
    offers: {
      "@type": "Offer",
      url,
      price: producto.precio.toFixed(2),
      priceCurrency: "EUR",
      availability:
        producto.estado === "disponible" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: { "@id": `${site.url}/#negocio` },
    },
  };
}
