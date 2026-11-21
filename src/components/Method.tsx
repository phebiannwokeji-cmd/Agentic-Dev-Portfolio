import SectionHeading from "./SectionHeading";
import { method } from "@/data/content";

export default function Method() {
  return (
    <section aria-labelledby="method" className="pt-[clamp(2.5rem,6vw,4.5rem)]">
      <SectionHeading id="method">How I work with agents</SectionHeading>
      <ul className="grid gap-5">
        {method.map((step) => (
          <li
            key={step.title}
            className="grid max-w-[52rem] grid-cols-[minmax(0,1fr)] gap-x-8 gap-y-[.15rem] md:grid-cols-[7rem_minmax(0,1fr)]"
          >
            <b className="font-bold">{step.title}</b>
            <span className="text-muted">{step.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
