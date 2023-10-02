import { Link } from 'react-router-dom';

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
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-5 min-h-screen mt-5 p-5">
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
            className="w-full p-2 rounded-sm text-zinc-700 focus:outline-none"
          >
            <option value="" disabled>
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
        </div>

        {/* QUALITY */}
        <div className="">
          <select
            id="options"
            className="w-full p-2 rounded-sm text-zinc-700 focus:outline-none"
          >
            <option value="" disabled>
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
        </div>

        {/* FINISHING OPTIONS */}
        <div className="">
          <select
            id="options"
            className="w-full p-2 rounded-sm text-zinc-700 focus:outline-none"
          >
            <option value="" disabled>
              Finishing Options
            </option>
            <option value="Lamination">Lamination</option>
            <option value="Coating">Coating</option>
            <option value="Foil Stamping">Foil Stamping</option>
            <option value="Binding">Binding</option>
            <option value="Spot UV Coating">Spot UV Coating</option>
          </select>
        </div>

        {/* QUANTITY */}
        <div className="w-full rounded-sm text-zinc-700 focus:outline-none">
          <input
            type="number"
            id="quantity"
            className="w-full p-2 rounded-sm bg-zinc-200 text-zinc-700 focus:outline-none"
            placeholder="Quantity"
          />
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
              className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="backImage" className="text-zinc-700 block mb-2">
              Back Image
            </label>
            <input
              type="file"
              id="backImage"
              className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
            />
          </div>
        </div>

        {/* SHIPPING INFO */}
        <div className="">
          <label htmlFor="shippingAddress" className="text-zinc-700 block mb-2">
            Shipping Address
          </label>
          <input
            type="text"
            id="shippingAddress"
            className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
            placeholder="Enter your shipping address"
          />
        </div>

        {/* ADDRESS-LINE-1 */}
        <div className="">
          <label htmlFor="addressLine1" className="text-zinc-700 block mb-2">
            Address Line 1
          </label>
          <input
            type="text"
            id="addressLine1"
            className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
            placeholder="Enter address line 1"
          />
        </div>

        {/* ADDRESS-LINE-2 */}
        <div className="">
          <label htmlFor="addressLine2" className="text-zinc-700 block mb-2">
            Address Line 2
          </label>
          <input
            type="text"
            id="addressLine2"
            className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
            placeholder="Enter address line 2"
          />
        </div>

        {/* CITY */}
        <div className="">
          <label htmlFor="city" className="text-zinc-700 block mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
            placeholder="Enter city"
          />
        </div>

        {/* ZIP-CODE */}
        <div className="">
          <label htmlFor="zipCode" className="text-zinc-700 block mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            className="w-full p-2 rounded-sm text-zinc-800 bg-zinc-200 border border-zinc-300 focus:outline-none"
            placeholder="Enter ZIP code"
          />
        </div>

        {/* COUNTRY */}
        <div className="">
          <label htmlFor="country" className="text-zinc-700 block mb-2">
            Country
          </label>
          <select
            id="country"
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
        <div className="space-y-5 text-lg text-white font-semibold">
          <button className="w-full hover:bg-accent bg-accent/80 py-2 px-4 rounded-sm">
            <Link
              to={'/checkout'}
              className="flex flex-row items-center justify-center gap-2"
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
            </Link>
          </button>
          <button className="w-full hover:bg-primary bg-zinc-500 py-2 px-4 rounded-sm">
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
