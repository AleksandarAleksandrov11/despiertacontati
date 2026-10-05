import type { CSSProperties, ReactNode } from "react";

type TextTag = "h1" | "h2" | "h3" | "p" | "span" | "div";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  as?: TextTag;
  className?: string;
  delay?: number;
};

export function SplitText({ text, as: Tag = "span", className, delay = 0 }: SplitTextProps) {
  let index = 0;
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, w) => (
          <span key={`${word}-${w}`} className="inline-block whitespace-nowrap">
            {Array.from(word).map((char) => {
              const i = index++;
              const style = { "--i": i, "--d": `${delay}ms` } as CSSProperties;
              return (
                <span key={i} className="split-char" style={style}>
                  {char}
                </span>
              );
            })}
            {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </span>
    </Tag>
  );
}

export function FadeUp({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: TextTag;
}) {
  return (
    <Tag className={cn("fade-up", className)} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
