import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/about'
import Technologies from '../components/Technologies'
import Projects from "../components/projects"

export default function Home() {
  return (
    <div class="bg-[radial-gradient(circle,_#160028,_#1B0011)] min-h-screen w-screen">  
      <Nav/>
      <Hero/>
      <About/>
      <Technologies/>    
      <Projects/>  
    </div>
  )
}
