import React, { useLayoutEffect, useRef } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/about'
import Technologies from '../components/Technologies'
import Projects from "../components/projects"
import Contacts from '../components/Contact'
import overlay from '../assets/overlay.jpg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Home() {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  useLayoutEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1
    })
    return () => smoother.kill()
  }, [])



  return (
    <main className="relative bg-[radial-gradient(circle,_#160028,_#1B0011)] min-h-screen min-w-max">

      <img
        src={overlay}
        className="z-0 absolute inset-0 h-screen w-screen object-cover opacity-5"
        alt=""
      />
      <div ref={wrapperRef}>
        <div ref={contentRef} className="relative z-10 overflow-x-hidden">

          <Nav />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contacts />

        </div>
      </div>

    </main>
  )
}