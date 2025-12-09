import React from 'react'
import Icon from '../assets/Icon.png'
import Socials from './Socials'
import Eclipse from './eclipse'


export default function Hero() {
  return (
    <div className='flex justify-between text-white font-Poppins'>
      <div className='pt-12 pb-0 pl-32 pr-32 mt-24'>
        <h1 className=' text-6xl flex gap-4 justify-around'>Hi I’m 
          <div className='bg-gradient-to-t from-[#B60039] to-[#963600] py-0 px-2 rounded-3xl '>Yuthila Banuka
            </div>
        </h1>

        <h2 className='pb-6 text-xl text-gray-300'>Aspiring ML / DL Engineer</h2>

        <button className='rounded-full w-48 h-12 flex items-center justify-between px-6 bg-gradient-to-r from-[#6E0004] to-[#690038] text-white'>
          <h3 className='p-2 '>View projects </h3>
          <img src={Icon} className='w-4 '/>
        </button>

        <Socials/>
      </div> 
      <Eclipse/>
    </div>
  )
}