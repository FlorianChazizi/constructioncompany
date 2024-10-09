"use client"

import React from 'react'

import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';


const WhoWeAre = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can set the duration and other settings
      }, []);

    return (
        <section className="py-12 h-[75vh] bg-gray-100 flex items-center justify-center" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8" data-aos="fade-down">Who We Are</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-6" data-aos="fade-down">
              We are a team of passionate builders dedicated to crafting high-quality constructions that stand the test of time. From modern innovations to timeless restorations, we bring expertise and dedication to every project.
            </p>
            <p className="text-lg text-gray-700 text-center" data-aos="fade-down">
              Our mission is to build spaces that reflect your vision and enhance your everyday life.
            </p>
          </div>
        </div>
      </section>
      );
    };

export default WhoWeAre