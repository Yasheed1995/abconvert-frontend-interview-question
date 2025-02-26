import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/data/products";
import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-12">
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-white shadow-md fixed top-0 left-0 right-0 z-10 p-6">
        <Link href="/" className="text-4xl font-extrabold text-indigo-600">
          Welcome to My E-commerce
        </Link>
        <div className="flex space-x-6">
          {/* Shopping Cart Icon */}
          <Link
            href="/cart"
            className="text-2xl text-gray-800 hover:text-indigo-600"
          >
            <FiShoppingCart className="w-6 h-6" />
          </Link>
          {/* User Account Icon */}
          <Link
            href="/account"
            className="text-2xl text-gray-800 hover:text-indigo-600"
          >
            <FiUser className="w-6 h-6" />
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
              imageSrc={product.image}
              title={product.name}
              price={product.price.toString()}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
