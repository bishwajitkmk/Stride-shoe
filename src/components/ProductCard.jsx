import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md"
    >
      <div className="aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={`${product.name} — ${product.color} ${product.category} shoe`}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900">{product.name}</h3>
          <span className="shrink-0 font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          {product.category} · {product.color}
        </p>

        <p className="text-sm text-gray-500">
          Sizes: {product.sizes.join(", ")}
        </p>

        <p className="line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <span
          className={`mt-auto inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-medium ${
            product.available
              ? "bg-green-100 text-green-800"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {product.available ? "In stock" : "Out of stock"}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
