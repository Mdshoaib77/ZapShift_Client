import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const reviews = [
    { id: 1, name: "Awlad Hossin", role: "Senior Product Designer", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." },
    { id: 2, name: "Rasel Ahmed", role: "CTO", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." },
    { id: 3, name: "Nasir Uddin", role: "CEO", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." },
    { id: 4, name: "Arif Rayhan", role: "Marketing Head", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." },
    { id: 5, name: "Rayhan", role: "Marketing Head", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." },
    { id: 6, name: "maruf Rayhan", role: "Marketing Head", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." },
    { id: 7, name: "Md SHoaib", role: "CEO", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." }
  ];

  return (
    <section className=" py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Top Illustration */}
        <div className="flex justify-center mb-6">
          <svg width="180" height="100" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 90H140V110H80V90Z" stroke="#03373D" strokeWidth="1.5" strokeDasharray="4 4"/>
            <rect x="90" y="60" width="30" height="30" stroke="#03373D" strokeWidth="1.5"/>
            <rect x="120" y="70" width="25" height="20" stroke="#03373D" strokeWidth="1.5"/>
            <path d="M75 110L85 40H95" stroke="#03373D" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="80" cy="110" r="5" fill="#03373D"/>
            <path d="M140 100C160 100 170 85 180 85" stroke="#03373D" strokeWidth="1.5" strokeDasharray="4 4"/>
          </svg>
        </div>

        <h2 className="text-[#03373D] text-[32px] md:text-[40px] font-bold mb-4">
          What our customers are sayings
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-28 leading-relaxed px-4">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-dots-container',
            }}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            className="!overflow-visible"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="max-w-[310px] sm:max-w-[380px]">
                <div className="testimonial-card bg-white p-8 md:p-10 rounded-[40px] text-left h-full flex flex-col justify-between border border-white transition-all duration-700 ease-in-out">
                  <div>
                    <Quote className="text-[#C6E87A] mb-4 opacity-70" size={42} fill="currentColor" style={{ transform: 'rotate(180deg)' }} />
                    <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed mb-10">
                      {review.text}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-dashed border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-[#03373D] rounded-full shrink-0"></div> 
                      <div>
                        <h4 className="font-bold text-[#03373D] text-md">{review.name}</h4>
                        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center mt-14 gap-8">
            <div className="flex items-center gap-6">
              <button className="prev-btn w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:bg-[#03373D] hover:text-white transition-all cursor-pointer">
                <ArrowLeft size={20} />
              </button>

              {/* Custom Dots */}
              <div className="custom-dots-container flex items-center gap-2"></div>

              <button className="next-btn w-12 h-12 rounded-full bg-[#C6E87A] flex items-center justify-center shadow-sm hover:opacity-90 transition-all cursor-pointer">
                <ArrowRight size={20} className="text-[#03373D]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        /* 3D Floating & Sizing Effect */
        .swiper-slide {
          opacity: 0.3;
          transform: scale(0.85) translateY(50px); /* Side cards are lower and smaller */
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }
        
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05) translateY(-25px); /* Active card pops UP and looks 3D */
          z-index: 50;
        }

        /* Shadow applied only to active 3D card */
        .swiper-slide-active .testimonial-card {
          box-shadow: 0 30px 60px -15px rgba(3, 55, 61, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        /* Custom Pagination Styling */
        .custom-dots-container .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #D1D5DB;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-dots-container .swiper-pagination-bullet-active {
          background: #03373D;
          width: 24px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;