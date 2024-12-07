"use client"

import React from 'react'
import Image from 'next/image'
import Building from '../public/assets/images/building.gif'
import Helmet from '../public/assets/images/Helmet.gif'
import Concrete from '../public/assets/images/concrete-pump.gif'

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
      <section className="bg-white py-10  h-auto md:h-screen flex items-center justify-center" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
          <h3 className="text-3xl font-mono font-bold text-center mb-12 text-gray-800" data-aos="fade-down">
            Υπηρεσίες
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
            {/* Card 1 - Residential Construction */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center" data-aos="fade-up">
              <div className="mb-4">
                <Image
                  className="rounded  w-24 h-24 mx-auto service-icon "
                  src={Building}
                  alt="Construction"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Ανεγέρσεις Πολυκατοικιών</h4>
              <p className="text-gray-600">
                Αναλαμβάνουμε την ανέγερση πολυκατοικιών ή οικοδομών από την έκδοση της οικοδομικής άδειας
                μέχρι την ολοκλήρωση και παράδοση των διαμερισμάτων στους ιδιοκτήτες.
              </p>
            </div>

            {/* Card 2 - Commercial Projects */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center" data-aos="fade-up">
              <div className="mb-4">
                <Image
                  className="w-24 h-24 mx-auto service-icon"
                  src={Helmet}
                  alt="Helmet"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Ανακαινίσεις Επιχειρήσεων</h4>
              <p className="text-gray-600">
                Προσφέρουμε ολοκληρωμένες λύσεις ανακαίνισης για επαγγελματικούς χώρους
                και επιχειρήσεις στη Λάρισα και την Αθήνα, προσαρμοσμένες στις ανάγκες σας.
              </p>
            </div>

            {/* Card 3 - Restoration & Remodeling */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center" data-aos="fade-up">
              <div className="mb-4">
                <Image
                  className="w-24 h-24 mx-auto service-icon"
                  src={Concrete}
                  alt="Concrete"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Εργασίες Μπετόν</h4>
              <p className="text-gray-600">
                Εξειδικευόμαστε σε κατασκευές και ενισχύσεις μπετόν, διασφαλίζοντας την
                ανθεκτικότητα και ποιότητα κάθε έργου.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
