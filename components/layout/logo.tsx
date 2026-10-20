import Link from "next/link";
import { BrandSymbol } from "@/components/ui/brand-symbol";
import { cn } from "@/lib/utils";

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap", className)}
    >
      <BrandSymbol
        size={48}
        className="h-11 w-auto transition-transform duration-1000 ease-[var(--ease-breath)] group-hover:rotate-[360deg] lg:h-12"
      />
      <span className="flex flex-col items-center leading-none">
        <span
          className={cn(
            "font-serif text-[1.4rem] font-medium uppercase tracking-[0.07em]",
            tone === "light" ? "text-ciruela" : "text-crema",
          )}
        >
          Despierta
        </span>{" "}
        <span className={cn("script-accent -mt-1 text-[1.6rem]", tone === "light" ? "text-rosa-deep" : "text-rosa")}>
          con Tati
        </span>
      </span>
    </Link>
  );
}
