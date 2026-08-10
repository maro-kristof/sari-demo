export function SpecTable({
  rows,
  accent,
}: {
  rows: { label: string; value: string }[];
  accent?: string;
}) {
  return (
    <dl className="w-full border-t" style={{ borderColor: accent }}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-6 border-b py-3"
        >
          <dt className="text-sm tracking-wide text-muted-foreground">
            {row.label}
          </dt>
          <dd className="text-right text-[17px]">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
