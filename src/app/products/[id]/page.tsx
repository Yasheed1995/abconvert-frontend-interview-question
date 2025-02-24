// src/app/products/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";


export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* 左側：商品圖片 */}
        <div className="relative w-full md:w-1/2 h-96">
          <Image src={product.imageSrc} alt={product.title} layout="fill" objectFit="cover" />
        </div>

        {/* 右側：商品資訊 */}
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-xl text-gray-600 mt-2">{product.price}</p>
            <p className="text-gray-700 mt-4">{product.description}</p>
          </div>

          {/* 加入購物車按鈕 */}
          <button className="mt-6 bg-blue-600 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}