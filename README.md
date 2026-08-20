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

## JSON API

The catalogue is also published as static JSON, generated from
`src/data/products.js` at build time by [`scripts/generate-api.mjs`](scripts/generate-api.mjs):

| Endpoint              | Returns                                          |
| --------------------- | ------------------------------------------------ |
| `/api`                | Index of the endpoints below                      |
| `/api/products`       | All products, plus the category and size lists    |
| `/api/products/:slug` | One product, e.g. `/api/products/stride-runner`   |
| `/api/categories`     | Categories with product counts and slugs          |

Every endpoint also answers on its `.json` path (`/api/products.json`), sends
`Access-Control-Allow-Origin: *`, and is a plain file on disk — no server
runtime. Regenerate after editing the catalogue:

```bash
npm run generate:api    # also runs automatically before dev and build
```

## Deploy (Vercel)

Import the repo; Vercel detects Vite. Build `npm run build`, output `dist`.
`vercel.json` maps the extensionless API routes to their JSON files and
rewrites everything else to `index.html`, so both `/shop/stride-runner` and
`/api/products` work on a direct page load.
