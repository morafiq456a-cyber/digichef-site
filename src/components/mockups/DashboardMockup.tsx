import {
  Eye,
  Flame,
  LayoutDashboard,
  Leaf,
  ListTree,
  Palette,
  Plus,
  QrCode,
  Settings,
  Sparkles,
  Star,
  Store,
  Tags,
  UtensilsCrossed,
} from "lucide-react";
import { demoProducts, demoRestaurant, demoStats } from "@/data/demo";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: UtensilsCrossed, label: "Menu", active: false },
  { icon: ListTree, label: "Categories", active: false },
  { icon: Tags, label: "Products", active: false },
  { icon: QrCode, label: "QR Code", active: false },
  { icon: Palette, label: "Appearance", active: false },
  { icon: Store, label: "Restaurant", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const stats = [
  { label: "Total Products", value: demoStats.totalProducts },
  { label: "Available Products", value: demoStats.availableProducts },
  { label: "Categories", value: demoStats.categories },
  { label: "Menu Views", value: demoStats.menuViews.toLocaleString() },
];

function StatusPill({ status }: { status: string }) {
  const available = status === "Available";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold",
        available ? "bg-lime/10 text-lime" : "bg-white/[0.06] text-sage-dim",
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", available ? "bg-lime" : "bg-sage-dim")}
      />
      {status}
    </span>
  );
}

function TagIcon({ tag }: { tag: string }) {
  const cls = "h-3 w-3";
  switch (tag) {
    case "Bestseller":
      return <Star className={cls} />;
    case "New":
      return <Sparkles className={cls} />;
    case "Spicy":
      return <Flame className={cls} />;
    case "Vegetarian":
      return <Leaf className={cls} />;
    case "Featured":
      return <Eye className={cls} />;
    default:
      return null;
  }
}

/**
 * Marketing showcase of the private restaurant dashboard.
 * Demo data only — not a functional dashboard.
 */
export function DashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
      aria-label="Digichef dashboard preview (demo data)"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
        <span className="ml-3 hidden rounded-md border border-line bg-white/[0.03] px-3 py-1 text-[10px] text-sage-dim sm:block">
          dashboard.digichef — {demoRestaurant.name} (demo)
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 border-r border-line p-3 md:block">
          <div className="space-y-0.5">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium",
                  item.active
                    ? "bg-lime/10 text-lime"
                    : "text-sage hover:bg-white/[0.04]",
                )}
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </div>
            ))}
          </div>
        </aside>

        {/* Main panel */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-display text-sm font-bold text-cream">Overview</p>
              <p className="text-[11px] text-sage-dim">{demoRestaurant.name} — demo data</p>
            </div>
            <button
              type="button"
              tabIndex={-1}
              className="flex items-center gap-1.5 rounded-full bg-lime px-3.5 py-1.5 text-[11px] font-bold text-ink"
            >
              <Plus className="h-3.5 w-3.5" />
              Add Product
            </button>
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-line bg-white/[0.03] p-3">
                <p className="font-display text-xl font-bold text-cream">{s.value}</p>
                <p className="mt-0.5 text-[10px] text-sage-dim">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Product table */}
          <div className="mt-4 overflow-hidden rounded-xl border border-line">
            <div className="scroll-thin overflow-x-auto">
              <table className="w-full min-w-[430px] text-left text-[11px]">
                <thead>
                  <tr className="border-b border-line bg-white/[0.02] text-sage-dim">
                    <th className="px-3 py-2.5 font-medium">Product</th>
                    <th className="px-3 py-2.5 font-medium">Category</th>
                    <th className="px-3 py-2.5 font-medium">Price</th>
                    <th className="px-3 py-2.5 font-medium">Status</th>
                    <th className="px-3 py-2.5 font-medium">Flags</th>
                  </tr>
                </thead>
                <tbody>
                  {(compact ? demoProducts.slice(0, 4) : demoProducts).map((p) => (
                    <tr key={p.name} className="border-b border-line/60 last:border-0">
                      <td className="px-3 py-2.5">
                        <span className="flex items-center gap-2">
                          <span className="text-sm">{p.emoji}</span>
                          <span className="font-medium text-cream">{p.name}</span>
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-sage">{p.category}</td>
                      <td className="px-3 py-2.5 font-display font-semibold text-lime">
                        {p.price} {demoRestaurant.currency}
                      </td>
                      <td className="px-3 py-2.5">
                        <StatusPill status={p.status} />
                      </td>
                      <td className="px-3 py-2.5">
                        <span className="flex gap-1.5 text-sage">
                          {p.tags.map((t) => (
                            <TagIcon key={t} tag={t} />
                          ))}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
