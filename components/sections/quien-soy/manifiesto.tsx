import { Section } from "@/components/ui/section";

export function Manifiesto({ lines, label }: { lines: string[]; label: string }) {
  return (
    <Section tone="ciruela" labelledBy="manifiesto">
      <div aria-hidden className="blob -right-40 top-10 size-[30rem] bg-malva/30 animate-drift-slow" />
      <h2 id="manifiesto" className="sr-only">
        {label}
      </h2>
      <ul className="relative flex flex-col gap-2 sm:gap-4">
        {lines.map((line, index) => (
          <li
            key={line}
            className={`font-serif text-[clamp(2.75rem,1.4rem+6.5vw,8rem)] leading-[0.98] text-crema ${index === lines.length - 1 ? "italic text-rosa" : ""} ${index === 1 ? "sm:pl-[12%]" : ""}`}
          >
            {line}
          </li>
        ))}
      </ul>
    </Section>
  );
}
