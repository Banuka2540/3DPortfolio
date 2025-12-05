import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/about'
import Technologies from '../components/Technologies'


export default function Home() {
  return (
    
    <div className='bg-gradient-to-b from-[#1F0038] to-[#1B0011] w-auto h-auto'>
      <Nav/>
      <Hero/>
      <About/>
      <Technologies/>      
    </div>
  )
}
