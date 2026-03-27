import { getAllArticles, getArticleBySlug } from "../../../lib/journal";
import Image from "next/image";
import Link from "next/link";
import NewsletterFooter from "../../../components/NewsletterFooter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

// For static generation
export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await params;
  const article = getArticleBySlug(p.slug);

  if (!article || !article.content) {
    notFound();
  }

  return (
    <div className="bg-[var(--color-stone)] min-h-screen pt-12 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
        
        {/* Navigation back */}
        <Link 
          href="/journal" 
          className="text-[var(--color-muted)] hover:text-[var(--color-terracotta)] font-sans text-xs uppercase tracking-[0.2em] font-medium transition-colors mb-12 flex items-center"
        >
          &larr; Back to Journal
        </Link>
        
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-terracotta)] font-bold mb-6 flex items-center gap-4">
            <span>By {article.author}</span>
            <span className="text-[var(--color-muted)]">&middot;</span>
            <span className="text-[var(--color-muted)] font-medium">{article.date}</span>
          </div>
          <h1 className="font-serif text-[var(--color-charcoal)] text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-tight mb-8">
            {article.title}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-[var(--color-charcoal)]/80 font-light leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>
        </header>

      </div>

      {/* Full Bleed or Wide Image */}
      <div className="w-full max-w-[1600px] mx-auto mb-16 md:mb-24 px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video md:aspect-[21/9] w-full bg-[var(--color-charcoal)]/5 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <article
          className="prose prose-lg md:prose-xl prose-[var(--color-charcoal)] align-middle leading-loose font-sans font-light
          prose-h2:font-serif prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:tracking-tight prose-h2:font-normal
          prose-p:text-[var(--color-charcoal)]/90 prose-p:mb-8
          prose-blockquote:font-serif prose-blockquote:text-3xl prose-blockquote:md:text-4xl prose-blockquote:leading-snug prose-blockquote:my-16 prose-blockquote:border-l-4 prose-blockquote:border-[var(--color-terracotta)] prose-blockquote:pl-8 prose-blockquote:italic prose-blockquote:text-[var(--color-charcoal)]
          prose-li:text-[var(--color-charcoal)]/90
          prose-strong:font-bold prose-strong:text-[var(--color-charcoal)]"
        >
          <MDXRemote source={article.content} />
        </article>
        
        <div className="mt-24 pt-12 border-t border-[var(--color-charcoal)]/10 text-center">
          <Link 
            href="/shop" 
            className="font-sans text-sm uppercase tracking-widest font-medium text-[var(--color-charcoal)] hover:text-[var(--color-terracotta)] pb-2 border-b border-[var(--color-charcoal)] transition-colors"
          >
            Shop the Collections &rarr;
          </Link>
        </div>
      </div>

      <NewsletterFooter />
      
      {/* Optional style injection if need be, but prose manages most things */}
      <style dangerouslySetInnerHTML={{__html: `
        .prose h2 { color: var(--color-charcoal); }
        .prose ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 2rem; }
        .prose li { margin-bottom: 0.5rem; }
      `}} />
    </div>
  );
}
