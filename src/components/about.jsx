import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type'; // 1. Import the free text splitter!

export default function About() {
  const container = useRef(null);

  const timelineData = [
    { year: "2008", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" },
    { year: "2019", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" },
    { year: "2022", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" },
    { year: "2023", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" },
    { year: "2024", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 2. Break the text into individual words automatically
      const splitText = new SplitType('.about-intro', { types: 'words' });
      
      const tl = gsap.timeline({ 
        defaults: { ease: "power3.out", duration: 1.2 } 
      });

      // 3. Animate the words!
      tl.from(splitText.words, {
        y: 30,
        opacity: 0,
        stagger: 0.03, // This creates the fluid word-by-word wave
        delay: 0.2
      })
      // 4. Stagger in the blue cards
      .from('.about-card', {
        y: 40,
        opacity: 0,
        stagger: 0.1, 
        duration: 0.8
      }, "-=0.8") 
      // 5. Fade up the text inside the cards
      .from('.card-inner-text', {
        y: 15,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6
      }, "-=0.6")
      // 6. Slide up the work experience section
      .from('.work-item', {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8
      }, "-=0.4");

    }, container);

    // Revert animations to prevent Strict Mode bugs
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="min-h-screen pt-40 px-[6vw] lg:px-[8vw] bg-white text-black font-Poppins pb-20 flex justify-center overflow-hidden">
      
      <div className="w-full max-w-screen-xl flex flex-col items-start">
        
        {/* Intro Text - Super clean HTML! SplitType does all the heavy lifting behind the scenes */}
        <h1 className="about-intro text-3xl md:text-5xl lg:text-[3.2rem] font-medium leading-[1.4] text-gray-600 mb-20 w-full max-w-[95%]">
          I’m an undergraduate and currently diving deep into <span className="font-semibold text-black">machine learning</span> and <span className="font-semibold text-black">deep learning</span>. I’m also building responsive websites, experimenting with creative software ideas, and learning how to design efficient data pipelines.
        </h1>

        {/* Blue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 w-full">
          {timelineData.map((item, index) => (
            <div key={index} className="about-card bg-[#4285F4] rounded-3xl p-8 md:p-12 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <h3 className="card-inner-text text-white text-3xl md:text-4xl font-normal mb-4">{item.year}</h3>
              <p className="card-inner-text text-blue-50 text-base md:text-lg leading-relaxed font-light pr-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <div className="w-full">
          <h2 className="work-item text-2xl md:text-3xl font-semibold text-black mb-8">Work Experience</h2>
          
          <div className="work-item flex items-start md:items-center gap-4">
            <div className="w-3.5 h-3.5 rounded-full bg-[#4285F4] shrink-0 mt-1.5 md:mt-0"></div>
            <p className="text-gray-500 text-lg md:text-xl font-normal">
              Worked as a Checking Agent for 6 Months after A/L For Srilankan Airlines
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}