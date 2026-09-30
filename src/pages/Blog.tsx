import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FinalCTA, PageHero } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { articles } from "@/data/articles";

export default function Blog() {
  useSEO({
    title: "Blog — Resources for Restaurants Going Digital",
    description:
      "Practical guides for restaurant and cafe owners: QR digital menus, mobile-friendly menus, faster menu updates, and digital menu best practices.",
    path: "/blog",
  });

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Guides for restaurants
            <br />
            <span className="text-lime">going digital.</span>
          </>
        }
        description="Short, practical articles about digital menus, QR menus, and running a smoother restaurant — no jargon."
      />

      <section className="container-site pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 80}>
              <Link
                to={`/blog/${a.slug}`}
                className="card-surface group flex h-full flex-col p-7 transition-all duration-300 hover:border-lime/30 hover:bg-white/[0.05]"
              >
                <p className="text-xs text-sage-dim">
                  {a.date} · {a.readTime}
                </p>
                <h2 className="mt-3 font-display text-xl font-bold leading-snug text-cream transition-colors group-hover:text-lime">
                  {a.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sage">
                  {a.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lime">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA context="default" />
    </>
  );
}
