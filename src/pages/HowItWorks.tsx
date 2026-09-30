import { FileUp, Hammer, LayoutDashboard, QrCode } from "lucide-react";
import { WhatsAppCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { FinalCTA, PageHero } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";

const steps = [
  {
    n: "01",
    icon: <FileUp className="h-6 w-6" />,
    title: "Send Your Menu",
    text: "Send your existing menu as PDF, images, or menu details through WhatsApp. No formatting needed — we work with what you already have.",
  },
  {
    n: "02",
    icon: <Hammer className="h-6 w-6" />,
    title: "We Build It",
    text: "Digichef converts your menu into a modern digital experience: products, categories, prices, Arabic and English — all set up for you.",
  },
  {
    n: "03",
    icon: <QrCode className="h-6 w-6" />,
    title: "Get Your QR Menu",
    text: "You receive your restaurant's digital menu URL and a QR code ready to print and place on tables, counters, or stickers.",
  },
  {
    n: "04",
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Manage It Anytime",
    text: "Use your private dashboard credentials to update products, prices, availability and categories whenever you need.",
  },
];

export default function HowItWorks() {
  useSEO({
    title: "How It Works",
    description:
      "From your existing menu to a modern QR digital menu in four steps — Digichef handles the setup, you manage everything from a private dashboard.",
    path: "/how-it-works",
  });

  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title={
          <>
            From paper to QR —
            <br />
            <span className="text-lime">we do the work.</span>
          </>
        }
        description="Digichef is a managed service. You don't sign up, install, or configure anything. You send us your menu — we build it, deploy it, and hand you the keys."
      >
        <WhatsAppCTA context="howItWorks" size="lg">
          Start Your Menu
        </WhatsAppCTA>
      </PageHero>

      <section className="container-site pb-8">
        <ol className="grid gap-4 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 100}>
              <li className="card-surface relative h-full overflow-hidden p-8">
                <span className="pointer-events-none absolute -right-2 -top-6 font-display text-8xl font-bold text-white/[0.04]">
                  {s.n}
                </span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-lime/25 bg-lime/10 text-lime">
                  {s.icon}
                </div>
                <h2 className="font-display text-xl font-bold text-cream">
                  <span className="mr-2 text-sm text-lime">{s.n}</span>
                  {s.title}
                </h2>
                <p className="mt-3 leading-relaxed text-sage">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container-site py-12">
        <Reveal>
          <div className="card-surface flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-lg font-bold text-cream">
                No technical knowledge needed
              </h2>
              <p className="mt-1 max-w-lg text-sm text-sage">
                If you can send a WhatsApp message, you can get a Digichef menu.
                Setup, deployment and hosting are handled by our team.
              </p>
            </div>
            <WhatsAppCTA context="howItWorks">Chat on WhatsApp</WhatsAppCTA>
          </div>
        </Reveal>
      </section>

      <FinalCTA
        context="howItWorks"
        title="Ready when your menu is"
        description="Send your current menu through WhatsApp and we'll take it from there."
        label="Send Your Menu"
      />
    </>
  );
}
