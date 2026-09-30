import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink, type WhatsAppContext } from "@/config";
import { cn } from "@/lib/utils";

interface WhatsAppCTAProps {
  context?: WhatsAppContext;
  message?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
}

/** Primary conversion action — opens WhatsApp with a prefilled message. */
export function WhatsAppCTA({
  context = "default",
  message,
  children,
  variant = "primary",
  size = "md",
  className,
}: WhatsAppCTAProps) {
  return (
    <a
      href={whatsappLink(context, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98]",
        size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
        variant === "primary" &&
          "bg-lime text-ink hover:shadow-lime-glow-sm hover:brightness-105",
        variant === "outline" &&
          "border border-line bg-white/[0.04] text-cream hover:border-lime/40 hover:bg-white/[0.07]",
        variant === "ghost" && "text-lime hover:bg-lime/10",
        className,
      )}
    >
      <MessageCircle className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      {children}
    </a>
  );
}

interface LinkCTAProps {
  to: string;
  children: ReactNode;
  variant?: "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
}

/** Secondary CTA that navigates within the site or to an external URL. */
export function LinkCTA({
  to,
  children,
  variant = "outline",
  size = "md",
  className,
  external = false,
}: LinkCTAProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98]",
    size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm",
    variant === "outline" &&
      "border border-line bg-white/[0.04] text-cream hover:border-lime/40 hover:bg-white/[0.07]",
    variant === "ghost" && "text-cream hover:bg-white/[0.06]",
    className,
  );
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
