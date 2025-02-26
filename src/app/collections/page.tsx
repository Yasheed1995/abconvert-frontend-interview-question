import { getProducts } from "@/data/products";
import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const CollectionsPage = async () => {
  const products = await getProducts();
  // Group products by collection
  const collections = products.reduce((acc, product) => {
    if (!acc[product.collection]) {
      acc[product.collection] = [];
    }
    acc[product.collection].push(product);
    return acc;
  }, {} as { [key: string]: typeof products });

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
          Collections
        </h1>
        {/* Display Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {Object.keys(collections).map((collectionName) => (
            <div
              key={collectionName}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {collectionName}
                </h2>
                <p className="text-gray-600 mt-1">
                  {collections[collectionName].length} products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CollectionsPage;
