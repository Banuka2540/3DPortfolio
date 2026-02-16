import React from 'react'
import first from "../assets/1.jpg" 

export default function About() {
  return (
    <section id="about" className="relative py-48">
      <h1 className="px-20 pb-20 pt-16 text-white font-extralight text-7xl font-Poppins leading-tight">
        I’m an undergraduate and currently diving deep into machine learning and deep learning.
        I’m also building responsive websites, experimenting with creative software ideas,
        and learning how to design efficient data pipelines.
      </h1>
      
      <div className="flex justify-left p-10">
        <hr className="h-40 w-px bg-gray-400 border-0" />
      </div>
      <h3 className="text-7xl text-right pr-20 pb-32 pt-32 font-Poppins text-white">2008</h3>
      <div className="flex justify-between items-start px-20 gap-16">
        <div className="relative w-full max-w-2xl h-[500px]">
          <img src={first} className="absolute top-0 left-0 w-full transform -translate-y-32" alt="" />
        </div>
        <h2 className="text-4xl text-white max-w-xl pb-20">
          Started my Education journey from Kingswood College Kandy.
        </h2>
      </div>

      <h3 className="text-7xl text-right pr-20 pb-32 pt-32 font-Poppins text-white">2019</h3>
      <div className="flex justify-between items-start px-20 gap-16">
        <div className="relative w-full max-w-2xl h-[500px]">
          <img src={first} className="absolute top-0 left-0 w-full transform -translate-y-32" alt="" />
        </div>
        <h2 className="text-4xl text-white max-w-xl pb-20">
          Did My O/L ' s and Scored 4A's , 4B's and C .
        </h2>
      </div>
      
      <h3 className="text-7xl text-right pr-20 pb-32 pt-32 font-Poppins text-white">2022</h3>
      <div className="flex justify-between items-start px-20 gap-16">
        <div className="relative w-full max-w-2xl h-[500px]">
          <img src={first} className="absolute top-0 left-0 w-full transform -translate-y-32" alt="" />
        </div>
        <h2 className="text-4xl text-white max-w-xl pb-20">
          Did A/L 's in Maths stream and got 3C's and selected to sabaragamuwa university.
        </h2>
      </div>

      <h3 className="text-7xl text-right pr-20 pb-32 pt-32 font-Poppins text-white">2023</h3>
      <div className="flex justify-between items-start px-20 gap-16">
        <div className="relative w-full max-w-2xl h-[500px]">
          <img src={first} className="absolute top-0 left-0 w-full transform -translate-y-32" alt="" />
        </div>
        <h2 className="text-4xl text-white max-w-xl pb-20">
          did a 6 month job in Srilankan Airlines.
        </h2>
      </div>


      <h3 className="text-7xl text-right pr-20 pb-32 pt-32 font-Poppins text-white">2024</h3>
      <div className="flex justify-between items-start px-20 gap-16">
        <div className="relative w-full max-w-2xl h-[500px]">
          <img src={first} className="absolute top-0 left-0 w-full transform -translate-y-32" alt="" />
        </div>
        <h2 className="text-4xl text-white max-w-xl pb-20">
          currently an undergraduate in Sabaragamuwa University.
        </h2>
      </div>
    </section>
  )
}