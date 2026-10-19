import { categorias, tiendaPage, type Producto } from "@/content/tienda";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { SiteImage } from "@/components/ui/site-image";
import { TrackedAnchor } from "@/components/ui/tracked";
import { infoMessage, notifyMessage, productHref } from "@/lib/tienda";
import { whatsappHref } from "@/lib/utils";
import { PriceTag } from "./price-tag";

const linkClass = "group inline-flex min-h-11 items-center gap-2 font-medium text-ciruela";

export function ProductCard({ producto, headingLevel = "h3" }: { producto: Producto; headingLevel?: "h2" | "h3" }) {
  const copy = tiendaPage.card;
  const Heading = headingLevel;
  const categoria = categorias.find((item) => item.id === producto.categoria);
  const soon = producto.estado === "proximamente";
  const consulta = producto.precio === null;

  return (
    <TiltCard as="article" className="h-full" innerClassName="flex h-full flex-col overflow-hidden">
      <SiteImage name={producto.imagen} shape="none" sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw" className="aspect-[16/10] w-full" />
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="eyebrow flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <span>{categoria?.nav}</span>
          {soon && <span className="text-malva-deep">{copy.soon}</span>}
        </p>
        <Heading className="mt-5 text-h3">{producto.nombre}</Heading>
        <p className="mt-3 flex-1 text-ink-soft">{producto.frase}</p>
        <div className="mt-7 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-t border-ciruela/10 pt-6">
          <PriceTag producto={producto} />
          <p className="text-sm text-ink-soft">{producto.formato}</p>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-1">
          <Button href={productHref(producto)} variant="link">
            {consulta && producto.calculadora ? copy.calculate : copy.details}
          </Button>
          {soon && (
            <TrackedAnchor
              href={whatsappHref(notifyMessage(producto))}
              target="_blank"
              rel="noopener noreferrer"
              event="click_avisame"
              data={{ producto: producto.slug }}
              className={linkClass}
            >
              <span className="link-underline-static">{copy.notify}</span>
            </TrackedAnchor>
          )}
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
