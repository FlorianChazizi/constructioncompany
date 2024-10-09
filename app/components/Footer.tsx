"use client"

import React from 'react';
import {  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/footer.css'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Footer Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We are a leading construction company dedicated to building the future while restoring the past. Our
            mission is to provide top-quality construction services for both residential and commercial projects.
          </p>
        </div>
        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:underline">
                Our Work
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Phone: +30 123 456 7890</li>
            <li>Email: info@priftcon.com</li>
            <li>Address: 1234 Construction St, Athens, Greece</li>
          </ul>
          <div className="mt-4 flex space-x-5">
          <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 social-media-icon"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 social-media-icon"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/pfdconstruction/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 social-media-icon"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700  social-media-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PriftCon. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed by PriftCon Team
        </p>
      </div>
    </div>
  </footer>
  )
}
