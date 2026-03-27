import NewsletterFooter from "../../components/NewsletterFooter";

export default function ShippingPage() {
  return (
    <div className="bg-[var(--color-stone)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-24 md:pb-40">
        <h1 className="font-serif text-[var(--color-charcoal)] text-5xl md:text-7xl lowercase tracking-tight mb-12 md:mb-16">
          shipping
        </h1>
        <p className="font-sans text-lg md:text-xl text-[var(--color-charcoal)]/80 leading-relaxed">
          Free shipping on orders over $50. Delivery within 3–5 business days.
        </p>
      </div>
      <NewsletterFooter />
    </div>
  );
}
