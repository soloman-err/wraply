import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { imageUrl, title, description, price } = product;

  const truncatedDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <Link
      to={'/product-info'}
      state={{ product }}
      className="flex flex-col justify-between bg-zinc-50 w-full rounded-sm overflow-hidden shadow-md"
    >
      <div className="h-full flex flex-col">
        {/* CARD-IMAGE */}
        <div>
          <img
            src={`${imageUrl}`}
            alt={title}
            className="object-cover h-full"
          />
        </div>

        {/* CARD-INFO */}
        <div className="flex flex-col justify-between mt-5 p-2 space-y-3 h-full">
          <div className="flex flex-row items-center justify-between mt-auto">
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold capitalize">
                {title}
              </h2>
            </div>
          </div>

          <p className="font-normal text-zinc-600">{truncatedDescription}</p>
        </div>

        {/* PRICE-SEGMENT-BTN */}
        <div className="flex justify-between items-center mt-2 gap-2 p-2 text-xl bg-zinc-100 hover:bg-zinc-200">
          <div>
            <span className="font-semibold">${price}</span>
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
    </Link>
  );
};

export default ProductCard;
