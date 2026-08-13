"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type MotionDivProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  initial?: { opacity?: number; x?: number; y?: number; scale?: number };
  whileInView?: { opacity?: number; x?: number; y?: number; scale?: number };
  transition?: { duration?: number; delay?: number; ease?: number[] | string };
  viewport?: { once?: boolean; amount?: number };
};

function MotionDiv({
  children,
  className = "",
  style,
  initial = { opacity: 0, x: 0 },
  whileInView = { opacity: 1, x: 0 },
  transition = { duration: 0.7, delay: 0 },
  viewport = { once: false, amount: 0.25 },
  ...rest
}: MotionDivProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (viewport.once) observer.unobserve(el);
        } else if (!viewport.once) {
          setVisible(false);
        }
      },
      {
        threshold: viewport.amount ?? 0.3,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [viewport.amount, viewport.once]);

  const from = reduceMotion ? whileInView : visible ? whileInView : initial;
  const duration = reduceMotion ? 0 : (transition.duration ?? 0.7);
  const delay = reduceMotion ? 0 : (transition.delay ?? 0);

  const motionStyle: CSSProperties = {
    ...style,
    opacity: from.opacity ?? 1,
    transform: `translate3d(${from.x ?? 0}px, ${from.y ?? 0}px, 0) scale(${from.scale ?? 1})`,
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={motionStyle} {...rest}>
      {children}
    </div>
  );
}

export const motion = {
  div: MotionDiv,
};
