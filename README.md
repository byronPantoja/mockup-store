# That's G — Headless Shopify Storefront

**Live:** [mockup-store-thatsg.vercel.app](https://mockup-store-thatsg.vercel.app)

A headless e-commerce storefront for a specialty coffee brand — built with NextJS 14, Tailwind CSS, and the Shopify Storefront API. This is one of three portfolio projects demonstrating my ability to ship production-quality web applications.

---

## What this project demonstrates

| Skill | Where to look |
|-------|---------------|
| Shopify Storefront API integration | All product data fetched via GraphQL — no hardcoded products |
| Headless e-commerce architecture | NextJS frontend decoupled from Shopify backend |
| Dynamic routing | Product detail pages via `/products/[handle]` |
| Collection filtering | Shop page filters by Shopify collection via query params |
| Cart state management | React Context + useReducer for add/remove/update cart |
| Editorial design | Symbol Audio-inspired layout with asymmetric grids, contrast sections |
| Responsive design | Full mobile layout with adapted grids and navigation |

---

## Tech stack

- **Framework:** NextJS 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Data:** Shopify Storefront API (GraphQL)
- **Cart:** React Context with useReducer
- **Deployment:** Vercel
- **No component libraries** — everything built from scratch

---

## How it works

The storefront connects to a Shopify development store via the Storefront API. All product data — titles, descriptions, prices, variants, images, and collections — is fetched at request time using GraphQL queries. The cart is managed entirely on the client side with React Context.

This is a real integration with live data, not a mockup with hardcoded products. Adding or updating products in the Shopify admin immediately reflects on the storefront.

---

## Pages

- **Home** — Editorial scroll: hero, collections grid, shop-by-line section, featured banner, bestsellers row, press mentions, testimonial, sustainability story, newsletter
- **/shop** — All products with collection filter (Coffee Beans, Merchandise, Gift Sets)
- **/products/[handle]** — Product detail with variant selector, Add to Cart, and full description
- **/about** — Brand story
- **/journal** — Coming soon placeholder
- **/shipping** — Shipping info

---

## How I built this

1. **Shopify setup** — Created a development store, seeded 8 products across 3 collections via the Admin API, configured Storefront API access tokens.

2. **Design direction** — Studied symbolaudio.com's editorial e-commerce aesthetic and adapted it for a coffee brand: warm cream palette, bold serif typography, asymmetric layouts, full-bleed photography.

3. **AI-assisted workflow** — Used Claude to scaffold components, write GraphQL queries, debug API integration, and generate copy. AI handles boilerplate; I focus on architecture and design decisions.

4. **Iterative QA** — Full audit of every link, interaction state, responsive breakpoint, and cart flow before calling it done.

---

## Key technical details

### Shopify Storefront API client (`lib/shopify.ts`)
A lightweight GraphQL client using native `fetch` — no Shopify SDK dependency. Queries for products, collections, and single products by handle.

### Cart context (`lib/cart-context.tsx`)
React Context with `useReducer` managing: items array, addItem, removeItem, updateQuantity. Derived values: cartTotal, itemCount. Persists across client-side navigation.

### Variant selector
Renders variant options (size, color) as bordered boxes. Selecting a variant updates the displayed price and ensures the correct variant ID is sent with Add to Cart.

---

## Running locally

```bash
git clone https://github.com/YOUR_USERNAME/mockup-store.git
cd mockup-store
cp .env.example .env.local
# Add your Shopify credentials to .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Required environment variables
```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token
```

---

## Part of a larger portfolio

This is **Project 2 of 3** in my portfolio at [byronpantoja.com](https://byronpantoja.com):

1. **Serenity Studio** — Service business landing page with booking UI
2. **That's G** (this repo) — Headless Shopify storefront with live API data
3. **Business Dashboard** — Analytics dashboard with charts, sortable tables, sidebar nav

---

## About me

I'm Byron Pantoja — a web developer based in Davao, Philippines. I turn complex technical things into tools non-technical people actually use.

**Available for remote work.** → [byronpantoja@gmail.com](mailto:byronpantoja@gmail.com) · [LinkedIn](https://www.linkedin.com/in/byronpantoja)
