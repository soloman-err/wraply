import axios from 'axios';
import { useQuery } from 'react-query';

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/products`
    );

    if (response.status !== 200) {
      throw new Error('Network response failed!');
    }

    return response.data || [];
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

const useProducts = () => {
  const {
    data: products = [],
    isLoading: loading,
    isError,
    refetch,
  } = useQuery('products', fetchProducts, {
    refetchOnWindowFocus: false,
  });

  return [products, loading, refetch, isError];
};

export default useProducts;
