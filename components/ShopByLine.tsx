import Link from "next/link";
import Image from "next/image";

export default function ShopByLine() {
  return (
    <section className="bg-[var(--color-oxblood)] text-[var(--color-stone)] py-20 md:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-16">

          <div className="w-full md:w-1/2 space-y-10 relative z-10">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-stone)]/70">
              Shop by Line
            </h2>
            
            <div className="font-serif text-5xl lg:text-[5.5rem] leading-[1.1] tracking-tight">
              <span>beans</span>
              <span className="mx-4 text-[var(--color-stone)]/30">&middot;</span>
              <span>merch</span>
              <span className="mx-4 text-[var(--color-stone)]/30">&middot;</span>
              <span>gifts</span>
            </div>
            
            <p className="font-sans text-lg md:text-xl font-light text-[var(--color-stone)]/90 leading-relaxed">
              We separate our roasts into distinct lines to help you identify the perfect cup. From everyday staples to rare microlots, every bean tells the story of its origin.
            </p>
            
            <div className="pt-4">
              <Link 
                href="/shop" 
                className="font-sans text-sm uppercase tracking-widest font-medium hover:text-[var(--color-terracotta)] transition-colors inline-block pb-1 border-b border-[var(--color-stone)] hover:border-[var(--color-terracotta)]"
              >
                View all products &rarr;
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="relative h-[400px] md:h-[600px] w-full origin-left md:scale-110 lg:scale-125 md:translate-x-12">
              <Image
                src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1400&auto=format&fit=crop"
                alt="Coffee Beans Preparation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
