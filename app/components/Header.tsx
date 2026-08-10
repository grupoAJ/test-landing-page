"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { brand, nav } from "@/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <Logo className="h-9 w-9" />
          <span className="text-lg tracking-tight text-slate-900 dark:text-white">
            {brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contacto"
            className="brand-gradient hidden rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition sm:inline-block"
          >
            Solicitar demo
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 md:hidden dark:border-slate-700 dark:text-slate-300"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="brand-gradient mt-1 rounded-lg px-3 py-2 text-center text-sm font-semibold"
            >
              Solicitar demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
