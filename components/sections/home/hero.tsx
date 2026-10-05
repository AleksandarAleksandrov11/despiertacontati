import { inicio } from "@/content/paginas";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { FadeUp, SplitText } from "@/components/ui/split-text";
import { RotatingWord } from "@/components/ui/rotating-word";
import { SiteImage } from "@/components/ui/site-image";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  const { hero } = inicio;
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-crema pb-16 pt-28 lg:pb-12 lg:pt-24">
      <div aria-hidden className="blob -left-40 -top-32 size-[30rem] bg-rosa-polvo animate-drift" />
      <div aria-hidden className="blob -bottom-40 left-1/3 size-[26rem] bg-lavanda animate-drift-slow" />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <FadeUp as="p" className="eyebrow mb-6">
            {hero.eyebrow}
          </FadeUp>
          <SplitText as="h1" text={hero.title} className="font-serif text-display italic text-ciruela" delay={100} />
          <FadeUp as="p" delay={650} className="mt-6 max-w-xl font-serif text-[clamp(1.6rem,1.25rem+1.4vw,2.5rem)] leading-tight">
            {hero.subtitle}
          </FadeUp>
          <FadeUp as="p" delay={800} className="mt-4 max-w-md text-lead text-ink-soft">
            {hero.support}
          </FadeUp>
          <FadeUp delay={950} className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button href={site.cta.primary.href} magnetic>
              {site.cta.primary.label}
            </Button>
            <Button href={site.cta.services.href} variant="secondary">
              {site.cta.services.label}
            </Button>
          </FadeUp>
          <FadeUp delay={1100} className="mt-12 flex items-center gap-4">
            <span className="font-serif text-4xl text-ciruela">{site.facts.experience}</span>
            <span className="h-px w-10 bg-dorado" aria-hidden />
            <span className="text-sm text-ink-soft">{site.facts.experienceLabel}</span>
          </FadeUp>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:col-span-5 lg:max-w-none">
          <HeroVisual />
          <div className="relative mx-auto w-[82%]">
            <SiteImage
              name={hero.image}
              shape="arch"
              priority
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 320px, 75vw"
              className="aspect-[3/4] shadow-[0_40px_80px_-40px_rgba(63,46,58,0.45)]"
              imgClassName="scale-105"
            />
            <p className="absolute -bottom-6 -left-4 rounded-2xl bg-crema/90 px-5 py-3 shadow-[0_20px_40px_-25px_rgba(63,46,58,0.45)] backdrop-blur sm:-left-10">
              <RotatingWord words={hero.rotating} className="script-accent text-[2.6rem] text-rosa-deep" />
            </p>
          </div>
        </div>
      </div>
      <a
        href="#te-suena"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-ink-soft [@media(min-height:760px)]:lg:flex"
      >
        <span className="eyebrow">{hero.scroll}</span>
        <span aria-hidden className="relative h-12 w-px overflow-hidden bg-ciruela/15">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_2.4s_var(--ease-breath)_infinite] bg-ciruela/60" />
        </span>
      </a>
    </section>
  );
}
