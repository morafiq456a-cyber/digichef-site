import {
  ArrowRight,
  Globe,
  LayoutDashboard,
  Pencil,
  QrCode,
  Smartphone,
  Wand2,
} from "lucide-react";
import { Link } from "react-router";
import { LinkCTA, WhatsAppCTA } from "@/components/CTA";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import {
  FeatureCard,
  FinalCTA,
  SectionHeading,
} from "@/components/Sections";
import { PhoneMenuMockup } from "@/components/mockups/PhoneMenuMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { useSEO } from "@/hooks/useSEO";
import { config } from "@/config";

const benefits = [
  {
    icon: <QrCode className="h-5 w-5" />,
    title: "Modern QR Menu",
    description:
      "Give customers a clean digital menu directly from a QR code on the table.",
  },
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Private Dashboard",
    description:
      "Restaurant owners manage their menu through a private, secure dashboard.",
  },
  {
    icon: <Pencil className="h-5 w-5" />,
    title: "Easy Updates",
    description:
      "Update products, prices, availability and categories — no redesign needed.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Arabic & English",
    description: "Full support for both Arabic (RTL) and English (LTR) menus.",
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Mobile First",
    description:
      "Designed for customers browsing your menu on their phones inside the restaurant.",
  },
  {
    icon: <Wand2 className="h-5 w-5" />,
    title: "Digichef Setup",
    description:
      "Send us your existing menu — Digichef handles the full initial setup for you.",
  },
];

const steps = [
  { n: "01", title: "Send Your Menu", text: "PDF, images, or menu details — via WhatsApp." },
  { n: "02", title: "We Build It", text: "Digichef converts it into a modern digital experience." },
  { n: "03", title: "Get Your QR Menu", text: "Receive your menu URL and QR code, ready to print." },
  { n: "04", title: "Manage It Anytime", text: "Update everything from your private dashboard." },
];

export default function Home() {
  useSEO({
    title: "QR Digital Menu for Restaurants & Cafes",
    description:
      "Digichef gives your restaurant a modern QR digital menu — Arabic & English, mobile-first, with a private dashboard that makes menu updates simple.",
    path: "/",
  });

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="container-site grid items-center gap-12 pb-20 pt-32 sm:pt-40 lg:grid-cols-2 lg:gap-8 lg:pb-28">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-sage">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              QR digital menus — done for you
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
              Your menu.
              <br />
              <span className="text-lime">Always updated.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-sage">
              A modern QR digital menu for restaurants and cafes — with a
              private dashboard that makes menu updates simple.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppCTA context="home" size="lg">
                Get Your Menu
              </WhatsAppCTA>
              <LinkCTA to={config.demoUrl} external size="lg">
                See Live Demo
              </LinkCTA>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-sage-dim">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-lime" /> Free up to 20 products
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-lime" /> Arabic & English
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-lime" /> We set it up for you
              </li>
            </ul>
          </Reveal>

          {/* Hero visual: phone + floating cards */}
          <Reveal delay={150} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <PhoneMenuMockup className="animate-float-slow" />
              {/* Floating QR card */}
              <div className="absolute -left-16 top-16 hidden rounded-2xl border border-line bg-ink-2/95 p-4 shadow-lime-glow backdrop-blur sm:block">
                <img
                  src={`${import.meta.env.BASE_URL}qr-demo.svg`}
                  alt="QR code linking to the Digichef live demo menu"
                  className="h-24 w-24 rounded-md bg-cream p-1.5"
                />
                <p className="mt-2 text-center text-[10px] font-medium text-sage">
                  Scan to view menu
                </p>
              </div>
              {/* Floating dashboard stat card */}
              <div className="absolute -right-14 bottom-24 hidden w-44 rounded-2xl border border-line bg-ink-2/95 p-4 backdrop-blur sm:block">
                <p className="text-[10px] font-medium uppercase tracking-wider text-sage-dim">
                  Menu views
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-lime">1,284</p>
                <p className="mt-1 text-[10px] text-sage-dim">Private dashboard — demo data</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────── */}
      <Marquee
        items={[
          "QR Digital Menu",
          "Arabic & English",
          "Private Dashboard",
          "Mobile First",
          "Easy Updates",
          "Managed Setup",
        ]}
      />

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className="container-site py-20 sm:py-28">
        <SectionHeading
          eyebrow="Why Digichef"
          title="A menu your customers will actually enjoy using"
          description="Everything a restaurant or cafe needs to replace printed menus and PDF files — without technical work."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 80}>
              <FeatureCard icon={b.icon} title={b.title} description={b.description} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Dashboard showcase ───────────────────────────── */}
      <section className="border-y border-line bg-ink-2/50 py-20 sm:py-28">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              eyebrow="Private Dashboard"
              title="Your menu is not just a QR code"
              description="Every restaurant gets a private control panel to manage products, prices, categories, availability and flags like Bestseller or Spicy — anytime, from any device."
            />
            <Reveal delay={120}>
              <DashboardMockup compact />
            </Reveal>
          </div>
          <Reveal className="mt-8">
            <Link
              to="/dashboard"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-lime transition-colors hover:text-cream"
            >
              Explore the dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── How it works summary ─────────────────────────── */}
      <section className="container-site py-20 sm:py-28">
        <SectionHeading
          eyebrow="How It Works"
          title="From paper menu to QR menu — without lifting a finger"
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="card-surface h-full p-6">
                <p className="font-display text-sm font-bold text-lime">{s.n}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-cream">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sage">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <LinkCTA to="/how-it-works" size="lg">
            See the full process
          </LinkCTA>
        </Reveal>
      </section>

      {/* ── Free offer band ──────────────────────────────── */}
      <section className="border-t border-line bg-ink-2/50 py-20 sm:py-28">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-lime">
              Free Menu
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Start free — up to 20 products
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-sage">
              The free menu includes everything you need: QR digital menu,
              private dashboard, Arabic & English, mobile responsive design,
              product and category management, and initial setup by Digichef.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppCTA context="pricing" size="lg">
                Get Started on WhatsApp
              </WhatsAppCTA>
              <LinkCTA to="/pricing" size="lg">
                View details
              </LinkCTA>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-surface p-8">
              <p className="font-display text-5xl font-bold text-lime">20</p>
              <p className="mt-1 text-sm font-medium text-cream">
                products included on the free menu
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2.5 text-sm text-sage sm:grid-cols-2">
                {[
                  "QR digital menu",
                  "Private dashboard",
                  "Arabic & English",
                  "Mobile responsive",
                  "Product management",
                  "Category management",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-lime" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA context="home" />
    </>
  );
}
