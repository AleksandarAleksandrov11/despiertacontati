import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

type CursosReikiProps = {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  id?: string;
};

export function CursosReiki({ eyebrow, title, text, cta, id = "cursos-reiki" }: CursosReikiProps) {
  return (
    <Section tone="ciruela" id={id} labelledBy={`${id}-title`}>
      <div aria-hidden className="blob -right-32 top-0 size-[26rem] bg-malva/35 animate-drift-slow" />
      <div aria-hidden className="absolute -left-40 top-1/2 size-[34rem] -translate-y-1/2 rounded-full border border-dorado/25" />
      <div aria-hidden className="absolute -left-24 top-1/2 size-[24rem] -translate-y-1/2 rounded-full border border-dorado/15" />
      <Reveal className="relative max-w-3xl">
        <div>
          <p className="eyebrow mb-6 text-crema/70">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-h1 text-crema">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lead text-crema/80">{text}</p>
        </div>
        <div className="mt-10">
          <Button href="/contacto?servicio=curso-reiki" tone="dark" magnetic>
            {cta}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
