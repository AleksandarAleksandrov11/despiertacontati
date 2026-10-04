import type { ReactNode } from "react";
import type { ImageKey } from "@/content/imagenes";
import { SplitText, FadeUp } from "@/components/ui/split-text";
import { SiteImage } from "@/components/ui/site-image";
import { Blobs, type SectionTone } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  image?: ImageKey;
  tone?: SectionTone;
  children?: ReactNode;
  blobs?: "a" | "b" | "c";
};

const tones: Partial<Record<SectionTone, string>> = {
  crema: "bg-crema",
  rosa: "bg-rosa-polvo",
  lavanda: "bg-lavanda",
  salvia: "bg-salvia",
};

export function PageHeader({ eyebrow, title, subtitle, image, tone = "crema", children, blobs = "a" }: PageHeaderProps) {
  return (
    <section className={cn("relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40", tones[tone])}>
      <Blobs variant={blobs} />
      <div
        className={cn(
          "container-page relative grid items-end gap-12",
          image && "lg:grid-cols-12 lg:gap-16",
        )}
      >
        <div className={cn(image ? "lg:col-span-7" : "max-w-4xl")}>
          <FadeUp as="p" className="eyebrow mb-6">
            {eyebrow}
          </FadeUp>
          <SplitText as="h1" text={title} className="text-h1" delay={120} />
          {subtitle && (
            <FadeUp as="p" delay={500} className="mt-6 max-w-xl font-serif text-[clamp(1.4rem,1.15rem+1vw,2rem)] italic leading-snug text-ink-soft">
              {subtitle}
            </FadeUp>
          )}
          {children && (
            <FadeUp delay={700} className="mt-10 flex flex-wrap items-center gap-4">
              {children}
            </FadeUp>
          )}
        </div>
        {image && (
          <FadeUp delay={250} className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <SiteImage
              name={image}
              shape="arch"
              priority
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 384px, 90vw"
              className="aspect-[4/5]"
            />
          </FadeUp>
        )}
      </div>
    </section>
  );
}
