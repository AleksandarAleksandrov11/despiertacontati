import { guia } from "./guia";
import { site } from "./site";

export const ebook = {
  title: guia.title,
  kicker: guia.kicker,
  subtitle: "Una guía sencilla para empezar a meditar, con tu primera meditación guiada.",
  author: `${site.person.shortName}, ${site.name}`,
  audioUrl: `${site.url}${guia.audio}`,
  bienvenida: {
    title: "Bienvenida",
    paragraphs: [
      "Hola, soy Tati. Si tienes esta guía en tus manos es porque algo en ti te está pidiendo parar. Y eso ya es un primer paso.",
      "Llevo más de veinte años acompañando a personas que viven con prisa, con estrés o con la sensación de haber perdido el rumbo. Muchas me dicen lo mismo: «yo no sé meditar». Esta guía es para ellas, y para ti.",
      "No necesitas cojín, silencio perfecto ni el mejor outfit. Solo unos minutos y ganas de dedicarte un rato.",
    ],
  },
  queEs: {
    title: "Qué es meditar",
    paragraphs: [
      "Meditar es parar un momento y darte cuenta de lo que está pasando: en tu cuerpo, en tu respiración y en tu cabeza.",
      "Es entrenar la atención, igual que entrenas un músculo. Al principio cuesta un poco y luego sale solo.",
    ],
    noEs: {
      title: "Lo que no es",
      items: [
        "No es dejar la mente en blanco.",
        "No es sentarte en una postura imposible.",
        "No es algo que se hace bien o mal.",
      ],
    },
    cierre: "Meditar es volver, una y otra vez, a lo que está pasando ahora. Nada más, y nada menos.",
  },
  claves: {
    title: "Cinco claves para empezar",
    items: [
      {
        title: "Poco a poco",
        text: "Unos minutos al día valen más que una hora de vez en cuando. Empieza con poco y ve sumando.",
      },
      {
        title: "Tu momento",
        text: "Al despertar, después de comer o antes de dormir. El mejor momento es el que puedes repetir.",
      },
      {
        title: "Cómoda",
        text: "En una silla, en el sofá o tumbada. No hace falta ninguna postura especial, solo que estés a gusto.",
      },
      {
        title: "Sin pelearte con tu mente",
        text: "Tu cabeza se irá a otra parte, y está bien. Cuando te des cuenta, vuelve a la respiración sin regañarte.",
      },
      {
        title: "En lo cotidiano",
        text: "Puedes meditar fregando, en la ducha o caminando. Lo que cuenta es parar un momento y darte cuenta.",
      },
    ],
  },
  freno: {
    title: "La Meditación Freno",
    intro:
      "Tu primera meditación guiada. Una práctica para frenar, bajar revoluciones y volver a tu respiración cuando el día se acelera.",
    pasos: {
      title: "Antes de empezar",
      items: [
        "Busca un momento en el que nadie te interrumpa.",
        "Siéntate o túmbate en una postura cómoda.",
        "Si quieres, ponte auriculares. Ayudan, pero no son imprescindibles.",
        "Dale al play y déjate guiar.",
      ],
    },
    listen: "Escúchala aquí",
    qr: "O escanea el código con la cámara del móvil",
  },
  despues: {
    title: "Y ahora, sigue",
    paragraphs: [
      "Ya has hecho tu primera pausa. Si te apetece seguir, aquí tienes por dónde.",
    ],
    items: [
      { title: "Pausa y vuelve a ti", text: "Cinco meditaciones guiadas para escuchar a tu ritmo, en la tienda." },
      { title: "Clases de meditación", text: "En grupo, online y presenciales en Valencia." },
      { title: "Escríbeme", text: `${site.contact.phoneDisplay} · ${site.contact.email}` },
    ],
    web: site.url.replace("https://www.", ""),
    instagram: site.social.instagram.label,
    firma: "Un abrazo,",
    nombre: "Tati",
  },
  aviso:
    "Esta guía y la meditación son prácticas de bienestar. Son complementarias y no sustituyen la atención médica ni psicológica.",
  footer: `${site.name} · ${site.url.replace("https://www.", "")}`,
};
