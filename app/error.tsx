"use client";

import { errorPage } from "@/content/paginas";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { whatsappHref } from "@/lib/utils";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-crema pb-20 pt-32">
      <div aria-hidden className="blob left-1/2 top-1/3 size-[26rem] -translate-x-1/2 bg-lavanda animate-drift" />
      <div className="container-page relative text-center">
        <h1 className="text-h1 italic">{errorPage.title}</h1>
        <p className="mx-auto mt-6 max-w-md text-lead text-ink-soft">{errorPage.text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={reset}>{errorPage.retry}</Button>
          <Button href={whatsappHref()} variant="secondary" icon={<WhatsappIcon size={18} />}>
            {site.cta.whatsapp}
          </Button>
        </div>
      </div>
    </section>
  );
}
