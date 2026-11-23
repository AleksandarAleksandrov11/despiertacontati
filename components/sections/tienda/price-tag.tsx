import { tiendaPage, type Producto } from "@/content/tienda";
import { formatPrice } from "@/lib/tienda";
import { cn } from "@/lib/utils";

export function PriceTag({ producto, size = "md", className }: { producto: Producto; size?: "md" | "lg"; className?: string }) {
  const copy = tiendaPage.card;
  if (producto.precio === null) {
    return <p className={cn("font-serif text-2xl text-ciruela", className)}>{copy.onRequest}</p>;
  }
  return (
    <div className={className}>
      <p className={cn("nums font-serif leading-none text-ciruela", size === "lg" ? "text-[3.25rem]" : "text-[2.1rem]")}>{formatPrice(producto.precio)}</p>
      {producto.oferta && <p className="mt-1.5 text-sm text-malva-deep">{producto.oferta}</p>}
      {producto.directo && size === "md" && <p className="mt-1.5 text-sm text-malva-deep">{copy.directo(formatPrice(producto.directo[0]!.precio))}</p>}
      {producto.modalidades && size === "md" && <p className="mt-1.5 text-sm text-malva-deep">{copy.modalidades}</p>}
    </div>
  );
}
