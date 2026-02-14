import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Icon from '../assets/Icon.png';
import Socials from './Socials';
import Eclipse from './eclipse';

export default function Hero() {
  const taglines = [
    "Aspiring ML / DL Engineer.",
    "Passionate About AI.",
    "Code. Learn. Innovate.",
    "Turning Data Into Insights.",
    "Future Tech Creator."
  ];

  const taglineRefs = useRef([]);
  taglineRefs.current = [];

  const addToRefs = (el) => {
    if (el && !taglineRefs.current.includes(el)) {
      taglineRefs.current.push(el);
    }
  };

  const buttonRef = useRef(null);
  const introRef = useRef(null); // Ref for "Hi I'm Yuthila Banuka"

  useEffect(() => {
    // Animate "Hi I’m Yuthila Banuka" after 3 seconds (simulate after 3 sections)
    gsap.fromTo(
      introRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );

    // Tagline rotation
    const tl = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: "power1.inOut" } });
    taglineRefs.current.forEach((tag) => {
      tl.to(tag, { opacity: 1, y: 0 })
        .to(tag, { opacity: 0, y: -10, delay: 2 }); // visible for 2s
    });

    // Button spotlight effect
    const button = buttonRef.current;
    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(button, {
        '--cursor-x': `${x}px`,
        '--cursor-y': `${y}px`,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className='min-h-screen flex justify-between text-white font-Poppins'>
      <div className='pt-12 pb-0 pl-32 pr-32 mt-24'>
        <h1
          ref={introRef}
          className='text-6xl flex gap-4 justify-around pb-8'
        >
          Hi I’m 
          <div className='bg-gradient-to-t from-[#B60039] to-[#963600] py-0 px-2 rounded-3xl'>
            Yuthila Banuka
          </div>
        </h1>

        <h2 className='pb-10 text-3xl text-gray-300 relative h-8 pt-6'>
          {taglines.map((tag, idx) => (
            <span
              key={idx}
              ref={addToRefs}
              className='absolute top-0 left-0 opacity-0'
            >
              {tag}
            </span>
          ))}
        </h2>

        <button
          ref={buttonRef}
          className="relative rounded-full w-48 h-12 flex items-center justify-between px-6 bg-gradient-to-r from-[#6E0004] to-[#690038] text-white overflow-hidden"
          style={{
            '--cursor-x': '50%',
            '--cursor-y': '50%',
            backgroundImage: `radial-gradient(circle 80px at var(--cursor-x) var(--cursor-y), rgba(255,255,255,0.2), transparent 80%), linear-gradient(to right, #6E0004, #690038)`
          }}
        >
          <h3 className='p-2'>View projects</h3>
          <img src={Icon} className='w-4'/>
        </button>

        <Socials/>
      </div> 
      <Eclipse/>
    </section>
  )
}
