import { inicio } from "@/content/paginas";
import { hayTestimonios, testimonios } from "@/content/testimonios";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";

export function TestimoniosHome() {
  if (!hayTestimonios) return null;
  return (
    <Section tone="lavanda" labelledBy="testimonios-title" bare className="section-pad">
      <div className="container-page flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <SectionHeading eyebrow={inicio.testimonios.eyebrow} title={inicio.testimonios.title} id="testimonios-title" />
        </div>
        <div>
          <Button href="/testimonios" variant="link">
            {inicio.testimonios.link}
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <TestimonialsCarousel items={testimonios} label={inicio.testimonios.title} short />
      </div>
    </Section>
  );
}
