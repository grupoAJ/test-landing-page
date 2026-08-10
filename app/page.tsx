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
  stats,
  trustChips,
  sectors,
  modules,
  integration,
  features,
  workflow,
  benefits,
  comparison,
  testimonials,
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

// Etiqueta de sección reutilizable (eyebrow con gradiente de marca)
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
      {children}
    </span>
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
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-10 lg:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={hero.ctaPrimary.href}
                className="brand-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-lg shadow-brand-600/20 transition"
              >
                {hero.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
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

      {/* ===================== STATS ===================== */}
      <section className="relative overflow-hidden bg-slate-900 py-14 dark:bg-slate-950">
        <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(120deg,#7bb92b,#29abe2)]" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-slate-300">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== SECTORES ===================== */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Pensado para operaciones como la tuya
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {sectors.map((s, i) => (
            <Reveal
              key={s.label}
              delay={(i % 6) * 60}
              className="flex items-center gap-2.5 text-slate-500 dark:text-slate-400"
            >
              <Icon name={s.icon} className="h-6 w-6" />
              <span className="text-sm font-semibold">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== MÓDULOS ===================== */}
      <section id="modulos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Módulos</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Un módulo para cada parte del negocio
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Todos conectados entre sí. Activá lo que necesitás hoy y sumá el
            resto cuando quieras.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={(i % 4) * 70}>
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
      <section className="bg-slate-50 py-20 dark:bg-slate-900/40">
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

      {/* ===================== FEATURES ALTERNADOS ===================== */}
      <section className="mx-auto max-w-6xl space-y-20 px-4 py-20 sm:px-6 lg:space-y-28">
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

      {/* ===================== CÓMO FUNCIONA (FLUJO) ===================== */}
      <section id="flujo" className="bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>{workflow.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {workflow.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {workflow.desc}
            </p>
          </Reveal>

          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {s.desc}
                  </p>
                  {i < workflow.steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-300 lg:block dark:text-brand-500/40" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BENEFICIOS ===================== */}
      <section id="beneficios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Beneficios</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Por qué elegirlo
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            No es una suite genérica más: está pensado para que los datos sean
            confiables y el negocio, gobernable.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 80}>
              <div className="h-full rounded-2xl bg-gradient-to-b from-slate-50 to-white p-6 ring-1 ring-slate-200 dark:from-slate-800/40 dark:to-slate-900 dark:ring-slate-800">
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
      </section>

      {/* ===================== COMPARATIVA ===================== */}
      <section id="comparativa" className="bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>{comparison.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {comparison.title}
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              {/* Encabezado */}
              <div className="grid grid-cols-[1.1fr_1fr_1fr]">
                <div className="p-4" />
                <div className="p-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm dark:text-slate-400">
                  {comparison.before}
                </div>
                <div className="bg-brand-50/60 p-4 text-center text-xs font-bold uppercase tracking-wide text-brand-700 sm:text-sm dark:bg-brand-500/10 dark:text-brand-300">
                  {comparison.after}
                </div>
              </div>
              {comparison.rows.map((r) => (
                <div
                  key={r.label}
                  className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-slate-100 dark:border-slate-800"
                >
                  <div className="p-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                    {r.label}
                  </div>
                  <div className="flex items-start gap-1.5 p-4 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    <span>{r.before}</span>
                  </div>
                  <div className="flex items-start gap-1.5 bg-brand-50/60 p-4 text-xs text-slate-800 sm:text-sm dark:bg-brand-500/[0.06] dark:text-slate-100">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                    <span>{r.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== TESTIMONIOS ===================== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
            {testimonials.note}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Lo que cambia en el día a día
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.author} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Quote className="h-8 w-8 text-brand-300 dark:text-brand-500/40" />
                <blockquote className="mt-3 flex-1 text-slate-700 dark:text-slate-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== PLANES ===================== */}
      <section id="planes" className="bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Planes</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Planes que crecen con vos
            </h2>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
                {pricing.note}
              </span>
            </div>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {pricing.subnote}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricing.plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-7 ${
                    p.highlighted
                      ? "brand-border shadow-xl shadow-brand-600/10"
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
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                      {p.price}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {p.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                    {p.desc}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
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
                  <a
                    href="#contacto"
                    className={`mt-7 inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
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
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {faq.title}
          </h2>
        </Reveal>

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
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="px-4 py-10 sm:px-6">
        <div className="brand-gradient relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-14 text-center shadow-xl shadow-brand-600/20 sm:px-12">
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
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
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
                {brand.tagline}.
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
