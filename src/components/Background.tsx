import SectionHeading from "./SectionHeading";
import { background } from "@/data/content";

export default function Background() {
  return (
    <section aria-labelledby="before" className="pt-[clamp(2.5rem,6vw,4.5rem)]">
      <SectionHeading id="before">Before software</SectionHeading>
      <p className="mb-4 max-w-[40rem]">{background}</p>
    </section>
  );
}
