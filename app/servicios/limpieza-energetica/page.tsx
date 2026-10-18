import type { Metadata } from "next";
import { limpiezaPage } from "@/content/servicios";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { TiltCard } from "@/components/ui/tilt-card";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { whatsappHref } from "@/lib/utils";

const description =
  "Limpieza energética de casas y espacios de trabajo en Valencia para renovar y armonizar la energía de tu hogar. Mudanzas, etapas nuevas y ambientes cargados.";

const accents = [
  "var(--color-chakra-corazon)",
  "var(--color-chakra-plexo)",
  "var(--color-chakra-garganta)",
  "var(--color-chakra-corona)",
];

export const metadata: Metadata = pageMetadata({
  title: "Limpieza energética de casas y espacios en Valencia | Despierta con Tati",
  description,
  path: "/servicios/limpieza-energetica",
});

export default function LimpiezaPage() {
  const page = limpiezaPage;
  const info = whatsappHref(page.ctaWhatsapp);
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Servicios", path: "/servicios" },
            { name: "Limpieza energética", path: "/servicios/limpieza-energetica" },
          ]),
          serviceJsonLd({
            name: "Limpieza energética de casas y espacios en Valencia",
            description,
            path: "/servicios/limpieza-energetica",
            serviceType: "Limpieza energética de espacios",
            offers: ["Limpieza energética de casas", "Limpieza energética de espacios de trabajo"],
            online: false,
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
          <Reveal className="mx-auto w-full max-w-sm lg:order-2 lg:col-span-5 lg:max-w-none">
            <SiteImage
              name={page.queEs.image}
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 384px, 90vw"
              className="aspect-[4/5]"
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <h2 id="que-es" className="text-h2">
              {page.queEs.title}
            </h2>
            <p className="mt-6 max-w-xl font-serif text-[clamp(1.5rem,1.2rem+1.1vw,2.2rem)] italic leading-snug text-ciruela">
              {page.queEs.text}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="rosa" labelledBy="para-quien">
        <Reveal>
          <SectionHeading eyebrow={page.paraQuien.eyebrow} title={page.paraQuien.title} id="para-quien" />
        </Reveal>
        <RevealGroup as="ul" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.paraQuien.items.map((item, index) => (
            <RevealItem as="li" key={item.title}>
              <TiltCard className="h-full" innerClassName="flex h-full flex-col bg-crema/85 p-7">
                <span aria-hidden className="size-2.5 rounded-full" style={{ backgroundColor: accents[index] }} />
                <h3 className="mt-8 text-h3">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="crema" labelledBy="pasos">
        <Reveal>
          <SectionHeading eyebrow={page.pasos.eyebrow} title={page.pasos.title} id="pasos" />
        </Reveal>
        <RevealGroup as="ol" className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          <span aria-hidden className="absolute left-[1.05rem] top-4 h-[calc(100%-2rem)] w-px bg-dorado/60 md:left-4 md:right-4 md:top-[1.05rem] md:h-px md:w-auto" />
          {page.pasos.items.map((step, index) => (
            <RevealItem as="li" key={step.title} className="relative pl-14 md:pl-0 md:pt-16">
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
        <Reveal className="mt-14">
          <Button href={info} variant="secondary" icon={<WhatsappIcon size={18} />}>
            {site.cta.info}
          </Button>
        </Reveal>
      </Section>

      <FaqSection faqs={faqs.limpieza} tone="lavanda" />
      <CtaBlock title={page.cta.title} text={page.cta.text} tone="salvia" whatsappMessage={page.ctaWhatsapp} direct />
    </>
  );
}
