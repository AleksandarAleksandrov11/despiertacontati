import { site } from "@/content/site";
import { Section } from "@/components/ui/section";
import { Stat } from "@/components/ui/stat";

export function Cifras({ title }: { title: string }) {
  const stats = [site.facts.experience, site.facts.teaching];
  return (
    <Section tone="crema" labelledBy="cifras-title">
      <h2 id="cifras-title" className="sr-only">
        {title}
      </h2>
      <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-24">
        {stats.map((stat) => (
          <Stat key={stat.value} value={stat.value} prefix={stat.prefix} lines={stat.lines} size="lg" animate />
        ))}
      </div>
    </Section>
  );
}
