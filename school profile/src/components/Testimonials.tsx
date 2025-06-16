import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import useInView from './hooks/useInView';
import 'swiper/swiper-bundle.css';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonialsRef: React.RefObject<HTMLElement>;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonialsRef, testimonials }) => {
  const testimonialsInView = useInView(testimonialsRef);

  return (
    <section ref={testimonialsRef} className={`py-16 bg-[#F5F5F5] transition-all duration-1000 ${testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-4">What Our Community Says</h2>
        <p className="text-center text-[#2B2D42]/80 max-w-3xl mx-auto mb-12">Hear from our parents, students, and alumni about their experiences at International Academy</p>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 h-full bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg">
                <div className="flex justify-center mb-6">
                  <i className="fa-solid fa-quote-left text-4xl text-[#FFD23F]"></i>
                </div>
                <p className="text-[#2B2D42]/80 mb-6 text-center italic">{testimonial.quote}</p>
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-3 object-cover"
                  />
                  <div className="text-center">
                    <div className="font-bold text-[#002B5B]">{testimonial.name}</div>
                    <div className="text-sm text-[#2B2D42]/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;