import NewsletterFooter from "../../components/NewsletterFooter";

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-stone)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-24 md:pb-40">
        <h1 className="font-serif text-[var(--color-charcoal)] text-5xl md:text-7xl lowercase tracking-tight mb-12 md:mb-16">
          about that&apos;s g
        </h1>
        <div className="font-sans text-lg md:text-xl text-[var(--color-charcoal)]/80 leading-relaxed space-y-6">
          <p>
            That&apos;s G — Coffee Roastery is a specialty coffee brand based in Davao,
            Philippines. We source directly from farming communities in the highlands of
            Mindanao, roast with precision, and deliver coffee that honors both origin and
            craft.
          </p>
          <p className="text-base text-[var(--color-muted)] border-t border-[var(--color-charcoal)]/10 pt-8 mt-8">
            This is a portfolio mockup built by Byron Pantoja to demonstrate NextJS +
            Shopify Storefront API integration.
          </p>
        </div>
      </div>
      <NewsletterFooter />
    </div>
  );
}
