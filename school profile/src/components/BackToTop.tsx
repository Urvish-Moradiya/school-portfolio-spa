import React from 'react';

const BackToTop: React.FC = () => {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#002B5B] text-white flex items-center justify-center shadow-lg hover:bg-[#FFD23F] hover:text-[#002B5B] transition-colors cursor-pointer z-40"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
};

export default BackToTop;