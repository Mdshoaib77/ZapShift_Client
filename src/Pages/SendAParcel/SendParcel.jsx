// // // import React, { useState, useEffect } from 'react';
// // // import Swal from 'sweetalert2'; // SweetAlert2 ইমপোর্ট করা হয়েছে

// // // const SendParcel = () => {
// // //   // বাংলাদেশের বিভাগ এবং জেলাগুলোর ডাটা
// // //   const bdRegions = {
// // //     Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
// // //     Chittagong: ["Chittagong", "Bandarban", "Brahmanbaria", "Chandpur", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati"],
// // //     Rajshahi: ["Rajshahi", "Bogura", "Chapainawabganj", "Joypurhat", "Naogaon", "Natore", "Pabna", "Sirajganj"],
// // //     Khulna: ["Khulna", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
// // //     Barisal: ["Barisal", "Barguna", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur"],
// // //     Sylhet: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
// // //     Rangpur: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
// // //     Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
// // //   };

// // //   const [formData, setFormData] = useState({
// // //     parcelType: 'Document',
// // //     parcelName: '',
// // //     parcelWeight: 1, 
// // //     senderName: '',
// // //     senderAddress: '',
// // //     senderPhone: '',
// // //     senderRegion: '',
// // //     senderDistrict: '',
// // //     pickupInstruction: '',
// // //     receiverName: '',
// // //     receiverAddress: '',
// // //     receiverPhone: '',
// // //     receiverRegion: '',
// // //     receiverDistrict: '',
// // //     deliveryInstruction: '',
// // //   });

// // //   const [totalPrice, setTotalPrice] = useState(0);

// // //   // ডায়নামিক প্রাইজ ক্যালকুলেশন লজিক
// // //   const calculatePrice = () => {
// // //     const { parcelType, parcelWeight, senderDistrict, receiverDistrict } = formData;
// // //     const weight = parseFloat(parcelWeight) || 0;
// // //     const isWithinCity = senderDistrict && receiverDistrict && senderDistrict === receiverDistrict;
    
// // //     let price = 0;
// // //     if (parcelType === 'Document') {
// // //       price = isWithinCity ? 60 : 80;
// // //     } else {
// // //       if (weight <= 3) {
// // //         price = isWithinCity ? 110 : 150;
// // //       } else {
// // //         const basePrice = isWithinCity ? 110 : 150;
// // //         const extraWeight = weight - 3;
// // //         price = basePrice + (extraWeight * 40) + 40;
// // //       }
// // //     }
// // //     setTotalPrice(price);
// // //   };

// // //   useEffect(() => {
// // //     calculatePrice();
// // //   }, [formData.parcelType, formData.parcelWeight, formData.senderDistrict, formData.receiverDistrict]);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     if (name === 'senderRegion') {
// // //       setFormData((prev) => ({ ...prev, [name]: value, senderDistrict: '' }));
// // //     } else if (name === 'receiverRegion') {
// // //       setFormData((prev) => ({ ...prev, [name]: value, receiverDistrict: '' }));
// // //     } else {
// // //       setFormData((prev) => ({ ...prev, [name]: value }));
// // //     }
// // //   };

// // //   // SweetAlert2 হ্যান্ডলার
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     Swal.fire({
// // //       title: 'Confirm Booking?',
// // //       text: `Your total delivery cost will be ৳${totalPrice}. Do you want to proceed?`,
// // //       icon: 'question',
// // //       showCancelButton: true,
// // //       confirmButtonColor: '#003d3d',
// // //       cancelButtonColor: '#d33',
// // //       confirmButtonText: 'Yes, Confirm!',
// // //       cancelButtonText: 'No, Cancel'
// // //     }).then((result) => {
// // //       if (result.isConfirmed) {
// // //         // এখানে আপনার ব্যাকেন্ড এপিআই কল করতে পারেন
// // //         console.log('Final Booking Data:', { ...formData, totalPrice });
        
// // //         Swal.fire({
// // //           title: 'Success!',
// // //           text: 'Your parcel has been booked successfully.',
// // //           icon: 'success',
// // //           confirmButtonColor: '#003d3d'
// // //         });
// // //       } else if (result.dismiss === Swal.DismissReason.cancel) {
// // //         Swal.fire({
// // //           title: 'Cancelled',
// // //           text: 'Your booking has been cancelled.',
// // //           icon: 'error',
// // //           confirmButtonColor: '#003d3d'
// // //         });
// // //       }
// // //     });
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-4 md:p-10 flex justify-center">
// // //       <div className="bg-white w-full max-w-5xl rounded-3xl shadow-sm p-8 md:p-12 relative">
        
// // //         <div className="absolute top-6 right-8 bg-[#003d3d] text-[#c5e76d] px-6 py-2 rounded-full font-bold text-lg shadow-sm">
// // //           Price: ৳{totalPrice}
// // //         </div>

// // //         <h1 className="text-3xl font-bold text-[#003d3d] mb-8">Send A Parcel</h1>
        
// // //         <form onSubmit={handleSubmit} className="space-y-8">
// // //           <section>
// // //             <h2 className="text-xl font-semibold text-[#003d3d] mb-4">Enter your parcel details</h2>
// // //             <hr className="mb-6 border-gray-100" />
// // //             <div className="flex gap-8 mb-6">
// // //               {['Document', 'Not-Document'].map((type) => (
// // //                 <label key={type} className="flex items-center space-x-2 cursor-pointer">
// // //                   <input 
// // //                     type="radio" 
// // //                     name="parcelType" 
// // //                     value={type}
// // //                     checked={formData.parcelType === type}
// // //                     onChange={handleChange}
// // //                     className="w-5 h-5 accent-green-600"
// // //                   />
// // //                   <span className="text-sm font-medium text-gray-700">{type === 'Not-Document' ? 'Non-Document' : type}</span>
// // //                 </label>
// // //               ))}
// // //             </div>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-2">Parcel Name</label>
// // //                 <input type="text" name="parcelName" placeholder="Parcel Name" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500" onChange={handleChange} required />
// // //               </div>
// // //               <div>
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-2">Parcel Weight (KG)</label>
// // //                 <input type="number" name="parcelWeight" value={formData.parcelWeight} className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500" onChange={handleChange} min="1" required />
// // //               </div>
// // //             </div>
// // //           </section>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// // //             <div className="space-y-4">
// // //               <h3 className="text-[#003d3d] font-bold text-lg mb-4 border-b pb-2">Sender Details</h3>
// // //               <input type="text" name="senderName" placeholder="Sender Name" className="w-full p-3 border border-gray-200 rounded-lg" onChange={handleChange} required />
// // //               <input type="text" name="senderAddress" placeholder="Address" className="w-full p-3 border border-gray-200 rounded-lg" onChange={handleChange} required />
// // //               <input type="text" name="senderPhone" placeholder="Sender Phone No" className="w-full p-3 border border-gray-200 rounded-lg" onChange={handleChange} required />
              
// // //               <div>
// // //                 <label className="block text-xs font-bold text-gray-600 mb-1">Your Region</label>
// // //                 <select name="senderRegion" className="w-full p-3 border border-gray-200 rounded-lg text-gray-700" onChange={handleChange} value={formData.senderRegion} required>
// // //                   <option value="">Select Region</option>
// // //                   {Object.keys(bdRegions).map(region => <option key={region} value={region}>{region}</option>)}
// // //                 </select>
// // //               </div>

// // //               <div>
// // //                 <label className="block text-xs font-bold text-gray-600 mb-1">Your District</label>
// // //                 <select name="senderDistrict" className="w-full p-3 border border-gray-200 rounded-lg text-gray-700" onChange={handleChange} value={formData.senderDistrict} disabled={!formData.senderRegion} required>
// // //                   <option value="">Select District</option>
// // //                   {formData.senderRegion && bdRegions[formData.senderRegion].map(dist => <option key={dist} value={dist}>{dist}</option>)}
// // //                 </select>
// // //               </div>
// // //               <textarea name="pickupInstruction" placeholder="Pickup Instruction" rows="3" className="w-full p-3 border border-gray-200 rounded-lg" onChange={handleChange}></textarea>
// // //             </div>

// // //             <div className="space-y-4">
// // //               <h3 className="text-[#003d3d] font-bold text-lg mb-4 border-b pb-2">Receiver Details</h3>
// // //               <input type="text" name="receiverName" placeholder="Receiver Name" className="w-full p-3 border border-gray-200 rounded-lg" onChange={handleChange} required />
// // //               <input type="text" name="receiverAddress" placeholder="Address" className="w-full p-3 border border-gray-200 rounded-lg" onChange={handleChange} required />
// // //               <input type="text" name="receiverPhone" placeholder="Receiver Contact No" className="w-full p-3 border border-gray-200 rounded-lg" onChange={handleChange} required />
              
// // //               <div>
// // //                 <label className="block text-xs font-bold text-gray-600 mb-1">Receiver Region</label>
// // //                 <select name="receiverRegion" className="w-full p-3 border border-gray-200 rounded-lg text-gray-700" onChange={handleChange} value={formData.receiverRegion} required>
// // //                   <option value="">Select Region</option>
// // //                   {Object.keys(bdRegions).map(region => <option key={region} value={region}>{region}</option>)}
// // //                 </select>
// // //               </div>

// // //               <div>
// // //                 <label className="block text-xs font-bold text-gray-600 mb-1">Receiver District</label>
// // //                 <select name="receiverDistrict" className="w-full p-3 border border-gray-200 rounded-lg text-gray-700" onChange={handleChange} value={formData.receiverDistrict} disabled={!formData.receiverRegion} required>
// // //                   <option value="">Select District</option>
// // //                   {formData.receiverRegion && bdRegions[formData.receiverRegion].map(dist => <option key={dist} value={dist}>{dist}</option>)}
// // //                 </select>
// // //               </div>
// // //               <textarea name="deliveryInstruction" placeholder="Delivery Instruction" rows="3" className="w-full p-3 border border-gray-200 rounded-lg" onChange={handleChange}></textarea>
// // //             </div>
// // //           </div>

// // //           <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
// // //             <p className="text-sm font-medium text-gray-800">* PickUp Time 4pm-7pm Approx.</p>
// // //             <button type="submit" className="bg-[#c5e76d] hover:bg-[#b5d65c] text-[#003d3d] font-bold py-4 px-10 rounded-lg transition-all shadow-md">
// // //               Proceed to Confirm Booking (৳{totalPrice})
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SendParcel;


// // // import React, { useState, useEffect } from 'react';
// // // import Swal from 'sweetalert2';
// // // import useAxiosSecure from '../../Hooks/useAxiosSecure';

// // // const SendParcel = () => {
// // //   const bdRegions = {
// // //     Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
// // //     Chittagong: ["Chittagong", "Bandarban", "Brahmanbaria", "Chandpur", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati"],
// // //     Rajshahi: ["Rajshahi", "Bogura", "Chapainawabganj", "Joypurhat", "Naogaon", "Natore", "Pabna", "Sirajganj"],
// // //     Khulna: ["Khulna", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
// // //     Barisal: ["Barisal", "Barguna", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur"],
// // //     Sylhet: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
// // //     Rangpur: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
// // //     Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
// // //   };

// // //   const  axiosSecure = useAxiosSecure();

// // //   const [formData, setFormData] = useState({
// // //     parcelType: 'Document',
// // //     parcelName: '',
// // //     parcelWeight: 1, 
// // //     senderName: '',
// // //     senderAddress: '',
// // //     senderPhone: '',
// // //     senderRegion: '',
// // //     senderDistrict: '',
// // //     pickupInstruction: '',
// // //     receiverName: '',
// // //     receiverAddress: '',
// // //     receiverPhone: '',
// // //     receiverRegion: '',
// // //     receiverDistrict: '',
// // //     deliveryInstruction: '',
// // //   });

// // //   const [totalPrice, setTotalPrice] = useState(0);

// // //   const calculatePrice = () => {
// // //     const { parcelType, parcelWeight, senderDistrict, receiverDistrict } = formData;
// // //     const weight = parseFloat(parcelWeight) || 0;
// // //     const isWithinCity = senderDistrict && receiverDistrict && senderDistrict === receiverDistrict;
    
// // //     let price = 0;
// // //     if (parcelType === 'Document') {
// // //       price = isWithinCity ? 60 : 80;
// // //     } else {
// // //       if (weight <= 3) {
// // //         price = isWithinCity ? 110 : 150;
// // //       } else {
// // //         const basePrice = isWithinCity ? 110 : 150;
// // //         const extraWeight = weight - 3;
// // //         price = basePrice + (extraWeight * 40) + 40;
// // //       }
// // //     }
// // //     setTotalPrice(price);
// // //   };

// // //   useEffect(() => {
// // //     calculatePrice();
// // //   }, [formData.parcelType, formData.parcelWeight, formData.senderDistrict, formData.receiverDistrict]);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     if (name === 'senderRegion') {
// // //       setFormData((prev) => ({ ...prev, [name]: value, senderDistrict: '' }));
// // //     } else if (name === 'receiverRegion') {
// // //       setFormData((prev) => ({ ...prev, [name]: value, receiverDistrict: '' }));
// // //     } else {
// // //       setFormData((prev) => ({ ...prev, [name]: value }));
// // //     }
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     Swal.fire({
// // //       title: 'Confirm Booking?',
// // //       text: `Your total delivery cost will be ৳${totalPrice}. Do you want to proceed?`,
// // //       icon: 'question',
// // //       showCancelButton: true,
// // //       confirmButtonColor: '#003d3d',
// // //       cancelButtonColor: '#d33',
// // //       confirmButtonText: 'Yes, Confirm!',
// // //       cancelButtonText: 'No, Cancel'
// // //     }).then((result) => {
// // //       if (result.isConfirmed) {
// // //         console.log('Final Booking Data:', { ...formData, totalPrice });
// // //         Swal.fire({
// // //           title: 'Success!',
// // //           text: 'Your parcel has been booked successfully.',
// // //           icon: 'success',
// // //           confirmButtonColor: '#003d3d'
// // //         });
// // //       }
// // //     });
// // //   };
// // //   axiosSecure.post('/parcels', data)
// // //   .then(res =>{
// // //     console.log('after saving parcel', res.data);
    
// // //   })

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-2 sm:p-4 md:p-10 flex justify-center items-start md:items-center">
// // //       <div className="bg-white w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-md p-5 sm:p-8 md:p-12 relative overflow-hidden">
        
// // //         {/* Responsive Price Badge */}
// // //         <div className="flex justify-between items-center mb-6 md:mb-8">
// // //           <h1 className="text-2xl md:text-3xl font-bold text-[#003d3d]">Send A Parcel</h1>
// // //           <div className="bg-[#003d3d] text-[#c5e76d] px-4 py-2 md:px-6 md:py-2 rounded-full font-bold text-sm md:text-lg shadow-sm whitespace-nowrap">
// // //             Price: ৳{totalPrice}
// // //           </div>
// // //         </div>
        
// // //         <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
// // //           {/* Parcel Details Section */}
// // //           <section className="bg-gray-50 p-4 md:p-6 rounded-xl">
// // //             <h2 className="text-lg font-semibold text-[#003d3d] mb-4">Parcel Details</h2>
// // //             <hr className="mb-6 border-gray-200" />
            
// // //             <div className="flex flex-wrap gap-4 sm:gap-8 mb-6">
// // //               {['Document', 'Not-Document'].map((type) => (
// // //                 <label key={type} className="flex items-center space-x-2 cursor-pointer">
// // //                   <input 
// // //                     type="radio" 
// // //                     name="parcelType" 
// // //                     value={type}
// // //                     checked={formData.parcelType === type}
// // //                     onChange={handleChange}
// // //                     className="w-5 h-5 accent-green-600"
// // //                   />
// // //                   <span className="text-sm font-medium text-gray-700">{type === 'Not-Document' ? 'Non-Doc' : type}</span>
// // //                 </label>
// // //               ))}
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
// // //               <div className="w-full">
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-1">Parcel Name</label>
// // //                 <input type="text" name="parcelName" placeholder="Item Name" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500 text-sm md:text-base" onChange={handleChange} required />
// // //               </div>
// // //               <div className="w-full">
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-1">Weight (KG)</label>
// // //                 <input type="number" name="parcelWeight" value={formData.parcelWeight} className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500 text-sm md:text-base" onChange={handleChange} min="1" required />
// // //               </div>
// // //             </div>
// // //           </section>

// // //           {/* Sender & Receiver Grid */}
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
// // //             {/* Sender Details */}
// // //             <div className="space-y-4">
// // //               <h3 className="text-[#003d3d] font-bold text-lg border-b pb-2">Sender Details</h3>
// // //               <div className="grid grid-cols-1 gap-4">
// // //                 <input type="text" name="senderName" placeholder="Sender Name" className="w-full p-3 border border-gray-200 rounded-lg text-sm" onChange={handleChange} required />
// // //                 <input type="text" name="senderPhone" placeholder="Phone No" className="w-full p-3 border border-gray-200 rounded-lg text-sm" onChange={handleChange} required />
// // //                 <input type="text" name="senderAddress" placeholder="Full Address" className="w-full p-3 border border-gray-200 rounded-lg text-sm" onChange={handleChange} required />
                
// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //                   <select name="senderRegion" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-white" onChange={handleChange} value={formData.senderRegion} required>
// // //                     <option value="">Region</option>
// // //                     {Object.keys(bdRegions).map(region => <option key={region} value={region}>{region}</option>)}
// // //                   </select>
// // //                   <select name="senderDistrict" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-white" onChange={handleChange} value={formData.senderDistrict} disabled={!formData.senderRegion} required>
// // //                     <option value="">District</option>
// // //                     {formData.senderRegion && bdRegions[formData.senderRegion].map(dist => <option key={dist} value={dist}>{dist}</option>)}
// // //                   </select>
// // //                 </div>
// // //                 <textarea name="pickupInstruction" placeholder="Pickup instructions..." rows="2" className="w-full p-3 border border-gray-200 rounded-lg text-sm" onChange={handleChange}></textarea>
// // //               </div>
// // //             </div>

// // //             {/* Receiver Details */}
// // //             <div className="space-y-4">
// // //               <h3 className="text-[#003d3d] font-bold text-lg border-b pb-2">Receiver Details</h3>
// // //               <div className="grid grid-cols-1 gap-4">
// // //                 <input type="text" name="receiverName" placeholder="Receiver Name" className="w-full p-3 border border-gray-200 rounded-lg text-sm" onChange={handleChange} required />
// // //                 <input type="text" name="receiverPhone" placeholder="Contact No" className="w-full p-3 border border-gray-200 rounded-lg text-sm" onChange={handleChange} required />
// // //                 <input type="text" name="receiverAddress" placeholder="Delivery Address" className="w-full p-3 border border-gray-200 rounded-lg text-sm" onChange={handleChange} required />
                
// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //                   <select name="receiverRegion" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-white" onChange={handleChange} value={formData.receiverRegion} required>
// // //                     <option value="">Region</option>
// // //                     {Object.keys(bdRegions).map(region => <option key={region} value={region}>{region}</option>)}
// // //                   </select>
// // //                   <select name="receiverDistrict" className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-white" onChange={handleChange} value={formData.receiverDistrict} disabled={!formData.receiverRegion} required>
// // //                     <option value="">District</option>
// // //                     {formData.receiverRegion && bdRegions[formData.receiverRegion].map(dist => <option key={dist} value={dist}>{dist}</option>)}
// // //                   </select>
// // //                 </div>
// // //                 <textarea name="deliveryInstruction" placeholder="Delivery instructions..." rows="2" className="w-full p-3 border border-gray-200 rounded-lg text-sm" onChange={handleChange}></textarea>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Footer Section */}
// // //           <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
// // //             <p className="text-xs md:text-sm font-medium text-gray-500 text-center sm:text-left">
// // //               * PickUp Time 4pm-7pm Approx. <br className="hidden sm:block" />
// // //               Please double check all information.
// // //             </p>
// // //             <button type="submit" className="w-full sm:w-auto bg-[#c5e76d] hover:bg-[#b5d65c] text-[#003d3d] font-extrabold py-4 px-10 rounded-xl transition-all shadow-md active:scale-95 text-base md:text-lg">
// // //               Confirm Booking (৳{totalPrice})
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SendParcel;


// // import React, { useState, useEffect } from 'react';
// // import Swal from 'sweetalert2';
// // import useAxiosSecure from '../../Hooks/useAxiosSecure'; // আপনার হুক ইমপোর্ট করা হলো

// // const SendParcel = () => {
// //   const bdRegions = {
// //     Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
// //     Chittagong: ["Chittagong", "Bandarban", "Brahmanbaria", "Chandpur", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati"],
// //     Rajshahi: ["Rajshahi", "Bogura", "Chapainawabganj", "Joypurhat", "Naogaon", "Natore", "Pabna", "Sirajganj"],
// //     Khulna: ["Khulna", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
// //     Barisal: ["Barisal", "Barguna", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur"],
// //     Sylhet: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
// //     Rangpur: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
// //     Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
// //   };

// //   const axiosSecure = useAxiosSecure();

// //   // ডিফল্ট স্টেট
// //   const initialFormData = {
// //     parcelType: 'Document',
// //     parcelName: '',
// //     parcelWeight: 1, 
// //     senderName: '',
// //     senderAddress: '',
// //     senderPhone: '',
// //     senderRegion: '',
// //     senderDistrict: '',
// //     pickupInstruction: '',
// //     receiverName: '',
// //     receiverAddress: '',
// //     receiverPhone: '',
// //     receiverRegion: '',
// //     receiverDistrict: '',
// //     deliveryInstruction: '',
// //   };

// //   const [formData, setFormData] = useState(initialFormData);
// //   const [totalPrice, setTotalPrice] = useState(0);

// //   // প্রাইজ ক্যালকুলেশন লজিক
// //   useEffect(() => {
// //     const { parcelType, parcelWeight, senderDistrict, receiverDistrict } = formData;
// //     const weight = parseFloat(parcelWeight) || 0;
// //     const isWithinCity = senderDistrict && receiverDistrict && senderDistrict === receiverDistrict;
    
// //     let price = 0;
// //     if (parcelType === 'Document') {
// //       price = isWithinCity ? 60 : 80;
// //     } else {
// //       if (weight <= 3) {
// //         price = isWithinCity ? 110 : 150;
// //       } else {
// //         const basePrice = isWithinCity ? 110 : 150;
// //         const extraWeight = weight - 3;
// //         price = basePrice + (extraWeight * 40) + 40;
// //       }
// //     }
// //     setTotalPrice(price);
// //   }, [formData.parcelType, formData.parcelWeight, formData.senderDistrict, formData.receiverDistrict]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === 'senderRegion') {
// //       setFormData((prev) => ({ ...prev, [name]: value, senderDistrict: '' }));
// //     } else if (name === 'receiverRegion') {
// //       setFormData((prev) => ({ ...prev, [name]: value, receiverDistrict: '' }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // ডাটাবেজে পাঠানোর জন্য অবজেক্ট তৈরি
// //     const finalParcelData = {
// //       ...formData,
// //       totalPrice,
// //       status: 'pending',
// //       bookingDate: new Date().toISOString()
// //     };

// //     Swal.fire({
// //       title: 'Confirm Booking?',
// //       text: `Total delivery cost: ৳${totalPrice}. Proceed?`,
// //       icon: 'question',
// //       showCancelButton: true,
// //       confirmButtonColor: '#003d3d',
// //       cancelButtonColor: '#d33',
// //       confirmButtonText: 'Yes, Confirm!',
// //       cancelButtonText: 'No, Cancel'
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         // API কল
// //         axiosSecure.post('/parcels', finalParcelData)
// //           .then(res => {
// //             if (res.data.insertedId) {
// //               Swal.fire({
// //                 title: 'Success!',
// //                 text: 'Your parcel has been booked successfully.',
// //                 icon: 'success',
// //                 confirmButtonColor: '#003d3d'
// //               });
// //               setFormData(initialFormData); // ফর্ম রিসেট
// //               e.target.reset(); // ইনপুট ফিল্ড ক্লিয়ার
// //             }
// //           })
// //           .catch(error => {
// //             console.error("Post Error:", error);
// //             Swal.fire('Error', 'Failed to save booking. Please try again.', 'error');
// //           });
// //       }
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-2 sm:p-4 md:p-10 flex justify-center items-start">
// //       <div className="bg-white w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-md p-5 sm:p-8 md:p-12 relative">
        
// //         {/* Top Header & Price Badge */}
// //         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
// //           <h1 className="text-2xl md:text-3xl font-bold text-[#003d3d]">Send A Parcel</h1>
// //           <div className="bg-[#003d3d] text-[#c5e76d] px-6 py-2 rounded-full font-bold text-lg shadow-sm">
// //             Total: ৳{totalPrice}
// //           </div>
// //         </div>
        
// //         <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          
// //           {/* 1. Parcel Details */}
// //           <section className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-100">
// //             <h2 className="text-lg font-semibold text-[#003d3d] mb-4">1. Parcel Details</h2>
// //             <div className="flex flex-wrap gap-6 mb-6">
// //               {['Document', 'Not-Document'].map((type) => (
// //                 <label key={type} className="flex items-center space-x-2 cursor-pointer">
// //                   <input type="radio" name="parcelType" value={type} checked={formData.parcelType === type} onChange={handleChange} className="w-5 h-5 accent-green-600" />
// //                   <span className="text-sm font-medium text-gray-700">{type === 'Not-Document' ? 'Non-Document' : type}</span>
// //                 </label>
// //               ))}
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <input type="text" name="parcelName" placeholder="Parcel Name" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500" onChange={handleChange} required />
// //               <div className="flex items-center gap-2">
// //                 <input type="number" name="parcelWeight" value={formData.parcelWeight} className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500" onChange={handleChange} min="1" required />
// //                 <span className="font-bold text-gray-500">KG</span>
// //               </div>
// //             </div>
// //           </section>

// //           {/* 2. Sender & Receiver Grid */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
// //             {/* Sender Info */}
// //             <div className="space-y-4">
// //               <h3 className="text-[#003d3d] font-bold text-lg border-b pb-2">Sender Information</h3>
// //               <input type="text" name="senderName" placeholder="Full Name" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
// //               <input type="text" name="senderPhone" placeholder="Phone Number" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
// //               <input type="text" name="senderAddress" placeholder="Full Address" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
// //               <div className="grid grid-cols-2 gap-2">
// //                 <select name="senderRegion" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.senderRegion} required>
// //                   <option value="">Region</option>
// //                   {Object.keys(bdRegions).map(r => <option key={r} value={r}>{r}</option>)}
// //                 </select>
// //                 <select name="senderDistrict" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.senderDistrict} disabled={!formData.senderRegion} required>
// //                   <option value="">District</option>
// //                   {formData.senderRegion && bdRegions[formData.senderRegion].map(d => <option key={d} value={d}>{d}</option>)}
// //                 </select>
// //               </div>
// //               <textarea name="pickupInstruction" placeholder="Pickup Instruction (Optional)" rows="2" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange}></textarea>
// //             </div>

// //             {/* Receiver Info */}
// //             <div className="space-y-4">
// //               <h3 className="text-[#003d3d] font-bold text-lg border-b pb-2">Receiver Information</h3>
// //               <input type="text" name="receiverName" placeholder="Full Name" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
// //               <input type="text" name="receiverPhone" placeholder="Contact Number" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
// //               <input type="text" name="receiverAddress" placeholder="Full Address" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
// //               <div className="grid grid-cols-2 gap-2">
// //                 <select name="receiverRegion" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.receiverRegion} required>
// //                   <option value="">Region</option>
// //                   {Object.keys(bdRegions).map(r => <option key={r} value={r}>{r}</option>)}
// //                 </select>
// //                 <select name="receiverDistrict" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.receiverDistrict} disabled={!formData.receiverRegion} required>
// //                   <option value="">District</option>
// //                   {formData.receiverRegion && bdRegions[formData.receiverRegion].map(d => <option key={d} value={d}>{d}</option>)}
// //                 </select>
// //               </div>
// //               <textarea name="deliveryInstruction" placeholder="Delivery Instruction (Optional)" rows="2" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange}></textarea>
// //             </div>
// //           </div>

// //           {/* 3. Action Button */}
// //           <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-6">
// //             <p className="text-xs text-gray-500 italic">* Standard Delivery: 2-3 Business Days.</p>
// //             <button type="submit" className="w-full sm:w-auto bg-[#c5e76d] hover:bg-[#b5d65c] text-[#003d3d] font-extrabold py-4 px-12 rounded-xl shadow-lg transition-transform active:scale-95">
// //               Confirm Booking (৳{totalPrice})
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SendParcel;

// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../Hooks/useAxiosSecure'; 
// import useAuth from '../../Hooks/useAuth'; // ১. useAuth ইমপোর্ট করুন

// const SendParcel = () => {
//   const { user } = useAuth(); // ২. ইউজার ডাটা নিন
//   const axiosSecure = useAxiosSecure();

//   const bdRegions = {
//     Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
//     Chittagong: ["Chittagong", "Bandarban", "Brahmanbaria", "Chandpur", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati"],
//     Rajshahi: ["Rajshahi", "Bogura", "Chapainawabganj", "Joypurhat", "Naogaon", "Natore", "Pabna", "Sirajganj"],
//     Khulna: ["Khulna", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
//     Barisal: ["Barisal", "Barguna", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur"],
//     Sylhet: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
//     Rangpur: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
//     Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
//   };

//   const initialFormData = {
//     parcelType: 'Document',
//     parcelName: '',
//     parcelWeight: 1, 
//     senderName: '',
//     senderAddress: '',
//     senderPhone: '',
//     senderRegion: '',
//     senderDistrict: '',
//     pickupInstruction: '',
//     receiverName: '',
//     receiverAddress: '',
//     receiverPhone: '',
//     receiverRegion: '',
//     receiverDistrict: '',
//     deliveryInstruction: '',
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const { parcelType, parcelWeight, senderDistrict, receiverDistrict } = formData;
//     const weight = parseFloat(parcelWeight) || 0;
//     const isWithinCity = senderDistrict && receiverDistrict && senderDistrict === receiverDistrict;
    
//     let price = 0;
//     if (parcelType === 'Document') {
//       price = isWithinCity ? 60 : 80;
//     } else {
//       if (weight <= 3) {
//         price = isWithinCity ? 110 : 150;
//       } else {
//         const basePrice = isWithinCity ? 110 : 150;
//         const extraWeight = weight - 3;
//         price = basePrice + (extraWeight * 40) + 40;
//       }
//     }
//     setTotalPrice(price);
//   }, [formData.parcelType, formData.parcelWeight, formData.senderDistrict, formData.receiverDistrict]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'senderRegion') {
//       setFormData((prev) => ({ ...prev, [name]: value, senderDistrict: '' }));
//     } else if (name === 'receiverRegion') {
//       setFormData((prev) => ({ ...prev, [name]: value, receiverDistrict: '' }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ৩. ইউজারের ইমেইল এখানে যুক্ত করা হলো
//     const finalParcelData = {
//       ...formData,
//       email: user?.email, // ইমেইল ফিল্ড যোগ করা হয়েছে
//       totalPrice,
//       status: 'pending',
//       bookingDate: new Date().toISOString()
//     };

//     Swal.fire({
//       title: 'Confirm Booking?',
//       text: `Total delivery cost: ৳${totalPrice}. Proceed?`,
//       icon: 'question',
//       showCancelButton: true,
//       confirmButtonColor: '#003d3d',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, Confirm!',
//       cancelButtonText: 'No, Cancel'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.post('/parcels', finalParcelData)
//           .then(res => {
//             if (res.data.insertedId) {
//               Swal.fire({
//                 title: 'Success!',
//                 text: 'Your parcel has been booked successfully.',
//                 icon: 'success',
//                 confirmButtonColor: '#003d3d'
//               });
//               setFormData(initialFormData);
//               e.target.reset();
//             }
//           })
//           .catch(error => {
//             console.error("Post Error:", error);
//             Swal.fire('Error', 'Failed to save booking. Please try again.', 'error');
//           });
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-2 sm:p-4 md:p-10 flex justify-center items-start">
//       <div className="bg-white w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-md p-5 sm:p-8 md:p-12 relative">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//           <h1 className="text-2xl md:text-3xl font-bold text-[#003d3d]">Send A Parcel</h1>
//           <div className="bg-[#003d3d] text-[#c5e76d] px-6 py-2 rounded-full font-bold text-lg shadow-sm">
//             Total: ৳{totalPrice}
//           </div>
//         </div>
        
//         <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
//           <section className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-100">
//             <h2 className="text-lg font-semibold text-[#003d3d] mb-4">1. Parcel Details</h2>
//             <div className="flex flex-wrap gap-6 mb-6">
//               {['Document', 'Not-Document'].map((type) => (
//                 <label key={type} className="flex items-center space-x-2 cursor-pointer">
//                   <input type="radio" name="parcelType" value={type} checked={formData.parcelType === type} onChange={handleChange} className="w-5 h-5 accent-green-600" />
//                   <span className="text-sm font-medium text-gray-700">{type === 'Not-Document' ? 'Non-Document' : type}</span>
//                 </label>
//               ))}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input type="text" name="parcelName" placeholder="Parcel Name" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500" onChange={handleChange} required />
//               <div className="flex items-center gap-2">
//                 <input type="number" name="parcelWeight" value={formData.parcelWeight} className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500" onChange={handleChange} min="1" required />
//                 <span className="font-bold text-gray-500">KG</span>
//               </div>
//             </div>
//           </section>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
//             <div className="space-y-4">
//               <h3 className="text-[#003d3d] font-bold text-lg border-b pb-2">Sender Information</h3>
//               <input type="text" name="senderName" placeholder="Full Name" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
//               <input type="text" name="senderPhone" placeholder="Phone Number" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
//               <input type="text" name="senderAddress" placeholder="Full Address" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
//               <div className="grid grid-cols-2 gap-2">
//                 <select name="senderRegion" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.senderRegion} required>
//                   <option value="">Region</option>
//                   {Object.keys(bdRegions).map(r => <option key={r} value={r}>{r}</option>)}
//                 </select>
//                 <select name="senderDistrict" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.senderDistrict} disabled={!formData.senderRegion} required>
//                   <option value="">District</option>
//                   {formData.senderRegion && bdRegions[formData.senderRegion].map(d => <option key={d} value={d}>{d}</option>)}
//                 </select>
//               </div>
//               <textarea name="pickupInstruction" placeholder="Pickup Instruction (Optional)" rows="2" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange}></textarea>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-[#003d3d] font-bold text-lg border-b pb-2">Receiver Information</h3>
//               <input type="text" name="receiverName" placeholder="Full Name" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
//               <input type="text" name="receiverPhone" placeholder="Contact Number" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
//               <input type="text" name="receiverAddress" placeholder="Full Address" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
//               <div className="grid grid-cols-2 gap-2">
//                 <select name="receiverRegion" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.receiverRegion} required>
//                   <option value="">Region</option>
//                   {Object.keys(bdRegions).map(r => <option key={r} value={r}>{r}</option>)}
//                 </select>
//                 <select name="receiverDistrict" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.receiverDistrict} disabled={!formData.receiverRegion} required>
//                   <option value="">District</option>
//                   {formData.receiverRegion && bdRegions[formData.receiverRegion].map(d => <option key={d} value={d}>{d}</option>)}
//                 </select>
//               </div>
//               <textarea name="deliveryInstruction" placeholder="Delivery Instruction (Optional)" rows="2" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange}></textarea>
//             </div>
//           </div>

//           <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-6">
//             <p className="text-xs text-gray-500 italic">* Standard Delivery: 2-3 Business Days.</p>
//             <button type="submit" className="w-full sm:w-auto bg-[#c5e76d] hover:bg-[#b5d65c] text-[#003d3d] font-extrabold py-4 px-12 rounded-xl shadow-lg transition-transform active:scale-95">
//               Confirm Booking (৳{totalPrice})
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SendParcel;

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure'; 
import useAuth from '../../Hooks/useAuth'; // change: useAuth import
import { useNavigate } from 'react-router';

const SendParcel = () => {
  const { user } = useAuth(); // change: get user
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const bdRegions = {
    Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
    Chittagong: ["Chittagong", "Bandarban", "Brahmanbaria", "Chandpur", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati"],
    Rajshahi: ["Rajshahi", "Bogura", "Chapainawabganj", "Joypurhat", "Naogaon", "Natore", "Pabna", "Sirajganj"],
    Khulna: ["Khulna", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
    Barisal: ["Barisal", "Barguna", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur"],
    Sylhet: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
    Rangpur: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
    Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
  };

  const initialFormData = {
    parcelType: 'Document',
    parcelName: '',
    parcelWeight: 1, 
    senderName: '',
    senderAddress: '',
    senderPhone: '',
    senderRegion: '',
    senderDistrict: '',
    pickupInstruction: '',
    receiverName: '',
    receiverAddress: '',
    receiverPhone: '',
    receiverRegion: '',
    receiverDistrict: '',
    deliveryInstruction: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const { parcelType, parcelWeight, senderDistrict, receiverDistrict } = formData;
    const weight = parseFloat(parcelWeight) || 0;
    const isWithinCity = senderDistrict && receiverDistrict && senderDistrict === receiverDistrict;
    
    let price = 0;
    if (parcelType === 'Document') {
      price = isWithinCity ? 60 : 80;
    } else {
      if (weight <= 3) {
        price = isWithinCity ? 110 : 150;
      } else {
        const basePrice = isWithinCity ? 110 : 150;
        const extraWeight = weight - 3;
        price = basePrice + (extraWeight * 40) + 40;
      }
    }
    setTotalPrice(price);
  }, [formData.parcelType, formData.parcelWeight, formData.senderDistrict, formData.receiverDistrict]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'senderRegion') {
      setFormData((prev) => ({ ...prev, [name]: value, senderDistrict: '' }));
    } else if (name === 'receiverRegion') {
      setFormData((prev) => ({ ...prev, [name]: value, receiverDistrict: '' }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalParcelData = {
      ...formData,
      senderEmail: user?.email, // change: senderEmail যুক্ত করা হলো
      totalPrice,
      status: 'pending',
      bookingDate: new Date().toISOString()
    };

    Swal.fire({
      title: 'Confirm Booking?',
      text: `Total delivery cost: ৳${totalPrice}. Proceed?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#003d3d',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm & Continue payment!',
      cancelButtonText: 'No, Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post('/parcels', finalParcelData)
          .then(res => {
            if (res.data.insertedId) {
              navigate('/dashboard/my-parcels')
              Swal.fire({
                title: 'Success!',
                text: 'Your parcel has been booked successfully.Please Pay',
                icon: 'success',
                confirmButtonColor: '#003d3d'
              });
              setFormData(initialFormData);
              e.target.reset();
            }
          })
          .catch(error => {
            console.error("Post Error:", error);
            Swal.fire('Error', 'Failed to save booking. Please try again.', 'error');
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4 md:p-10 flex justify-center items-start">
      <div className="bg-white w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-md p-5 sm:p-8 md:p-12 relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#003d3d]">Send A Parcel</h1>
          <div className="bg-[#003d3d] text-[#c5e76d] px-6 py-2 rounded-full font-bold text-lg shadow-sm">
            Total: ৳{totalPrice}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <section className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-100">
            <h2 className="text-lg font-semibold text-[#003d3d] mb-4">1. Parcel Details</h2>
            <div className="flex flex-wrap gap-6 mb-6">
              {['Document', 'Not-Document'].map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="parcelType" value={type} checked={formData.parcelType === type} onChange={handleChange} className="w-5 h-5 accent-green-600" />
                  <span className="text-sm font-medium text-gray-700">{type === 'Not-Document' ? 'Non-Document' : type}</span>
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="parcelName" placeholder="Parcel Name" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500" onChange={handleChange} required />
              <div className="flex items-center gap-2">
                <input type="number" name="parcelWeight" value={formData.parcelWeight} className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green-500" onChange={handleChange} min="1" required />
                <span className="font-bold text-gray-500">KG</span>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-[#003d3d] font-bold text-lg border-b pb-2">Sender Information</h3>
              <input type="text" name="senderName" placeholder="Full Name" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
              <input type="text" name="senderPhone" placeholder="Phone Number" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
              <input type="text" name="senderAddress" placeholder="Full Address" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
              <div className="grid grid-cols-2 gap-2">
                <select name="senderRegion" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.senderRegion} required>
                  <option value="">Region</option>
                  {Object.keys(bdRegions).map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                <select name="senderDistrict" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.senderDistrict} disabled={!formData.senderRegion} required>
                  <option value="">District</option>
                  {formData.senderRegion && bdRegions[formData.senderRegion].map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <textarea name="pickupInstruction" placeholder="Pickup Instruction (Optional)" rows="2" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange}></textarea>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#003d3d] font-bold text-lg border-b pb-2">Receiver Information</h3>
              <input type="text" name="receiverName" placeholder="Full Name" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
              <input type="text" name="receiverPhone" placeholder="Contact Number" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
              <input type="text" name="receiverAddress" placeholder="Full Address" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange} required />
              <div className="grid grid-cols-2 gap-2">
                <select name="receiverRegion" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.receiverRegion} required>
                  <option value="">Region</option>
                  {Object.keys(bdRegions).map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                <select name="receiverDistrict" className="p-3 border rounded-lg text-sm bg-white" onChange={handleChange} value={formData.receiverDistrict} disabled={!formData.receiverRegion} required>
                  <option value="">District</option>
                  {formData.receiverRegion && bdRegions[formData.receiverRegion].map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <textarea name="deliveryInstruction" placeholder="Delivery Instruction (Optional)" rows="2" className="w-full p-3 border rounded-lg text-sm" onChange={handleChange}></textarea>
            </div>
          </div>

          <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-500 italic">* Standard Delivery: 2-3 Business Days.</p>
            <button type="submit" className="w-full sm:w-auto bg-[#c5e76d] hover:bg-[#b5d65c] text-[#003d3d] font-extrabold py-4 px-12 rounded-xl shadow-lg transition-transform active:scale-95">
              Confirm Booking (৳{totalPrice})
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;