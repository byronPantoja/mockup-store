import Image from "next/image";
import Link from "next/link";

export default function Hero({ imageUrl }: { imageUrl: string }) {
  return (
    <section className="relative w-full bg-[var(--color-stone)] pt-6 md:pt-10 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row: small text left, image right */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          {/* Left column: descriptor + CTA */}
          <div className="md:w-[45%] pt-2 md:pt-6 flex flex-col gap-6">
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--color-muted)] font-medium">
              specialty coffee<br />
              davao, philippines
            </p>
            <p className="font-sans text-sm md:text-base text-[var(--color-charcoal)]/70 max-w-sm leading-relaxed">
              Your morning ritual should taste as good as it feels. We roast specialty coffee from Mindanao&apos;s highlands — sourced directly from farming communities, processed with care, delivered to your door.
            </p>
            <div>
              <Link
                href="/shop"
                className="font-serif text-[var(--color-terracotta)] text-base md:text-lg italic hover:opacity-80 transition-opacity underline underline-offset-8 decoration-1"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Right column: product image */}
          <div className="md:w-[55%] relative h-[350px] md:h-[480px] overflow-hidden">
            <Image
              src={imageUrl || "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1600&auto=format&fit=crop"}
              alt="Coffee Roasting Process"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>

        {/* Massive brand name — retro editorial style */}
        <h1 className="font-serif font-bold text-[clamp(3.5rem,15vw,16rem)] leading-[0.88] tracking-tight text-[var(--color-terracotta)] uppercase mt-6 md:mt-10">
          THAT&apos;S G
        </h1>

        {/* Bottom descriptor — like Symbol's mission text */}
        <div className="mt-8 md:mt-12 max-w-2xl">
          <p className="font-serif italic text-xl md:text-2xl leading-snug text-[var(--color-charcoal)]">
            Your coffee should look as good as it tastes.{" "}
            <Link href="/about" className="underline decoration-1 underline-offset-4 hover:text-[var(--color-terracotta)] transition-colors">Our vision</Link>{" "}
            is to bring renewed quality and soul to specialty roasting, creating products that honor the origin and the craft behind every cup.
          </p>
          <Link
            href="/about"
            className="mt-4 font-sans text-sm text-[var(--color-muted)] hover:text-[var(--color-terracotta)] transition-colors inline-block"
          >
            Learn more
          </Link>
        </div>

      </div>
    </section>
  );
}
