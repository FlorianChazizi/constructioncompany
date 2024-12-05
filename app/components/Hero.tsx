"use client"
import React from 'react'
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

import '../styles/hero.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div>
      <section className="relative block w-full h-[100vh] text-white items-center justify-center hero">
        <div className="flex items-center justify-center h-full">
          <div className="text-center hero-content ">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 hero-content shine-text" data-aos="fade-down">
              Building the Future, Restoring the Past
            </h2>
            <h3 className="text-lg md:text-xl " data-aos="fade-up">
              Quality construction you can trust.
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero