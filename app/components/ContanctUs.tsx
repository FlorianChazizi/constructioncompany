"use client"
import React from 'react';
import { useEffect } from 'react';
import '../styles/contact-us.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
const ContactUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
    
  return (
    
<section className="bg-white  h-screen flex items-center justify-center" id="contact">
<link rel="canonical" href="https://www.pfdconstruction.gr" />

    <div className="container px-6 py-12 mx-auto">
        <div className="text-center" data-aos="fade-down">
            <span className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Καλέστε μας</span>

            <p className="mt-3 text-gray-500 dark:text-gray-400">Η ομάδα μας θα σας εξυπηρετήσει.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-2" data-aos="fade-up">
            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 cu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                <a className="mt-2 text-blue-500 dark:text-blue-400" href='mailto:francheskaprifti@yahoo.gr'>francheskaprifti@yahoo.gr</a>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 cu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Τηλέφωνο</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Δευτέρα/Παρασκευή από 9 εώς 6.</p>
                <a className="mt-2 text-blue-500 dark:text-blue-400"href='tel:+306955352997'>+30 6955352997</a>
            </div>
        </div>
    </div>
</section>

  );
};

export default ContactUs;
