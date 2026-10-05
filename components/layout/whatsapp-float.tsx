"use client";

import { AnimatePresence, m } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { WhatsappIcon } from "@/components/ui/icons";
import { useConsent } from "./consent";
import { whatsappHref } from "@/lib/utils";

export function WhatsappFloat() {
  const pathname = usePathname();
  const { consent, ready, panelOpen } = useConsent();
  const [scrolled, setScrolled] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        setBlocked(visible.size > 0);
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-hide-whatsapp]").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const show = scrolled && !blocked && ready && Boolean(consent) && !panelOpen;

  return (
    <AnimatePresence>
      {show && (
        <m.a
          key="whatsapp"
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={site.ui.whatsappFloat}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-30 inline-flex size-14 items-center justify-center rounded-full border border-linea bg-crema/90 text-ciruela shadow-[0_12px_30px_-12px_rgba(63,46,58,0.45)] backdrop-blur-md md:hidden"
        >
          <WhatsappIcon size={26} />
        </m.a>
      )}
    </AnimatePresence>
  );
}
