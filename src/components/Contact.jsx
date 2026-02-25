import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen pt-40 px-[6vw] bg-white text-black font-Poppins pb-20 flex flex-col items-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-normal text-center mb-12 tracking-tight">
        Connect with me.
      </h1>

      {/* Contact Form Card */}
      <div className="w-full max-w-2xl bg-[#4285F4] rounded-2xl p-8 md:p-12 shadow-sm">
        <form className="flex flex-col gap-6">
          
          {/* First and Last Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-light ml-1">First name</label>
              <input 
                type="text" 
                className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-light ml-1">Last name</label>
              <input 
                type="text" 
                className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
          </div>

          {/* Email field */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-light ml-1">Email</label>
            <input 
              type="email" 
              className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            />
          </div>

          {/* Description / Message field */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-light ml-1">Description</label>
            <textarea 
              rows="5"
              className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button 
              type="submit"
              className="bg-white text-[#4285F4] font-medium py-2.5 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
      
    </section>
  );
}