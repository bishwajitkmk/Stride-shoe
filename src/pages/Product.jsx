import { Link, useParams } from "react-router-dom";
import products, { getProductBySlug } from "../data/products";
import ProductCard from "../components/ProductCard";
import usePageTitle from "../usePageTitle";

// Renders nothing when a product doesn't carry the field.
const Detail = ({ label, value }) =>
  value === undefined || value === null || value === "" ? null : (
    <div className="flex justify-between gap-4 border-b border-gray-100 py-2">
      <dt className="text-gray-500">{label}</dt>
      <dd className="text-right font-medium text-gray-900">{value}</dd>
    </div>
  );

const Product = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  usePageTitle(product ? `${product.name} — Stride` : "Product not found — Stride");

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="mt-2 text-gray-600">
          We don't have a shoe with that name.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="text-sm text-gray-500">
        <Link to="/" className="hover:text-gray-900">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-gray-900">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
          <img
            src={product.image}
            alt={`${product.name} — ${product.color} ${product.category} shoe`}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">
            {product.category}
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700">
                  {product.discount}% off
                </span>
              </>
            )}
          </div>

          <span
            className={`mt-4 inline-flex rounded-full px-3 py-1 text-sm font-medium ${
              product.available
                ? "bg-green-100 text-green-800"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {product.available
              ? product.stock === undefined
                ? "In stock"
                : `In stock — ${product.stock} left`
              : "Out of stock"}
          </span>

          <p className="mt-6 text-gray-700">{product.description}</p>

          <div className="mt-6">
            <h2 className="text-sm font-semibold text-gray-900">
              Available sizes
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <dl className="mt-8 text-sm">
            <Detail label="Category" value={product.category} />
            <Detail label="Color" value={product.color} />
            <Detail label="Brand" value={product.brand} />
            <Detail label="Material" value={product.material} />
            <Detail label="Gender" value={product.gender} />
            <Detail label="Sizes" value={product.sizes.join(", ")} />
            <Detail
              label="Availability"
              value={product.available ? "Available" : "Sold out"}
            />
            <Detail
              label="Rating"
              value={product.rating && `${product.rating} / 5`}
            />
            <Detail label="Tags" value={product.tags?.join(", ")} />
          </dl>

          <button
            type="button"
            disabled={!product.available}
            className="mt-8 w-full rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {product.available ? "Add to cart" : "Sold out"}
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">
            More {product.category.toLowerCase()} shoes
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Product;
