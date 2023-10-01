import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // TOGGLE-BAR FUNC
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex justify-between py-5 px-2 border-b">
      {/* BRAND-IDENTITY */}
      <div className="uppercase font-semibold italic tracking-wider text-xl">
        <Link to={'/'}>
          Wraply
        </Link>
      </div>

      {/* NAVIGATION MODULES */}
      <nav
        className={`lg:flex ${
          isOpen
            ? 'fixed inset-0 top-0 left-0 block lg:hidden bg-zinc-500 w-3/4 transform translate-x-0 transition-transform duration-500 ease-in-out z-50'
            : 'hidden -translate-x-full'
        }`}
      >
        <div>
          <h2 className="text-2xl font-bold uppercase p-6 bg-zinc-700 text-white">
            Wraply
          </h2>
        </div>

        {/* USER-LOGGED-ROUTES */}
        <div className="">
          <ul className="flex flex-col lg:flex-row gap-1 px-2 mt-5 uppercase text-white">
            <li>
              <Link
                to={'/cart'}
                onClick={handleToggle}
                className="w-full inline-block p-2 bg-zinc-600 hover:bg-zinc-700"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to={'/wishlist'}
                onClick={handleToggle}
                className="w-full inline-block p-2 bg-zinc-600 hover:bg-zinc-700"
              >
                Wishlist
              </Link>
            </li>

            <li>
              <Link
                to={'/payments'}
                onClick={handleToggle}
                className="w-full inline-block p-2 bg-zinc-600 hover:bg-zinc-700"
              >
                Payments
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-5 mx-2" />

        {/* TOGGLE-NAV-ROUTES */}
        <ul className="flex flex-col lg:flex-row gap-1 px-2 mt-5 uppercase text-white">
          <li className="w-full">
            <Link
              to={'/'}
              onClick={handleToggle}
              className="w-full inline-block p-2 bg-zinc-600 hover:bg-zinc-700"
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              to={'/shop'}
              onClick={handleToggle}
              className="w-full inline-block p-2 bg-zinc-600 hover:bg-zinc-700"
            >
              Shop
            </Link>
          </li>
          <li className="w-full">
            <Link
              to={'/doc'}
              onClick={handleToggle}
              className="w-full inline-block p-2 bg-zinc-600 hover:bg-zinc-700"
            >
              Doc
            </Link>
          </li>
          <li className="w-full">
            <Link
              to={'/about'}
              onClick={handleToggle}
              className="w-full inline-block p-2 bg-zinc-600 hover:bg-zinc-700"
            >
              About
            </Link>
          </li>
          <li className="w-full">
            <Link
              to={'/contact'}
              onClick={handleToggle}
              className="w-full inline-block p-2 bg-zinc-600 hover:bg-zinc-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* TOGGLE-BAR */}
      <div>
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

        <div className="hidden lg:flex">
          <button className="border px-3 py-1">Login</button>
          <button className="border px-3 py-1">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
