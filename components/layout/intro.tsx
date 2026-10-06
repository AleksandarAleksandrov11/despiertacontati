import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { LotoIcon } from "@/components/ui/icons";

const chakras = [
  "var(--color-chakra-raiz)",
  "var(--color-chakra-sacro)",
  "var(--color-chakra-plexo)",
  "var(--color-chakra-corazon)",
  "var(--color-chakra-garganta)",
  "var(--color-chakra-tercer-ojo)",
  "var(--color-chakra-corona)",
];

const script = `(function(){try{var d=document.documentElement;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||sessionStorage.getItem("dct-intro")){d.dataset.intro="seen";return}sessionStorage.setItem("dct-intro","1");d.dataset.intro="play";setTimeout(function(){d.dataset.intro="seen"},3600)}catch(e){document.documentElement.dataset.intro="seen"}})();`;

export function Intro() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <div aria-hidden className="intro fixed inset-0 z-[90] items-center justify-center overflow-hidden bg-crema">
        <div className="blob -left-32 -top-24 size-[28rem] bg-rosa-polvo" />
        <div className="blob -bottom-32 -right-24 size-[26rem] bg-lavanda" />
        <div className="relative flex flex-col items-center px-6 text-center">
          <span className="intro-lotus text-rosa-deep">
            <LotoIcon size={64} strokeWidth={1} />
          </span>
          <p className="intro-logo mt-6 flex items-baseline gap-2 leading-none">
            <span className="script-accent text-[clamp(3.5rem,2.5rem+4vw,5.5rem)] text-rosa-deep">despierta</span>
            <span className="font-serif text-xl italic text-ink-soft">con</span>
            <span className="script-accent text-[clamp(3.5rem,2.5rem+4vw,5.5rem)] text-malva-deep">Tati</span>
          </p>
          <span className="intro-line mt-6 block h-px w-40 origin-center bg-dorado" />
          <p className="intro-logo mt-5 font-serif text-lg italic text-ink-soft sm:text-xl">{site.tagline}</p>
          <span className="mt-8 flex gap-2.5">
            {chakras.map((color, index) => (
              <span
                key={color}
                className="intro-dot size-2 rounded-full"
                style={{ backgroundColor: color, "--i": index } as CSSProperties}
              />
            ))}
          </span>
        </div>
      </div>
    </>
  );
}
