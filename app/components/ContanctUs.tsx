"use client"
import React from 'react';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
const ContactUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can set the duration and other settings
      }, []);
    
  return (
    <section id="contact" className="bg-gray-100 py-12">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8" data-aos="fade-down">
            Contact Us
          </h2>
      <div className="container mx-auto px-4 flex justify-center items-center" data-aos="fade-up">

        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">

          <h3 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h3>
          <p className="text-gray-700 mb-4 text-center">
            <strong>Email: </strong>
            <a href="mailto:info@priftcon.com" className="text-blue-500">
              info@priftcon.com
            </a>
          </p>
          <p className="text-gray-700 mb-4 text-center">
            <strong>Phone: </strong>
            <a href="tel:+1234567890" className="text-blue-500">
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-gray-700 mb-4 text-center">
            <strong>Address: </strong>
            123 Main Street, City, Country
          </p>
          <p className="text-gray-700 text-center">
            <strong>Working Hours: </strong>
            Mon - Fri: 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
