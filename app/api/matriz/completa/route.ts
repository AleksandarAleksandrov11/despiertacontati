import { timingSafeEqual } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { datosCompleta } from "@/lib/pdf/datos";
import { renderLecturaCompleta } from "@/lib/pdf/render";

export const runtime = "nodejs";

function autorizada(clave: string | null) {
  const secreto = process.env.LECTURA_COMPLETA_CLAVE;
  if (!secreto || !clave) return false;
  const a = Buffer.from(clave);
  const b = Buffer.from(secreto);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  if (!autorizada(params.get("clave"))) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }
  const datos = datosCompleta(params);
  if (!datos) {
    return NextResponse.json({ ok: false, error: "invalid_data" }, { status: 400 });
  }
  const pdf = await renderLecturaCompleta(datos);
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${datos.archivo}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
