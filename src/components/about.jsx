import React from 'react'
import first from "../assets/1.jpg" 

export default function About() {
  return (
    <section
      id="about"
      className="relative py-48"
    >
      <h1 className="px-20 pb-20 pt-16 text-white font-extralight text-7xl font-Poppins leading-tight">
        I’m an undergraduate and currently diving deep into machine learning and deep learning.
        I’m also building responsive websites, experimenting with creative software ideas,
        and learning how to design efficient data pipelines.
      </h1>

      {/* 2019 */}
      <h3 className="text-7xl text-right pr-20 pb-32 pt-32 font-Poppins text-white">
        2019
      </h3>

      <div className="flex justify-between items-start px-20 gap-16">
        
        {/* IMAGE CONTAINER CREATES REAL HEIGHT */}
        <div className="relative w-full max-w-2xl h-[500px]">
          <img
            src={first}
            className="absolute top-0 left-0 w-full transform -translate-y-32"
            alt=""
          />
        </div>

        <h2 className="text-4xl text-white max-w-xl pb-20">
          I’m an undergraduate and currently diving deep into machine learning and deep learning.
        </h2>

      </div>
    </section>
  )
}