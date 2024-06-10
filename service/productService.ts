import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export interface Product {
  id?: number;
  title: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get('/products');
  return response.data;
};

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await axiosInstance.post('/products', product);
  return response.data;
};
