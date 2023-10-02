import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { imageUrl, title, description, price } = product;
  console.log(imageUrl);

  return (
    <Link
      to={'/product-info'}
      className="flex flex-col justify-between bg-zinc-50 w-full rounded-sm overflow-hidden shadow-md"
    >
      <div className="h-full flex flex-col">
        {/* CARD-IMAGE */}
        <div>
          <img src={`${imageUrl}`} alt={title} />
        </div>

        {/* CARD-INFO */}
        <div className="flex flex-col justify-between mt-5 p-2 space-y-3 h-full">
          <p className="font-normal text-zinc-700">{description}</p>

          <div className="flex flex-row items-center justify-between mt-auto">
            <div>
              {/* <h2 className="font-semibold text-2xl">${price}</h2> */}
              <h2 className="text-xl lg:text-2xl font-semibold capitalize">
                {title}
              </h2>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* CART-BTN */}
        {/* <div className="flex justify-between items-center mt-2 gap-2 p-2">
        <button className="w-full flex flex-row items-center font-semibold bg-zinc-200 rounded-sm px-2 text-sm lg:text-base py-2 gap-1 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          Add Cart
        </button>
        <button className="w-full font-semibold bg-zinc-200 rounded-sm px-2 text-sm lg:text-base py-2">
          <Link to={'/product-info'}>Buy Pack</Link>
        </button>
      </div> */}
      </div>
    </Link>
  );
};

export default ProductCard;
