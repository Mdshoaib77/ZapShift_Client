// // // // // // import React from 'react';
// // // // // // import rider from '../../assets/agent-pending.png'
// // // // // // const Rider = () => {
// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     // Form handle logic eikhane hobe
// // // // // //     console.log("Form Submitted");
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-10">
// // // // // //       <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-16">
        
// // // // // //         {/* Header Section */}
// // // // // //         <div className="mb-10">
// // // // // //           <h1 className="text-4xl md:text-5xl font-bold text-[#03373D] mb-4">Be a Rider</h1>
// // // // // //           <p className="text-gray-500 max-w-lg leading-relaxed">
// // // // // //             Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
// // // // // //             From personal packages to business shipments — we deliver on time, every time.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <div className="flex flex-col lg:flex-row gap-12">
          
// // // // // //           {/* Left Side: Form */}
// // // // // //           <div className="flex-1">
// // // // // //             <h2 className="text-2xl font-bold text-[#03373D] mb-6 border-b pb-2 inline-block border-gray-100 w-full">
// // // // // //                 Tell us about yourself
// // // // // //             </h2>
            
// // // // // //             <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              
// // // // // //               {/* Your Name */}
// // // // // //               <div className="form-control">
// // // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Your Name</label>
// // // // // //                 <input type="text" placeholder="Your Name" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#C6E87A]/50 border-gray-200" required />
// // // // // //               </div>

// // // // // //               {/* Driving License Number */}
// // // // // //               <div className="form-control">
// // // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Driving License Number</label>
// // // // // //                 <input type="text" placeholder="Driving License Number" className="input input-bordered w-full rounded-xl border-gray-200" required />
// // // // // //               </div>

// // // // // //               {/* Your Email */}
// // // // // //               <div className="form-control">
// // // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Your Email</label>
// // // // // //                 <input type="email" placeholder="Your Email" className="input input-bordered w-full rounded-xl border-gray-200" required />
// // // // // //               </div>

// // // // // //               {/* Region & District - Grid for 2 column */}
// // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //                 <div className="form-control">
// // // // // //                   <label className="label font-semibold text-[#03373D] text-sm">Your Region</label>
// // // // // //                   <select className="select select-bordered w-full rounded-xl border-gray-200 font-normal text-gray-400">
// // // // // //                     <option disabled selected>Select your Region</option>
// // // // // //                     <option>Dhaka</option>
// // // // // //                     <option>Chittagong</option>
// // // // // //                     <option>Rajshahi</option>
// // // // // //                   </select>
// // // // // //                 </div>
// // // // // //                 <div className="form-control">
// // // // // //                   <label className="label font-semibold text-[#03373D] text-sm">Your District</label>
// // // // // //                   <select className="select select-bordered w-full rounded-xl border-gray-200 font-normal text-gray-400">
// // // // // //                     <option disabled selected>Select your District</option>
// // // // // //                     <option>Bogura</option>
// // // // // //                     <option>Gazipur</option>
// // // // // //                     <option>Comilla</option>
// // // // // //                   </select>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* NID No */}
// // // // // //               <div className="form-control">
// // // // // //                 <label className="label font-semibold text-[#03373D] text-sm">NID No</label>
// // // // // //                 <input type="text" placeholder="NID" className="input input-bordered w-full rounded-xl border-gray-200" required />
// // // // // //               </div>

// // // // // //               {/* Phone Number */}
// // // // // //               <div className="form-control">
// // // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Phone Number</label>
// // // // // //                 <input type="tel" placeholder="Phone Number" className="input input-bordered w-full rounded-xl border-gray-200" required />
// // // // // //               </div>

// // // // // //               {/* Bike Brand & Reg No */}
// // // // // //               <div className="form-control">
// // // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Bike Brand Model and Year</label>
// // // // // //                 <input type="text" placeholder="Bike Brand Model and Year" className="input input-bordered w-full rounded-xl border-gray-200" />
// // // // // //               </div>

// // // // // //               <div className="form-control">
// // // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Bike Registration Number</label>
// // // // // //                 <input type="text" placeholder="Bike Registration Number" className="input input-bordered w-full rounded-xl border-gray-200" />
// // // // // //               </div>

// // // // // //               {/* Tell Us About Yourself */}
// // // // // //               <div className="form-control">
// // // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Tell Us About Yourself</label>
// // // // // //                 <textarea placeholder="Tell Us About Yourself" className="textarea textarea-bordered w-full rounded-xl border-gray-200 h-24"></textarea>
// // // // // //               </div>

// // // // // //               {/* Submit Button */}
// // // // // //               <button type="submit" className="btn bg-[#C6E87A] hover:bg-[#b5d66c] border-none text-[#03373D] font-bold text-lg w-full rounded-xl shadow-md mt-4 transition-all active:scale-[0.98]">
// // // // // //                 Submit
// // // // // //               </button>

// // // // // //             </form>
// // // // // //           </div>

// // // // // //           {/* Right Side: Image Illustration */}
// // // // // //           <div className="flex-1 flex items-center justify-center">
// // // // // //             <div className="relative">
// // // // // //               {/* Place your rider.png here */}
// // // // // //               <img 
// // // // // //                 src="https://i.ibb.co/L9gN2ZJ/rider-illustration.png" 
// // // // // //                 alt="Delivery Rider Illustration" 
// // // // // //                 className="w-full max-w-md object-contain"
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Rider;

// // // // // // import React from 'react'

// // // // // // const Rider = () => {
// // // // // //   return (
// // // // // //     <div>
      
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default Rider


// // // // // import React from 'react';
// // // // // // আপনার দেওয়া পাথ অনুযায়ী ইমেজ ইম্পোর্ট করা হয়েছে
// // // // // import riderImg from '../../assets/agent-pending.png';

// // // // // const Rider = () => {
// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     console.log("Form Submitted");
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-10">
// // // // //       <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-16">
        
// // // // //         {/* Header Section */}
// // // // //         <div className="mb-10">
// // // // //           <h1 className="text-4xl md:text-5xl font-bold text-[#03373D] mb-4">Be a Rider</h1>
// // // // //           <p className="text-gray-500 max-w-lg leading-relaxed">
// // // // //             Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
// // // // //             From personal packages to business shipments — we deliver on time, every time.
// // // // //           </p>
// // // // //         </div>

// // // // //         <div className="flex flex-col lg:flex-row gap-12 items-start">
          
// // // // //           {/* Left Side: Form */}
// // // // //           <div className="flex-1 w-full">
// // // // //             <h2 className="text-2xl font-bold text-[#03373D] mb-6 border-b pb-2 inline-block border-gray-100 w-full">
// // // // //                 Tell us about yourself
// // // // //             </h2>
            
// // // // //             <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              
// // // // //               {/* Your Name */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Your Name</label>
// // // // //                 <input type="text" placeholder="Your Name" className="input input-bordered w-full rounded-xl focus:ring-2 focus:ring-[#C6E87A]/50 border-gray-200" required />
// // // // //               </div>

// // // // //               {/* Driving License Number */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Driving License Number</label>
// // // // //                 <input type="text" placeholder="Driving License Number" className="input input-bordered w-full rounded-xl border-gray-200" required />
// // // // //               </div>

// // // // //               {/* Your Email */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Your Email</label>
// // // // //                 <input type="email" placeholder="Your Email" className="input input-bordered w-full rounded-xl border-gray-200" required />
// // // // //               </div>

// // // // //               {/* Your Region */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Your Region</label>
// // // // //                 <select className="select select-bordered w-full rounded-xl border-gray-200 font-normal text-gray-400">
// // // // //                   <option disabled selected>Select your Region</option>
// // // // //                   <option>Dhaka</option>
// // // // //                   <option>Chittagong</option>
// // // // //                   <option>Rajshahi</option>
// // // // //                 </select>
// // // // //               </div>

// // // // //               {/* Your District */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Your District</label>
// // // // //                 <select className="select select-bordered w-full rounded-xl border-gray-200 font-normal text-gray-400">
// // // // //                   <option disabled selected>Select your District</option>
// // // // //                   <option>Bogura</option>
// // // // //                   <option>Gazipur</option>
// // // // //                   <option>Comilla</option>
// // // // //                 </select>
// // // // //               </div>

// // // // //               {/* NID No */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">NID No</label>
// // // // //                 <input type="text" placeholder="NID" className="input input-bordered w-full rounded-xl border-gray-200" required />
// // // // //               </div>

// // // // //               {/* Phone Number */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Phone Number</label>
// // // // //                 <input type="tel" placeholder="Phone Number" className="input input-bordered w-full rounded-xl border-gray-200" required />
// // // // //               </div>

// // // // //               {/* Bike Brand */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Bike Brand Model and Year</label>
// // // // //                 <input type="text" placeholder="Bike Brand Model and Year" className="input input-bordered w-full rounded-xl border-gray-200" />
// // // // //               </div>

// // // // //               {/* Bike Registration */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Bike Registration Number</label>
// // // // //                 <input type="text" placeholder="Bike Registration Number" className="input input-bordered w-full rounded-xl border-gray-200" />
// // // // //               </div>

// // // // //               {/* Tell Us About Yourself */}
// // // // //               <div className="form-control">
// // // // //                 <label className="label font-semibold text-[#03373D] text-sm">Tell Us About Yourself</label>
// // // // //                 <textarea placeholder="Tell Us About Yourself" className="textarea textarea-bordered w-full rounded-xl border-gray-200 h-24"></textarea>
// // // // //               </div>

// // // // //               {/* Submit Button */}
// // // // //               <button type="submit" className="btn bg-[#C6E87A] hover:bg-[#b5d66c] border-none text-[#03373D] font-bold text-lg w-full rounded-xl shadow-md mt-4 transition-all active:scale-[0.98]">
// // // // //                 Submit
// // // // //               </button>

// // // // //             </form>
// // // // //           </div>

// // // // //           {/* Right Side: Image Illustration */}
// // // // //           <div className="flex-1 flex items-center justify-center lg:sticky lg:top-10">
// // // // //             <img 
// // // // //               src={riderImg} 
// // // // //               alt="Delivery Rider Illustration" 
// // // // //               className="w-full max-w-md md:max-w-lg object-contain animate-pulse-slow"
// // // // //               style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.05))' }}
// // // // //             />
// // // // //           </div>

// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Rider;

// // // // import React from 'react';
// // // // import riderImg from '../../assets/agent-pending.png';

// // // // const Rider = () => {
// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log("Form Submitted");
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 md:p-12">
// // // //       {/* Main Card Container - স্ক্রিনশটের মতো সাদা বড় কার্ড */}
// // // //       <div className="max-w-7xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row p-10 md:p-20 relative">
        
// // // //         {/* Left Side: Content & Form */}
// // // //         <div className="flex-1 z-10">
// // // //           {/* Header */}
// // // //           <div className="mb-12">
// // // //             <h1 className="text-5xl font-bold text-[#03373D] mb-6">Be a Rider</h1>
// // // //             <p className="text-gray-500 text-lg max-w-md leading-relaxed">
// // // //               Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
// // // //               From personal packages to business shipments — we deliver on time, every time.
// // // //             </p>
// // // //           </div>

// // // //           <div className="w-full max-w-xl">
// // // //             <h2 className="text-2xl font-bold text-[#03373D] mb-8 border-b border-gray-100 pb-3">
// // // //               Tell us about yourself
// // // //             </h2>
            
// // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // //               {/* input fields grid */}
// // // //               <div className="grid grid-cols-1 gap-6">
// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">Your Name</label>
// // // //                   <input type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white" />
// // // //                 </div>

// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">Driving License Number</label>
// // // //                   <input type="text" placeholder="Driving License Number" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] bg-white" />
// // // //                 </div>

// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">Your Email</label>
// // // //                   <input type="email" placeholder="Your Email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] bg-white" />
// // // //                 </div>

// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">Your Region</label>
// // // //                   <select className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] bg-white text-gray-400">
// // // //                     <option disabled selected>Select your Region</option>
// // // //                     <option>Dhaka</option>
// // // //                     <option>Chittagong</option>
// // // //                   </select>
// // // //                 </div>

// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">Your District</label>
// // // //                   <select className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] bg-white text-gray-400">
// // // //                     <option disabled selected>Select your District</option>
// // // //                     <option>Bogura</option>
// // // //                   </select>
// // // //                 </div>

// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">NID No</label>
// // // //                   <input type="text" placeholder="NID" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] bg-white" />
// // // //                 </div>

// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">Phone Number</label>
// // // //                   <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] bg-white" />
// // // //                 </div>

// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">Bike Brand Model and Year</label>
// // // //                   <input type="text" placeholder="Bike Brand Model and Year" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] bg-white" />
// // // //                 </div>

// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">Bike Registration Number</label>
// // // //                   <input type="text" placeholder="Bike Registration Number" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] bg-white" />
// // // //                 </div>

// // // //                 <div className="form-control">
// // // //                   <label className="text-sm font-bold text-[#03373D] mb-2">Tell Us About Yourself</label>
// // // //                   <textarea placeholder="Tell Us About Yourself" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] bg-white h-24"></textarea>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Submit Button - ইমেজের মতো হালকা সবুজ */}
// // // //               <button type="submit" className="w-full bg-[#C6E87A] hover:bg-[#b5d66c] py-4 rounded-xl text-[#03373D] font-bold text-lg shadow-lg transition-all active:scale-95">
// // // //                 Submit
// // // //               </button>
// // // //             </form>
// // // //           </div>
// // // //         </div>

// // // //         {/* Right Side: Your Image Illustration */}
// // // //         <div className="hidden lg:flex flex-1 items-center justify-end relative">
// // // //           <div className="w-full max-w-2xl">
// // // //             <img 
// // // //               src={riderImg} 
// // // //               alt="Rider Illustration" 
// // // //               className="w-full h-auto object-contain"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Rider;

// // // import React from 'react';
// // // import riderImg from '../../assets/agent-pending.png';

// // // const Rider = () => {
// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-10">
// // //       <div className="max-w-7xl w-full bg-white rounded-[40px] shadow-sm border border-gray-100 flex flex-col lg:flex-row p-8 md:p-16 gap-10">
        
// // //         {/* বাম পাশ: ফর্ম */}
// // //         <div className="flex-1">
// // //           <div className="mb-10">
// // //             <h1 className="text-5xl font-bold text-[#03373D] mb-4">Be a Rider</h1>
// // //             <p className="text-gray-500 max-w-lg leading-relaxed">
// // //               Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
// // //             </p>
// // //           </div>
// // //           {/* ফর্মের বাকি অংশ আপনার আগের কোড অনুযায়ী থাকবে */}
// // //           <form className="space-y-5">
// // //              {/* inputs... */}
// // //              <button type="submit" className="w-full bg-[#C6E87A] py-4 rounded-xl text-[#03373D] font-bold text-lg">Submit</button>
// // //           </form>
// // //         </div>

// // //         {/* ডান পাশ: আপনার দেওয়া PNG ইমেজ */}
// // //         <div className="flex-1 flex items-center justify-center">
// // //           <img src={riderImg} alt="Rider Illustration" className="w-full max-w-lg object-contain" />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // export default Rider;


// // // import React from 'react'

// // // const Rider = () => {
// // //   return (
// // //     <div>
      
// // //     </div>
// // //   )
// // // }

// // // export default Rider


// // import React from 'react';
// // import riderImg from '../../assets/agent-pending.png';

// // const Rider = () => {
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // ফর্ম হ্যান্ডেল লজিক এখানে হবে
// //     console.log("Form Submitted");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-10">
// //       {/* মেইন সাদা কার্ড কন্টেইনার */}
// //       <div className="max-w-6xl w-full bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-16">
        
// //         {/* হেডার সেকশন */}
// //         <div className="mb-10 text-left">
// //           <h1 className="text-4xl md:text-5xl font-bold text-[#03373D] mb-4">Be a Rider</h1>
// //           <p className="text-gray-500 max-w-2xl leading-relaxed text-sm">
// //             Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
// //           </p>
// //         </div>

// //         <div className="flex flex-col lg:flex-row gap-12 items-start">
          
// //           {/* বাম পাশ: ফর্ম সেকশন */}
// //           <div className="flex-1 w-full">
// //             <h2 className="text-2xl font-bold text-[#03373D] mb-6">Tell us about yourself</h2>
            
// //             <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              
// //               {/* Your Name */}
// //               <div className="form-control">
// //                 <label className="label py-1 text-xs font-bold text-[#03373D]">Your Name</label>
// //                 <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C6E87A] text-sm" />
// //               </div>

// //               {/* Driving License Number */}
// //               <div className="form-control">
// //                 <label className="label py-1 text-xs font-bold text-[#03373D]">Driving License Number</label>
// //                 <input type="text" placeholder="Driving License Number" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C6E87A] text-sm" />
// //               </div>

// //               <div className="border-t border-gray-200 my-2"></div>

// //               {/* Your Region & District (Dropdown style) */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div className="form-control relative">
// //                   <label className="label py-1 text-xs font-bold text-[#03373D]">Your Region</label>
// //                   <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none appearance-none text-gray-400 text-sm">
// //                     <option>Select your Region</option>
// //                   </select>
// //                   <div className="absolute right-3 bottom-3.5 pointer-events-none">
// //                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
// //                   </div>
// //                 </div>
// //                 <div className="form-control relative">
// //                   <label className="label py-1 text-xs font-bold text-[#03373D]">Your District</label>
// //                   <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none appearance-none text-gray-400 text-sm">
// //                     <option>Select your District</option>
// //                   </select>
// //                   <div className="absolute right-3 bottom-3.5 pointer-events-none">
// //                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Email & Phone */}
// //               <div className="form-control">
// //                 <label className="label py-1 text-xs font-bold text-[#03373D]">Your Email</label>
// //                 <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C6E87A] text-sm" />
// //               </div>

// //               {/* NID No */}
// //               <div className="form-control">
// //                 <label className="label py-1 text-xs font-bold text-[#03373D]">NID No</label>
// //                 <input type="text" placeholder="NID" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C6E87A] text-sm" />
// //               </div>

// //               {/* Phone Number */}
// //               <div className="form-control relative">
// //                 <label className="label py-1 text-xs font-bold text-[#03373D]">Phone Number</label>
// //                 <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C6E87A] text-sm" />
// //                 <div className="absolute right-3 bottom-3.5">
// //                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
// //                 </div>
// //               </div>

// //               {/* Bike Details */}
// //               <div className="form-control">
// //                 <label className="label py-1 text-xs font-bold text-[#03373D]">Bike Brand Model and Year</label>
// //                 <input type="text" placeholder="Bike Brand Model and Year" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C6E87A] text-sm" />
// //               </div>

// //               <div className="form-control">
// //                 <label className="label py-1 text-xs font-bold text-[#03373D]">Bike Registration Number</label>
// //                 <input type="text" placeholder="Bike Registration Number" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C6E87A] text-sm" />
// //               </div>

// //               {/* About Yourself */}
// //               <div className="form-control">
// //                 <label className="label py-1 text-xs font-bold text-[#03373D]">Tell Us About Yourself</label>
// //                 <textarea placeholder="Tell Us About Yourself" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C6E87A] text-sm h-20"></textarea>
// //               </div>

// //               {/* সাবমিট বাটন */}
// //               <button type="submit" className="w-full bg-[#D4ED71] hover:bg-[#c5e15a] py-3.5 rounded-lg text-[#03373D] font-bold transition-all shadow-sm mt-2 text-sm">
// //                 Submit
// //               </button>

// //             </form>
// //           </div>

// //           {/* ডান পাশ: ইমেজ */}
// //           <div className="flex-1 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
// //             <img 
// //               src={riderImg} 
// //               alt="Delivery Rider Illustration" 
// //               className="w-full max-w-sm md:max-w-md object-contain"
// //             />
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Rider;

// // import React, { useState } from 'react';
// // import riderImg from '../../assets/agent-pending.png';

// // const Rider = () => {
// //   // বাংলাদেশের জেলা এবং বিভাগ সমুহ
// //   const regions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"];
// //   const districts = [
// //     "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogra", "Brahmanbaria", "Chandpur", "Chattogram",
// //     "Chuadanga", "Comilla", "Cox's Bazar", "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur",
// //     "Gopalganj", "Habiganj", "Jamalpur", "Jessore", "Jhalokati", "Jhenaidah", "Joypurhat", "Khagrachari",
// //     "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura",
// //     "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj",
// //     "Narsingdi", "Natore", "Nawabganj", "Netrakona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh",
// //     "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur",
// //     "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
// //   ];

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Application Submitted Successfully!");
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
// //       {/* মেইন কন্টেইনার - কার্ড ডিজাইন */}
// //       <div className="max-w-7xl w-full bg-white rounded-[45px] shadow-2xl overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row gap-16 relative">
        
// //         {/* বাম পাশ: কন্টেন্ট এবং ফর্ম */}
// //         <div className="flex-1">
// //           <header className="mb-10">
// //             <h1 className="text-5xl font-black text-[#03373D] mb-4 tracking-tight">Be a Rider</h1>
// //             <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
// //               Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
// //             </p>
// //           </header>

// //           <section>
// //             <h2 className="text-2xl font-bold text-[#03373D] mb-8 border-b border-gray-100 pb-4">
// //               Tell us about yourself
// //             </h2>

// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               {/* Name & License */}
// //               <div className="grid grid-cols-1 gap-6">
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-bold text-[#03373D] ml-1">Your Name</label>
// //                   <input required type="text" placeholder="Enter your full name" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 focus:border-[#A3C644] outline-none transition-all placeholder:text-gray-300" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-bold text-[#03373D] ml-1">Driving License Number</label>
// //                   <input required type="text" placeholder="e.g. DK1234567" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 focus:border-[#A3C644] outline-none transition-all placeholder:text-gray-300" />
// //                 </div>
// //               </div>

// //               {/* Email */}
// //               <div className="space-y-2">
// //                 <label className="text-sm font-bold text-[#03373D] ml-1">Your Email</label>
// //                 <input required type="email" placeholder="email@example.com" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 focus:border-[#A3C644] outline-none transition-all placeholder:text-gray-300" />
// //               </div>

// //               {/* Region & District (Bangladesh Data) */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-bold text-[#03373D] ml-1">Your Region</label>
// //                   <select required className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 outline-none appearance-none cursor-pointer">
// //                     <option value="" disabled selected>Select your Region</option>
// //                     {regions.map(r => <option key={r} value={r}>{r}</option>)}
// //                   </select>
// //                 </div>
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-bold text-[#03373D] ml-1">Your District</label>
// //                   <select required className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 outline-none appearance-none cursor-pointer">
// //                     <option value="" disabled selected>Select your District</option>
// //                     {districts.map(d => <option key={d} value={d}>{d}</option>)}
// //                   </select>
// //                 </div>
// //               </div>

// //               {/* NID & Phone */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-bold text-[#03373D] ml-1">NID No</label>
// //                   <input required type="number" placeholder="Enter NID Number" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 outline-none transition-all placeholder:text-gray-300" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-bold text-[#03373D] ml-1">Phone Number</label>
// //                   <input required type="tel" placeholder="017XXXXXXXX" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 outline-none transition-all placeholder:text-gray-300" />
// //                 </div>
// //               </div>

// //               {/* Bike Details */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-bold text-[#03373D] ml-1">Bike Brand Model and Year</label>
// //                   <input required type="text" placeholder="e.g. Yamaha FZ-S 2023" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 outline-none transition-all placeholder:text-gray-300" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-bold text-[#03373D] ml-1">Bike Registration Number</label>
// //                   <input required type="text" placeholder="e.g. DHAKA METRO-LA-12-3456" className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 outline-none transition-all placeholder:text-gray-300" />
// //                 </div>
// //               </div>

// //               {/* Tell us about yourself */}
// //               <div className="space-y-2">
// //                 <label className="text-sm font-bold text-[#03373D] ml-1">Tell Us About Yourself</label>
// //                 <textarea rows="4" placeholder="Briefly describe your experience..." className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 outline-none transition-all placeholder:text-gray-300 resize-none"></textarea>
// //               </div>

// //               {/* Submit Button */}
// //               <button type="submit" className="w-full bg-[#C6E87A] hover:bg-[#A3C644] text-[#03373D] font-black py-5 rounded-2xl shadow-lg transition-all transform active:scale-[0.98] mt-4 uppercase tracking-wider">
// //                 Submit Application
// //               </button>
// //             </form>
// //           </section>
// //         </div>

// //         {/* ডান পাশ: ইলাস্ট্রেশন ইমেজ */}
// //         <div className="lg:w-[45%] flex items-center justify-center sticky top-10 self-start">
// //           <div className="relative group">
// //             {/* ইমেজের নিচে একটি হালকা শ্যাডো ইফেক্ট */}
// //             <div className="absolute -inset-4 bg-[#C6E87A]/10 rounded-full blur-3xl group-hover:bg-[#C6E87A]/20 transition-all"></div>
// //             <img 
// //               src={riderImg} 
// //               alt="Rider Illustration" 
// //               className="relative w-full h-auto object-contain max-w-[550px] animate-pulse-slow"
// //               style={{ filter: 'drop-shadow(0px 20px 40px rgba(0,0,0,0.1))' }}
// //             />
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Rider;



// import React, { useState } from 'react';
// import riderImg from '../../assets/agent-pending.png';

// const Rider = () => {
//   // বাংলাদেশের জেলা এবং বিভাগ সমুহ
//   const regions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"];
//   const districts = [
//     "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogra", "Brahmanbaria", "Chandpur", "Chattogram",
//     "Chuadanga", "Comilla", "Cox's Bazar", "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur",
//     "Gopalganj", "Habiganj", "Jamalpur", "Jessore", "Jhalokati", "Jhenaidah", "Joypurhat", "Khagrachari",
//     "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura",
//     "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj",
//     "Narsingdi", "Natore", "Nawabganj", "Netrakona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh",
//     "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur",
//     "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
//   ];

//   // ✅ NEW: form state (UI unchanged)
//   const [formData, setFormData] = useState({
//     name: '',
//     license: '',
//     email: '',
//     region: '',
//     district: '',
//     nid: '',
//     phone: '',
//     bikeInfo: '',
//     bikeReg: '',
//     about: ''
//   });

//   // ✅ NEW: change handler
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ UPDATED submit (design same)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log('RIDER DATA:', formData);

//     try {
//       const res = await fetch('http://localhost:3000/riders', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await res.json();
//       console.log('SERVER RESPONSE:', data);

//       alert("Application Submitted Successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       <div className="max-w-7xl w-full bg-white rounded-[45px] shadow-2xl overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row gap-16 relative">
        
//         <div className="flex-1">
//           <header className="mb-10">
//             <h1 className="text-5xl font-black text-[#03373D] mb-4 tracking-tight">Be a Rider</h1>
//             <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
//               Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
//             </p>
//           </header>

//           <section>
//             <h2 className="text-2xl font-bold text-[#03373D] mb-8 border-b border-gray-100 pb-4">
//               Tell us about yourself
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">

//               <div className="grid grid-cols-1 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-[#03373D] ml-1">Your Name</label>
//                   <input name="name" required onChange={handleChange} type="text"
//                     placeholder="Enter your full name"
//                     className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 focus:border-[#A3C644] outline-none transition-all placeholder:text-gray-300" />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-[#03373D] ml-1">Driving License Number</label>
//                   <input name="license" required onChange={handleChange} type="text"
//                     placeholder="e.g. DK1234567"
//                     className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 focus:border-[#A3C644] outline-none transition-all placeholder:text-gray-300" />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-[#03373D] ml-1">Your Email</label>
//                 <input name="email" required onChange={handleChange} type="email"
//                   placeholder="email@example.com"
//                   className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 focus:border-[#A3C644] outline-none transition-all placeholder:text-gray-300" />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <select name="region" required onChange={handleChange}
//                   className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 outline-none">
//                   <option value="">Select your Region</option>
//                   {regions.map(r => <option key={r}>{r}</option>)}
//                 </select>

//                 <select name="district" required onChange={handleChange}
//                   className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:ring-4 focus:ring-[#C6E87A]/30 outline-none">
//                   <option value="">Select your District</option>
//                   {districts.map(d => <option key={d}>{d}</option>)}
//                 </select>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input name="nid" required onChange={handleChange} type="number"
//                   placeholder="Enter NID Number"
//                   className="w-full px-5 py-4 rounded-2xl border border-gray-200" />
//                 <input name="phone" required onChange={handleChange} type="tel"
//                   placeholder="017XXXXXXXX"
//                   className="w-full px-5 py-4 rounded-2xl border border-gray-200" />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input name="bikeInfo" required onChange={handleChange} type="text"
//                   placeholder="Yamaha FZ-S 2023"
//                   className="w-full px-5 py-4 rounded-2xl border border-gray-200" />
//                 <input name="bikeReg" required onChange={handleChange} type="text"
//                   placeholder="DHAKA METRO-LA-12-3456"
//                   className="w-full px-5 py-4 rounded-2xl border border-gray-200" />
//               </div>

//               <textarea name="about" rows="4" onChange={handleChange}
//                 placeholder="Briefly describe your experience..."
//                 className="w-full px-5 py-4 rounded-2xl border border-gray-200 resize-none"></textarea>

//               <button type="submit"
//                 className="w-full bg-[#C6E87A] hover:bg-[#A3C644] text-[#03373D] font-black py-5 rounded-2xl shadow-lg">
//                 Submit Application
//               </button>
//             </form>
//           </section>
//         </div>

//         <div className="lg:w-[45%] flex items-center justify-center sticky top-10 self-start">
//           <img src={riderImg} alt="Rider" className="max-w-[550px]" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Rider;


import React, { useState } from 'react';
import riderImg from '../../assets/agent-pending.png';
import Swal from 'sweetalert2';

const Rider = () => {
  const regions = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"];
  const districts = [
    "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogra", "Brahmanbaria", "Chandpur", "Chattogram",
    "Chuadanga", "Comilla", "Cox's Bazar", "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur",
    "Gopalganj", "Habiganj", "Jamalpur", "Jessore", "Jhalokati", "Jhenaidah", "Joypurhat", "Khagrachari",
    "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura",
    "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj",
    "Narsingdi", "Natore", "Nawabganj", "Netrakona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh",
    "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur",
    "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
  ];

  const [formData, setFormData] = useState({
    name: '',
    license: '',
    email: '',
    region: '',
    district: '',
    nid: '',
    phone: '',
    bikeInfo: '',
    bikeReg: '',
    about: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('http://localhost:3000/riders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      // ✅ SWEET ALERT SUCCESS
      Swal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        text: 'Your application has been submitted. We will reach you in 30 days.',
        confirmButtonColor: '#A3C644',
        confirmButtonText: 'OK'
      });

      // optional reset
      setFormData({
        name: '',
        license: '',
        email: '',
        region: '',
        district: '',
        nid: '',
        phone: '',
        bikeInfo: '',
        bikeReg: '',
        about: ''
      });

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'Please try again later.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white rounded-[45px] shadow-2xl overflow-hidden p-8 md:p-16 flex flex-col lg:flex-row gap-16 relative">
        
        <div className="flex-1">
          <header className="mb-10">
            <h1 className="text-5xl font-black text-[#03373D] mb-4 tracking-tight">Be a Rider</h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
            </p>
          </header>

          <section>
            <h2 className="text-2xl font-bold text-[#03373D] mb-8 border-b border-gray-100 pb-4">
              Tell us about yourself
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 gap-6">
                <input name="name" required value={formData.name} onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200" />

                <input name="license" required value={formData.license} onChange={handleChange}
                  placeholder="e.g. DK1234567"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200" />
              </div>

              <input name="email" required value={formData.email} onChange={handleChange}
                placeholder="email@example.com"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select name="region" required value={formData.region} onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200">
                  <option value="">Select your Region</option>
                  {regions.map(r => <option key={r}>{r}</option>)}
                </select>

                <select name="district" required value={formData.district} onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200">
                  <option value="">Select your District</option>
                  {districts.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="nid" required value={formData.nid} onChange={handleChange}
                  placeholder="Enter NID Number"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200" />
                <input name="phone" required value={formData.phone} onChange={handleChange}
                  placeholder="017XXXXXXXX"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="bikeInfo" required value={formData.bikeInfo} onChange={handleChange}
                  placeholder="Yamaha FZ-S 2023"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200" />
                <input name="bikeReg" required value={formData.bikeReg} onChange={handleChange}
                  placeholder="DHAKA METRO-LA-12-3456"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200" />
              </div>

              <textarea name="about" rows="4" value={formData.about} onChange={handleChange}
                placeholder="Briefly describe your experience..."
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 resize-none"></textarea>

              <button type="submit"
                className="w-full bg-[#C6E87A] hover:bg-[#A3C644] text-[#03373D] font-black py-5 rounded-2xl shadow-lg">
                Submit Application
              </button>
            </form>
          </section>
        </div>

        <div className="lg:w-[45%] flex items-center justify-center sticky top-10 self-start">
          <img src={riderImg} alt="Rider" className="max-w-[550px] w-full h-auto" />
        </div>

      </div>
    </div>
  );
};

export default Rider;
