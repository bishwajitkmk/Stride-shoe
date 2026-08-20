import products from "../data/products";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-500">
        <p className="font-semibold text-gray-900">Stride</p>
        <p className="mt-2 max-w-xl">
          Stride is a small demo shoe store. The catalogue currently lists{" "}
          {products.length} shoes across{" "}
          {new Set(products.map((p) => p.category)).size} categories, all shown
          on the shop page.
        </p>
        <p className="mt-4">
          The same catalogue is available as JSON at{" "}
          {/* A plain anchor, so the browser really requests it instead of
              handing the path to the client-side router. */}
          <a
            href="/api/products"
            className="font-medium text-gray-900 underline underline-offset-2"
          >
            /api/products
          </a>
          .
        </p>

        <p className="mt-4">© {new Date().getFullYear()} Stride. Demo site.</p>
      </div>
    </footer>
  );
};

export default Footer;
