"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryFilter({
  collections,
  activeCollection,
}: {
  collections: { title: string; handle: string }[];
  activeCollection?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-4 sm:gap-8 font-sans mt-8 md:mt-0">
      <Link
        href={pathname}
        className={`text-sm md:text-base font-medium uppercase tracking-widest transition-colors hover:text-[var(--color-terracotta)] pb-1 border-b-2 ${
          !activeCollection
            ? "border-[var(--color-charcoal)] text-[var(--color-charcoal)]"
            : "border-transparent text-[var(--color-muted)]"
        }`}
      >
        All
      </Link>
      
      {collections.map((col) => {
        const isActive = activeCollection === col.handle;
        return (
          <Link
            key={col.handle}
            href={`${pathname}?collection=${col.handle}`}
            className={`text-sm md:text-base font-medium uppercase tracking-widest transition-colors hover:text-[var(--color-terracotta)] pb-1 border-b-2 ${
              isActive
                ? "border-[var(--color-charcoal)] text-[var(--color-charcoal)]"
                : "border-transparent text-[var(--color-muted)]"
            }`}
          >
            {col.title}
          </Link>
        );
      })}
    </div>
  );
}
