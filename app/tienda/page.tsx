import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { categorias, productosDe, tiendaFaqs, tiendaPage } from "@/content/tienda";
import { legalNav } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { GuiaBlock } from "@/components/sections/guia-block";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { ProductCard } from "@/components/sections/tienda/product-card";
import { TiendaNav } from "@/components/sections/tienda/tienda-nav";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { productHref } from "@/lib/tienda";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Tienda: meditaciones y lecturas de tarot online | Despierta con Tati",
  description:
    "Meditaciones guiadas para descargar, Crono Tarot, lecturas de tarot online, Matriz del Destino, Código Personal y sesiones de tarot en directo con Tati.",
  path: "/tienda",
});

const tones: SectionTone[] = ["crema", "lavanda", "crema", "rosa", "crema", "lavanda"];
const legalLinks = legalNav.filter((item) => item.href !== "/politica-de-cookies");

export default function TiendaPage() {
  const page = tiendaPage;
  const catalog = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.title,
    itemListElement: categorias
      .flatMap((categoria) => productosDe(categoria.id))
      .filter((producto) => producto.precio !== null)
      .map((producto, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(productHref(producto)),
        name: producto.nombre,
      })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: page.eyebrow, path: "/tienda" }]), catalog]} />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} tone="rosa" blobs="b">
        <Button href="#como-funciona" variant="link">
          {page.compra.eyebrow}
        </Button>
      </PageHeader>
      <TiendaNav items={categorias.map((categoria) => ({ id: categoria.id, label: categoria.nav }))} label={page.navLabel} />
      {categorias.map((categoria, index) => (
        <Fragment key={categoria.id}>
          <Section tone={tones[index]} id={categoria.id} labelledBy={`${categoria.id}-title`} className="scroll-mt-12">
            <Reveal>
              <SectionHeading eyebrow={categoria.eyebrow} title={categoria.title} text={categoria.text} id={`${categoria.id}-title`} />
            </Reveal>
            <RevealGroup as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {productosDe(categoria.id).map((producto) => (
                <RevealItem as="li" key={producto.slug}>
                  <ProductCard producto={producto} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Section>
          {categoria.id === "meditaciones" && <GuiaBlock tone="salvia" id="guia-tienda" />}
        </Fragment>
      ))}

      <Section tone="salvia" id="como-funciona" labelledBy="como-funciona-title" className="scroll-mt-12">
        <Reveal>
          <SectionHeading eyebrow={page.compra.eyebrow} title={page.compra.title} id="como-funciona-title" />
        </Reveal>
        <RevealGroup as="ol" className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="absolute left-[1.05rem] top-4 h-[calc(100%-2rem)] w-px bg-dorado/60 sm:hidden lg:left-4 lg:right-4 lg:top-[1.05rem] lg:block lg:h-px lg:w-auto" />
          {page.compra.steps.map((step, index) => (
            <RevealItem as="li" key={step.title} className="relative pl-14 sm:pl-0 sm:pt-16">
              <span
                aria-hidden
                className="absolute left-0 top-0 flex size-[2.1rem] items-center justify-center rounded-full border border-ciruela/15 bg-crema font-serif italic text-rosa-deep"
              >
                {index + 1}
              </span>
              <h3 className="text-h3">{step.title}</h3>
              <p className="mt-3 max-w-xs text-ink-soft">{step.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FaqSection faqs={tiendaFaqs} title={page.faqTitle} />

      <Section tone="crema" labelledBy="antes-de-comprar" className="!pt-0">
        <Reveal className="rounded-[1.25rem] border border-ciruela/10 bg-white/40 p-7 sm:p-9">
          <h2 id="antes-de-comprar" className="text-h3">
            {page.legal.title}
          </h2>
          <p className="mt-2 text-ink-soft">{page.legal.text}</p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-1">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline-static inline-flex min-h-11 items-center font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <CtaBlock title={page.cta.title} text={page.cta.text} tone="rosa" direct />
    </>
  );
}
