import ProductCard from '../../../components/cards/productCard/ProductCard';

const Products = () => {
  const drinksList = [
    {
      id: 1,
      imageUrl: '/drink-i.jpg',
      title: 'Refreshing Cola',
      description:
        'Classic cola flavor with natural sweeteners. A timeless favorite that satisfies your thirst and leaves you wanting more. Perfect for any occasion.',
      price: '2.99',
    },
    {
      id: 2,
      imageUrl: '/drink-ii.jpg',
      title: 'Zesty Lemon Lime',
      description:
        'Citrusy blend of lemon and lime. Made from real lemons and limes. Perfect for hot days or anytime you crave a refreshing citrus kick.',
      price: '3.49',
    },
    {
      id: 3,
      imageUrl: '/drink-iii.jpg',
      title: 'Berry Blast',
      description:
        'Sweet and tangy berries blend. Vibrant concoction of strawberries, blueberries, and raspberries. A treat for your taste buds.',
      price: '3.99',
    },
    {
      id: 4,
      imageUrl: '/drink-iv.jpg',
      title: 'Citrus Fizz',
      description:
        'Bursting with essence of oranges, lemons, and grapefruits. Delightful balance of sweetness and tartness. A citrus explosion in every gulp.',
      price: '4.29',
    },
    {
      id: 5,
      imageUrl: '/drink-v.jpg',
      title: 'Tropical Paradise',
      description:
        'Exotic blend of pineapple, mango, and passion fruit. Transport yourself to sandy beaches and turquoise waters. Paradise found in a bottle.',
      price: '4.99',
    },
    {
      id: 6,
      imageUrl: '/drink-vi.jpg',
      title: 'Summer Splash',
      description:
        'Vibrant mix of watermelon, strawberries, and kiwi. Juicy and refreshing flavors. Dive into a pool of deliciousness with every sip.',
      price: '3.79',
    },
    {
      id: 7,
      imageUrl: '/drink-vii.jpg',
      title: 'Minty Fresh',
      description:
        'Crispness of fresh mint leaves. Cool and invigorating experience. A breath of fresh air in every gulp.',
      price: '3.49',
    },
    {
      id: 8,
      imageUrl: '/drink-viii.jpg',
      title: 'Vanilla Dream',
      description:
        'Smoothness of vanilla with hint of caramel. A dessert lover’s delight. Treat yourself to a sip of luxury.',
      price: '4.79',
    },
    {
      id: 9,
      imageUrl: '/drink-ix.jpg',
      title: 'Cherry Crush',
      description:
        'Intense flavor of ripe cherries. A symphony of sweetness and tartness. Crush your cravings with Cherry Crush.',
      price: '3.99',
    },
    {
      id: 10,
      imageUrl: '/drink-x.jpg',
      title: 'Peach Paradise',
      description:
        'Sun-ripened peaches in every drop. Juicy and fragrant peach flavors. Imagine orchard blossoms with every sip.',
      price: '4.49',
      },
     {
    "id": 11,
    "imageUrl": "/drink-xi.jpg",
    "title": "Raspberry Delight",
    "description": "Indulge in the tartness of ripe raspberries. A delightful fusion of sweet and tangy flavors. Experience the essence of summer in every sip.",
    "price": "3.69"
  },
  {
    "id": 12,
    "imageUrl": "/drink-xii.jpg",
    "title": "Cucumber Mint Splash",
    "description": "Cooling cucumber meets refreshing mint. A unique blend for a revitalizing experience. Perfect for a rejuvenating break on a hot day.",
    "price": "3.89"
  },
  {
    "id": 13,
    "imageUrl": "/drink-xiii.jpg",
    "title": "Ginger Citrus Zing",
    "description": "Spicy ginger paired with zesty citrus fruits. A bold and invigorating combination. Satisfy your taste buds with this lively and energizing drink.",
    "price": "4.19"
  }
  ];

  return (
    <section className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-12 lg:px-20 gap-4 lg:gap-5 space-y-5 md:space-y-0">
      {drinksList?.slice(5, 11)?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
