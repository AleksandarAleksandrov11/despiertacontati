import type { Metadata } from "next";
import { autoconocimientoPage } from "@/content/servicios";
import { getProducto } from "@/content/tienda";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { CalculadoraPromo } from "@/components/sections/calculadora/calculadora-promo";
import { ProductCard } from "@/components/sections/tienda/product-card";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { TiltCard } from "@/components/ui/tilt-card";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { whatsappHref } from "@/lib/utils";

const description =
  "Matriz del Destino, Tu Código Personal y Carta Personal: autoconocimiento a partir de tu fecha de nacimiento con numerología, arcanos mayores y tarot numerológico.";

export const metadata: Metadata = pageMetadata({
  title: "Matriz del Destino y Código Personal | Despierta con Tati",
  description,
  path: "/servicios/autoconocimiento",
});

export default function AutoconocimientoPage() {
  const page = autoconocimientoPage;
  const herramientas = page.herramientas.map((slug) => getProducto(slug)).filter((producto) => producto !== undefined);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Servicios", path: "/servicios" },
            { name: "Autoconocimiento", path: "/servicios/autoconocimiento" },
          ]),
          serviceJsonLd({
            name: "Autoconocimiento: Matriz del Destino, Código Personal y Carta Personal",
            description,
            path: "/servicios/autoconocimiento",
            serviceType: "Autoconocimiento",
            offers: ["Lectura de la Matriz del Destino", "Análisis de la Matriz del Destino", "Tu Código Personal", "Carta Personal"],
          }),
        ]}
      />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image={page.image} tone="lavanda" blobs="c">
        <Button href="/tienda#autoconocimiento" magnetic>
          {page.shopCta}
        </Button>
      </PageHeader>

      <Section tone="crema" labelledBy="que-son">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 id="que-son" className="text-h2">
              {page.queSon.title}
            </h2>
            <p className="mt-6 text-lead text-ink-soft">{page.queSon.text}</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {page.queSon.diferencias.map((item, index) => (
              <li key={item.title} className="rounded-[1.25rem] bg-lavanda/70 p-7">
                <div aria-hidden className="mb-6 flex gap-1.5">
                  {index === 0 ? (
                    <span className="size-10 rotate-45 rounded-md border border-ciruela/25" />
                  ) : (
                    <>
                      <span className="h-10 w-7 -rotate-6 rounded-md border border-ciruela/25 bg-crema" />
                      <span className="h-10 w-7 rotate-6 rounded-md border border-ciruela/25 bg-crema" />
                    </>
                  )}
                </div>
                <h3 className="text-h3">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="rosa" labelledBy="herramientas-autoconocimiento">
        <div>
          <SectionHeading
            eyebrow={page.herramientasHeading.eyebrow}
            title={page.herramientasHeading.title}
            id="herramientas-autoconocimiento"
          />
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {herramientas.map((producto) => (
            <li key={producto.slug}>
              <ProductCard producto={producto} />
            </li>
          ))}
          <li>
            <TiltCard as="article" className="h-full" innerClassName="flex h-full flex-col overflow-hidden">
              <SiteImage name={page.carta.image} shape="none" sizes="(min-width: 1280px) 300px, (min-width: 768px) 45vw, 90vw" className="aspect-[16/10] w-full" />
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <p className="eyebrow">{page.carta.tag}</p>
                <h3 className="mt-5 text-h3">{page.carta.title}</h3>
                <p className="mt-3 flex-1 text-ink-soft">{page.carta.text}</p>
                <div className="mt-7 border-t border-ciruela/10 pt-6">
                  <Button href={whatsappHref(page.carta.whatsapp)} variant="link" icon={<WhatsappIcon size={18} />}>
                    {site.cta.info}
                  </Button>
                </div>
              </div>
            </TiltCard>
          </li>
        </ul>
      </Section>

      <CalculadoraPromo tone="light" id="calcula-tu-matriz" />

      <FaqSection faqs={faqs.autoconocimiento} />
      <CtaBlock
        title={page.cta.title}
        text={page.cta.text}
        whatsappMessage={page.ctaWhatsapp}
        primary={{ label: page.shopCta, href: "/tienda#autoconocimiento" }}
      />
    </>
  );
}
