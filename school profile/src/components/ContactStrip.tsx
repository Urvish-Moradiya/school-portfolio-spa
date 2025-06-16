import React from 'react';

const ContactStrip: React.FC = () => {
  return (
    <section className="py-10 bg-[#002B5B]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Have Questions?</h2>
            <p className="text-white/80">Our admissions team is here to help you</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex items-center text-white">
              <i className="fa-solid fa-phone text-[#FFD23F] mr-3 text-xl"></i>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-white">
              <i className="fa-solid fa-envelope text-[#FFD23F] mr-3 text-xl"></i>
              <span>admissions@intacademy.edu</span>
            </div>
          </div>
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
      </div>
    </section>
  );
};

export default ContactStrip;