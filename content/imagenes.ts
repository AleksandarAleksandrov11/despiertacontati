import type { StaticImageData } from "next/image";
import mujerCampoTrigo from "@/public/images/mujer-campo-trigo-atardecer.webp";
import relajacionSillon from "@/public/images/relajacion-sillon-ojos-cerrados.webp";
import relajacionTaza from "@/public/images/relajacion-taza-ojos-cerrados.webp";
import hogarLuminoso from "@/public/images/hogar-luminoso-salon.webp";
import ventanaLuz from "@/public/images/salon-plantas-ventana.webp";
import claseOnline from "@/public/images/clase-meditacion-online.webp";
import libretaEscribir from "@/public/images/mujer-escribiendo-libreta.webp";
import cuencoSalvia from "@/public/images/cuenco-tibetano-salvia.webp";
import duchaLuminosa from "@/public/images/ducha-luminosa.webp";
import piedrasChakras from "@/public/images/piedras-cuarzo-amatista.webp";
import tarotBaraja from "@/public/images/tarot-baraja-abierta.webp";
import tarotFlores from "@/public/images/tarot-cartas-flores.webp";
import tazaVapor from "@/public/images/taza-manos-vapor.webp";
import meditacionAuriculares from "@/public/images/meditacion-auriculares.webp";
import tatiRetrato from "@/public/images/tati-buganvilla.webp";
import tatiSonrisa from "@/public/images/tati-sonrisa.webp";
import mujerLuzDorada from "@/public/images/mujer-luz-dorada-manos.webp";
import chakrasPiedras from "@/public/images/piedras-colores-chakras.webp";
import libroAlma from "@/public/images/libro-del-alma-luz.webp";
import tarotSol from "@/public/images/tarot-carta-sol.webp";
import hojasEstaciones from "@/public/images/hojas-estaciones.webp";
import cartasLunas from "@/public/images/cartas-fases-luna.webp";
import tarotLuna from "@/public/images/tarot-carta-luna.webp";
import agendaFlores from "@/public/images/agenda-flores.webp";
import tiradaCristales from "@/public/images/tirada-tarot-cristales.webp";
import tarotEnamorados from "@/public/images/tarot-enamorados-vela.webp";
import tarotAsOros from "@/public/images/tarot-as-de-oros.webp";
import cartasDoradas from "@/public/images/tarot-cartas-doradas.webp";
import tarotCuarzoRosa from "@/public/images/tarot-cuarzo-rosa.webp";
import tarotErmitano from "@/public/images/tarot-ermitano-luces.webp";
import losDosProgramas from "@/public/images/los-dos-programas.webp";
import matrizLectura from "@/public/images/matriz-del-destino-lectura.webp";
import matrizAnalisis from "@/public/images/matriz-del-destino-analisis.webp";
import mapa2027 from "@/public/images/mapa-2027-cartas.webp";
import escritorioVela from "@/public/images/escritorio-vela-portatil.webp";
import habitacionCortinas from "@/public/images/habitacion-cortinas-sol.webp";
import chakrasLino from "@/public/images/chakras-piedras-lino.webp";
import libroPaginasLuz from "@/public/images/libro-paginas-luz.webp";

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  position?: string;
};

export const imagenes = {
  mujerCampoTrigo: {
    src: mujerCampoTrigo,
    alt: "Mujer sonriente con vestido blanco y el pelo al viento en un campo de trigo al atardecer",
    position: "62% 40%",
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
  piedrasChakras: {
    src: piedrasChakras,
    alt: "Piedras pulidas de cuarzo y amatista en tonos rosa, lila y crema",
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
  meditacionAuriculares: {
    src: meditacionAuriculares,
    alt: "Mujer escuchando una meditación guiada con auriculares, sonriendo con los ojos cerrados",
    position: "50% 30%",
  },
  tatiRetrato: {
    src: tatiRetrato,
    alt: "Tatiana Guillem, Tati, sonriendo delante de una buganvilla en flor",
    position: "50% 46%",
  },
  tatiSonrisa: {
    src: tatiSonrisa,
    alt: "Tati sonriendo al aire libre",
    position: "45% 40%",
  },
  mujerLuzDorada: {
    src: mujerLuzDorada,
    alt: "Mujer sonriendo con los ojos cerrados y las manos juntas ante el pecho, envuelta en una luz dorada",
    position: "35% 50%",
  },
  chakrasPiedras: {
    src: chakrasPiedras,
    alt: "Piedras pulidas de los colores de los chakras junto a una bolsita de lino y hojas verdes sobre fondo blanco",
    position: "45% 55%",
  },
  libroAlma: {
    src: libroAlma,
    alt: "Manos sosteniendo un libro abierto del que brota una luz dorada de pequeñas luces, como un libro del alma",
    position: "50% 50%",
  },
  tarotSol: {
    src: tarotSol,
    alt: "Carta de El Sol del tarot sobre una baraja, junto a un ramillete de hierbas secas",
    position: "40% 40%",
  },
  hojasEstaciones: {
    src: hojasEstaciones,
    alt: "Cuatro hojas en los tonos de las estaciones, del rojo al verde, sobre madera azul",
    position: "50% 30%",
  },
  cartasLunas: {
    src: cartasLunas,
    alt: "Cartas de oráculo con las fases de la luna extendidas sobre una tela rosa",
    position: "50% 50%",
  },
  tarotLuna: {
    src: tarotLuna,
    alt: "Carta de La Luna del tarot sobre fondo blanco",
    position: "50% 50%",
  },
  agendaFlores: {
    src: agendaFlores,
    alt: "Agenda abierta con un bolígrafo y ramitas de paniculata rosa sobre fondo blanco",
    position: "60% 50%",
  },
  tiradaCristales: {
    src: tiradaCristales,
    alt: "Tirada de cartas del tarot sobre fondo blanco con cristales, una concha y un atado de salvia",
    position: "45% 50%",
  },
  tarotEnamorados: {
    src: tarotEnamorados,
    alt: "Carta de El Enamorado entre otras cartas del tarot sobre una mesa de madera, junto a una vela encendida",
    position: "50% 50%",
  },
  tarotAsOros: {
    src: tarotAsOros,
    alt: "Carta del As de Oros sobre la baraja del tarot y un paño de lino claro",
    position: "60% 50%",
  },
  cartasDoradas: {
    src: cartasDoradas,
    alt: "Dos cartas del tarot con detalles dorados colocadas una junto a otra sobre una superficie clara",
    position: "42% 60%",
  },
  tarotCuarzoRosa: {
    src: tarotCuarzoRosa,
    alt: "Cartas de tarot en tonos pastel abiertas en abanico junto a un corazón de cuarzo rosa",
    position: "50% 10%",
  },
  tarotErmitano: {
    src: tarotErmitano,
    alt: "Carta de El Ermitaño sobre una tela morada rodeada de pequeñas luces",
    position: "50% 50%",
  },
  losDosProgramas: {
    src: losDosProgramas,
    alt: "A la izquierda, una mujer con auriculares escuchando una meditación con los ojos cerrados; a la derecha, unas manos escribiendo en un cuaderno",
    position: "50% 50%",
  },
  matrizLectura: {
    src: matrizLectura,
    alt: "Diagrama de una Matriz del Destino con sus puntos de colores y números sobre fondo ciruela",
    position: "50% 50%",
  },
  matrizAnalisis: {
    src: matrizAnalisis,
    alt: "Matriz del Destino completa, con su octograma dorado y sus puntos de energía",
    position: "50% 50%",
  },
  mapa2027: {
    src: mapa2027,
    alt: "Abanico de cartas del tarot Rider-Waite bajo el título Mapa 2027, tu año en 24 cartas",
    position: "50% 50%",
  },
  escritorioVela: {
    src: escritorioVela,
    alt: "Vela encendida junto a una libreta abierta y un portátil en un escritorio",
    position: "35% 50%",
  },
  habitacionCortinas: {
    src: habitacionCortinas,
    alt: "Habitación luminosa con cortinas blancas atravesadas por una cálida luz de sol",
    position: "60% 50%",
  },
  chakrasLino: {
    src: chakrasLino,
    alt: "Piedras de los colores de los chakras sobre una bolsita de lino y una hoja con sus significados",
    position: "50% 55%",
  },
  libroPaginasLuz: {
    src: libroPaginasLuz,
    alt: "Libro abierto con las páginas en abanico iluminadas por la luz cálida del sol",
    position: "55% 50%",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof imagenes;
