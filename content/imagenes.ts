import type { StaticImageData } from "next/image";
import mujerBrazosAbiertos from "@/public/images/mujer-brazos-abiertos-sol.webp";
import relajacionSillon from "@/public/images/relajacion-sillon-ojos-cerrados.webp";
import relajacionTaza from "@/public/images/relajacion-taza-ojos-cerrados.webp";
import hogarLuminoso from "@/public/images/hogar-luminoso-salon.webp";
import ventanaLuz from "@/public/images/salon-plantas-ventana.webp";
import claseOnline from "@/public/images/clase-meditacion-online.webp";
import libretaEscribir from "@/public/images/mujer-escribiendo-libreta.webp";
import salaLuminosa from "@/public/images/sala-luminosa-vacia.webp";
import cuencoSalvia from "@/public/images/cuenco-tibetano-salvia.webp";
import duchaLuminosa from "@/public/images/ducha-luminosa.webp";
import habitacionLuminosa from "@/public/images/habitacion-luminosa.webp";
import pendulo from "@/public/images/pendulo-piedras-chakras.webp";
import piedrasChakras from "@/public/images/piedras-cuarzo-amatista.webp";
import reikiSesion from "@/public/images/reiki-manos-sesion.webp";
import reikiRostro from "@/public/images/reiki-manos-sobre-rostro.webp";
import tarotBaraja from "@/public/images/tarot-baraja-abierta.webp";
import tarotFlores from "@/public/images/tarot-cartas-flores.webp";
import tazaVapor from "@/public/images/taza-manos-vapor.webp";
import velasCalma from "@/public/images/velas-calma.webp";
import meditacionAuriculares from "@/public/images/meditacion-auriculares.webp";
import tatiRetrato from "@/public/images/tati-retrato.webp";
import tatiSonrisa from "@/public/images/tati-sonrisa.webp";
import tatiTrabajandoPendulo from "@/public/images/tati-trabajando-pendulo.webp";

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  position?: string;
};

export const imagenes = {
  mujerBrazosAbiertos: {
    src: mujerBrazosAbiertos,
    alt: "Mujer sonriendo con los brazos abiertos en un campo bañado por la luz cálida del atardecer",
    position: "50% 40%",
  },
  relajacionSillon: {
    src: relajacionSillon,
    alt: "Mujer relajada apoyada en un sillón, con los ojos cerrados y gesto tranquilo",
    position: "50% 35%",
  },
  relajacionTaza: {
    src: relajacionTaza,
    alt: "Mujer con los ojos cerrados disfrutando de una taza caliente entre las manos",
    position: "50% 40%",
  },
  hogarLuminoso: {
    src: hogarLuminoso,
    alt: "Salón amplio y luminoso con grandes ventanales, plantas y el sol entrando sobre el suelo de madera",
    position: "50% 60%",
  },
  ventanaLuz: {
    src: ventanaLuz,
    alt: "Rincón de casa junto a la ventana con una planta grande, un sillón blanco y mucha luz natural",
  },
  claseOnline: {
    src: claseOnline,
    alt: "Mujer sonriente en casa frente a su portátil, con una taza entre las manos",
    position: "50% 30%",
  },
  libretaEscribir: {
    src: libretaEscribir,
    alt: "Mujer sonriendo mientras escribe a mano en una libreta, con luz clara",
    position: "78% 0%",
  },
  salaLuminosa: {
    src: salaLuminosa,
    alt: "Sala amplia y vacía con suelo de madera, plantas y luz de tarde entrando por la ventana",
  },
  cuencoSalvia: {
    src: cuencoSalvia,
    alt: "Manos tocando un cuenco tibetano junto a cuarzos y un atado de salvia sobre lino",
    position: "50% 30%",
  },
  duchaLuminosa: {
    src: duchaLuminosa,
    alt: "Ducha luminosa con luz natural, el sitio del ejercicio de la esponja de la gratitud",
    position: "50% 55%",
  },
  habitacionLuminosa: {
    src: habitacionLuminosa,
    alt: "Dormitorio luminoso con luz de mañana y una hortensia junto a la cama",
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
  velasCalma: {
    src: velasCalma,
    alt: "Velas encendidas con luz cálida junto a una ventana",
  },
  meditacionAuriculares: {
    src: meditacionAuriculares,
    alt: "Mujer escuchando una meditación guiada con auriculares, sonriendo con los ojos cerrados",
    position: "50% 30%",
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
  tatiTrabajandoPendulo: {
    src: tatiTrabajandoPendulo,
    alt: "Tati trabajando con el péndulo hebreo",
    position: "50% 40%",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof imagenes;
