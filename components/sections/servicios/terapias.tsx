import type { Terapia } from "@/content/servicios";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { TiltCard } from "@/components/ui/tilt-card";
import { whatsappHref } from "@/lib/utils";

export function Terapias({
  eyebrow,
  title,
  text,
  items,
  cta,
  tone = "lavanda",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  items: Terapia[];
  cta: string;
  tone?: SectionTone;
}) {
  return (
    <Section tone={tone} labelledBy="terapias-title">
      <div>
        <SectionHeading eyebrow={eyebrow} title={title} text={text} id="terapias-title" />
      </div>
      <ul className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <li key={item.title}>
            <TiltCard as="article" className="h-full" innerClassName="flex h-full flex-col">
              <SiteImage
                name={item.image}
                shape="none"
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 90vw"
                className="aspect-[16/10]"
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-h3">{item.title}</h3>
                <p className="mt-3 flex-1 text-ink-soft">{item.text}</p>
                <div className="mt-6">
                  <Button href={whatsappHref(item.whatsapp)} variant="link" icon={<WhatsappIcon size={18} />}>
                    {cta}
                  </Button>
                </div>
              </div>
            </TiltCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
