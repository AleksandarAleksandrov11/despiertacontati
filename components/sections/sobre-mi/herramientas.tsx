import { Flower2, HandHeart, ScrollText, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { MatrizIcon, PenduloIcon, TarotIcon } from "@/components/ui/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

type IconComponent = LucideIcon | ComponentType<{ size?: number; strokeWidth?: number }>;

const icons: Record<string, IconComponent> = {
  reiki: HandHeart,
  pendulo: PenduloIcon,
  registros: ScrollText,
  meditacion: Flower2,
  tarot: TarotIcon,
  matriz: MatrizIcon,
};

export function Herramientas({ eyebrow, title, items }: { eyebrow: string; title: string; items: { name: string; icon: string }[] }) {
  return (
    <Section tone="lavanda" labelledBy="herramientas-title">
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} id="herramientas-title" />
      </Reveal>
      <RevealGroup as="ul" className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <RevealItem
              as="li"
              key={item.name}
              className="flex flex-col gap-8 rounded-[1.5rem] bg-crema/70 p-6 transition-colors duration-500 hover:bg-crema sm:flex-row sm:items-center sm:gap-5 sm:p-7"
            >
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-ciruela/15 text-malva-deep">
                <Icon size={24} strokeWidth={1.25} />
              </span>
              <span className="font-serif text-[1.45rem] leading-tight">{item.name}</span>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
