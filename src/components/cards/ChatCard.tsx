import type { CSSProperties } from "react";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/data/content";
import { LinkList, PointList } from "./CardParts";

export default function ChatCard() {
  const p = projects.shopact;
  return (
    <TiltCard className="chat">
      <div className="head">
        <i aria-hidden="true" />
        WhatsApp commands
      </div>
      <div className="thread" aria-hidden="true">
        {p.commands.map((cmd, i) => (
          <span key={cmd} className="bubble" style={{ "--i": i } as CSSProperties}>
            {cmd}
          </span>
        ))}
        <span className="typing">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="body">
        <h3>{p.name}</h3>
        <p className="blurb">{p.blurb}</p>
        <PointList items={p.points} />
        <p className="stack">{p.stack}</p>
        <LinkList links={p.links} />
      </div>
    </TiltCard>
  );
}
