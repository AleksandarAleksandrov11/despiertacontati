import type { ImageKey } from "@/content/imagenes";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { cn } from "@/lib/utils";

type Item = { image: ImageKey; caption: string };

const layout = [
  "aspect-[4/3] sm:col-span-2 lg:col-span-7 lg:aspect-auto lg:h-[26rem]",
  "aspect-[4/5] sm:col-span-2 lg:col-span-5 lg:row-span-2 lg:aspect-auto lg:h-full",
  "aspect-[4/3] lg:col-span-3 lg:aspect-auto lg:h-[18rem]",
  "aspect-[4/3] lg:col-span-4 lg:aspect-auto lg:h-[18rem]",
];

export function Galeria({ eyebrow, title, items }: { eyebrow: string; title: string; items: Item[] }) {
  return (
    <Section tone="crema" labelledBy="galeria-title">
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} id="galeria-title" />
      </Reveal>
      <RevealGroup as="ul" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        {items.map((item, index) => (
          <RevealItem as="li" key={item.image} className={cn("group relative overflow-hidden rounded-[1.75rem]", layout[index])}>
            <figure className="h-full">
              <SiteImage
                name={item.image}
                shape="none"
                sizes={index === 0 ? "(min-width: 1024px) 55vw, 90vw" : "(min-width: 1024px) 40vw, (min-width: 640px) 45vw, 90vw"}
                className="h-full min-h-56"
                imgClassName="transition-transform duration-[1.6s] ease-[var(--ease-breath)] group-hover:scale-105"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-crema/90 px-4 py-1.5 text-sm text-ciruela backdrop-blur">
                {item.caption}
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
