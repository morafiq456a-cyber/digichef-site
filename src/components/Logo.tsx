import { cn } from "@/lib/utils";

/** Digichef logo mark: fork + knife monogram. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#0A0D05" stroke="rgba(244,244,237,0.12)" />
      <path
        d="M11 8v7a3 3 0 0 0 6 0V8M14 8v16"
        stroke="#D2FF00"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M21 8c2.5 0 3.5 2.5 3.5 5s-1 5-3.5 5V24"
        stroke="#D2FF00"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-lg font-bold tracking-tight text-cream">
        Digichef
      </span>
    </span>
  );
}
