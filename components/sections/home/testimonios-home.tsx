import { inicio } from "@/content/paginas";
import { testimonios } from "@/content/testimonios";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";

export function TestimoniosHome() {
  return (
    <Section tone="lavanda" labelledBy="testimonios-title" bare className="section-pad">
      <div className="container-page flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <Reveal>
          <SectionHeading eyebrow={inicio.testimonios.eyebrow} title={inicio.testimonios.title} id="testimonios-title" />
        </Reveal>
        <Reveal>
          <Button href="/testimonios" variant="link">
            {inicio.testimonios.link}
          </Button>
        </Reveal>
      </div>
      <Reveal className="mt-12">
        <TestimonialsCarousel items={testimonios} label={inicio.testimonios.title} short />
      </Reveal>
    </Section>
  );
}
