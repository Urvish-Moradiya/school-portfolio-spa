import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B2D42] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <i className="fa-solid fa-graduation-cap text-[#FFD23F] text-3xl mr-2"></i>
              <span className="text-white font-bold text-xl">International Academy</span>
            </div>
            <p className="text-white/70 mb-6">Empowering students to become global citizens through academic excellence and cultural awareness.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD23F] hover:text-[#002B5B] transition-colors cursor-pointer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD23F] hover:text-[#002B5B] transition-colors cursor-pointer">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD23F] hover:text-[#002B5B] transition-colors cursor-pointer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFD23F] hover:text-[#002B5B] transition-colors cursor-pointer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#FFD23F]"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#academics" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Academics</a></li>
              <li><a href="#campus" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Campus Life</a></li>
              <li><a href="#admissions" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Admissions</a></li>
              <li><a href="#news" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">News & Events</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Programs
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#FFD23F]"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Elementary School</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Middle School</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">High School</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">International Baccalaureate</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Summer Programs</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Language Immersion</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FFD23F] transition-colors cursor-pointer">Arts & Athletics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Contact Information
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#FFD23F]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot text-[#FFD23F] mt-1 mr-3"></i>
                <span className="text-white/70">123 Education Avenue, Academic District<br />Cambridge, MA 02138, USA</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone text-[#FFD23F] mr-3"></i>
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-[#FFD23F] mr-3"></i>
                <span className="text-white/70">info@intacademy.edu</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-clock text-[#FFD23F] mr-3"></i>
                <span className="text-white/70">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center space-x-4">
              <i className="fa-brands fa-cc-visa text-2xl text-white/70"></i>
              <i className="fa-brands fa-cc-mastercard text-2xl text-white/70"></i>
              <i className="fa-brands fa-cc-paypal text-2xl text-white/70"></i>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/70 text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2025 International Academy. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          <div className="text-white/70 text-sm text-center md:text-right">
            <span>Last Updated: June 13, 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;