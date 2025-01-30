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
      <section className="hero">
        {/* Blurry overlay */}
        <div className="hero-overlay"></div>

        {/* Hero content */}
        <div className="hero-content">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 shine-text" data-aos="fade-down">
            Κάνουμε τα όνειρα σας πραγματικότητα
          </h2>
          <h3 className="text-lg md:text-xl text-white" data-aos="fade-up">
            Φτιάχουμε το σπίτι των ονείρων σας.
          </h3>
          <a href="#contact" className="hero-button" data-aos="fade-up" data-aos-delay="200">
            Επικοινωνια
          </a>        
        </div>
      </section>
    </div>
  )
}

export default Hero;