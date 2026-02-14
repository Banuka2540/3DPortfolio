import React from 'react'
import Socials from './Socials'

export default function Contact() {
  return (
    <section
      id="contacts"
      className="min-h-screen py-32 flex flex-col justify-center"
    >
      <div className="text-center text-white font-Poppins mb-20">
        <h1 className="text-6xl mb-4">Interested to Collaborate?</h1>
        <h1 className="text-6xl">Connect with me</h1>
      </div>

      <div className="flex justify-center items-start gap-20 px-20">
        
        {/* FORM — real height */}
        <form className="w-[400px] h-[300px] border border-white/20 rounded-xl p-6">
          <p className="text-white/50 text-sm">
            Contact form coming soon
          </p>
        </form>

        <Socials />

      </div>
    </section>
  )
}