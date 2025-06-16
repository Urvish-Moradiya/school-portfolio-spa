import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';
import useInView from './hooks/useInView';
import 'swiper/swiper-bundle.css';

interface AboutProps {
  aboutRef: React.RefObject<HTMLElement>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  const aboutInView = useInView(aboutRef);

  useEffect(() => {
    const statsChart = echarts.init(document.getElementById('statsChart') as HTMLElement);
    const option = {
      animation: false,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['2020', '2021', '2022', '2023', '2024'],
        axisLabel: {
          color: '#2B2D42'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#2B2D42'
        }
      },
      series: [
        {
          name: 'Academic Achievement',
          type: 'bar',
          data: [92, 94, 96, 97, 98],
          itemStyle: {
            color: '#002B5B'
          }
        },
        {
          name: 'Student Satisfaction',
          type: 'bar',
          data: [85, 88, 90, 93, 95],
          itemStyle: {
            color: '#FFD23F'
          }
        }
      ],
      legend: {
        data: ['Academic Achievement', 'Student Satisfaction'],
        bottom: 0,
        textStyle: {
          color: '#2B2D42'
        }
      }
    };
    statsChart.setOption(option);

    const handleResize = () => {
      statsChart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      statsChart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={aboutRef} id="about" className={`py-16 bg-[#F5F5F5] transition-all duration-1000 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <SwiperSlide>
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20international%20students%20collaborating%20in%20modern%20classroom%20with%20digital%20technology%2C%20bright%20lighting%2C%20engaged%20learning%2C%20contemporary%20educational%20setting%2C%20multiple%20ethnicities%2C%20productive%20academic%20environment&width=800&height=600&seq=15&orientation=landscape"
                  alt="Students in classroom"
                  className="w-full h-[400px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://readdy.ai/api/search-image?query=international%20school%20campus%20with%20modern%20architecture%2C%20students%20walking%20between%20buildings%2C%20green%20spaces%2C%20bright%20sunny%20day%2C%20diverse%20student%20body%20in%20uniform%2C%20contemporary%20educational%20facilities&width=800&height=600&seq=16&orientation=landscape"
                  alt="School campus"
                  className="w-full h-[400px] object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://readdy.ai/api/search-image?query=school%20science%20laboratory%20with%20students%20conducting%20experiments%2C%20modern%20equipment%2C%20engaged%20learning%2C%20bright%20well%20equipped%20lab%2C%20diverse%20students%20in%20lab%20coats%2C%20hands%20on%20educational%20experience&width=800&height=600&seq=17&orientation=landscape"
                  alt="Science lab"
                  className="w-full h-[400px] object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">About International Academy</h2>
            <p className="text-lg mb-6">Founded in 1985, International Academy has established itself as a premier educational institution committed to nurturing global citizens who excel academically while developing strong character and cultural awareness.</p>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#002B5B] mb-3">Our Mission</h3>
              <p className="text-[#2B2D42]/80 mb-4">To provide a transformative educational experience that empowers students to become innovative thinkers, compassionate leaders, and responsible global citizens.</p>
              <h3 className="text-xl font-bold text-[#002B5B] mb-3">Our Vision</h3>
              <p className="text-[#2B2D42]/80">To be recognized globally as an institution that sets the standard for educational excellence, cultural integration, and the development of future leaders who positively impact the world.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-[#002B5B]">40+</div>
                <div className="text-sm text-[#2B2D42]/80">Nationalities</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-[#002B5B]">12:1</div>
                <div className="text-sm text-[#2B2D42]/80">Student-Teacher Ratio</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-[#002B5B]">98%</div>
                <div className="text-sm text-[#2B2D42]/80">University Acceptance</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-[#002B5B]">35+</div>
                <div className="text-sm text-[#2B2D42]/80">Years of Excellence</div>
              </div>
            </div>
            <div className="h-[300px]" id="statsChart"></div>
            <button className="bg-[#002B5B] hover:bg-[#00234a] text-white font-bold mt-6 rounded-full px-6 py-2 whitespace-nowrap cursor-pointer">
              Learn More About Us <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;