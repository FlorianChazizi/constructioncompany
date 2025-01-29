"use client"

import React from 'react'
import Image from "next/image";

import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import ourw1 from "../public/assets/images/ourw1.jpg";

const WhoWeAre = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="py-16 bg-gray-100 flex items-center justify-center" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h2
              className="text-4xl font-mono font-bold text-left text-gray-800 mb-8"
              data-aos="fade-down"
            >
              Λίγα λόγια για εμάς
            </h2>

            <p
              className="text-lg text-gray-700 text-left"
              data-aos="fade-down"
            >
              Oικογένεια Πρίφτη! Mια οικογένεια με πολυετή εμπειρία και βαθιά γνώση στον τομέα της κατασκευής.
              Ειδικευόμαστε στην ανέγερση οικοδομών, προσφέροντας υψηλής ποιότητας κατασκευαστικές υπηρεσίες και εστιάζοντας 
              στην αποτελεσματική και προσεγμένη χρήση σκυροδέματος.
            </p>

            <p
              className="text-lg text-gray-700 text-left"
              data-aos="fade-up"
            >
              Στόχος μας είναι να παραδίδουμε πολυτελή διαμερίσματα που συνδυάζουν αισθητική, 
              λειτουργικότητα και ανθεκτικότητα, καλύπτοντας τις ανάγκες και τις προσδοκίες των πελατών μας.
            </p>

            <p
              className="text-lg text-gray-700 text-left"
              data-aos="fade-up"
            >
              Με πάθος για την τελειότητα και σεβασμό στις αξίες που μας κληροδότησαν οι προηγούμενες γενιές,
              συνεχίζουμε να δημιουργούμε χώρους που δεν είναι απλώς κατοικίες, αλλά πραγματικά σπίτια.
            </p>

            <p
              className="text-lg text-gray-700 text-left"
              data-aos="fade-up"
            >
              Εμπιστευθείτε μας για να κάνουμε το όραμά σας πραγματικότητα.
            </p>
          </div>

          {/* Moving Image/Video Section */}
          <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl" data-aos="fade-left">
              <Image
                src={ourw1}
                alt='PFD Construction'
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;