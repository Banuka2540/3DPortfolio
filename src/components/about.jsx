import React from 'react'
import first from "../assets/1.jpg" 
import second from "../assets/2.png"
import third from "../assets/3.png"
import fourth from "../assets/4.png"
import fifth from "../assets/5.png"

export default function About() {
  return (
    //the about section 
    <section id="about" className="relative py-48">
      {/* the scroll text animation text */}
      <h1 className="px-20 pb-20 pt-16 text-white font-extralight text-7xl font-Poppins leading-tight">
        I’m an undergraduate and currently diving deep into machine learning and deep learning.
        I’m also building responsive websites, experimenting with creative software ideas,
        and learning how to design efficient data pipelines.
      </h1>

      {/* my timeline */}
      <h3 className="text-7xl text-left pl-20 pb-16 pt-64 font-Poppins text-white">2008</h3>
      <div className="flex justify-between items-start px-20 gap-10">
        
        <div className=" w-full max-w-3xl h-[500px]">
          <img src={first} className=" pl-2 w-[800px] h-[500px]" alt="" />
        </div>
        
        <h2 className="text-4xl text-white max-w-xl pb-20 pt-48">
          Started my Education journey from Kingswood College Kandy.
        </h2>
      
      </div>

      <h3 className="text-7xl text-left pl-20 pb-16 pt-64 font-Poppins text-white">2008</h3>
      <div className="flex justify-between items-start px-20 gap-10">
        
        <div className="relative w-full max-w-3xl h-[500px]">
         <img src={second} className="pl-2  w-[800px] h-[500px]" alt="" />
        </div>
        
        <h2 className="text-4xl text-white max-w-xl pb-20 pt-48">
          Started my Education journey from Kingswood College Kandy.
        </h2>
      
      </div>
      
      <h3 className="text-7xl text-left pl-20 pb-16 pt-64 font-Poppins text-white">2008</h3>
      <div className="flex justify-between items-start px-20 gap-10">
        
        <div className="relative w-full max-w-3xl h-[500px]">
          <img src={third} className="pl-2  w-[800px] h-[500px]" alt="" />
        </div>
        
        <h2 className="text-4xl text-white max-w-xl pb-20 pt-48">
          Started my Education journey from Kingswood College Kandy.
        </h2>
      
      </div>

      <h3 className="text-7xl text-left pl-20 pb-16 pt-64 font-Poppins text-white">2008</h3>
      <div className="flex justify-between items-start px-20 gap-10">
        
        <div className="relative w-full max-w-3xl h-[500px]">
         <img src={fourth} className="pl-2  w-[800px] h-[500px]" alt="" />
        </div>
        
        <h2 className="text-4xl text-white max-w-xl pb-20 pt-48">
          Started my Education journey from Kingswood College Kandy.
        </h2>
      
      </div>


      <h3 className="text-7xl text-left pl-20 pb-16 pt-64 font-Poppins text-white">2008</h3>
      <div className="flex justify-between items-start px-20 gap-10">
        
        <div className="relative w-full max-w-3xl h-[500px]">
          <img src={fifth} className="pl-2  w-[800px] h-[500px]" alt="" />
        </div>
        
        <h2 className="text-4xl text-white max-w-xl pb-20 pt-48">
          Started my Education journey from Kingswood College Kandy.
        </h2>
      
      </div>
    </section>
  )
}