"use client";

import { useState } from "react";

const topics = [
  "Care plan / treatment question",
  "Order or delivery",
  "Account & portal",
  "Billing",
  "Press / partnership",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-4 rounded-2xl border border-ppc-border bg-ppc-surface p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <h2 className="font-display text-[26px] text-ppc-primary md:text-[30px]">
          Send a message
        </h2>
        <p className="mt-1 text-[14px] text-ppc-primary/55">
          We typically reply within one business day.
        </p>
      </div>

      {sent ? (
        <div className="rounded-xl border border-ppc-accent/30 bg-ppc-mint px-4 py-5">
          <p className="text-[15px] font-medium text-ppc-primary">
            Thanks — your message is ready to send.
          </p>
          <p className="mt-1 text-[13px] text-ppc-primary/60">
            This demo form doesn’t transmit yet. For now, email us directly and
            we’ll help from there.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-4 text-[13px] font-medium text-ppc-accent"
          >
            Write another message
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-medium text-ppc-primary/60">
                Full name
              </span>
              <input
                type="text"
                required
                name="name"
                placeholder="Alex Morgan"
                className="w-full rounded-md border border-ppc-border bg-background px-4 py-3 text-sm text-ppc-primary outline-none focus:border-ppc-accent"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-medium text-ppc-primary/60">
                Email
              </span>
              <input
                type="email"
                required
                name="email"
                placeholder="you@email.com"
                className="w-full rounded-md border border-ppc-border bg-background px-4 py-3 text-sm text-ppc-primary outline-none focus:border-ppc-accent"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-medium text-ppc-primary/60">
                Phone (optional)
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="+1"
                className="w-full rounded-md border border-ppc-border bg-background px-4 py-3 text-sm text-ppc-primary outline-none focus:border-ppc-accent"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[12px] font-medium text-ppc-primary/60">
                Topic
              </span>
              <select
                name="topic"
                required
                defaultValue=""
                className="w-full rounded-md border border-ppc-border bg-background px-4 py-3 text-sm text-ppc-primary outline-none focus:border-ppc-accent"
              >
                <option value="" disabled>
                  Select a topic
                </option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-[12px] font-medium text-ppc-primary/60">
              How can we help?
            </span>
            <textarea
              name="message"
              required
              placeholder="Share a few details so we can route your note to the right team."
              rows={5}
              className="w-full rounded-md border border-ppc-border bg-background px-4 py-3 text-sm text-ppc-primary outline-none focus:border-ppc-accent"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-md bg-ppc-accent px-5 py-3.5 text-[14px] font-medium text-white hover:bg-ppc-accent-soft sm:w-auto"
          >
            Submit message
          </button>
        </>
      )}
    </form>
  );
}
