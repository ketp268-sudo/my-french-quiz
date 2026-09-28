type ProgressBarProps = {
  current: number;
  total: number;
  labelTemplate: string;
};

export function ProgressBar({
  current,
  total,
  labelTemplate,
}: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  const label = labelTemplate
    .replace("{current}", String(current))
    .replace("{total}", String(total));

  return (
    <div className="space-y-2" aria-label={label}>
      <div className="flex items-center justify-between text-sm font-medium sm:text-base">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-[var(--progress-track)]">
        <div
          className="h-full rounded-full bg-[var(--progress-fill)] transition-[width] duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
