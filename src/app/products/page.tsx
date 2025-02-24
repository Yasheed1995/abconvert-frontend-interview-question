import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    title: "Elegant Brown Coat",
    imageSrc: "/images/00088-845072580.png",
    price: "$129.99"
  },
  {
    id: 2,
    title: "Luxury Red Blazer",
    imageSrc: "/images/00117-1631775000.png",
    price: "$149.99"
  },
  {
    id: 3,
    title: "Bright Orange Suit",
    imageSrc: "/images/00450-3026690992.png",
    price: "$139.99"
  }
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
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