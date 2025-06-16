import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-12 bg-[#FFD23F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#002B5B] mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-[#002B5B]/80">Stay updated with the latest news, events, and announcements</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-80 border border-white focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] rounded-md p-2 bg-white text-sm"
            />
            <button className="bg-[#002B5B] hover:bg-[#00234a] text-white font-bold rounded-full px-6 py-2 whitespace-nowrap cursor-pointer">
              Subscribe <i className="fa-solid fa-paper-plane ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;