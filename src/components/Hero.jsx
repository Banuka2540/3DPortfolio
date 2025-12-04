import React from 'react'
import Icon from '../assets/Icon.png'
import Ellipse from '../assets/Ellipse.png'
import Socials from './Socials'

export default function Hero() {
  return (
    <div className='flex p-32 mt-24 text-white justify-normal font-Poppins'>
      <div>
        <h1 className='pb-0 text-6xl'>Hi I’m Yuthila Banuka</h1>
        <h2 className='pb-6 text-xl text-gray-300'>Aspiring ML / DL Engineer</h2>
        <button className='rounded-full w-48 h-12 flex items-center justify-between px-6 bg-gradient-to-r from-[#370035] to-[#2C0052] text-white'>
          <h3 className='p-2 '>View projects </h3>
          <img src={Icon} className='w-4 '/>
        </button>
        <Socials/>
      </div>  
      <div className='pt-0 pl-48'>
        <img src={Ellipse} className='w-96 '/>
      </div>
    </div>
  )
}