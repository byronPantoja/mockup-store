export default function VariantSelector({
  variants,
  selected,
  onChange,
}: {
  variants: any[];
  selected: any;
  onChange: (variant: any) => void;
}) {
  if (variants.length <= 1) return null;

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onChange(variant)}
            className={`px-4 py-2 border font-sans text-sm font-medium transition-colors ${
              selected.id === variant.id
                ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-stone)]"
                : "border-[var(--color-charcoal)]/20 text-[var(--color-charcoal)] hover:border-[var(--color-charcoal)] bg-transparent"
            } ${!variant.availableForSale ? "opacity-50 cursor-not-allowed hidden" : ""}`}
            disabled={!variant.availableForSale}
          >
            {variant.title}
          </button>
        ))}
      </div>
    </div>
  );
}
