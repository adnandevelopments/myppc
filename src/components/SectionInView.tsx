"use client";

import { motion } from "@/components/Motion";
import type { ReactNode } from "react";

type SectionInViewProps = {
  children: ReactNode;
  className?: string;
  /** Direction the section enters from */
  from?: "up" | "left" | "right" | "scale";
  delay?: number;
};

export default function SectionInView({
  children,
  className = "",
  from = "up",
  delay = 0,
}: SectionInViewProps) {
  const initial =
    from === "left"
      ? { opacity: 0, x: -70, y: 0, scale: 1 }
      : from === "right"
        ? { opacity: 0, x: 70, y: 0, scale: 1 }
        : from === "scale"
          ? { opacity: 0, x: 0, y: 24, scale: 0.96 }
          : { opacity: 0, x: 0, y: 48, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
