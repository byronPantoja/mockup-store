import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
const REST_BASE = `https://${DOMAIN}/admin/api/2025-01`;

async function restFetch(path, method = "GET", body = null) {
  const opts = {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": ADMIN_TOKEN,
    },
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(`${REST_BASE}${path}`, opts);
  if (method === "DELETE") return { ok: res.ok };
  const json = await res.json();
  if (!res.ok) {
    console.error(`REST error (${res.status}):`, JSON.stringify(json, null, 2));
    throw new Error(`${res.status}: ${JSON.stringify(json.errors)}`);
  }
  return json;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ─── CLEANUP ───

async function deleteAllProducts() {
  console.log("\n--- Deleting existing products ---\n");
  const data = await restFetch("/products.json?limit=250");
  for (const p of data.products) {
    await restFetch(`/products/${p.id}.json`, "DELETE");
    console.log(`  ✗ Deleted: ${p.title}`);
    await sleep(300);
  }
}

async function deleteAllCollections() {
  console.log("\n--- Deleting existing collections ---\n");

  const smart = await restFetch("/smart_collections.json?limit=250");
  for (const c of smart.smart_collections) {
    await restFetch(`/smart_collections/${c.id}.json`, "DELETE");
    console.log(`  ✗ Deleted smart: ${c.title}`);
    await sleep(300);
  }

  const custom = await restFetch("/custom_collections.json?limit=250");
  for (const c of custom.custom_collections) {
    if (c.title === "Home page") continue; // keep default
    await restFetch(`/custom_collections/${c.id}.json`, "DELETE");
    console.log(`  ✗ Deleted custom: ${c.title}`);
    await sleep(300);
  }
}

// ─── SEED DATA ───

const IMG = {
  arabica: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1200",
  robusta: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=1200",
  blend: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=1200",
  coldbrew: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1200",
  mug: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=1200",
  tote: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200",
  starter: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?w=1200",
  explorer: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",
};

const PRODUCTS = [
  // ─── Coffee Beans (4) ───
  {
    title: "Mindanao Single Origin - Arabica",
    body_html: "<p>Light-roasted single origin from the highlands of Mindanao. Tasting notes of citrus, caramel, and brown sugar. Grown by smallholder farmers in partnership with Coffee For Peace.</p>",
    product_type: "Coffee Beans",
    tags: "arabica, single-origin, mindanao, light-roast, coffee-beans",
    images: [{ src: IMG.arabica }],
    options: [{ name: "Size" }],
    variants: [
      { option1: "250g", price: "18.00" },
      { option1: "500g", price: "32.00" },
      { option1: "1kg", price: "58.00" },
    ],
  },
  {
    title: "Mindanao Single Origin - Robusta",
    body_html: "<p>Full-bodied robusta with dark chocolate and earthy undertones. Bold enough for espresso, smooth enough for drip. Sourced from tribal communities in Davao.</p>",
    product_type: "Coffee Beans",
    tags: "robusta, single-origin, mindanao, dark-roast, coffee-beans",
    images: [{ src: IMG.robusta }],
    options: [{ name: "Size" }],
    variants: [
      { option1: "250g", price: "14.00" },
      { option1: "500g", price: "24.00" },
      { option1: "1kg", price: "42.00" },
    ],
  },
  {
    title: "Peace Blend",
    body_html: "<p>Our signature blend of arabica and robusta — balanced, approachable, everyday. A cup that brings people together.</p>",
    product_type: "Coffee Beans",
    tags: "blend, signature, medium-roast, coffee-beans",
    images: [{ src: IMG.blend }],
    options: [{ name: "Size" }],
    variants: [
      { option1: "250g", price: "16.00" },
      { option1: "500g", price: "28.00" },
      { option1: "1kg", price: "50.00" },
    ],
  },
  {
    title: "Cold Brew Grind",
    body_html: "<p>Coarsely ground and optimized for 12-24 hour cold extraction. Low acidity, naturally sweet, smooth finish.</p>",
    product_type: "Coffee Beans",
    tags: "cold-brew, ground, coarse-grind, coffee-beans",
    images: [{ src: IMG.coldbrew }],
    options: [{ name: "Size" }],
    variants: [
      { option1: "250g", price: "15.00" },
      { option1: "500g", price: "26.00" },
    ],
  },

  // ─── Merchandise (2) ───
  {
    title: "That's G Ceramic Mug",
    body_html: "<p>Handcrafted 12oz ceramic mug with That's G wordmark. Matte sage green glaze. Microwave and dishwasher safe.</p>",
    product_type: "Merchandise",
    tags: "mug, merch, ceramic, merchandise",
    images: [{ src: IMG.mug }],
    options: [{ name: "Color" }],
    variants: [
      { option1: "Sage Green", price: "22.00" },
      { option1: "Cream White", price: "22.00" },
    ],
  },
  {
    title: "Canvas Tote Bag",
    body_html: "<p>Heavy-duty 12oz canvas tote with screen-printed That's G logo. Perfect for market runs and coffee pickups.</p>",
    product_type: "Merchandise",
    tags: "tote, merch, canvas, merchandise",
    images: [{ src: IMG.tote }],
    options: [{ name: "Color" }],
    variants: [
      { option1: "Natural", price: "18.00" },
      { option1: "Black", price: "18.00" },
    ],
  },

  // ─── Gift Sets (2) ───
  {
    title: "Starter Kit",
    body_html: "<p>Everything you need to start your specialty coffee journey. Includes 250g Peace Blend, ceramic mug, and a brewing guide card.</p>",
    product_type: "Gift Sets",
    tags: "gift, starter, bundle, gift-sets",
    images: [{ src: IMG.starter }],
    variants: [{ option1: "Default Title", price: "45.00" }],
  },
  {
    title: "Explorer Set",
    body_html: "<p>Taste the range — 250g Arabica, 250g Robusta, and 250g Peace Blend. Three bags, three stories, one journey.</p>",
    product_type: "Gift Sets",
    tags: "gift, sampler, bundle, gift-sets",
    images: [{ src: IMG.explorer }],
    variants: [{ option1: "Default Title", price: "55.00" }],
  },
];

const COLLECTIONS = [
  {
    title: "Coffee Beans",
    body_html: "<p>Specialty coffee from the highlands of Mindanao — single origins, blends, and cold brew.</p>",
    image: { src: IMG.arabica },
    rules: [{ column: "tag", relation: "equals", condition: "coffee-beans" }],
    disjunctive: false,
  },
  {
    title: "Merchandise",
    body_html: "<p>Mugs, totes, and goods made with the same care as our coffee.</p>",
    image: { src: IMG.mug },
    rules: [{ column: "tag", relation: "equals", condition: "merchandise" }],
    disjunctive: false,
  },
  {
    title: "Gift Sets",
    body_html: "<p>Curated bundles for the coffee curious and the coffee obsessed.</p>",
    image: { src: IMG.starter },
    rules: [{ column: "tag", relation: "equals", condition: "gift-sets" }],
    disjunctive: false,
  },
];

// ─── SEED ───

async function seedProducts() {
  console.log("\n--- Seeding Products (8) ---\n");
  for (const product of PRODUCTS) {
    try {
      const data = await restFetch("/products.json", "POST", { product });
      console.log(`  ✓ ${data.product.title} (${data.product.handle}) — ${data.product.variants.length} variant(s)`);
      await sleep(600);
    } catch (err) {
      console.error(`  ✗ ${product.title}: ${err.message}`);
    }
  }
}

async function seedCollections() {
  console.log("\n--- Seeding Collections (3) ---\n");
  for (const col of COLLECTIONS) {
    const payload = {
      smart_collection: {
        title: col.title,
        body_html: col.body_html,
        image: col.image,
        rules: col.rules,
        disjunctive: col.disjunctive,
      },
    };
    try {
      const data = await restFetch("/smart_collections.json", "POST", payload);
      console.log(`  ✓ ${data.smart_collection.title} (${data.smart_collection.handle})`);
      await sleep(600);
    } catch (err) {
      console.error(`  ✗ ${col.title}: ${err.message}`);
    }
  }
}

async function verify() {
  console.log("\n--- Verifying ---\n");
  const products = await restFetch("/products.json?limit=250");
  console.log(`  Products: ${products.products.length}`);
  products.products.forEach((p) =>
    console.log(`    • ${p.title} — $${p.variants[0].price} — ${p.variants.length} variant(s)`)
  );

  const collections = await restFetch("/smart_collections.json?limit=250");
  console.log(`  Collections: ${collections.smart_collections.length}`);
  collections.smart_collections.forEach((c) =>
    console.log(`    • ${c.title} (${c.handle})`)
  );
}

async function main() {
  console.log(`Store: ${DOMAIN}\n`);

  await deleteAllProducts();
  await deleteAllCollections();
  await seedProducts();
  await seedCollections();
  await verify();

  console.log("\n✓ Done!\n");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
