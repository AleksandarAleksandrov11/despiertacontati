export type AnuncioTipo = "Grupo" | "Guía" | "Tienda" | "Novedad";

export type Anuncio = {
  id: string;
  type: AnuncioTipo;
  title: string;
  status: string;
  modality: string;
  text: string;
  cta:
    | { kind: "whatsapp"; label: string; message: string }
    | { kind: "enlace"; label: string; href: string };
  date?: string;
  endDate?: string;
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
  },
  {
    id: "guia-tu-primera-pausa",
    type: "Guía",
    title: "Guía gratuita «Tu primera pausa»",
    status: "Ya disponible",
    modality: "Descarga gratuita",
    text: "Una guía sencilla para empezar a meditar y tu primera meditación guiada.",
    cta: { kind: "enlace", label: "Descárgala", href: "/tu-primera-pausa" },
  },
  {
    id: "mapa-2027-black-friday",
    type: "Tienda",
    title: "Mapa 2027",
    status: "Black Friday, del 24 al 30 de noviembre",
    modality: "En vídeo o en directo",
    text: "Tu lectura anual de tarot: 24 cartas para tu punto de partida, tus 12 meses y 5 áreas de tu vida. Ahora, con tu Carta Personal de 2027 de regalo.",
    cta: { kind: "enlace", label: "Ver el Mapa 2027", href: "/tienda/mapa-2027" },
    date: "2026-11-24",
    endDate: "2026-11-30",
  },
  {
    id: "meditacion-12-semanas",
    type: "Tienda",
    title: "Tu camino de 12 semanas de meditación",
    status: "Ya disponible en la tienda",
    modality: "Doce audios en MP3",
    text: "Una meditación guiada para cada semana, con orden de escucha y guía de uso, para crear el hábito de meditar paso a paso.",
    cta: { kind: "enlace", label: "Ver en la tienda", href: "/tienda/camino-12-semanas-meditacion" },
  },
];
