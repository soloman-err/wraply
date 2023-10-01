import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col md:justify-between p-10 bg-zinc-950 mt-20 text-white">
      <div className="flex flex-col md:flex-row justify-around text-center md:text-start space-y-5 md:space-y-0">
        <div>
          <p className="font-semibold text-lg">
            <span className="font-bold text-xl md:text-2xl uppercase italic">
              Wraply
            </span>{' '}
            <br />
            Providing reliable service since 1960
          </p>
          <p className='text-zinc-300'>Dhaka, Bangladesh, 1100</p>
          <p className='text-zinc-300'>wraply@beverage.com</p>
        </div>

        {/* LINKS */}
        <div>
          <h2 className='font-bold text-lg'>About Us</h2>
          <ul>
            <li>
              <Link className='text-zinc-300' to="/about/history">History</Link>
            </li>
            <li>
              <Link className='text-zinc-300' to="/about/team">Our Team</Link>
            </li>
            <li>
              <Link className='text-zinc-300' to="/about/values">Core Values</Link>
            </li>
            <li>
              <Link className='text-zinc-300' to="/about/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='font-bold text-lg'>Contact Us</h2>
          <ul>
            <li>
              <Link className='text-zinc-300' to="/contact/general">FAQ</Link>
            </li>
            <li>
              <Link className='text-zinc-300' to="/contact/support">Support</Link>
            </li>
            <li>
              <Link className='text-zinc-300' to="/contact/locations">Our Locations</Link>
            </li>
            <li>
              <Link className='text-zinc-300' to="/contact/sales">Sales Department</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='font-bold text-lg'>Privacy Policy</h2>
          <ul>
            <li>
              <Link className='text-zinc-300' to="/privacy/terms">Terms of Service</Link>
            </li>
            <li>
              <Link className='text-zinc-300' to="/privacy/cookies">Cookies Policy</Link>
            </li>
            <li>
              <Link className='text-zinc-300' to="/privacy/data">Data Privacy</Link>
            </li>
            <li>
              <Link className='text-zinc-300' to="/privacy/security">Security Measures</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center">
        <hr className="my-5" />
        <p className="text-sm">Copyright © 2023 - Wraply All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
