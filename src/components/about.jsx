import React from 'react'
import first from "../assets/1.jpg" 

export default function About() {
  return (
    <section id='about'>
      <h1 className='px-20 pb-10 pt-16 m-1 text-[#ffffff] font-extralight text-7xl font-Poppins text-base/1 '>
        I’m an undergraduate and currently diving deep into machine learning and deep learning. I’m also building responsive websites, experimenting with creative software ideas, and learning how to design efficient data pipelines.
      </h1>
      
      {/* the 2008 section */}
      <h3 className='text-7xl text-left pl-20 pb-10 pt-48 font-Poppins text-white '>2008</h3>
      <div className='text-white gap-2 font-Poppins flex justify-between'>
        <h2 className='text-4xl text-left px-20 mr-32 pb-20'>I’m an undergraduate and currently diving deep into machine learning and deep learning. I’m also </h2>
        <img src={first} className='max-w-2xl max-h-max px-10 -my-32 pb-0'></img>
      </div>

      {/* the 2019 */}
      <h3 className='text-7xl text-right pr-20 pb-40 pt-48 font-Poppins text-white '>2019</h3>
      <div className='text-white gap-2 font-Poppins flex justify-between'>
        <img src={first} className='max-w-2xl max-h-max px-10 -my-32 pb-72'></img>
        <h2 className='text-4xl text-left px-20 mr-32 pb-20'>I’m an undergraduate and currently diving deep into machine learning and deep learning. I’m also </h2>
      </div>
    </section>
    
  )
}
