import type { Metadata } from "next";
import { getProducto, tiendaPage } from "@/content/tienda";
import { limpiezaPage } from "@/content/servicios";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { TiltCard } from "@/components/ui/tilt-card";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { formatPrice, productHref } from "@/lib/tienda";
import { whatsappHref } from "@/lib/utils";

const description =
  "Limpieza energética a distancia de casas y espacios de trabajo por 27 €: solo necesito la dirección y te envío el informe por WhatsApp. Mudanzas, etapas nuevas y ambientes cargados.";

const accents = [
  "var(--color-chakra-corazon)",
  "var(--color-chakra-plexo)",
  "var(--color-chakra-garganta)",
  "var(--color-chakra-corona)",
];

export const metadata: Metadata = pageMetadata({
  title: "Limpieza energética de casas y espacios a distancia | Despierta con Tati",
  description,
  path: "/servicios/limpieza-energetica",
});

export default function LimpiezaPage() {
  const page = limpiezaPage;
  const info = whatsappHref(page.ctaWhatsapp);
  const producto = getProducto("limpieza-energetica-espacios");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Servicios", path: "/servicios" },
            { name: "Limpieza energética", path: "/servicios/limpieza-energetica" },
          ]),
          serviceJsonLd({
            name: "Limpieza energética de casas y espacios a distancia",
            description,
            path: "/servicios/limpieza-energetica",
            serviceType: "Limpieza energética de espacios",
            offers: ["Limpieza energética de casas", "Limpieza energética de espacios de trabajo"],
          }),
        ]}
      />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image={page.image} tone="salvia" blobs="c">
        <Button href={info} magnetic icon={<WhatsappIcon size={18} />}>
          {site.cta.info}
        </Button>
      </PageHeader>

      <Section tone="crema" labelledBy="que-es">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="mx-auto w-full max-w-sm lg:order-2 lg:col-span-5 lg:max-w-none">
            <SiteImage
              name={page.queEs.image}
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 384px, 90vw"
              className="aspect-[4/5]"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 id="que-es" className="text-h2">
              {page.queEs.title}
            </h2>
            <p className="mt-6 max-w-xl font-serif text-[clamp(1.5rem,1.2rem+1.1vw,2.2rem)] italic leading-snug text-ciruela">
              {page.queEs.text}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="rosa" labelledBy="para-quien">
        <div>
          <SectionHeading eyebrow={page.paraQuien.eyebrow} title={page.paraQuien.title} id="para-quien" />
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.paraQuien.items.map((item, index) => (
            <li key={item.title}>
              <TiltCard className="h-full" innerClassName="flex h-full flex-col bg-crema/85 p-7">
                <span aria-hidden className="size-2.5 rounded-full" style={{ backgroundColor: accents[index] }} />
                <h3 className="mt-8 text-h3">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </TiltCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="crema" labelledBy="pasos">
        <div>
          <SectionHeading eyebrow={page.pasos.eyebrow} title={page.pasos.title} id="pasos" />
        </div>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          <span aria-hidden className="absolute left-[1.05rem] top-4 h-[calc(100%-2rem)] w-px bg-dorado/60 md:left-4 md:right-4 md:top-[1.05rem] md:h-px md:w-auto" />
          {page.pasos.items.map((step, index) => (
            <li key={step.title} className="relative pl-14 md:pl-0 md:pt-16">
              <span
                aria-hidden
                className="absolute left-0 top-0 flex size-[2.1rem] items-center justify-center rounded-full border border-ciruela/15 bg-crema font-serif italic text-rosa-deep"
              >
                {index + 1}
              </span>
              <h3 className="text-h3">{step.title}</h3>
              <p className="mt-3 max-w-xs text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex flex-col gap-6 rounded-[1.25rem] bg-lavanda/70 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="eyebrow">{page.precio.label}</p>
            <p className="nums mt-2 font-serif text-[3rem] leading-none text-ciruela">{producto?.precio ? formatPrice(producto.precio) : tiendaPage.card.onRequest}</p>
            <p className="mt-2 text-ink-soft">{page.precio.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {producto && <Button href={productHref(producto)}>{page.precio.cta}</Button>}
            <Button href={info} variant="secondary" icon={<WhatsappIcon size={18} />}>
              {site.cta.info}
            </Button>
          </div>
        </div>
      </Section>

      <FaqSection faqs={faqs.limpieza} tone="lavanda" />
      <CtaBlock title={page.cta.title} text={page.cta.text} tone="salvia" whatsappMessage={page.ctaWhatsapp} direct />
    </>
  );
}
