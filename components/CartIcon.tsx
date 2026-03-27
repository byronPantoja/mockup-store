"use client";

import { useCart } from "../lib/cart-context";

export default function CartIcon() {
  const { itemCount, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="relative p-2 -m-2 group"
      aria-label="Open cart"
    >
      <svg
        className="w-5 h-5 group-hover:text-[var(--color-terracotta)] transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="1.5"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-[var(--color-terracotta)] rounded-full">
          {itemCount}
        </span>
      )}
    </button>
  );
}
