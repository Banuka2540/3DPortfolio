import React from 'react'

export default function Header() {
  return (
    <div>
      <div className=''>

      </div>
      <div
        className='px-6 py-4 text-white'
        style={{ background: 'linear-gradient(to bottom, #300048, #360037)' }}
      >
        <ul className='flex items-center justify-end gap-6'>
            <li className='cursor-pointer hover:text-blue-400'>Home</li>
            <li className='cursor-pointer hover:text-blue-400'>About</li>
            <li className='cursor-pointer hover:text-blue-400'>Contact</li>
            <li className='cursor-pointer hover:text-blue-400'>Project</li>
        </ul>
      </div>

    </div>
  )
}
