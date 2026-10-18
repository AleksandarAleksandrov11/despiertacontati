import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article" | "p" | "span";
};

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const style = delay ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties) : undefined;
  return (
    <Tag className={cn("reveal", className)} style={style}>
      {children}
    </Tag>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  return (
    <Tag className={cn("reveal-group", className)} style={{ "--reveal-stagger": `${Math.round(stagger * 1000)}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return <Tag className={cn("reveal-item", className)}>{children}</Tag>;
}
