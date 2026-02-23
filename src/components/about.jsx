import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import first from "../assets/1.jpg";
import second from "../assets/2.png";
import third from "../assets/3.png";
import fourth from "../assets/4.png";
import fifth from "../assets/5.png";

// Register ScrollTrigger so GSAP knows how to track the scroll
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef();

  const timelineData = [
    { year: "2008", img: first, text: "I'm an undergraduate and currently diving deep into machine learning and deep learning. I'm also" },
    { year: "2019", img: second, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" },
    { year: "2022", img: third, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" },
    { year: "2023", img: fourth, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" },
    { year: "2024", img: fifth, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" }
  ];

  useGSAP(() => {
    // Fade up the main intro text
    gsap.from(".about-intro", {
      scrollTrigger: { trigger: ".about-intro", start: "top 85%" },
      y: 40, opacity: 0, duration: 1.2, ease: "power3.out"
    });

    // Stagger the timeline elements as you scroll
    gsap.utils.toArray(".timeline-row").forEach((row) => {
      gsap.from(row, {
        scrollTrigger: { trigger: row, start: "top 80%" },
        y: 60, opacity: 0, duration: 1, ease: "power3.out"
      });
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative w-full px-[6vw] lg:px-[10vw] py-20 font-Poppins bg-[#0c0307]">
      
      {/* FIXED ALIGNMENT: Strictly left-aligned with proper line-height to match design */}
      <div className="about-intro max-w-5xl mb-24 pt-10 text-left">
        <h1 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3rem] font-medium leading-[1.4] tracking-wide">
          <span className="text-[#d45862]">
            I’m an undergraduate and currently diving deep into machine learning and deep learning. I’m also building responsive websites,
          </span>
          <span className="text-white">
            {' '}experimenting with creative software ideas, and learning how to design efficient data pipelines.
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-row flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <h3 className="text-white font-bold text-4xl md:text-5xl mb-4 tracking-wide">{item.year}</h3>
              <p className="text-[#d45862] text-lg md:text-xl leading-relaxed max-w-lg font-light">{item.text}</p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-start lg:justify-end">
              <img src={item.img} alt={`Timeline ${item.year}`} className="w-full max-w-[550px] h-[250px] md:h-[350px] object-cover rounded-[2rem] bg-white shadow-2xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}