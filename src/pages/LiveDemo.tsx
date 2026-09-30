import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { WhatsAppCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { FinalCTA, PageHero } from "@/components/Sections";
import { BrowserDemoMockup } from "@/components/mockups/BrowserDemoMockup";
import { useSEO } from "@/hooks/useSEO";
import { config } from "@/config";

const demoHighlights = [
  "A real working menu — not screenshots",
  "Browse categories and products on your phone",
  "Arabic & English with RTL/LTR support",
  "Mobile-first experience, exactly like your customers see it",
];

export default function LiveDemo() {
  useSEO({
    title: "Live Demo",
    description:
      "Try the real Digichef QR digital menu demo — a working restaurant menu with Arabic & English support, mobile-first design, and instant loading.",
    path: "/live-demo",
  });

  return (
    <>
      <PageHero
        eyebrow="Live Demo"
        title={
          <>
            This is a real menu.
            <br />
            <span className="text-lime">Open it on your phone.</span>
          </>
        }
        description="The Digichef demo is an actual working digital menu — the same experience your customers get when they scan the QR code on a table."
      >
        <a
          href={config.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-base font-semibold text-ink transition-all duration-200 hover:shadow-lime-glow-sm hover:brightness-105 active:scale-[0.98]"
        >
          Open Live Demo
          <ArrowUpRight className="h-5 w-5" />
        </a>
        <WhatsAppCTA context="demo" variant="outline" size="lg">
          Chat on WhatsApp
        </WhatsAppCTA>
      </PageHero>

      <section className="container-site grid items-start gap-10 pb-8 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <BrowserDemoMockup />
        </Reveal>
        <Reveal delay={120}>
          <div className="card-surface p-7">
            <h2 className="font-display text-lg font-bold text-cream">
              What to try in the demo
            </h2>
            <ul className="mt-5 space-y-3.5">
              {demoHighlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-sage">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-xl border border-line bg-white/[0.03] p-4">
              <p className="text-xs leading-relaxed text-sage-dim">
                Tip: open{" "}
                <a
                  href={config.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-lime underline-offset-2 hover:underline"
                >
                  {config.demoUrl.replace("https://", "")}
                </a>{" "}
                on your phone for the full experience — that's how your customers
                will see it.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <FinalCTA
        context="demo"
        title="Want one like this for your restaurant?"
        description="Tell us about your restaurant on WhatsApp and we'll build your menu the same way."
        label="Get Your Menu"
      />
    </>
  );
}
