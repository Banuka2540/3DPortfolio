import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-[6vw] py-8 font-Poppins">
      <nav className="flex items-center justify-between w-full mx-auto max-w-7xl">
        
        {/* Logo */}
<Link 
  to="/" 
  className="flex items-center justify-center w-12 h-12 bg-[#110515] text-white font-serif italic shadow-md hover:scale-105 transition-transform rounded-full overflow-hidden"
>
  <img src={logo} className="w-full h-full object-cover" /> 
</Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                className={`text-[15px] transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-black font-semibold' // Active link matches your design
                    : 'text-gray-500 font-normal hover:text-black' // Inactive links are gray
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <button 
          className="md:hidden p-2 text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col border-t border-gray-100">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)} // Closes menu automatically when clicked
              className={`block px-6 py-4 text-center border-b border-gray-50 transition-colors ${
                location.pathname === link.path 
                  ? 'text-black font-semibold bg-gray-50' 
                  : 'text-gray-500 hover:text-black hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}