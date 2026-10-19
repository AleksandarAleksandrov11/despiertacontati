import { join } from "node:path";
import { renderToBuffer } from "@react-pdf/renderer";
import QRCode from "qrcode";
import type { DatosPdf } from "./datos";
import { registrarFuentes } from "./fuentes";
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
