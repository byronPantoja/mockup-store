import { getAllProducts, getCollections } from "../../lib/shopify";
import ProductCard from "../../components/ProductCard";
import NewsletterFooter from "../../components/NewsletterFooter";
import CategoryFilter from "../../components/CategoryFilter";

export const revalidate = 3600;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ collection?: string }>;
}) {
  const params = await searchParams;
  const selectedCollection = params.collection;

  const [productsData, collectionsData] = await Promise.all([
    getAllProducts(),
    getCollections(),
  ]);

  let displayProducts = productsData;
  if (selectedCollection) {
    displayProducts = productsData.filter((prod: any) =>
      prod.collections.edges.some((col: any) => col.node.handle === selectedCollection)
    );
  }

  // Transform Bestseller Data to ProductCard expected format
  const mappedProducts = displayProducts.map((prod: any) => ({
    id: prod.id,
    title: prod.title,
    handle: prod.handle,
    price: prod.priceRange.minVariantPrice.amount,
    image: prod.images.edges[0]?.node?.url || "",
  }));

  const filters = collectionsData
    .filter((c: any) => c.handle !== "frontpage")
    .map((c: any) => ({
      title: c.title,
      handle: c.handle,
    }));

  return (
    <div className="bg-[var(--color-stone)] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Header and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[var(--color-charcoal)] pb-12">
          <h1 className="font-serif text-[var(--color-charcoal)] text-5xl md:text-7xl lg:text-[7rem] lowercase tracking-tighter leading-none mb-8 md:mb-0">
            {selectedCollection ? selectedCollection.replace(/-/g, " ") : "all products"}
          </h1>
          
          <CategoryFilter 
            collections={filters} 
            activeCollection={selectedCollection} 
          />
        </div>

        {/* Product Grid */}
        {mappedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
            {mappedProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center text-[var(--color-muted)] font-serif italic text-2xl">
            No products found matching the criteria.
          </div>
        )}

      </div>

      <NewsletterFooter />
    </div>
  );
}
