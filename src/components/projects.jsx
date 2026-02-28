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
        gsap.fromTo(item, 
          { 
            y: 60, 
            opacity: 0, 
            scale: 0.95 
          }, 
          {
            scrollTrigger: {
              trigger: item,
              start: "top 85%", // Triggers when the top of the card is 85% down the screen
              toggleActions: "play none none reverse",
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "expo.out",
            // Add a slight delay to the right column for a cascading "stagger" effect
            delay: index % 2 === 0 ? 0 : 0.15 
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="projects" className="min-h-screen pt-32 pb-40 px-[8vw] lg:px-[12vw] bg-[#FAFAFA] font-Poppins overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Exact grid structure from the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {projectList.map((project, index) => (
            <div key={index} className="project-item flex flex-col items-center">
              
              {/* Title exactly as it appears in the image */}
              <h3 className="text-[1.35rem] font-medium text-black mb-5 text-center">
                {project.title}
              </h3>

              {/* White Card with Soft Shadow */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-full flex flex-col items-center justify-between text-center min-h-[260px] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgb(0,0,0,0.12)]">
                
                {/* Description Text */}
                <p className="text-gray-500 text-[1rem] leading-relaxed mb-8">
                  {project.description}
                </p>
                
                {/* Blue Link Button */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#4285F4] text-white text-[1.05rem] font-medium py-2.5 px-12 rounded-full hover:bg-[#3367D6] transition-colors shadow-md hover:shadow-lg"
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