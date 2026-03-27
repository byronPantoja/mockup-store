"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartIcon from "./CartIcon";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[var(--color-stone)] border-b border-[var(--color-charcoal)]/10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="font-serif text-[var(--color-terracotta)] text-3xl md:text-4xl tracking-tight leading-none hover:opacity-80 transition-opacity"
              >
                That&apos;s G
              </Link>
            </div>

            {/* Navigation and Actions */}
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="/shop"
                  className="text-[var(--color-charcoal)] hover:text-[var(--color-terracotta)] font-medium text-sm uppercase tracking-widest transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="text-[var(--color-charcoal)] hover:text-[var(--color-terracotta)] font-medium text-sm uppercase tracking-widest transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/journal"
                  className="text-[var(--color-charcoal)] hover:text-[var(--color-terracotta)] font-medium text-sm uppercase tracking-widest transition-colors"
                >
                  Journal
                </Link>
              </nav>

              <div className="flex items-center md:border-l md:border-[var(--color-charcoal)]/10 md:pl-8 md:ml-8">
                <CartIcon />
              </div>

              {/* Hamburger menu button — mobile only */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 -m-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-[var(--color-charcoal)]/10 bg-[var(--color-stone)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col space-y-4">
              <Link
                href="/shop"
                onClick={() => setMenuOpen(false)}
                className="text-[var(--color-charcoal)] hover:text-[var(--color-terracotta)] font-medium text-sm uppercase tracking-widest transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-[var(--color-charcoal)] hover:text-[var(--color-terracotta)] font-medium text-sm uppercase tracking-widest transition-colors"
              >
                About
              </Link>
              <Link
                href="/journal"
                onClick={() => setMenuOpen(false)}
                className="text-[var(--color-charcoal)] hover:text-[var(--color-terracotta)] font-medium text-sm uppercase tracking-widest transition-colors"
              >
                Journal
              </Link>
            </div>
          </nav>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
