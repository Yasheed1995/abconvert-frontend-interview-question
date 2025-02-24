export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My E-commerce</h1>
      <p className="mt-4 text-lg text-gray-700">Browse products and enjoy shopping!</p>
      
      <div className="mt-6 space-x-4">
        <a href="/products" className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700">
          View Products
        </a>
        <a href="/collections" className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700">
          View Collections
        </a>
      </div>
    </main>
  );
}