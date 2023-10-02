import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const formData = location.state?.FormData;
  console.log(formData);
  const {
    addressLine1,
    addressLine2,
    backImage,
    frontImage,
    city,
    country,
    zipCode,
    size,
    quality,
    finishingOptions,
    quantity,
    totalPrice,
  } = formData;

  return (
    <div className="w-[80%] lg:w-[60%] mx-auto mt-5 space-y-5 bg-zinc-50 p-2">
      <section className="space-y-5">
        {/* PRODUCT-INFO */}
        <div className="space-y-2">
          <h2 className="border-b lg:text-lg uppercase bg-zinc-100 w-full px-1 font-semibold">
            Product Info:
          </h2>

          <div className="px-2">
            <p className="flex justify-between items-center">
              <span className="font-semibold">Size:</span> <span>{size}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="font-semibold">Quality:</span>{' '}
              <span>{quality}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="font-semibold">Finishing Options:</span>{' '}
              <span>{finishingOptions}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="font-semibold">Quantity:</span>{' '}
              <span>{quantity} /pcs</span>
            </p>
          </div>
        </div>

        {/* UPLOADED-FILES */}
        <div className="space-y-2">
          <h2 className="border-b lg:text-lg uppercase bg-zinc-100 w-full px-1 font-semibold">
            Uploaded Files:
          </h2>

          <div className="flex flex-col md:flex-row w-full gap-2 px-2">
            {/* FRONT-IMAGE */}
            <div className="space-y-1">
              <p>
                <span className="font-semibold">Font Image:</span> <span></span>
              </p>
              <img
                src={frontImage[0]?.name}
                alt=""
                className="w-full h-40 object-cover
              "
              />
            </div>

            {/* BACK-IMAGE */}
            <div className="space-y-1">
              <p>
                <span className="font-semibold">Back Image:</span> <span></span>
              </p>

              <img
                src={backImage[0]?.name}
                alt=""
                className="w-full h-40 object-cover
              "
              />
            </div>
          </div>
        </div>

        {/* SHIPPING-INFO */}
        <div className="space-y-2">
          <h2 className="border-b lg:text-lg uppercase bg-zinc-100 w-full px-1 font-semibold">
            Shipping Info:
          </h2>
          <div className="px-2">
            <p className="flex justify-between items-center">
              <span className="font-semibold">Address Line 1:</span>{' '}
              <span>{addressLine1}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="font-semibold">Address Line 2:</span>{' '}
              <span>{addressLine2}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="font-semibold">City:</span> <span>{city}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="font-semibold">Zip Code:</span>{' '}
              <span>{zipCode}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="font-semibold">Country</span>{' '}
              <span>{country}</span>
            </p>
          </div>
        </div>
      </section>

      {/* PAYMENT-INFO */}
      <section>
        <h2 className="flex justify-between items-center text-lg font-bold bg-zinc-500 text-white p-2">
          <span>Choose Payment Method</span>
          <span className="font-bold text-xl">Total: ${totalPrice}</span>
        </h2>

        {/* PAYMENT-PARTNERS */}
        <div className="mt-5 flex flex-col md:flex-row items-center">
          <img src="/ssl.png" alt="ssl" className="w-32 h-10 cursor-pointer" />
          <img
            src="/stripe.png"
            alt="stripe"
            className="w-32 h-14 cursor-pointer"
          />
          <img
            src="/paypal.png"
            alt="paypal"
            className="w-32 h-10 cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
};

export default Checkout;
