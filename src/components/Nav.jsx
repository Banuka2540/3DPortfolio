import React from 'react'
import logo from '../assets/logo.png'

export default function Nav() {
  
  return (
  <div className='pb-6 p-7'>  
    <div className="rounded-full w-auto h-16 flex items-center justify-between gap-5 px-6 bg-[#370238] text-white">
      <img src={logo} className="w-10 rounded-full" />
        <ul className='flex gap-12 font-Cairo'>
          <a className='cursor-pointer hover:text-gray-300'>Home</a>
          <a className='cursor-pointer hover:text-gray-300'>About</a>
          <a className='cursor-pointer hover:text-gray-300'>Skills</a>
          <a className='cursor-pointer hover:text-gray-300'>Projects</a>
          <a className='cursor-pointer hover:text-gray-300'>Contacts</a>
        </ul>
    </div>
  </div>
  )}