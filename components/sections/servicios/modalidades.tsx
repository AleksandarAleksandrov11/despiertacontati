import type { ImageKey } from "@/content/imagenes";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { TiltCard } from "@/components/ui/tilt-card";

type Modalidad = { title: string; text: string; image: ImageKey };

export function Modalidades({
  eyebrow,
  title,
  items,
  tone = "lavanda",
}: {
  eyebrow: string;
  title: string;
  items: Modalidad[];
  tone?: SectionTone;
}) {
  return (
    <Section tone={tone} labelledBy="modalidades-title">
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} id="modalidades-title" />
      </Reveal>
      <RevealGroup as="ul" className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <RevealItem as="li" key={item.title}>
            <TiltCard className="h-full" innerClassName="flex h-full flex-col">
              <SiteImage name={item.image} shape="none" sizes="(min-width: 768px) 30vw, 90vw" className="aspect-[4/3]" />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-h3">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
