export default function PressRow() {
  const publications = [
    "Sprudge",
    "Fresh Cup Magazine",
    "Barista Magazine",
    "Perfect Daily Grind",
  ];

  return (
    <section className="bg-[var(--color-stone)] border-t border-[var(--color-charcoal)]/10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          
          {/* Label */}
          <div className="md:w-1/4 mb-10 md:mb-0">
            <h2 className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-muted)]">
              Press
            </h2>
          </div>

          {/* Publications */}
          <div className="md:w-3/4 w-full flex flex-wrap items-center gap-x-12 lg:gap-x-20 gap-y-10 text-[var(--color-charcoal)]">
            {publications.map((pub, idx) => (
              <span 
                key={idx} 
                className="font-serif text-xl md:text-3xl italic font-medium opacity-80 hover:opacity-100 transition-opacity cursor-default"
              >
                {pub}
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
