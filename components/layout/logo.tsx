import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, ir al inicio`}
      className={cn("group inline-flex min-h-11 items-baseline gap-1.5 whitespace-nowrap leading-none", className)}
    >
      <span className={cn("script-accent text-[2.15rem]", tone === "light" ? "text-rosa-deep" : "text-rosa")}>despierta</span>
      <span className={cn("font-serif text-[0.95rem] italic", tone === "light" ? "text-ink-soft" : "text-crema/80")}>con</span>
      <span className={cn("script-accent text-[2.15rem]", tone === "light" ? "text-malva-deep" : "text-crema")}>Tati</span>
    </Link>
  );
}
