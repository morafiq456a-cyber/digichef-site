import { ArrowUpRight, Lock } from "lucide-react";
import { config } from "@/config";
import { PhoneMenuMockup } from "@/components/mockups/PhoneMenuMockup";

/**
 * Browser-chrome mockup previewing the live demo,
 * with a real button opening the actual working demo.
 */
export function BrowserDemoMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-line bg-white/[0.03] px-3 py-1.5">
          <Lock className="h-3 w-3 shrink-0 text-lime" />
          <span className="truncate font-display text-[11px] text-sage">
            {config.demoUrl.replace("https://", "")}
          </span>
        </div>
        <a
          href={config.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open live demo in a new tab"
          className="text-sage transition-colors hover:text-lime"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Viewport */}
      <div className="relative flex justify-center overflow-hidden bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(210,255,0,0.07),transparent)] px-4 py-10">
        <div className="pointer-events-none absolute inset-0" />
        <PhoneMenuMockup className="scale-[0.82] sm:scale-100" />
      </div>
    </div>
  );
}
