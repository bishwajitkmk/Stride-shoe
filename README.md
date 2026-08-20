# Stride

A frontend-only demo shoe store, built to test a website chatbot.
React + Vite + Tailwind CSS. No backend, no database, no API.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Routes

| Route            | Contents                                                        |
| ---------------- | --------------------------------------------------------------- |
| `/`              | Hero, category list, featured shoes                              |
| `/shop`          | All 12 products, with search / category / size filters and sort   |
| `/shop/:slug`    | Full product detail (price, color, sizes, stock, material, tags) |

Shop filters are stored in the URL, so links like `/shop?category=Running`
and `/shop?size=42&inStock=true` are shareable.

## Product data

The whole catalogue lives in [`src/data/products.js`](src/data/products.js)
and is rendered straight into the pages — nothing is fetched at runtime.
To add a shoe, append an object with a unique `id` and `slug`, then generate
a matching image in `public/products/`.

## Deploy (Vercel)

Import the repo; Vercel detects Vite. Build `npm run build`, output `dist`.
`vercel.json` rewrites all paths to `index.html` so `/shop/stride-runner`
works on a direct page load.
