import useCartQueue from '../../hooks/useCartQueue';

const Cart = () => {
  const [cartQueue] = useCartQueue();
  console.log(cartQueue);

  if (cartQueue.length === 0) {
    return <div>No items in the cart.</div>;
  }

  return (
    <div>
      <h2 className="font-semibold uppercase text-center text-xl py-5 bg-zinc-200 mt-5">
        Cart
      </h2>
      <div className="space-y-2">
        {cartQueue.map((item, index) => (
          <div key={index} className="border-t">
            <h3 className="font-semibold">{item?.title}</h3>
            <p>Size: {item.size}</p>
            <p>Quality: {item.quality}</p>
            <p>Finishing Options: {item.finishingOptions}</p>
            <p>Quantity: {item.quantity}</p>
            {/* You can include more details of the item here */}
            {/* <p>Front Image: {item.frontImage}</p> */}
            {/* <p>Back Image: {item.backImage}</p> */}
            <p>Address Line 1: {item.addressLine1}</p>
            <p>Address Line 2: {item.addressLine2}</p>
            <p>City: {item.city}</p>
            <p>ZIP Code: {item.zipCode}</p>
            <p>Country: {item.country}</p>
            <p>Total Price: ${item.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
