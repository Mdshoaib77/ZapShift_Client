import React from 'react';
import { Truck, Wallet, MapPin, Building2 } from 'lucide-react';

/**
 * HowItWorksSection Component
 * A responsive 4-column feature section built with React and Tailwind CSS.
 */
const HowItWorksSection = () => {
  // Data array for easy maintenance
  const serviceCards = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      Icon: Truck,
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      Icon: Wallet,
    },
    {
      id: 3,
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      Icon: MapPin,
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      Icon: Building2,
    },
  ];

  return (
    <section className="bg-[#f0f2f5] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-[32px] font-bold text-[#0f2d2d] mb-12">
          How it Works
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white p-10 rounded-[32px] shadow-sm flex flex-col items-start transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-8">
                <card.Icon 
                  size={40} 
                  strokeWidth={1.5} 
                  className="text-[#0f2d2d]" 
                />
              </div>

              {/* Text Content */}
              <h3 className="text-[20px] font-bold text-[#0f2d2d] mb-4 leading-tight">
                {card.title}
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;