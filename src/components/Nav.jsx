import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../assets/logo.png';

export default function Nav() {
  const navRef = useRef(null);
  const linksContainerRef = useRef(null);

  useLayoutEffect(() => {
    // Slide navbar down
    gsap.fromTo(
      navRef.current,
      { y: -100 },
      { y: 0, duration: 2, ease: 'power4.out' }
    );

    // Animate links container with stagger
    gsap.fromTo(
      linksContainerRef.current.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, delay: 0.5 }
    );

    // Scroll hide/show
    let lastScroll = 0;
    const handleScroll = () => {
      if (!navRef.current) return;
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll) {
        gsap.to(navRef.current, { y: -100, duration:  0.9});
      } else {
        gsap.to(navRef.current, { y: 0 , duration: 0.9 });
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contacts'];

  return (
    <div ref={navRef} className="nav pb-6 p-7">
      <div className="rounded-full max-h-screen h-16 flex items-center justify-between gap-5 pr-32 pl-10 bg-gradient-to-b from-[#4E0024] to-[#3F001D] text-white">
        <img src={logo} className="w-10 rounded-full" alt="Logo" />
        <div ref={linksContainerRef} className="flex gap-16 font-Cairo">
          {menuItems.map((item) => (
            <a
              key={item}
              href={item === 'Home' ? './' : `#${item.toLowerCase()}`}
              className="cursor-pointer hover:text-gray-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
