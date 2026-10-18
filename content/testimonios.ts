export type Testimonio = {
  name: string;
  service: string;
  text: string;
  short: string;
};

export const testimonios: Testimonio[] = [];

export const hayTestimonios = testimonios.length > 0;
