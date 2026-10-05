import type { Metadata } from "next";
import { reikiPage } from "@/content/servicios";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { Modalidades } from "@/components/sections/servicios/modalidades";
import { Chakras } from "@/components/sections/servicios/chakras";
import { CursosReiki } from "@/components/sections/cursos-reiki";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { whatsappHref } from "@/lib/utils";

const description =
  "Sesiones de Reiki en Valencia y online para bajar revoluciones: Reiki, Reiki y chakras, Reiki con péndulo hebreo y cursos con Tati, profesora desde 2006.";

export const metadata: Metadata = pageMetadata({
  title: "Reiki en Valencia y online, sesiones y cursos | Despierta con Tati",
  description,
  path: "/servicios/reiki",
});

export default function ReikiPage() {
  const page = reikiPage;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Servicios", path: "/servicios" },
            { name: "Reiki", path: "/servicios/reiki" },
          ]),
          serviceJsonLd({
            name: "Reiki en Valencia y online",
            description,
            path: "/servicios/reiki",
            serviceType: "Reiki",
            offers: [...page.modalidades.map((m) => m.title), "Cursos de Reiki"],
          }),
        ]}
      />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image={page.image} tone="rosa" blobs="b">
        <Button href="/contacto?servicio=reiki" magnetic>
          {site.cta.primary.label}
        </Button>
        <Button href={whatsappHref(page.ctaWhatsapp)} variant="link">
          {site.cta.whatsapp}
        </Button>
      </PageHeader>

      <Section tone="crema" labelledBy="que-es">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <SiteImage
              name={page.queEs.image}
              shape="arch"
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 384px, 90vw"
              className="aspect-[4/5]"
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <h2 id="que-es" className="text-h2">
              {page.queEs.title}
            </h2>
            <p className="mt-5 max-w-xl text-lead text-ink-soft">{page.queEs.text}</p>
            <h3 className="mt-12 text-h3">{page.notaras.title}</h3>
            <ol className="mt-6 space-y-4">
              {page.notaras.items.map((item, index) => (
                <li key={item} className="flex gap-5 border-b border-ciruela/10 pb-4">
                  <span className="font-serif text-xl italic text-rosa-deep">0{index + 1}</span>
                  <span className="text-lead">{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-ink-soft">{page.notaras.online}</p>
          </Reveal>
        </div>
      </Section>

      <Modalidades eyebrow={page.modalidadesHeading.eyebrow} title={page.modalidadesHeading.title} items={page.modalidades} />
      <Chakras />
      <CursosReiki {...page.cursos} />
      <FaqSection faqs={faqs.reiki} />
      <CtaBlock whatsappMessage={page.ctaWhatsapp} />
    </>
  );
}
