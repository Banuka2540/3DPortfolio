import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Icon from '../assets/Icon.png';
import Socials from './Socials';
import Eclipse from './eclipse';

export default function Hero() {
  const containerRef = useRef(null);
  const taglineRefs = useRef([]);
  const buttonRef = useRef(null);
  const introRef = useRef(null);

  const taglines = [
    "Aspiring ML / DL Engineer.",
    "Passionate About AI.",
    "Code. Learn. Innovate.",
    "Turning Data Into Insights.",
    "Future Tech Creator."
  ];

  const addToRefs = (el) => {
    if (el && !taglineRefs.current.includes(el)) {
      taglineRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Entrance Animation
      gsap.fromTo(introRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );

      // 2. Tagline cycling
      const tl = gsap.timeline({ repeat: -1 });
      taglineRefs.current.forEach((tag) => {
        if (tag) {
          tl.to(tag, { opacity: 1, y: 0, duration: 1, ease: "power1.inOut" })
            .to(tag, { opacity: 0, y: -10, duration: 1, ease: "power1.inOut", delay: 2 });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-wrap-reverse items-center justify-center px-[5vw] py-20 overflow-hidden text-white font-Poppins"
    >
      {/* TEXT CONTENT 
          'flex-grow' and 'basis' allow it to take space until it's forced to wrap 
      */}
      <div className="flex-grow flex-shrink basis-[400px] z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        
        <div ref={introRef} className="text-[clamp(2rem,6vw,4rem)] font-bold flex flex-wrap gap-3 items-center justify-center lg:justify-start pb-8">
          <span className="whitespace-nowrap">Hi I’m</span>
          <div className="bg-gradient-to-t from-[#B60039] to-[#963600] py-2 px-6 rounded-3xl whitespace-nowrap shadow-xl border border-white/10">
            Yuthila Banuka
          </div>
        </div>

        <div className="relative h-12 w-full flex justify-center lg:justify-start pb-10">
          <h2 className="text-xl md:text-2xl text-gray-300 font-light">
            {taglines.map((tag, idx) => (
              <span key={idx} ref={addToRefs} className="absolute left-0 right-0 lg:right-auto opacity-0 whitespace-nowrap">
                {tag}
              </span>
            ))}
          </h2>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-12 w-full">
          <button ref={buttonRef} className="relative rounded-full w-56 h-14 flex items-center justify-between px-8 bg-gradient-to-r from-[#6E0004] to-[#690038] text-white overflow-hidden transition-transform active:scale-95 shadow-lg">
            <h3 className="font-medium">View projects</h3>
            <img src={Icon} className="w-5" alt="icon" />
          </button>
          <Socials />
        </div>
      </div>

      {/* ASTRONAUT / ECLIPSE 
          By using 'flex-wrap-reverse', this element stays on the right, 
          but jumps to the TOP the moment they touch.
      */}
      <div className="flex-grow flex-shrink basis-[400px] flex justify-center lg:justify-end items-center mb-10 lg:mb-0">
        <div className="scale-90 md:scale-100 lg:scale-110">
          <Eclipse />
        </div>
      </div>
    </section>
  );
}