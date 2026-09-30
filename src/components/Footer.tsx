import { Link } from "react-router";
import { Logo } from "@/components/Logo";
import { WhatsAppCTA } from "@/components/CTA";
import { config } from "@/config";

const productLinks = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/live-demo", label: "Live Demo" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/pricing", label: "Pricing" },
];

const marketLinks = [
  { to: "/saudi-arabia", label: "Saudi Arabia" },
  { to: "/uae", label: "UAE" },
  { to: "/egypt", label: "Egypt" },
];

const resourceLinks = [
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-sage">
              {config.tagline}
            </p>
            <WhatsAppCTA context="contact" size="md">
              Chat on WhatsApp
            </WhatsAppCTA>
          </div>

          <nav aria-label="Product">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-sage-dim">
              Product
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-sage transition-colors hover:text-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Markets">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-sage-dim">
              Markets
            </h3>
            <ul className="space-y-2.5">
              {marketLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-sage transition-colors hover:text-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-sage-dim">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-sage transition-colors hover:text-lime">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-sage-dim">
            © {new Date().getFullYear()} {config.brandName}. All rights reserved.
          </p>
          <p className="text-xs text-sage-dim">
            Managed setup — we build your menu, you control it.
          </p>
        </div>
      </div>
    </footer>
  );
}
