import React from 'react';
import { MapPin, ShieldCheck, Headphones } from 'lucide-react';

const FeaturesListSection = () => {
  const features = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      icon: <MapPin size={48} className="text-[#03373D]" strokeWidth={1} />,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      icon: <ShieldCheck size={48} className="text-[#03373D]" strokeWidth={1} />,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      icon: <Headphones size={48} className="text-[#03373D]" strokeWidth={1} />,
    }
  ];

  return (
    <section className="bg-[#f3f4f6] py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {features.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm"
          >
            {/* Left Side: Icon/Illustration Area */}
            <div className="w-full md:w-1/3 flex justify-center items-center">
              <div className="p-6 bg-slate-50 rounded-2xl">
                {/* I'm using Lucide icons here, but you can replace these with your custom PNG illustrations */}
                {item.icon}
              </div>
            </div>

            {/* Middle: Dashed Divider (Hidden on mobile) */}
            <div className="hidden md:block h-24 border-l-2 border-dashed border-gray-300"></div>

            {/* Right Side: Content */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-[#03373D] text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom decorative dashed line as seen in image */}
      <div className="max-w-5xl mx-auto mt-12 border-t-2 border-dashed border-[#03373D]/30"></div>
    </section>
  );
};

export default FeaturesListSection;