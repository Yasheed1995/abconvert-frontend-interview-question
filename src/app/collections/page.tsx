import { getProducts } from "@/data/products";
import Link from "next/link";

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
    <main className="min-h-screen bg-gray-100">
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
    </main>
  );
};

export default CollectionsPage;
