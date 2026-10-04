export type TestimonioServicio = "Reiki" | "Meditación" | "Tarot";

export type Testimonio = {
  name: string;
  service: TestimonioServicio;
  text: string;
};

export const testimonios: Testimonio[] = [
  {
    name: "Marta G.",
    service: "Reiki",
    text: "Llegué después de una separación, con un nudo en el pecho que no se iba. Salí de la primera sesión más ligera y esa noche descansé. Hacía semanas que no me pasaba.",
  },
  {
    name: "Lucía R.",
    service: "Meditación",
    text: "Yo era de las que decía que no sabía meditar. Ahora lo hago fregando los platos y me río de mí misma.",
  },
  {
    name: "Carmen V.",
    service: "Tarot",
    text: "No me dijo lo que tenía que hacer. Me ayudó a ver lo que ya sabía y no me atrevía a mirar.",
  },
  {
    name: "Elena S.",
    service: "Reiki",
    text: "Tati va al grano. Sin rollos raros. Te explica lo que hace y por qué, y eso a mí me dio mucha confianza.",
  },
  {
    name: "Pilar M.",
    service: "Meditación",
    text: "La esponja de la gratitud se ha quedado en mi rutina. Un rato en la ducha y empiezo el día de otra manera.",
  },
  {
    name: "Ana B.",
    service: "Tarot",
    text: "Fui con mil dudas sobre cambiar de trabajo. Salí con una decisión y, lo más importante, tranquila con ella.",
  },
  {
    name: "Rosa T.",
    service: "Reiki",
    text: "Hice el curso de Reiki con ella y ahora lo uso en casa, conmigo y con los míos. Enseña con paciencia y mucho sentido común.",
  },
  {
    name: "Nuria F.",
    service: "Meditación",
    text: "Medito con ella online desde el sofá de casa y funciona. Su voz calma.",
  },
  {
    name: "Sara L.",
    service: "Tarot",
    text: "Me dijo que primero tocaba Reiki y luego tarot. Tenía razón: con la cabeza a mil no habría escuchado nada de lo que salió en las cartas.",
  },
];

export const frasesDestacadas = [
  "Tati va al grano.",
  "Me ayudó a ver lo que ya sabía.",
  "Salí más ligera.",
  "Su voz calma.",
  "Sin rollos raros.",
  "Tranquila con mi decisión.",
];

export const testimonioFiltros = ["Todos", "Reiki", "Meditación", "Tarot"] as const;
