import { useSearchParams } from "react-router-dom";
import products, { categories, allSizes } from "../data/products";
import ProductCard from "../components/ProductCard";
import usePageTitle from "../usePageTitle";

const sorters = {
  featured: () => 0,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name),
};

const Shop = () => {
  usePageTitle("Shop all shoes — Stride");

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "All";
  const size = searchParams.get("size") ?? "All";
  const sort = searchParams.get("sort") ?? "featured";
  const inStockOnly = searchParams.get("inStock") === "true";

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === "All" || value === "false") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  };

  // Optional fields are skipped so the catalogue only has to carry the basics.
  const searchable = (product) =>
    [
      product.name,
      product.category,
      product.color,
      product.brand,
      product.material,
      product.description,
      ...(product.tags ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

  const visible = products
    .filter((product) => {
      if (query && !searchable(product).includes(query.toLowerCase())) {
        return false;
      }
      if (category !== "All" && product.category !== category) return false;
      if (size !== "All" && !product.sizes.includes(Number(size))) return false;
      if (inStockOnly && !product.available) return false;
      return true;
    })
    .sort(sorters[sort] ?? sorters.featured);

  const selectClass =
    "rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        All shoes
      </h1>
      <p className="mt-2 text-gray-600">
        Stride sells {products.length} shoes in total. Every product in the
        catalogue is listed on this page.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(event) => setParam("q", event.target.value)}
          placeholder="Search shoes…"
          className="min-w-56 flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
          aria-label="Search shoes"
        />

        <select
          value={category}
          onChange={(event) => setParam("category", event.target.value)}
          className={selectClass}
          aria-label="Filter by category"
        >
          <option value="All">All categories</option>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={size}
          onChange={(event) => setParam("size", event.target.value)}
          className={selectClass}
          aria-label="Filter by size"
        >
          <option value="All">All sizes</option>
          {allSizes.map((option) => (
            <option key={option} value={option}>
              Size {option}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(event) => setParam("sort", event.target.value)}
          className={selectClass}
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="name">Name: A–Z</option>
        </select>

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(event) =>
              setParam("inStock", String(event.target.checked))
            }
            className="h-4 w-4"
          />
          In stock only
        </label>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Showing {visible.length} of {products.length} shoes.
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 rounded-lg border border-dashed border-gray-300 p-10 text-center text-gray-500">
          No shoes match those filters.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
