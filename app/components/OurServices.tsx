"use client"

import React from 'react'
import Image from 'next/image'
import wrench from '../public/assets/images/wrench3.png'
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

export const OurServices = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set the duration and other settings
  }, []);

  return (
    <div>
        
               {/* Categories Section */}
               <section className="py-12 bg-gray-100 h-auto md:h-[80vh]" id="services">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
            {/* Card 1 - Residential Construction */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center" data-aos="fade-down">
              <div className="mb-4">
              <Image
                    className="rounded-full w-24 h-24 mx-auto service-icon"
                    src = {wrench}
                    alt = "Hammer"
                 />
              </div>
              <h4 className="text-xl font-bold mb-2">Residential Construction</h4>
              <p className="text-gray-600">
                From custom homes to complete renovations, we bring your dream
                home to life with precision and craftsmanship.
              </p>
            </div>

            {/* Card 2 - Commercial Projects */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center" data-aos="fade-down">
              <div className="mb-4">
                <Image
                    className="rounded-full w-24 h-24 mx-auto service-icon"
                    src = {wrench}
                    alt = "Hammer"
                 />
              </div>
              <h4 className="text-xl font-bold mb-2">Commercial Projects</h4>
              <p className="text-gray-600">
                business needs, on time and within budget.
              </p>
            </div>

            {/* Card 3 - Restoration & Remodeling */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center" data-aos="fade-down">
              <div className="mb-4">
              <Image
                    className="rounded-full w-24 h-24 mx-auto service-icon"
                    src = {wrench}
                    alt = "Hammer"
                 />
              </div>
              <h4 className="text-xl font-bold mb-2">Restoration & Remodeling</h4>
              <p className="text-gray-600">
                Breathing new life into aging structures. Our restoration
                services blend traditional techniques with modern solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
