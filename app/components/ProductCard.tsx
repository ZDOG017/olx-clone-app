import React from 'react';
import { Product } from '../../service/productService';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 max-w-xs">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="mt-2 font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
