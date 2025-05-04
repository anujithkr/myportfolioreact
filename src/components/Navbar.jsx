import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Service', 'Project', 'Contact'];

  return (
    <nav className='bg-black text-white px-6 md:px-16 lg:px-24'>
      <div className='flex items-center justify-between py-4 relative'>
        {/* Logo */}
        <div className='text-2xl font-bold z-10'>Anujith</div>

        {/* Centered Links (Desktop) */}
        <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6'>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className='px-4 py-2 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:rounded-full hover:shadow-lg transition-all duration-300'
            >
              {link}
            </a>
          ))}
        </div>

        {/* Connect Button (Right) */}
        <div className='hidden md:flex z-10'>
          <a href="#contact">
            <button className='bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
              Connect Me
            </button>
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <div className='md:hidden z-10'>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='flex flex-col space-y-3 md:hidden pb-4'>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className='px-4 py-2 text-center hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:rounded-full hover:shadow-lg transition-all duration-300'
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
