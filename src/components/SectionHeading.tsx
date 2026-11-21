export default function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="mb-7 text-base font-bold before:text-accent before:content-['##_']"
    >
      {children}
    </h2>
  );
}
