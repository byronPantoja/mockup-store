import Link from "next/link";
import Image from "next/image";

export default function StorySection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1510425463958-dcced466dcd3?q=80&w=1400&auto=format&fit=crop", alt: "Coffee Cherries" },
    { src: "https://images.unsplash.com/photo-1542171120-1e563148fecf?q=80&w=1400&auto=format&fit=crop", alt: "Coffee Farmer" },
    { src: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1400&auto=format&fit=crop", alt: "Roasting Bean" },
  ];

  return (
    <section className="bg-[var(--color-richblue)] text-white pt-24 pb-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          {/* Main Title */}
          <div className="md:w-1/2">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-none tracking-tight">
              coffee for the future
            </h2>
          </div>
          
          {/* Text Content */}
          <div className="md:w-1/2 md:pl-16 flex flex-col justify-end h-full pt-8 md:pt-4">
            <p className="font-sans text-lg md:text-xl font-light text-white/90 mb-10 leading-relaxed">
              We focus on building peace in Mindanao through agriculture. By partnering directly with indigenous farming communities, introducing modern sustainable practices, and returning a genuine premium to the origin, we secure better futures—and better coffee.
            </p>
            <div>
              <Link 
                href="#"
                className="font-sans text-sm md:text-base uppercase tracking-[0.2em] font-medium pb-2 border-b border-white hover:text-[var(--color-stone)] hover:border-[var(--color-stone)] transition-colors"
              >
                Learn About Our Impact &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Small Image Grid along the bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/20">
          {images.map((image, idx) => (
            <div key={idx} className="relative aspect-square w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
