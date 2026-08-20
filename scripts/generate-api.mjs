// Generates the static JSON API under public/api/ from the product catalogue.
// Runs automatically before `npm run build` (see the "prebuild" script), so the
// API can never drift from src/data/products.js.

import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import products, { categories, allSizes } from "../src/data/products.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = resolve(root, "public/api");

const write = (relativePath, data) => {
  const target = resolve(apiDir, relativePath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`);
};

rmSync(apiDir, { recursive: true, force: true });

// /api/products — the whole catalogue.
write("products.json", {
  count: products.length,
  categories,
  sizes: allSizes,
  products,
});

// /api/products/:slug — one shoe each.
for (const product of products) {
  write(`products/${product.slug}.json`, product);
}

// /api/categories — categories with their products.
write("categories.json", {
  count: categories.length,
  categories: categories.map((category) => {
    const inCategory = products.filter((p) => p.category === category);
    return {
      name: category,
      count: inCategory.length,
      slugs: inCategory.map((p) => p.slug),
    };
  }),
});

// /api — what the other endpoints are.
write("index.json", {
  name: "Stride product API",
  description:
    "Static JSON for the Stride demo shoe store. Generated at build time from the site's product catalogue.",
  endpoints: {
    "/api/products": "Every product, plus the category and size lists",
    "/api/products/:slug": "A single product, e.g. /api/products/stride-runner",
    "/api/categories": "Categories with product counts and slugs",
  },
  count: products.length,
});

console.log(
  `Generated public/api: ${products.length} products, ${categories.length} categories`,
);
