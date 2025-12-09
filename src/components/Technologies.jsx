import React from 'react'

export default function Technologies() {
  return (
    <div className='text-center text-white font-Poppins'>
      <h1 className='p-6 pb-2 text-6xl'>Tech Stack & Skills</h1>
      <h3 className='pb-10 text-2xl text-gray-200 font-extralight'>These are some technologies that i have worked with during my projects</h3>
      <div className='px-64'>
        <div className='rounded-full flex justify-between gap-2 bg-[#370238] text-white px-10 py-3'>
            <a className='cursor-pointer hover:text-gray-300'>Backend</a>
            <a className='cursor-pointer hover:text-gray-300'>Frontend</a>
            <a className='cursor-pointer hover:text-gray-300'>Machine Learning</a>
            <a className='cursor-pointer hover:text-gray-300'>Deep Learning</a>
            <a className='cursor-pointer hover:text-gray-300'>Cloud & Devops</a>
            <a className='cursor-pointer hover:text-gray-300'>Programming</a>
            <a className='cursor-pointer hover:text-gray-300'>Media</a>
            <a className='cursor-pointer hover:text-gray-300'>Others</a>
        </div>
      </div>
    </div>
  )
}
