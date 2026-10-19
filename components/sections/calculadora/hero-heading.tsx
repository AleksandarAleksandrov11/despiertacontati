import type { ReactNode } from "react";
import { FadeUp, SplitText } from "@/components/ui/split-text";
import { CalculadoraHero } from "./layout";

export function HeroHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <>
      <FadeUp as="p" className="eyebrow mb-6">
        {eyebrow}
      </FadeUp>
      <SplitText as="h1" text={title} className="text-h1" delay={120} />
      <FadeUp as="p" delay={500} className="mt-6 max-w-xl font-serif text-[clamp(1.4rem,1.15rem+1vw,2rem)] italic leading-snug text-ink-soft">
        {subtitle}
      </FadeUp>
    </>
  );
}

export function HeroFallback({ heading, campos }: { heading: ReactNode; campos: number }) {
  return (
    <CalculadoraHero heading={heading}>
      <div aria-hidden className="rounded-[1.25rem] bg-crema/90 p-6 shadow-[0_30px_70px_-45px_rgba(63,46,58,0.45)] sm:p-9">
        {Array.from({ length: campos }, (_, index) => (
          <div key={index} className={index > 0 ? "mt-10" : undefined}>
            <span className="block h-7 w-48 rounded-full bg-ciruela/10" />
            <span className="mt-5 grid grid-cols-[1fr_1.6fr_1.25fr] gap-3">
              <span className="h-13 rounded-xl bg-white/70" />
              <span className="h-13 rounded-xl bg-white/70" />
              <span className="h-13 rounded-xl bg-white/70" />
            </span>
            <span className="mt-4 block h-13 rounded-xl bg-white/70" />
          </div>
        ))}
        <span className="mt-8 block h-12 rounded-full bg-ciruela/80" />
      </div>
    </CalculadoraHero>
  );
}
