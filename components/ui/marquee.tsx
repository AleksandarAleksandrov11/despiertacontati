import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  trackClassName?: string;
  label?: string;
};

export function Marquee({ children, duration = 40, reverse = false, className, trackClassName, label }: MarqueeProps) {
  return (
    <div
      className={cn("marquee relative flex overflow-hidden", reverse && "marquee-reverse", className)}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      role={label ? "region" : undefined}
      aria-label={label}
    >
      <div className={cn("marquee-track flex w-max shrink-0", trackClassName)}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
