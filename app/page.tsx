'use client'
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { fetchProducts, Product } from '../service/productService';
import ProductCard from '../app/components/ProductCard';

const Home = () => {
  const [localProducts, setLocalProducts] = useState<Product[]>([]);
  const { data, error, isLoading } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setLocalProducts(savedProducts);
  }, []);

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">Error fetching products</div>;

  // Локальные продукты отображаются первыми
  const allProducts = [...localProducts, ...(data || [])];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" href="/create">
          Create Product
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {allProducts.map((product) => (
          <ProductCard key={product.id || product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
