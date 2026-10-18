import { recorrido } from "@/content/recorrido";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Recorrido({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Section tone="crema" labelledBy="recorrido-title">
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} id="recorrido-title" />
      </Reveal>
      <RevealGroup as="ol" className="relative mt-16 grid gap-12 lg:grid-cols-5 lg:gap-8" stagger={0.15}>
        <span aria-hidden className="absolute bottom-2 left-[0.6rem] top-2 w-px bg-dorado/60 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[0.6rem] lg:h-px lg:w-auto" />
        {recorrido.map((hito) => (
          <RevealItem as="li" key={hito.title} className="relative pl-12 lg:pl-0 lg:pt-14">
            <span
              aria-hidden
              className="absolute left-0 top-0.5 flex size-5 items-center justify-center rounded-full border border-ciruela/15 bg-crema lg:top-0"
            >
              <span className="size-2 rounded-full" style={{ backgroundColor: hito.accent }} />
            </span>
            <p className="eyebrow">{hito.when}</p>
            <h3 className="mt-3 font-serif text-[1.65rem] leading-tight">{hito.title}</h3>
            <p className="mt-3 text-ink-soft">{hito.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
