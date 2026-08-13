"use client";

import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  themes,
  type ThemeId,
  isThemeId,
} from "@/lib/themes";

function applyTheme(id: ThemeId) {
  document.documentElement.setAttribute("data-theme", id);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, id);
  } catch {
    /* ignore */
  }
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (isThemeId(saved)) {
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
        return;
      }
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute("data-theme", DEFAULT_THEME);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = (id: ThemeId) => {
    setTheme(id);
    applyTheme(id);
    setOpen(false);
  };

  const active = themes.find((t) => t.id === theme) ?? themes[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 items-center gap-2 rounded-md border border-ppc-border bg-ppc-surface px-2.5 text-[13px] font-medium text-ppc-primary transition-colors hover:border-ppc-accent/40"
        aria-label="Change theme"
        aria-expanded={open}
        title="Theme colors"
      >
        <span
          className="h-3.5 w-3.5 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.08),0_0_12px_var(--bg-glow)]"
          style={{ background: active.swatch }}
          aria-hidden
        />
        <span className="hidden sm:inline">{active.label}</span>
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label="Theme options"
          className="absolute right-0 top-[calc(100%+8px)] z-[10000] max-h-[min(70vh,420px)] w-[260px] overflow-y-auto rounded-xl border border-ppc-border bg-ppc-surface/95 p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-md"
        >
          <p className="px-2.5 pb-1.5 pt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ppc-primary/40">
            Theme colors
          </p>
          {themes.map((t) => {
            const selected = t.id === theme;
            return (
              <button
                key={t.id}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => select(t.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left transition-colors ${
                  selected
                    ? "bg-ppc-mint ring-1 ring-ppc-accent/35"
                    : "hover:bg-ppc-mint/70"
                }`}
              >
                <span
                  className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, #fff8, transparent 40%), ${t.swatch}`,
                  }}
                  aria-hidden
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-medium text-ppc-primary">
                    {t.label}
                  </span>
                  <span className="block truncate text-[11px] text-ppc-primary/50">
                    {t.description}
                  </span>
                </span>
                {selected ? (
                  <span className="text-[12px] text-ppc-accent" aria-hidden>
                    ✓
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
