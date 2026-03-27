import Hero from "../components/Hero";
import CollectionGrid from "../components/CollectionGrid";
import ShopByLine from "../components/ShopByLine";
import FeaturedBanner from "../components/FeaturedBanner";
import BestsellersRow from "../components/BestsellersRow";
import PressRow from "../components/PressRow";
import Testimonial from "../components/Testimonial";
import StorySection from "../components/StorySection";
import NewsletterFooter from "../components/NewsletterFooter";
import { getCollections, getAllProducts } from "../lib/shopify";

export const revalidate = 3600;

export default async function Home() {
  const collectionsPromise = getCollections();
  const productsPromise = getAllProducts();
  
  const [shopifyCollections, shopifyProducts] = await Promise.all([
    collectionsPromise,
    productsPromise,
  ]);

  // Transform Collection Data — exclude Shopify's default "frontpage" collection
  const collections = shopifyCollections
    .filter((col: any) => col.handle !== "frontpage")
    .map((col: any) => ({
      title: col.title,
      handle: col.handle,
      image: col.image?.url || "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop",
    }))
    .slice(0, 3);

  // Transform Bestseller Data
  const bestsellers = shopifyProducts.slice(0, 6).map((prod: any) => ({
    id: prod.id,
    title: prod.title,
    handle: prod.handle,
    price: prod.priceRange.minVariantPrice.amount,
    image: prod.images.edges[0]?.node?.url || "",
  }));

  // Hero Image
  const heroImage = shopifyProducts[0]?.images.edges[0]?.node?.url || "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="bg-[var(--color-stone)]">
      <Hero imageUrl={heroImage} />
      <CollectionGrid collections={collections} />
      <ShopByLine />
      <FeaturedBanner
        title="The Mindanao Collection"
        href="/shop?collection=coffee-beans"
      />
      <BestsellersRow products={bestsellers} />
      <PressRow />
      <Testimonial />
      <StorySection />
      <NewsletterFooter />
    </div>
  );
}
