import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Disclaimer({ className }: { className?: string }) {
  return (
    <div className={cn("container-page", className)}>
      <p className="mx-auto max-w-2xl border-t border-ciruela/10 py-8 text-center text-sm text-ink-soft">
        {site.disclaimer}
      </p>
    </div>
  );
}
