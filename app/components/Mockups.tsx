/**
 * Mockups de la app hechos con HTML/CSS (sin imágenes externas).
 * TODO: reemplazar por capturas reales del producto cuando estén disponibles.
 */
import { Logo } from "./Logo";
import { brand } from "@/content";

export function BrowserFrame({
  title = brand.name,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/60">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <div className="ml-3 hidden items-center gap-2 rounded-md bg-white px-3 py-1 text-xs text-slate-400 sm:flex dark:bg-slate-900">
          <Logo className="h-3.5 w-3.5" />
          <span>{title}</span>
        </div>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function Bar({ h, active = false }: { h: number; active?: boolean }) {
  return (
    <div className="flex flex-1 items-end">
      <div
        className={`w-full rounded-t ${active ? "bg-brand-500" : "bg-brand-200 dark:bg-brand-500/30"}`}
        style={{ height: `${h}%` }}
      />
    </div>
  );
}

function Kpi({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/40">
      <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
        {label}
      </div>
      <div className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
        {value}
      </div>
      <div className="text-[11px] font-medium text-green-600 dark:text-green-400">
        {trend}
      </div>
    </div>
  );
}

/* Panel lateral simulado, compartido por los mockups grandes */
function SideNav() {
  const items = ["Inicio", "Presupuestos", "Producción", "Stock", "Ventas", "Finanzas"];
  return (
    <div className="hidden w-40 shrink-0 flex-col gap-1 border-r border-slate-200 pr-4 lg:flex dark:border-slate-800">
      {items.map((it, i) => (
        <div
          key={it}
          className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium ${
            i === 0
              ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
              : "text-slate-500 dark:text-slate-400"
          }`}
        >
          <span className="h-2 w-2 rounded-sm bg-current opacity-60" />
          {it}
        </div>
      ))}
    </div>
  );
}

/* Mockup principal del dashboard (hero) */
export function DashboardMockup() {
  const bars = [45, 62, 38, 70, 55, 82, 60, 74];
  return (
    <BrowserFrame>
      <div className="flex gap-5">
        <SideNav />
        <div className="min-w-0 flex-1">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Panel general
              </div>
              <div className="text-[11px] text-slate-400">Actualizado hoy</div>
            </div>
            <div className="rounded-md bg-brand-600 px-3 py-1.5 text-[11px] font-semibold text-white">
              + Nuevo
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Kpi label="Facturación" value="US$ 128k" trend="▲ 12%" />
            <Kpi label="Pedidos" value="342" trend="▲ 8%" />
            <Kpi label="En producción" value="27" trend="▲ 3%" />
            <Kpi label="Por cobrar" value="US$ 41k" trend="▲ 5%" />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-3 sm:col-span-2 dark:border-slate-800">
              <div className="mb-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Ventas por mes
              </div>
              <div className="flex h-24 items-end gap-1.5">
                {bars.map((h, i) => (
                  <Bar key={i} h={h} active={i === bars.length - 3} />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
              <div className="mb-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Estado de pedidos
              </div>
              <div className="flex items-center justify-center py-1">
                <div
                  className="h-20 w-20 rounded-full"
                  style={{
                    background:
                      "conic-gradient(#4f46e5 0 55%, #818cf8 55% 80%, #c7d2fe 80% 100%)",
                  }}
                />
              </div>
              <div className="mt-2 space-y-1">
                {[
                  ["Completados", "55%"],
                  ["En curso", "25%"],
                  ["Pendientes", "20%"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400"
                  >
                    <span>{k}</span>
                    <span className="font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* Mockup: flujo cotización → factura */
export function FlowMockup() {
  const steps = ["Presupuesto", "Orden de fab.", "Albarán", "Factura"];
  return (
    <BrowserFrame title={`${brand.name} · Flujo comercial`}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${
                i <= 2
                  ? "bg-brand-600 text-white"
                  : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
              }`}
            >
              {s}
            </div>
            {i < steps.length - 1 && (
              <span className="text-slate-300 dark:text-slate-600">→</span>
            )}
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-4 bg-slate-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:bg-slate-800/50">
          <span className="col-span-2">Documento</span>
          <span>Estado</span>
          <span className="text-right">Monto</span>
        </div>
        {[
          ["Presupuesto #1042", "Aprobado", "US$ 12.4k"],
          ["OF-2231", "En planta", "—"],
          ["Albarán A-889", "Despachado", "—"],
          ["Factura F-0771", "Emitida", "US$ 12.4k"],
        ].map(([doc, st, amt], i) => (
          <div
            key={i}
            className="grid grid-cols-4 items-center border-t border-slate-100 px-3 py-2 text-[11px] dark:border-slate-800"
          >
            <span className="col-span-2 font-medium text-slate-700 dark:text-slate-200">
              {doc}
            </span>
            <span className="text-slate-500 dark:text-slate-400">{st}</span>
            <span className="text-right font-semibold text-slate-800 dark:text-slate-100">
              {amt}
            </span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

/* Mockup: monitor de producción */
export function ProductionMockup() {
  const orders = [
    ["OF-2231", "Corte", 80],
    ["OF-2232", "Armado", 45],
    ["OF-2233", "Pintura", 20],
    ["OF-2234", "Embalaje", 95],
  ] as const;
  return (
    <BrowserFrame title={`${brand.name} · Producción`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900 dark:text-white">
          Monitor de planta
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-green-600 dark:text-green-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          En vivo
        </div>
      </div>
      <div className="space-y-3">
        {orders.map(([of, tarea, pct]) => (
          <div key={of}>
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="font-medium text-slate-700 dark:text-slate-200">
                {of} · {tarea}
              </span>
              <span className="text-slate-400">{pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-brand-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

/* Mockup: finanzas / proyección */
export function FinanceMockup() {
  const line = [30, 40, 35, 55, 50, 68, 72, 85];
  const pts = line
    .map((v, i) => `${(i / (line.length - 1)) * 100},${100 - v}`)
    .join(" ");
  return (
    <BrowserFrame title={`${brand.name} · Tesorería`}>
      <div className="mb-3 grid grid-cols-3 gap-3">
        <Kpi label="Saldo" value="US$ 96k" trend="▲ 6%" />
        <Kpi label="A cobrar" value="US$ 41k" trend="▲ 5%" />
        <Kpi label="A pagar" value="US$ 22k" trend="▼ 2%" />
      </div>
      <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
        <div className="mb-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
          Proyección de caja · 8 semanas
        </div>
        <svg viewBox="0 0 100 100" className="h-24 w-full" preserveAspectRatio="none">
          <polyline
            points={pts}
            fill="none"
            stroke="#4f46e5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </BrowserFrame>
  );
}

/* Mockup: multiempresa */
export function CompanyMockup() {
  const cos = [
    ["Empresa A", "US$ 128k", true],
    ["Empresa B", "US$ 74k", false],
    ["Empresa C", "US$ 39k", false],
  ] as const;
  return (
    <BrowserFrame title={`${brand.name} · Multiempresa`}>
      <div className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
        Cambiar de empresa
      </div>
      <div className="space-y-2">
        {cos.map(([name, fact, active]) => (
          <div
            key={name}
            className={`flex items-center justify-between rounded-lg border px-3 py-2.5 ${
              active
                ? "border-brand-300 bg-brand-50 dark:border-brand-500/40 dark:bg-brand-500/10"
                : "border-slate-200 dark:border-slate-800"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-bold ${
                  active
                    ? "bg-brand-600 text-white"
                    : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {name.charAt(name.length - 1)}
              </span>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                {name}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              {fact}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-[11px] text-slate-500 dark:bg-slate-800/50 dark:text-slate-400">
        Vista consolidada: <span className="font-semibold">US$ 241k</span>
      </div>
    </BrowserFrame>
  );
}

export const featureMockups: Record<string, () => JSX.Element> = {
  flow: FlowMockup,
  production: ProductionMockup,
  finance: FinanceMockup,
  company: CompanyMockup,
};
