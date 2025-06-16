import React from 'react';
import useInView from './hooks/useInView';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
}

interface CampusLifeProps {
  campusRef: React.RefObject<HTMLElement>;
  campusGallery: GalleryItem[];
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

const CampusLife: React.FC<CampusLifeProps> = ({ campusRef, campusGallery, activeFilter, setActiveFilter }) => {
  const campusInView = useInView(campusRef);
  const filteredGallery = activeFilter === 'all' ? campusGallery : campusGallery.filter(item => item.category === activeFilter);

  return (
    <section ref={campusRef} id="campus" className={`py-16 bg-[#F5F5F5] transition-all duration-1000 ${campusInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-4">Campus Life</h2>
        <p className="text-center text-[#2B2D42]/80 max-w-3xl mx-auto mb-8">Our state-of-the-art facilities provide the perfect environment for students to learn, grow, and thrive both academically and personally.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`${activeFilter === 'all' ? 'bg-[#002B5B] text-white' : 'text-[#002B5B] border-[#002B5B] border-2'} rounded-full px-6 py-2 whitespace-nowrap cursor-pointer`}
          >
            All Facilities
          </button>
          <button
            onClick={() => setActiveFilter('sports')}
            className={`${activeFilter === 'sports' ? 'bg-[#002B5B] text-white' : 'text-[#002B5B] border-[#002B5B] border-2'} rounded-full px-6 py-2 whitespace-nowrap cursor-pointer`}
          >
            <i className="fa-solid fa-basketball mr-2"></i> Sports
          </button>
          <button
            onClick={() => setActiveFilter('arts')}
            className={`${activeFilter === 'arts' ? 'bg-[#002B5B] text-white' : 'text-[#002B5B] border-[#002B5B] border-2'} rounded-full px-6 py-2 whitespace-nowrap cursor-pointer`}
          >
            <i className="fa-solid fa-palette mr-2"></i> Arts
          </button>
          <button
            onClick={() => setActiveFilter('labs')}
            className={`${activeFilter === 'labs' ? 'bg-[#002B5B] text-white' : 'text-[#002B5B] border-[#002B5B] border-2'} rounded-full px-6 py-2 whitespace-nowrap cursor-pointer`}
          >
            <i className="fa-solid fa-flask mr-2"></i> Labs
          </button>
          <button
            onClick={() => setActiveFilter('events')}
            className={`${activeFilter === 'events' ? 'bg-[#002B5B] text-white' : 'text-[#002B5B] border-[#002B5B] border-2'} rounded-full px-6 py-2 whitespace-nowrap cursor-pointer`}
          >
            <i className="fa-solid fa-calendar-day mr-2"></i> Events
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div key={item.id} className="group relative rounded-lg overflow-hidden shadow-md h-64">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="bg-[#FFD23F] hover:bg-[#e6bd38] text-[#002B5B] font-bold rounded-full px-6 py-2 whitespace-nowrap cursor-pointer">
            Virtual Campus Tour <i className="fa-solid fa-vr-cardboard ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;