import Link from "next/link";
import Image from "next/image";

export default function ProductCard({
  product,
}: {
  product: {
    title: string;
    handle: string;
    price: string | number;
    image: string;
  };
}) {
  return (
    <Link href={`/products/${product.handle}`} className="group block w-full max-w-sm">
      <div className="relative aspect-square w-full overflow-hidden bg-[var(--color-stone)] border border-[var(--color-charcoal)]/5">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--color-charcoal)]/5">
            <span className="text-sm uppercase tracking-widest text-[var(--color-muted)]">No Image</span>
          </div>
        )}
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>

      <div className="mt-6 flex flex-col items-center text-center space-y-2">
        <h3 className="text-base md:text-lg font-sans font-medium text-[var(--color-charcoal)]">
          {product.title}
        </h3>
        <p className="text-sm md:text-base text-[var(--color-muted)] font-sans lowercase tracking-wide">
          ${Number(product.price).toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
