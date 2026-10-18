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
      <p className="flex flex-wrap items-baseline gap-x-3">
        <span className={cn("nums font-serif leading-none text-ciruela", size === "lg" ? "text-[3.25rem]" : "text-[2.1rem]")}>
          {formatPrice(producto.precio)}
        </span>
        {producto.precioHabitual && (
          <span className="nums text-ink-soft">
            <span className="sr-only">{copy.usual}: </span>
            <s>{formatPrice(producto.precioHabitual)}</s>
          </span>
        )}
      </p>
      {producto.lanzamiento && <p className="mt-1.5 text-sm text-malva-deep">{copy.launch}</p>}
    </div>
  );
}
