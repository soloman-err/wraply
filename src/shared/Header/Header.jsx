import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // TOGGLE-BAR FUNC
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between py-5 px-2 border">
      {/* BRAND-IDENTITY */}
      <div className="uppercase font-semibold italic tracking-wider text-xl">
        Wraply
      </div>

      {/* NAVIGATION MODULES */}
      <nav className="hidden lg:flex">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Shop</li>
          <li>Doc</li>
          <li>About</li>
          <li>Contact</li>
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

        <div className="hidden lg:flex gap-2">
          <button className='border px-3 py-1'>Login</button>
          <button className='border px-3 py-1'>Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
