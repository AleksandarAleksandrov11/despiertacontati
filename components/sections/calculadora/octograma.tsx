import { cn } from "@/lib/utils";

function Figura() {
  const c = 60;
  const r = 46;
  const d = r / Math.SQRT2;
  return (
    <g>
      <circle cx={c} cy={c} r={52} fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.8" />
      <path d={`M${c - r} ${c}L${c} ${c - r}L${c + r} ${c}L${c} ${c + r}Z`} fill="none" stroke="#c8a46a" strokeWidth="1.2" />
      <path
        d={`M${c - d} ${c - d}L${c + d} ${c - d}L${c + d} ${c + d}L${c - d} ${c + d}Z`}
        fill="none"
        stroke="#ddbf8c"
        strokeOpacity="0.75"
        strokeWidth="1"
      />
      <path d={`M${c - r} ${c}H${c + r}M${c} ${c - r}V${c + r}`} stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.7" />
      {[
        [c - r, c],
        [c, c - r],
        [c + r, c],
        [c, c + r],
      ].map(([px, py]) => (
        <circle key={`${px}-${py}`} cx={px} cy={py} r={5} fill="#a9799b" />
      ))}
      {[
        [c - d, c - d],
        [c + d, c - d],
        [c + d, c + d],
        [c - d, c + d],
      ].map(([px, py]) => (
        <circle key={`${px}-${py}`} cx={px} cy={py} r={4} fill="#54404e" stroke="#c8a46a" strokeWidth="0.8" />
      ))}
      <circle cx={c} cy={c} r={8} fill="#c8a46a" />
    </g>
  );
}

export function Octograma({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className={cn("h-auto", className)}>
      <Figura />
    </svg>
  );
}
