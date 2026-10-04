export type Meditacion = {
  slug: string;
  title: string;
  moment: string;
  text: string;
  accent: string;
};

export const meditaciones: Meditacion[] = [
  {
    slug: "la-esponja-de-la-gratitud",
    title: "La esponja de la gratitud",
    moment: "Para la ducha",
    text: "Convierte la ducha de cada día en un rato de agradecimiento a tu cuerpo.",
    accent: "var(--color-chakra-garganta)",
  },
  {
    slug: "bajar-revoluciones",
    title: "Bajar revoluciones",
    moment: "Para momentos de ansiedad",
    text: "Cuando todo va demasiado deprisa y necesitas volver a respirar.",
    accent: "var(--color-chakra-corazon)",
  },
  {
    slug: "dormir-en-calma",
    title: "Dormir en calma",
    moment: "Para antes de dormir",
    text: "Para soltar el día y llegar a la cama con la cabeza en silencio.",
    accent: "var(--color-chakra-corona)",
  },
  {
    slug: "claridad-antes-de-decidir",
    title: "Claridad antes de decidir",
    moment: "Para cuando tienes que elegir",
    text: "Para escucharte antes de tomar una decisión que te importa.",
    accent: "var(--color-chakra-plexo)",
  },
];

export const meditacionWhatsapp = (title: string) =>
  `Hola, Tati. Quiero la meditación "${title}". ¿Cómo me la envías?`;
