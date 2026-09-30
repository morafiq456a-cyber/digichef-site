import { useState, type FormEvent } from "react";
import { Clock, Globe2, MessageCircle } from "lucide-react";
import { WhatsAppCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { config, whatsappLink } from "@/config";

const infoItems = [
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "WhatsApp",
    text: "The fastest way to reach us — we usually reply quickly during business hours.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Where we work",
    text: "We serve restaurants and cafes in Egypt, Saudi Arabia, and the UAE — fully remote setup.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "How it starts",
    text: "Send us your current menu (PDF, images, or details) and we'll take it from there.",
  },
];

export default function Contact() {
  useSEO({
    title: "Contact",
    description:
      "Contact Digichef on WhatsApp to get a modern QR digital menu for your restaurant or cafe — setup handled for you, private dashboard included.",
    path: "/contact",
  });

  const [name, setName] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Hello Digichef! I'm ${name || "a restaurant owner"}${
      restaurant ? ` from ${restaurant}` : ""
    }. ${message || "I want to know more about the digital menu."}`;
    window.open(whatsappLink("contact", text), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build
            <br />
            <span className="text-lime">your menu.</span>
          </>
        }
        description="The easiest way to reach Digichef is WhatsApp. Tell us about your restaurant and send your current menu — we'll reply with the next steps."
      >
        <WhatsAppCTA context="contact" size="lg">
          Chat With Digichef
        </WhatsAppCTA>
      </PageHero>

      <section className="container-site grid gap-10 pb-20 lg:grid-cols-[1fr_1.2fr]">
        {/* Info */}
        <Reveal>
          <div className="space-y-4">
            {infoItems.map((item) => (
              <div key={item.title} className="card-surface flex gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lime/25 bg-lime/10 text-lime">
                  {item.icon}
                </div>
                <div>
                  <h2 className="font-display text-base font-bold text-cream">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-sage">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Form → composes a WhatsApp message */}
        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="card-surface space-y-5 p-7 sm:p-8"
            aria-label="Contact form — opens WhatsApp with your message"
          >
            <h2 className="font-display text-lg font-bold text-cream">
              Or send the details directly
            </h2>
            <p className="text-sm text-sage">
              Fill this in and we'll open WhatsApp with your message ready to send.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-cream">
                  Your name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-cream placeholder:text-sage-dim focus:border-lime/50 focus:outline-none"
                  placeholder="Ahmed"
                />
              </div>
              <div>
                <label htmlFor="restaurant" className="mb-1.5 block text-sm font-medium text-cream">
                  Restaurant name
                </label>
                <input
                  id="restaurant"
                  value={restaurant}
                  onChange={(e) => setRestaurant(e.target.value)}
                  className="w-full rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-cream placeholder:text-sage-dim focus:border-lime/50 focus:outline-none"
                  placeholder="My Restaurant"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-cream">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full resize-none rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-cream placeholder:text-sage-dim focus:border-lime/50 focus:outline-none"
                placeholder="Tell us about your menu — how many products, which languages…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-base font-semibold text-ink transition-all duration-200 hover:shadow-lime-glow-sm hover:brightness-105 active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Continue on WhatsApp
            </button>
            <p className="text-center text-xs text-sage-dim">
              Powered by WhatsApp — {config.brandName} responds there directly.
            </p>
          </form>
        </Reveal>
      </section>
    </>
  );
}
