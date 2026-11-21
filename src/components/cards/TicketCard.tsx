import type { CSSProperties } from "react";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/data/content";
import { LinkList, PointList } from "./CardParts";

const SEATS = 18;

export default function TicketCard() {
  const p = projects.headcount;
  return (
    <TiltCard className="ticket">
      <div className="stub">
        <div className="admit">
          <span>Admit one</span>
          <span>RSVP link</span>
        </div>
        <h3>{p.name}</h3>
        <p className="blurb">{p.blurb}</p>
        <div className="seats" aria-hidden="true">
          {Array.from({ length: SEATS }, (_, i) => (
            <span key={i} className="seat" style={{ "--i": i } as CSSProperties} />
          ))}
        </div>
        <p className="full">Full means full.</p>
      </div>
      <div className="perf" aria-hidden="true" />
      <div className="body">
        <PointList items={p.points} />
        <p className="stack">{p.stack}</p>
        <LinkList links={p.links} />
      </div>
    </TiltCard>
  );
}
