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
    status: "Empezamos el 26 de noviembre",
    modality: "Online",
    text: "Meditamos en grupo desde casa. Solo necesitas un rato y ganas de parar.",
    cta: {
      kind: "whatsapp",
      label: "Quiero plaza",
      message: "Hola, Tati. Quiero plaza en el grupo de meditación online que empieza el 26 de noviembre.",
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
    id: "black-friday-meditacion",
    type: "Tienda",
    title: "Los dos programas de meditación por 34,80 €",
    status: "Black Friday, del 24 al 30 de noviembre",
    modality: "18 audios en MP3 y dos cuadernos",
    text: "Vuelve a ti y Transforma tu bienestar juntos, con su cuaderno de reflexión Mi espacio interior. Por separado cuestan 17,90 € y 27,90 €.",
    cta: { kind: "enlace", label: "Ver la oferta", href: "/tienda/los-dos-programas" },
    date: "2026-11-24",
    endDate: "2026-11-30",
  },
  {
    id: "meditacion-transforma-tu-bienestar",
    type: "Tienda",
    title: "Transforma tu bienestar",
    status: "Ya disponible en la tienda",
    modality: "Doce audios en MP3 y cuaderno",
    text: "12 semanas para cultivar tu equilibrio interior: una meditación guiada cada semana y Mi espacio interior, un cuaderno de reflexión e integración.",
    cta: { kind: "enlace", label: "Ver en la tienda", href: "/tienda/transforma-tu-bienestar" },
  },
];
