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
import piedrasChakras from "@/public/images/piedras-cuarzo-amatista.webp";
import tarotBaraja from "@/public/images/tarot-baraja-abierta.webp";
import tarotFlores from "@/public/images/tarot-cartas-flores.webp";
import tazaVapor from "@/public/images/taza-manos-vapor.webp";
import meditacionAuriculares from "@/public/images/meditacion-auriculares.webp";
import tatiRetrato from "@/public/images/tati-retrato.webp";
import tatiSonrisa from "@/public/images/tati-sonrisa.webp";
import tatiTrabajandoPendulo from "@/public/images/tati-trabajando-pendulo.webp";
import reikiManosLuz from "@/public/images/reiki-manos-luz.webp";
import manosCorazon from "@/public/images/manos-sobre-el-corazon.webp";
import descansoLuz from "@/public/images/descanso-luz-cortina.webp";
import chakrasPiedras from "@/public/images/piedras-colores-chakras.webp";
import libroAlma from "@/public/images/libro-del-alma-luz.webp";
import pausaCojin from "@/public/images/pausa-cojin-cortina.webp";
import meditacionSalaBlanca from "@/public/images/meditacion-sala-blanca.webp";
import manoMudra from "@/public/images/mano-gesto-meditacion.webp";
import meditacionPorche from "@/public/images/meditacion-porche-luz.webp";
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
import diagramaCeleste from "@/public/images/diagrama-celeste-antiguo.webp";
import cartaCircular from "@/public/images/carta-circular-dibujo.webp";
import tiradaSuelo from "@/public/images/tirada-tarot-suelo.webp";
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
  reikiManosLuz: {
    src: reikiManosLuz,
    alt: "Manos que flotan sobre el cuello y el rostro de una persona tumbada, bañadas por una luz cálida de sol",
    position: "50% 35%",
  },
  manosCorazon: {
    src: manosCorazon,
    alt: "Mujer con blusa de flores y las dos manos apoyadas sobre el corazón",
    position: "50% 50%",
  },
  descansoLuz: {
    src: descansoLuz,
    alt: "Mujer recostada en casa con los ojos cerrados y el rostro hacia la luz cálida que entra por la cortina",
    position: "62% 40%",
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
  pausaCojin: {
    src: pausaCojin,
    alt: "Mujer sentada en el suelo junto a una cortina blanca, abrazando un cojín en un momento de pausa",
    position: "50% 50%",
  },
  meditacionSalaBlanca: {
    src: meditacionSalaBlanca,
    alt: "Mujer meditando con los ojos cerrados y las manos unidas en una sala blanca y luminosa",
    position: "50% 50%",
  },
  manoMudra: {
    src: manoMudra,
    alt: "Mano en gesto de meditación apoyada sobre la rodilla, con una pulsera de cuentas y fondo verde",
    position: "35% 40%",
  },
  meditacionPorche: {
    src: meditacionPorche,
    alt: "Mujer meditando de espaldas en un porche de madera bañado por la luz dorada",
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
  diagramaCeleste: {
    src: diagramaCeleste,
    alt: "Grabado antiguo de un diagrama circular con los signos del zodiaco y las órbitas celestes",
    position: "50% 50%",
  },
  cartaCircular: {
    src: cartaCircular,
    alt: "Dibujo a mano de una carta circular con símbolos y líneas sobre papel",
    position: "50% 50%",
  },
  tiradaSuelo: {
    src: tiradaSuelo,
    alt: "Persona colocando cartas de tarot sobre un suelo de madera junto a una vela, un libro de tarot y un móvil",
    position: "55% 55%",
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
