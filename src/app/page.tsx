import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to My E-commerce
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Browse products and enjoy shopping!
      </p>

      <div className="mt-6 space-x-4">
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
    </main>
  );
};

export default HomePage;
