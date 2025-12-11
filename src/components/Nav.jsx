import React from 'react'
import logo from '../assets/logo.png'

export default function Nav() {
  
  return (
  <div className='nav pb-6  p-7' >  
    <div className="rounded-full max-h-screen h-16 flex items-center justify-between gap-5 pr-32 pl-10 bg-gradient-to-b from-[#4E0024] to-[#3F001D] text-white ">
      <img src={logo} className="w-10 rounded-full" />
        <div className='flex gap-16 font-Cairo'>
          <a className='cursor-pointer hover:text-gray-300' href='./'>Home</a>
          <a className='cursor-pointer hover:text-gray-300' href='#about'>About</a>
          <a className='cursor-pointer hover:text-gray-300' href='#skills'>Skills</a>
          <a className='cursor-pointer hover:text-gray-300' href='#projects' >Projects</a>
          <a className='cursor-pointer hover:text-gray-300' href='#contacts'>Contacts</a>
        </div>
    </div>
  </div>
  )}