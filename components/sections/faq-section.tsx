import { faqHeading, type Faq } from "@/content/faqs";
import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading, type SectionTone } from "@/components/ui/section";
import { faqJsonLd } from "@/lib/seo";

type FaqSectionProps = {
  eyebrow?: string;
  title?: string;
  faqs: Faq[];
  tone?: SectionTone;
};

export function FaqSection({ eyebrow = faqHeading.eyebrow, title = faqHeading.title, faqs, tone = "crema" }: FaqSectionProps) {
  return (
    <Section tone={tone} labelledBy="preguntas">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionHeading eyebrow={eyebrow} title={title} id="preguntas" />
        </Reveal>
        <Reveal className="lg:col-span-8" delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </Section>
  );
}
