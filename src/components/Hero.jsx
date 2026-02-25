import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-[6vw] font-Poppins bg-white text-black">
      
      {/* Main Content Area */}
      {/* mt-[-8vh] bumps the content up slightly so it feels perfectly centered above the social icons */}
      <div className="flex flex-col items-center justify-center z-10 w-full mt-[-8vh]">
        
        {/* Text Container */}
        <div className="flex flex-col items-start mb-8">
          {/* Subtitle - Aligned to the right edge of the text block to match your design */}
          <h2 className="text-[#4b5563] text-sm md:text-[1.1rem] font-medium tracking-wide w-full text-right pr-1 mb-1">
            Aspiring ML / DL Engineer
          </h2>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal tracking-tight flex gap-2 sm:gap-3">
            <span>Hi I’m</span>
            <span className="font-medium">Yuthila Banuka.</span>
          </h1>
        </div>

        {/* Blue Button */}
        <button className="flex items-center justify-center gap-2 bg-[#4285F4] hover:bg-[#2b74f0] text-white font-normal text-base md:text-lg px-7 py-3 rounded-full transition-colors shadow-sm">
          View projects
          {/* Magnifying Glass Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 font-bold">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
        </button>

      </div>

      {/* Social Icons fixed to the bottom */}
      <div className="absolute bottom-12 flex items-center gap-6">
        
        {/* GitHub (Black) */}
        <a href="#" className="hover:opacity-70 transition-opacity text-[#111111]">
          <svg className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        
        {/* LinkedIn (Blue) */}
        <a href="#" className="hover:opacity-70 transition-opacity text-[#0A66C2]">
          <svg className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        
        {/* Instagram (Custom Gradient) */}
        <a href="#" className="hover:opacity-70 transition-opacity">
          <svg className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="ig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </defs>
            <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        
        {/* Facebook (Blue) */}
        <a href="#" className="hover:opacity-70 transition-opacity text-[#1877F2]">
          <svg className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
        </a>

      </div>
      
    </section>
  );
}