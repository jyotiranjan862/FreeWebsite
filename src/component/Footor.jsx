import React from "react";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Add animations on component mount using AOS library (Optional for better control)
    import("aos").then(AOS => {
      AOS.init({ duration: 1000 });
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-600 to-pink-500 text-white py-12 mt-16">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Logo and Info */}
        <div data-aos="fade-up" className="flex flex-col items-center md:items-start">
        <img 
        src="../publi/logo.png"  // Path to your logo in the public folder
        alt="Company Logo"
        className="w-24 h-24 mb-4 transform transition-transform hover:scale-110" 
      />

          <p className="text-lg font-semibold">SherlockStudio</p>
          <p className="text-sm text-gray-300 mt-2">
            We specialize in VR Realistate,Gamimg And Education.
          </p>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" className="flex flex-col">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-300 hover:text-white transition-colors">
              <a href="mailto:contact@sherlockstudio.com">contact@sherlockstudio.com</a>
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-colors">
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-colors">
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                123 Business St, Suite 101, City, Country
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" className="flex flex-col">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li className="text-sm text-gray-300 hover:text-white transition-colors">
              <a href="/about">About Us</a>
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-colors">
              <a href="/services">Services</a>
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-colors">
              <a href="/contact">Contact</a>
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-colors">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div data-aos="fade-up" className="flex flex-col">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-square text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-300"> 
          &copy; {new Date().getFullYear()} SherLock Studio. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
