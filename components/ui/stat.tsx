import { Counter } from "./counter";
import { cn } from "@/lib/utils";

type StatProps = {
  value: number;
  prefix?: string;
  lines: readonly string[];
  size?: "md" | "lg";
  animate?: boolean;
  className?: string;
};

export function Stat({ value, prefix = "", lines, size = "md", animate = false, className }: StatProps) {
  const label = `${prefix}${value} ${lines.join(" ")}`;
  return (
    <p className={cn("inline-flex items-center gap-5", className)}>
      <span className="sr-only">{label}</span>
      <span
        aria-hidden
        className={cn(
          "flex items-start font-serif leading-none text-ciruela",
          size === "lg" ? "text-[clamp(4rem,3rem+3.5vw,6.5rem)]" : "text-[3.25rem]",
        )}
      >
        {prefix && <span className={cn("mr-0.5 text-rosa-deep", size === "lg" ? "mt-[0.35em] text-[0.45em]" : "mt-[0.3em] text-[0.55em]")}>{prefix}</span>}
        <span>{animate ? <Counter value={value} from={value > 1000 ? value - 16 : 0} /> : value}</span>
      </span>
      <span aria-hidden className={cn("w-px shrink-0 bg-dorado", size === "lg" ? "h-16" : "h-11")} />
      <span aria-hidden className="flex flex-col gap-1">
        {lines.map((line, index) => (
          <span
            key={line}
            className={cn(
              "text-[0.72rem] font-medium uppercase leading-tight tracking-[0.2em]",
              index === 0 ? "text-ciruela" : "text-ink-soft",
            )}
          >
            {line}
          </span>
        ))}
      </span>
    </p>
  );
}
