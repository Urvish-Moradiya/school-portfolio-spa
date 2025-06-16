import React from 'react';
import useInView from './hooks/useInView';

interface HeroProps {
  heroRef: React.RefObject<HTMLElement>;
}

const Hero: React.FC<HeroProps> = ({ heroRef }) => {
  const heroInView = useInView(heroRef);

  return (
    <section ref={heroRef} className={`relative h-screen pt-16 overflow-hidden transition-opacity duration-1000 ${heroInView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#002B5B]/50 to-[#002B5B]/50 z-10"></div>
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=modern%20international%20school%20campus%20with%20beautiful%20architecture%2C%20students%20walking%20between%20buildings%2C%20lush%20green%20surroundings%2C%20bright%20sunny%20day%2C%20academic%20atmosphere%2C%20diverse%20student%20body%2C%20contemporary%20educational%20environment%20with%20blue%20sky%20and%20perfect%20lighting&width=1920&height=1080&seq=14&orientation=landscape"
          alt="International Academy Campus"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Shaping Global Leaders of Tomorrow</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">An exceptional educational journey combining academic excellence, cultural diversity, and character development.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#FFD23F] hover:bg-[#e6bd38] text-[#002B5B] font-bold text-lg px-8 py-4 rounded-full whitespace-nowrap cursor-pointer">
              <i className="fa-solid fa-play-circle mr-2"></i> Virtual Tour
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-full whitespace-nowrap cursor-pointer">
              <i className="fa-solid fa-download mr-2"></i> Download Brochure
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#quick-links" className="text-white text-2xl cursor-pointer">
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;