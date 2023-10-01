import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 min-h-screen mt-5 p-5">
      {/* PRODUCT-IMAGE */}
      <div className="md:w-2/4">
        <img src="/drink-vii.jpg" alt="" />
      </div>

      {/* PRODUCT-INFO */}
      <div className="md:w-2/4 space-y-4 px-5 md:px-0">
        {/* SIZES */}
        <div className="">
          <select
            id="options"
            className="w-full p-2 rounded-sm text-white focus:outline-none"
          >
            <option value="">Product Size</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>

        {/* QUALITY */}
        <div className="">
          <select
            id="options"
            className="w-full p-2 rounded-sm text-white focus:outline-none"
          >
            <option value="">Quality</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        {/* FINISHING OPTIONS */}
        <div className="">
          <select
            id="options"
            className="w-full p-2 rounded-sm text-white focus:outline-none"
          >
            <option value="">Quality</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        {/* QUANTITY */}
        <div className="">
          <select
            id="options"
            className="w-full p-2 rounded-sm text-white focus:outline-none"
          >
            <option value="">Quality</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        {/* UPLOAD DESIGN FILES */}
        <div className="">
          <label htmlFor="designFiles" className="text-white block mb-2">
            Upload Design Files
          </label>
          <input
            type="file"
            id="designFiles"
            className="w-full p-2 rounded-sm text-white bg-zinc-700 focus:outline-none"
          />
        </div>

        {/* UPLOAD BACK & FRONT */}
        <div className="flex flex-row gap-2">
          {/* <label htmlFor="frontImage" className="text-white block mb-2">
            Front Image
          </label> */}
          <input
            type="file"
            id="frontImage"
            className="w-full p-2 rounded-sm text-white bg-zinc-700 focus:outline-none"
          />
          {/* <label htmlFor="backImage" className="text-white block mb-2 mt-3">
            Back Image
          </label> */}
          <input
            type="file"
            id="backImage"
            className="w-full p-2 rounded-sm text-white bg-zinc-700 focus:outline-none"
          />
        </div>

        {/* SHIPPING INFO */}
        <div className="">
          <label htmlFor="shippingAddress" className="text-white block mb-2">
            Shipping Address
          </label>
          <input
            type="text"
            id="shippingAddress"
            className="w-full p-2 rounded-sm text-white bg-zinc-700 focus:outline-none"
            placeholder="Enter your shipping address"
          />
        </div>

        {/* ADDRESS-LINE-1 */}
        <div className="">
          <label htmlFor="addressLine1" className="text-white block mb-2">
            Address Line 1
          </label>
          <input
            type="text"
            id="addressLine1"
            className="w-full p-2 rounded-sm text-white bg-zinc-700 focus:outline-none"
            placeholder="Enter address line 1"
          />
        </div>

        {/* ADDRESS-LINE-2 */}
        <div className="">
          <label htmlFor="addressLine2" className="text-white block mb-2">
            Address Line 2
          </label>
          <input
            type="text"
            id="addressLine2"
            className="w-full p-2 rounded-sm text-white bg-zinc-700 focus:outline-none"
            placeholder="Enter address line 2"
          />
        </div>

        {/* CITY */}
        <div className="">
          <label htmlFor="city" className="text-white block mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full p-2 rounded-sm text-white bg-zinc-700 focus:outline-none"
            placeholder="Enter city"
          />
        </div>

        {/* ZIP-CODE */}
        <div className="">
          <label htmlFor="zipCode" className="text-white block mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            className="w-full p-2 rounded-sm text-white bg-zinc-700 focus:outline-none"
            placeholder="Enter ZIP code"
          />
        </div>

        {/* COUNTRY */}
        <div className="">
          <label htmlFor="country" className="text-white block mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            className="w-full p-2 rounded-sm text-white bg-zinc-700 focus:outline-none"
            placeholder="Enter country"
          />
        </div>

        {/* TOTAL-AMOUNT */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">Total =</span>{' '}
          <span className="font-bold text-2xl">
            ${100.0}
            <span className="text-base"> (+ Tax)</span>
          </span>
        </div>

        {/* PROCEED-CHECKOUT */}
        <div className="space-y-5">
          <button className="w-full bg-zinc-300 hover:bg-zinc-400 py-2 px-4 rounded-sm">
            <Link to={'/checkout'} className="">
              Proceed to Checkout
            </Link>
          </button>
          <button className="w-full bg-zinc-300 hover:bg-zinc-400 py-2 px-4 rounded-sm">
            <Link to={'/'} className="">
              Continue Shopping
            </Link>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Product;
