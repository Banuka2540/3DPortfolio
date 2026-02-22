import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logo.png';

export default function Nav() {
  const navRef = useRef(null);
  const linksContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Entrance Animation
      gsap.fromTo(navRef.current,
        { y: -100 },
        { y: 0, duration: 1.5, ease: 'power4.out' }
      );

      // 2. MatchMedia for Desktop staggered links
      let mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        if (linksContainerRef.current) {
          gsap.fromTo(linksContainerRef.current.children,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1, delay: 0.5 }
          );
        }
      });

      // 3. Optimized Scroll logic
      let lastScroll = 0;
      const handleScroll = () => {
        if (isMenuOpen) return; 
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
          gsap.to(navRef.current, { y: '-110%', duration: 0.4, ease: 'power2.inOut' });
        } else {
          gsap.to(navRef.current, { y: '0%', duration: 0.4, ease: 'power2.inOut' });
        }
        lastScroll = currentScroll;
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, navRef); 

    return () => ctx.revert();
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (!mobileMenuRef.current) return;

    if (!isMenuOpen) {
      setIsMenuOpen(true);
      gsap.to(mobileMenuRef.current, { x: '0%', duration: 0.6, ease: 'expo.out' });
    } else {
      gsap.to(mobileMenuRef.current, { 
        x: '100%', 
        duration: 0.5, 
        ease: 'expo.in',
        onComplete: () => setIsMenuOpen(false) 
      });
    }
  };

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contacts'];

  return (
    <>
      {/* FIXED SHIFT: 
        1. Added 'transition-all' so breakpoint changes are smooth.
        2. Normalized padding: md:p-[1.5vw] at 768px is approx 11px. 
           p-[15px] on mobile is similar, preventing the "jump."
      */}
      <div 
        ref={navRef} 
        className="nav fixed top-0 w-full z-50 p-[15px] md:p-[1.5vw] transition-all duration-300 ease-in-out"
        style={{ scrollbarGutter: 'stable' }} // Prevents shift when scrollbar appears
      >
        <div className="rounded-full h-[70px] flex items-center justify-between px-[5vw] bg-gradient-to-b from-[#4E0024] to-[#3F001D] text-white shadow-2xl border border-white/10">
          
          <img src={logo} className="w-10 h-10 rounded-full object-cover" alt="Logo" />

          {/* Desktop Links */}
          <div ref={linksContainerRef} className="hidden md:flex gap-[3.5vw] font-Cairo font-medium">
            {menuItems.map((item) => (
              <a
                key={item}
                href={item === 'Home' ? './' : `#${item.toLowerCase()}`}
                className="text-[clamp(14px,1.1vw,18px)] cursor-pointer hover:text-pink-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1.5 p-2 z-[60] relative">
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-[#3F001D] z-[55] flex flex-col items-center justify-center gap-[5vh] md:hidden translate-x-full"
      >
        {menuItems.map((item) => (
          <a
            key={item}
            href={item === 'Home' ? './' : `#${item.toLowerCase()}`}
            onClick={toggleMenu}
            className="text-white text-[clamp(2rem,10vw,4rem)] font-Cairo font-bold hover:text-pink-400"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}