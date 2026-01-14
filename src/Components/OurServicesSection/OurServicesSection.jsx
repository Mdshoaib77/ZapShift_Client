import React from 'react';
import { Truck, Map, ShieldCheck, Briefcase, RefreshCcw, Package } from 'lucide-react';

const OurServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.",
      icon: <Truck size={32} />,
      highlight: false
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description: "We deliver parcels nationwide with home delivery in every district, ensuring products reach customers within 48-73 hours.",
      icon: <Map size={32} />,
      highlight: true // This card has the lime green background
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description: "We also offer customized service with inventory management support, online order tracker and doorstep delivery.",
      icon: <Package size={32} />,
      highlight: false
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <ShieldCheck size={32} />,
      highlight: false
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description: "Customized corporate services which includes warehouse and inventory management support.",
      icon: <Briefcase size={32} />,
      highlight: false
    },
    {
      id: 6,
      title: "Parcel Return",
      description: "With our reverse logistics facility, we allow customers to return their products and packages with on-business-mode management.",
      icon: <RefreshCcw size={32} />,
      highlight: false
    }
  ];

  return (
    <section className="bg-[#03373D] rounded-[32px] py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-white text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-300 text-sm max-w-3xl mx-auto mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle from 
          personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-10 rounded-[40px] flex flex-col items-center text-center transition-all duration-300 ${
                service.highlight 
                ? "bg-[#C6E87A] text-[#03373D]" // Lime Green highlight
                : "bg-white text-[#03373D]"      // Standard white
              }`}
            >
              {/* Icon Circle */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                service.highlight ? "bg-[#B5D669]" : "bg-blue-50"
              }`}>
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${service.highlight ? "text-[#03373D]/80" : "text-gray-500"}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;