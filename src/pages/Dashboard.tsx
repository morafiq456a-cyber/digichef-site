import {
  Eye,
  EyeOff,
  Flame,
  Leaf,
  Pencil,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Trash2,
} from "lucide-react";
import { WhatsAppCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { FinalCTA, PageHero, SectionHeading } from "@/components/Sections";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { useSEO } from "@/hooks/useSEO";

const controls = [
  { icon: <Plus className="h-4 w-4" />, label: "Add Product" },
  { icon: <Pencil className="h-4 w-4" />, label: "Edit Product" },
  { icon: <Trash2 className="h-4 w-4" />, label: "Delete Product" },
  { icon: <Eye className="h-4 w-4" />, label: "Available" },
  { icon: <Star className="h-4 w-4" />, label: "Featured" },
  { icon: <Star className="h-4 w-4 fill-lime text-lime" />, label: "Bestseller" },
  { icon: <Sparkles className="h-4 w-4" />, label: "New" },
  { icon: <Flame className="h-4 w-4" />, label: "Spicy" },
  { icon: <Leaf className="h-4 w-4" />, label: "Vegetarian" },
  { icon: <EyeOff className="h-4 w-4" />, label: "Visible" },
];

const capabilities = [
  {
    title: "Products & categories",
    text: "Add, edit and remove products. Organize them into categories and reorder anytime.",
  },
  {
    title: "Prices & availability",
    text: "Change a price or mark an item as sold out in seconds — your QR menu updates instantly.",
  },
  {
    title: "Flags & highlights",
    text: "Mark items as Bestseller, New, Spicy, Vegetarian or Featured so customers spot them fast.",
  },
  {
    title: "QR code & appearance",
    text: "Download your menu's QR code and adjust how your digital menu looks.",
  },
];

export default function Dashboard() {
  useSEO({
    title: "Private Restaurant Dashboard",
    description:
      "Every Digichef restaurant gets a private dashboard to manage products, prices, categories, availability and menu appearance — no technical skills needed.",
    path: "/dashboard",
  });

  return (
    <>
      <PageHero
        eyebrow="Private Dashboard"
        title={
          <>
            Your menu is not just a QR code.
            <br />
            <span className="text-lime">You get a control panel.</span>
          </>
        }
        description="Every Digichef restaurant receives private dashboard credentials. From there, you manage the entire menu yourself — products, prices, categories, availability and more."
      >
        <WhatsAppCTA context="dashboard" size="lg">
          Get Your Menu
        </WhatsAppCTA>
      </PageHero>

      {/* Full dashboard mockup */}
      <section className="container-site pb-16">
        <Reveal>
          <DashboardMockup />
          <p className="mt-4 text-center text-xs text-sage-dim">
            Showcase with demo data — each restaurant receives its own private dashboard.
          </p>
        </Reveal>
      </section>

      {/* Controls */}
      <section className="border-y border-line bg-ink-2/50 py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Menu Controls"
            title="Everything on your menu, under your control"
            description="Simple switches and actions — built for busy restaurant owners, not developers."
          />
          <div className="mt-10 flex flex-wrap gap-2.5">
            {controls.map((c) => (
              <Reveal key={c.label}>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-cream">
                  <span className="text-lime">{c.icon}</span>
                  {c.label}
                </span>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 80}>
                <div className="card-surface h-full p-6">
                  <h3 className="font-display text-base font-bold text-cream">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sage">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security statement */}
      <section className="container-site py-20">
        <Reveal>
          <div className="card-surface flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-lime/25 bg-lime/10 text-lime">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-cream">
                Private by design
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-sage">
                Each restaurant gets access only to its own dashboard and menu.
                Your products, prices and settings are yours alone — no other
                restaurant can see or touch them.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <FinalCTA
        context="dashboard"
        title="Get your menu — and the keys to it"
        description="Digichef builds your digital menu and hands you private dashboard credentials. From then on, updates take seconds."
        label="Start Your Menu"
      />
    </>
  );
}
