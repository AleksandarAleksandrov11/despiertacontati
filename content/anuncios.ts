export type AnuncioTipo = "Grupo" | "Curso" | "Meditación" | "Novedad";

export type Anuncio = {
  id: string;
  type: AnuncioTipo;
  title: string;
  status: string;
  modality: string;
  text: string;
  cta:
    | { kind: "whatsapp"; label: string; message: string }
    | { kind: "contacto"; label: string; topic: string };
  date?: string;
  endDate?: string;
  location?: "online" | "valencia";
};

export const anuncios: Anuncio[] = [
  {
    id: "grupo-meditacion-online",
    type: "Grupo",
    title: "Grupo de meditación online",
    status: "Abre próximamente",
    modality: "Online",
    text: "Meditamos juntas desde casa. Solo necesitas un rato y ganas de parar.",
    cta: {
      kind: "whatsapp",
      label: "Quiero plaza",
      message: "Hola, Tati. Quiero plaza en el grupo de meditación online.",
    },
    location: "online",
  },
  {
    id: "grupo-meditacion-valencia",
    type: "Grupo",
    title: "Grupo de meditación presencial en Valencia",
    status: "Abre próximamente",
    modality: "Presencial en Valencia",
    text: "Un grupo para meditar en compañía, cara a cara, en Valencia.",
    cta: {
      kind: "whatsapp",
      label: "Quiero plaza",
      message: "Hola, Tati. Quiero plaza en el grupo de meditación presencial en Valencia.",
    },
    location: "valencia",
  },
  {
    id: "cursos-reiki",
    type: "Curso",
    title: "Cursos de Reiki",
    status: "Próximas fechas",
    modality: "Valencia y online",
    text: "Pide información y te cuento las próximas fechas.",
    cta: { kind: "contacto", label: "Pide información", topic: "curso-reiki" },
  },
  {
    id: "meditacion-esponja-gratitud",
    type: "Meditación",
    title: "Meditación \"La esponja de la gratitud\"",
    status: "Ya disponible",
    modality: "Grabada",
    text: "Para hacer en la ducha. Te la envío por WhatsApp.",
    cta: {
      kind: "whatsapp",
      label: "Quiero esta meditación",
      message: "Hola, Tati. Quiero la meditación \"La esponja de la gratitud\". ¿Cómo me la envías?",
    },
  },
];
