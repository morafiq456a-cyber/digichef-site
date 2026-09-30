import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsAppCTA } from "@/components/CTA";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/live-demo", label: "Live Demo" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Resources" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-line bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Digichef home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-white/[0.07] text-cream"
                    : "text-sage hover:text-cream",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppCTA context="home">Get Your Menu</WhatsAppCTA>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-ink/97 backdrop-blur-xl transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <nav
          className="container-site flex flex-1 flex-col gap-1 overflow-y-auto py-6"
          aria-label="Mobile"
        >
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-xl px-4 py-3.5 font-display text-2xl font-semibold transition-all",
                  open && "animate-in fade-in slide-in-from-left-2",
                  isActive ? "text-lime" : "text-cream hover:text-lime",
                )
              }
              style={{ animationDelay: `${i * 40}ms`, animationFillMode: "backwards" }}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-4 border-t border-line pt-4">
            <p className="px-4 pb-2 text-xs font-medium uppercase tracking-widest text-sage-dim">
              Markets
            </p>
            <div className="flex flex-wrap gap-2 px-4">
              <NavLink to="/saudi-arabia" className="tag-chip">Saudi Arabia</NavLink>
              <NavLink to="/uae" className="tag-chip">UAE</NavLink>
              <NavLink to="/egypt" className="tag-chip">Egypt</NavLink>
              <NavLink to="/contact" className="tag-chip">Contact</NavLink>
            </div>
          </div>
        </nav>
        <div className="container-site pb-6">
          <WhatsAppCTA context="home" size="lg" className="w-full">
            Get Your Menu
          </WhatsAppCTA>
        </div>
      </div>
    </>
  );
}
