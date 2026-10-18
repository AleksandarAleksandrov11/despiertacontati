import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import QRCode from "qrcode";
import { chromium } from "playwright";
import { ebook, type EbookBlock } from "../content/ebook";

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

function logo(size: "sm" | "lg") {
  return `<p class="logo logo-${size}"><span class="l1">Despierta</span> <span class="l2">con</span> <span class="l3">Tati</span></p>`;
}

function link(url: string) {
  return url
    .replace("https://", "")
    .split("/")
    .map(escape)
    .join("/<wbr>");
}

function block(item: EbookBlock, qr: string) {
  switch (item.type) {
    case "lead":
      return `<p class="lead">${escape(item.text)}</p>`;
    case "p":
      return `<p>${escape(item.text)}</p>`;
    case "h3":
      return `<h3>${escape(item.text)}</h3>`;
    case "list":
      return `<ul class="list">${item.items
        .map((entry) => `<li>${entry.lead ? `<strong>${escape(entry.lead)}</strong> ` : ""}${escape(entry.text)}</li>`)
        .join("")}</ul>`;
    case "highlight":
      return `<div class="highlight"><p>${escape(item.text)}</p></div>`;
    case "quote":
      return `<p class="quote">${escape(item.text)}</p>`;
    case "note":
      return `<div class="note"><h4>${escape(item.title)}</h4><p>${escape(item.text)}</p></div>`;
    case "keys":
      return `<ol class="keys">${item.items
        .map((entry, index) => `<li><span class="num">${index + 1}</span><div><h4>${escape(entry.title)}</h4><p>${escape(entry.text)}</p></div></li>`)
        .join("")}</ol>`;
    case "listen":
      return `<div class="listen">
  <div class="qr">${qr}</div>
  <div>
    <p class="eyebrow">${escape(item.eyebrow)}</p>
    <p class="listen-title">${escape(item.title)}</p>
    <p class="small">${escape(item.link)}</p>
    <p><a href="${escape(ebook.audioUrl)}">${link(ebook.audioUrl)}</a></p>
    <p class="small">${escape(item.qr)}</p>
  </div>
</div>`;
    case "question":
      return `<div class="question"><h4>${escape(item.title)}</h4><p>${escape(item.text)}</p></div>`;
    case "lines":
      return `<div class="lines">${"<span></span>".repeat(item.count)}</div>`;
  }
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
    color: { dark: "#3f2e3a", light: "#ffffff" },
  });

  const cover = `<section class="cover">
  <div class="blob blob-a"></div>
  <div class="blob blob-b"></div>
  <div class="blob blob-c"></div>
  <div class="frame"></div>
  <div class="cover-inner">
    <p class="kicker">${escape(ebook.brand)}</p>
    <div>
      <h1>${escape(ebook.title)}</h1>
      <p class="cover-sub">${escape(ebook.kicker)}</p>
      <span class="rule"></span>
      <p class="cover-quote">${ebook.coverQuote.map(escape).join("<br>")}</p>
      <p class="cover-text">${escape(ebook.coverText)}</p>
    </div>
    <div class="cover-foot">${logo("lg")}${dots()}</div>
  </div>
</section>`;

  const chapters = ebook.chapters
    .map(
      (chapter) => `<section class="chapter">
  <p class="eyebrow">${escape(chapter.number)}</p>
  <h2>${escape(chapter.title)}</h2>
  ${chapter.subtitle ? `<p class="subtitle">${escape(chapter.subtitle)}</p>` : ""}
  ${chapter.blocks.map((item) => block(item, qr)).join("\n  ")}
</section>`,
    )
    .join("\n");

  const gracias = `<section class="thanks">
  <span class="rule"></span>
  <h2>${escape(ebook.gracias.title)}</h2>
  ${ebook.gracias.paragraphs.map((text) => `<p>${escape(text)}</p>`).join("")}
  <p class="sign">${escape(ebook.gracias.sign)}<br><span>${escape(ebook.gracias.name)}</span></p>
  <div class="end">${logo("sm")}<p><a href="https://www.${escape(ebook.gracias.web)}">${escape(ebook.gracias.web)}</a> · ${escape(ebook.gracias.instagram)}</p>${dots()}</div>
  <p class="notice">${escape(ebook.aviso)}</p>
</section>`;

  return `<!doctype html>
<html lang="es-ES">
<head>
<meta charset="utf-8">
<title>${escape(ebook.title)}</title>
<style>
@font-face { font-family: "Cormorant"; src: url(${serif}); font-weight: 500; }
@font-face { font-family: "CormorantItalic"; src: url(${serifItalic}); font-weight: 500; }
@font-face { font-family: "Manrope"; src: url(${sans}); font-weight: 500; }
@page {
  size: 148mm 210mm;
  margin: 17mm 16mm 19mm;
  background: #fbf7f2;
  @bottom-left { content: "${escape(ebook.footer)}"; font-family: "Manrope"; font-size: 6.5pt; letter-spacing: 0.08em; color: #6e5a66; vertical-align: top; padding-top: 5mm; }
  @bottom-right { content: counter(page); font-family: "CormorantItalic"; font-size: 10pt; color: #9c5f6c; vertical-align: top; padding-top: 4mm; }
}
@page :first {
  margin: 0;
  @bottom-left { content: none; }
  @bottom-right { content: none; }
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { background: #fbf7f2; }
body { color: #3f2e3a; font-family: "Manrope", sans-serif; font-size: 9pt; line-height: 1.55; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
h1, h2, h3, h4 { font-weight: 500; color: #3f2e3a; break-after: avoid; }
p { margin-bottom: 2.6mm; orphans: 3; widows: 3; }
strong { font-weight: 500; color: #3f2e3a; }
a { color: #8e5f80; }
.eyebrow { font-size: 6.8pt; letter-spacing: 0.26em; text-transform: uppercase; color: #6e5a66; margin-bottom: 3mm; }
.chapter, .thanks { break-before: page; }
.chapter h2, .thanks h2 { font-family: "CormorantItalic", serif; font-size: 24pt; line-height: 1.05; margin-bottom: 5mm; }
.subtitle { font-family: "Cormorant", serif; font-size: 15pt; color: #9c5f6c; margin: -3.5mm 0 6mm; }
h3 { font-family: "Cormorant", serif; font-size: 13pt; line-height: 1.2; margin: 4.5mm 0 2mm; }
h4 { font-family: "Cormorant", serif; font-size: 12.5pt; line-height: 1.2; margin-bottom: 1.2mm; }
.lead { font-family: "CormorantItalic", serif; font-size: 15pt; line-height: 1.3; color: #9c5f6c; margin-bottom: 4mm; }
.list { list-style: none; margin-bottom: 3mm; }
.list li { position: relative; padding-left: 6mm; margin-bottom: 1.8mm; break-inside: avoid; }
.list li::before { content: ""; position: absolute; left: 0; top: 2.4mm; width: 3.4mm; height: 0.3mm; background: #c8a46a; }
.highlight { margin: 4.5mm 0 3mm; padding: 4mm 5mm; border-radius: 3.5mm; background: #f1ecf6; break-inside: avoid; }
.highlight p { margin: 0; font-family: "CormorantItalic", serif; font-size: 12.5pt; line-height: 1.32; color: #3f2e3a; }
.quote { margin: 4mm 0; text-align: center; font-family: "CormorantItalic", serif; font-size: 15pt; line-height: 1.3; color: #9c5f6c; }
.note { margin-top: 4.5mm; padding: 3.5mm 4.5mm; border-radius: 3.5mm; border: 0.3mm solid #e7dcd3; background: #fff; break-inside: avoid; }
.note p { margin: 0; font-size: 8pt; color: #6e5a66; }
.keys { list-style: none; }
.keys li { display: flex; gap: 4mm; padding: 2.2mm 0; border-bottom: 0.3mm solid #e7dcd3; break-inside: avoid; }
.keys li:first-child { border-top: 0.3mm solid #e7dcd3; }
.keys p { margin: 0; color: #54404e; }
.num { flex: none; width: 7.5mm; height: 7.5mm; border-radius: 50%; border: 0.3mm solid rgba(63, 46, 58, 0.22); display: flex; align-items: center; justify-content: center; font-family: "CormorantItalic", serif; font-size: 11.5pt; color: #9c5f6c; }
.listen { margin: 4.5mm 0; display: flex; gap: 5mm; align-items: center; padding: 4.5mm; border-radius: 3.5mm; border: 0.3mm solid #e7dcd3; background: #fff; break-inside: avoid; }
.qr { flex: none; width: 29mm; height: 29mm; }
.qr svg { width: 100%; height: 100%; display: block; }
.listen .eyebrow { margin-bottom: 1.5mm; }
.listen-title { font-family: "CormorantItalic", serif; font-size: 17pt; line-height: 1.1; margin-bottom: 1.5mm; }
.listen p { margin-bottom: 1.2mm; }
.small { font-size: 7.4pt; color: #6e5a66; }
.question { margin-top: 3.5mm; break-inside: avoid; }
.question p { margin-bottom: 1mm; color: #6e5a66; }
.lines { margin-bottom: 2mm; break-inside: avoid; }
.lines span { display: block; height: 7mm; border-bottom: 0.3mm solid #d9cdc4; }
.sign { margin-top: 7mm; }
.sign span { font-family: "CormorantItalic", serif; font-size: 18pt; color: #9c5f6c; }
.thanks .rule { margin: 0 0 6mm; }
.end { margin-top: 9mm; display: flex; flex-direction: column; gap: 1.6mm; }
.end p { margin: 0; color: #6e5a66; font-size: 8pt; }
.end a { text-decoration: none; }
.notice { margin-top: 9mm; padding-top: 4mm; border-top: 0.3mm solid #e7dcd3; font-size: 7pt; line-height: 1.5; color: #6e5a66; }
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
.rule { display: block; width: 18mm; height: 0.35mm; background: #c8a46a; }
.cover { position: relative; width: 148mm; height: 210mm; overflow: hidden; break-after: page; }
.blob { position: absolute; border-radius: 50%; }
.blob-a { width: 95mm; height: 95mm; right: -40mm; top: -40mm; background: radial-gradient(circle, #f3dedb 0%, rgba(246, 233, 230, 0) 68%); }
.blob-b { width: 90mm; height: 90mm; left: -42mm; bottom: -36mm; background: radial-gradient(circle, #e9e1f2 0%, rgba(241, 236, 246, 0) 68%); }
.blob-c { width: 72mm; height: 72mm; right: -8mm; bottom: 28mm; background: radial-gradient(circle, #e3ece0 0%, rgba(238, 243, 236, 0) 68%); }
.cover .frame { position: absolute; inset: 8mm; border: 0.35mm solid rgba(200, 164, 106, 0.55); border-radius: 3mm; }
.cover-inner { position: relative; height: 100%; padding: 24mm 18mm 20mm; display: flex; flex-direction: column; justify-content: space-between; }
.kicker { font-size: 7.5pt; letter-spacing: 0.3em; text-transform: uppercase; color: #6e5a66; }
.cover h1 { font-family: "CormorantItalic", serif; font-size: 50pt; line-height: 0.95; }
.cover-sub { font-family: "Cormorant", serif; font-size: 14pt; line-height: 1.35; color: #54404e; margin: 4mm 0 0; }
.cover .rule { margin: 8mm 0 6mm; }
.cover-quote { font-family: "CormorantItalic", serif; font-size: 14pt; line-height: 1.35; color: #9c5f6c; margin-bottom: 4mm; }
.cover-text { font-size: 8.6pt; color: #6e5a66; max-width: 95mm; margin: 0; }
.cover-foot { display: flex; align-items: flex-end; justify-content: space-between; }
</style>
</head>
<body>
${cover}
${chapters}
${gracias}
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
    const pdf = await tab.pdf({ printBackground: true, preferCSSPageSize: true });
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
