import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-black">
              Tyre<span className="text-red-500 underline">Plex</span>
            </h1>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-black focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className={`hidden md:flex space-x-8`}>
            <a href="#" className="text-gray-800 hover:text-black">
              Car Tyres
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              Bike Tyres
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              Tyre Pressure
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              Commercial Tyres
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              Accessories
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              More
            </a>
          </div>

          {/* Login Icon */}
          <div className="hidden md:flex items-center">
            <span className="text-gray-800 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.364A9 9 0 1118.364 5.121a9 9 0 01-13.243 13.243z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12v.01M12 16h.01" />
              </svg>
            </span>
            <a href="#" className="ml-2 text-gray-800 hover:text-black">
              Login
            </a>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a href="#" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">
                Car Tyres
              </a>
              <a href="#" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">
                Bike Tyres
              </a>
              <a href="#" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">
                Tyre Pressure
              </a>
              <a href="#" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">
                Commercial Tyres
              </a>
              <a href="#" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">
                Accessories
              </a>
              <a href="#" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">
                More
              </a>
              <a href="" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2">
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
