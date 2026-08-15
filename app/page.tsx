import {
  Check,
  ArrowRight,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Quote,
  ChevronDown,
  X,
  Database,
} from "lucide-react";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { Reveal } from "./components/Reveal";
import { Icon } from "./components/Icon";
import { ContactForm } from "./components/ContactForm";
import { DashboardMockup, featureMockups } from "./components/Mockups";
import {
  brand,
  hero,
  processChain,
  trustChips,
  sectors,
  modules,
  integration,
  quote,
  features,
  ai,
  implementation,
  benefits,
  comparison,
  pricing,
  faq,
  finalCta,
  contact,
  footer,
} from "@/content";

// Colores por módulo (clases literales para que Tailwind las incluya)
const toneStyles: Record<string, string> = {
  sky: "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400",
  orange: "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
  emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  violet: "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
  blue: "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400",
  amber: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  teal: "bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400",
  rose: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
  indigo: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400",
  cyan: "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
  fuchsia: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-400",
  lime: "bg-lime-50 text-lime-600 dark:bg-lime-500/10 dark:text-lime-400",
};

// Etiqueta de sección reutilizable (eyebrow con estilo de marca)
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
      {children}
    </span>
  );
}

// Encabezado de sección centrado y consistente en toda la página
function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {children}
        </p>
      ) : null}
    </Reveal>
  );
}

export default function Page() {
  return (
    <div id="top" className="min-h-screen">
      <Header />

      {/* ===================== HERO ===================== */}
      <section id="producto" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/70 to-transparent dark:from-brand-500/5" />
        <div className="dot-grid pointer-events-none absolute inset-0 text-slate-300/40 dark:text-slate-700/30" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-600/10" />
        <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-leaf-200/40 blur-3xl dark:bg-leaf-600/10" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.25fr] lg:gap-12 lg:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={hero.ctaPrimary.href}
                className="brand-gradient inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand-600/20 transition"
              >
                {hero.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
            <p className="mt-5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {hero.microcopy}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="lg:animate-float">
              <DashboardMockup />
            </div>
          </Reveal>
        </div>

        {/* Barra de confianza */}
        <div className="relative border-y border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 sm:px-6">
            {trustChips.map((chip) => (
              <span
                key={chip}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                <Check className="h-4 w-4 text-brand-500" />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CADENA DE PROCESO (BANDA OSCURA) ===================== */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 dark:bg-slate-950">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(120deg,#7bb92b,#29abe2)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {processChain.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              {processChain.subtitle}
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
              <div className="mx-auto flex min-w-max items-center justify-center gap-2 sm:gap-3">
                {processChain.steps.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex w-24 flex-col items-center gap-2 text-center sm:w-28">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15 backdrop-blur">
                        <Icon name={s.icon} className="h-6 w-6" />
                      </span>
                      <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                        {s.label}
                      </span>
                    </div>
                    {i < processChain.steps.length - 1 && (
                      <ArrowRight className="h-5 w-5 shrink-0 text-slate-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SECTORES ===================== */}
      <section className="bg-slate-50 py-16 sm:py-20 dark:bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
              {sectors.eyebrow}
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-800 sm:text-2xl dark:text-slate-100">
              {sectors.title}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {sectors.items.map((s, i) => (
              <Reveal
                key={s.label}
                delay={(i % 6) * 60}
                className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-5 text-center dark:border-slate-800 dark:bg-slate-900"
              >
                <Icon name={s.icon} className="h-7 w-7 text-brand-600 dark:text-brand-400" />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  {s.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CAPACIDADES / MÓDULOS ===================== */}
      <section id="modulos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <SectionHeader eyebrow="Capacidades" title="Una plataforma. Toda la operación conectada.">
          Todos los módulos comparten una misma base. Activá lo que necesitás hoy
          y sumá el resto cuando quieras.
        </SectionHeader>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 70}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition group-hover:scale-105 ${
                    toneStyles[m.tone] ?? toneStyles.blue
                  }`}
                >
                  <Icon name={m.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== INTEGRACIÓN (TODO CONECTADO) ===================== */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28 dark:bg-slate-900/40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{integration.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {integration.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {integration.desc}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              {/* Líneas de conexión */}
              <svg
                className="absolute inset-0 h-full w-full text-slate-300 dark:text-slate-700"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                {integration.spokes.map((_, i) => {
                  const a = (i / integration.spokes.length) * 2 * Math.PI - Math.PI / 2;
                  const x = 50 + 36 * Math.cos(a);
                  const y = 50 + 36 * Math.sin(a);
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                  );
                })}
              </svg>

              {/* Hub central */}
              <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center text-white shadow-xl shadow-brand-600/30 [background-image:linear-gradient(120deg,#7bb92b,#29abe2)]">
                <Database className="h-6 w-6" />
                <span className="mt-1 px-2 text-[10px] font-semibold leading-tight">
                  {integration.hub}
                </span>
              </div>

              {/* Spokes */}
              {integration.spokes.map((s, i) => {
                const a = (i / integration.spokes.length) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + 36 * Math.cos(a);
                const y = 50 + 36 * Math.sin(a);
                return (
                  <div
                    key={s.label}
                    className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-600 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-brand-400">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="whitespace-nowrap text-[11px] font-medium text-slate-600 dark:text-slate-400">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== CITA / POSICIONAMIENTO (BANDA GRADIENTE) ===================== */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <Reveal className="brand-gradient relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-14 text-center shadow-xl shadow-brand-600/20 sm:px-12 sm:py-16">
          <div className="dot-grid pointer-events-none absolute inset-0 text-white/15" />
          <div className="relative">
            <Quote className="mx-auto h-9 w-9 text-white/70" />
            <p className="mx-auto mt-5 max-w-3xl text-2xl font-bold leading-snug text-white sm:text-3xl">
              {quote.text}
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90">
              {quote.sub}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ===================== FEATURES ALTERNADOS ===================== */}
      <section className="mx-auto max-w-6xl space-y-20 px-4 py-20 sm:px-6 sm:py-24 lg:space-y-28 lg:py-28">
        {features.map((f, i) => {
          const Mock = featureMockups[f.mockup];
          const reverse = i % 2 === 1;
          return (
            <div
              key={f.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={reverse ? "lg:order-2" : ""}>
                <span className="text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  {f.tag}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {f.desc}
                </p>
                <ul className="mt-6 space-y-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-slate-700 dark:text-slate-300">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120} className={reverse ? "lg:order-1" : ""}>
                {Mock ? <Mock /> : null}
              </Reveal>
            </div>
          );
        })}
      </section>

      {/* ===================== IA APLICADA ===================== */}
      <section id="ia" className="bg-slate-50 py-20 sm:py-24 lg:py-28 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow={ai.eyebrow} title={ai.title}>
            {ai.desc}
          </SectionHeader>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ai.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== IMPLANTACIÓN ===================== */}
      <section id="implantacion" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <SectionHeader eyebrow={implementation.eyebrow} title={implementation.title}>
          {implementation.desc}
        </SectionHeader>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {implementation.steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 5) * 70}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <span className="text-2xl font-extrabold text-brand-500/80 dark:text-brand-400/80">
                  {s.n}
                </span>
                <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modelo comercial */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {implementation.model.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl bg-gradient-to-b from-slate-50 to-white p-6 ring-1 ring-slate-200 dark:from-slate-800/40 dark:to-slate-900 dark:ring-slate-800">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {m.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {m.desc}
                </p>
                <p className="mt-3 font-bold text-slate-900 dark:text-white">
                  {m.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== COMPARATIVA ===================== */}
      <section id="comparativa" className="bg-slate-50 py-20 sm:py-24 lg:py-28 dark:bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeader eyebrow={comparison.eyebrow} title={comparison.title}>
            {comparison.subtitle}
          </SectionHeader>

          {/* Escritorio: tabla limpia */}
          <Reveal delay={120} className="mt-12 hidden sm:block">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="grid grid-cols-[1fr_1fr_1.15fr]">
                <div className="p-4" />
                <div className="p-4 text-center text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {comparison.before}
                </div>
                <div className="bg-brand-50 p-4 text-center text-sm font-bold uppercase tracking-wide text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                  {comparison.after}
                </div>
              </div>
              {comparison.rows.map((r) => (
                <div
                  key={r.label}
                  className="grid grid-cols-[1fr_1fr_1.15fr] border-t border-slate-100 dark:border-slate-800"
                >
                  <div className="p-4 text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {r.label}
                  </div>
                  <div className="flex items-start gap-2 p-4 text-sm text-slate-500 dark:text-slate-400">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    <span>{r.before}</span>
                  </div>
                  <div className="flex items-start gap-2 bg-brand-50/50 p-4 text-sm font-medium text-slate-800 dark:bg-brand-500/[0.06] dark:text-slate-100">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                    <span>{r.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Móvil: tarjetas apiladas, mucho más legibles */}
          <div className="mt-10 space-y-4 sm:hidden">
            {comparison.rows.map((r, i) => (
              <Reveal key={r.label} delay={(i % 3) * 60}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                  <div className="border-b border-slate-100 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-900 dark:border-slate-800 dark:bg-slate-800/50 dark:text-white">
                    {r.label}
                  </div>
                  <div className="flex items-start gap-2.5 px-4 py-3">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {comparison.before}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {r.before}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 border-t border-slate-100 bg-brand-50/50 px-4 py-3 dark:border-slate-800 dark:bg-brand-500/[0.06]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                        {comparison.after}
                      </div>
                      <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                        {r.after}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PLANES ===================== */}
      <section id="planes" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <SectionHeader eyebrow="Planes" title="Un ERP que crece con tu operación">
          {pricing.subnote}
        </SectionHeader>
        <Reveal className="mt-5 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            {pricing.note}
          </span>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {pricing.plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  p.highlighted
                    ? "brand-border shadow-xl shadow-brand-600/10 lg:-mt-3 lg:pb-10"
                    : "border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    Más elegido
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {p.desc}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    {p.price}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {p.period}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                  {p.users}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6 dark:border-slate-800">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-slate-900 dark:text-white">
                  {p.impl}
                </p>
                <a
                  href="#contacto"
                  className={`mt-4 inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
                    p.highlighted
                      ? "brand-gradient"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-400 dark:text-slate-500">
          {pricing.disclaimer}
        </Reveal>
      </section>

      {/* ===================== BENEFICIOS ===================== */}
      <section id="beneficios" className="bg-slate-50 py-20 sm:py-24 lg:py-28 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader eyebrow="Por qué Born ERP" title="La diferencia no está solo en los módulos">
            Está en combinar tecnología, conocimiento de procesos industriales e
            implementación cercana.
          </SectionHeader>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {b.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />

          <div className="mt-12 space-y-3">
            {faq.items.map((item, i) => (
              <Reveal key={item.q} delay={(i % 3) * 70}>
                <details className="group rounded-xl border border-slate-200 bg-white p-5 transition open:shadow-md dark:border-slate-800 dark:bg-slate-900">
                  <summary className="flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white">
                    {item.q}
                    <ChevronDown className="faq-chevron h-5 w-5 shrink-0 text-slate-400" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="brand-gradient relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-16 text-center shadow-xl shadow-brand-600/20 sm:px-12">
          <div className="dot-grid pointer-events-none absolute inset-0 text-white/20" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              {finalCta.subtitle}
            </p>
            <a
              href={finalCta.cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-slate-100"
            >
              {finalCta.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== CONTACTO ===================== */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {contact.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {contact.subtitle}
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Mail className="h-5 w-5" />
                </span>
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Phone className="h-5 w-5" />
                </span>
                {contact.phone}
              </a>
              <a
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Globe className="h-5 w-5" />
                </span>
                {contact.website}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <Logo className="h-9 w-9" />
                {brand.name}
              </div>
              <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
                {brand.description}
              </p>
              <a
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
              >
                {contact.website}
              </a>
            </div>
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {col.title}
                </h4>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row dark:border-slate-800">
            <span>
              © {brand.name}. {footer.disclaimer}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
