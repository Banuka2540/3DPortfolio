import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/about'
import Technologies from '../components/Technologies'
import Projects from "../components/projects"
import Contacts from '../components/Contact'
import overlay from '../assets/overlay.jpg'


export default function Home() {
  return (
    <div class="relative bg-[radial-gradient(circle,_#160028,_#1B0011)] min-h-full w-screen">  
    <div><img src={overlay} className='z-0 absolute inset-0 w-full h-full object-cover opacity-5'></img></div>
    <div className='relative z-10'>
      <Nav/>
      <Hero/>
      <About/>
      <Technologies/>    
      <Projects/>  
      <Contacts/>
    </div>
    </div>
  )
}
