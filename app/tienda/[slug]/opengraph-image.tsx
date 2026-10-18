import { categorias, getProducto, productos } from "@/content/tienda";
import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { formatPrice } from "@/lib/tienda";

export const alt = "Producto de la tienda de Despierta con Tati";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return productos.filter((producto) => producto.precio !== null).map((producto) => ({ slug: producto.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const producto = getProducto(slug);
  const categoria = categorias.find((item) => item.id === producto?.categoria);
  const price = producto?.precio ? formatPrice(producto.precio) : "";
  return renderOg({
    eyebrow: categoria?.nav ?? "Tienda",
    title: producto?.nombre ?? "Tienda",
    subtitle: producto ? `${price} · ${producto.formato}` : undefined,
  });
}
