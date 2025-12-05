import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/about'
import Technologies from '../components/Technologies'


export default function Home() {
  return (
    <div className='scroll-trigger-ready__worm-wrap bg-gradient-to-b from-[#1F0038] to-[#1B0011] w-screen h-max'>
      <Nav/>
      <Hero/>
      <About/>
      <Technologies/>      
    </div>
  )
}
