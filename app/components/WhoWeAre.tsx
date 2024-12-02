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
    <section className="py-16 bg-gray-100 flex items-center justify-center" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-mono font-bold text-left text-gray-800 mb-8"
            data-aos="fade-down"
          >
            Ποιοί είμαστε;
          </h2>

          <p
            className="text-lg text-gray-700 text-left mb-6"
            data-aos="fade-down"
          >
            Είμαστε η οικογένεια Πρίφτη, μια οικογένεια με πολυετή εμπειρία και βαθιά γνώση στον τομέα της κατασκευής. Ειδικευόμαστε στην ανέγερση οικοδομών, προσφέροντας υψηλής ποιότητας κατασκευαστικές υπηρεσίες και εστιάζοντας στην αποτελεσματική και προσεγμένη χρήση σκυροδέματος.
          </p>

          <p
            className="text-lg text-gray-700 text-left mb-6"
            data-aos="fade-up"
          >
            Στόχος μας είναι να παραδίδουμε πολυτελή διαμερίσματα που συνδυάζουν αισθητική, λειτουργικότητα και ανθεκτικότητα, καλύπτοντας τις ανάγκες και τις προσδοκίες των πελατών μας.
          </p>

          <p
            className="text-lg text-gray-700 text-left mb-6"
            data-aos="fade-up"
          >
            Με πάθος για την τελειότητα και σεβασμό στις αξίες που μας κληροδότησαν οι προηγούμενες γενιές, συνεχίζουμε να δημιουργούμε χώρους που δεν είναι απλώς κατοικίες, αλλά πραγματικά σπίτια.
          </p>

          <p
            className="text-lg text-gray-700 text-left"
            data-aos="fade-up"
          >
            Εμπιστευθείτε μας για να κάνουμε το όραμά σας πραγματικότητα.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre