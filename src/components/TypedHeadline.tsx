"use client";

import { useEffect, useState } from "react";

type Props = { text: string; className?: string };

/**
 * Types the headline out once. The full text is always in the DOM (as an
 * invisible, layout-holding span) so nothing shifts while typing, and the
 * heading keeps an aria-label with the complete sentence.
 */
export default function TypedHeadline({ text, className }: Props) {
  const [count, setCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setCount(text.length);
      return;
    }

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      i += 1;
      setCount(i);
      if (i < text.length) timer = setTimeout(step, 34);
    };
    step();
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <h1 aria-label={text} className={className}>
      <span aria-hidden="true">
        <span>{text.slice(0, count)}</span>
        {!reduced && <span className="caret" />}
        <span className="t-rest">{text.slice(count)}</span>
      </span>
    </h1>
  );
}
