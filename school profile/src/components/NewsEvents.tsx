import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import useInView from './hooks/useInView';
import 'swiper/swiper-bundle.css';

interface NewsEvent {
  date: string;
  category: string;
  title: string;
  image: string;
  excerpt: string;
}

interface NewsEventsProps {
  newsRef: React.RefObject<HTMLElement>;
  newsEvents: NewsEvent[];
}

const NewsEvents: React.FC<NewsEventsProps> = ({ newsRef, newsEvents }) => {
  const newsInView = useInView(newsRef);

  return (
    <section ref={newsRef} id="news" className={`py-16 bg-white transition-all duration-1000 ${newsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#002B5B] mb-2">News & Events</h2>
            <p className="text-[#2B2D42]/80">Stay updated with the latest happenings at our school</p>
          </div>
          <a href="#" className="text-[#002B5B] font-semibold hover:text-[#FFD23F] transition-colors mt-4 md:mt-0 cursor-pointer">
            View All News <i className="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {newsEvents.map((news, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden h-full hover:shadow-lg transition-shadow bg-white rounded-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-[#FFD23F] text-[#002B5B] text-xs font-bold px-2 py-1 rounded">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#2B2D42]/60 mb-2">{news.date}</div>
                    <h3 className="text-xl font-bold text-[#002B5B] mb-3">{news.title}</h3>
                    <p className="text-[#2B2D42]/80 mb-4">{news.excerpt}</p>
                    <a href="#" className="text-[#002B5B] font-semibold hover:text-[#FFD23F] transition-colors inline-flex items-center cursor-pointer">
                      Read More <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;