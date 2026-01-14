import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

// Import required modules
import { Autoplay } from 'swiper/modules';

// Import Assets
import amazon from '../../../assets/brands/amazon.png';
import amazonvector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import starpeople from '../../../assets/brands/start-people 1.png';
import brands from '../../../assets/brands/start.png';

const brandLogos = [amazon, amazonvector, casio, moonstar, randstad, starpeople, brands];

const Brands = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Added Text Section */}
        <div className="text-center mb-10">
          <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold mb-2">
            Trusted Partners
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#03373D]">
            We've helped thousands of sales teams
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={2} // Mobile
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // Define breakpoints for responsiveness
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper flex items-center"
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img 
                src={logo} 
                alt="Brand Logo" 
                className="grayscale hover:grayscale-0 transition-all duration-300 h-10 md:h-12 object-contain" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;