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
    id: "meditaciones-pausa-y-vuelve-a-ti",
    type: "Tienda",
    title: "Meditaciones «Pausa y vuelve a ti»",
    status: "Ya disponible en la tienda",
    modality: "Cinco audios en MP3",
    text: "Cinco meditaciones guiadas para volver a la respiración y explorar el cuerpo y los sentidos a tu ritmo.",
    cta: { kind: "enlace", label: "Ver en la tienda", href: "/tienda/pausa-y-vuelve-a-ti" },
  },
];
