import type { ImageKey } from "@/content/imagenes";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";

type CursosReikiProps = {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  image?: ImageKey;
  id?: string;
};

export function CursosReiki({ eyebrow, title, text, cta, image, id = "cursos-reiki" }: CursosReikiProps) {
  return (
    <Section tone="ciruela" id={id} labelledBy={`${id}-title`}>
      <div aria-hidden className="blob -right-32 top-0 size-[26rem] bg-malva/35 animate-drift-slow" />
      <div aria-hidden className="absolute -left-40 top-1/2 size-[34rem] -translate-y-1/2 rounded-full border border-dorado/25" />
      <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className={image ? "lg:col-span-6" : "max-w-3xl lg:col-span-12"}>
          <p className="eyebrow mb-6 text-crema/70">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-h1 text-crema">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lead text-crema/80">{text}</p>
          <div className="mt-10">
            <Button href="/contacto?servicio=curso-reiki" tone="dark" magnetic>
              {cta}
            </Button>
          </div>
        </Reveal>
        {image && (
          <Reveal className="lg:col-span-6" delay={0.1}>
            <SiteImage
              name={image}
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="aspect-[4/3] ring-1 ring-crema/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
            />
          </Reveal>
        )}
      </div>
    </Section>
  );
}
