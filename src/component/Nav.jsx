import React, { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-[100vw] bg-[#0F0326] h-[4rem] flex justify-between px-[1.8rem] items-center sticky top-0 z-50'>
      <h1 className='text-[2.1rem] font-bold text-white'>
      <img className="LogoHead" src="/logo.png" alt="Sherlock" />

      </h1>

      {/* Hamburger Icon */}
      <div className='md:hidden text-white text-[2rem] cursor-pointer  transition-transform duration-300 ease-in-out' onClick={toggleMenu}>
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-10 text-white text-[1.1rem] font-medium tracking-wide'>
        <li className='hover:text-[#D307D5] duration-300 cursor-pointer ease-in'><Link to="/">Home</Link></li>
        <li className='hover:text-[#D307D5] duration-300 cursor-pointer ease-in'><Link to="/about">About Us</Link></li>
        <li className='hover:text-[#D307D5] duration-300 cursor-pointer ease-in'><Link to="/services">Services</Link></li>
        <li className='hover:text-[#D307D5] duration-300 cursor-pointer ease-in'><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Contact Button */}
      <button className='hidden md:block text-white bg-[#D307D5] px-3 py-1.5 text-[.99rem] rounded-md font-medium tracking-wide'>
        Contact Us
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-[4rem] left-0 w-full bg-[#0F0326] flex flex-col items-start px-7 py-4 md:hidden '>
          <ul className='flex flex-col gap-4 text-white text-[1.1rem] font-medium'>
         <li className='hover:text-[#D307D5] duration-300 cursor-pointer ease-in'><Link to="/">Home</Link></li>
        <li className='hover:text-[#D307D5] duration-300 cursor-pointer ease-in'><Link to="/about">About Us</Link></li>
        <li className='hover:text-[#D307D5] duration-300 cursor-pointer ease-in'><Link to="/services">Services</Link></li>
        <li className='hover:text-[#D307D5] duration-300 cursor-pointer ease-in'><Link to="/contact">Contact</Link></li>
          </ul>
          <button className='mt-4 text-white bg-[#D307D5] px-3 py-1 text-[.99rem] rounded-md font-medium tracking-wide'>
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
