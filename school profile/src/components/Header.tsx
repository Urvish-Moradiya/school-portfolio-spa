import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  setShowInquiryForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, setShowInquiryForm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <i className={`fa-solid fa-graduation-cap text-3xl mr-2 ${isScrolled ? 'text-[#2B2D42]' : 'text-white'}`}></i>
            <span className={`font-bold text-xl ${isScrolled ? 'text-[#2B2D42]' : 'text-white'}`}>International Academy</span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className={`font-medium transition-colors cursor-pointer ${isScrolled ? 'text-[#2B2D42] hover:text-[#FFD23F]' : 'text-white hover:text-[#FFD23F]'}`}>Home</a></li>
              <li><a href="#about" className={`font-medium transition-colors cursor-pointer ${isScrolled ? 'text-[#2B2D42] hover:text-[#FFD23F]' : 'text-white hover:text-[#FFD23F]'}`}>About</a></li>
              <li><a href="#academics" className={`font-medium transition-colors cursor-pointer ${isScrolled ? 'text-[#2B2D42] hover:text-[#FFD23F]' : 'text-white hover:text-[#FFD23F]'}`}>Academics</a></li>
              <li><a href="#campus" className={`font-medium transition-colors cursor-pointer ${isScrolled ? 'text-[#2B2D42] hover:text-[#FFD23F]' : 'text-white hover:text-[#FFD23F]'}`}>Campus Life</a></li>
              <li><a href="#admissions" className={`font-medium transition-colors cursor-pointer ${isScrolled ? 'text-[#2B2D42] hover:text-[#FFD23F]' : 'text-white hover:text-[#FFD23F]'}`}>Admissions</a></li>
              <li><a href="#contact" className={`font-medium transition-colors cursor-pointer ${isScrolled ? 'text-[#2B2D42] hover:text-[#FFD23F]' : 'text-white hover:text-[#FFD23F]'}`}>Contact</a></li>
            </ul>

          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowInquiryForm(true)}
              className="bg-[#FFD23F] hover:bg-[#e6bd38] text-[#002B5B] font-bold rounded-full px-6 py-2 whitespace-nowrap"
            >
              Apply Now
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#002B5B] text-2xl cursor-pointer"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-[#2B2D42] hover:text-[#FFD23F] font-medium transition-colors cursor-pointer">Home</a>
              <a href="#about" className="text-[#2B2D42] hover:text-[#FFD23F] font-medium transition-colors cursor-pointer">About</a>
              <a href="#academics" className="text-[#2B2D42] hover:text-[#FFD23F] font-medium transition-colors cursor-pointer">Academics</a>
              <a href="#campus" className="text-[#2B2D42] hover:text-[#FFD23F] font-medium transition-colors cursor-pointer">Campus Life</a>
              <a href="#admissions" className="text-[#2B2D42] hover:text-[#FFD23F] font-medium transition-colors cursor-pointer">Admissions</a>
              <a href="#contact" className="text-[#2B2D42] hover:text-[#FFD23F] font-medium transition-colors cursor-pointer">Contact</a>
            </nav>
            <div className="mt-4 flex flex-col space-y-4">
              <button
                onClick={() => setShowInquiryForm(true)}
                className="bg-[#FFD23F] hover:bg-[#e6bd38] text-[#002B5B] font-bold rounded-full px-6 py-2 whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;