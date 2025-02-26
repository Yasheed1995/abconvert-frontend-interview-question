import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/data/products";
import Link from "next/link";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <ul className="space-y-6">
          <li>
            <Link
              href="/products"
              className="text-lg hover:text-indigo-300 transition-colors"
            >
              View Products
            </Link>
          </li>
          <li>
            <Link
              href="/collections"
              className="text-lg hover:text-indigo-300 transition-colors"
            >
              View Collections
            </Link>
          </li>
        </ul>
      </aside>

      <main className="flex-1 flex flex-col justify-between py-10 px-12">
        {/* Header */}
        <header className="w-full flex justify-between items-center bg-white shadow-md fixed top-0 left-0 right-0 z-10 p-6">
          <h1 className="text-4xl font-extrabold text-indigo-600">
            Welcome to My E-commerce
          </h1>
          <div className="flex space-x-6">
            {/* Shopping Cart Icon */}
            <Link
              href="/cart"
              className="text-2xl text-gray-800 hover:text-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18l-2 12H5L3 3zm0 0L1 6m18 0l2 3m-3 3h-9m-2 4h7"
                />
              </svg>
            </Link>
            {/* User Account Icon */}
            <Link
              href="/account"
              className="text-2xl text-gray-800 hover:text-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14c2.5 0 4.5-2 4.5-4.5S14.5 5 12 5s-4.5 2-4.5 4.5S9.5 14 12 14zM12 14c-3 0-9 1.5-9 4.5V19h18v-.5c0-3-6-4.5-9-4.5z"
                />
              </svg>
            </Link>
          </div>
        </header>

        <div className="pt-24">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Our Products
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={`/${product.image}`} // Corrected image path
                title={product.name} // Corrected title prop
                price={product.price.toString()} // Corrected price prop
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
