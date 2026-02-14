import React from 'react'

export default function Technologies() {
  return (
    <div className='text-center text-white font-Poppins min-h-screen' id='skills'>
      <h1 className='p-6 pb-2 text-6xl'>Tech Stack & Skills</h1>
      <h3 className='pb-10 text-2xl text-gray-200 font-extralight'>These are some technologies that i have worked with during my projects</h3>
      <div className='px-64'>
        <div className='rounded-full flex justify-between gap-2 bg-gradient-to-r from-[#4E0024] to-[#3F001D] text-white px-10 py-3'>
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

      <div className='pt-16 pb-32'>
      <div className='flex justify-center px-32 gap-10'>
        <div className='p-4 bg-gradient-to-b from-[#A603A1] to-[#19001D] m-4 w-48 h-16 rounded-3xl'></div>
        <div className='p-4 bg-gradient-to-b from-[#A603A1] to-[#19001D] bg-black m-4 w-48 h-16 rounded-3xl'></div>
        <div className='p-4 bg-gradient-to-b from-[#A603A1] to-[#19001D] bg-black m-4 w-48 h-16 rounded-3xl'></div>
        <div className='p-4 bg-gradient-to-b from-[#A603A1] to-[#19001D] bg-black m-4 w-48 h-16 rounded-3xl'></div>
      </div>
      </div>
      </div>
  )
}
