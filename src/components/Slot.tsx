"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = { delay?: string; wide?: boolean; children: ReactNode };

/** Wrapper that fades a card up once it scrolls into view. */
export default function Slot({ delay = "0s", wide = false, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`slot${shown ? " in" : ""}${wide ? " min-[52rem]:col-span-full" : ""}`}
      style={{ "--d": delay } as CSSProperties}
    >
      {children}
    </div>
  );
}
