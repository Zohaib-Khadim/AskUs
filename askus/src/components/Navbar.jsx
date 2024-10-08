import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: 'New Car' },
    { name: 'Used Car' },
    { name: 'Buy Car' },
    { name: 'Luxury' },
    { name: 'Sports' },
    { name: 'Classic' },
  ];

  return (
    <nav className="flex justify-between items-center mx-20 text-sm text-white pt-10">
      <div className="flex">
        <button>Logo</button>
      </div>

      {/* Always Visible Hamburger and Cross Icon */}
      <div className="flex lg:hidden">
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Navigation Links for Large Screens */}
      <div className="hidden lg:flex gap-5">
        {navigation.map((item) => (
          <li key={item.name} className="border border-[#115d93] rounded px-1 list-none">
            <button>{item.name}</button>
          </li>
        ))}
      </div>

      {/* Language and Auth Buttons */}
      <div className="flex gap-5">
        <button className="border text-black px-4 rounded py-1 bg-white">
          <FontAwesomeIcon className="pe-2" icon={faEarthAmericas} />
          EN
        </button>
        <button className='text-white'>Sign In</button>
        <button className="border text-black px-4 rounded bg-white">Sign Up</button>
      </div>

      {/* Slide-in Menu for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 bg-white shadow-lg w-2/3 sm:w-1/2 lg:hidden z-10`}
      >
        <div className="flex justify-between p-4 border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
          </button>
        </div>
        <ul className="flex flex-col list-none">
          {navigation.map((item) => (
            <li key={item.name} className="border-b border-gray-200 text-black">
              <button className="w-full text-left p-2">{item.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
