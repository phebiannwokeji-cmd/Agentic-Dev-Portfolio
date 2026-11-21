"use client";

import type { PointerEvent, ReactNode } from "react";

type Props = { className?: string; children: ReactNode };

/** Card with a cursor-following glow and a slight 3D tilt (fine pointers only). */
export default function TiltCard({ className = "", children }: Props) {
  function onMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType === "touch") return;
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduced) {
      card.classList.add("is-moving");
      card.style.transform = `rotateX(${((0.5 - y) * 5).toFixed(2)}deg) rotateY(${((x - 0.5) * 7).toFixed(2)}deg)`;
    }
  }

  function onLeave(e: PointerEvent<HTMLElement>) {
    const card = e.currentTarget;
    card.classList.remove("is-moving");
    card.style.transform = "";
  }

  return (
    <article className={`card ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </article>
  );
}
