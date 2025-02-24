import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            id={product.id}
            imageSrc={product.imageSrc} 
            title={product.title} 
            price={product.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;