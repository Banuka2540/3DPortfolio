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
    <main className="relative bg-[radial-gradient(circle,_#160028,_#1B0011)] min-h-screen">

      {/* SmoothSmoother wrapper */}
      <div ref={wrapperRef} className="smooth-wrapper h-screen overflow-hidden bg-[#160028]">

        {/* SmoothSmoother content */}
        <div ref={contentRef} className="smooth-content relative z-10 bg-[#160028]">

          {/* Overlay image inside content so it scrolls properly */}
          <img
            src={overlay}
            className="absolute inset-0 w-full h-full object-cover opacity-5"
            alt=""
          />

          {/* Sections */}
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