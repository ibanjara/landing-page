// Navbar.js

import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../App.css'; // Import the stylesheet with the animation styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuStyle = {
    height: isMenuOpen ? 'auto' : '0',
    overflow: isMenuOpen ? 'visible' : 'hidden',
    transition: 'height 0.3s ease-in-out',
  };

  return (
    <div className='w-full flex flex-wrap justify-between items-center p-6 fixed z-30 bg-gray-900 text-white'>
      <div className='flex items-center'>
        <img src={logo} className='w-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' alt="Logo"></img>
        <p className='text-2xl ml-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'><strong>PrintHub</strong></p>
      </div>
      <div className="lg:hidden ml-auto">
        <button
          id="burger-icon"
          className="text-white focus:outline-none"
          onClick={handleToggleMenu}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className="lg:hidden w-full text-center" style={menuStyle}>
        <ul className='py-8'>
          <li><a href="#" className='block p-4 text-lg hover:text-[#4A55A2] hover:font-bold'>Scan</a></li>
          <li><a href="#" className='block p-4 text-lg hover:text-[#4A55A2] hover:font-bold'>Shop</a></li>
          <li><a href="#" className='block p-4 text-lg hover:text-[#4A55A2] hover:font-bold'>About</a></li>
          <li className='p-4'><button className="bg-blue-700 text-white px-4 py-2 rounded-md mx-2 transition duration-300 transform hover:scale-105">
          <i className="fas fa-user-plus mr-2"></i>
          Sign Up
        </button>
        </li>
        <li className='p-4'><button className="bg-white text-blue-700 px-4 py-2 rounded-md transition duration-300 transform hover:scale-105">
          <i className="fas fa-sign-in-alt mr-2"></i>
          Login
        </button></li>
        </ul>
      </div>
      <div className="hidden lg:flex lg:items-center lg:w-auto">
        <ul className='grid grid-cols-3 lg:grid-cols-none lg:flex'>
          <li><a href="#" className='p-4 text-lg hover:text-[#4A55A2] hover:font-bold'>Scan</a></li>
          <li><a href="#" className='p-4 text-lg hover:text-[#4A55A2] hover:font-bold'>Shop</a></li>
          <li><a href="#" className='p-4 text-lg hover:text-[#4A55A2] hover:font-bold'>About</a></li>
        </ul>
      </div>
      <div className="hidden lg:flex lg:justify-end">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md mx-2 transition duration-300 transform hover:scale-105">
          <i className="fas fa-user-plus mr-2"></i>
          Sign Up
        </button>
        <button className="bg-white text-blue-700 px-4 py-2 rounded-md transition duration-300 transform hover:scale-105">
          <i className="fas fa-sign-in-alt mr-2"></i>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
