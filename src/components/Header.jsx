import React from 'react'

export default function Header() {
  return (
    <div>
      <div className = 'px-6 py-4 text-black bg-violet-800'>
        <ul className='flex items-center '>
            <li className='cursor-pointer hover:text-blue-400'>Home</li>
            <li className='cursor-pointer hover:text-blue-400'>About</li>
            <li className='cursor-pointer hover:text-blue-400'>Contact</li>
            <li className='cursor-pointer hover:text-blue-400'>Project</li>
        </ul>
      </div>
    </div>
  )
}
