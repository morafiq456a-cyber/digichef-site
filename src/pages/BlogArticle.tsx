import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/Sections";
import { useSEO } from "@/hooks/useSEO";
import { articles } from "@/data/articles";

export default function BlogArticle() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/blog" replace />;
  return <ArticleContent article={article} />;
}

function ArticleContent({ article }: { article: (typeof articles)[number] }) {
  useSEO({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
  });

  return (
    <>
      <article className="container-site max-w-3xl pb-8 pt-32 sm:pt-40">
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-sage transition-colors hover:text-lime"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>
          <p className="mt-8 text-xs text-sage-dim">
            {article.date} · {article.readTime}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-sage">{article.excerpt}</p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {article.sections.map((s) => (
            <Reveal key={s.heading}>
              <section>
                <h2 className="font-display text-xl font-bold text-cream sm:text-2xl">
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-sage">
                    {p}
                  </p>
                ))}
              </section>
            </Reveal>
          ))}
        </div>
      </article>

      <FinalCTA
        context="default"
        title="Want this for your restaurant?"
        description="Send your menu on WhatsApp and Digichef will set up your digital menu for you."
        label="Get Your Menu"
      />
    </>
  );
}
