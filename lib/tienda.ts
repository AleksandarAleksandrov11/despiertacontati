import { site } from "@/content/site";
import { categorias, type Modalidad, type Producto } from "@/content/tienda";
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

export type Extra = NonNullable<Producto["extra"]>;

export function isDigital(producto: Producto) {
  return producto.tipo === "meditacion" || producto.tipo === "lectura";
}

export function modalidadMessage(modalidad: Modalidad, detalle?: string, extra?: Extra) {
  const precio = formatPrice(modalidad.precio + (extra?.precio ?? 0));
  const conExtra = extra ? `, con la lectura en PDF (+${formatPrice(extra.precio)})` : "";
  const lead = `Hola Tati, quiero ${modalidad.nombre} (${modalidad.detalle})${conExtra}, ${precio} en total.${detalle ? ` ${detalle}` : ""}`;
  const digital = modalidad.digital || extra ? " y solicito el inicio inmediato del suministro del contenido digital" : "";
  const cierre = modalidad.sesion ? "¿Qué disponibilidad tienes?" : "¿Me indicas cómo realizar el pago?";
  return `${lead} He leído y acepto las condiciones de compra${digital}. ${cierre}`;
}

export function buyMessage(producto: Producto, detalle?: string, directo?: Directo, extra?: Extra) {
  const conExtra = extra ? `, con la lectura en PDF (+${formatPrice(extra.precio)})` : "";
  const digitalExtra = extra ? " y solicito el inicio inmediato del suministro del contenido digital" : "";
  if (directo) {
    const total = formatPrice(directo.precio + (extra?.precio ?? 0));
    const lead = `Hola Tati, quiero ${producto.nombre} en directo, ${directo.duracion}${conExtra}, ${total} en total.${detalle ? ` ${detalle}` : ""}`;
    return `${lead} He leído y acepto las condiciones de compra${digitalExtra}. ¿Qué disponibilidad tienes?`;
  }
  const price = producto.precio === null ? "" : ` (${formatPrice(producto.precio + (extra?.precio ?? 0))}${extra ? ", con la lectura en PDF" : ""})`;
  const lead = `Hola Tati, quiero comprar ${producto.nombre}${price}.${detalle ? ` ${detalle}` : ""}`;
  if (isDigital(producto)) {
    return `${lead} He leído y acepto las condiciones de compra y solicito el inicio inmediato del suministro del contenido digital. ¿Me indicas cómo realizar el pago?`;
  }
  if (producto.tipo === "espacio") return `${lead} He leído y acepto las condiciones de compra. Te paso la dirección del espacio. ¿Me indicas cómo realizar el pago?`;
  return `${lead} He leído y acepto las condiciones de compra. ¿Qué disponibilidad tienes?`;
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
      availability: "https://schema.org/InStock",
      seller: { "@id": `${site.url}/#negocio` },
    },
  };
}
