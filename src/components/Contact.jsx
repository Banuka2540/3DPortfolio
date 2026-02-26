import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({ 
        defaults: { ease: "power3.out", duration: 1 } 
      });

      // 1. Slide up the main title
      tl.from('.contact-title', {
        y: 30,
        opacity: 0,
        delay: 0.2
      })
      // 2. Slide up the blue card container
      .from('.contact-card', {
        y: 40,
        opacity: 0,
        duration: 1.2
      }, "-=0.6") // Overlap with title
      // 3. Stagger the individual form fields and button inside the card
      .from('.form-element', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      }, "-=0.8"); // Start while the blue card is still sliding up

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="min-h-screen pt-40 px-[6vw] bg-white text-black font-Poppins pb-20 flex flex-col items-center overflow-hidden">
      
      {/* Title - Added 'contact-title' */}
      <h1 className="contact-title text-4xl md:text-5xl font-normal text-center mb-12 tracking-tight">
        Connect with me.
      </h1>

      {/* Contact Form Card - Added 'contact-card' */}
      <div className="contact-card w-full max-w-2xl bg-[#4285F4] rounded-3xl p-8 md:p-12 shadow-sm">
        <form className="flex flex-col gap-6">
          
          {/* First and Last Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Added 'form-element' to each field container */}
            <div className="form-element flex flex-col gap-2">
              <label className="text-white text-sm font-light ml-1">First name</label>
              <input 
                type="text" 
                className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
            <div className="form-element flex flex-col gap-2">
              <label className="text-white text-sm font-light ml-1">Last name</label>
              <input 
                type="text" 
                className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
          </div>

          {/* Email field */}
          <div className="form-element flex flex-col gap-2">
            <label className="text-white text-sm font-light ml-1">Email</label>
            <input 
              type="email" 
              className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            />
          </div>

          {/* Description / Message field */}
          <div className="form-element flex flex-col gap-2">
            <label className="text-white text-sm font-light ml-1">Description</label>
            <textarea 
              rows="5"
              className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-element flex justify-end mt-4">
            <button 
              type="submit"
              className="bg-white text-[#4285F4] font-medium py-2.5 px-10 rounded-full hover:bg-gray-100 transition-transform active:scale-95 shadow-sm"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
      
    </section>
  );
}