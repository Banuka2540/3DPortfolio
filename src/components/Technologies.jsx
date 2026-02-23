import React, { useState } from 'react';

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const categories = [
    "Frontend", "Backend", "Machine Learning", "Deep Learning", 
    "Cloud & Devops", "Others", "Programming", "Media"
  ];
  const mockSkills = Array.from({ length: 12 });

  return (
    <section id="skills" className="w-full px-[6vw] lg:px-[10vw] py-24 font-Poppins bg-[#0c0307]">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-wide">
          Tech Stack & <span className="text-[#d95628]">Skills</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
          These are some technologies that i have worked with during my projects
        </p>
      </div>

      <div className="flex justify-center mb-16 w-full">
        <div className="flex overflow-x-auto w-full max-w-5xl bg-[#33081e] rounded-full px-4 py-2 md:py-3 gap-2 md:gap-6 items-center shadow-lg border border-[#521133] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeTab === category 
                  ? 'text-white font-bold' 
                  : 'text-gray-300 hover:text-white font-normal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
        {mockSkills.map((_, index) => (
          <div 
            key={index} 
            className="w-full h-14 md:h-20 rounded-[1.5rem] bg-gradient-to-b from-[#8c0287] to-[#1f0022] shadow-xl border border-[#a603a1]/20"
          ></div>
        ))}
      </div>
    </section>
  );
} 