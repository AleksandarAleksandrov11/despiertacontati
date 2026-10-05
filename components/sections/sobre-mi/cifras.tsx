import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Stat } from "@/components/ui/stat";
import logo from "@/public/brand/logo-despierta-con-tati.png";

export function Cifras({ sealAlt, title }: { sealAlt: string; title: string }) {
  const stats = [site.facts.experience, site.facts.teaching];
  return (
    <Section tone="crema" labelledBy="cifras-title">
      <h2 id="cifras-title" className="sr-only">
        {title}
      </h2>
      <div className="grid items-center gap-12 md:grid-cols-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-x-16 md:col-span-9">
          {stats.map((stat, index) => (
            <Reveal key={stat.value} delay={index * 0.12}>
              <Stat value={stat.value} prefix={stat.prefix} lines={stat.lines} size="lg" animate />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="flex justify-start md:col-span-3 md:justify-end">
          <Image
            src={logo}
            alt={sealAlt}
            width={150}
            height={150}
            sizes="150px"
            className="size-[150px] rounded-full shadow-[0_30px_60px_-30px_rgba(63,46,58,0.4)]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
