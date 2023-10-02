import ProductCard from '../../../components/cards/productCard/ProductCard';
import useProducts from '../../../hooks/useProducts';

const Products = () => {
  const [products, loading, refetch, isError] = useProducts();
  console.log( products );

  return (
    <section className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-5 md:px-10 lg:px-20 gap-4 lg:gap-5 space-y-5 md:space-y-0">
      {products?.slice(0, 12)?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
