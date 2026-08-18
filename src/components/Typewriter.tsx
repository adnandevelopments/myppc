"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  staticText: string;
  words: string[];
  accentColor?: string;
  className?: string;
};

export default function Typewriter({
  staticText,
  words,
  accentColor = "#3D52A0",
  className = "",
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex] ?? "";
    const typingSpeed = deleting ? 45 : 90;
    const pauseAtEnd = 1800;
    const pauseAtStart = 400;

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseAtEnd);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, pauseAtStart);
    } else {
      timeout = setTimeout(() => {
        setCharIndex((c) => c + (deleting ? -1 : 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  const typed = (words[wordIndex] ?? "").slice(0, charIndex);

  return (
    <h1
      className={`font-display font-[400] md:text-[50px] text-[40px] leading-[100%] tracking-[1px] max-w-[520px] ${className}`}
    >
      {staticText}
      <span
        className="inline-block font-[600] font-display"
        style={{ color: accentColor }}
      >
        {typed}
        <span
          className="inline-block w-[2px] h-[0.9em] align-middle ml-[2px] bg-current animate-cursor-blink"
          style={{ color: accentColor }}
          aria-hidden
        />
      </span>
    </h1>
  );
}
