"use client"

import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import '../styles/footer.css'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Footer Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Σχετικά με εμάς</h3>
          <p className="text-sm">
          Στόχος μας είναι να παραδίδουμε πολυτελή διαμερίσματα που συνδυάζουν αισθητική, λειτουργικότητα και ανθεκτικότητα, καλύπτοντας τις ανάγκες και τις προσδοκίες των πελατών μας.
          </p>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#services" className="hover:underline">
                Υπηρεσίες
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:underline">
                Τα Projects μας
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Η εταιρία
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Επικοινωνία
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Επικοινωνία</h3>
          <ul className="text-sm space-y-2">
            <li>Τηλέφωνο: +30 6955352997</li>
            <li>Email: </li>
            <li>Διεύθυνση: Θεοχάρη 26, Λάρισα 413 35 </li>
          </ul>
          <div className="mt-4 flex space-x-5">
          {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 social-media-icon"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a> */}
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 social-media-icon"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a> */}
              <a
                href="https://www.instagram.com/pfdconstruction/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 social-media-icon"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700  social-media-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PFD Construction. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed by Florian Chazizi
        </p>
      </div>
    </div>
  </footer>
  )
}
