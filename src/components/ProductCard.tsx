import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  imageSrc: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageSrc,
  title,
  price,
}) => {
  return (
    <Link
      href={`/products/${id}`}
      className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition w-64" // Added w-64 here
    >
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
    </Link>
  );
};

export default ProductCard;
