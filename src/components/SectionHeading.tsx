export function SectionHeading({
  index, eyebrow, title, description,
}: { index: string; eyebrow: string; title: string; description?: string }) {
  const lines = title.split("\\n");
  return (
    <div className="section-heading">
      <span className="section-index">{index} /</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{lines.map((line, i) => <span key={`${line}-${i}`}>{i > 0 && <br />}{line}</span>)}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  );
}