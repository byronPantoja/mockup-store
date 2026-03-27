"use client";

import { useState } from "react";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../lib/cart-context";
import VariantSelector from "./VariantSelector";

export default function ProductDetail({ product }: { product: any }) {
  const { addItem } = useCart();
  
  const variants = product.variants?.edges?.map((edge: any) => edge.node) || [];
  const images = product.images?.edges?.map((edge: any) => edge.node) || [];
  
  const defaultVariant = variants[0];
  const [selectedVariant, setSelectedVariant] = useState(defaultVariant);
  const [currentImage, setCurrentImage] = useState(images[0]?.url);

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    
    addItem({
      id: selectedVariant.id,
      title: product.title,
      handle: product.handle,
      image: currentImage || "",
      price: parseFloat(selectedVariant.price.amount),
      variantTitle: selectedVariant.title !== "Default Title" ? selectedVariant.title : undefined,
      quantity: 1,
    });
  };

  return (
    <div className="bg-[var(--color-stone)] pt-12 md:pt-24 pb-32 border-b border-[var(--color-charcoal)]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Images Section (Left 55%) */}
          <div className="lg:w-[55%] flex flex-col-reverse md:flex-row gap-6">
            
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 md:flex-shrink-0 snap-x hide-scrollbar">
                {images.map((img: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(img.url)}
                    className={`relative w-24 md:w-full aspect-square border ${
                      currentImage === img.url 
                        ? "border-[var(--color-terracotta)]" 
                        : "border-transparent"
                    } hover:border-[var(--color-charcoal)] transition-colors snap-center flex-shrink-0 bg-white`}
                  >
                    <Image
                      src={img.url}
                      alt={img.altText || `Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="relative w-full aspect-square md:aspect-[4/5] bg-white border border-[var(--color-charcoal)]/5">
              {currentImage ? (
                <Image
                  src={currentImage}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[var(--color-charcoal)]/5">
                  <span className="text-sm uppercase tracking-widest text-[var(--color-muted)]">No image</span>
                </div>
              )}
            </div>
            
          </div>

          {/* Details Section (Right 45%) */}
          <div className="lg:w-[45%] flex flex-col pt-4 md:pt-16">
            
            <Link 
              href="/shop" 
              className="mt-0 lg:mt-0 text-[var(--color-muted)] hover:text-[var(--color-terracotta)] font-sans text-xs uppercase tracking-widest font-medium transition-colors mb-8 md:mb-12 inline-flex"
            >
              &larr; Back to Shop
            </Link>

            <h1 className="font-serif text-[var(--color-charcoal)] text-5xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tight mb-8 lowercase">
              {product.title}
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-[var(--color-muted)] mb-12 tabular-nums">
              ${selectedVariant ? parseFloat(selectedVariant.price.amount).toFixed(2) : "0.00"}
            </p>
            
            <VariantSelector 
              variants={variants} 
              selected={selectedVariant}
              onChange={setSelectedVariant}
            />

            <button
              onClick={handleAddToCart}
              disabled={!selectedVariant?.availableForSale}
              className="w-full bg-[var(--color-charcoal)] text-white hover:bg-[var(--color-terracotta)] disabled:bg-[var(--color-muted)] disabled:cursor-not-allowed transition-colors py-5 uppercase tracking-[0.2em] text-sm font-medium rounded-none mb-16"
            >
              {selectedVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
            </button>

            <div
              // suppressHydrationWarning: DOMPurify requires window (browser only).
              // During SSR the raw HTML is rendered; on the client DOMPurify sanitizes
              // it. React would otherwise warn about the mismatch.
              suppressHydrationWarning
              className="prose prose-[var(--color-charcoal)] max-w-none font-sans font-light leading-relaxed prose-p:text-[var(--color-charcoal)]/80 prose-p:mb-6 mt-8 border-t border-[var(--color-charcoal)]/10 pt-12"
              dangerouslySetInnerHTML={{
                __html:
                  typeof window !== "undefined"
                    ? DOMPurify.sanitize(product.descriptionHtml ?? "")
                    : (product.descriptionHtml ?? ""),
              }}
            />
            
          </div>

        </div>
        
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
