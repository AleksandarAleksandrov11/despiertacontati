import { Check } from "lucide-react";
import { guia } from "@/content/guia";
import { Button } from "@/components/ui/button";
import { EbookCover } from "@/components/ui/ebook-cover";
import { Reveal } from "@/components/ui/reveal";
import { Section, type SectionTone } from "@/components/ui/section";

export function GuiaBlock({ tone = "salvia", id = "guia" }: { tone?: SectionTone; id?: string }) {
  const { bloque } = guia;
  return (
    <Section tone={tone} labelledBy={`${id}-title`}>
      <div aria-hidden className="blob -right-24 top-0 size-[22rem] bg-crema/80 animate-drift-slow" />
      <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10 lg:gap-16">
        <Reveal className="md:col-span-5">
          <EbookCover />
        </Reveal>
        <Reveal className="md:col-span-7" delay={0.1}>
          <p className="eyebrow mb-5">{bloque.eyebrow}</p>
          <h2 id={`${id}-title`} className="text-h2 italic">
            {bloque.title}
          </h2>
          <p className="mt-5 max-w-lg text-lead text-ink-soft">{bloque.text}</p>
          <ul className="mt-8 space-y-3">
            {guia.puntos.map((punto) => (
              <li key={punto.title} className="flex items-start gap-3">
                <Check size={18} strokeWidth={1.5} aria-hidden className="mt-1 shrink-0 text-malva-deep" />
                <span>{punto.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href={guia.slug} magnetic>
              {bloque.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
