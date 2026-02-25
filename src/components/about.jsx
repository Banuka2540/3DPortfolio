import React from 'react';

export default function About() {
  const timelineData = [
    { year: "2008", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" },
    { year: "2019", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" },
    { year: "2022", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" },
    { year: "2023", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" },
    { year: "2024", text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" }
  ];

  return (
    // We use a flex container to perfectly center the maximum width of the content
    <section className="min-h-screen pt-40 px-[6vw] bg-white text-black font-Poppins pb-20 flex justify-center">
      
      {/* max-w-4xl keeps the text and cards from stretching too far on giant monitors */}
      <div className="w-full max-w-4xl">
        
        {/* Intro Text */}
        <h1 className="text-xl md:text-[1.75rem] lg:text-3xl font-medium leading-[1.6] text-gray-600 mb-16">
          I’m an undergraduate and currently diving deep into <span className="font-semibold text-black">machine learning</span> and <span className="font-semibold text-black">deep learning</span>. I’m also building responsive websites, experimenting with creative software ideas, and learning how to design efficient data pipelines.
        </h1>

        {/* Blue Cards Grid */}
        {/* grid-cols-1 on mobile, grid-cols-2 on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {timelineData.map((item, index) => (
            <div key={index} className="bg-[#4285F4] rounded-2xl p-8 md:p-10 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-white text-3xl md:text-4xl font-normal mb-4">{item.year}</h3>
              <p className="text-blue-50 text-base md:text-[1.05rem] leading-relaxed font-light pr-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-6">Work Experience</h2>
          
          <div className="flex items-center gap-4">
            {/* Custom Blue Bullet Point */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#4285F4] shrink-0"></div>
            <p className="text-gray-500 text-base md:text-lg font-normal">
              Worked as a Checking Agent for 6 Months after A/L For Srilankan Airlines
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}