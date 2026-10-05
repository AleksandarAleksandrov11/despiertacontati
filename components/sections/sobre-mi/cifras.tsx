import Image from "next/image";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import logo from "@/public/brand/logo-despierta-con-tati.png";

type Cifra = { value: number; prefix: string; suffix: string; label: string };

export function Cifras({ cifras, sealAlt, title }: { cifras: Cifra[]; sealAlt: string; title: string }) {
  return (
    <Section tone="crema" labelledBy="cifras-title">
      <h2 id="cifras-title" className="sr-only">
        {title}
      </h2>
      <div className="grid items-center gap-14 md:grid-cols-12">
        <dl className="grid gap-12 sm:grid-cols-2 md:col-span-9">
          {cifras.map((cifra, index) => (
            <Reveal key={cifra.label} delay={index * 0.12} className="border-t border-ciruela/15 pt-8">
              <dt className="sr-only">{cifra.label}</dt>
              <dd>
                <span className="block whitespace-nowrap font-serif text-[clamp(3.5rem,2.5rem+4vw,6.5rem)] leading-none">
                  {cifra.prefix.trim().length > 1 ? (
                    <span className="mr-3 align-middle text-[0.35em] italic text-ink-soft">{cifra.prefix.trim()}</span>
                  ) : (
                    cifra.prefix
                  )}
                  <Counter value={cifra.value} from={cifra.value > 1000 ? 1990 : 0} />
                  {cifra.suffix}
                </span>
                <span aria-hidden className="mt-4 block text-ink-soft">
                  {cifra.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={0.2} className="flex justify-center md:col-span-3 md:justify-end">
          <Image
            src={logo}
            alt={sealAlt}
            width={150}
            height={150}
            sizes="150px"
            className="size-[150px] rounded-full shadow-[0_30px_60px_-30px_rgba(63,46,58,0.4)]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
