import { CheckCircle2 } from "lucide-react";
import { WhatsAppCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { FinalCTA, PageHero } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { whatsappLink } from "@/config";

const freeIncludes = [
  "QR digital menu",
  "Up to 20 products",
  "Private dashboard",
  "Arabic & English",
  "Mobile responsive",
  "Product management",
  "Category management",
  "QR code for your menu",
  "Initial setup by Digichef",
];

export default function Pricing() {
  useSEO({
    title: "Pricing — Free QR Menu up to 20 Products",
    description:
      "Start with a free Digichef QR digital menu for up to 20 products — including a private dashboard, Arabic & English support, and setup done for you.",
    path: "/pricing",
  });

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Start free.
            <br />
            <span className="text-lime">Grow when you're ready.</span>
          </>
        }
        description="The Digichef free menu covers everything a small restaurant or cafe needs to go digital. Pricing for larger menus is discussed directly — no surprises."
      />

      <section className="container-site pb-8">
        <Reveal>
          <div className="mx-auto max-w-xl">
            <div className="relative overflow-hidden rounded-3xl border border-lime/30 bg-gradient-to-b from-lime/[0.08] to-transparent p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-bold text-cream">Free Menu</h2>
                <span className="rounded-full bg-lime px-3 py-1 font-display text-xs font-bold text-ink">
                  FREE
                </span>
              </div>
              <p className="mt-2 font-display text-lg font-semibold text-lime">
                Up to 20 products
              </p>
              <p className="mt-3 text-sm leading-relaxed text-sage">
                Perfect for restaurants and cafes getting started with digital
                menus. Full setup handled by the Digichef team.
              </p>

              <ul className="mt-7 space-y-3">
                {freeIncludes.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-cream">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <WhatsAppCTA context="pricing" size="lg" className="w-full">
                  Get Started on WhatsApp
                </WhatsAppCTA>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-sage">
              Need more products or additional features?{" "}
              <a
                className="font-medium text-lime underline-offset-2 hover:underline"
                href={whatsappLink("pricing")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us for details.
              </a>
            </p>
          </div>
        </Reveal>
      </section>

      <FinalCTA
        context="pricing"
        title="Questions about pricing?"
        description="Tell us about your restaurant on WhatsApp and we'll recommend the right setup for your menu size."
        label="Chat on WhatsApp"
      />
    </>
  );
}
