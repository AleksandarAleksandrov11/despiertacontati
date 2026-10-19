import { inicio } from "@/content/paginas";
import { getProducto, inicioPreview } from "@/content/tienda";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProductCard } from "@/components/sections/tienda/product-card";

export function TiendaPreview() {
  const items = inicioPreview.map(getProducto).filter((producto) => producto !== undefined);
  return (
    <Section tone="lavanda" labelledBy="tienda-title">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <SectionHeading eyebrow={inicio.tienda.eyebrow} title={inicio.tienda.title} text={inicio.tienda.text} id="tienda-title" />
        </div>
        <div className="shrink-0">
          <Button href={site.cta.shop.href} variant="link">
            {inicio.tienda.link}
          </Button>
        </div>
      </div>
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((producto) => (
          <li key={producto.slug}>
            <ProductCard producto={producto} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
