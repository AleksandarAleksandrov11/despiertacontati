import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { calculadoraFaqs, calculadoraHub, rutasCalculadora } from "@/content/calculadora";
import { getProducto } from "@/content/tienda";
import { FaqSection } from "@/components/sections/faq-section";
import { Octograma } from "@/components/sections/calculadora/octograma";
import { BrandSymbol } from "@/components/ui/brand-symbol";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Blobs, Section, SectionHeading } from "@/components/ui/section";
import { FadeUp, SplitText } from "@/components/ui/split-text";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { formatPrice, productHref } from "@/lib/tienda";
import { cn } from "@/lib/utils";

const description =
  "Calculadora gratuita de la Matriz del Destino: calcula tu matriz o la compatibilidad con tu pareja a partir de la fecha de nacimiento y descarga tu lectura en PDF.";

export const metadata: Metadata = pageMetadata({
  title: "Calculadora de la Matriz del Destino gratis | Despierta con Tati",
  description,
  path: rutasCalculadora.hub,
});

const cardTone = {
  individual: "bg-ciruela text-crema hover:shadow-[0_40px_80px_-40px_rgba(63,46,58,0.8)]",
  pareja: "bg-malva-deep text-crema hover:shadow-[0_40px_80px_-40px_rgba(142,95,128,0.8)]",
};

export default function CalculadoraPage() {
  const page = calculadoraHub;
  const lectura = getProducto("matriz-del-destino");

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Calculadora", path: rutasCalculadora.hub }])} />
      <section className="relative overflow-hidden bg-lavanda pb-20 pt-32 sm:pb-28 sm:pt-40">
        <Blobs variant="c" />
        <div className="container-page relative">
          <div className="max-w-4xl">
            <FadeUp as="p" className="eyebrow mb-6">
              {page.eyebrow}
            </FadeUp>
            <SplitText as="h1" text={page.title} className="text-h1" delay={120} />
            <FadeUp as="p" delay={500} className="mt-6 max-w-2xl font-serif text-[clamp(1.4rem,1.15rem+1vw,2rem)] italic leading-snug text-ink-soft">
              {page.subtitle}
            </FadeUp>
          </div>

          <h2 className="eyebrow mb-6 mt-14 sm:mt-16">{page.choose}</h2>
          <ul className="grid gap-5 md:grid-cols-2">
            {page.opciones.map((opcion) => {
              const pareja = opcion.id === "pareja";
              return (
                <li key={opcion.id}>
                  <Link
                    href={pareja ? rutasCalculadora.pareja : rutasCalculadora.individual}
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] p-8 transition-[box-shadow,transform] duration-700 ease-[var(--ease-breath)] hover:-translate-y-1 sm:p-10",
                      cardTone[pareja ? "pareja" : "individual"],
                    )}
                  >
                    <div aria-hidden className="blob -right-24 -top-24 size-72 bg-rosa/30" />
                    <div className="relative flex items-start justify-between gap-6">
                      <p className="eyebrow text-crema">{opcion.tag}</p>
                      <Octograma
                        pareja={pareja}
                        className={cn(
                          "text-crema transition-transform duration-[1.4s] ease-[var(--ease-breath)] group-hover:rotate-[22deg]",
                          pareja ? "w-36 sm:w-44" : "w-28 sm:w-32",
                        )}
                      />
                    </div>
                    <p className="relative mt-6 font-serif text-[clamp(2.2rem,1.7rem+2vw,3.4rem)] leading-none">{opcion.title}</p>
                    <p className="relative mt-4 max-w-sm text-lead text-crema">{opcion.text}</p>
                    <p className="relative mt-6 text-sm text-crema">{opcion.needs}</p>
                    <span className="relative mt-8 inline-flex min-h-12 w-fit items-center gap-2.5 rounded-full bg-crema px-7 py-3 text-[0.95rem] font-medium text-ciruela transition-colors duration-500 group-hover:bg-rosa-polvo">
                      {opcion.cta}
                      <ArrowRight size={18} strokeWidth={1.25} aria-hidden className="transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Section tone="crema" labelledBy="como-funciona">
        <Reveal>
          <SectionHeading eyebrow={page.pasos.eyebrow} title={page.pasos.title} id="como-funciona" />
        </Reveal>
        <RevealGroup as="ol" className="mt-12 grid gap-5 md:grid-cols-3">
          {page.pasos.items.map((paso, index) => (
            <RevealItem as="li" key={paso.title} className="rounded-[1.25rem] bg-rosa-polvo/60 p-7 sm:p-8">
              <span className="nums font-serif text-[3rem] leading-none text-rosa-deep">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-h3">{paso.title}</h3>
              <p className="mt-3 text-ink-soft">{paso.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="lavanda" labelledBy="que-es-la-matriz">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <SectionHeading eyebrow={page.queEs.eyebrow} title={page.queEs.title} id="que-es-la-matriz" />
            {page.queEs.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-2xl text-lead text-ink-soft">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal className="flex justify-center lg:col-span-5" delay={0.1}>
            <BrandSymbol size={360} eager={false} className="h-auto w-full max-w-[20rem] animate-[spin_120s_linear_infinite] motion-reduce:animate-none" />
          </Reveal>
        </div>
      </Section>

      <Section tone="rosa" labelledBy="gratis-completa">
        <Reveal>
          <SectionHeading eyebrow={page.comparativa.eyebrow} title={page.comparativa.title} id="gratis-completa" />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
          <RevealItem className="rounded-[1.25rem] bg-crema p-7 sm:p-9">
            <h3 className="text-h3">{page.comparativa.gratis.title}</h3>
            <p className="nums mt-2 font-serif text-[2.4rem] text-ciruela">0 €</p>
            <ul className="mt-6 space-y-3">
              {page.comparativa.gratis.items.map((item) => (
                <li key={item} className="flex gap-3 text-ink">
                  <Check size={20} strokeWidth={1.5} aria-hidden className="mt-0.5 shrink-0 text-malva-deep" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={rutasCalculadora.individual}>{page.opciones[0]!.cta}</Button>
              <Button href={rutasCalculadora.pareja} variant="secondary">
                {page.opciones[1]!.cta}
              </Button>
            </div>
          </RevealItem>
          <RevealItem className="rounded-[1.25rem] bg-ciruela p-7 text-crema sm:p-9">
            <h3 className="text-h3">{page.comparativa.completa.title}</h3>
            {lectura?.precio && <p className="nums mt-2 font-serif text-[2.4rem] text-dorado-soft">{formatPrice(lectura.precio)}</p>}
            <ul className="mt-6 space-y-3">
              {page.comparativa.completa.items.map((item) => (
                <li key={item} className="flex gap-3 text-crema/90">
                  <Check size={20} strokeWidth={1.5} aria-hidden className="mt-0.5 shrink-0 text-dorado-soft" />
                  {item}
                </li>
              ))}
            </ul>
            {lectura && (
              <div className="mt-8">
                <Button href={productHref(lectura)} tone="dark">
                  {page.comparativa.completa.cta}
                </Button>
              </div>
            )}
          </RevealItem>
        </RevealGroup>
      </Section>

      <FaqSection faqs={calculadoraFaqs} />
    </>
  );
}
