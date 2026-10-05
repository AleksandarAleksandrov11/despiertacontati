import { ctaFinal } from "@/content/paginas";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section, type SectionTone } from "@/components/ui/section";
import { whatsappHref } from "@/lib/utils";

type CtaBlockProps = {
  title?: string;
  text?: string;
  tone?: SectionTone;
  whatsappMessage?: string;
  direct?: boolean;
};

export function CtaBlock({
  title = ctaFinal.title,
  text = ctaFinal.text,
  tone = "rosa",
  whatsappMessage,
  direct = false,
}: CtaBlockProps) {
  return (
    <Section tone={tone} labelledBy="cta-final" hideWhatsapp>
      <div aria-hidden className="blob left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 bg-lavanda/80 animate-drift-slow" />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <span aria-hidden className="mx-auto mb-10 block h-16 w-px bg-gradient-to-b from-transparent to-dorado" />
        <h2 id="cta-final" className="text-h1 italic">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lead text-ink-soft">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {direct ? (
            <>
              <Button href={whatsappHref(whatsappMessage)} magnetic icon={<WhatsappIcon size={18} />}>
                {site.cta.whatsapp}
              </Button>
              <Button href={`tel:${site.contact.phoneE164}`} variant="secondary">
                {site.contact.phoneDisplay}
              </Button>
            </>
          ) : (
            <>
              <Button href={site.cta.primary.href} magnetic>
                {site.cta.primary.label}
              </Button>
              <Button href={whatsappHref(whatsappMessage)} variant="secondary" icon={<WhatsappIcon size={18} />}>
                {site.cta.whatsapp}
              </Button>
            </>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
