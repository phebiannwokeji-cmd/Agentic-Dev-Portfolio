import SectionHeading from "./SectionHeading";
import Slot from "./Slot";
import TicketCard from "./cards/TicketCard";
import ChatCard from "./cards/ChatCard";
import KoboCard from "./cards/KoboCard";

export default function Projects() {
  return (
    <section aria-labelledby="work" className="pt-[clamp(2.5rem,6vw,4.5rem)]">
      <SectionHeading id="work">Work</SectionHeading>
      <div className="grid grid-cols-[minmax(0,1fr)] items-stretch gap-[clamp(1.5rem,3vw,2.5rem)] min-[52rem]:grid-cols-[repeat(2,minmax(0,1fr))]">
        <Slot delay="0s">
          <TicketCard />
        </Slot>
        <Slot delay=".12s">
          <ChatCard />
        </Slot>
        <Slot delay=".06s" wide>
          <KoboCard />
        </Slot>
      </div>
    </section>
  );
}
