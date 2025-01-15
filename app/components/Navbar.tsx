"use client"

import { useState, useEffect } from 'react';
import '../styles/navbar.css';
import Image from "next/image";
import logo from "../public/assets/images/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav
      className={`navigation-bar ${isScrolled ? "scrolled" : ""} ${
        isOpen ? "is-open" : ""
      }`}
    >      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1>
              <Image
                src={logo}
                className="w-14 h-14 rounded-full object-cover"
                height={45}
                width={45}
                alt="PFD CONSTRUCTION"
                title="PFD CONSTRUCTION"
              />
            </h1>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#our-work" className="navlinks">Τα έργα μας</a>
            <a href="#services" className="navlinks">Υπηρεσίες</a>
            <a href="#about" className="navlinks">Ποιοί Ήμαστε</a>
            <a href="#contact" className="navlinks">Επικοινωνία</a>

          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button aria-label="Άνοιγμα μενού"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#our-work" className="block navlinks px-3 py-2 rounded-md text-base font-medium text-center"  onClick={() => setIsOpen(false)}>Τα έργα μας</a>
            <a href="#services" className="block navlinks px-3 py-2 rounded-md text-base font-medium text-center"  onClick={() => setIsOpen(false)}>Υπηρεσίες</a>
            <a href="#about" className="block navlinks px-3 py-2 rounded-md text-base font-medium text-center"  onClick={() => setIsOpen(false)}>Ποιοί Ήμαστε</a>
            <a href="#contact" className="block navlinks px-3 py-2 rounded-md text-base font-medium text-center"  onClick={() => setIsOpen(false)}>Επικοινωνία</a>
          </div>
        </div>
      )}
    </nav>
  );
}
