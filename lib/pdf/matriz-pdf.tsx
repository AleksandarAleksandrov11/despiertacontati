import { Circle, Defs, Document, Image, Link, Page, Path, RadialGradient, Stop, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import { arcano, teaser } from "@/content/arcanos";
import { calculadoraIndividual, calculadoraPareja, calculadoraPdf } from "@/content/calculadora";
import { site } from "@/content/site";
import type { Puntos } from "@/lib/matriz";
import { lineasMatriz, lienzo, puntosMatriz, verticesMatriz, type TipoPunto } from "@/lib/matriz-geometria";
import type { DatosPdf, Persona } from "./datos";

export type Recursos = { logo: string; simbolo: string; foto: string; qr: string };

const c = {
  crema: "#fbf7f2",
  rosaPolvo: "#f6e9e6",
  lavanda: "#f1ecf6",
  salvia: "#eef3ec",
  ciruela: "#3f2e3a",
  ciruelaSoft: "#54404e",
  inkSoft: "#6e5a66",
  rosa: "#c98b93",
  rosaDeep: "#9c5f6c",
  malva: "#a9799b",
  malvaDeep: "#8e5f80",
  dorado: "#c8a46a",
  doradoSoft: "#ddbf8c",
  linea: "#e7dcd3",
};

const A5 = { width: 419.53, height: 595.28 };

const s = StyleSheet.create({
  page: {
    backgroundColor: c.crema,
    paddingTop: 42,
    paddingBottom: 54,
    paddingHorizontal: 42,
    fontFamily: "Manrope",
    fontSize: 9.5,
    lineHeight: 1.6,
    color: c.ciruela,
  },
  eyebrow: { fontFamily: "Manrope", fontWeight: 500, fontSize: 6.8, letterSpacing: 1.7, textTransform: "uppercase", color: c.inkSoft },
  h1: { fontFamily: "Cormorant", fontWeight: 500, fontSize: 30, lineHeight: 1.05, color: c.ciruela },
  h2: { fontFamily: "Cormorant", fontWeight: 500, fontSize: 25, lineHeight: 1.08, color: c.ciruela, marginTop: 6 },
  lead: { fontSize: 10, lineHeight: 1.65, color: c.inkSoft },
  card: { backgroundColor: "#ffffff", borderRadius: 12, padding: 15 },
  small: { fontSize: 8, lineHeight: 1.5, color: c.inkSoft },
  footer: {
    position: "absolute",
    bottom: 26,
    left: 42,
    right: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 6.8,
    letterSpacing: 0.6,
    color: c.inkSoft,
  },
});

function Fondo({ tono }: { tono: "rosa" | "lavanda" | "salvia" | "oscuro" }) {
  const colores = {
    rosa: [c.rosaPolvo, c.lavanda],
    lavanda: [c.lavanda, c.rosaPolvo],
    salvia: [c.salvia, c.lavanda],
    oscuro: ["#6b4f63", "#7a4f5c"],
  }[tono];
  return (
    <Svg fixed width={A5.width} height={A5.height} style={{ position: "absolute", top: 0, left: 0 }}>
      <Defs>
        <RadialGradient id="fondo-a" cx="0.5" cy="0.5" r="0.5">
          <Stop offset="0" stopColor={colores[0]} stopOpacity={tono === "oscuro" ? 0.55 : 1} />
          <Stop offset="1" stopColor={colores[0]} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="fondo-b" cx="0.5" cy="0.5" r="0.5">
          <Stop offset="0" stopColor={colores[1]} stopOpacity={tono === "oscuro" ? 0.45 : 1} />
          <Stop offset="1" stopColor={colores[1]} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx={A5.width - 30} cy={40} r={190} fill="url(#fondo-a)" />
      <Circle cx={20} cy={A5.height - 40} r={170} fill="url(#fondo-b)" />
    </Svg>
  );
}

function Pie({ oscuro = false }: { oscuro?: boolean }) {
  return (
    <View fixed style={[s.footer, oscuro ? { color: "#d9cdd4" } : {}]}>
      <Text>{`${site.name} · ${site.url.replace("https://www.", "")}`}</Text>
      <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function Encabezado({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <View>
      <Text style={s.eyebrow}>{eyebrow}</Text>
      <Text style={[s.h2, title.length > 36 ? { fontSize: 18 } : {}]}>{title}</Text>
      {text ? <Text style={[s.lead, { marginTop: 8 }]}>{text}</Text> : null}
    </View>
  );
}

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
      <View style={{ marginLeft: 12 }}>
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

function Bloqueada({ label, intro, numero, text, lock }: { label: string; intro: string; numero: number; text: string; lock: string }) {
  return (
    <View wrap={false} style={[s.card, { marginTop: 11 }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Text style={[s.eyebrow, { maxWidth: 190 }]}>{label}</Text>
        <View style={{ backgroundColor: c.ciruela, borderRadius: 20, paddingTop: 4, paddingBottom: 3, paddingHorizontal: 8 }}>
          <Text style={{ fontSize: 6, lineHeight: 1, letterSpacing: 0.8, color: c.crema, textTransform: "uppercase" }}>{lock}</Text>
        </View>
      </View>
      <Text style={[s.small, { marginTop: 2 }]}>{intro}</Text>
      <View style={{ marginTop: 9 }}>
        <Arcano numero={numero} size={34} />
      </View>
      <Text style={{ marginTop: 9, fontSize: 9.2 }}>{teaser(text)}</Text>
      {[1, 0.86].map((width, index) => (
        <View key={index} style={{ marginTop: 6, height: 6, width: `${width * 100}%`, borderRadius: 3, backgroundColor: c.ciruela, opacity: 0.1 }} />
      ))}
    </View>
  );
}

const pdfFills: Record<TipoPunto, { fill: string; text: string; stroke?: string }> = {
  centro: { fill: c.dorado, text: c.ciruela, stroke: "#e7cf9f" },
  personal: { fill: c.malva, text: c.crema },
  material: { fill: c.rosaDeep, text: c.crema },
  esquina: { fill: c.ciruelaSoft, text: c.crema, stroke: c.dorado },
  interno: { fill: "#4a3845", text: c.crema, stroke: "#8a7268" },
  corazon: { fill: c.rosaPolvo, text: c.ciruela },
  canal: { fill: c.doradoSoft, text: c.ciruela },
};

const lineas = {
  rombo: { stroke: c.dorado, width: 1.6, opacity: 0.95 },
  cuadrado: { stroke: c.doradoSoft, width: 1.2, opacity: 0.75 },
  eje: { stroke: c.crema, width: 0.9, opacity: 0.22 },
  diagonal: { stroke: c.crema, width: 0.9, opacity: 0.22 },
  canal: { stroke: c.doradoSoft, width: 1.1, opacity: 0.85 },
};

function Diagrama({ puntos, etiquetas, size }: { puntos: Puntos; etiquetas: string[]; size: number }) {
  const min = -24;
  const span = 448;
  const scale = size / span;
  const px = (value: number) => (value - min) * scale;
  const v = verticesMatriz;
  const labelPos = [
    { x: v.a.x, y: v.a.y + 34 },
    { x: v.b.x + 44, y: v.b.y },
    { x: v.c.x, y: v.c.y + 34 },
    { x: v.d.x + 44, y: v.d.y },
  ];
  const canal = puntosMatriz.filter((punto) => punto.key === "dinero" || punto.key === "amor");
  return (
    <View style={{ width: size, height: size, position: "relative" }}>
      <Svg width={size} height={size} viewBox={`${min} ${min} ${span} ${span}`}>
        <Defs>
          <RadialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
            <Stop offset="0" stopColor={c.doradoSoft} stopOpacity={0.55} />
            <Stop offset="1" stopColor={c.doradoSoft} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Circle cx={lienzo.centro} cy={lienzo.centro} r={186} fill="none" stroke={c.dorado} strokeOpacity={0.35} strokeWidth={0.9} />
        <Circle cx={lienzo.centro} cy={lienzo.centro} r={198} fill="none" stroke={c.dorado} strokeOpacity={0.4} strokeWidth={0.9} strokeDasharray="1 7" />
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
        {puntosMatriz.map((punto) => {
          const color = pdfFills[punto.tipo];
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
      </Svg>
      {puntosMatriz.map((punto) => {
        const box = punto.r * 2 * scale;
        const fontSize = (punto.tipo === "centro" ? 17 : punto.r >= 14 ? 13 : punto.r >= 10 ? 9.5 : 8.5) * scale;
        return (
          <View
            key={`n-${punto.key}`}
            style={{
              position: "absolute",
              left: px(punto.x) - box / 2,
              top: px(punto.y) - box / 2,
              width: box,
              height: box,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontFamily: "Manrope", fontWeight: 600, fontSize, lineHeight: 1, color: pdfFills[punto.tipo].text }}>{puntos[punto.key]}</Text>
          </View>
        );
      })}
      {etiquetas.map((texto, index) => (
        <Text
          key={texto}
          style={{
            position: "absolute",
            left: px(labelPos[index]!.x) - 30,
            top: px(labelPos[index]!.y) - 5,
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
      {canal.map((punto) => (
        <Text
          key={`l-${punto.key}`}
          style={{
            position: "absolute",
            left: px(punto.key === "dinero" ? punto.x + 13 : punto.x + 4),
            top: px(punto.key === "dinero" ? punto.y - 4 : punto.y + 14),
            fontFamily: "Cormorant",
            fontStyle: "italic",
            fontSize: 7.5,
            color: c.doradoSoft,
          }}
        >
          {punto.key}
        </Text>
      ))}
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
  const copy = individual ? calculadoraIndividual : calculadoraPareja;
  const leyenda: [string, number][] = [
    [copy.leyenda.centro, p.e],
    ...(individual
      ? ([
          [calculadoraIndividual.leyenda.energia, p.a],
          [calculadoraIndividual.leyenda.talento, p.b],
        ] as [string, number][])
      : []),
    [copy.leyenda.aprendizajes, p.d],
    [copy.leyenda.material, p.dinero],
  ];
  const titulo = individual
    ? calculadoraIndividual.stageTitle(datos.persona.nombre)
    : calculadoraPareja.stageTitle(datos.personas.every((persona) => persona.nombre) ? `${datos.personas[0].nombre} y ${datos.personas[1].nombre}` : "");
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="lavanda" />
      <Encabezado eyebrow={individual ? calculadoraPdf.matrizTitle : calculadoraPdf.matrizParejaTitle} title={titulo} />
      <View style={{ marginTop: 12, backgroundColor: c.ciruela, borderRadius: 16, paddingVertical: 8, alignItems: "center" }}>
        <Diagrama puntos={p} etiquetas={individual ? calculadoraIndividual.etiquetas : calculadoraPareja.etiquetas} size={titulo.length > 36 ? 250 : 268} />
      </View>
      <Text style={[s.small, { marginTop: 10, fontSize: 8.4 }]}>{individual ? calculadoraPdf.matrizText : calculadoraPdf.matrizParejaText}</Text>
      <Text style={[s.eyebrow, { marginTop: 10 }]}>{calculadoraPdf.leyenda}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 8 }}>
        {leyenda.map(([label, numero]) => (
          <View
            key={label}
            style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#ffffff", borderRadius: 20, paddingVertical: 3, paddingLeft: 3, paddingRight: 9, marginRight: 5, marginBottom: 5 }}
          >
            <Numero numero={numero} size={18} />
            <Text style={{ marginLeft: 6, fontSize: 7.8 }}>{label}</Text>
          </View>
        ))}
      </View>
      <Pie />
    </Page>
  );
}

type FilaProposito = { label: string; etapa: string; partes: string[]; valores: number[]; resultado: number };

function Propositos({ filas, nota }: { filas: FilaProposito[]; nota: string }) {
  return (
    <View wrap={false} style={[s.card, { marginTop: 12, paddingVertical: 6 }]}>
      {filas.map((fila, index) => (
        <View
          key={fila.label}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 9,
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
            <Arcano numero={fila.resultado} size={30} />
          </View>
        </View>
      ))}
      <Text style={[s.small, { borderTopWidth: 0.6, borderTopColor: c.linea, paddingTop: 8, paddingBottom: 4 }]}>{nota}</Text>
    </View>
  );
}


function Avance({ datos }: { datos: DatosPdf }) {
  const individual = datos.tipo === "individual";
  const boton = individual ? calculadoraPdf.ctaBuyShort : calculadoraPdf.ctaInfoShort;
  return (
    <View wrap={false} style={{ marginTop: 12, backgroundColor: c.ciruela, borderRadius: 12, paddingVertical: 10, paddingHorizontal: 13, flexDirection: "row", alignItems: "center" }}>
      <Text style={{ flex: 1, paddingRight: 10, fontFamily: "Cormorant", fontWeight: 500, fontSize: 12.5, color: c.crema, lineHeight: 1.15 }}>
        {individual ? calculadoraPdf.avance : calculadoraPdf.avancePareja}
      </Text>
      <Link src={individual ? datos.compraUrl : datos.infoUrl} style={{ textDecoration: "none" }}>
        <View style={{ backgroundColor: c.crema, borderRadius: 16, paddingVertical: 6, paddingHorizontal: 11 }}>
          <Text style={{ fontSize: 8, fontWeight: 600, color: c.ciruela }}>{datos.precio ? `${boton} · ${datos.precio}` : boton}</Text>
        </View>
      </Link>
    </View>
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
        <View style={{ marginTop: 18 }}>
          <Encabezado eyebrow={copy.propositos.eyebrow} title={copy.propositos.title} />
        </View>
        <Propositos filas={filas} nota={`${copy.propositos.espiritual.label}: ${arcano(prop.espiritual)?.proposito ?? ""} ${copy.propositos.locked}`} />
        <Pie />
      </Page>
      <Page size="A5" style={s.page}>
        <Fondo tono="rosa" />
        <Encabezado eyebrow={copy.bloqueadas.eyebrow} title={calculadoraPdf.bloqueadoTitle} text={copy.bloqueadas.text} />
        <Bloqueada
          label={copy.bloqueadas.aprendizajes.label}
          intro={copy.bloqueadas.aprendizajes.text}
          numero={p.d}
          text={arcano(p.d)?.sombra ?? ""}
          lock={copy.bloqueadas.lock}
        />
        <Bloqueada
          label={copy.bloqueadas.material.label}
          intro={copy.bloqueadas.material.text}
          numero={p.dinero}
          text={arcano(p.dinero)?.dinero ?? ""}
          lock={copy.bloqueadas.lock}
        />
        <Avance datos={datos} />
        <Pie />
      </Page>
    </>
  );
}

function PaginasPareja({ datos }: { datos: Extract<DatosPdf, { tipo: "pareja" }> }) {
  const copy = calculadoraPareja;
  const p = datos.matriz.puntos;
  const prop = datos.matriz.propositos;
  const filas: FilaProposito[] = [
    { ...copy.propositos.personal, valores: [prop.cielo, prop.tierra], resultado: prop.personal },
    { ...copy.propositos.social, valores: [prop.masculino, prop.femenino], resultado: prop.social },
    { ...copy.propositos.espiritual, valores: [prop.personal, prop.social], resultado: prop.espiritual },
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
        <Propositos filas={filas} nota={copy.propositos.locked} />
        <Pie />
      </Page>
      <Page size="A5" style={s.page}>
        <Fondo tono="rosa" />
        <Encabezado eyebrow={copy.bloqueadas.eyebrow} title={calculadoraPdf.bloqueadoParejaTitle} text={copy.bloqueadas.text} />
        <Bloqueada
          label={copy.bloqueadas.aprendizajes.label}
          intro={copy.bloqueadas.aprendizajes.text}
          numero={p.d}
          text={arcano(p.d)?.sombra ?? ""}
          lock={copy.bloqueadas.lock}
        />
        <Bloqueada
          label={copy.bloqueadas.material.label}
          intro={copy.bloqueadas.material.text}
          numero={p.dinero}
          text={arcano(p.dinero)?.dinero ?? ""}
          lock={copy.bloqueadas.lock}
        />
        <Avance datos={datos} />
        <Pie />
      </Page>
    </>
  );
}

function Tambien({ title, items, oscuro = false }: { title: string; items: string[]; oscuro?: boolean }) {
  return (
    <View wrap={false} style={{ marginTop: 14 }}>
      <Text style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: 14, color: oscuro ? c.crema : c.ciruela }}>{title}</Text>
      {items.map((item) => (
        <View key={item} style={{ flexDirection: "row", marginTop: 4 }}>
          <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: c.dorado, marginTop: 5, marginRight: 8 }} />
          <Text style={{ flex: 1, fontSize: 9.2, color: oscuro ? c.crema : c.ciruela }}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function Boton({ src, children, claro = true }: { src: string; children: ReactNode; claro?: boolean }) {
  return (
    <Link src={src} style={{ textDecoration: "none" }}>
      <View
        style={{
          backgroundColor: claro ? c.crema : "transparent",
          borderWidth: claro ? 0 : 0.8,
          borderColor: "#cbbcc5",
          borderRadius: 22,
          paddingVertical: 10,
          paddingHorizontal: 18,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 9.5, fontWeight: 600, color: claro ? c.ciruela : c.crema }}>{children}</Text>
      </View>
    </Link>
  );
}

function PaginaVenta({ datos, recursos }: { datos: DatosPdf; recursos: Recursos }) {
  const individual = datos.tipo === "individual";
  const copy = individual ? calculadoraIndividual.completa : calculadoraPareja.completa;
  return (
    <Page size="A5" style={[s.page, { backgroundColor: c.ciruela, color: c.crema }]}>
      <Fondo tono="oscuro" />
      <Text style={[s.eyebrow, { color: "#cbbcc5" }]}>{copy.eyebrow}</Text>
      <Text style={[s.h2, { color: c.crema, fontSize: 27 }]}>{individual ? calculadoraPdf.ctaTitle : calculadoraPareja.completa.title}</Text>
      <Text style={[s.lead, { color: "#e3d8de", marginTop: 8, fontSize: 9.6 }]}>{copy.text}</Text>
      {individual ? (
        <View style={{ marginTop: 10 }}>
          {calculadoraIndividual.completa.claves.map((clave, index) => (
            <View key={clave} style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
              <Text style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: 9, color: c.doradoSoft, width: 16 }}>{index + 1}</Text>
              <Text style={{ fontSize: 9.4, color: c.crema }}>{clave}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Tambien title={calculadoraPdf.tambienParejaTitle} items={calculadoraPdf.tambienPareja} oscuro />
      )}
      <Text style={{ marginTop: 10, fontSize: 8.8, color: "#d9cdd4" }}>{copy.formato}</Text>

      <View style={{ marginTop: 14, borderTopWidth: 0.6, borderTopColor: "#6e5a66", paddingTop: 12, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <Text style={[s.eyebrow, { color: "#cbbcc5" }]}>{calculadoraPdf.precio}</Text>
          <Text style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: datos.precio ? 38 : 22, color: c.doradoSoft, lineHeight: 1.1, marginTop: 2 }}>
            {datos.precio ?? calculadoraPareja.completa.precio}
          </Text>
        </View>
        <View style={{ alignItems: "center", width: 96 }}>
          <Image src={recursos.qr} style={{ width: 64, height: 64, borderRadius: 5 }} />
          <Text style={{ marginTop: 4, fontSize: 6.2, lineHeight: 1.35, color: "#cbbcc5", textAlign: "center" }}>{calculadoraPdf.ctaQr}</Text>
        </View>
      </View>

      <View style={{ marginTop: 14 }}>
        {individual ? <Boton src={datos.compraUrl}>{calculadoraPdf.ctaBuy}</Boton> : null}
        <View style={{ marginTop: individual ? 7 : 0 }}>
          <Boton src={datos.infoUrl} claro={!individual}>
            {calculadoraPdf.ctaInfo}
          </Boton>
        </View>
      </View>
      <Pie oscuro />
    </Page>
  );
}

function PaginaTati({ recursos }: { recursos: Recursos }) {
  const contactos: [string, string, string][] = [
    [calculadoraPdf.web, site.url.replace("https://www.", ""), site.url],
    [calculadoraPdf.whatsapp, site.contact.phoneDisplay, `https://wa.me/${site.contact.whatsappNumber}`],
    [calculadoraPdf.instagram, site.social.instagram.label, site.social.instagram.url],
    [site.social.tarot.label, site.social.tarot.handle, site.social.tarot.url],
  ];
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="lavanda" />
      <View style={{ alignItems: "center" }}>
        <Image src={recursos.foto} style={{ width: 104, height: 104, borderRadius: 52 }} />
        <Text style={[s.h1, { marginTop: 14, textAlign: "center", fontSize: 28 }]}>{calculadoraPdf.sobreTitle}</Text>
      </View>
      {calculadoraPdf.sobre.map((paragraph) => (
        <Text key={paragraph} style={{ marginTop: 10, fontSize: 9.4, lineHeight: 1.65, textAlign: "center" }}>
          {paragraph}
        </Text>
      ))}
      <Text style={[s.eyebrow, { marginTop: 18, textAlign: "center" }]}>{calculadoraPdf.contacto}</Text>
      <View style={{ marginTop: 8, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {contactos.map(([label, texto, src]) => (
          <Link key={label} src={src} style={{ width: "50%", paddingVertical: 4, textDecoration: "none", textAlign: "center" }}>
            <Text style={{ fontSize: 6.6, letterSpacing: 1, textTransform: "uppercase", color: c.inkSoft }}>{label}</Text>
            <Text style={{ fontSize: 9.2, color: c.rosaDeep }}>{texto}</Text>
          </Link>
        ))}
      </View>
      <View style={{ flexGrow: 1 }} />
      <View style={{ alignItems: "center" }}>
        <Image src={recursos.simbolo} style={{ width: 40, height: 38 }} />
        <Text style={[s.small, { marginTop: 8, textAlign: "center", fontSize: 7 }]}>{calculadoraPdf.aviso}</Text>
      </View>
      <Pie />
    </Page>
  );
}

export function MatrizPdf({ datos, recursos }: { datos: DatosPdf; recursos: Recursos }) {
  const titulo = datos.tipo === "individual" ? calculadoraPdf.tituloIndividual : calculadoraPdf.tituloPareja;
  return (
    <Document title={`${titulo} · ${site.name}`} author={site.person.fullName} creator={site.name} producer={site.name} language="es-ES">
      <Portada datos={datos} recursos={recursos} />
      <PaginaMatriz datos={datos} />
      {datos.tipo === "individual" ? <PaginasIndividual datos={datos} /> : <PaginasPareja datos={datos} />}
      <PaginaVenta datos={datos} recursos={recursos} />
      <PaginaTati recursos={recursos} />
    </Document>
  );
}
