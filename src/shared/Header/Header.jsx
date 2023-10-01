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
        <Link to={'/'}>Wraply</Link>
      </div>

      {/* NAVIGATION MODULES */}
      <nav
        className={`lg:flex ${
          isOpen
            ? 'absolute top-0 left-0 block bg-zinc-500 w-2/4 min-h-screen transform translate-x-0 transition-transform duration-500 ease-in-out z-50'
            : 'hidden -translate-x-full'
        }`}
      >
        <ul className="flex flex-col lg:flex-row gap-2">
          <li className="hover:bg-zinc-700 w-full">
            <Link
              to={'/'}
              onClick={handleToggle}
              className="w-full inline-block p-2"
            >
              Home
            </Link>
          </li>
          <li className="hover:bg-zinc-700 w-full">
            <Link
              to={'/shop'}
              onClick={handleToggle}
              className="w-full inline-block p-2"
            >
              Shop
            </Link>
          </li>
          <li className="hover:bg-zinc-700 w-full">
            <Link
              to={'/doc'}
              onClick={handleToggle}
              className="w-full inline-block p-2"
            >
              Doc
            </Link>
          </li>
          <li className="hover:bg-zinc-700 w-full">
            <Link
              to={'/about'}
              onClick={handleToggle}
              className="w-full inline-block p-2"
            >
              About
            </Link>
          </li>
          <li className="hover:bg-zinc-700 w-full">
            <Link
              to={'/contact'}
              onClick={handleToggle}
              className="w-full inline-block p-2"
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
