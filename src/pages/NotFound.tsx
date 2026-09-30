import { Link } from "react-router";
import { WhatsAppCTA } from "@/components/CTA";
import { useSEO } from "@/hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
    path: "/404",
  });

  return (
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-7xl font-bold text-lime">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-cream">
        This page isn't on the menu
      </h1>
      <p className="mt-3 max-w-sm text-sage">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-white/[0.04] px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-lime/40"
        >
          Back to Home
        </Link>
        <WhatsAppCTA context="default">Get Your Menu</WhatsAppCTA>
      </div>
    </section>
  );
}
