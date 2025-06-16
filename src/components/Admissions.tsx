import React from 'react';
import useInView from './hooks/useInView';

interface AdmissionsProps {
  admissionsRef: React.RefObject<HTMLElement>;
}

const Admissions: React.FC<AdmissionsProps> = ({ admissionsRef }) => {
  const admissionsInView = useInView(admissionsRef);

  return (
    <section ref={admissionsRef} id="admissions" className={`py-16 bg-white transition-all duration-1000 ${admissionsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Join Our Community</h2>
            <p className="text-lg mb-6">We welcome applications from families who share our commitment to academic excellence and global citizenship. Our admissions process is designed to be transparent and supportive.</p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#FFD23F] flex items-center justify-center shrink-0 mr-4">
                  <i className="fa-solid fa-1 text-[#002B5B] font-bold"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-1">Submit Application</h3>
                  <p className="text-[#2B2D42]/80">Complete our online application form and submit the required documents.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#FFD23F] flex items-center justify-center shrink-0 mr-4">
                  <i className="fa-solid fa-2 text-[#002B5B] font-bold"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-1">Assessment</h3>
                  <p className="text-[#2B2D42]/80">Students participate in academic assessments and interviews appropriate for their age group.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#FFD23F] flex items-center justify-center shrink-0 mr-4">
                  <i className="fa-solid fa-3 text-[#002B5B] font-bold"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002B5B] mb-1">Decision & Enrollment</h3>
                  <p className="text-[#2B2D42]/80">Admissions decisions are communicated within two weeks, followed by the enrollment process.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#002B5B] hover:bg-[#00234a] text-white font-bold rounded-full px-6 py-2 whitespace-nowrap cursor-pointer">
                Apply Now <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
              <button className="border-2 border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B]/10 font-bold rounded-full px-6 py-2 whitespace-nowrap cursor-pointer">
                Download Brochure <i className="fa-solid fa-download ml-2"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20happy%20international%20students%20celebrating%20graduation%2C%20throwing%20caps%20in%20air%2C%20wearing%20graduation%20gowns%20and%20caps%2C%20joyful%20expressions%2C%20school%20campus%20background%2C%20bright%20sunny%20day%2C%20achievement%20celebration&width=800&height=600&seq=18&orientation=landscape"
              alt="Students celebrating graduation"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;