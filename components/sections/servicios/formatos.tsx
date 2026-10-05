import { formatos, serviciosPage } from "@/content/servicios";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { whatsappHref } from "@/lib/utils";

export function Formatos() {
  return (
    <Section tone="crema" labelledBy="formatos-title">
      <Reveal>
        <SectionHeading eyebrow={serviciosPage.formatos.eyebrow} title={serviciosPage.formatos.title} id="formatos-title" />
      </Reveal>
      <RevealGroup as="ul" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {formatos.map((formato, index) => (
          <RevealItem as="li" key={formato.title}>
            <TiltCard className="h-full" innerClassName="flex h-full flex-col p-7">
              <span className="font-serif text-lg italic text-ink-soft">0{index + 1}</span>
              <h3 className="mt-6 text-h3">{formato.title}</h3>
              <p className="mt-3 flex-1 text-ink-soft">{formato.text}</p>
              <div className="mt-6">
                <Button href={formato.cta.whatsapp ? whatsappHref(formato.cta.whatsapp) : (formato.cta.href ?? "/contacto")} variant="link">
                  {formato.cta.label}
                </Button>
              </div>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
