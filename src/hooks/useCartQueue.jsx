import { useEffect, useState } from 'react';

const useCartQueue = () => {
  const [cartQueue, setCartQueue] = useState([]);

  useEffect(() => {
    const storedCartQueue = JSON.parse(localStorage.getItem('cartQueue')) || [];
    setCartQueue(storedCartQueue);
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const updateCartQueue = (newCartQueue) => {
    localStorage.setItem('cartQueue', JSON.stringify(newCartQueue));
    setCartQueue(newCartQueue);
  };

  return [cartQueue, updateCartQueue];
};

export default useCartQueue;
