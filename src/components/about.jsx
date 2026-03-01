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
    <section ref={container} className="min-h-screen pt-64 px-[6vw] lg:px-[4vw] bg-white text-black font-Poppins pb-24 flex justify-center overflow-hidden">
      
      {/* FIXED: Re-added flex flex-col and removed the global leading-8 */}
      <div className="w-full max-w-screen-xl flex flex-col items-start">
        
        {/* --- INTRO TEXT --- */}
        {/* FIXED: Adjusted sizes and line height to match the Figma reference */}
        <h1 className="about-intro text-5xl md:text-7xl lg:text-[3.5rem]  pb-32 font-medium leading-[1.2] tracking-tight text-gray-500 mb-20 w-full max-w-[95%]">
          I’m an undergraduate and currently diving deep into <span className="font-semibold text-black">machine learning</span> and <span className="font-semibold text-black">deep learning.</span> I’m also building responsive websites, experimenting with creative software ideas, and learning how to design efficient data pipelines.
        </h1>

        {/* --- BLOCK 1: O/L (Text Left, Image Right) --- */}
        <div className="about-card w-full bg-[#D4E2FF] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-stretch gap-8 mb-12 shadow-sm">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pr-0 md:pr-8">
            <h3 className="card-inner-text text-black text-4xl md:text-[2.75rem] font-medium tracking-tight">
              2008 - 2019
            </h3>
            <p className="card-inner-text text-gray-600 text-xl md:text-[1.25rem] leading-[1.6] font-medium">
              I completed my G.C.E. Ordinary Level (O/L) examinations at Kingswood College and achieved 4 A grades, 4 B grades, and 1 C grade.
            </p>
          </div>
          <div className="card-image w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shrink-0">
            <img 
              src="src/assets/1.jpg" 
              alt="Kingswood College Building" 
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>

        {/* --- BLOCK 2: School Life (Image Left, Text Right) --- */}
        <div className="about-card w-full bg-[#D4E2FF] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row-reverse justify-between items-stretch gap-8 mb-12 shadow-sm">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pl-0 md:pl-8">
            <h3 className="card-inner-text text-black text-4xl md:text-[2.75rem] font-medium tracking-tight">
              2019 - 2022
            </h3>
            <p className="card-inner-text text-gray-600 text-xl md:text-[1.25rem] leading-[1.6] font-medium">
              I completed my G.C.E. Advanced Level (A/L) examinations at Kingswood College in the Mathematics stream, studying Mathematics, Physics, and ICT. I obtained 3 C grades.</p>
          </div>
          <div className="card-image w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shrink-0">
            <img 
              src="src/assets/2.png" 
              alt="Kingswood Friends" 
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>
    
        {/* --- BLOCK 3: A/L (Text Left, Image Right) --- */}
        <div className="about-card w-full bg-[#D4E2FF] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-stretch gap-8 mb-12 shadow-sm">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pr-0 md:pr-8">
            <h3 className="card-inner-text text-black text-4xl md:text-[2.75rem] font-medium tracking-tight">
              2023 - 2024
            </h3>
            <p className="card-inner-text text-gray-600 text-xl md:text-[1.25rem] leading-[1.6] font-medium">
              I worked for 6 months at SriLankan Airlines as a Checking Agent. During this time, I was responsible for assisting passengers, handling check-in procedures, and supporting airport operations.</p>
          </div>
          <div className="card-image w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shrink-0">
            <img 
              src="src/assets/srilankan.png" 
              alt="SriLankan Airlines" 
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>

        {/* --- BLOCK 4: University (Image Left, Text Right) --- */}
        <div className="about-card w-full bg-[#D4E2FF] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row-reverse justify-between items-stretch gap-8 mb-16 shadow-sm">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 pl-0 md:pl-8">
            <h3 className="card-inner-text text-black text-4xl md:text-[2.75rem] font-medium tracking-tight">
              2024 - Present
            </h3>
            <p className="card-inner-text text-gray-600 text-xl md:text-[1.25rem] leading-[1.6] font-medium">
              I am currently pursuing my undergraduate studies at the Sabaragamuwa University of Sri Lanka, exploring my passions for machine learning, deep learning, and software engineering.
            </p>
          </div>
          <div className="card-image w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shrink-0">
            <img 
              src="src/assets/5.png" 
              alt="Sabaragamuwa University" 
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>

      </div> 
    </section> 
  );
} 