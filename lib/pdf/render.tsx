import { join } from "node:path";
import { renderToBuffer } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { CodigoPdf, type DatosCodigo } from "./codigo-pdf";
import type { DatosCompleta, DatosPdf } from "./datos";
import { registrarFuentes } from "./fuentes";
import { LecturaCompletaPdf } from "./lectura-completa-pdf";
import { MatrizPdf } from "./matriz-pdf";

export async function renderMatrizPdf(datos: DatosPdf) {
  registrarFuentes();
  const root = process.cwd();
  const qr = await QRCode.toDataURL(datos.infoUrl, {
    margin: 1,
    width: 320,
    errorCorrectionLevel: "M",
    color: { dark: "#3f2e3a", light: "#fbf7f2" },
  });
  return renderToBuffer(
    <MatrizPdf
      datos={datos}
      recursos={{
        logo: join(root, "public/brand/logo-vertical.png"),
        simbolo: join(root, "public/brand/simbolo.png"),
        foto: join(root, "assets/pdf/tati.jpg"),
        qr,
      }}
    />,
  );
}

export async function renderCodigoPdf(datos: DatosCodigo, claves: string[]) {
  registrarFuentes();
  const root = process.cwd();
  const qr = await QRCode.toDataURL(datos.infoUrl, {
    margin: 1,
    width: 320,
    errorCorrectionLevel: "M",
    color: { dark: "#3f2e3a", light: "#fbf7f2" },
  });
  return renderToBuffer(
    <CodigoPdf
      datos={datos}
      claves={claves}
      recursos={{
        logo: join(root, "public/brand/logo-vertical.png"),
        simbolo: join(root, "public/brand/simbolo.png"),
        foto: join(root, "assets/pdf/tati.jpg"),
        qr,
        cartas: join(root, "assets/tarot"),
      }}
    />,
  );
}

export async function renderLecturaCompleta(datos: DatosCompleta) {
  registrarFuentes();
  const root = process.cwd();
  return renderToBuffer(
    <LecturaCompletaPdf
      datos={datos}
      recursos={{
        logo: join(root, "public/brand/logo-vertical.png"),
        simbolo: join(root, "public/brand/simbolo.png"),
        foto: join(root, "assets/pdf/tati.jpg"),
        qr: "",
      }}
    />,
  );
}
