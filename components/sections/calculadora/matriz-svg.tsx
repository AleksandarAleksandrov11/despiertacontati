import type { CSSProperties } from "react";
import type { Posicion, Propositos, Puntos, Tramo } from "@/lib/matriz";
import {
  coloresChakra,
  corazon,
  lineasMatriz,
  redondear,
  lienzo,
  marcoMatriz,
  marcasEdad,
  propositosMatriz,
  puntosAnillo,
  puntosMatriz,
  puntosVariante,
  simboloFemenino,
  simboloMasculino,
  simbolosCanal,
  simbolosLinaje,
  tiempos,
  verticesMatriz,
  type PuntoMatriz,
  type TipoPunto,
  type Variante,
} from "@/lib/matriz-geometria";
import { cn } from "@/lib/utils";

const fills: Record<TipoPunto, { fill: string; text: string; stroke?: string }> = {
  centro: { fill: "url(#mx-oro)", text: "#3f2e3a" },
  vertice: { fill: "#54404e", text: "#fbf7f2" },
  esquina: { fill: "#54404e", text: "#fbf7f2", stroke: "#c8a46a" },
  interno: { fill: "#4a3845", text: "#fbf7f2", stroke: "rgba(221,191,140,0.45)" },
  canal: { fill: "#ddbf8c", text: "#3f2e3a" },
  linaje: { fill: "#5e4757", text: "#f3e2bd", stroke: "#c8a46a" },
};

function estiloPunto(punto: PuntoMatriz) {
  const base = fills[punto.tipo];
  if (!punto.chakra || punto.tipo === "centro") return base;
  return { fill: coloresChakra[punto.chakra], text: "#3f2e3a", stroke: undefined };
}

const lineStyles = {
  rombo: { stroke: "#c8a46a", width: 1.4, opacity: 0.95, dur: 1 },
  cuadrado: { stroke: "#ddbf8c", width: 1.1, opacity: 0.7, dur: 0.9 },
  eje: { stroke: "#fbf7f2", width: 0.8, opacity: 0.22, dur: 0.6 },
  diagonal: { stroke: "#fbf7f2", width: 0.8, opacity: 0.22, dur: 0.6 },
  interior: { stroke: "#fbf7f2", width: 0.7, opacity: 0.16, dur: 0.6 },
  canal: { stroke: "#ddbf8c", width: 1, opacity: 0.8, dur: 0.5 },
};

const estrellas = Array.from({ length: 46 }, (_, index) => {
  const angle = index * 2.39996;
  const radius = 120 + ((index * 37) % 110);
  return {
    x: redondear(lienzo.centro + Math.cos(angle) * radius),
    y: redondear(lienzo.centro + Math.sin(angle) * radius),
    r: redondear(0.6 + ((index * 13) % 10) / 12),
    d: redondear((index % 9) * 0.45),
  };
});

type Props = {
  puntos: Puntos;
  etiquetas: [string, string, string];
  done: boolean;
  paused?: boolean;
  label: string;
  destacados?: (keyof Puntos)[];
  decorativa?: boolean;
  variante?: Variante;
  edades?: Tramo[];
  activas?: Posicion[];
  propositos?: Propositos;
};

const esquinasEdad: (keyof Puntos)[] = ["a", "f", "b", "g", "c", "h", "d", "i"];

export function MatrizSvg({
  puntos,
  etiquetas,
  done,
  paused = false,
  label,
  destacados = [],
  decorativa = false,
  variante = "individual",
  edades = [],
  activas = [],
  propositos,
}: Props) {
  const anillo = variante === "individual" && edades.length === 8;
  const v = verticesMatriz;
  const labelPos = [
    { x: v.a.x, y: v.a.y + 36 },
    { x: v.b.x + 40, y: v.b.y + 5 },
    { x: v.c.x, y: v.c.y + 36 },
  ];
  const delayCanal = (key: "dinero" | "amor") => puntosMatriz.find((punto) => punto.key === key)!.delay + 0.2;
  const visibles = puntosVariante(variante);
  const conPropositos = anillo && propositos !== undefined;
  const marco = conPropositos ? marcoMatriz.propositos : marcoMatriz.normal;
  const nivelActiva = (tramo: number, etapa: number) => activas.findIndex((item) => item.tramo === tramo && item.etapa === etapa);
  const esquinaActiva = (key: keyof Puntos) => activas.findIndex((item) => item.etapa === 0 && esquinasEdad[item.tramo] === key);

  return (
    <svg
      viewBox={`${marco.x} ${marco.y} ${marco.ancho} ${marco.alto}`}
      role={decorativa ? undefined : "img"}
      aria-label={decorativa ? undefined : label}
      aria-hidden={decorativa || undefined}
      className={cn("mx block h-auto w-full select-none", done && "mx-done", paused && "mx-paused")}
    >
      <defs>
        <radialGradient id="mx-oro" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#f8ebb8" />
          <stop offset="55%" stopColor="#e8c96a" />
          <stop offset="100%" stopColor="#c9a443" />
        </radialGradient>
        <radialGradient id="mx-halo">
          <stop offset="0%" stopColor="#ddbf8c" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ddbf8c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g aria-hidden>
        {estrellas.map((estrella, index) => (
          <circle
            key={index}
            cx={estrella.x}
            cy={estrella.y}
            r={estrella.r}
            fill="#fbf7f2"
            className="mx-star"
            style={{ "--d": `${estrella.d}s` } as CSSProperties}
          />
        ))}
        {!anillo && (
          <circle cx={lienzo.centro} cy={lienzo.centro} r={186} fill="none" stroke="#c8a46a" strokeOpacity="0.3" strokeWidth="0.8" className="mx-fade" style={{ "--d": "0s" } as CSSProperties} />
        )}
        <circle
          cx={lienzo.centro}
          cy={lienzo.centro}
          r={anillo ? lienzo.anillo : 198}
          fill="none"
          stroke="#c8a46a"
          strokeOpacity={anillo ? 0.5 : 0.35}
          strokeWidth="0.8"
          strokeDasharray={anillo ? "1 4" : "1 7"}
          className="mx-spin"
        />
        <circle cx={lienzo.centro} cy={lienzo.centro} r={102} fill="none" stroke="#fbf7f2" strokeOpacity="0.1" strokeWidth="0.8" className="mx-fade" style={{ "--d": `${tiempos.cuadrado}s` } as CSSProperties} />
        <circle cx={lienzo.centro} cy={lienzo.centro} r={90} fill="url(#mx-halo)" className="mx-fade mx-breathe" style={{ "--d": `${tiempos.centro}s` } as CSSProperties} />

        {lineasMatriz.map((linea) => {
          const style = lineStyles[linea.tipo];
          const canal = linea.tipo === "canal";
          return (
            <path
              key={linea.id}
              d={linea.d}
              pathLength={canal ? undefined : 1}
              fill="none"
              stroke={style.stroke}
              strokeOpacity={style.opacity}
              strokeWidth={style.width}
              strokeLinejoin="round"
              strokeDasharray={canal ? "3 4" : "1"}
              className={canal ? "mx-fade" : "mx-line"}
              style={{ "--d": `${linea.delay}s`, "--dur": `${style.dur}s` } as CSSProperties}
            />
          );
        })}

        <circle
          cx={lienzo.centro}
          cy={lienzo.centro}
          r={24}
          fill="none"
          stroke="#f3e2bd"
          strokeWidth="1.2"
          className="mx-burst"
          style={{ "--d": `${tiempos.centro + 0.15}s` } as CSSProperties}
        />
      </g>

      {!decorativa &&
        etiquetas.map((texto, index) => (
          <text
            key={index}
            x={labelPos[index]!.x}
            y={labelPos[index]!.y}
            textAnchor="middle"
            className="mx-fade fill-crema/60 font-sans text-[10.5px] uppercase tracking-[0.18em]"
            style={{ "--d": `${tiempos.vertices[index]! + 0.3}s` } as CSSProperties}
            aria-hidden
          >
            {texto}
          </text>
        ))}

      <text
        x={simbolosCanal.dinero.x}
        y={simbolosCanal.dinero.y}
        dy="0.35em"
        textAnchor="middle"
        className="mx-fade fill-dorado-soft font-sans text-[13px] font-semibold"
        style={{ "--d": `${delayCanal("dinero")}s` } as CSSProperties}
        aria-hidden
      >
        €
      </text>
      {variante === "individual" && (
        <g className="mx-fade" style={{ "--d": `${tiempos.internos + 1.2}s` } as CSSProperties} fill="none" strokeWidth="1.1" strokeLinecap="round" aria-hidden>
          <circle cx={simbolosLinaje.masculino.x - 0.8} cy={simbolosLinaje.masculino.y + 0.8} r={3.4} stroke="#7fb3d5" />
          <path d={simboloMasculino(simbolosLinaje.masculino)} stroke="#7fb3d5" />
          <circle cx={simbolosLinaje.femenino.x} cy={simbolosLinaje.femenino.y - 1.2} r={3.4} stroke="#c98b93" />
          <path d={simboloFemenino(simbolosLinaje.femenino)} stroke="#c98b93" />
        </g>
      )}
      <path
        d={corazon(simbolosCanal.amor, 12)}
        fill="#d9776f"
        className="mx-fade"
        style={{ "--d": `${delayCanal("amor")}s` } as CSSProperties}
        aria-hidden
      />

      {anillo &&
        marcasEdad.map((marca) => (
          <text
            key={`edad-${marca.edad}`}
            x={marca.x}
            y={marca.y}
            dy="0.35em"
            textAnchor="middle"
            className={cn("mx-fade nums font-sans", marca.principal ? "fill-dorado-soft text-[8.5px] font-medium" : "fill-crema/55 text-[7px]")}
            style={{ "--d": `${tiempos.anillo}s` } as CSSProperties}
            aria-hidden
          >
            {marca.edad}
          </text>
        ))}

      {anillo &&
        puntosAnillo.map((punto) => {
          const valor = edades[punto.tramo]?.etapas[punto.etapa]?.valor;
          const medio = punto.etapa === 4;
          const nivel = nivelActiva(punto.tramo, punto.etapa);
          const activa = nivel === 0;
          return (
            <g key={`anillo-${punto.tramo}-${punto.etapa}`} className="mx-point" style={{ "--d": `${punto.delay}s` } as CSSProperties} aria-hidden>
              {nivel >= 0 && <circle cx={punto.x} cy={punto.y} r={11} fill="none" stroke="#f3e2bd" strokeWidth="1.1" strokeDasharray={activa ? undefined : "2 2"} />}
              <circle
                cx={punto.x}
                cy={punto.y}
                r={medio ? 7.6 : 6.6}
                fill={activa ? "#ddbf8c" : medio ? "#6a4f62" : "#4a3845"}
                stroke={activa ? undefined : "rgba(221,191,140,0.55)"}
                strokeWidth={0.8}
              />
              <text
                x={punto.x}
                y={punto.y}
                dy="0.36em"
                textAnchor="middle"
                fill={activa ? "#3f2e3a" : "#fbf7f2"}
                className="nums font-sans font-medium"
                fontSize={medio ? 7.4 : 6.8}
              >
                {valor}
              </text>
            </g>
          );
        })}

      {conPropositos &&
        propositosMatriz.map((item, index) => {
          const valor = item.origen === "propositos" ? propositos[item.key as keyof Propositos] : puntos[item.key as keyof Puntos];
          const grande = item.r > 10;
          return (
            <g
              key={`proposito-${index}`}
              className="mx-point"
              style={{ "--d": `${redondear(tiempos.anillo + 0.5 + index * 0.03)}s` } as CSSProperties}
              aria-hidden
            >
              <circle
                cx={item.x}
                cy={item.y}
                r={item.r}
                fill={grande ? "#4a3845" : "none"}
                stroke={grande ? "#c8a46a" : "rgba(251,247,242,0.4)"}
                strokeWidth={grande ? 1 : 0.8}
              />
              <text
                x={item.x}
                y={item.y}
                dy="0.36em"
                textAnchor="middle"
                fill={grande ? "#fbf7f2" : "rgba(251,247,242,0.8)"}
                className="nums font-sans font-medium"
                fontSize={grande ? 10 : 7.4}
              >
                {valor}
              </text>
            </g>
          );
        })}

      {visibles.map((punto) => {
        const color = estiloPunto(punto);
        const valor = puntos[punto.key];
        const destacado = destacados.includes(punto.key);
        const edad = anillo ? esquinaActiva(punto.key) : -1;
        return (
          <g key={punto.key} className="mx-point" style={{ "--d": `${punto.delay}s` } as CSSProperties} aria-hidden>
            {(destacado || edad >= 0) && (
              <circle
                cx={punto.x}
                cy={punto.y}
                r={punto.r + 5}
                fill="none"
                stroke={edad >= 0 ? "#f3e2bd" : "#ddbf8c"}
                strokeOpacity="0.8"
                strokeWidth={edad === 0 ? 1.6 : 1}
                strokeDasharray={edad === 1 ? "2 2" : undefined}
              />
            )}
            <circle
              cx={punto.x}
              cy={punto.y}
              r={punto.r}
              fill={color.fill}
              stroke={color.stroke}
              strokeWidth={color.stroke ? 1 : undefined}
              className={punto.tipo === "centro" ? "mx-glow" : undefined}
            />
            <text
              x={punto.x}
              y={punto.y}
              dy="0.36em"
              textAnchor="middle"
              fill={color.text}
              className="nums font-sans font-medium"
              fontSize={punto.tipo === "centro" ? 17 : punto.r >= 14 ? 13 : punto.r >= 10 ? 9.5 : 8.5}
            >
              {valor}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
