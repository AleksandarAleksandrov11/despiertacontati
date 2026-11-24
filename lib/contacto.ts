import { contactoPage } from "@/content/paginas";
import { categorias, productosDe, type CategoriaId, type Producto } from "@/content/tienda";
import type { ContactTopic } from "./schemas";
import { formatPrice } from "./tienda";

export type OpcionContacto = { value: string; label: string; detalle?: string };

const categoriasDe: Partial<Record<ContactTopic, CategoriaId[]>> = {
  meditacion: ["meditaciones"],
  tarot: ["crono-tarot", "lecturas", "sesiones"],
  autoconocimiento: ["autoconocimiento"],
  reiki: ["terapias"],
  limpieza: ["espacios"],
};

const { grupo } = contactoPage.form;
const opcionGrupo: OpcionContacto = { value: "grupo", ...grupo };

function todos() {
  return categorias.flatMap((categoria) => productosDe(categoria.id));
}

function desde(producto: Producto) {
  if (producto.precio === null) return undefined;
  const precios = [producto.precio, ...(producto.directo?.map((item) => item.precio) ?? []), ...(producto.modalidades?.map((item) => item.precio) ?? [])];
  return precios.length > 1 ? `Desde ${formatPrice(Math.min(...precios))}` : formatPrice(producto.precio);
}

export type GrupoContacto = { titulo?: string; opciones: OpcionContacto[] };

export function gruposDe(servicio?: ContactTopic): GrupoContacto[] {
  if (!servicio) return [];
  const ids = categoriasDe[servicio] ?? [];
  const grupos: GrupoContacto[] = ids.map((id) => ({
    titulo: ids.length > 1 ? categorias.find((categoria) => categoria.id === id)?.nav : undefined,
    opciones: productosDe(id).map((producto) => ({ value: producto.slug, label: producto.nombre, detalle: desde(producto) })),
  }));
  if (servicio === "meditacion") grupos[0]?.opciones.push(opcionGrupo);
  return grupos.filter((grupo) => grupo.opciones.length > 0);
}

export function opcionesDe(servicio?: ContactTopic): OpcionContacto[] {
  return gruposDe(servicio).flatMap((grupo) => grupo.opciones);
}

export function productoDe(slug?: string) {
  return slug ? todos().find((producto) => producto.slug === slug) : undefined;
}

export function servicioDe(slug: string | null): ContactTopic | undefined {
  if (slug === "grupo") return "meditacion";
  const producto = productoDe(slug ?? undefined);
  if (!producto) return undefined;
  return (Object.keys(categoriasDe) as ContactTopic[]).find((topic) => categoriasDe[topic]?.includes(producto.categoria));
}

export function formatosDe(producto?: Producto): OpcionContacto[] {
  if (!producto) return [];
  if (producto.modalidades) return producto.modalidades.map((item) => ({ value: item.nombre, label: item.nombre, detalle: formatPrice(item.precio) }));
  if (!producto.directo) return [];
  return [
    { value: producto.formato, label: producto.formato, detalle: producto.precio === null ? undefined : formatPrice(producto.precio) },
    ...producto.directo.map((item) => ({ value: `En directo, ${item.duracion}`, label: `En directo, ${item.duracion}`, detalle: formatPrice(item.precio) })),
  ];
}
