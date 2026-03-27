import Link from "next/link";
import Image from "next/image";

export default function FeaturedBanner({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group">
      <Image
        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop"
        alt={title}
        fill
        sizes="100vw"
        className="object-cover object-center transition-transform duration-[2000ms] group-hover:scale-110"
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-1000" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-white font-serif text-5xl md:text-8xl lowercase tracking-tight drop-shadow-lg transform transition-transform duration-700 hover:scale-105">
          {title}
        </h2>
        
        <Link 
          href={href}
          className="mt-8 md:mt-12 text-white font-sans text-sm md:text-base uppercase tracking-widest font-medium pb-2 border-b-2 border-white/40 hover:border-white transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
