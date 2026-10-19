import type { CSSProperties } from "react";
import type { Puntos, Tramo } from "@/lib/matriz";
import {
  lineasMatriz,
  redondear,
  lienzo,
  marcasEdad,
  puntosAnillo,
  puntosMatriz,
  puntosVariante,
  tiempos,
  verticesMatriz,
  type TipoPunto,
  type Variante,
} from "@/lib/matriz-geometria";
import { cn } from "@/lib/utils";

const fills: Record<TipoPunto, { fill: string; text: string; stroke?: string }> = {
  centro: { fill: "url(#mx-oro)", text: "#3f2e3a" },
  personal: { fill: "#a9799b", text: "#fbf7f2" },
  material: { fill: "#9c5f6c", text: "#fbf7f2" },
  esquina: { fill: "#54404e", text: "#fbf7f2", stroke: "#c8a46a" },
  interno: { fill: "#4a3845", text: "#fbf7f2", stroke: "rgba(221,191,140,0.45)" },
  corazon: { fill: "#f6e9e6", text: "#3f2e3a" },
  canal: { fill: "#ddbf8c", text: "#3f2e3a" },
  linaje: { fill: "#5e4757", text: "#f3e2bd", stroke: "#c8a46a" },
};

const lineStyles = {
  rombo: { stroke: "#c8a46a", width: 1.4, opacity: 0.95, dur: 1 },
  cuadrado: { stroke: "#ddbf8c", width: 1.1, opacity: 0.7, dur: 0.9 },
  eje: { stroke: "#fbf7f2", width: 0.8, opacity: 0.22, dur: 0.6 },
  diagonal: { stroke: "#fbf7f2", width: 0.8, opacity: 0.22, dur: 0.6 },
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
  etiquetas: [string, string, string, string];
  done: boolean;
  paused?: boolean;
  label: string;
  destacados?: (keyof Puntos)[];
  decorativa?: boolean;
  variante?: Variante;
  edades?: Tramo[];
  etapaActiva?: { tramo: number; etapa: number } | null;
};

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
  etapaActiva = null,
}: Props) {
  const anillo = variante === "individual" && edades.length === 8;
  const v = verticesMatriz;
  const labelPos = [
    { x: v.a.x, y: v.a.y + 36 },
    { x: v.b.x + 40, y: v.b.y + 5 },
    { x: v.c.x, y: v.c.y + 36 },
    { x: v.d.x + 40, y: v.d.y + 5 },
  ];
  const puntosCanal = puntosMatriz.filter((punto) => punto.key === "dinero" || punto.key === "amor");
  const visibles = puntosVariante(variante);

  return (
    <svg
      viewBox="-24 -24 448 448"
      role={decorativa ? undefined : "img"}
      aria-label={decorativa ? undefined : label}
      aria-hidden={decorativa || undefined}
      className={cn("mx block h-auto w-full select-none", done && "mx-done", paused && "mx-paused")}
    >
      <defs>
        <radialGradient id="mx-oro" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#f3e2bd" />
          <stop offset="55%" stopColor="#c8a46a" />
          <stop offset="100%" stopColor="#a8834b" />
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

      {puntosCanal.map((punto) => (
        <text
          key={`${punto.key}-label`}
          x={punto.key === "dinero" ? punto.x + 13 : punto.x + 4}
          y={punto.key === "dinero" ? punto.y + 4 : punto.y + 23}
          textAnchor="start"
          className="mx-fade fill-dorado-soft font-serif text-[12px] italic"
          style={{ "--d": `${punto.delay + 0.2}s` } as CSSProperties}
          aria-hidden
        >
          {punto.key === "dinero" ? "dinero" : "amor"}
        </text>
      ))}

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
          const activa = etapaActiva?.tramo === punto.tramo && etapaActiva.etapa === punto.etapa;
          return (
            <g key={`anillo-${punto.tramo}-${punto.etapa}`} className="mx-point" style={{ "--d": `${punto.delay}s` } as CSSProperties} aria-hidden>
              {activa && <circle cx={punto.x} cy={punto.y} r={11} fill="none" stroke="#f3e2bd" strokeWidth="1.1" />}
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

      {visibles.map((punto) => {
        const color = fills[punto.tipo];
        const valor = puntos[punto.key];
        const destacado = destacados.includes(punto.key);
        return (
          <g key={punto.key} className="mx-point" style={{ "--d": `${punto.delay}s` } as CSSProperties} aria-hidden>
            {destacado && (
              <circle cx={punto.x} cy={punto.y} r={punto.r + 5} fill="none" stroke="#ddbf8c" strokeOpacity="0.8" strokeWidth="1" />
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
