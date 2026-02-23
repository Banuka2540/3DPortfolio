import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef();

  useGSAP(() => {
    // Header fade in
    gsap.from(".proj-header", {
      scrollTrigger: { trigger: ".proj-header", start: "top 85%" },
      y: 30, opacity: 0, duration: 1, ease: "power3.out"
    });

    // The Fan-Out Effect
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ".proj-cards-container", start: "top 75%" }
    });

    // Animate FROM dead center TO their fanned-out Tailwind positions
    tl.from(".card-center", { y: 100, opacity: 0, duration: 0.8, ease: "back.out(1.2)" })
      .from(".card-left", { x: '50%', rotation: 0, y: 50, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.6")
      .from(".card-right", { x: '-50%', rotation: 0, y: 50, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.8");
      
  }, { scope: container });

  return (
    <section id="projects" ref={container} className="w-full px-[6vw] lg:px-[10vw] py-24 font-Poppins bg-[#0c0307] overflow-hidden">
      
      <div className="proj-header text-center mb-16 lg:mb-24 relative z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-wide">
          Featured <span className="text-[#d95628]">Projects</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          A showcase of my recent work where I blend creativity and technology into something fresh
        </p>
      </div>

      <div className="proj-cards-container relative w-full max-w-4xl mx-auto h-[250px] sm:h-[350px] md:h-[450px] flex justify-center items-center mt-10">
        
        {/* Left Card */}
        <div className="card-left absolute w-[60%] md:w-[380px] h-[80%] md:h-[320px] bg-gradient-to-b from-[#d91a45] to-[#c8560e] rounded-[1.5rem] md:rounded-[2rem] shadow-xl transform -rotate-12 -translate-x-[30%] md:-translate-x-[40%] translate-y-2 opacity-90 transition-transform hover:z-30 hover:scale-105"></div>

        {/* Right Card */}
        <div className="card-right absolute w-[60%] md:w-[380px] h-[80%] md:h-[320px] bg-gradient-to-b from-[#d91a45] to-[#c8560e] rounded-[1.5rem] md:rounded-[2rem] shadow-xl transform rotate-12 translate-x-[30%] md:translate-x-[40%] translate-y-2 opacity-90 transition-transform hover:z-30 hover:scale-105"></div>

        {/* Center Card */}
        <div className="card-center absolute z-10 w-[65%] md:w-[440px] h-[90%] md:h-[360px] bg-gradient-to-b from-[#e81c4a] to-[#d95628] rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-white/5 transition-transform hover:scale-105 hover:z-30"></div>
        
      </div>
    </section>
  );
}