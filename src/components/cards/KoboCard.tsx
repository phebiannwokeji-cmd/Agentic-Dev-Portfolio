import type { CSSProperties } from "react";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/data/content";
import { LinkList, PointList } from "./CardParts";

const SWATCHES = 24;

function swatchColor(index: number) {
  const t = index / (SWATCHES - 1);
  const hue = Math.round(225 - t * 185);
  const light = Math.round(22 + t * 48);
  return `hsl(${hue} 80% ${light}%)`;
}

export default function KoboCard() {
  const p = projects.koboWatt;
  return (
    <TiltCard className="kobo">
      <div className="kobo-grid">
        <div className="copy">
          <p className="flag">{p.flag}</p>
          <h3>{p.name}</h3>
          <p className="blurb">{p.blurb}</p>
          <PointList items={p.points} />
          <p className="stack">{p.stack}</p>
          <LinkList links={p.links} />
        </div>
        <div className="tokens">
          <div className="swatches" aria-hidden="true">
            {Array.from({ length: SWATCHES }, (_, i) => (
              <span
                key={i}
                className="swatch"
                style={{ background: swatchColor(i), "--i": i } as CSSProperties}
              />
            ))}
          </div>
          <dl className="stats">
            {p.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </TiltCard>
  );
}
