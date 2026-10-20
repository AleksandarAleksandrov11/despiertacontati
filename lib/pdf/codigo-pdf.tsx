import { join } from "node:path";
import { Document, Image, Link, Page, Text, View } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import { calculadoraPdf } from "@/content/calculadora";
import { codigoPersonal, creditos, mazos, nombreCarta, type Mazo } from "@/content/codigo-personal";
import { site } from "@/content/site";
import { carta, type CodigoPersonal } from "@/lib/codigo-personal";
import { Boton, c, Encabezado, Fondo, PaginaTati, Pie, s, type Recursos } from "./comun";

export type DatosCodigo = {
  resultado: CodigoPersonal;
  mazo: Mazo;
  nombre: string;
  texto: string;
  precio: string | null;
  compraUrl: string;
  infoUrl: string;
  archivo: string;
};

type RecursosCodigo = Recursos & { cartas: string; raul: string };

function CartaPdf({ recursos, mazo, id, width, label, destacada = false }: { recursos: RecursosCodigo; mazo: Mazo; id: number | string; width: number; label?: string; destacada?: boolean }) {
  const alto = mazo === "rider" ? (width * 638) / 360 : (width * mazos[1]!.alto) / 360;
  return (
    <View style={{ width, alignItems: "center" }}>
      <View style={{ width, height: alto, borderRadius: 4, overflow: "hidden", borderWidth: destacada ? 1.6 : 0, borderColor: c.dorado }}>
        <Image src={join(recursos.cartas, mazo, `${id}.jpg`)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </View>
      {label !== undefined ? (
        <Text style={{ marginTop: 4, fontSize: 6.2, lineHeight: 1.25, textAlign: "center", color: "#e3d8de" }}>{label || " "}</Text>
      ) : null}
    </View>
  );
}

function Tablero({ children }: { children: ReactNode }) {
  return <View style={{ marginTop: 12, backgroundColor: c.ciruela, borderRadius: 14, paddingVertical: 14, paddingHorizontal: 10 }}>{children}</View>;
}

function Portada({ datos, recursos }: { datos: DatosCodigo; recursos: RecursosCodigo }) {
  return (
    <Page size="A5" style={[s.page, { paddingTop: 54, alignItems: "center" }]}>
      <Fondo tono="rosa" />
      <Image src={recursos.logo} style={{ width: 150, height: 198 }} />
      <Text style={[s.eyebrow, { marginTop: 36, letterSpacing: 2.4 }]}>{codigoPersonal.eyebrow}</Text>
      <Text style={[s.h1, { marginTop: 10, textAlign: "center", fontSize: 34 }]}>{codigoPersonal.perfil.title}</Text>
      {datos.nombre ? (
        <Text style={{ fontFamily: "Allura", fontSize: datos.nombre.length <= 14 ? 38 : datos.nombre.length <= 24 ? 30 : 24, color: c.rosaDeep, marginTop: 8, lineHeight: 1.2, textAlign: "center" }}>
          {datos.nombre}
        </Text>
      ) : null}
      <Text style={[s.eyebrow, { marginTop: datos.nombre ? 6 : 16 }]}>{calculadoraPdf.nacimiento}</Text>
      <Text style={{ fontFamily: "Manrope", fontWeight: 500, fontSize: 12, letterSpacing: 1.2, marginTop: 5 }}>{datos.texto}</Text>
      <View style={{ position: "absolute", bottom: 34, left: 42, right: 42, alignItems: "center" }}>
        <Text style={[s.small, { textAlign: "center", fontSize: 7.4 }]}>{`${creditos.metodo} · ${creditos.autor}`}</Text>
        <Link src={site.url} style={{ marginTop: 6, fontSize: 8, color: c.rosaDeep, textDecoration: "none" }}>
          {site.url.replace("https://www.", "")}
        </Link>
      </View>
    </Page>
  );
}

function PaginaPerfil({ datos, recursos }: { datos: DatosCodigo; recursos: RecursosCodigo }) {
  const copy = codigoPersonal;
  const r = datos.resultado;
  const pills: [string, string][] = [
    [copy.pills.personal, String(r.personal)],
    [copy.pills.secundario, String(r.secundario)],
    [copy.pills.desafio, String(r.desafio)],
    [copy.pills.complementos, `${r.complementos[0]} · ${r.complementos[1]}`],
  ];
  const filas: { id: number | string; label: string; destacada?: boolean }[][] = [
    [
      { id: "asespadas", label: "" },
      { id: carta(r.personal), label: copy.perfil.personal, destacada: true },
      { id: carta(r.secundario), label: copy.perfil.secundario },
      { id: "ascopas", label: "" },
    ],
    [
      { id: "asoros", label: "" },
      { id: r.complementos[0], label: copy.perfil.complemento1 },
      { id: r.complementos[1], label: copy.perfil.complemento2 },
      { id: "asbastos", label: "" },
    ],
  ];
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="lavanda" />
      <Encabezado eyebrow={copy.resultadosTitle(datos.nombre)} title={copy.perfil.title} text={copy.perfil.text} />
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
        {pills.map(([label, valor]) => (
          <View key={label} style={{ backgroundColor: "#ffffff", borderRadius: 20, paddingVertical: 4, paddingHorizontal: 9, marginRight: 5, marginBottom: 5 }}>
            <Text style={{ fontSize: 7.6 }}>
              {`${label}: `}
              <Text style={{ fontWeight: 600, color: c.rosaDeep }}>{valor}</Text>
            </Text>
          </View>
        ))}
      </View>
      <Tablero>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <View>
            {filas.map((fila, index) => (
              <View key={index} style={{ flexDirection: "row", marginTop: index === 0 ? 0 : 10 }}>
                {fila.map((celda, i) => (
                  <View key={i} style={{ marginLeft: i === 0 ? 0 : 7 }}>
                    <CartaPdf recursos={recursos} mazo={datos.mazo} id={celda.id} width={54} label={celda.label} destacada={celda.destacada} />
                  </View>
                ))}
              </View>
            ))}
          </View>
          <View style={{ marginLeft: 14 }}>
            <CartaPdf recursos={recursos} mazo={datos.mazo} id={carta(r.desafio)} width={58} label={copy.perfil.desafio} destacada />
          </View>
        </View>
      </Tablero>
      <Pie />
    </Page>
  );
}

function PaginaArcano({ datos, recursos }: { datos: DatosCodigo; recursos: RecursosCodigo }) {
  const copy = codigoPersonal.arcano;
  const numero = carta(datos.resultado.personal);
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="rosa" />
      <Encabezado eyebrow={codigoPersonal.resultadosTitle(datos.nombre)} title={copy.title} text={copy.text} />
      <Tablero>
        <View style={{ alignItems: "center", paddingVertical: 6 }}>
          <CartaPdf recursos={recursos} mazo={datos.mazo} id={numero} width={128} destacada />
          <Text style={[s.eyebrow, { marginTop: 12, color: "#cbbcc5" }]}>{copy.numero(numero)}</Text>
          <Text style={{ marginTop: 4, fontFamily: "Cormorant", fontWeight: 500, fontSize: 24, color: c.crema }}>{nombreCarta(numero, datos.mazo)}</Text>
        </View>
      </Tablero>
      <Pie />
    </Page>
  );
}

function PaginaLectura({ datos, recursos, claves }: { datos: DatosCodigo; recursos: RecursosCodigo; claves: string[] }) {
  const copy = codigoPersonal.lectura;
  return (
    <Page size="A5" style={[s.page, { backgroundColor: c.ciruela, color: c.crema }]}>
      <Fondo tono="oscuro" />
      <Text style={[s.eyebrow, { color: "#cbbcc5" }]}>{copy.eyebrow}</Text>
      <Text style={[s.h2, { color: c.crema, fontSize: 27 }]}>{copy.title}</Text>
      <Text style={[s.lead, { color: "#e3d8de", marginTop: 8, fontSize: 9.6 }]}>{copy.text}</Text>
      <View style={{ marginTop: 10 }}>
        {claves.map((clave, index) => (
          <View key={clave} style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
            <Text style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: 9, color: c.doradoSoft, width: 16 }}>{index + 1}</Text>
            <Text style={{ fontSize: 9.4, color: c.crema }}>{clave}</Text>
          </View>
        ))}
      </View>
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
        <Boton src={datos.compraUrl}>{copy.cta}</Boton>
        <View style={{ marginTop: 7 }}>
          <Boton src={datos.infoUrl} claro={false}>
            {calculadoraPdf.ctaInfo}
          </Boton>
        </View>
      </View>
      <View style={{ marginTop: 14, flexDirection: "row", alignItems: "center", backgroundColor: c.crema, borderRadius: 12, padding: 9 }}>
        <Image src={recursos.raul} style={{ width: 44, height: 44 }} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 7.6, fontWeight: 600, color: c.ciruela }}>{creditos.metodo}</Text>
          <Text style={{ marginTop: 2, fontSize: 7, lineHeight: 1.45, color: c.inkSoft }}>{`${creditos.autor} · ${creditos.libro}`}</Text>
          <Link src={creditos.web} style={{ marginTop: 3, fontSize: 7.2, color: c.rosaDeep, textDecoration: "none" }}>
            {`${creditos.webLabel} · ${creditos.instagramLabel}`}
          </Link>
        </View>
      </View>
      <Pie oscuro />
    </Page>
  );
}

export function CodigoPdf({ datos, recursos, claves }: { datos: DatosCodigo; recursos: RecursosCodigo; claves: string[] }) {
  return (
    <Document title={`${codigoPersonal.perfil.title} · ${site.name}`} author={site.person.fullName} creator={site.name} producer={site.name} language="es-ES">
      <Portada datos={datos} recursos={recursos} />
      <PaginaArcano datos={datos} recursos={recursos} />
      <PaginaPerfil datos={datos} recursos={recursos} />
      <PaginaLectura datos={datos} recursos={recursos} claves={claves} />
      <PaginaTati recursos={recursos} />
    </Document>
  );
}
