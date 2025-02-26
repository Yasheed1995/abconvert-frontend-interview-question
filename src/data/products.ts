import { promises as fs } from 'fs';
import path from 'path';

interface Product {
  id: string;
  name: string;
  price: number;
  color: string[];
  size: string[];
  image: string;
  collection: string;
}

const getProducts = async (): Promise<Product[]> => {
  try {
    // get the path of the json file
    const filePath = path.join(process.cwd(), 'public', 'assets', 'products.json');
    const fileContent = await fs.readFile(filePath, 'utf8'); // Read the file as UTF-8

    const productsData: Omit<Product, 'id'>[] = JSON.parse(fileContent); // Extract the JSON body
    return productsData.map((product, index) => ({
      ...product,
      id: `product-${index + 1}`,
      image: `/assets/images/${product.image}`, // Add the prefix to the path here
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export { getProducts };
