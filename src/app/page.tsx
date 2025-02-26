export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <ul className="space-y-6">
          <li>
            <a href="/products" className="text-lg hover:text-indigo-300 transition-colors">
              View Products
            </a>
          </li>
          <li>
            <a href="/collections" className="text-lg hover:text-indigo-300 transition-colors">
              View Collections
            </a>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col justify-between py-10 px-12">
        {/* Header */}
        <header className="w-full flex justify-between items-center bg-white shadow-md fixed top-0 left-0 right-0 z-10 p-6">
          <h1 className="text-4xl font-extrabold text-indigo-600">Welcome to My E-commerce</h1>
          <div className="flex space-x-6">
            {/* Shopping Cart Icon */}
            <a href="/cart" className="text-2xl text-gray-800 hover:text-indigo-600">
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
            </a>
            {/* User Account Icon */}
            <a href="/account" className="text-2xl text-gray-800 hover:text-indigo-600">
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
            </a>
          </div>
        </header>

        {/* Main content */}
        <div className="pt-24">
          <p className="mt-4 text-xl text-gray-600 text-center">
            Browse products and enjoy shopping with exclusive deals just for you!
          </p>

          <div className="mt-8 space-x-6 text-center">
            <a
              href="/products"
              className="px-8 py-4 text-white bg-indigo-600 rounded-lg shadow-xl hover:bg-indigo-700 transform transition-transform duration-300 hover:scale-105"
            >
              View Products
            </a>
            <a
              href="/collections"
              className="px-8 py-4 text-white bg-green-600 rounded-lg shadow-xl hover:bg-green-700 transform transition-transform duration-300 hover:scale-105"
            >
              View Collections
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}