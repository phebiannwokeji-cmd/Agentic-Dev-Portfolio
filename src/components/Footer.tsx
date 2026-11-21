import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-[clamp(4rem,9vw,7rem)] border-t border-rule pt-6">
      <p className="mb-4 text-[clamp(1.4rem,4.2vw,3rem)] leading-[1.15] font-medium tracking-[-0.04em] [overflow-wrap:anywhere]">
        <a className="cta-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </p>
      <p className="text-[.875rem] text-muted">{profile.location}</p>
    </footer>
  );
}
