import { CheckCircle2 } from "lucide-react";
import { Navigate } from "react-router";
import { WhatsAppCTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { FinalCTA, PageHero, SectionHeading } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";

interface CountryInfo {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  reasons: { title: string; text: string }[];
  seoTitle: string;
  seoDescription: string;
}

const countries: Record<string, CountryInfo> = {
  "saudi-arabia": {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    headline: "QR digital menus for restaurants in Saudi Arabia",
    intro:
      "From Riyadh's cafes to Jeddah's restaurants, guests expect a fast, phone-friendly experience. A QR digital menu gives them exactly that — while giving you full control over your menu.",
    reasons: [
      {
        title: "Arabic & English, side by side",
        text: "Serve local and international guests with a bilingual menu that supports Arabic RTL and English LTR beautifully.",
      },
      {
        title: "Update prices instantly",
        text: "Seasonal items, new dishes, price changes — update your menu in seconds from your private dashboard, without reprinting.",
      },
      {
        title: "Made for mobile guests",
        text: "Guests scan the QR code and browse a fast, clean menu designed for phones — no app download needed.",
      },
      {
        title: "Setup handled for you",
        text: "Send your current menu on WhatsApp and Digichef builds your digital menu — no technical work on your side.",
      },
    ],
    seoTitle: "QR Menu Saudi Arabia — Digital Menus for Restaurants",
    seoDescription:
      "QR digital menus for restaurants and cafes in Saudi Arabia. Arabic & English, mobile-first, with a private dashboard and setup handled by Digichef.",
  },
  uae: {
    slug: "uae",
    name: "UAE",
    headline: "QR digital menus for restaurants in the UAE",
    intro:
      "In Dubai and Abu Dhabi's fast-moving dining scene, menus change often. A QR digital menu keeps up — update dishes, prices and availability the moment they change.",
    reasons: [
      {
        title: "Serve a multilingual crowd",
        text: "With guests from everywhere, an Arabic & English digital menu makes ordering easier for everyone at the table.",
      },
      {
        title: "Always-accurate menus",
        text: "Mark items sold out or change prices in real time — no more apologizing for outdated printed menus.",
      },
      {
        title: "Premium first impression",
        text: "A clean, modern digital menu matches the standard your guests expect when they dine out in the UAE.",
      },
      {
        title: "Zero technical hassle",
        text: "Digichef sets everything up for you. You get a QR code and a private dashboard — that's it.",
      },
    ],
    seoTitle: "QR Menu UAE — Digital Menus for Restaurants & Cafes",
    seoDescription:
      "QR digital menus for restaurants and cafes in the UAE. Arabic & English, mobile-friendly, with instant menu updates from a private dashboard.",
  },
  egypt: {
    slug: "egypt",
    name: "Egypt",
    headline: "QR digital menus for restaurants in Egypt",
    intro:
      "Restaurants and cafes across Cairo, Alexandria and the North Coast are moving to digital menus. Digichef makes the move simple — starting free for up to 20 products.",
    reasons: [
      {
        title: "Arabic & English menus",
        text: "Reach every guest with a bilingual digital menu — full Arabic RTL and English LTR support out of the box.",
      },
      {
        title: "Stop reprinting menus",
        text: "When prices change, update them once in your dashboard. Your QR menu always shows the latest version.",
      },
      {
        title: "Works on any phone",
        text: "Guests scan and browse instantly in their browser — fast loading, mobile-first, no app required.",
      },
      {
        title: "Free to start",
        text: "The free menu includes up to 20 products, your private dashboard, and full setup by the Digichef team.",
      },
    ],
    seoTitle: "QR Menu Egypt — Digital Menus for Restaurants & Cafes",
    seoDescription:
      "QR digital menus for restaurants and cafes in Egypt. Arabic & English, mobile-first, free up to 20 products, with setup handled by Digichef.",
  },
};

export default function Country({ slug }: { slug: string }) {
  const country = countries[slug];
  if (!country) return <Navigate to="/" replace />;

  return <CountryContent country={country} />;
}

function CountryContent({ country }: { country: CountryInfo }) {
  useSEO({
    title: country.seoTitle,
    description: country.seoDescription,
    path: `/${country.slug}`,
  });

  return (
    <>
      <PageHero
        eyebrow={`Digichef in ${country.name}`}
        title={country.headline}
        description={country.intro}
      >
        <WhatsAppCTA
          context="country"
          size="lg"
          message={`Hello Digichef, I want a QR digital menu for my restaurant in ${country.name}.`}
        >
          Get Your Menu
        </WhatsAppCTA>
      </PageHero>

      <section className="container-site pb-8">
        <SectionHeading
          eyebrow="Why Digital"
          title={`Why restaurants in ${country.name} are going digital`}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {country.reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 80}>
              <div className="card-surface h-full p-7">
                <CheckCircle2 className="mb-4 h-5 w-5 text-lime" />
                <h2 className="font-display text-lg font-bold text-cream">{r.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-sage">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA
        context="country"
        title={`Get your QR menu in ${country.name}`}
        description="Send your menu on WhatsApp — Digichef builds it, deploys it, and hands you a private dashboard."
        label="Chat on WhatsApp"
      />
    </>
  );
}
