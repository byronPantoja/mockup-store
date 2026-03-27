import Link from "next/link";
import Image from "next/image";
import { articles } from "../../lib/journal";
import NewsletterFooter from "../../components/NewsletterFooter";

export default function JournalPage() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="bg-[var(--color-stone)] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-32">
        
        {/* Header */}
        <div className="border-b border-[var(--color-charcoal)]/10 pb-12 mb-16 md:mb-24">
          <h1 className="font-serif text-[var(--color-charcoal)] text-6xl md:text-8xl lg:text-[9rem] tracking-tighter leading-none lowercase">
            journal
          </h1>
          <p className="font-sans text-xl md:text-2xl mt-8 text-[var(--color-muted)] max-w-2xl font-light">
            Thoughts, brewing guides, and stories from the farm to your cup.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-20 md:mb-32">
            <Link href={`/journal/${featuredArticle.slug}`} className="group block">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div className="w-full lg:w-3/5 overflow-hidden">
                  <div className="relative aspect-[4/3] w-full transform transition-transform duration-1000 group-hover:scale-[1.03]">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-terracotta)] font-bold mb-6">
                    Featured &middot; {featuredArticle.date}
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)] leading-[1.1] mb-8 group-hover:text-[var(--color-terracotta)] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="font-sans text-lg text-[var(--color-charcoal)]/80 leading-relaxed mb-10 font-light">
                    {featuredArticle.excerpt}
                  </p>
                  <span className="font-sans text-sm uppercase tracking-widest font-medium pb-2 border-b border-[var(--color-charcoal)] inline-flex self-start group-hover:border-[var(--color-terracotta)] transition-colors">
                    Read Story &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-20 border-t border-[var(--color-charcoal)]/10 pt-20">
          {otherArticles.map((article) => (
            <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
              <div className="relative aspect-[3/2] w-full overflow-hidden mb-8">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.05]"
                />
              </div>
              <div className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] font-medium mb-4">
                {article.date}
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] leading-tight mb-5 group-hover:text-[var(--color-terracotta)] transition-colors">
                {article.title}
              </h3>
              <p className="font-sans text-[var(--color-charcoal)]/70 leading-relaxed font-light line-clamp-3">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>

      </div>

      <NewsletterFooter />
    </div>
  );
}
