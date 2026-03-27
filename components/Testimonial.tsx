export default function Testimonial() {
  return (
    <section className="bg-[var(--color-stone)] py-20 md:py-32 border-t border-[var(--color-charcoal)]/10 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mx-auto w-12 h-1 bg-[var(--color-terracotta)] mb-16 opacity-50" />
        
        <blockquote className="space-y-12">
          <p className="font-serif italic text-4xl md:text-5xl lg:text-7xl leading-[1.2] text-[var(--color-charcoal)] tracking-tight">
            &quot;Dynamic in both flavor and craft. A true testament to the terroir of Mindanao.&quot;
          </p>
          <footer className="font-sans">
            <div className="text-sm md:text-base font-bold uppercase tracking-widest text-[var(--color-charcoal)]">
              Gabriel Santos
            </div>
            <div className="text-sm font-medium text-[var(--color-muted)] mt-2 italic">
              Head Roaster, Coffee Magazine
            </div>
          </footer>
        </blockquote>
        
      </div>
    </section>
  );
}
