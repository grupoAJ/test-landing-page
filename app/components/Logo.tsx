/**
 * Isotipo de Born: llama/hoja de dos tonos (verde + azul) con el núcleo
 * verde oscuro por superposición. Es una recreación en SVG del logo.
 *
 * TODO: si querés el logo EXACTO, guardá el archivo original en `public/`
 * (por ej. `public/born-logo.svg`) y reemplazá este componente por:
 *   <img src="/born-logo.svg" alt="Born ERP" className={className} />
 */
const TEARDROP = "M50 6 C 62 22, 72 40, 66 62 C 61 80, 39 80, 34 62 C 28 40, 38 22, 50 6 Z";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Born"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ isolation: "isolate" }}>
        <path
          d={TEARDROP}
          fill="#8CC63F"
          transform="translate(-9 1) rotate(-7 50 50)"
        />
        <path
          d={TEARDROP}
          fill="#29ABE2"
          style={{ mixBlendMode: "multiply" }}
          transform="translate(9 3) rotate(9 50 50)"
        />
      </g>
    </svg>
  );
}
