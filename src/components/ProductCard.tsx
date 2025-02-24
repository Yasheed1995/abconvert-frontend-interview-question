import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64">
      <div className="relative w-full h-80">
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-1">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;