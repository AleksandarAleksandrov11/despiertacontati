import { categorias, tiendaPage, type Producto } from "@/content/tienda";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { SiteImage } from "@/components/ui/site-image";
import { TrackedAnchor } from "@/components/ui/tracked";
import { infoMessage, productHref } from "@/lib/tienda";
import { cn, whatsappHref } from "@/lib/utils";
import { PriceTag } from "./price-tag";

const linkClass = "group inline-flex min-h-11 items-center gap-2 font-medium text-ciruela";

export function ProductCard({ producto, headingLevel = "h3" }: { producto: Producto; headingLevel?: "h2" | "h3" }) {
  const copy = tiendaPage.card;
  const Heading = headingLevel;
  const categoria = categorias.find((item) => item.id === producto.categoria);
  const consulta = producto.precio === null;
  const oscuro = Boolean(producto.oferta);

  return (
    <TiltCard as="article" className="h-full" innerClassName={cn("flex h-full flex-col overflow-hidden", oscuro && "bg-ciruela! text-crema")}>
      <SiteImage name={producto.imagen} shape="none" sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw" className="aspect-[16/10] w-full" />
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className={cn("eyebrow", oscuro && "text-crema/70")}>{categoria?.nav}</p>
        <Heading className={cn("mt-5 text-h3", oscuro && "text-crema")}>{producto.nombre}</Heading>
        <p className={cn("mt-3 flex-1", oscuro ? "text-crema/80" : "text-ink-soft")}>{producto.frase}</p>
        <div className={cn("mt-7 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-t pt-6", oscuro ? "border-crema/15" : "border-ciruela/10")}>
          <PriceTag producto={producto} tone={oscuro ? "dark" : "light"} />
          <p className={cn("text-sm", oscuro ? "text-crema/70" : "text-ink-soft")}>{producto.formato}</p>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-1">
          <Button href={productHref(producto)} variant="link" tone={oscuro ? "dark" : "light"}>
            {consulta && producto.calculadora ? copy.calculate : copy.details}
          </Button>
          {consulta && (
            <TrackedAnchor
              href={whatsappHref(infoMessage(producto))}
              target="_blank"
              rel="noopener noreferrer"
              event="click_info_whatsapp"
              data={{ producto: producto.slug }}
              className={linkClass}
            >
              <span className="link-underline-static">{copy.info}</span>
            </TrackedAnchor>
          )}
        </div>
      </div>
    </TiltCard>
  );
}
