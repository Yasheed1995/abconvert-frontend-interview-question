import Link from "next/link";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-12">
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-white shadow-md fixed top-0 left-0 right-0 z-10 p-6">
        <Link href="/" className="text-4xl font-extrabold text-indigo-600">
          My E-commerce
        </Link>
        <div className="flex space-x-6 items-center">
          <div className="flex gap-6">
            <Link
              href="/products"
              className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700"
            >
              View Products
            </Link>
            <Link
              href="/collections"
              className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700"
            >
              View Collections
            </Link>
          </div>
          {/* Shopping Cart Icon */}
          <Link
            href="/cart"
            className="text-2xl text-gray-800 hover:text-indigo-600"
          >
            <ShoppingCartIcon className="w-6 h-6" />
          </Link>
          {/* User Account Icon */}
          <Link
            href="/account"
            className="text-2xl text-gray-800 hover:text-indigo-600"
          >
            <UserIcon className="w-6 h-6" />
          </Link>
        </div>
      </header>

      {/* Your main page content goes here */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-6 pt-24">
        <h1 className="text-5xl font-extrabold text-blue-600 text-center">
          Welcome to Our Store
        </h1>
        <p className="text-center text-xl text-gray-700">
          Discover the best products for your needs.
        </p>
      </div>
    </main>
  );
};

export default HomePage;
