import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Technologies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const container = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" }
      ]
    },
    {
      title: "Machine Learning / Deep Learning",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" }
      ]
    },
    {
      title: "Cloud & Devops",
      skills: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
        { name: "AZURE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
      ]
    },
    {
      title: "Others",
      skills: [
        { name: "Adobe Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" },
        { name: "Adobe Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" }
      ]
    }
  ];

  const handleNext = () => {
    if (currentIndex < skillCategories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); 
    }
  };

  const currentCategory = skillCategories[currentIndex];

  // --- ANIMATION 1: Runs ONLY ONCE when the page loads ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.next-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.5 } // Delayed slightly so it fades in after the skills
      );
    }, container);

    return () => ctx.revert();
  }, []); // <-- Empty array means this NEVER repeats

  // --- ANIMATION 2: Runs EVERY TIME you click "Next" ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo('.category-pill', 
        { y: -20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo('.skill-item', 
        { x: -30, opacity: 0 }, 
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" },
        "-=0.4" 
      );

    }, container);

    return () => ctx.revert();
  }, [currentIndex]); // <-- Re-runs when the index changes

  return (
    <section ref={container} className="min-h-screen pt-40 px-[8vw] lg:px-[15vw] bg-white text-black font-Poppins pb-20 flex flex-col relative overflow-hidden">
      
      {/* Category Pill Header */}
      <div className="mb-14">
        <div className="category-pill inline-block bg-[#e5e7eb] rounded-full px-8 py-2.5 shadow-sm">
          <h2 className="text-xl md:text-2xl font-medium text-gray-800">
            {currentCategory.title}
          </h2>
        </div>
      </div>

      {/* Skills List */}
      <div className="flex flex-col gap-10 pl-4 md:pl-12 w-full max-w-2xl">
        {currentCategory.skills.map((skill, index) => (
          <div key={index} className="skill-item flex items-center gap-8">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <h3 className="text-[1.35rem] font-light text-gray-700 tracking-wide">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Next Button Container */}
      <div className="mt-auto self-end pt-16">
        <button 
          onClick={handleNext}
          className="next-btn flex items-center gap-2 bg-[#4285F4] hover:bg-[#2b74f0] text-white font-normal text-lg px-8 py-2.5 rounded-full shadow-sm transition-transform active:scale-95"
        >
          Next 
          <span className="text-xl font-light leading-none mb-0.5">{'>'}</span>
        </button>
      </div>

    </section>
  );
}