import { inicio } from "@/content/paginas";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";

export function QuienSoyResumen() {
  const { quienSoy } = inicio;
  return (
    <Section tone="crema" labelledBy="quien-soy-title">
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-20">
        <div className="md:col-span-4 lg:col-span-3 lg:col-start-2">
          <SiteImage
            name={quienSoy.image}
            shape="circle"
            sizes="(min-width: 1024px) 280px, (min-width: 768px) 30vw, 260px"
            className="aspect-square w-full max-w-[16rem] shadow-[0_30px_60px_-35px_rgba(63,46,58,0.45)] md:max-w-none"
          />
        </div>
        <div className="md:col-span-8 lg:col-span-7">
          <p className="eyebrow mb-5">{quienSoy.eyebrow}</p>
          <h2 id="quien-soy-title" className="text-h2">
            {quienSoy.title}
          </h2>
          <blockquote className="mt-6 border-l border-dorado pl-6 font-serif text-[clamp(1.5rem,1.2rem+1.1vw,2.2rem)] italic leading-snug text-ciruela">
            <p>{quienSoy.quote}</p>
          </blockquote>
          <p className="mt-6 max-w-xl text-lead text-ink-soft">{quienSoy.text}</p>
          <div className="mt-8">
            <Button href={site.cta.about.href} variant="link">
              {quienSoy.link}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
