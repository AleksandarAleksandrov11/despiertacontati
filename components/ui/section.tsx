import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "crema" | "rosa" | "lavanda" | "salvia" | "ciruela";

const tones: Record<SectionTone, string> = {
  crema: "bg-crema text-ciruela",
  rosa: "bg-rosa-polvo text-ciruela",
  lavanda: "bg-lavanda text-ciruela",
  salvia: "bg-salvia text-ciruela",
  ciruela: "bg-ciruela text-crema",
};

type SectionProps = {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
  bare?: boolean;
  hideWhatsapp?: boolean;
};

export function Section({
  children,
  tone = "crema",
  id,
  className,
  containerClassName,
  labelledBy,
  bare = false,
  hideWhatsapp = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-hide-whatsapp={hideWhatsapp || undefined}
      className={cn("relative overflow-hidden", tones[tone], !bare && "section-pad", className)}
    >
      {bare ? children : <div className={cn("container-page relative", containerClassName)}>{children}</div>}
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  id,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
}: HeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow mb-5", tone === "dark" && "text-crema/70")}>{eyebrow}</p>}
      <Tag id={id} className="text-h2">
        {title}
      </Tag>
      {text && (
        <p className={cn("mt-5 text-lead", tone === "light" ? "text-ink-soft" : "text-crema/80", align === "center" && "mx-auto max-w-xl")}>
          {text}
        </p>
      )}
    </div>
  );
}

export function Blobs({ variant = "a" }: { variant?: "a" | "b" | "c" }) {
  if (variant === "b") {
    return (
      <>
        <div aria-hidden className="blob -left-32 top-10 size-[22rem] bg-lavanda animate-drift" />
        <div aria-hidden className="blob -right-24 bottom-0 size-[20rem] bg-rosa-polvo animate-drift-slow" />
      </>
    );
  }
  if (variant === "c") {
    return (
      <>
        <div aria-hidden className="blob -right-32 -top-20 size-[24rem] bg-salvia animate-drift-slow" />
        <div aria-hidden className="blob -left-24 bottom-10 size-[18rem] bg-lavanda/80 animate-drift" />
      </>
    );
  }
  return (
    <>
      <div aria-hidden className="blob -right-24 top-0 size-[26rem] bg-rosa-polvo animate-drift" />
      <div aria-hidden className="blob -left-40 bottom-0 size-[22rem] bg-lavanda animate-drift-slow" />
    </>
  );
}
