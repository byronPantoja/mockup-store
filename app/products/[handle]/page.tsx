import { getProductByHandle } from "../../../lib/shopify";
import ProductDetail from "../../../components/ProductDetail";
import NewsletterFooter from "../../../components/NewsletterFooter";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const p = await params;
  const product = await getProductByHandle(p.handle);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail product={product} />
      <NewsletterFooter />
    </>
  );
}
