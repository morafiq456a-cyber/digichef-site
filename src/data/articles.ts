export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
}

export const articles: Article[] = [
  {
    slug: "what-is-a-qr-digital-menu",
    title: "What Is a QR Digital Menu?",
    excerpt:
      "QR digital menus let guests open your menu on their phone by scanning a code — no app, no printed pages. Here's how they work and why restaurants are adopting them.",
    date: "2026-01-15",
    readTime: "4 min read",
    sections: [
      {
        heading: "The basic idea",
        body: [
          "A QR digital menu replaces (or complements) your printed menu. Guests point their phone camera at a small QR code on the table, and your menu opens instantly in their browser. There is no app to download and nothing to install.",
          "Unlike a static photo of your menu, a digital menu is a real webpage: it's readable, searchable, organized by categories, and designed for phone screens.",
        ],
      },
      {
        heading: "Why restaurants are switching",
        body: [
          "Printed menus wear out, go out of date, and cost money to reprint every time a price changes. A digital menu is updated once — from a dashboard — and every QR code in the restaurant immediately shows the latest version.",
          "It also improves hygiene and speed: guests don't wait for a physical menu, and staff spend less time managing printed materials.",
        ],
      },
      {
        heading: "What a good QR menu includes",
        body: [
          "A proper digital menu should be mobile-first, fast to load, available in the languages your guests speak, and easy for you to update without technical skills.",
          "That's exactly what Digichef provides — with Arabic & English support and a private dashboard included.",
        ],
      },
    ],
  },
  {
    slug: "digital-menu-vs-pdf-menu",
    title: "Digital Menu vs PDF Menu",
    excerpt:
      "Many restaurants share a PDF of their menu and call it digital. But a PDF is not a digital menu — here's the real difference and why it matters for your guests.",
    date: "2026-01-22",
    readTime: "4 min read",
    sections: [
      {
        heading: "A PDF is just a picture of paper",
        body: [
          "Sharing a PDF menu through WhatsApp or a link feels digital, but the guest experience is the same as paper: pinch to zoom, scroll sideways, squint at small text. PDFs are designed for printing, not for phone screens.",
          "A true digital menu is built as a mobile webpage. Text is readable without zooming, categories are tappable, and items are laid out for a phone screen.",
        ],
      },
      {
        heading: "Updating: the hidden cost of PDFs",
        body: [
          "Every price change means editing the source file, exporting a new PDF, and re-sharing it everywhere the old one lives. Old versions keep circulating.",
          "With a dashboard-driven digital menu, you change the price once and it's live everywhere instantly — one link, always current.",
        ],
      },
      {
        heading: "When each makes sense",
        body: [
          "A PDF is fine as a printable backup. But for guests sitting at your table with a phone in hand, a mobile-first digital menu is simply a better experience.",
        ],
      },
    ],
  },
  {
    slug: "update-your-menu-faster",
    title: "How Restaurants Can Update Their Menu Faster",
    excerpt:
      "Price changes, seasonal dishes, sold-out items — menus change constantly. Here's how to keep yours accurate without reprinting or redesigning.",
    date: "2026-02-01",
    readTime: "5 min read",
    sections: [
      {
        heading: "Why menu updates are painful",
        body: [
          "With printed menus, a single price change triggers a chain: edit the design file, send it to the printer, wait, pay, replace. Many restaurants delay updates, and guests end up seeing outdated prices.",
          "The problem isn't the change itself — it's that the menu is locked in a physical format.",
        ],
      },
      {
        heading: "Separate content from design",
        body: [
          "A digital menu separates your content (products, prices, categories) from its design. You edit the content in a simple dashboard; the design applies automatically.",
          "That means updates take seconds: change a price, mark an item as sold out, add a new dish — done, from your phone.",
        ],
      },
      {
        heading: "A practical workflow",
        body: [
          "Keep your dashboard open during service. When the kitchen runs out of a dish, mark it unavailable immediately. When you launch a special, add it and flag it as New or Featured.",
          "Digichef's private dashboard is built exactly for this workflow — no technical knowledge required.",
        ],
      },
    ],
  },
  {
    slug: "why-mobile-friendly-menus-matter",
    title: "Why Mobile-Friendly Menus Matter",
    excerpt:
      "Your guests are already holding their phones at the table. A menu designed for mobile isn't a nice-to-have — it's the main way guests experience your menu.",
    date: "2026-02-10",
    readTime: "4 min read",
    sections: [
      {
        heading: "The phone is the new menu holder",
        body: [
          "When a guest scans your QR code, your menu competes for attention on a small screen, in a busy restaurant, often with weak signal. If it loads slowly or requires zooming and sideways scrolling, guests give up or call the waiter.",
          "A mobile-first menu is designed for exactly this context: fast, thumb-friendly, readable at a glance.",
        ],
      },
      {
        heading: "What mobile-first actually means",
        body: [
          "It means the menu is designed for the phone first, not shrunk down from a desktop layout. Large tap targets, readable type without zooming, category navigation that fits on one screen, and images that load fast on mobile data.",
        ],
      },
      {
        heading: "The business effect",
        body: [
          "A menu that's easy to browse gets browsed more. Guests explore more categories, discover items they wouldn't have asked about, and order with more confidence.",
          "Digichef menus are built mobile-first by default — with Arabic & English support, so every guest gets the same smooth experience.",
        ],
      },
    ],
  },
];
