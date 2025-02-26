import { getProducts } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";

interface ProductDetailPageProps {
  params: { id: string };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = async ({
  params,
}) => {
  const { id } = params;

  // Find the product with the matching ID
  const products = await getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    // Handle the case where the product is not found
    notFound();
  }

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
      {product && (
        <div className="pt-24 mx-auto max-w-4xl p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            {product.name}
          </h1>
          <div className="relative w-full h-96 mb-6">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-600 text-center">{product.price}</p>
          {/* More product details can go here */}
        </div>
      )}
    </main>
  );
};

export default ProductDetailPage;
