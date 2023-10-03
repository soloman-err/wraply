import axios from 'axios';
import { useQuery } from 'react-query';

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/products`
    );

    console.log(response);

    if (response.status !== 200) {
      throw new Error('Network response failed!');
    }

    return response.data || [];
  } catch (error) {
    // Handle specific HTTP errors
    if (error.response) {
      console.error('Error response from server:', error.response.status);
      throw new Error('Server error occurred. Please try again later.');
    } else if (error.request) {
      console.error('No response from server:', error.request);
      throw new Error('No response from the server. Please try again later.');
    } else {
      console.error('Error setting up the request:', error.message);
      throw new Error(
        'An error occurred while processing your request. Please try again later.'
      );
    }
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
    onError: (error) => {
      console.error('Error fetching products', error);
    },
  });

  return [products, loading, refetch, isError];
};

export default useProducts;
