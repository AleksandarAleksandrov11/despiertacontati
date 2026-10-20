import { Document, Page, Text, View } from "@react-pdf/renderer";
import { arcano } from "@/content/arcanos";
import { arcanoCompleto } from "@/content/arcanos-completos";
import { calculadoraIndividual } from "@/content/calculadora";
import { lecturaCompleta } from "@/content/lectura-completa";
import { site } from "@/content/site";
import type { EnergiasAnio } from "@/lib/matriz";
import { c, Encabezado, Fondo, PaginaTati, Pie, s, type Recursos } from "./comun";
import type { DatosCompleta } from "./datos";
import { Arcano, Numero, PaginaMatriz, Portada, Propositos, TablaChakras, type FilaProposito } from "./matriz-pdf";

const copy = lecturaCompleta;

function Lista({ titulo, items, flex = false }: { titulo: string; items: string[]; flex?: boolean }) {
  return (
    <View wrap={false} style={[s.card, { marginTop: 8, paddingVertical: 10 }, flex ? { flex: 1, paddingHorizontal: 12 } : {}]}>
      <Text style={s.eyebrow}>{titulo}</Text>
      {items.map((item) => (
        <View key={item} style={{ flexDirection: "row", marginTop: 4 }}>
          <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: c.dorado, marginTop: 4.6, marginRight: 8 }} />
          <Text style={{ flex: 1, fontSize: flex ? 8 : 8.6, lineHeight: 1.4 }}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function Tarjeta({
  numero,
  texto,
  titulo,
  oro = false,
  nota,
  extra,
  compacta = false,
}: {
  numero: number;
  texto: string;
  titulo?: string;
  oro?: boolean;
  nota?: string;
  extra?: { titulo: string; texto: string };
  compacta?: boolean;
}) {
  return (
    <View wrap={false} style={[s.card, { marginTop: compacta ? 8 : 10, padding: compacta ? 11 : 13 }]}>
      {titulo ? <Text style={[s.eyebrow, { marginBottom: compacta ? 4 : 6 }]}>{titulo}</Text> : null}
      <Arcano numero={numero} size={oro ? 40 : compacta ? 26 : 32} oro={oro} />
      <Text style={{ marginTop: compacta ? 6 : 8, fontSize: compacta ? 8.5 : 8.9, lineHeight: compacta ? 1.45 : 1.5 }}>{texto}</Text>
      {extra ? (
        <>
          <Text style={[s.eyebrow, { marginTop: 8 }]}>{extra.titulo}</Text>
          <Text style={{ marginTop: 3, fontSize: 8.9, lineHeight: 1.5 }}>{extra.texto}</Text>
        </>
      ) : null}
      {nota ? <Text style={{ marginTop: 5, fontFamily: "Cormorant", fontStyle: "italic", fontSize: 9.5, lineHeight: 1.3, color: c.inkSoft }}>{nota}</Text> : null}
    </View>
  );
}

function Parrafo({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <View wrap={false} style={[s.card, { marginTop: 8, paddingVertical: 10 }]}>
      <Text style={s.eyebrow}>{titulo}</Text>
      <Text style={{ marginTop: 4, fontSize: 8.8, lineHeight: 1.5 }}>{texto}</Text>
    </View>
  );
}

function Trio({ titulo, texto, numeros }: { titulo: string; texto: string; numeros: number[] }) {
  return (
    <View wrap={false} style={[s.card, { marginTop: 8, paddingVertical: 10, backgroundColor: c.rosaPolvo }]}>
      <Text style={s.eyebrow}>{titulo}</Text>
      <Text style={[s.small, { marginTop: 2 }]}>{texto}</Text>
      <View style={{ flexDirection: "row", marginTop: 8 }}>
        {numeros.map((numero, index) => (
          <View key={index} style={{ flex: 1, flexDirection: "row", alignItems: "center", marginLeft: index === 0 ? 0 : 6, backgroundColor: "#ffffff", borderRadius: 10, padding: 6 }}>
            <Numero numero={numero} size={22} />
            <Text style={{ marginLeft: 6, flex: 1, fontFamily: "Cormorant", fontWeight: 500, fontSize: 10.5, lineHeight: 1.1 }}>{arcano(numero)?.nombre}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function Linea({ titulo, numeros }: { titulo: string; numeros: number[] }) {
  return (
    <View wrap={false} style={{ marginTop: 8, flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
      <Text style={[s.eyebrow, { marginRight: 6 }]}>{titulo}</Text>
      {numeros.map((numero, index) => (
        <View key={index} style={{ flexDirection: "row", alignItems: "center", marginRight: 8 }}>
          <Numero numero={numero} size={16} />
          <Text style={{ marginLeft: 4, fontFamily: "Cormorant", fontWeight: 500, fontSize: 10 }}>{arcano(numero)?.nombre}</Text>
        </View>
      ))}
    </View>
  );
}

function Bienvenida() {
  const llaves = [copy.llaves.energia, copy.llaves.talento, copy.llaves.material, copy.llaves.karma, copy.llaves.poder];
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="lavanda" />
      <Encabezado eyebrow={copy.bienvenida.eyebrow} title={copy.bienvenida.title} />
      {copy.bienvenida.paragraphs.map((paragraph) => (
        <Text key={paragraph} style={[s.lead, { marginTop: 8 }]}>
          {paragraph}
        </Text>
      ))}
      <View wrap={false} style={[s.card, { marginTop: 14 }]}>
        <Text style={s.eyebrow}>{copy.bienvenida.llavesTitle}</Text>
        <Text style={[s.small, { marginTop: 2 }]}>{copy.bienvenida.llavesText}</Text>
        {llaves.map((llave, index) => (
          <View key={llave.title} style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
            <Text style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: 16, color: c.dorado, width: 18 }}>{index + 1}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: "Cormorant", fontWeight: 500, fontSize: 12.5, lineHeight: 1.1 }}>{llave.title}</Text>
              <Text style={[s.small, { fontSize: 7.2 }]}>{llave.eyebrow.split(" · ")[1]}</Text>
            </View>
          </View>
        ))}
      </View>
      <Pie />
    </Page>
  );
}

function Llaves({ datos }: { datos: DatosCompleta }) {
  const p = datos.matriz.puntos;
  const llaves = copy.llaves;
  const valores = [p.a, p.b, p.c, p.d, p.e];
  const nota = (numero: number) => (valores.filter((valor) => valor === numero).length > 1 ? copy.repetida : undefined);
  const a = arcanoCompleto(p.a);
  const b = arcanoCompleto(p.b);
  const cc = arcanoCompleto(p.c);
  const d = arcanoCompleto(p.d);
  const e = arcanoCompleto(p.e);
  return (
    <>
      <Page size="A5" style={s.page}>
        <Fondo tono="rosa" />
        <Encabezado eyebrow={llaves.energia.eyebrow} title={llaves.energia.title} text={llaves.energia.text} />
        <Tarjeta numero={p.a} texto={arcano(p.a)?.luz ?? ""} nota={nota(p.a)} />
        <View style={{ flexDirection: "row" }}>
          <Lista titulo={llaves.energia.equilibrio} items={a.equilibrio} flex />
          <View style={{ width: 8 }} />
          <Lista titulo={llaves.energia.desequilibrio} items={a.desequilibrio} flex />
        </View>
        <Pie />
      </Page>
      <Page size="A5" style={s.page}>
        <Fondo tono="salvia" />
        <Encabezado eyebrow={llaves.talento.eyebrow} title={llaves.talento.title} text={llaves.talento.text} />
        <Tarjeta numero={p.b} texto={arcano(p.b)?.talento ?? ""} nota={nota(p.b)} />
        <Trio titulo={llaves.talento.linea} texto={llaves.talento.lineaText} numeros={[p.b, p.b2, p.b1]} />
        <Lista titulo={llaves.talento.activar} items={b.activar} />
        <Pie />
      </Page>
      <Page size="A5" style={s.page}>
        <Fondo tono="lavanda" />
        <Encabezado eyebrow={llaves.material.eyebrow} title={llaves.material.title} text={llaves.material.text} />
        <Tarjeta numero={p.c} texto={cc.material} nota={nota(p.c)} />
        <Parrafo titulo={llaves.energia.desequilibrio} texto={arcano(p.c)?.sombra ?? ""} />
        <Pie />
      </Page>
      <Page size="A5" style={s.page}>
        <Fondo tono="rosa" />
        <Encabezado eyebrow={llaves.karma.eyebrow} title={llaves.karma.title} text={llaves.karma.text} />
        <Tarjeta numero={p.d} texto={d.karma.origen} extra={{ titulo: llaves.karma.hoy, texto: d.karma.hoy }} nota={nota(p.d)} />
        <Lista titulo={llaves.karma.trabajar} items={d.karma.trabajar} />
        <Linea titulo={llaves.karma.cola} numeros={[p.d1, p.d2, p.d]} />
        <Pie />
      </Page>
      <Page size="A5" style={s.page}>
        <Fondo tono="salvia" />
        <Encabezado eyebrow={llaves.poder.eyebrow} title={llaves.poder.title} text={llaves.poder.text} />
        <Tarjeta numero={p.e} texto={e.poder} oro nota={nota(p.e)} />
        <Lista titulo={llaves.poder.activar} items={e.activar} />
        <Pie />
      </Page>
    </>
  );
}

function PaginaPropositos({ datos }: { datos: DatosCompleta }) {
  const base = calculadoraIndividual.propositos;
  const prop = datos.matriz.propositos;
  const filas: FilaProposito[] = [
    { ...base.personal, valores: [prop.cielo, prop.tierra], resultado: prop.personal, texto: arcano(prop.personal)?.proposito },
    { ...base.social, valores: [prop.masculino, prop.femenino], resultado: prop.social, texto: arcano(prop.social)?.proposito },
    { ...base.espiritual, valores: [prop.personal, prop.social], resultado: prop.espiritual, texto: arcano(prop.espiritual)?.proposito },
    { ...base.planetario, valores: [prop.social, prop.espiritual], resultado: prop.planetario, texto: arcano(prop.planetario)?.proposito },
  ];
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="lavanda" />
      <Encabezado eyebrow={copy.propositos.eyebrow} title={copy.propositos.title} text={copy.propositos.text} />
      <Propositos filas={filas} />
      <Pie />
    </Page>
  );
}

function PaginaPareja({ datos }: { datos: DatosCompleta }) {
  const p = datos.matriz.puntos;
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="rosa" />
      <Encabezado eyebrow={copy.pareja.eyebrow} title={copy.pareja.title} text={copy.pareja.text} />
      <Tarjeta numero={p.amor} texto={arcanoCompleto(p.amor).pareja} titulo={copy.pareja.vinculo} />
      <Parrafo titulo={copy.pareja.convivencia} texto={arcano(p.amor)?.amor ?? ""} />
      <Pie />
    </Page>
  );
}

function PaginaDinero({ datos }: { datos: DatosCompleta }) {
  const p = datos.matriz.puntos;
  const canal = [p.c1, p.x, p.dinero];
  return (
    <>
    <Page size="A5" style={s.page}>
      <Fondo tono="salvia" />
      <Encabezado eyebrow={copy.dinero.eyebrow} title={copy.dinero.profesiones} text={copy.dinero.profesionesText} />
      <View wrap={false} style={[s.card, { marginTop: 12, padding: 16 }]}>
        <Arcano numero={p.dinero} size={34} />
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
          {arcanoCompleto(p.dinero).profesiones.map((profesion) => (
            <View key={profesion} style={{ backgroundColor: c.salvia, borderRadius: 20, paddingVertical: 3, paddingHorizontal: 9, marginRight: 5, marginBottom: 5 }}>
              <Text style={{ fontSize: 8 }}>{profesion}</Text>
            </View>
          ))}
        </View>
        <Text style={{ marginTop: 6, fontSize: 9.2, lineHeight: 1.55 }}>{arcano(p.dinero)?.talento ?? ""}</Text>
      </View>
      <Pie />
    </Page>
    <Page size="A5" style={s.page}>
      <Fondo tono="lavanda" />
      <Encabezado eyebrow={copy.dinero.eyebrow} title={copy.dinero.canal} text={copy.dinero.canalText} />
      <View wrap={false} style={[s.card, { marginTop: 12, padding: 16 }]}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          {canal.map((numero, index) => (
            <View key={index} style={{ flexDirection: "row", alignItems: "center" }}>
              {index > 0 ? <View style={{ width: 26, height: 0.8, backgroundColor: c.dorado, marginHorizontal: 6 }} /> : null}
              <Numero numero={numero} size={index === 2 ? 32 : 26} oro={index === 2} />
            </View>
          ))}
        </View>
        <Text style={[s.eyebrow, { marginTop: 12 }]}>{`${copy.dinero.frena} · ${arcano(p.c1)?.nombre ?? ""}`}</Text>
        <Text style={{ marginTop: 3, fontSize: 9, lineHeight: 1.5 }}>{arcanoCompleto(p.c1).material}</Text>
        <Text style={[s.eyebrow, { marginTop: 10 }]}>{`${copy.dinero.abre} · ${arcano(p.dinero)?.nombre ?? ""}`}</Text>
        <Text style={{ marginTop: 3, fontSize: 9, lineHeight: 1.5 }}>{arcano(p.dinero)?.dinero ?? ""}</Text>
      </View>
      <Pie />
    </Page>
    </>
  );
}

function PaginaLinaje({ datos }: { datos: DatosCompleta }) {
  const p = datos.matriz.puntos;
  const prop = datos.matriz.propositos;
  const lineas =
    prop.masculino === prop.femenino
      ? [{ titulo: `${copy.linaje.paterna} y ${copy.linaje.materna.toLowerCase()}`, numero: prop.masculino }]
      : [
          { titulo: copy.linaje.paterna, numero: prop.masculino },
          { titulo: copy.linaje.materna, numero: prop.femenino },
        ];
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="lavanda" />
      <Encabezado eyebrow={copy.linaje.eyebrow} title={copy.linaje.title} text={copy.linaje.text} />
      <Linea titulo={copy.linaje.centro} numeros={[p.k]} />
      <Text style={[s.small, { marginTop: 2 }]}>{copy.linaje.centroText}</Text>
      {lineas.map((linea) => (
        <Tarjeta key={linea.titulo} titulo={linea.titulo} numero={linea.numero} texto={arcanoCompleto(linea.numero).linaje} compacta={lineas.length > 1} />
      ))}
      <Pie />
    </Page>
  );
}

function PaginaAnio({ anio }: { anio: EnergiasAnio }) {
  const items =
    anio.propia === anio.deOpuesta
      ? [
          { titulo: `${copy.anio.edad(anio.edad)} · ${copy.anio.opuesta(anio.opuesta)}`, numero: anio.propia },
          { titulo: copy.anio.suma, numero: anio.suma },
        ]
      : [
          { titulo: copy.anio.edad(anio.edad), numero: anio.propia },
          { titulo: copy.anio.opuesta(anio.opuesta), numero: anio.deOpuesta },
          { titulo: copy.anio.suma, numero: anio.suma },
        ];
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="rosa" />
      <Encabezado eyebrow={copy.anio.eyebrow} title={copy.anio.title(anio.edad)} text={copy.anio.text} />
      {items.map((item) => (
        <Tarjeta key={item.titulo} titulo={item.titulo} numero={item.numero} texto={arcanoCompleto(item.numero).anio} compacta />
      ))}
      <Pie />
    </Page>
  );
}

function PaginaEtapas({ datos }: { datos: DatosCompleta }) {
  const base = calculadoraIndividual.chakras;
  const edades = datos.matriz.edades;
  const actual = datos.anio ? Math.floor(datos.anio.edad / 10) : -1;
  return (
    <>
    <Page size="A5" style={s.page}>
      <Fondo tono="salvia" />
      <Encabezado eyebrow={copy.anio.eyebrow} title={copy.anio.etapasTitle} text={copy.anio.etapasText} />
      <View wrap={false} style={[s.card, { marginTop: 10, paddingVertical: 8 }]}>
        {edades.map((tramo, index) => {
          const valor = tramo.etapas[0]?.valor ?? 0;
          const esActual = index === actual;
          return (
            <View
              key={tramo.desde}
              style={{ flexDirection: "row", alignItems: "center", paddingVertical: 2.6, paddingHorizontal: 4, borderRadius: 6, backgroundColor: esActual ? c.lavanda : "transparent" }}
            >
              <View style={{ width: 86 }}>
                <Text style={{ fontSize: 7.6, color: c.inkSoft }}>{copy.anio.etapa(tramo.desde)}</Text>
                {esActual ? <Text style={[s.eyebrow, { fontSize: 5.4, color: c.rosaDeep }]}>{copy.anio.actual}</Text> : null}
              </View>
              <Numero numero={valor} size={17} />
              <Text style={{ marginLeft: 6, flex: 1, fontFamily: "Cormorant", fontWeight: 500, fontSize: 10.5, lineHeight: 1.1 }}>
                {`${arcano(valor)?.nombre ?? ""} · ${arcano(valor)?.clave ?? ""}`}
              </Text>
            </View>
          );
        })}
      </View>
      <Pie />
    </Page>
    <Page size="A5" style={s.page}>
      <Fondo tono="rosa" />
      <Encabezado eyebrow={base.eyebrow} title={base.title} text={base.text} />
      <TablaChakras matriz={datos.matriz} />
      <Pie />
    </Page>
    </>
  );
}

function Cierre() {
  return (
    <Page size="A5" style={[s.page, { backgroundColor: c.ciruela, color: c.crema }]}>
      <Fondo tono="oscuro" />
      <Text style={[s.eyebrow, { color: "#cbbcc5" }]}>{copy.cierre.eyebrow}</Text>
      <Text style={[s.h2, { color: c.crema, fontSize: 27 }]}>{copy.cierre.title}</Text>
      {copy.cierre.paragraphs.map((paragraph) => (
        <Text key={paragraph} style={[s.lead, { color: "#e3d8de", marginTop: 10 }]}>
          {paragraph}
        </Text>
      ))}
      <Text style={{ marginTop: 18, fontFamily: "Allura", fontSize: 28, color: c.doradoSoft }}>{copy.cierre.firma}</Text>
      <Pie oscuro />
    </Page>
  );
}

export function LecturaCompletaPdf({ datos, recursos }: { datos: DatosCompleta; recursos: Recursos }) {
  return (
    <Document title={`${copy.etiqueta} · ${copy.titulo} · ${site.name}`} author={site.person.fullName} creator={site.name} producer={site.name} language="es-ES">
      <Portada datos={datos} recursos={recursos} />
      <Bienvenida />
      <PaginaMatriz datos={datos} />
      <Llaves datos={datos} />
      <PaginaPropositos datos={datos} />
      <PaginaPareja datos={datos} />
      <PaginaDinero datos={datos} />
      <PaginaLinaje datos={datos} />
      {datos.anio ? <PaginaAnio anio={datos.anio} /> : null}
      <PaginaEtapas datos={datos} />
      <Cierre />
      <PaginaTati recursos={recursos} />
    </Document>
  );
}
