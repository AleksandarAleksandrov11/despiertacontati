import { site } from "@/content/site";
import { BrandSymbol } from "@/components/ui/brand-symbol";

const script = `(function(){var d=document.documentElement;d.classList.add("js");try{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||sessionStorage.getItem("dct-intro")){d.dataset.intro="seen";return}sessionStorage.setItem("dct-intro","1");d.dataset.intro="play";setTimeout(function(){d.dataset.intro="seen"},1850)}catch(e){d.dataset.intro="seen"}})();`;

export function Intro() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <div aria-hidden className="intro fixed inset-0 z-[90] items-center justify-center overflow-hidden bg-crema">
        <div className="blob -left-32 -top-24 size-[28rem] bg-rosa-polvo" />
        <div className="blob -bottom-32 -right-24 size-[26rem] bg-lavanda" />
        <div className="relative flex flex-col items-center px-6 text-center">
          <span className="intro-symbol">
            <BrandSymbol size={132} className="h-auto w-[clamp(6.5rem,5rem+6vw,8.25rem)]" />
          </span>
          <p className="intro-logo mt-6 flex flex-col items-center leading-none">
            <span className="font-serif text-[clamp(2.6rem,1.9rem+3.2vw,4rem)] font-medium uppercase tracking-[0.07em] text-ciruela">
              Despierta
            </span>
            <span className="script-accent -mt-1 text-[clamp(2.4rem,1.8rem+2.8vw,3.6rem)] text-rosa-deep">con Tati</span>
          </p>
          <span className="intro-line mt-6 block h-px w-40 origin-center bg-dorado" />
          <p className="intro-logo mt-5 text-[0.72rem] uppercase tracking-[0.32em] text-ink-soft sm:text-xs">{site.brandLine}</p>
        </div>
      </div>
    </>
  );
}
