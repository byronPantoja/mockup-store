import Link from "next/link";
import Image from "next/image";

type CollectionData = {
  title: string;
  handle: string;
  image: string;
};

export default function CollectionGrid({
  collections,
}: {
  collections: CollectionData[];
}) {
  const primaryCollection = collections[0];
  const secondaryCollection = collections[1];
  const tertiaryCollection = collections[2];

  return (
    <section className="bg-[var(--color-stone)] py-16 md:py-32 border-t border-[var(--color-charcoal)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-[var(--color-charcoal)] text-5xl md:text-7xl lowercase mb-12 md:mb-20 tracking-tight">
          shop collections
        </h2>

        <div className="flex flex-col space-y-8 md:space-y-12">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 h-auto md:h-[600px]">
            {primaryCollection && (
              <Link
                href={`/shop?collection=${primaryCollection.handle}`}
                className="group relative md:w-[60%] h-[400px] md:h-full overflow-hidden block"
              >
                <Image
                  src={primaryCollection.image}
                  alt={primaryCollection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <h3 className="absolute bottom-8 left-8 text-white font-serif text-4xl md:text-5xl tracking-tight z-10 transition-transform group-hover:-translate-y-2">
                  {primaryCollection.title}
                </h3>
              </Link>
            )}

            {secondaryCollection && (
              <Link
                href={`/shop?collection=${secondaryCollection.handle}`}
                className="group relative md:w-[40%] h-[400px] md:h-full overflow-hidden block"
              >
                <Image
                  src={secondaryCollection.image}
                  alt={secondaryCollection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <h3 className="absolute bottom-8 left-8 text-white font-serif text-3xl md:text-4xl tracking-tight z-20 transition-transform group-hover:-translate-y-2">
                  {secondaryCollection.title}
                </h3>
              </Link>
            )}
          </div>

          {/* Row 2 - Shop All or Tertiary Collection */}
          {tertiaryCollection ? (
            <Link
              href={`/shop?collection=${tertiaryCollection.handle}`}
              className="group relative w-full h-[300px] md:h-[400px] overflow-hidden block"
            >
              <Image
                src={tertiaryCollection.image}
                alt={tertiaryCollection.title}
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/30 group-hover:bg-[var(--color-charcoal)]/50 transition-colors" />
              <h3 className="absolute inset-0 flex items-center justify-center text-white font-serif text-5xl md:text-6xl tracking-tight z-10 transition-transform group-hover:scale-105">
                {tertiaryCollection.title}
              </h3>
            </Link>
          ) : (
            <Link
              href="/shop"
              className="group relative w-full h-[300px] md:h-[400px] overflow-hidden block"
            >
              <Image
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop"
                alt="Shop All Collections"
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <h3 className="absolute inset-0 flex items-center justify-center text-white font-serif text-5xl md:text-6xl tracking-tight z-10 transition-transform group-hover:scale-105 lowercase">
                shop all
              </h3>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
