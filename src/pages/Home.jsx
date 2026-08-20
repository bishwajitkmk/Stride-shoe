import { Link } from "react-router-dom";
import products, { categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import usePageTitle from "../usePageTitle";
import heroImage from "../assets/hero.png";

const Home = () => {
  usePageTitle("Stride — Shoes for running, training and everyday wear");

  const featured = products.filter((p) => p.available).slice(0, 4);
  const cheapest = products.reduce((a, b) => (a.price <= b.price ? a : b));

  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Shoes that keep up with you
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stride sells {products.length} shoes across{" "}
            {categories.length} categories — running, casual, training, hiking
            and more. Prices start at ${cheapest.price.toFixed(2)} with the{" "}
            {cheapest.name}.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/shop"
              className="rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
            >
              Browse all shoes
            </Link>
            <Link
              to="/shop?category=Running"
              className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              Shop running
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="A Stride sneaker"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/shop?category=${encodeURIComponent(category)}`}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              {category} (
              {products.filter((p) => p.category === category).length})
            </Link>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured shoes</h2>
          <Link
            to="/shop"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            See all {products.length} →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
