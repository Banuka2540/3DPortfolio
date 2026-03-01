import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type'; 

export default function About() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const splitText = new SplitType('.about-intro', { types: 'words' });
      
      const tl = gsap.timeline({ 
        defaults: { ease: "power3.out", duration: 1.2 } 
      });

      tl.from(splitText.words, {
        y: 30,
        opacity: 0,
        stagger: 0.03, 
        delay: 0.2
      })
      .from('.about-card', {
        y: 40,
        opacity: 0,
        duration: 0.8
      }, "-=0.8") 
      .from('.card-inner-text', {
        y: 15,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6
      }, "-=0.6")
      .from('.card-image', {
        scale: 0.95,
        opacity: 0,
        duration: 0.8
      }, "-=0.6")
      .from('.work-item', {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8
      }, "-=0.4");

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="min-h-screen pt-64 px-[6vw] lg:px-[4vw] bg-white text-black font-Poppins pb-96 flex justify-center overflow-hidden">
      
      <div className="w-full max-w-screen-xl flex flex-col items-start line-">
        
        {/* --- BLOCK 1 --- */}
        <h1 className="about-intro text-3xl md:text-5xl lg:text-[2.8rem] font-medium leading-[1.6] text-gray-500 mb-12 w-full max-w-[95%]">
          I’m an undergraduate and currently diving deep into <span className="font-semibold text-black">machine learning</span> and <span className="font-semibold text-black">deep learning.</span> I’m also building responsive websites, experimenting with creative software ideas, and learning how to design efficient data pipelines.
        </h1>

        <div className="about-card w-full bg-[#D4E2FF] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-stretch gap-8 mb-24 shadow-sm">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pr-0 md:pr-8">
            <h3 className="card-inner-text text-black text-4xl md:text-[2.75rem] font-medium tracking-tight">
              2008 - 2019
            </h3>
            <p className="card-inner-text text-gray-600 text-xl md:text-[1.35rem] leading-[1.6] font-medium">
              I completed my G.C.E. Ordinary Level (O/L) examinations at Kingswood College and achieved 4 A grades, 4 B grades, and 1 C grade.
            </p>
          </div>
          <div className="card-image w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shrink-0">
            <img 
              src="/kingswood-image.jpg" 
              alt="Kingswood College" 
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>

        {/* --- BLOCK 2 --- */}
        <div className="about-card w-full bg-[#D4E2FF] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-stretch gap-8 mb-24 shadow-sm">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pr-0 md:pr-8">
            <h3 className="card-inner-text text-black text-4xl md:text-[2.75rem] font-medium tracking-tight">
              2008 - 2019
            </h3>
            <p className="card-inner-text text-gray-600 text-xl md:text-[1.35rem] leading-[1.6] font-medium">
              I completed my G.C.E. Ordinary Level (O/L) examinations at Kingswood College and achieved 4 A grades, 4 B grades, and 1 C grade.
            </p>
          </div>
          <div className="card-image w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shrink-0">
            <img 
              src="/kingswood-image.jpg" 
              alt="Kingswood College" 
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>
    
        {/* --- BLOCK 3 --- */}
        <div className="about-card w-full bg-[#D4E2FF] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-stretch gap-8 mb-16 shadow-sm">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pr-0 md:pr-8">
            <h3 className="card-inner-text text-black text-4xl md:text-[2.75rem] font-medium tracking-tight">
              2008 - 2019
            </h3>
            <p className="card-inner-text text-gray-600 text-xl md:text-[1.35rem] leading-[1.6] font-medium">
              I completed my G.C.E. Ordinary Level (O/L) examinations at Kingswood College and achieved 4 A grades, 4 B grades, and 1 C grade.
            </p>
          </div>
          <div className="card-image w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shrink-0">
            <img 
              src="src\assets\1.jpg" 
              alt="Kingswood College" 
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>

      </div> 
    </section> 
  );
}