"use client";

import type { ReactNode } from "react";

/** Smooth-scroll to an in-page section, accounting for the fixed header. */
export default function ScrollToSection({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        const el = document.getElementById(id);
        if (!el) return;
        const headerOffset = 80;
        const top =
          el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
        history.replaceState(null, "", `#${id}`);
      }}
    >
      {children}
    </button>
  );
}
