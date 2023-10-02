import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // TOGGLE-BAR FUNC
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // NAV-ITEMS:
  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/shop', text: 'Shop' },
    { path: '/categories', text: 'Categories' },
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { divider: true },
    { path: '/cart', text: 'Cart' },
    { path: '/wishlist', text: 'Wishlist' },
    { path: '/payments', text: 'Payments' },
  ];

  return (
    <header className="sticky top-0 left-0 z-50 flex justify-between py-5 px-2 glass">
      {/* BRAND-IDENTITY */}
      <div className="uppercase font-semibold italic tracking-wider text-xl lg:text-2xl">
        <Link to={'/'}>Wraply</Link>
      </div>

      {/* NAVIGATION MODULES */}
      <div
        className={`lg:flex items-center ${
          isOpen
            ? 'fixed min-h-screen top-0 left-0 block lg:hidden bg-zinc-100 shadow-md w-3/4 md:w-2/4 z-50'
            : 'hidden'
        }`}
      >
        <h2 className="lg:hidden text-2xl font-bold uppercase p-6 bg-zinc-500 text-white">
          Wraply
        </h2>

        {/* NAVIGATION-ROUTES */}
        <nav className="">
          <ul className="flex items-center flex-col lg:flex-row gap-1 px-2 mt-5 lg:mt-0 uppercase text-white lg:text-black">
            {navLinks.slice(0, 5).map((link, index) =>
              link.divider ? (
                <li
                  key={index}
                  className="w-3/4 mx-auto border-b border-zinc-300 mb-2 pb-2"
                ></li>
              ) : (
                <li key={link?.path} className="w-full">
                  <Link
                    to={link?.path}
                    onClick={isOpen ? handleToggle : undefined}
                    className="w-full inline-block p-2 bg-zinc-400 lg:bg-transparent hover:bg-zinc-500 lg:hover:bg-transparent font-semibold md:text-lg rounded-sm"
                  >
                    {link?.text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      <div>
        {/* TOGGLE-BAR */}
        <button onClick={handleToggle} className="lg:hidden">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {/* CART/USER-INFO */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="px-3 py-1 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
          <button className="px-3 py-1 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;