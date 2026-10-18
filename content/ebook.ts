import { guia } from "./guia";
import { site } from "./site";

export type EbookBlock =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: { lead?: string; text: string }[] }
  | { type: "highlight"; text: string }
  | { type: "quote"; text: string }
  | { type: "note"; title: string; text: string }
  | { type: "keys"; items: { title: string; text: string }[] }
  | { type: "listen"; eyebrow: string; title: string; link: string; qr: string }
  | { type: "question"; title: string; text: string }
  | { type: "lines"; count: number };

export type EbookChapter = {
  number: string;
  title: string;
  subtitle?: string;
  blocks: EbookBlock[];
};

export const ebook = {
  brand: "Medita con Tati",
  title: guia.title,
  kicker: "Una guía sencilla para empezar a meditar",
  coverQuote: ["No necesitas hacerlo perfecto.", "Solo darte un momento para volver a ti."],
  coverText: "Una primera experiencia para escuchar, observar y empezar a practicar a tu ritmo.",
  audioUrl: `${site.url}${guia.audio}`,
  footer: `Medita con Tati · ${site.name}`,
  chapters: [
    {
      number: "01",
      title: "Bienvenida",
      blocks: [
        { type: "lead", text: "Qué alegría que estés aquí." },
        {
          type: "p",
          text: "Si has llegado hasta esta guía, quizá llevas tiempo pensando en meditar, pero no sabes por dónde empezar. Tal vez crees que necesitas mucho tiempo, una mente tranquila o saber hacerlo de una manera determinada.",
        },
        {
          type: "p",
          text: "Quiero proponerte algo más sencillo: regalarte una pausa y observar qué sucede, sin exigirte nada.",
        },
        {
          type: "p",
          text: "Esta guía está pensada para ti si nunca has meditado o si lo has intentado y has sentido que te distraías demasiado. Aquí encontrarás unas ideas básicas, unas pautas para comenzar y una primera práctica guiada: la Meditación Freno.",
        },
        { type: "h3", text: "Cómo utilizar esta guía" },
        {
          type: "p",
          text: "Lee las páginas a tu ritmo. Después, busca un momento tranquilo para escuchar el audio y, al terminar, dedica unos minutos a responder las preguntas de reflexión. No hay respuestas correctas ni una experiencia que debas conseguir.",
        },
        {
          type: "highlight",
          text: "Tu objetivo hoy no es convertirte en una persona experta en meditación. Es simplemente empezar.",
        },
        {
          type: "note",
          title: "Una nota para cuidarte",
          text: "Puedes practicar sentado/a y con los ojos abiertos o cerrados, como te resulte más cómodo. Si en algún momento la práctica te genera malestar, puedes detener el audio, abrir los ojos y volver a una actividad cotidiana que te ayude a sentirte presente.",
        },
      ],
    },
    {
      number: "02",
      title: "¿Qué significa meditar?",
      blocks: [
        {
          type: "p",
          text: "Meditar es dedicar un tiempo a prestar atención de forma consciente a lo que está ocurriendo en el momento presente. Puedes observar la respiración, las sensaciones del cuerpo, los sonidos o los pensamientos, sin tener que seguir cada uno de ellos.",
        },
        {
          type: "p",
          text: "No se trata de controlar todo lo que aparece, sino de darte cuenta de ello y elegir, una y otra vez, dónde quieres colocar tu atención.",
        },
        { type: "h3", text: "Meditar no significa…" },
        {
          type: "list",
          items: [
            { lead: "Dejar la mente en blanco.", text: "Los pensamientos seguirán apareciendo; no necesitas eliminarlos." },
            { lead: "Sentirte en calma todo el tiempo.", text: "Cada práctica puede ser diferente." },
            { lead: "No distraerte nunca.", text: "La distracción forma parte de la experiencia." },
            {
              lead: "Hacerlo de una forma perfecta.",
              text: "No hay una postura ni una sensación única que tengas que alcanzar.",
            },
          ],
        },
        { type: "h3", text: "Entonces, ¿qué hago cuando me distraigo?" },
        {
          type: "p",
          text: "Primero, date cuenta de que tu atención se ha ido. Después, sin enfadarte contigo, vuelve suavemente al punto que habías elegido: por ejemplo, la respiración o la voz que te guía.",
        },
        { type: "quote", text: "Darte cuenta y volver también es practicar." },
        {
          type: "highlight",
          text: "No necesitas conseguir una mente vacía. Puedes empezar con la mente que tienes hoy.",
        },
      ],
    },
    {
      number: "03",
      title: "Cinco claves para empezar",
      blocks: [
        {
          type: "keys",
          items: [
            {
              title: "Empieza de forma sencilla",
              text: "No necesitas preparar un espacio especial. Busca un lugar donde puedas estar unos minutos con cierta comodidad y menos interrupciones.",
            },
            {
              title: "Adopta una postura cómoda y despierta",
              text: "Puedes sentarte en una silla, apoyar los pies en el suelo y dejar las manos descansando. Intenta estar cómodo/a sin necesidad de mantener una postura rígida.",
            },
            {
              title: "Permite que la respiración sea natural",
              text: "No hace falta respirar de una manera determinada. Si eliges observar la respiración, nota cómo entra y sale el aire, sin forzarla.",
            },
            {
              title: "No luches contra tus pensamientos",
              text: "Si aparece la lista de tareas, un recuerdo o una preocupación, reconoce que tu mente se ha ido a otra parte. No tienes que resolverlo ahora; puedes volver a la práctica.",
            },
            {
              title: "Practica con amabilidad",
              text: "Evita evaluar la sesión como buena o mala. En lugar de preguntarte si lo has hecho bien, prueba a preguntarte qué has observado.",
            },
          ],
        },
        {
          type: "highlight",
          text: "Una práctica breve y realista puede ayudarte a crear continuidad. Elige un momento que encaje con tu vida, no una rutina imposible de mantener.",
        },
      ],
    },
    {
      number: "04",
      title: "Tu primera práctica",
      subtitle: "Meditación Freno",
      blocks: [
        {
          type: "p",
          text: "Ahora que tienes unas ideas básicas, te invito a escuchar la Meditación Freno. Deja que la voz te acompañe y sigue las indicaciones a tu ritmo. No necesitas memorizar nada ni anticipar lo que va a ocurrir.",
        },
        { type: "h3", text: "Antes de empezar" },
        {
          type: "list",
          items: [
            { text: "Busca un lugar en el que puedas estar sin interrupciones, si es posible." },
            { text: "Ponte en una postura cómoda y segura." },
            { text: "Si lo necesitas, ajusta el volumen y utiliza auriculares." },
            { text: "Recuerda que puedes abrir los ojos o detener el audio cuando quieras." },
          ],
        },
        {
          type: "listen",
          eyebrow: "Escucha aquí tu meditación",
          title: "Meditación Freno",
          link: "Pulsa el enlace para escucharla o descargarla",
          qr: "O escanea el código con la cámara del móvil",
        },
        {
          type: "p",
          text: "No hay una forma correcta de sentirte durante la práctica. Quizá notes calma, quizá aparezcan pensamientos o quizá simplemente estés escuchando. Todo eso puede formar parte de tu experiencia de hoy.",
        },
      ],
    },
    {
      number: "05",
      title: "Después de meditar",
      blocks: [
        {
          type: "p",
          text: "Tómate un momento antes de continuar con tu día. No necesitas analizarlo todo; basta con observar tu experiencia con curiosidad.",
        },
        {
          type: "question",
          title: "1. ¿Qué has observado durante la práctica?",
          text: "¿Has notado la respiración, sensaciones del cuerpo, sonidos, pensamientos, emociones o algo diferente?",
        },
        { type: "lines", count: 2 },
        {
          type: "question",
          title: "2. ¿Qué ha ocurrido cuando te has distraído?",
          text: "¿Te has dado cuenta enseguida o después de un rato? ¿Cómo has vuelto a la práctica?",
        },
        { type: "lines", count: 2 },
        {
          type: "question",
          title: "3. ¿Qué te gustaría llevarte de esta experiencia?",
          text: "Puede ser una sensación, una idea, una dificultad que has descubierto o simplemente la decisión de volver a intentarlo.",
        },
        { type: "lines", count: 2 },
        {
          type: "highlight",
          text: "No evalúes tu práctica por lo tranquila que hayas terminado. La observación honesta ya es un buen punto de partida.",
        },
      ],
    },
    {
      number: "06",
      title: "Pequeñas pausas para tu día",
      blocks: [
        {
          type: "p",
          text: "No hace falta reservar siempre un momento formal para practicar la atención. También puedes probar a estar más presente en actividades que ya forman parte de tu rutina.",
        },
        { type: "h3", text: "Prueba una pausa cotidiana" },
        {
          type: "list",
          items: [
            {
              lead: "Antes de responder:",
              text: "haz una pausa breve y observa cómo te encuentras antes de contestar un mensaje.",
            },
            { lead: "Al tomar una bebida:", text: "nota el calor de la taza, el aroma y el sabor de los primeros sorbos." },
            { lead: "Al caminar:", text: "siente el contacto de los pies con el suelo y observa lo que te rodea." },
            {
              lead: "Al cambiar de tarea:",
              text: "detente un instante, respira con naturalidad y reconoce qué vas a hacer ahora.",
            },
          ],
        },
        {
          type: "p",
          text: "Elige una sola idea para probar hoy. No necesitas hacerlas todas ni añadir más obligaciones a tu día.",
        },
        { type: "h3", text: "Un pequeño compromiso contigo" },
        { type: "p", text: "¿En qué momento de tu día podrías regalarte una pausa consciente?" },
        { type: "lines", count: 2 },
      ],
    },
  ] satisfies EbookChapter[],
  gracias: {
    title: "Gracias por empezar",
    paragraphs: [
      "Meditar no consiste en convertirte en otra persona. Es una oportunidad para observarte, volver al presente y practicar una relación más consciente con lo que estás viviendo.",
      "Habrá días en los que te resulte fácil y otros en los que te distraigas más. No necesitas hacerlo perfecto: puedes volver a empezar, una pausa cada vez.",
    ],
    sign: "Con cariño,",
    name: "Tati · Medita con Tati",
    web: site.url.replace("https://www.", ""),
    instagram: site.social.instagram.label,
  },
  aviso:
    "Este material es educativo y de bienestar general. No sustituye la atención sanitaria ni psicológica. Adapta la práctica a tus necesidades y detente si te genera malestar.",
};
