import { Languages, Search, Star } from "lucide-react";
import { demoProducts, demoRestaurant } from "@/data/demo";
import { cn } from "@/lib/utils";

/**
 * CSS-drawn smartphone mockup showing a QR digital menu.
 * Pure illustration with demo data — no real product.
 */
export function PhoneMenuMockup({ className }: { className?: string }) {
  const featured = demoProducts.filter((p) => p.status === "Available").slice(0, 4);
  return (
    <div
      className={cn(
        "relative w-[280px] shrink-0 rounded-[2.6rem] border border-line bg-ink-3 p-2.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]",
        className,
      )}
      aria-hidden="true"
    >
      {/* Screen */}
      <div className="scroll-thin relative h-[560px] overflow-hidden rounded-[2rem] bg-ink">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-3" />

        {/* Menu content */}
        <div className="scroll-thin h-full overflow-y-auto px-3 pb-6 pt-10">
          {/* Restaurant header */}
          <div className="flex items-start justify-between gap-2 px-1">
            <div>
              <p className="font-display text-sm font-bold text-cream">
                {demoRestaurant.name}
              </p>
              <p className="mt-0.5 text-[11px] text-sage-dim" dir="rtl" lang="ar">
                {demoRestaurant.nameAr}
              </p>
            </div>
            <span className="flex items-center gap-1 rounded-full border border-line px-2 py-1 text-[10px] text-sage">
              <Languages className="h-3 w-3 text-lime" />
              عربي
            </span>
          </div>

          {/* Search */}
          <div className="mt-3 flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3 py-2">
            <Search className="h-3.5 w-3.5 text-sage-dim" />
            <span className="text-[11px] text-sage-dim">Search the menu…</span>
          </div>

          {/* Category chips */}
          <div className="mt-3 flex gap-1.5 overflow-hidden">
            {["All", "Mains", "Starters", "Drinks"].map((c, i) => (
              <span
                key={c}
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold",
                  i === 0
                    ? "bg-lime text-ink"
                    : "border border-line text-sage",
                )}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Product cards */}
          <div className="mt-3 space-y-2">
            {featured.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2.5 rounded-xl border border-line bg-white/[0.03] p-2.5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-xl">
                  {p.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-[11px] font-semibold text-cream">
                      {p.name}
                    </p>
                    {p.tags.includes("Bestseller") && (
                      <Star className="h-2.5 w-2.5 shrink-0 fill-lime text-lime" />
                    )}
                  </div>
                  <p className="text-[10px] text-sage-dim" dir="rtl" lang="ar">
                    {p.nameAr}
                  </p>
                </div>
                <p className="shrink-0 font-display text-[11px] font-bold text-lime">
                  {p.price}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-[9px] text-sage-dim">
            Powered by Digichef
          </p>
        </div>
      </div>
    </div>
  );
}
