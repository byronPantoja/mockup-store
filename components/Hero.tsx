import Image from "next/image";
import Link from "next/link";

export default function Hero({ imageUrl }: { imageUrl: string }) {
  return (
    <section className="relative w-full pt-10 md:pt-20 pb-20 overflow-hidden bg-[var(--color-stone)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col-reverse md:flex-row relative">
          
          {/* Main Title text overlaid or to the side */}
          <div className="md:w-3/5 relative z-10 pt-10 md:pt-32">
            <h1 className="font-serif font-bold text-7xl md:text-[9rem] leading-[0.85] tracking-tight text-[var(--color-charcoal)] lowercase">
              that&apos;s g
            </h1>
            <div className="mt-8 md:mt-16 max-w-lg">
              <p className="font-sans text-lg md:text-xl text-[var(--color-charcoal)] uppercase tracking-wider font-light">
                specialty coffee &middot; davao, philippines
              </p>
              <div className="mt-6 md:mt-8">
                <Link
                  href="/shop"
                  className="font-serif text-[var(--color-terracotta)] text-2xl italic hover:opacity-80 transition-opacity underline underline-offset-8 decoration-1"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            
            <div className="mt-20 md:mt-32 max-w-xl pr-8">
              <p className="font-serif italic text-2xl md:text-3xl leading-snug text-[var(--color-charcoal)]">
                &quot;Your morning ritual should taste as good as it feels. We roast specialty coffee from Mindanao&apos;s highlands — sourced directly from farming communities, processed with care, delivered to your door.&quot;
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-2/5 md:absolute md:right-0 md:top-0 h-[50vh] md:h-[80vh] w-full z-0 overflow-hidden">
            <div className="relative w-full h-full transform transition-transform duration-700 hover:scale-105">
              <Image
                src={imageUrl || "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1600&auto=format&fit=crop"}
                alt="Coffee Roasting Process"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
