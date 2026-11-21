import LagosClock from "./LagosClock";
import { profile } from "@/data/content";

export default function TopBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-rule pb-4 text-[.875rem]">
      <span className="font-bold">{profile.name}</span>
      <span className="text-muted">
        Lagos <LagosClock timeZone={profile.timeZone} />
      </span>
    </div>
  );
}
