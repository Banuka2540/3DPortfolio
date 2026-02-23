import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Icon from '../assets/Icon.png'; 
import Socials from './Socials';
import Eclipse from './eclipse';

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Stagger the text and button entrance
    tl.from(".hero-elem", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
      delay: 0.2
    });

    // Animate the name pill specifically
    tl.from(".hero-pill", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.8");

    // Continuous floating animation for the 3D object
    gsap.to(".hero-3d", {
      y: -15,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });
  }, { scope: container });

  return (
    <section id="home" ref={container} className="relative min-h-[calc(100vh-80px)] w-full flex flex-col-reverse lg:flex-row items-center justify-between px-[6vw] lg:px-[10vw] py-8 lg:py-0 overflow-hidden text-white font-Poppins bg-[#0c0307]">
      
      <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 mt-6 lg:mt-0">
        
        <div className="hero-elem text-[2rem] sm:text-[2.5rem] lg:text-[clamp(2.5rem,5vw,4.2rem)] font-medium flex flex-wrap gap-x-3 gap-y-2 items-center justify-center lg:justify-start leading-tight tracking-wide">
          <span>Hi I’m</span>
          <span className="hero-pill bg-gradient-to-r from-[#d91a45] to-[#c8560e] py-1 md:py-2 px-4 md:px-6 rounded-full shadow-lg">
            Yuthila Banuka
          </span>
        </div>

        <h2 className="hero-elem text-base md:text-xl text-gray-200 font-light tracking-wide mt-3 md:mt-4 mb-6 md:mb-8 text-center lg:text-left">
          Aspiring ML / DL Engineer
        </h2>

        <button className="hero-elem flex items-center justify-between gap-3 md:gap-4 rounded-[2rem] h-10 md:h-[3.5rem] px-5 md:px-6 bg-[#82082b] hover:bg-[#a10d36] transition-colors shadow-lg w-44 md:w-56 mx-auto lg:mx-0">
          <span className="font-normal text-sm md:text-[1.1rem] tracking-wide">View projects</span>
          <img src={Icon} className="w-4 h-4 md:w-5 md:h-5 object-contain" alt="search icon" />
        </button>

        <div className="hero-elem mt-16 md:mt-24 w-full flex justify-center lg:justify-start pb-8 lg:pb-0">
          <Socials />
        </div>
      </div>

      <div className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="hero-3d relative flex justify-center items-center w-full max-w-[260px] sm:max-w-[320px] md:max-w-[450px] lg:max-w-[600px] aspect-square mx-auto lg:mx-0 lg:ml-auto">
          <Eclipse />
        </div>
      </div>
      
    </section>
  );
}