import React from 'react';
import useInView from './hooks/useInView';

interface ContactProps {
  contactRef: React.RefObject<HTMLElement>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const contactInView = useInView(contactRef);

  return (
    <section ref={contactRef} id="contact" className={`py-16  bg-[#F5F5F5] transition-all duration-1000 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Get In Touch</h2>
            <p className="text-[#2B2D42]/80 mb-8">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2B2D42] mb-1">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] rounded-md p-2 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2B2D42] mb-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] rounded-md p-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#2B2D42] mb-1">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] rounded-md p-2 text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2B2D42] mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full rounded-md border border-[#002B5B]/20 focus:border-[#002B5B] focus:ring-1 focus:ring-[#002B5B] p-3 text-sm"
                ></textarea>
              </div>
              <button className="bg-[#002B5B] hover:bg-[#00234a] text-white font-bold rounded-full px-6 py-2 whitespace-nowrap cursor-pointer">
                Send Message <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold text-[#002B5B] mb-6">Visit Our Campus</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#FFD23F] flex items-center justify-center shrink-0 mr-4">
                    <i className="fa-solid fa-location-dot text-[#002B5B]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002B5B] mb-1">Address</h4>
                    <p className="text-[#2B2D42]/80">123 Education Avenue, Academic District<br />Cambridge, MA 02138, USA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#FFD23F] flex items-center justify-center shrink-0 mr-4">
                    <i className="fa-solid fa-clock text-[#002B5B]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002B5B] mb-1">Office Hours</h4>
                    <p className="text-[#2B2D42]/80">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 12:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#FFD23F] flex items-center justify-center shrink-0 mr-4">
                    <i className="fa-solid fa-phone text-[#002B5B]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002B5B] mb-1">Contact</h4>
                    <p className="text-[#2B2D42]/80">Phone: +1 (555) 123-4567<br />Email: info@intacademy.edu</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center bg-[#002B5B]/10">
                  <div className="text-center">
                    <i className="fa-solid fa-map-location-dot text-4xl text-[#002B5B] mb-2"></i>
                    <p className="text-[#2B2D42]">Interactive Map Would Display Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;