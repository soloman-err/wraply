import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo, Democratic Republic of the',
  'Congo, Republic of the',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const Product = () => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  // PRODUCT-FORM-FUNC:
  const onSubmit = (data) => {
    if (isValid) {
      console.log('Valid Form', data);
      navigate('/checkout');
    } else {
      console.log('Invalid Form', data);
      setSubmitError(true);
    }
  };

  return (
    <div className="lg:w-[80%] mx-auto flex flex-col md:flex-row gap-5 min-h-screen mt-5 p-5">
      {/* PRODUCT-IMAGE */}
      <div className="md:w-2/4">
        <img src="/drink-vii.jpg" alt="" />
      </div>

      {/* PRODUCT-INFO */}
      <div className="md:w-2/4 space-y-4 px-5 md:px-0">
        {submitError && (
          <p className="text-red-600 mb-4">
            Please fill out all required fields.
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {/* SIZES */}
          <div className="">
            <select
              id="options"
              className="w-full p-2 rounded-sm text-zinc-700 focus:outline-none"
            >
              <option value="" disabled selected>
                Product Size
              </option>
              <option value="3.5x2">
                Standard Business Card Size - 3.5” x 2”
              </option>
              <option value="4x6">Standard Postcard Size - 4” x 6”</option>
              <option value="5x7">Standard Postcard Size - 5” x 7”</option>
              <option value="5.5x8.5">
                Standard Postcard Size - 5.5” x 8.5”
              </option>
              <option value="8.5x11-flyer">
                Standard Flyer Size - 8.5” x 11”
              </option>
              <option value="5.5x8.5-flyer">
                Standard Flyer Size - 5.5” x 8.5”
              </option>
              <option value="8.5x11-brochure">
                Standard Brochure Size - 8.5” x 11” (Flat Size)
              </option>
              <option value="8.5x14-brochure">
                Standard Brochure Size - 8.5” x 14” (Flat Size)
              </option>
              <option value="11x17-brochure">
                Standard Brochure Size - 11” x 17” (Flat Size)
              </option>
              <option value="3.67x8.5-brochure">
                Standard Brochure Size - 3.67” x 8.5” (Finished Size)
              </option>
              <option value="4.67x8.5-brochure">
                Standard Brochure Size - 4.67” x 8.5” (Finished Size)
              </option>
              <option value="5.5x8.5-brochure">
                Standard Brochure Size - 5.5” x 8.5” (Finished Size)
              </option>
              <option value="7x8.5-brochure">
                Standard Brochure Size - 7” x 8.5” (Finished Size)
              </option>
              <option value="5.67x11-brochure">
                Standard Brochure Size - 5.67” x 11” (Finished Size)
              </option>
              <option value="8.5x11-brochure-finished">
                Standard Brochure Size - 8.5” x 11” (Finished Size)
              </option>
              <option value="2x8-bookmark">
                Standard Bookmark Size - 2” x 8”
              </option>
              <option value="2x6-bookmark">
                Standard Bookmark Size - 2” x 6”
              </option>
              <option value="2.5x8.5-bookmark">
                Standard Bookmark Size - 2.5” x 8.5”
              </option>
              {/* Add more size options here */}
            </select>
            {errors?.size && (
              <p className="text-red-500">{'Please fill out this field'}</p>
            )}
            {/* {errors?.size && (
              <p className="text-red-500">{errors?.size?.message}</p>
            )} */}
          </div>

          {/* QUALITY */}
          <div className="">
            <select
              id="options"
              className="w-full p-2 rounded-sm text-zinc-700 focus:outline-none"
            >
              <option value="" disabled selected>
                Quality
              </option>
              <option value="glossy">Glossy Finish</option>
              <option value="matte">Matte Finish</option>
              <option value="luster">Luster Finish</option>
              <option value="textured">Textured Paper</option>
              <option value="recycled">Recycled Paper</option>
              <option value="thick">Thick Paper/Cardstock</option>
              <option value="photo">Photo Paper</option>
            </select>
            {errors?.quality && (
              <p className="text-red-500">{errors?.quality?.message}</p>
            )}
          </div>

          {/* FINISHING OPTIONS */}
          <div className="">
            <select
              id="options"
              className="w-full p-2 rounded-sm text-zinc-700 focus:outline-none"
            >
              <option value="" disabled selected>
                Finishing Options
              </option>
              <option value="Lamination">Lamination</option>
              <option value="Coating">Coating</option>
              <option value="Foil Stamping">Foil Stamping</option>
              <option value="Binding">Binding</option>
              <option value="Spot UV Coating">Spot UV Coating</option>
            </select>
            {errors?.finishingOptions && (
              <p className="text-red-500">
                {errors?.finishingOptions?.message}
              </p>
            )}
          </div>

          {/* QUANTITY */}
          <div className="w-full rounded-sm text-zinc-700 focus:outline-none">
            <input
              type="number"
              id="quantity"
              className="w-full p-2 rounded-sm bg-zinc-200 text-zinc-700 focus:outline-none"
              placeholder="Quantity"
            />
            {errors?.quantity && (
              <p className="text-red-500">{errors?.quantity?.message}</p>
            )}
          </div>

          {/* UPLOAD BACK & FRONT */}
          <div className="flex flex-row items-center gap-2">
            <div>
              <label htmlFor="frontImage" className="text-zinc-700 block mb-2">
                Front Image
              </label>
              <input
                type="file"
                id="frontImage"
                {...register('frontImage', { required: true })}
                className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
              />
              {errors?.frontImage && (
                <p className="text-red-500">{errors?.frontImage?.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="backImage" className="text-zinc-700 block mb-2">
                Back Image
              </label>
              <input
                type="file"
                id="backImage"
                {...register('backImage', { required: true })}
                className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
              />
              {errors?.frontImage && (
                <p className="text-red-500">{errors?.frontImage?.message}</p>
              )}
            </div>
          </div>

          {/* SHIPPING INFO */}
          <div className="">
            <label
              htmlFor="shippingAddress"
              className="text-zinc-700 block mb-2"
            >
              Shipping Address
            </label>
            <input
              type="text"
              id="shippingAddress"
              {...register('shippingAddress', { required: true })}
              className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
              placeholder="Enter your shipping address"
            />
            {errors?.backImage && (
              <p className="text-red-500">{errors?.backImage?.message}</p>
            )}
          </div>

          {/* ADDRESS-LINE-1 */}
          <div className="">
            <label htmlFor="addressLine1" className="text-zinc-700 block mb-2">
              Address Line 1
            </label>
            <input
              type="text"
              id="addressLine1"
              {...register('addressLine1', { required: true })}
              className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
              placeholder="Enter address line 1"
            />
            {errors?.addressLine1 && (
              <p className="text-red-500">{errors?.addressLine1?.message}</p>
            )}
          </div>

          {/* ADDRESS-LINE-2 */}
          <div className="">
            <label htmlFor="addressLine2" className="text-zinc-700 block mb-2">
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              {...register('addressLine2', { required: true })}
              className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
              placeholder="Enter address line 2"
            />
            {errors?.addressLine2 && (
              <p className="text-red-500">{errors?.addressLine2?.message}</p>
            )}
          </div>

          {/* CITY */}
          <div className="">
            <label htmlFor="city" className="text-zinc-700 block mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              {...register('city', { required: true })}
              className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
              placeholder="Enter city"
            />
            {errors?.city && (
              <p className="text-red-500">{errors?.city?.message}</p>
            )}
          </div>

          {/* ZIP-CODE */}
          <div className="">
            <label htmlFor="zipCode" className="text-zinc-700 block mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              id="zipCode"
              {...register('zipCode', { required: true })}
              className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
              placeholder="Enter ZIP code"
            />
            {errors?.zipCode && (
              <p className="text-red-500">{errors?.zipCode?.message}</p>
            )}
          </div>

          {/* COUNTRY */}
          <div className="">
            <label htmlFor="country" className="text-zinc-700 block mb-2">
              Country
            </label>
            <select
              id="country"
              {...register('country', { required: true })}
              className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
            >
              <option value="" disabled selected>
                Select Your Country
              </option>
              {countries?.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors?.country && (
              <p className="text-red-500">{errors?.country?.message}</p>
            )}
          </div>
        </form>

        {/* TOTAL-AMOUNT */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 font-semibold text-lg">
            Total{' '}
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
          </span>{' '}
          <span className="font-bold text-2xl">
            ${100.0}
            <span className="text-base"> (+ Tax)</span>
          </span>
        </div>

        {/* PROCEED-CHECKOUT */}
        <div className="space-y-5 text-lg text-white font-semibold">
          <button
            // disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
            className={`flex justify-center items-center gap-2 w-full hover:bg-accent bg-accent/80 py-2 px-4 rounded-sm 
            ${!isValid ? 'bg-gray-300 cursor-not-allowed' : ''}
            `}
          >
            Proceed to Checkout
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
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </button>

          {/* CART&BACK-BTN */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-2 gap-2 text-base">
            {/* ADD-CART-BTN */}
            <button className="flex justify-center items-center gap-1 w-full hover:bg-primary bg-zinc-500 py-2 px-4 rounded-sm">
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

            {/* CONTINUE-SHOPPING-BTN */}
            <button className="w-full hover:bg-primary bg-zinc-500 py-2 px-4 rounded-sm">
              <Link to={'/'} className="">
                Continue Shopping
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
