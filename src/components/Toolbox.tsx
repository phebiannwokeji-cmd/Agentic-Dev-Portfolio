import SectionHeading from "./SectionHeading";
import { toolbox } from "@/data/content";

export default function Toolbox() {
  return (
    <section aria-labelledby="toolbox" className="pt-[clamp(2.5rem,6vw,4.5rem)]">
      <SectionHeading id="toolbox">Toolbox</SectionHeading>
      <dl className="grid max-w-[52rem] gap-x-8 gap-y-[.6rem] md:grid-cols-[7rem_minmax(0,1fr)]">
        {toolbox.map((row) => (
          <div key={row.label} className="contents">
            <dt className="font-bold">{row.label}</dt>
            <dd className="mb-2 text-muted md:mb-0">{row.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
