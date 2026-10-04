import { inicio } from "@/content/paginas";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";

export function TeSuena() {
  const { teSuena } = inicio;
  return (
    <Section tone="rosa" id="te-suena" labelledBy="te-suena-title">
      <div aria-hidden className="blob -right-32 top-1/3 size-[24rem] bg-crema/80 animate-drift-slow" />
      <Reveal>
        <SectionHeading eyebrow={teSuena.eyebrow} title={teSuena.title} id="te-suena-title" />
      </Reveal>
      <RevealGroup as="ul" className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {teSuena.cards.map((card) => (
          <RevealItem as="li" key={card.title}>
            <TiltCard className="h-full" innerClassName="flex min-h-40 flex-col justify-between bg-crema/80 p-5 sm:min-h-60 sm:p-7">
              <span aria-hidden className="size-2.5 rounded-full" style={{ backgroundColor: card.accent }} />
              <h3 className="mt-8 font-serif text-[1.25rem] leading-snug sm:mt-10 sm:text-h3">{card.title}</h3>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealGroup>
      <Reveal className="mt-16 text-center sm:mt-20">
        <p className="font-serif text-[clamp(1.8rem,1.4rem+1.8vw,3rem)] leading-tight">
          {teSuena.closingLead} <span className="script-accent text-[1.35em] text-rosa-deep">{teSuena.closingScript}</span>.
        </p>
      </Reveal>
    </Section>
  );
}
