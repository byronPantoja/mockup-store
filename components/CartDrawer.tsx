"use client";

import { useCart } from "../lib/cart-context";
import Image from "next/image";

export default function CartDrawer() {
  const { state, closeCart, updateQuantity, removeItem, cartTotal } = useCart();

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/60 transition-opacity" 
        onClick={closeCart}
      />
      <div className="absolute inset-y-0 right-0 flex max-w-full sm:pl-10">
        <div className="w-screen max-w-md pointer-events-auto transform transition-transform bg-[var(--color-stone)] border-l border-[var(--color-muted)]/20 shadow-2xl flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-[var(--color-muted)]/20">
            <h2 className="text-3xl font-serif text-[var(--color-charcoal)] tracking-tight">Your Cart</h2>
            <button
              onClick={closeCart}
              className="text-[var(--color-muted)] hover:text-[var(--color-terracotta)] transition-colors p-2 -m-2"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 px-6 py-6 overflow-y-auto">
            {state.items.length === 0 ? (
              <p className="text-[var(--color-muted)] text-center py-10">Your cart is currently empty.</p>
            ) : (
              <ul className="space-y-8">
                {state.items.map((item) => (
                  <li key={item.id} className="flex">
                    <div className="w-24 h-24 relative flex-shrink-0 border border-[var(--color-muted)]/20 bg-white">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex justify-between text-base font-medium text-[var(--color-charcoal)]">
                          <h3 className="uppercase tracking-wide text-sm">{item.title}</h3>
                          <p className="ml-4 tabular-nums">${item.price.toFixed(2)}</p>
                        </div>
                        {item.variantTitle && item.variantTitle !== "Default Title" && (
                          <p className="mt-1 text-sm text-[var(--color-muted)]">{item.variantTitle}</p>
                        )}
                      </div>
                      <div className="flex items-end justify-between text-sm mt-4">
                        <div className="flex items-center border border-[var(--color-charcoal)]/20">
                          <button 
                            className="px-3 py-1 hover:bg-[var(--color-charcoal)] hover:text-white transition-colors"
                            onClick={() => {
                              if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
                              else removeItem(item.id);
                            }}
                          >
                            -
                          </button>
                          <span className="px-3 border-x border-[var(--color-charcoal)]/20 tabular-nums">
                            {item.quantity}
                          </span>
                          <button 
                            className="px-3 py-1 hover:bg-[var(--color-charcoal)] hover:text-white transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          className="font-medium text-[var(--color-muted)] hover:text-[var(--color-terracotta)] underline underline-offset-4 decoration-1"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="px-6 py-6 border-t border-[var(--color-muted)]/20 bg-[var(--color-stone)]">
              <div className="flex justify-between text-base font-medium text-[var(--color-charcoal)] mb-4">
                <p>Subtotal</p>
                <p className="tabular-nums">${cartTotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-[var(--color-muted)] mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => alert("This is a portfolio mockup — checkout is disabled.")}
                  className="w-full bg-[var(--color-charcoal)] text-white hover:bg-[var(--color-terracotta)] transition-colors py-4 uppercase tracking-widest text-sm font-medium"
                >
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full bg-transparent text-[var(--color-charcoal)] border border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-stone)] transition-colors py-4 uppercase tracking-widest text-sm font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
