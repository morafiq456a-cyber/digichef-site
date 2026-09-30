import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

/** Lime interrupt strip with infinite horizontal scroll. */
export function Marquee({ items, className }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-lime py-3.5",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap font-display text-sm font-bold uppercase tracking-widest text-ink"
          >
            {item}
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-ink">
              <path d="M6 0l1.5 4.5L12 6 7.5 7.5 6 12 4.5 7.5 0 6l4.5-1.5z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
