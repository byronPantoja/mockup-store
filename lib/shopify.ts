export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<{ status: number; body: T } | never> {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const storefrontToken = process.env.SHOPIFY_STOREFRONT_TOKEN;

  if (!domain || !storefrontToken) {
    console.warn("Shopify environment variables not set. Returning empty data.");
    return { status: 200, body: {} as T };
  }

  const endpoint = `https://${domain}/api/2025-01/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontToken,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      // Cache products for 1 hour for high performance, but allow revalidation
      next: { revalidate: 3600 },
    });

    const body = await result.json();

    if (body.errors) {
      console.error("[shopify] GraphQL error", {
        errorCount: body.errors.length,
        message: body.errors[0]?.message ?? "Unknown GraphQL error",
      });
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (error) {
    console.error("[shopify] Fetch failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    // Return empty data instead of breaking build
    return { status: 500, body: {} as T };
  }
}
// Queries

export async function getAllProducts() {
  const query = `
    query GetAllProducts {
      products(first: 100) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 2) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            collections(first: 5) {
              edges {
                node {
                  title
                  handle
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<any>({ query });
  return response.body?.data?.products?.edges?.map((edge: any) => edge.node) || [];
}

export async function getProductByHandle(handle: string) {
  const query = `
    query GetProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        descriptionHtml
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<any>({ query, variables: { handle } });
  return response.body?.data?.product || null;
}

export async function getCollections() {
  const query = `
    query GetCollections {
      collections(first: 10) {
        edges {
          node {
            id
            title
            handle
            image {
              url
              altText
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<any>({ query });
  return response.body?.data?.collections?.edges?.map((edge: any) => edge.node) || [];
}

export async function getCollectionByHandle(handle: string) {
  const query = `
    query GetCollectionByHandle($handle: String!) {
      collection(handle: $handle) {
        id
        title
        handle
        description
        products(first: 100) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 2) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch<any>({ query, variables: { handle } });
  return response.body?.data?.collection || null;
}
