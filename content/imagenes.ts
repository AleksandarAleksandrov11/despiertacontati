import type { StaticImageData } from "next/image";
import amanecerPlaya from "@/public/images/amanecer-playa-mujer-caminando-vertical.webp";
import cuencoLibros from "@/public/images/cuenco-tibetano-libros.webp";
import cuencoSalvia from "@/public/images/cuenco-tibetano-salvia.webp";
import duchaLuminosa from "@/public/images/ducha-luminosa.webp";
import floresSecas from "@/public/images/flores-secas.webp";
import habitacionLuminosa from "@/public/images/habitacion-luminosa.webp";
import libretaVela from "@/public/images/libreta-vela.webp";
import meditacionEspaldas from "@/public/images/meditacion-de-espaldas.webp";
import meditacionCasa from "@/public/images/meditacion-en-casa.webp";
import grupoParque from "@/public/images/meditacion-grupo-parque.webp";
import grupoSala from "@/public/images/meditacion-grupo-sala.webp";
import pendulo from "@/public/images/pendulo-piedras-chakras.webp";
import piedrasChakras from "@/public/images/piedras-cuarzo-amatista.webp";
import reikiSesion from "@/public/images/reiki-manos-sesion.webp";
import reikiRostro from "@/public/images/reiki-manos-sobre-rostro.webp";
import tarotBaraja from "@/public/images/tarot-baraja-abierta.webp";
import tarotFlores from "@/public/images/tarot-cartas-flores.webp";
import tazaVapor from "@/public/images/taza-manos-vapor.webp";
import teCama from "@/public/images/te-en-la-cama.webp";
import costaAtardecer from "@/public/images/valencia-costa-atardecer.webp";
import lonja from "@/public/images/valencia-lonja.webp";
import naranjo from "@/public/images/valencia-naranjo.webp";
import playaPalmera from "@/public/images/valencia-playa-palmera.webp";
import velaMadera from "@/public/images/vela-madera.webp";
import velasCalma from "@/public/images/velas-calma.webp";
import meditacionCojin from "@/public/images/meditacion-cojin-luz.webp";
import meditacionSalaClara from "@/public/images/meditacion-sala-clara.webp";
import meditacionAuriculares from "@/public/images/meditacion-auriculares.webp";
import meditacionMar from "@/public/images/meditacion-mar-amanecer.webp";
import mudraAtardecer from "@/public/images/mudra-atardecer.webp";
import tatiRetrato from "@/public/images/tati-retrato.webp";
import tatiSonrisa from "@/public/images/tati-sonrisa.webp";
import tatiGrupoMeditacion from "@/public/images/tati-grupo-meditacion.webp";
import tatiSesionPendulo from "@/public/images/tati-sesion-pendulo.webp";
import tatiTrabajandoPendulo from "@/public/images/tati-trabajando-pendulo.webp";
import tatiCursoGrupo from "@/public/images/tati-curso-grupo.webp";

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  position?: string;
};

export const imagenes = {
  amanecerPlaya: {
    src: amanecerPlaya,
    alt: "Mujer caminando descalza por la orilla del mar al amanecer, con el cielo en tonos rosas",
    position: "50% 50%",
  },
  cuencoLibros: {
    src: cuencoLibros,
    alt: "Cuenco tibetano de latón con su maza sobre una pila de libros",
  },
  cuencoSalvia: {
    src: cuencoSalvia,
    alt: "Manos tocando un cuenco tibetano junto a cuarzos y un atado de salvia sobre lino",
    position: "50% 30%",
  },
  duchaLuminosa: {
    src: duchaLuminosa,
    alt: "Ducha luminosa con luz natural, el sitio de la meditación de la esponja de la gratitud",
    position: "50% 55%",
  },
  floresSecas: {
    src: floresSecas,
    alt: "Espigas y flores secas sobre fondo crema",
  },
  habitacionLuminosa: {
    src: habitacionLuminosa,
    alt: "Dormitorio luminoso con luz de mañana y una hortensia junto a la cama",
  },
  libretaVela: {
    src: libretaVela,
    alt: "Libreta, vela encendida y taza de té sobre una mesa clara",
  },
  meditacionEspaldas: {
    src: meditacionEspaldas,
    alt: "Mujer meditando de espaldas en una terraza de madera con luz cálida",
  },
  meditacionCasa: {
    src: meditacionCasa,
    alt: "Mujer meditando sentada en el suelo de casa, vista desde arriba",
  },
  grupoParque: {
    src: grupoParque,
    alt: "Grupo de personas meditando sobre esterillas en un parque al atardecer",
  },
  grupoSala: {
    src: grupoSala,
    alt: "Clase de meditación en grupo en una sala amplia y luminosa",
  },
  pendulo: {
    src: pendulo,
    alt: "Péndulo de cuarzo con piedras de los colores de los siete chakras",
    position: "60% 50%",
  },
  piedrasChakras: {
    src: piedrasChakras,
    alt: "Piedras pulidas de cuarzo y amatista en tonos rosa, lila y crema",
  },
  reikiSesion: {
    src: reikiSesion,
    alt: "Manos de la terapeuta apoyadas sobre la mano de una persona durante una sesión de Reiki",
  },
  reikiRostro: {
    src: reikiRostro,
    alt: "Sesión de Reiki con las manos de la terapeuta cerca del rostro de una mujer tumbada",
    position: "50% 40%",
  },
  tarotBaraja: {
    src: tarotBaraja,
    alt: "Baraja de tarot abierta en abanico sobre fondo claro",
  },
  tarotFlores: {
    src: tarotFlores,
    alt: "Cartas de tarot y oráculo sobre lino con flores naranjas",
  },
  tazaVapor: {
    src: tazaVapor,
    alt: "Mano sosteniendo una taza humeante en una terraza a primera hora",
  },
  teCama: {
    src: teCama,
    alt: "Taza de té y libro abierto sobre la cama con luz suave",
  },
  costaAtardecer: {
    src: costaAtardecer,
    alt: "Costa mediterránea al atardecer con el cielo en tonos rosas",
  },
  lonja: {
    src: lonja,
    alt: "Lonja de la Seda de Valencia con naranjos en primer plano",
  },
  naranjo: {
    src: naranjo,
    alt: "Naranjo cargado de naranjas bajo un cielo azul mediterráneo",
  },
  playaPalmera: {
    src: playaPalmera,
    alt: "Sombra de una palmera sobre la arena de una playa mediterránea",
  },
  velaMadera: {
    src: velaMadera,
    alt: "Vela encendida sobre una mesa de madera junto a unas flores secas",
  },
  velasCalma: {
    src: velasCalma,
    alt: "Velas encendidas con luz cálida junto a una ventana",
  },
  meditacionCojin: {
    src: meditacionCojin,
    alt: "Mujer meditando sentada en el suelo con un cojín, junto a una ventana con cortinas claras",
    position: "40% 50%",
  },
  meditacionSalaClara: {
    src: meditacionSalaClara,
    alt: "Mujer meditando con las manos juntas en una sala clara y luminosa",
    position: "60% 50%",
  },
  meditacionAuriculares: {
    src: meditacionAuriculares,
    alt: "Mujer escuchando una meditación guiada con auriculares y los ojos cerrados",
    position: "50% 30%",
  },
  meditacionMar: {
    src: meditacionMar,
    alt: "Mujer sentada frente al mar al amanecer, en calma",
    position: "65% 50%",
  },
  mudraAtardecer: {
    src: mudraAtardecer,
    alt: "Mano en postura de meditación con el sol del atardecer al fondo",
  },
  tatiRetrato: {
    src: tatiRetrato,
    alt: "Tatiana Guillem, Tati, terapeuta holística en Valencia",
    position: "50% 35%",
  },
  tatiSonrisa: {
    src: tatiSonrisa,
    alt: "Tati sonriendo al aire libre",
    position: "45% 40%",
  },
  tatiGrupoMeditacion: {
    src: tatiGrupoMeditacion,
    alt: "Grupo de meditación presencial en Valencia, sentado en círculo en una sala luminosa",
  },
  tatiSesionPendulo: {
    src: tatiSesionPendulo,
    alt: "Práctica de péndulo hebreo durante una formación de Despierta con Tati",
  },
  tatiTrabajandoPendulo: {
    src: tatiTrabajandoPendulo,
    alt: "Trabajo con el péndulo hebreo sobre el manual de la formación",
    position: "50% 40%",
  },
  tatiCursoGrupo: {
    src: tatiCursoGrupo,
    alt: "Alumnas y alumnos practicando con el péndulo hebreo en un curso presencial en Valencia",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof imagenes;

export const photoMarquee: ImageKey[] = [
  "floresSecas",
  "velasCalma",
  "playaPalmera",
  "piedrasChakras",
  "cuencoLibros",
  "naranjo",
  "teCama",
  "pendulo",
  "tazaVapor",
  "lonja",
  "mudraAtardecer",
];
