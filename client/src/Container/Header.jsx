import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import logo from '../assets/shoptalk.jpeg';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-gray-800 p-4 md:flex md:justify-evenly justify-between md:items-center font-serif">

      <div className="flex items-center  mb-4 justify-between md:mb-0">
        <div className="logo">
          <img className="h-8 rounded-lg" src={logo} alt="Logo" />
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-black bg-white focus:outline-none"
            onClick={toggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>

       
      </div>

      {/* Responsive navigation */}
      <nav
        className={`${
          isNavOpen ? 'block' : 'hidden'
        } md:block md:flex md:items-center md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Shop</a></li>
          <li><a href="#" className="text-white">About Us</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
        </ul>

         {/* Search bar */}
         <div className="hidden md:flex items-center px-5">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-3 py-1 rounded-2xl "
          />
          <button type="button" className="text-white ml-2">
            <FaSearch />
          </button>
        </div>

        <div className="md:flex md:items-center">
        {/* Icons for larger screens */}
        <div className=" md:flex flex space-x-2    md:block">
        
          <FaShoppingCart className="text-white" />
          <FaUser className="text-white" />
        </div>

        <div className="login-signup px-4  md:block">
          <a href="#" className="text-white">Login</a>
          <span className="text-white"> | </span>
          <a href="#" className="text-white">Sign Up</a>
        </div>
      </div>

      </nav>

    
    </header>
  );
}

export default Header;
