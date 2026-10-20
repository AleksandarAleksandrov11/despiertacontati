import { Circle, Defs, Document, Image, Link, Page, Path, RadialGradient, Stop, Svg, Text, View } from "@react-pdf/renderer";
import { arcano, teaser } from "@/content/arcanos";
import { calculadoraIndividual, calculadoraPareja, calculadoraPdf } from "@/content/calculadora";
import { site } from "@/content/site";
import type { Posicion, Propositos, Puntos, Tramo } from "@/lib/matriz";
import {
  coloresChakra,
  corazon,
  lineasMatriz,
  lienzo,
  marcoMatriz,
  marcasEdad,
  propositosMatriz,
  puntosAnillo,
  puntosVariante,
  simboloFemenino,
  simboloMasculino,
  simbolosCanal,
  simbolosLinaje,
  verticesMatriz,
  type PuntoMatriz,
  type TipoPunto,
  type Variante,
} from "@/lib/matriz-geometria";
import { Boton, c, Encabezado, Fondo, PaginaTati, Pie, s, type Recursos } from "./comun";
import type { DatosPdf, Persona } from "./datos";

function Numero({ numero, size = 40, oro = false }: { numero: number; size?: number; oro?: boolean }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: oro ? c.dorado : c.crema,
        borderWidth: oro ? 3 : 0.8,
        borderColor: oro ? "#e7cf9f" : c.dorado,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: size * 0.36, lineHeight: 1, color: c.ciruela }}>
        {numero}
      </Text>
    </View>
  );
}

function Arcano({ numero, size = 40, oro = false }: { numero: number; size?: number; oro?: boolean }) {
  const datos = arcano(numero);
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Numero numero={numero} size={size} oro={oro} />
      <View style={{ marginLeft: 12, flexShrink: 1 }}>
        <Text style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: size > 44 ? 22 : 17, lineHeight: 1.1 }}>{datos?.nombre}</Text>
        <Text style={{ fontFamily: "Cormorant", fontStyle: "italic", fontSize: 10.5, color: c.inkSoft, marginTop: 2 }}>
          {`${calculadoraPdf.arcano} ${numero} · ${datos?.clave ?? ""}`}
        </Text>
      </View>
    </View>
  );
}

function Lectura({ label, intro, numero, text, destacada = false }: { label: string; intro: string; numero: number; text: string; destacada?: boolean }) {
  return (
    <View wrap={false} style={[s.card, destacada ? { padding: 18 } : {}, { marginTop: 12 }]}>
      <Text style={s.eyebrow}>{label}</Text>
      <Text style={[s.small, { marginTop: 2 }]}>{intro}</Text>
      <View style={{ marginTop: 10 }}>
        <Arcano numero={numero} size={destacada ? 48 : 36} oro={destacada} />
      </View>
      <Text style={{ marginTop: 9, fontSize: destacada ? 9.5 : 9, lineHeight: 1.55 }}>{text}</Text>
    </View>
  );
}

function Bloqueada({
  label,
  intro,
  numero,
  text,
  lock,
  compacta = false,
}: {
  label: string;
  intro: string;
  numero: number;
  text: string;
  lock: string;
  compacta?: boolean;
}) {
  return (
    <View wrap={false} style={[s.card, compacta ? { marginTop: 8, paddingVertical: 8 } : { marginTop: 11 }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Text style={[s.eyebrow, { maxWidth: 190 }]}>{label}</Text>
        <View style={{ backgroundColor: c.ciruela, borderRadius: 20, paddingTop: 4, paddingBottom: 3, paddingHorizontal: 8 }}>
          <Text style={{ fontSize: 6, lineHeight: 1, letterSpacing: 0.8, color: c.crema, textTransform: "uppercase" }}>{lock}</Text>
        </View>
      </View>
      <Text style={[s.small, { marginTop: 2 }]}>{intro}</Text>
      <View style={{ marginTop: compacta ? 4 : 9 }}>
        <Arcano numero={numero} size={compacta ? 24 : 34} />
      </View>
      <Text style={{ marginTop: compacta ? 4 : 9, fontSize: compacta ? 8.4 : 9.2 }}>{teaser(text)}</Text>
      {(compacta ? [1] : [1, 0.86]).map((width, index) => (
        <View key={index} style={{ marginTop: 6, height: 6, width: `${width * 100}%`, borderRadius: 3, backgroundColor: c.ciruela, opacity: 0.1 }} />
      ))}
    </View>
  );
}

const pdfFills: Record<TipoPunto, { fill: string; text: string; stroke?: string }> = {
  centro: { fill: coloresChakra.plexo, text: c.ciruela, stroke: "#f3e2bd" },
  vertice: { fill: c.ciruelaSoft, text: c.crema },
  esquina: { fill: c.ciruelaSoft, text: c.crema, stroke: c.dorado },
  interno: { fill: "#4a3845", text: c.crema, stroke: "#8a7268" },
  canal: { fill: c.doradoSoft, text: c.ciruela },
  linaje: { fill: "#5e4757", text: "#f3e2bd", stroke: c.dorado },
};

function estiloPunto(punto: PuntoMatriz) {
  const base = pdfFills[punto.tipo];
  if (!punto.chakra || punto.tipo === "centro") return base;
  return { fill: coloresChakra[punto.chakra], text: c.ciruela, stroke: undefined };
}

const lineas = {
  rombo: { stroke: c.dorado, width: 1.6, opacity: 0.95 },
  cuadrado: { stroke: c.doradoSoft, width: 1.2, opacity: 0.75 },
  eje: { stroke: c.crema, width: 0.9, opacity: 0.22 },
  diagonal: { stroke: c.crema, width: 0.9, opacity: 0.22 },
  interior: { stroke: c.crema, width: 0.8, opacity: 0.16 },
  canal: { stroke: c.doradoSoft, width: 1.1, opacity: 0.85 },
};

const esquinasEdad: (keyof Puntos)[] = ["a", "f", "b", "g", "c", "h", "d", "i"];

function Diagrama({
  puntos,
  etiquetas,
  size,
  variante,
  edades,
  activas,
  propositos,
}: {
  puntos: Puntos;
  etiquetas: string[];
  size: number;
  variante: Variante;
  edades: Tramo[];
  activas: Posicion[];
  propositos?: Propositos;
}) {
  const anillo = variante === "individual" && edades.length === 8;
  const visibles = puntosVariante(variante);
  const nivel = (tramo: number, etapa: number) => activas.findIndex((item) => item.tramo === tramo && item.etapa === etapa);
  const esquinaActiva = (key: keyof Puntos) => (anillo ? activas.findIndex((item) => item.etapa === 0 && esquinasEdad[item.tramo] === key) : -1);
  const conPropositos = anillo && propositos !== undefined;
  const marco = conPropositos ? marcoMatriz.propositos : marcoMatriz.normal;
  const scale = size / marco.ancho;
  const alto = marco.alto * scale;
  const px = (value: number) => (value - marco.x) * scale;
  const py = (value: number) => (value - marco.y) * scale;
  const v = verticesMatriz;
  const labelPos = [
    { x: v.a.x, y: v.a.y + 34 },
    { x: v.b.x + 44, y: v.b.y },
    { x: v.c.x, y: v.c.y + 34 },
  ];
  return (
    <View style={{ width: size, height: alto, position: "relative" }}>
      <Svg width={size} height={alto} viewBox={`${marco.x} ${marco.y} ${marco.ancho} ${marco.alto}`}>
        <Defs>
          <RadialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
            <Stop offset="0" stopColor={c.doradoSoft} stopOpacity={0.55} />
            <Stop offset="1" stopColor={c.doradoSoft} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        {anillo ? (
          <Circle cx={lienzo.centro} cy={lienzo.centro} r={lienzo.anillo} fill="none" stroke={c.dorado} strokeOpacity={0.5} strokeWidth={0.9} strokeDasharray="1 4" />
        ) : (
          <>
            <Circle cx={lienzo.centro} cy={lienzo.centro} r={186} fill="none" stroke={c.dorado} strokeOpacity={0.35} strokeWidth={0.9} />
            <Circle cx={lienzo.centro} cy={lienzo.centro} r={198} fill="none" stroke={c.dorado} strokeOpacity={0.4} strokeWidth={0.9} strokeDasharray="1 7" />
          </>
        )}
        <Circle cx={lienzo.centro} cy={lienzo.centro} r={102} fill="none" stroke={c.crema} strokeOpacity={0.12} strokeWidth={0.9} />
        <Circle cx={lienzo.centro} cy={lienzo.centro} r={90} fill="url(#halo)" />
        {lineasMatriz.map((linea) => {
          const estilo = lineas[linea.tipo];
          return (
            <Path
              key={linea.id}
              d={linea.d}
              fill="none"
              stroke={estilo.stroke}
              strokeOpacity={estilo.opacity}
              strokeWidth={estilo.width}
              strokeDasharray={linea.tipo === "canal" ? "3 4" : undefined}
            />
          );
        })}
        {anillo &&
          puntosAnillo.map((punto) => {
            const marca = nivel(punto.tramo, punto.etapa);
            return (
              <Circle
                key={`a-${punto.tramo}-${punto.etapa}`}
                cx={punto.x}
                cy={punto.y}
                r={punto.etapa === 4 ? 7.6 : 6.6}
                fill={marca === 0 ? c.doradoSoft : punto.etapa === 4 ? "#6a4f62" : "#4a3845"}
                stroke={marca >= 0 ? "#f3e2bd" : "#8a7268"}
                strokeWidth={marca >= 0 ? 2 : 0.8}
              />
            );
          })}
        {visibles.map((punto) => {
          const marca = esquinaActiva(punto.key);
          return marca >= 0 ? (
            <Circle key={`e-${punto.key}`} cx={punto.x} cy={punto.y} r={punto.r + 4.5} fill="none" stroke="#f3e2bd" strokeWidth={marca === 0 ? 2 : 1} />
          ) : null;
        })}
        {visibles.map((punto) => {
          const color = estiloPunto(punto);
          return (
            <Circle
              key={punto.key}
              cx={punto.x}
              cy={punto.y}
              r={punto.r}
              fill={color.fill}
              stroke={color.stroke ?? "none"}
              strokeWidth={color.stroke ? (punto.tipo === "centro" ? 3 : 1) : 0}
            />
          );
        })}
        <Path d={corazon(simbolosCanal.amor, 12)} fill={coloresChakra.raiz} />
        {variante === "individual" && (
          <>
            <Circle cx={simbolosLinaje.masculino.x - 0.8} cy={simbolosLinaje.masculino.y + 0.8} r={3.4} fill="none" stroke={coloresChakra.garganta} strokeWidth={1.1} />
            <Path d={simboloMasculino(simbolosLinaje.masculino)} fill="none" stroke={coloresChakra.garganta} strokeWidth={1.1} strokeLinecap="round" />
            <Circle cx={simbolosLinaje.femenino.x} cy={simbolosLinaje.femenino.y - 1.2} r={3.4} fill="none" stroke={c.rosa} strokeWidth={1.1} />
            <Path d={simboloFemenino(simbolosLinaje.femenino)} fill="none" stroke={c.rosa} strokeWidth={1.1} strokeLinecap="round" />
          </>
        )}
        {conPropositos &&
          propositosMatriz.map((item, index) => (
            <Circle
              key={`p-${index}`}
              cx={item.x}
              cy={item.y}
              r={item.r}
              fill={item.r > 10 ? "#4a3845" : "none"}
              stroke={item.r > 10 ? c.dorado : "#8a7268"}
              strokeWidth={item.r > 10 ? 1 : 0.8}
            />
          ))}
      </Svg>
      {conPropositos &&
        propositosMatriz.map((item, index) => {
          const box = item.r * 2 * scale;
          const valor = item.origen === "propositos" ? propositos[item.key as keyof Propositos] : puntos[item.key as keyof Puntos];
          return (
            <View
              key={`pt-${index}`}
              style={{ position: "absolute", left: px(item.x) - box / 2, top: py(item.y) - box / 2, width: box, height: box, alignItems: "center", justifyContent: "center" }}
            >
              <Text style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: (item.r > 10 ? 10 : 7.4) * scale, lineHeight: 1, color: item.r > 10 ? c.crema : "#cbbcc5" }}>{valor}</Text>
            </View>
          );
        })}
      {anillo &&
        puntosAnillo.map((punto) => {
          const box = 16 * scale;
          const marcada = nivel(punto.tramo, punto.etapa) === 0;
          return (
            <View
              key={`an-${punto.tramo}-${punto.etapa}`}
              style={{ position: "absolute", left: px(punto.x) - box / 2, top: py(punto.y) - box / 2, width: box, height: box, alignItems: "center", justifyContent: "center" }}
            >
              <Text style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: 7.2 * scale, lineHeight: 1, color: marcada ? c.ciruela : c.crema }}>
                {edades[punto.tramo]?.etapas[punto.etapa]?.valor}
              </Text>
            </View>
          );
        })}
      {anillo &&
        marcasEdad.map((marca) => (
          <View
            key={`m-${marca.edad}`}
            style={{ position: "absolute", left: px(marca.x) - 10, top: py(marca.y) - 5, width: 20, height: 10, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontFamily: "Manrope", fontWeight: marca.principal ? 600 : 400, fontSize: (marca.principal ? 8.5 : 7) * scale, lineHeight: 1, color: marca.principal ? c.doradoSoft : "#bfaeb8" }}>
              {marca.edad}
            </Text>
          </View>
        ))}
      {visibles.map((punto) => {
        const box = punto.r * 2 * scale;
        const fontSize = (punto.tipo === "centro" ? 17 : punto.r >= 14 ? 13 : punto.r >= 10 ? 9.5 : 8.5) * scale;
        return (
          <View
            key={`n-${punto.key}`}
            style={{
              position: "absolute",
              left: px(punto.x) - box / 2,
              top: py(punto.y) - box / 2,
              width: box,
              height: box,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontFamily: "Manrope", fontWeight: 600, fontSize, lineHeight: 1, color: estiloPunto(punto).text }}>{puntos[punto.key]}</Text>
          </View>
        );
      })}
      {etiquetas.map((texto, index) => (
        <Text
          key={texto}
          style={{
            position: "absolute",
            left: px(labelPos[index]!.x) - 30,
            top: py(labelPos[index]!.y) - 5,
            width: 60,
            textAlign: "center",
            fontSize: 5.6,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: "#cbbcc5",
          }}
        >
          {texto}
        </Text>
      ))}
      <View
        style={{
          position: "absolute",
          left: px(simbolosCanal.dinero.x) - 8,
          top: py(simbolosCanal.dinero.y) - 6,
          width: 16,
          height: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: 13 * scale, lineHeight: 1, color: c.doradoSoft }}>€</Text>
      </View>
    </View>
  );
}

function Portada({ datos, recursos }: { datos: DatosPdf; recursos: Recursos }) {
  const individual = datos.tipo === "individual";
  const nombres = individual
    ? datos.persona.nombre
    : datos.personas.every((persona) => persona.nombre)
      ? `${datos.personas[0].nombre} y ${datos.personas[1].nombre}`
      : "";
  const fechas = individual ? datos.persona.texto : `${datos.personas[0].texto}  ·  ${datos.personas[1].texto}`;
  return (
    <Page size="A5" style={[s.page, { paddingTop: 54, alignItems: "center" }]}>
      <Fondo tono={individual ? "rosa" : "lavanda"} />
      <Image src={recursos.logo} style={{ width: 150, height: 198 }} />
      <Text style={[s.eyebrow, { marginTop: 40, letterSpacing: 2.4 }]}>{calculadoraPdf.gratuita}</Text>
      <Text style={[s.h1, { marginTop: 10, textAlign: "center", fontSize: 34 }]}>
        {individual ? calculadoraPdf.tituloIndividual : calculadoraPdf.tituloPareja}
      </Text>
      {nombres ? (
        <Text
          style={{
            fontFamily: "Allura",
            fontSize: nombres.length <= 14 ? 38 : nombres.length <= 24 ? 30 : nombres.length <= 40 ? 24 : 19,
            color: c.rosaDeep,
            marginTop: 8,
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          {nombres}
        </Text>
      ) : null}
      <Text style={[s.eyebrow, { marginTop: nombres ? 6 : 16 }]}>{individual ? calculadoraPdf.nacimiento : calculadoraPdf.fechas}</Text>
      <Text style={{ fontFamily: "Manrope", fontWeight: 500, fontSize: 12, letterSpacing: 1.2, marginTop: 5 }}>{fechas}</Text>
      <View style={{ position: "absolute", bottom: 34, left: 0, right: 0, alignItems: "center" }}>
        <Text style={[s.eyebrow, { letterSpacing: 2.2 }]}>{site.brandLine}</Text>
        <Link src={site.url} style={{ marginTop: 6, fontSize: 8, color: c.rosaDeep, textDecoration: "none" }}>
          {site.url.replace("https://www.", "")}
        </Link>
      </View>
    </Page>
  );
}

function PaginaMatriz({ datos }: { datos: DatosPdf }) {
  const individual = datos.tipo === "individual";
  const p = datos.matriz.puntos;
  const leyenda: [string, number][] = individual
    ? [
        [calculadoraIndividual.leyenda.centro, p.e],
        [calculadoraIndividual.leyenda.energia, p.a],
        [calculadoraIndividual.leyenda.talento, p.b],
        [calculadoraIndividual.leyenda.aprendizajes, p.d],
        [calculadoraIndividual.leyenda.material, p.dinero],
      ]
    : [
        [calculadoraPareja.leyenda.centro, p.e],
        [calculadoraPareja.leyenda.aprendizajes, p.d],
        [calculadoraPareja.leyenda.amor, p.amor],
        [calculadoraPareja.leyenda.material, p.dinero],
      ];
  const titulo = individual
    ? calculadoraIndividual.stageTitle(datos.persona.nombre)
    : calculadoraPareja.stageTitle(datos.personas.every((persona) => persona.nombre) ? `${datos.personas[0].nombre} y ${datos.personas[1].nombre}` : "");
  const activas = individual && datos.anio ? datos.anio.posiciones : [];
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="lavanda" />
      <Encabezado eyebrow={individual ? calculadoraPdf.matrizTitle : calculadoraPdf.matrizParejaTitle} title={titulo} />
      <View style={{ marginTop: 10, backgroundColor: c.ciruela, borderRadius: 16, paddingVertical: 6, alignItems: "center" }}>
        <Diagrama
          puntos={p}
          etiquetas={individual ? calculadoraIndividual.etiquetas : calculadoraPareja.etiquetas}
          size={titulo.length > 36 ? 278 : 296}
          variante={datos.tipo}
          edades={datos.matriz.edades}
          activas={activas}
          propositos={individual ? datos.matriz.propositos : undefined}
        />
      </View>
      <Text style={[s.small, { marginTop: 8, fontSize: 8 }]}>{individual ? calculadoraPdf.matrizText : calculadoraPdf.matrizParejaText}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 7 }}>
        {leyenda.map(([label, numero]) => (
          <View
            key={label}
            style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#ffffff", borderRadius: 20, paddingVertical: 3, paddingLeft: 3, paddingRight: 9, marginRight: 5, marginBottom: 5 }}
          >
            <Numero numero={numero} size={17} />
            <Text style={{ marginLeft: 6, fontSize: 7.6 }}>{label}</Text>
          </View>
        ))}
      </View>
      <Pie />
    </Page>
  );
}

type FilaProposito = { label: string; etapa: string; partes: string[]; valores: number[]; resultado: number; texto?: string };

function Propositos({ filas, nota }: { filas: FilaProposito[]; nota?: string }) {
  return (
    <View wrap={false} style={[s.card, { marginTop: 12, paddingVertical: 6 }]}>
      {filas.map((fila, index) => (
        <View
          key={fila.label}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 6,
            borderTopWidth: index === 0 ? 0 : 0.6,
            borderTopColor: c.linea,
          }}
        >
          <View style={{ width: 128 }}>
            <Text style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: 13.5, lineHeight: 1.15 }}>{fila.label}</Text>
            <Text style={[s.eyebrow, { fontSize: 5.8, marginTop: 2 }]}>{fila.etapa}</Text>
            <Text style={[s.small, { fontSize: 7.2, marginTop: 2 }]}>
              {fila.partes.map((parte, i) => `${parte} ${fila.valores[i]}`).join(" + ")}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Arcano numero={fila.resultado} size={28} />
            {fila.texto ? <Text style={{ marginTop: 5, fontSize: 8, lineHeight: 1.45, color: c.inkSoft }}>{fila.texto}</Text> : null}
          </View>
        </View>
      ))}
      {nota ? <Text style={[s.small, { borderTopWidth: 0.6, borderTopColor: c.linea, paddingTop: 8, paddingBottom: 4 }]}>{nota}</Text> : null}
    </View>
  );
}

function EnergiasDelAnio({ datos }: { datos: Extract<DatosPdf, { tipo: "individual" }> }) {
  const copy = calculadoraIndividual.edades.anio;
  const anio = datos.anio;
  if (!anio) return null;
  const items = [
    { label: copy.edad(anio.edad), valor: anio.propia },
    { label: copy.edad(anio.opuesta), valor: anio.deOpuesta },
    { label: copy.suma, valor: anio.suma },
  ];
  return (
    <View wrap={false} style={{ marginTop: 10, backgroundColor: c.ciruela, borderRadius: 12, paddingVertical: 10, paddingHorizontal: 12 }}>
      <Text style={[s.eyebrow, { color: "#cbbcc5", fontSize: 6 }]}>{copy.eyebrow}</Text>
      <Text style={{ marginTop: 3, fontFamily: "Cormorant", fontWeight: 500, fontSize: 15, color: c.crema }}>{copy.title(anio.edad)}</Text>
      <Text style={{ marginTop: 2, fontSize: 7.4, lineHeight: 1.35, color: "#d9cdd4" }}>{copy.text}</Text>
      <View style={{ flexDirection: "row", marginTop: 8 }}>
        {items.map((item, index) => (
          <View key={item.label} style={{ flex: 1, marginLeft: index === 0 ? 0 : 6, backgroundColor: c.crema, borderRadius: 9, padding: 7 }}>
            <Text style={[s.eyebrow, { fontSize: 5.4, letterSpacing: 0.8 }]}>{item.label}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
              <Numero numero={item.valor} size={20} />
              <Text style={{ marginLeft: 5, flex: 1, fontFamily: "Cormorant", fontWeight: 500, fontSize: 10.5, lineHeight: 1.1, color: c.ciruela }}>{arcano(item.valor)?.nombre}</Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={{ marginTop: 7, fontSize: 7.2, lineHeight: 1.35, color: "#d9cdd4" }}>{calculadoraPdf.edadesCompleta}</Text>
    </View>
  );
}

function PaginaChakras({ datos }: { datos: Extract<DatosPdf, { tipo: "individual" }> }) {
  const copy = calculadoraIndividual.chakras;
  const { chakras, totalChakras } = datos.matriz;
  const columna = { width: 46, textAlign: "center" as const };
  const orden = ["corona", "tercerOjo", "garganta", "corazon", "plexo", "sacro", "raiz"] as const;
  const filas = [
    ...chakras.map((fila, index) => ({ fila, nombre: `${copy.filas[index]!.es} · ${copy.filas[index]!.nombre}`, color: coloresChakra[orden[index]!], total: false })),
    { fila: totalChakras, nombre: copy.total, color: undefined, total: true },
  ];
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="rosa" />
      <Encabezado eyebrow={copy.eyebrow} title={copy.title} />
      <View wrap={false} style={[s.card, { marginTop: 10, paddingVertical: 6 }]}>
        <View style={{ flexDirection: "row", paddingVertical: 5, borderBottomWidth: 0.6, borderBottomColor: c.linea }}>
          <Text style={[s.eyebrow, { flex: 1, fontSize: 5.8 }]}>{copy.columnas.chakra}</Text>
          {[copy.columnas.fisico, copy.columnas.energia, copy.columnas.emocion].map((label) => (
            <Text key={label} style={[s.eyebrow, columna, { fontSize: 5.8 }]}>
              {label}
            </Text>
          ))}
        </View>
        {filas.map(({ fila, nombre, color, total }) => (
          <View key={nombre} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 2.4, borderTopWidth: total ? 0.6 : 0, borderTopColor: c.linea }}>
            <View style={{ width: 6, height: 6, borderRadius: 3, marginRight: 6, backgroundColor: color ?? "transparent" }} />
            <Text style={{ flex: 1, fontFamily: "Cormorant", fontWeight: 500, fontSize: total ? 11.5 : 10.5, lineHeight: 1.1 }}>{nombre}</Text>
            {[fila.fisico, fila.energia, fila.emocion].map((valor, index) => (
              <Text key={index} style={[columna, { fontFamily: "Manrope", fontWeight: 600, fontSize: 9 }]}>
                {valor}
              </Text>
            ))}
          </View>
        ))}
      </View>
      <Text style={[s.small, { marginTop: 6, fontSize: 7 }]}>{copy.aviso}</Text>
      <EnergiasDelAnio datos={datos} />
      <Pie />
    </Page>
  );
}

function PaginasIndividual({ datos }: { datos: Extract<DatosPdf, { tipo: "individual" }> }) {
  const copy = calculadoraIndividual;
  const p = datos.matriz.puntos;
  const prop = datos.matriz.propositos;
  const filas: FilaProposito[] = [
    { ...copy.propositos.personal, valores: [prop.cielo, prop.tierra], resultado: prop.personal },
    { ...copy.propositos.social, valores: [prop.masculino, prop.femenino], resultado: prop.social },
    { ...copy.propositos.espiritual, valores: [prop.personal, prop.social], resultado: prop.espiritual },
    { ...copy.propositos.planetario, valores: [prop.social, prop.espiritual], resultado: prop.planetario },
  ];
  return (
    <>
      <Page size="A5" style={s.page}>
        <Fondo tono="rosa" />
        <Encabezado eyebrow={copy.resultadosEyebrow} title={copy.resultadosTitle} />
        <Lectura destacada label={copy.posiciones.centro.label} intro={copy.posiciones.centro.text} numero={p.e} text={arcano(p.e)?.luz ?? ""} />
        <Lectura
          label={copy.posiciones.energia.label}
          intro={copy.posiciones.energia.text}
          numero={p.a}
          text={p.a === p.e ? copy.repetida : (arcano(p.a)?.luz ?? "")}
        />
        <Pie />
      </Page>
      <Page size="A5" style={s.page}>
        <Fondo tono="salvia" />
        <Lectura label={copy.posiciones.talento.label} intro={copy.posiciones.talento.text} numero={p.b} text={arcano(p.b)?.talento ?? ""} />
        <View style={{ marginTop: 12 }}>
          <Encabezado eyebrow={copy.propositos.eyebrow} title={copy.propositos.title} />
        </View>
        <Propositos filas={filas} nota={copy.propositos.locked} />
        <Pie />
      </Page>
      <PaginaChakras datos={datos} />
      <Page size="A5" style={s.page}>
        <Fondo tono="rosa" />
        <Encabezado eyebrow={copy.bloqueadas.eyebrow} title={calculadoraPdf.bloqueadoTitle} text={copy.bloqueadas.text} />
        {[
          { copy: copy.bloqueadas.aprendizajes, numero: p.d, text: arcano(p.d)?.sombra ?? "" },
          { copy: copy.bloqueadas.material, numero: p.dinero, text: arcano(p.dinero)?.dinero ?? "" },
          { copy: copy.bloqueadas.linaje, numero: p.k, text: arcano(p.k)?.sombra ?? "" },
        ].map((item) => (
          <Bloqueada key={item.copy.label} label={item.copy.label} intro={item.copy.text} numero={item.numero} text={item.text} lock={copy.bloqueadas.lock} compacta />
        ))}
        <Pie />
      </Page>
    </>
  );
}

function Compacta({ label, numero, text }: { label: string; numero: number; text: string }) {
  return (
    <View wrap={false} style={[s.card, { marginTop: 10, padding: 13 }]}>
      <Text style={s.eyebrow}>{label}</Text>
      <View style={{ marginTop: 8 }}>
        <Arcano numero={numero} size={30} />
      </View>
      <Text style={{ marginTop: 7, fontSize: 8.8, lineHeight: 1.5 }}>{text}</Text>
    </View>
  );
}

function PaginasPareja({ datos }: { datos: Extract<DatosPdf, { tipo: "pareja" }> }) {
  const copy = calculadoraPareja;
  const p = datos.matriz.puntos;
  const prop = datos.matriz.propositos;
  const filas: FilaProposito[] = [
    { ...copy.propositos.personal, valores: [prop.cielo, prop.tierra], resultado: prop.personal, texto: arcano(prop.personal)?.proposito },
    { ...copy.propositos.social, valores: [prop.masculino, prop.femenino], resultado: prop.social, texto: arcano(prop.social)?.proposito },
    { ...copy.propositos.espiritual, valores: [prop.personal, prop.social], resultado: prop.espiritual, texto: arcano(prop.espiritual)?.proposito },
  ];
  return (
    <>
      <Page size="A5" style={s.page}>
        <Fondo tono="rosa" />
        <Encabezado eyebrow={copy.resultadosEyebrow} title={copy.resultadosTitle} />
        <Lectura destacada label={copy.centro.label} intro={copy.centro.text} numero={p.e} text={arcano(p.e)?.amor ?? ""} />
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          {datos.personas.map((persona: Persona, index) => (
            <View
              key={index}
              wrap={false}
              style={[s.card, { flex: 1, marginLeft: index === 0 ? 0 : 10, backgroundColor: index === 0 ? c.rosaPolvo : c.lavanda }]}
            >
              <Text style={s.eyebrow}>{copy.aporta(persona.nombre || copy.aportaFallback[index]!)}</Text>
              <Text style={[s.small, { marginTop: 2, fontSize: 7.2 }]}>{`${copy.aportaText} ${persona.texto}`}</Text>
              <View style={{ marginTop: 9 }}>
                <Arcano numero={persona.centro} size={30} />
              </View>
            </View>
          ))}
        </View>
        <Pie />
      </Page>
      <Page size="A5" style={s.page}>
        <Fondo tono="salvia" />
        <Encabezado eyebrow={copy.propositos.eyebrow} title={copy.propositos.title} text={copy.propositos.text} />
        <Propositos filas={filas} />
        <Pie />
      </Page>
      <Page size="A5" style={s.page}>
        <Fondo tono="rosa" />
        <Encabezado eyebrow={copy.mas.eyebrow} title={copy.mas.title} />
        <Compacta label={copy.mas.aprendizajes.label} numero={p.d} text={arcano(p.d)?.sombra ?? ""} />
        <Compacta label={copy.mas.amor.label} numero={p.amor} text={arcano(p.amor)?.amor ?? ""} />
        <Compacta label={copy.mas.material.label} numero={p.dinero} text={arcano(p.dinero)?.dinero ?? ""} />
        <Pie />
      </Page>
    </>
  );
}

function PaginaVenta({ datos, recursos }: { datos: Extract<DatosPdf, { tipo: "individual" }>; recursos: Recursos }) {
  const copy = calculadoraIndividual.completa;
  return (
    <Page size="A5" style={[s.page, { backgroundColor: c.ciruela, color: c.crema }]}>
      <Fondo tono="oscuro" />
      <Text style={[s.eyebrow, { color: "#cbbcc5" }]}>{copy.eyebrow}</Text>
      <Text style={[s.h2, { color: c.crema, fontSize: 27 }]}>{calculadoraPdf.ctaTitle}</Text>
      <Text style={[s.lead, { color: "#e3d8de", marginTop: 8, fontSize: 9.6 }]}>{copy.text}</Text>
      <View style={{ marginTop: 10 }}>
        {copy.claves.map((clave, index) => (
          <View key={clave} style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
            <Text style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: 9, color: c.doradoSoft, width: 16 }}>{index + 1}</Text>
            <Text style={{ fontSize: 9.4, color: c.crema }}>{clave}</Text>
          </View>
        ))}
      </View>
      <Text style={{ marginTop: 10, fontSize: 8.8, color: "#d9cdd4" }}>{copy.formato}</Text>

      <View style={{ marginTop: 14, borderTopWidth: 0.6, borderTopColor: "#6e5a66", paddingTop: 12, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <Text style={[s.eyebrow, { color: "#cbbcc5" }]}>{calculadoraPdf.precio}</Text>
          <Text style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: datos.precio ? 38 : 22, color: c.doradoSoft, lineHeight: 1.1, marginTop: 2 }}>
            {datos.precio ?? calculadoraPdf.precioConsulta}
          </Text>
        </View>
        <View style={{ alignItems: "center", width: 96 }}>
          <Image src={recursos.qr} style={{ width: 64, height: 64, borderRadius: 5 }} />
          <Text style={{ marginTop: 4, fontSize: 6.2, lineHeight: 1.35, color: "#cbbcc5", textAlign: "center" }}>{calculadoraPdf.ctaQr}</Text>
        </View>
      </View>

      <View style={{ marginTop: 14 }}>
        <Boton src={datos.compraUrl}>{calculadoraPdf.ctaBuy}</Boton>
        <View style={{ marginTop: 7 }}>
          <Boton src={datos.infoUrl} claro={false}>
            {calculadoraPdf.ctaInfo}
          </Boton>
        </View>
      </View>
      <Pie oscuro />
    </Page>
  );
}

export function MatrizPdf({ datos, recursos }: { datos: DatosPdf; recursos: Recursos }) {
  const titulo = datos.tipo === "individual" ? calculadoraPdf.tituloIndividual : calculadoraPdf.tituloPareja;
  return (
    <Document title={`${titulo} · ${site.name}`} author={site.person.fullName} creator={site.name} producer={site.name} language="es-ES">
      <Portada datos={datos} recursos={recursos} />
      <PaginaMatriz datos={datos} />
      {datos.tipo === "individual" ? (
        <>
          <PaginasIndividual datos={datos} />
          <PaginaVenta datos={datos} recursos={recursos} />
        </>
      ) : (
        <PaginasPareja datos={datos} />
      )}
      <PaginaTati recursos={recursos} />
    </Document>
  );
}
