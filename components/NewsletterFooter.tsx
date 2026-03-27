export default function NewsletterFooter() {
  return (
    <footer className="bg-[var(--color-stone)] border-t border-[var(--color-charcoal)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Newsletter */}
          <div className="max-w-md">
            <h2 className="text-2xl font-serif text-[var(--color-charcoal)] mb-4">
              sign up for our newsletter
            </h2>
            <form className="flex mt-6 border-b border-[var(--color-charcoal)]">
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-transparent border-none focus:ring-0 py-3 px-0 text-[var(--color-charcoal)] placeholder:text-[var(--color-muted)]"
              />
              <button
                type="submit"
                className="py-3 px-4 uppercase tracking-widest text-sm font-medium text-[var(--color-terracotta)] hover:text-[var(--color-charcoal)] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:pl-16">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] mb-6">Explore</h3>
              <ul className="space-y-4">
                <li><a href="/shop" className="text-sm hover:text-[var(--color-terracotta)] transition-colors">Shop</a></li>
                <li><a href="/about" className="text-sm hover:text-[var(--color-terracotta)] transition-colors">About</a></li>
                <li><a href="/journal" className="text-sm hover:text-[var(--color-terracotta)] transition-colors">Journal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] mb-6">Help</h3>
              <ul className="space-y-4">
                <li><a href="/shipping" className="text-sm hover:text-[var(--color-terracotta)] transition-colors">Shipping</a></li>
                <li><a href="/about" className="text-sm hover:text-[var(--color-terracotta)] transition-colors">Contact</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--color-terracotta)] transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-[var(--color-charcoal)]/10 flex flex-col md:flex-row justify-between items-center sm:items-start md:items-center">
          <p className="font-serif text-3xl md:text-5xl text-[var(--color-charcoal)] mb-6 md:mb-0">
            That&apos;s G — Coffee Roastery
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} That&apos;s G — Coffee Roastery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
