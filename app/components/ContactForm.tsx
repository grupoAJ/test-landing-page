"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Boceto: no envía a ningún servidor, solo simula el éxito.
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-500/30 dark:bg-green-500/10">
        <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
          ¡Gracias! Recibimos tu mensaje.
        </h3>
        <p className="mt-1 max-w-sm text-sm text-slate-600 dark:text-slate-400">
          Te vamos a contactar para coordinar la demo. (Envío simulado — este es
          un boceto de demostración.)
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-4 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Nombre
          </label>
          <input required className={inputClass} placeholder="Tu nombre" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">
            Empresa
          </label>
          <input className={inputClass} placeholder="Tu empresa" />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">
          Email
        </label>
        <input
          required
          type="email"
          className={inputClass}
          placeholder="vos@empresa.com"
        />
      </div>
      <div className="mt-4">
        <label className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400">
          Mensaje
        </label>
        <textarea
          rows={4}
          className={inputClass}
          placeholder="Contanos sobre tu operación…"
        />
      </div>
      <button
        type="submit"
        className="brand-gradient mt-5 w-full rounded-lg px-4 py-3 text-sm font-semibold shadow-sm transition"
      >
        Solicitar demo
      </button>
      <p className="mt-3 text-center text-[11px] text-slate-400">
        No compartimos tus datos. Este formulario es una demostración.
      </p>
    </form>
  );
}
