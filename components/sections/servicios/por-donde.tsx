import { metodo, serviciosPage } from "@/content/servicios";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function PorDonde() {
  const { porDonde } = serviciosPage;
  return (
    <Section tone="salvia" labelledBy="por-donde-title">
      <div aria-hidden className="blob -right-32 top-0 size-[22rem] bg-crema/70 animate-drift" />
      <Reveal>
        <SectionHeading eyebrow={porDonde.eyebrow} title={porDonde.title} text={porDonde.text} id="por-donde-title" />
      </Reveal>
      <RevealGroup as="ol" className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
        <span aria-hidden className="absolute left-[1.05rem] top-4 h-[calc(100%-2rem)] w-px bg-dorado/60 md:left-4 md:right-4 md:top-[1.05rem] md:h-px md:w-auto" />
        {metodo.steps.map((step) => (
          <RevealItem as="li" key={step.step} className="relative pl-14 md:pl-0 md:pt-16">
            <span
              aria-hidden
              className="absolute left-0 top-0 flex size-[2.1rem] items-center justify-center rounded-full border border-ciruela/15 bg-crema"
            >
              <span className="size-2.5 rounded-full" style={{ backgroundColor: step.accent }} />
            </span>
            <p className="font-serif text-lg italic text-ink-soft">{step.number}</p>
            <h3 className="text-h3">
              {step.step} <span className="text-ink-soft">· {step.tool}</span>
            </h3>
            <p className="mt-3 max-w-xs text-ink-soft">{step.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
