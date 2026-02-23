import React from 'react';
import Socials from './Socials';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#0c0307] font-Poppins flex flex-col">
      <style>
        {`
          @keyframes slideLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes slideRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .animate-slide-left { animation: slideLeft 20s linear infinite; }
          .animate-slide-right { animation: slideRight 20s linear infinite; }
        `}
      </style>

      <div className="relative w-full py-16 md:py-20 overflow-hidden flex flex-col items-center justify-center gap-4 md:gap-6 z-10">
        <div className="w-[200vw] flex animate-slide-left opacity-30 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <span key={`top-${i}`} className="text-2xl md:text-5xl font-semibold text-[#661a3d] whitespace-nowrap mx-4 md:mx-6">
              Interest in Collaborate ?
            </span>
          ))}
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white z-20 text-center px-4">
          Interest in <span className="bg-gradient-to-r from-[#d91a45] to-[#c8560e] bg-clip-text text-transparent">Collaborate</span> ?
        </h2>

        <div className="w-[200vw] flex animate-slide-right opacity-30 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <span key={`bot-${i}`} className="text-2xl md:text-5xl font-semibold text-[#661a3d] whitespace-nowrap mx-4 md:mx-6">
              Interest in Collaborate ?
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full mt-10 md:mt-20 flex flex-col items-center justify-end min-h-[300px] md:min-h-[400px]">
        <div className="absolute bottom-0 w-full overflow-hidden leading-none z-0">
          <svg className="relative block w-full h-[200px] md:h-[400px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C63.2,16.29,129.5,33.7,192.5,44.22c44.8,7.49,89.5,10.6,134.1,12.2Z" fill="#3a0433"></path>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V122.3C1132.19,146.6,1055.71,111.31,985.66,92.83Z" fill="#520547"></path>
            <path d="M0,45.8V120H1200V85.7C1132.19,110,1055.71,111.31,985.66,92.83c-78.99-20.83-161.88-61.81-241.82-78.64-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,45.8Z" fill="#2a0025"></path>
          </svg>
        </div>

        <div className="z-10 flex flex-col items-center mb-16 md:mb-24 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 md:mb-8 tracking-wide">
            Connect with me
          </h2>
          
          <div className="flex items-center bg-gradient-to-r from-[#d91a45] to-[#c8560e] px-8 py-3 md:px-10 md:py-4 rounded-full shadow-2xl">
            {/* Reusing the Socials component! */}
            <Socials />
          </div>
        </div>

        <div className="w-full bg-[#1c0117] py-4 text-center z-10 text-gray-400 font-light text-xs md:text-sm border-t border-white/5">
          Made by Yuthila Banuka
        </div>
      </div>
    </section>
  );
}