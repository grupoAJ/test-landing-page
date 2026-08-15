"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { contact } from "@/content";

// Envío sin backend propio ni registro: FormSubmit reenvía el formulario
// al correo de contacto. La PRIMERA vez que llega un mensaje, FormSubmit
// envía un email de activación (un clic) a esa casilla; luego funciona solo.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${contact.email}`;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        form.reset();
        setStatus("success");
      } else {
        throw new Error(
          typeof data.message === "string"
            ? data.message
            : "No se pudo enviar el mensaje."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "No se pudo enviar el mensaje. Escribinos a " + contact.email + "."
      );
    }
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-500/30 dark:bg-green-500/10">
        <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
          ¡Gracias! Recibimos tu mensaje.
        </h3>
        <p className="mt-1 max-w-sm text-sm text-slate-600 dark:text-slate-400">
          Te vamos a contactar a la brevedad para coordinar la demo.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Opciones de FormSubmit */}
      <input type="hidden" name="_subject" value="Nueva solicitud de demo — Born ERP" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {/* Trampa anti-spam (los bots la completan; las personas no la ven) */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-name"
            className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400"
          >
            Nombre
          </label>
          <input
            id="cf-name"
            name="Nombre"
            required
            disabled={submitting}
            className={inputClass}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label
            htmlFor="cf-company"
            className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400"
          >
            Empresa
          </label>
          <input
            id="cf-company"
            name="Empresa"
            disabled={submitting}
            className={inputClass}
            placeholder="Tu empresa"
          />
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="cf-email"
          className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400"
        >
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          required
          type="email"
          disabled={submitting}
          className={inputClass}
          placeholder="vos@empresa.com"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="cf-message"
          className="mb-1 block text-xs font-medium text-slate-600 dark:text-slate-400"
        >
          Mensaje
        </label>
        <textarea
          id="cf-message"
          name="Mensaje"
          rows={4}
          disabled={submitting}
          className={inputClass}
          placeholder="Contanos sobre tu operación…"
        />
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="brand-gradient mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold shadow-sm transition disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando…
          </>
        ) : (
          "Solicitar demo"
        )}
      </button>
      <p className="mt-3 text-center text-[11px] text-slate-400">
        No compartimos tus datos. Te respondemos a la brevedad.
      </p>
    </form>
  );
}
