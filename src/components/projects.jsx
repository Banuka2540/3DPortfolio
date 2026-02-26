import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: "Matrix Calculator",
      description: "Developed a Python-based Matrix Calculator using NumPy to automate complex algebraic computations and visualize data structures.",
      link: "#"
    },
    {
      title: "MNIST Digit Predictor Calculator",
      description: "The app processes uploaded images, automatically resizes them, normalizes pixel values, and predicts the digit using a trained neural network model.",
      link: "#"
    },
    {
      title: "Laptop price predictor",
      description: "Engineered a regression model to estimate laptop market value by preprocessing features such as hardware specifications and physical dimensions.",
      link: "#"
    },
    {
      title: "Sentiment Analysis",
      description: "I recently completed an end-to-end Sentiment Analysis project that identifies whether a user’s review is positive or negative.",
      link: "#"
    },
    {
      title: "Portfolio",
      description: "To showcase graphic elements (fonts, layout, typography) without using meaningful content. Derived from Cicero's 45 BC.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen pt-40 px-[8vw] lg:px-[12vw] bg-white text-black font-Poppins pb-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {projectList.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 md:gap-16 group">
            
            {/* Project Title (Left Side) */}
            <div className="w-full md:w-1/3 flex items-center">
              <h3 className="text-xl md:text-2xl font-normal text-gray-700 leading-tight">
                {project.title}
              </h3>
            </div>

            {/* Blue Info Card (Right Side) */}
            <div className="w-full md:w-2/3 bg-[#4285F4] rounded-2xl p-8 md:p-10 shadow-sm relative flex flex-col justify-between transition-transform hover:shadow-md">
              <p className="text-white text-base md:text-[1.05rem] leading-relaxed font-light mb-8 pr-4">
                {project.description}
              </p>
              
              {/* Link Button */}
              <div className="flex justify-end">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#4285F4] font-medium py-2 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-sm text-center"
                >
                  Link
                </a>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}