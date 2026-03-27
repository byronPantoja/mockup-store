import ProductCard from "./ProductCard";

type ProductData = {
  id: string;
  title: string;
  handle: string;
  price: string | number;
  image: string;
};

export default function BestsellersRow({
  products,
}: {
  products: ProductData[];
}) {
  if (!products || products.length === 0) return null;

  return (
    <section className="bg-[var(--color-stone)] py-20 md:py-32 w-full overflow-hidden border-t border-[var(--color-charcoal)]/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="inline-block font-sans text-sm md:text-base uppercase tracking-[0.2em] font-medium text-[var(--color-charcoal)] pb-2 border-b border-[var(--color-charcoal)]">
            Bestsellers
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory hide-scrollbar gap-8 md:gap-16">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="flex-none w-[280px] sm:w-[320px] md:w-[400px] snap-center"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
