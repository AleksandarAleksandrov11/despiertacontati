import type { Metadata } from "next";
import { testimoniosPage } from "@/content/paginas";
import { frasesDestacadas } from "@/content/testimonios";
import { PageHeader } from "@/components/sections/page-header";
import { TestimoniosGrid } from "@/components/sections/testimonios-grid";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/ui/json-ld";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Experiencias con Reiki, meditación y tarot | Despierta con Tati",
  description:
    "Lo que cuentan quienes han pasado por sesiones de Reiki, clases de meditación y tarot terapéutico con Tati, en Valencia y online, con sus propias palabras.",
  path: "/testimonios",
});

export default function TestimoniosPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Testimonios", path: "/testimonios" }])} />
      <PageHeader eyebrow={testimoniosPage.eyebrow} title={testimoniosPage.title} subtitle={testimoniosPage.subtitle} tone="lavanda" blobs="c" />
      <Section tone="crema" labelledBy="testimonios-lista">
        <h2 id="testimonios-lista" className="sr-only">
          {testimoniosPage.title}
        </h2>
        <TestimoniosGrid />
      </Section>
      <div className="border-y border-ciruela/10 bg-rosa-polvo py-10 sm:py-14">
        <Marquee duration={60}>
          {frasesDestacadas.map((frase) => (
            <span key={frase} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-serif text-[clamp(1.8rem,1.3rem+2vw,3.25rem)] italic sm:px-12">{frase}</span>
              <span aria-hidden className="h-px w-10 bg-dorado" />
            </span>
          ))}
        </Marquee>
      </div>
      <CtaBlock tone="salvia" />
    </>
  );
}
