import React from 'react'
import Socials from './Socials'

export default function Contact() {
  return (
    <div id='contacts'>
        <div className='text-center text-white font-Poppins'>
        <h1 className='p-6 pb-2 text-6xl'>Interest to Collaborate ? </h1>
        <h1 className='p-6 pb-2 text-6xl'>Connect with me </h1>      
        </div>
        <div className='flex justify-center p-10 '>
            <Socials/>
        </div>
    </div>
    
  )
}
