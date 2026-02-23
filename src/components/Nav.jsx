import React, { useState } from 'react';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='w-full p-4 bg-[#0c0307] sticky top-0 z-50'> 
      <nav className="max-w-6xl mx-auto bg-[#4a0d24] rounded-full flex items-center justify-between px-3 py-2 shadow-md border border-[#5c132f]">
        
        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#121226] to-[#2a0e28] text-gray-300 font-serif italic shadow-inner">
          <span className="text-lg">YB</span>
        </div>

        <div className="hidden md:flex items-center space-x-10 pr-8">
          <a href="#home" className="text-white font-semibold text-sm">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white text-sm">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white text-sm">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white text-sm">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white text-sm">Contact</a>
        </div>

        <button 
          className="md:hidden pr-4 text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-3 bg-[#4a0d24] rounded-2xl flex flex-col space-y-4 px-6 py-5 shadow-lg border border-[#5c132f]">
          <a href="#home" className="text-white font-semibold">Home</a>
          <a href="#about" className="text-gray-300">About</a>
          <a href="#skills" className="text-gray-300">Skills</a>
          <a href="#projects" className="text-gray-300">Projects</a>
          <a href="#contact" className="text-gray-300">Contact</a>
        </div>
      )}
    </div>
  );
}