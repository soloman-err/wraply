const Checkout = () => {
  return (
    <div className="w-[60%] mx-auto mt-5 min-h-screen space-y-5">
      {/* PRODUCT-INFO */}
      <section>
        <div>
          <h2>Product Info:</h2>
        </div>

        <div>
          <h2>Uploaded Files:</h2>
        </div>

        <div>
          <h2>Shipping Info:</h2>
        </div>
      </section>

      {/* PAYMENT-INFO */}
      <section>
        <h2 className="text-lg font-semibold bg-zinc-600 p-2">
          Choose Payment Method
        </h2>

        {/* PAYMENT-PARTNERS */}
        <div className="mt-5 flex flex-row items-center">
          <img src="/ssl.png" alt="ssl" className="w-32 h-10" />
          <img src="/stripe.png" alt="stripe" className="w-32 h-14" />
          <img src="/paypal.png" alt="paypal" className="w-32 h-10" />
        </div>
      </section>
    </div>
  );
};

export default Checkout;