import TypedHeadline from "./TypedHeadline";
import { contactLinks, profile } from "@/data/content";

export default function Hero() {
  return (
    <header className="pt-[clamp(4rem,12vw,9rem)] pb-[clamp(3rem,8vw,6rem)]">
      <TypedHeadline
        text={profile.headline}
        className="mb-8 max-w-[17em] text-[clamp(2rem,5.6vw,4.25rem)] leading-[1.08] font-medium tracking-[-0.045em]"
      />
      <p className="mb-2 max-w-[40rem]">{profile.intro}</p>
      <p className="mb-8 max-w-[40rem] text-muted">
        <span className="dot" aria-hidden="true" />
        <b className="font-medium text-ink">Now:</b> {profile.now}
      </p>
      <ul className="flex flex-wrap gap-x-8 gap-y-2">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a className="contact-link" href={link.href} rel={link.href.startsWith("http") ? "noopener" : undefined}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
