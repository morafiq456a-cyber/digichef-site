import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCTA } from "@/components/CTA";
import type { WhatsAppContext } from "@/config";

/** Consistent page header used on inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-site pb-12 pt-32 sm:pt-40">
      <Reveal>
        <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-lime">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-sage sm:text-lg">
          {description}
        </p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Reveal>
    </section>
  );
}

/** Full-width closing conversion band. */
export function FinalCTA({
  title = "Ready to get your digital menu?",
  description = "Send us your current menu on WhatsApp — Digichef handles the setup and hands you a QR menu with your own private dashboard.",
  context = "default" as WhatsAppContext,
  label = "Get Your Menu",
}: {
  title?: string;
  description?: string;
  context?: WhatsAppContext;
  label?: string;
}) {
  return (
    <section className="container-site py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-white/[0.05] to-transparent px-6 py-16 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(210,255,0,0.1), transparent)",
            }}
          />
          <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sage">{description}</p>
          <div className="relative mt-8">
            <WhatsAppCTA context={context} size="lg">
              {label}
            </WhatsAppCTA>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** Small labelled card used for benefits / features. */
export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card-surface group p-6 transition-all duration-300 hover:border-lime/30 hover:bg-white/[0.05]">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-lime/25 bg-lime/10 text-lime transition-transform duration-300 group-hover:-translate-y-0.5">
        {icon}
      </div>
      <h3 className="font-display text-base font-bold text-cream">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-sage">{description}</p>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-lime">
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 leading-relaxed text-sage ${align === "center" ? "mx-auto max-w-xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
