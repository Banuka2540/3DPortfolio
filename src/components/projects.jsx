import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef(null);

  const projectList = [
    {
      title: "Matrix Calculator",
      description: "Developed a Python-based Matrix Calculator using NumPy to automate complex algebraic computations and visualize data structures .",
      link: "#"
    },
    {
      title: "MNIST Digit Predictor",
      description: "The app processes uploaded images, automatically resizes them, normalizes pixel values, and predicts the digit using a trained neural network model .",
      link: "#"
    },
    {
      title: "Laptop price predictor",
      description: "Laptop Price Predictor that uses Linear Regression as the model. prepossessed the data, split the dataset into training and testing sets, and deployed using Flask.",
      link: "#"
    },
    {
      title: "Sentiment Analysis",
      description: "web application that predicts whether a given text input expresses Positive or Negative sentiment.Built using Python, scikit-learn, and a simple Flask-based web interface.",
      link: "#"
    },
    {
      title: "Portfolio",
      description: "created a clean minimalist portfolio using React js , HTML , CSS and Gsap .",
      link: "#"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.project-item');

      items.forEach((item, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%", 
            toggleActions: "play none none reverse",
          }
        });

        // 1. Box entrance animation 
        tl.fromTo(item, 
          { 
            y: 60, 
            opacity: 0, 
            scale: 0.95 
          }, 
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power4.out", 
            delay: index % 2 === 0 ? 0 : 0.15 
          }
        )
        // 2. Inner text and button animation
        .fromTo(item.querySelectorAll('.inner-anim'),
          { 
            y: 20, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.15, 
            ease: "power3.out" 
          },
          0.8 
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="projects" className="min-h-screen pt-32 pb-40 px-[6vw] lg:px-[8vw] bg-white text-black font-Poppins overflow-hidden flex justify-center">
      <div className="w-full max-w-screen-xl flex flex-col items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full">
          
          {projectList.map((project, index) => (
            <div key={index} className="project-item flex flex-col items-center w-full">
              
              <h3 className="text-[1.5rem] md:text-[1.75rem] font-medium text-black mb-6 text-center">
                {project.title}
              </h3>

              {/* CHANGED: Removed the hover classes (hover:-translate-y-2 hover:shadow-...) */}
              <div className="bg-[#D4E2FF] rounded-[2rem] p-8 md:p-12 w-full flex flex-col items-center justify-between text-center min-h-[300px]">
                
                <p className="inner-anim text-gray-500 text-[1.05rem] md:text-[1.15rem] leading-[1.6] mb-8 max-w-[95%]">
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inner-anim bg-[#4A8BF5] text-white text-[1.1rem] font-medium py-2.5 px-16 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Link
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}