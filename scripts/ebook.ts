import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import QRCode from "qrcode";
import { chromium } from "playwright";
import { ebook } from "../content/ebook";

const root = process.cwd();
const output = join(root, "public/descargas/tu-primera-pausa.pdf");

const chakras = ["#d9776f", "#e9a66b", "#e8c96a", "#8fb996", "#7fb3d5", "#7c86c2", "#a88bc7"];

function escape(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

async function font(file: string) {
  const data = await readFile(join(root, "assets/fonts", file));
  return `data:font/ttf;base64,${data.toString("base64")}`;
}

function dots() {
  return `<div class="dots">${chakras.map((color) => `<span style="background:${color}"></span>`).join("")}</div>`;
}

function logo(size: "sm" | "lg" = "sm") {
  return `<p class="logo logo-${size}"><span class="l1">Despierta</span> <span class="l2">con</span> <span class="l3">Tati</span></p>`;
}

function page(content: string, number: number) {
  return `<section class="page">
  <div class="blob blob-a"></div>
  <div class="blob blob-b"></div>
  <div class="inner">${content}</div>
  <footer><span>${escape(ebook.footer)}</span><span>${number}</span></footer>
</section>`;
}

function paragraphs(items: string[]) {
  return items.map((item) => `<p>${escape(item)}</p>`).join("");
}

async function html() {
  const [serif, serifItalic, sans] = await Promise.all([
    font("cormorant-garamond-500.ttf"),
    font("cormorant-garamond-500-italic.ttf"),
    font("manrope-500.ttf"),
  ]);
  const qr = await QRCode.toString(ebook.audioUrl, {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#3f2e3a", light: "#fbf7f2" },
  });

  const cover = `<section class="page cover">
  <div class="blob blob-a"></div>
  <div class="blob blob-b"></div>
  <div class="blob blob-c"></div>
  <div class="frame"></div>
  <div class="cover-inner">
    <p class="kicker">${escape(ebook.kicker)}</p>
    <div>
      <h1>${escape(ebook.title)}</h1>
      <span class="rule"></span>
      <p class="cover-sub">${escape(ebook.subtitle)}</p>
    </div>
    <div class="cover-foot">${logo("lg")}${dots()}</div>
  </div>
</section>`;

  const bienvenida = page(
    `<p class="eyebrow">01</p><h2>${escape(ebook.bienvenida.title)}</h2>${paragraphs(ebook.bienvenida.paragraphs)}`,
    2,
  );

  const queEs = page(
    `<p class="eyebrow">02</p><h2>${escape(ebook.queEs.title)}</h2>${paragraphs(ebook.queEs.paragraphs)}
    <div class="card"><h3>${escape(ebook.queEs.noEs.title)}</h3><ul>${ebook.queEs.noEs.items.map((item) => `<li>${escape(item)}</li>`).join("")}</ul></div>
    <p class="quote">${escape(ebook.queEs.cierre)}</p>`,
    3,
  );

  const claves = page(
    `<p class="eyebrow">03</p><h2>${escape(ebook.claves.title)}</h2>
    <ol class="keys">${ebook.claves.items
      .map((item, index) => `<li><span class="num">${index + 1}</span><div><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p></div></li>`)
      .join("")}</ol>`,
    4,
  );

  const freno = page(
    `<p class="eyebrow">04</p><h2>${escape(ebook.freno.title)}</h2><p class="lead">${escape(ebook.freno.intro)}</p>
    <div class="card"><h3>${escape(ebook.freno.pasos.title)}</h3><ul>${ebook.freno.pasos.items.map((item) => `<li>${escape(item)}</li>`).join("")}</ul></div>
    <div class="listen">
      <div class="qr">${qr}</div>
      <div>
        <p class="listen-title">${escape(ebook.freno.listen)}</p>
        <p><a href="${escape(ebook.audioUrl)}">${ebook.audioUrl
          .replace("https://", "")
          .split("/")
          .map(escape)
          .join("/<wbr>")}</a></p>
        <p class="small">${escape(ebook.freno.qr)}</p>
      </div>
    </div>`,
    5,
  );

  const despues = page(
    `<p class="eyebrow">05</p><h2>${escape(ebook.despues.title)}</h2>${paragraphs(ebook.despues.paragraphs)}
    <ul class="next">${ebook.despues.items.map((item) => `<li><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p></li>`).join("")}</ul>
    <p class="sign">${escape(ebook.despues.firma)}<br><span>${escape(ebook.despues.nombre)}</span></p>
    <div class="end">${logo()}<p><a href="https://www.${escape(ebook.despues.web)}">${escape(ebook.despues.web)}</a> · ${escape(ebook.despues.instagram)}</p>${dots()}</div>
    <p class="notice">${escape(ebook.aviso)}</p>`,
    6,
  );

  return `<!doctype html>
<html lang="es-ES">
<head>
<meta charset="utf-8">
<title>${escape(ebook.title)}</title>
<style>
@font-face { font-family: "Cormorant"; src: url(${serif}); font-weight: 500; }
@font-face { font-family: "CormorantItalic"; src: url(${serifItalic}); font-weight: 500; }
@font-face { font-family: "Manrope"; src: url(${sans}); font-weight: 500; }
@page { size: 148mm 210mm; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: #fbf7f2; color: #3f2e3a; font-family: "Manrope", sans-serif; font-size: 10pt; line-height: 1.65; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { position: relative; width: 148mm; height: 210mm; overflow: hidden; page-break-after: always; background: #fbf7f2; }
.page:last-child { page-break-after: auto; }
.blob { position: absolute; border-radius: 50%; }
.blob-a { width: 90mm; height: 90mm; right: -38mm; top: -38mm; background: radial-gradient(circle, #f3dedb 0%, rgba(246, 233, 230, 0) 68%); }
.blob-b { width: 86mm; height: 86mm; left: -40mm; bottom: -34mm; background: radial-gradient(circle, #e9e1f2 0%, rgba(241, 236, 246, 0) 68%); }
.blob-c { width: 70mm; height: 70mm; right: -6mm; bottom: 26mm; background: radial-gradient(circle, #e3ece0 0%, rgba(238, 243, 236, 0) 68%); }
.inner { position: relative; padding: 22mm 18mm 20mm; }
footer { position: absolute; left: 18mm; right: 18mm; bottom: 9mm; display: flex; justify-content: space-between; font-size: 7pt; letter-spacing: 0.08em; color: #6e5a66; border-top: 0.3mm solid #e7dcd3; padding-top: 3mm; }
.eyebrow { font-size: 7pt; letter-spacing: 0.24em; text-transform: uppercase; color: #6e5a66; margin-bottom: 4mm; }
h1, h2, h3 { font-weight: 500; color: #3f2e3a; }
h2 { font-family: "CormorantItalic", serif; font-size: 27pt; line-height: 1.05; margin-bottom: 7mm; }
h3 { font-family: "Cormorant", serif; font-size: 14pt; line-height: 1.2; }
p { margin-bottom: 3.5mm; }
.lead { font-size: 10.5pt; }
.quote { font-family: "CormorantItalic", serif; font-size: 15pt; line-height: 1.3; color: #9c5f6c; margin-top: 8mm; padding-left: 5mm; border-left: 0.4mm solid #c8a46a; }
.card { margin-top: 7mm; padding: 6mm 7mm; border-radius: 4mm; background: rgba(241, 236, 246, 0.8); }
.card h3 { margin-bottom: 2.5mm; }
.card ul, .next { list-style: none; }
.card li { position: relative; padding-left: 6mm; margin-bottom: 1.8mm; }
.card li::before { content: ""; position: absolute; left: 0; top: 2.4mm; width: 3.5mm; height: 0.3mm; background: #c8a46a; }
.keys { list-style: none; }
.keys li { display: flex; gap: 5mm; padding: 3.6mm 0; border-bottom: 0.3mm solid #e7dcd3; }
.keys li:first-child { border-top: 0.3mm solid #e7dcd3; }
.keys p { margin: 1mm 0 0; color: #6e5a66; }
.num { flex: none; width: 8mm; height: 8mm; border-radius: 50%; border: 0.3mm solid rgba(63, 46, 58, 0.2); display: flex; align-items: center; justify-content: center; font-family: "CormorantItalic", serif; font-size: 12pt; color: #9c5f6c; }
.listen { margin-top: 8mm; display: flex; gap: 6mm; align-items: center; padding: 6mm; border-radius: 4mm; border: 0.3mm solid #e7dcd3; background: #fff; }
.qr { flex: none; width: 32mm; height: 32mm; }
.qr svg { width: 100%; height: 100%; display: block; }
.listen-title { font-family: "CormorantItalic", serif; font-size: 16pt; line-height: 1.1; margin-bottom: 2mm; }
.listen a { color: #8e5f80; }
.small { font-size: 7.6pt; color: #6e5a66; margin: 2mm 0 0; }
.next li { padding: 3.2mm 0; border-bottom: 0.3mm solid #e7dcd3; }
.next p { margin: 0.6mm 0 0; color: #6e5a66; }
.sign { margin-top: 8mm; }
.sign span { font-family: "CormorantItalic", serif; font-size: 20pt; color: #9c5f6c; }
.end { margin-top: 7mm; display: flex; flex-direction: column; gap: 1.5mm; }
.end p { margin: 0; color: #6e5a66; font-size: 8pt; }
.end a { color: #8e5f80; text-decoration: none; }
.notice { margin-top: 7mm; font-size: 7pt; line-height: 1.5; color: #6e5a66; }
.logo { margin: 0; display: flex; align-items: baseline; gap: 1.6mm; line-height: 1; }
.logo .l1, .logo .l3 { font-family: "CormorantItalic", serif; }
.logo .l1 { color: #9c5f6c; }
.logo .l3 { color: #8e5f80; }
.logo .l2 { font-family: "Cormorant", serif; color: #6e5a66; }
.logo-sm .l1, .logo-sm .l3 { font-size: 15pt; }
.logo-sm .l2 { font-size: 9pt; }
.logo-lg .l1, .logo-lg .l3 { font-size: 21pt; }
.logo-lg .l2 { font-size: 11pt; }
.dots { display: flex; gap: 1.6mm; }
.dots span { width: 1.8mm; height: 1.8mm; border-radius: 50%; display: block; }
.cover .frame { position: absolute; inset: 8mm; border: 0.35mm solid rgba(200, 164, 106, 0.55); border-radius: 3mm; }
.cover-inner { position: relative; height: 100%; padding: 24mm 18mm 20mm; display: flex; flex-direction: column; justify-content: space-between; }
.kicker { font-size: 7.5pt; letter-spacing: 0.26em; text-transform: uppercase; color: #6e5a66; }
.cover h1 { font-family: "CormorantItalic", serif; font-size: 50pt; line-height: 0.95; }
.rule { display: block; width: 18mm; height: 0.35mm; background: #c8a46a; margin: 8mm 0 6mm; }
.cover-sub { font-family: "Cormorant", serif; font-size: 14pt; line-height: 1.35; color: #54404e; max-width: 95mm; }
.cover-foot { display: flex; align-items: flex-end; justify-content: space-between; }
</style>
</head>
<body>
${cover}
${bienvenida}
${queEs}
${claves}
${freno}
${despues}
</body>
</html>`;
}

async function main() {
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  try {
    const context = await browser.newContext();
    const tab = await context.newPage();
    await tab.setContent(await html(), { waitUntil: "load" });
    await tab.evaluate(() => document.fonts.ready);
    const pdf = await tab.pdf({ width: "148mm", height: "210mm", printBackground: true, preferCSSPageSize: true });
    await mkdir(join(root, "public/descargas"), { recursive: true });
    await writeFile(output, pdf);
  } finally {
    await browser.close();
  }
}

main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
});
