import type { Metadata } from "next";
import { guia } from "@/content/guia";
import { faqs } from "@/content/faqs";
import { GuiaForm } from "@/components/sections/guia/guia-form";
import { FaqSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { EbookCover } from "@/components/ui/ebook-cover";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Blobs, Section } from "@/components/ui/section";
import { FadeUp, SplitText } from "@/components/ui/split-text";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Guía gratuita para empezar a meditar | Despierta con Tati",
  description:
    "Descarga gratis Tu primera pausa: una guía sencilla para empezar a meditar, cinco claves prácticas y la Meditación Freno, tu primera meditación guiada.",
  path: guia.slug,
});

export default function GuiaPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: guia.title, path: guia.slug }])} />
      <section className="relative overflow-hidden bg-salvia pb-16 pt-32 sm:pb-24 sm:pt-40">
        <Blobs variant="c" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FadeUp as="p" className="eyebrow mb-6">
              {guia.bloque.eyebrow}
            </FadeUp>
            <SplitText as="h1" text={guia.title} className="text-h1 italic" delay={120} />
            <FadeUp as="p" delay={450} className="mt-6 max-w-xl font-serif text-[clamp(1.4rem,1.15rem+1vw,2rem)] leading-snug text-ink-soft">
              {guia.subtitle}
            </FadeUp>
            <FadeUp delay={650} className="mt-10">
              <h2 className="eyebrow mb-5">{guia.incluyeTitle}</h2>
              <ol className="grid gap-4 sm:grid-cols-3">
                {guia.puntos.map((punto, index) => (
                  <li key={punto.title} className="rounded-[1.25rem] bg-crema/75 p-5">
                    <span className="font-serif text-xl italic text-rosa-deep">0{index + 1}</span>
                    <h3 className="mt-2 font-serif text-[1.4rem] leading-tight">{punto.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{punto.text}</p>
                  </li>
                ))}
              </ol>
            </FadeUp>
            <FadeUp delay={800} className="mt-10">
              <Button href="#formulario" magnetic>
                {guia.form.title}
              </Button>
            </FadeUp>
          </div>
          <FadeUp delay={300} className="lg:col-span-5">
            <EbookCover className="max-w-[19rem]" />
          </FadeUp>
        </div>
      </section>
      <Section tone="crema" id="formulario" className="scroll-mt-4">
        <Reveal className="mx-auto max-w-3xl">
          <GuiaForm />
        </Reveal>
      </Section>
      <FaqSection faqs={faqs.guia} title={guia.faqTitle} tone="lavanda" />
    </>
  );
}
