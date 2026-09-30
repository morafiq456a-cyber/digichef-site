/**
 * Digichef — single configuration file.
 * Change the WhatsApp number, messages, demo URL, or brand name here
 * and it updates across the entire website.
 */

export const config = {
  brandName: "Digichef",
  tagline: "Modern QR digital menus for restaurants and cafes.",

  /** WhatsApp number in international format, digits only (no "+", no spaces). */
  whatsappNumber: "201091127737",

  /** The live demo menu URL. */
  demoUrl: "https://seaview-vert.vercel.app/",

  /** Prefilled WhatsApp messages per context. */
  whatsappMessages: {
    default: "Hello Digichef, I want to know more about the digital menu.",
    home: "Hello Digichef, I want to know more about the digital menu.",
    howItWorks:
      "Hello Digichef, I want to start the process and send my menu.",
    pricing:
      "Hello Digichef, I want to know about pricing and the free menu.",
    demo: "Hello Digichef, I saw the demo and want to create a menu for my restaurant.",
    dashboard:
      "Hello Digichef, I want to know more about the private dashboard.",
    contact: "Hello Digichef, I want to know more about the digital menu.",
    country:
      "Hello Digichef, I want a QR digital menu for my restaurant.",
  },
} as const;

export type WhatsAppContext = keyof typeof config.whatsappMessages;

/** Build a wa.me link with a prefilled message. */
export function whatsappLink(
  context: WhatsAppContext = "default",
  override?: string,
): string {
  const message = override ?? config.whatsappMessages[context];
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
