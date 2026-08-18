"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Clinician } from "@/lib/content";

export function clinicianBio(person: Clinician) {
  return (
    person.bio ??
    `${person.name} is part of the medviCare clinical team, helping patients get licensed, private care online.`
  );
}

export default function ClinicianModal({
  person,
  onClose,
}: {
  person: Clinician | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!person) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [person, onClose]);

  if (!person || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[10002] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        aria-label="Close clinician details"
        className="animate-clinician-backdrop absolute inset-0 bg-ppc-dark/50 backdrop-blur-[3px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="clinician-modal-title"
        className="animate-clinician-panel relative z-10 w-full max-w-[720px] overflow-hidden rounded-2xl border border-ppc-border bg-white shadow-[0_28px_80px_-28px_rgba(18,26,56,0.55)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/90 text-ppc-primary shadow-sm hover:bg-white"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 3l10 10M13 3L3 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] min-h-[240px] sm:aspect-auto sm:min-h-[420px]">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 320px"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-ppc-accent">
              {person.role}
            </p>
            <h3
              id="clinician-modal-title"
              className="mt-2 font-display text-[28px] font-semibold leading-tight text-ppc-primary md:text-[32px]"
            >
              {person.name}
            </h3>
            <p className="mt-1 text-[15px] font-medium text-ppc-primary/80">
              {person.credentials}
            </p>
            {person.badges?.length ? (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {person.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-ppc-mint px-2.5 py-1 text-[11px] font-semibold text-ppc-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            ) : null}
            <p className="mt-4 text-[15px] leading-relaxed text-ppc-primary/80 md:text-[16px]">
              {clinicianBio(person)}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
