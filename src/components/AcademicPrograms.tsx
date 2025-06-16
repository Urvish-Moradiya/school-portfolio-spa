import React from 'react';
import useInView from './hooks/useInView';

interface AcademicProgram {
  title: string;
  icon: string;
  description: string;
  grades: string;
  link: string;
}

interface AcademicProgramsProps {
  academicsRef: React.RefObject<HTMLElement>;
  academicPrograms: AcademicProgram[];
}

const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ academicsRef, academicPrograms }) => {
  const academicsInView = useInView(academicsRef);

  return (
    <section ref={academicsRef} id="academics" className={`py-16 bg-white transition-all duration-1000 ${academicsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-4">Academic Excellence</h2>
        <p className="text-center text-[#2B2D42]/80 max-w-3xl mx-auto mb-12">Our comprehensive curriculum is designed to challenge students intellectually while fostering creativity, critical thinking, and a love for lifelong learning.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] group transform hover:scale-105"
            >
              <div className="h-48 bg-[#002B5B] flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-300">
                <i className={`${program.icon} text-7xl text-white`}></i>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#FFD23F] text-[#002B5B] text-sm font-semibold rounded-full mb-4">{program.grades}</span>
                <h3 className="text-xl font-bold text-[#002B5B] mb-2">{program.title}</h3>
                <p className="text-[#2B2D42]/80 mb-6">{program.description}</p>
                <a
                  href={program.link}
                  className="inline-flex items-center text-[#002B5B] font-semibold hover:text-[#FFD23F] transition-colors cursor-pointer"
                >
                  Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-[#FFD23F] hover:bg-[#e6bd38] text-[#002B5B] font-bold rounded-full px-6 py-2 whitespace-nowrap cursor-pointer">
            View Full Curriculum <i className="fa-solid fa-book-open ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;