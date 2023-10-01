import Stars from '../../stars/Stars';

const ProductCard = ({ product }) => {
  const { imageUrl, title, description, price } = product;

  return (
    <div className="flex flex-col justify-between bg-zinc-50 w-full rounded-sm overflow-hidden shadow-md">
      <div className="h-full flex flex-col">
        {/* CARD-IMAGE */}
        <div>
          <img src={imageUrl} alt={title} />
        </div>

        {/* CARD-INFO */}
        <div className="flex flex-col justify-between mt-5 p-2 space-y-3 h-full">
          <h2 className="text-xl lg:text-2xl font-semibold capitalize">
            {title}
          </h2>
          <p className="font-normal text-zinc-700">{description}</p>

          <div className="flex flex-row items-center justify-between mt-auto">
            <div className="">
              <Stars />
            </div>
            <div>
              <h2 className="font-semibold text-2xl">${price}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* CART-BTN */}
      <div className="flex justify-between items-center mt-2 gap-2 p-2">
        <button className="w-full font-semibold bg-zinc-200 rounded-sm px-2 text-sm lg:text-base py-2">
          Add to Cart
        </button>
        <button className="w-full font-semibold bg-zinc-200 rounded-sm px-2 text-sm lg:text-base py-2">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
