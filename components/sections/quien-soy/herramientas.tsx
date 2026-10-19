import { CalendarDays, Feather, Flower2, HandHeart, HouseHeart, Layers, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
import { ChakrasIcon, MatrizIcon, PenduloIcon, TarotIcon } from "@/components/ui/icons";
import { Section, SectionHeading } from "@/components/ui/section";

type IconComponent = LucideIcon | ComponentType<{ size?: number; strokeWidth?: number }>;

const icons: Record<string, IconComponent> = {
  reiki: HandHeart,
  pendulo: PenduloIcon,
  chakras: ChakrasIcon,
  sanacion: Feather,
  limpieza: HouseHeart,
  meditacion: Flower2,
  tarot: TarotIcon,
  matriz: MatrizIcon,
  codigo: CalendarDays,
  carta: Layers,
};

export function Herramientas({ eyebrow, title, items }: { eyebrow: string; title: string; items: { name: string; icon: string }[] }) {
  return (
    <Section tone="lavanda" labelledBy="herramientas-title">
      <div>
        <SectionHeading eyebrow={eyebrow} title={title} id="herramientas-title" />
      </div>
      <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
        {items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li
              key={item.name}
              className="flex flex-col gap-6 rounded-[1.25rem] bg-crema/70 p-5 transition-colors duration-500 hover:bg-crema sm:p-6"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-ciruela/15 text-malva-deep">
                <Icon size={22} strokeWidth={1.25} />
              </span>
              <span className="font-serif text-[1.35rem] leading-tight">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
