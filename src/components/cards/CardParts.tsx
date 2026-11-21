import type { LinkItem } from "@/data/content";

export function PointList({ items }: { items: readonly string[] }) {
  return (
    <ul className="points">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function LinkList({ links }: { links: readonly LinkItem[] }) {
  return (
    <ul className="links">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} rel="noopener">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
