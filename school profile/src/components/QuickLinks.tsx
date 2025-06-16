import React from 'react';
import useInView from './hooks/useInView';

interface QuickLink {
  title: string;
  icon: string;
  description: string;
  link: string;
}

interface QuickLinksProps {
  quickLinksRef: React.RefObject<HTMLElement>;
  quickLinks: QuickLink[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ quickLinksRef, quickLinks }) => {
  const quickLinksInView = useInView(quickLinksRef);

  return (
    <section ref={quickLinksRef} id="quick-links" className={`py-16 bg-white transition-all duration-1000 ${quickLinksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-12">Explore Our School</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] cursor-pointer transform hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-[#F5F5F5] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FFD23F] transition-colors duration-300">
                <i className={`${link.icon} text-3xl text-[#002B5B]`}></i>
              </div>
              <h3 className="text-xl font-bold text-center text-[#002B5B] mb-2">{link.title}</h3>
              <p className="text-center text-[#2B2D42]/80">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;