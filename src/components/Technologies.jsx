import React from 'react'

export default function Technologies() {
  return (
    <div className='text-center text-white font-Cairo'>
      <h1 className='p-6 pb-2 text-5xl'>Technologies i have used in Projects </h1>
      <h3 className='pb-5 text-xl text-gray-200 font-extralight'>These are some technologies that i have worked with during my projects</h3>
      <div className='pl-64 pr-64'>
        <div className='rounded-full flex justify-between gap-2 bg-[#370238] text-white pl-10 pr-10 pt-3 pb-3'>
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
