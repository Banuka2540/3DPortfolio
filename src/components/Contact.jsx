import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const container = useRef(null);
  const form = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", title: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    emailjs.init("xqgyhRNP_EBAhV1I6");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      tl.from('.contact-title', { y: 30, opacity: 0, delay: 0.2 })
        .from('.contact-card', { y: 40, opacity: 0, duration: 1.2 }, "-=0.6")
        .from('.form-element', { y: 20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.8");
    }, container);

    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send("service_5esnjl2", "template_4hrlhqr", formData)
      .then(
        (res) => { alert("Email sent!"); setFormData({ name: "", email: "", title: "", message: "" }); },
        (err) => { alert("Failed to send email."); console.error(err); }
      );
  };

  return (
    <section ref={container} className="min-h-screen pt-40 px-[6vw] bg-white text-black font-Poppins pb-20 flex flex-col items-center overflow-hidden">
      <h1 className="contact-title text-4xl md:text-5xl font-normal text-center mb-12 tracking-tight">Connect with me.</h1>
      <div className="contact-card w-full max-w-2xl bg-[#4285F4] rounded-3xl p-8 md:p-12 shadow-sm">
        <form ref={form} className="flex flex-col gap-6" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-element flex flex-col gap-2">
              <label htmlFor="name" className="text-white text-sm font-light ml-1">First Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all"/>
            </div>

            <div className="form-element flex flex-col gap-2">
              <label htmlFor="subject" className="text-white text-sm font-light ml-1">Title</label>
              <input type="text" id="subject" name="title" value={formData.title} onChange={handleChange} className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all"/>
            </div>
          </div>

          <div className="form-element flex flex-col gap-2">
            <label htmlFor="email" className="text-white text-sm font-light ml-1">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all"/>
          </div>

          <div className="form-element flex flex-col gap-2">
            <label htmlFor="description" className="text-white text-sm font-light ml-1">Message</label>
            <textarea id="description" name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-white rounded-2xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-300 transition-all resize-none"/>
          </div>

          <div className="form-element flex justify-end mt-4">
            <button type="submit" className="bg-white text-[#4285F4] font-medium py-2.5 px-10 rounded-full hover:bg-gray-100 transition-transform active:scale-95 shadow-sm">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}