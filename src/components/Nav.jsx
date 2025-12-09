import React from 'react'
import logo from '../assets/logo.png'

export default function Nav() {
  
  return (
  <div className='nav pb-6  p-7' >  
    <div className="rounded-full max-h-screen h-16 flex items-center justify-between gap-5 pr-32 pl-10 bg-gradient-to-b from-[#4E0024] to-[#3F001D] text-white ">
      <img src={logo} className="w-10 rounded-full" />
        <div className='flex gap-16 font-Cairo'>
          <a className='cursor-pointer hover:text-gray-300'>Home</a>
          <a className='cursor-pointer hover:text-gray-300'>About</a>
          <a className='cursor-pointer hover:text-gray-300'>Skills</a>
          <a className='cursor-pointer hover:text-gray-300'>Projects</a>
          <a className='cursor-pointer hover:text-gray-300'>Contacts</a>
        </div>
    </div>
  </div>
  )}