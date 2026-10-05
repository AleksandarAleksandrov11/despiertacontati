import { keywordsMarquee } from "@/content/site";
import { Marquee } from "@/components/ui/marquee";

export function KeywordMarquee() {
  return (
    <div className="border-y border-ciruela/10 bg-crema py-7 sm:py-9">
      <Marquee duration={55}>
        {keywordsMarquee.map((keyword) => (
          <span key={keyword.label} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-serif text-[clamp(2rem,1.5rem+2.4vw,3.75rem)] italic leading-none text-ciruela sm:px-10">
              {keyword.label}
            </span>
            <span aria-hidden className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: keyword.color }} />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
