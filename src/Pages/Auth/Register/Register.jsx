// // // import React from 'react'

// // // const Register = () => {
// // //   return (
// // //     <div>
      
// // //     </div>
// // //   )
// // // }

// // // export default Register


// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { FcGoogle } from 'react-icons/fc';
// // // import { LuUserPlus } from "react-icons/lu"; // প্রোফাইল আইকনের জন্য

// // // const Register = () => {
// // //   // ফর্ম ডেটা হ্যান্ডেল করার জন্য স্টেট হুক
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     password: '',
// // //     photo: null
// // //   });

// // //   // ইনপুট চেঞ্জ হ্যান্ডলার
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   // ফর্ম সাবমিট হ্যান্ডলার
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // এখানে আপনি কনসোলে ডেটা দেখতে পাবেন
// // //     console.log("Registration Data Submitted:", formData);
// // //     alert("ALhamdulliah! Form submitted successfully. Check console for data.");
// // //   };

// // //   return (
// // //     <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
// // //       {/* Header */}
// // //       <div className="mb-6">
// // //         <h1 className="text-3xl md:text-4xl font-bold text-[#03373D] mb-1">Create an Account</h1>
// // //         <p className="text-gray-500 text-sm">Register with ZapShift</p>
// // //       </div>

// // //       {/* Profile Photo Upload Placeholder */}
// // //       <div className="mb-6 flex justify-start">
// // //         <div className="relative w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C6E87A] transition-colors cursor-pointer group">
// // //           <LuUserPlus className="text-gray-400 group-hover:text-[#C6E87A]" size={24} />
// // //           <div className="absolute -right-1 -bottom-1 bg-[#C6E87A] rounded-full p-1 border-2 border-white text-[10px] text-[#03373D] font-bold">
// // //             +
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         {/* Name Field */}
// // //         <div className="space-y-1.5">
// // //           <label className="block text-sm font-semibold text-gray-700">Name</label>
// // //           <input 
// // //             type="text" 
// // //             name="name"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //             placeholder="Name" 
// // //             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// // //             required
// // //           />
// // //         </div>

// // //         {/* Email Field */}
// // //         <div className="space-y-1.5">
// // //           <label className="block text-sm font-semibold text-gray-700">Email</label>
// // //           <input 
// // //             type="email" 
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //             placeholder="Email" 
// // //             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// // //             required
// // //           />
// // //         </div>

// // //         {/* Password Field */}
// // //         <div className="space-y-1.5">
// // //           <label className="block text-sm font-semibold text-gray-700">Password</label>
// // //           <input 
// // //             type="password" 
// // //             name="password"
// // //             value={formData.password}
// // //             onChange={handleChange}
// // //             placeholder="Password" 
// // //             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// // //             required
// // //           />
// // //         </div>

// // //         {/* Register Button */}
// // //         <button 
// // //           type="submit" 
// // //           className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-lg hover:bg-[#b8da6d] transition-all shadow-sm active:scale-[0.98] mt-2"
// // //         >
// // //           Register
// // //         </button>
// // //       </form>

// // //       {/* Login Link */}
// // //       <div className="mt-5 text-center text-sm text-gray-600">
// // //         Already have an account? <Link to="/login" className="text-[#A3C644] font-bold hover:underline ml-1">Login</Link>
// // //       </div>

// // //       {/* Or Divider */}
// // //       <div className="relative my-6">
// // //         <div className="absolute inset-0 flex items-center">
// // //           <div className="w-full border-t border-gray-100"></div>
// // //         </div>
// // //         <div className="relative flex justify-center text-xs uppercase">
// // //           <span className="px-3 bg-white text-gray-400 font-medium">Or</span>
// // //         </div>
// // //       </div>

// // //       {/* Google Register */}
// // //       <button 
// // //         type="button"
// // //         className="w-full flex items-center justify-center gap-3 bg-[#E9EDF2] py-3 rounded-lg hover:bg-[#dee2e6] transition-all font-semibold text-[#03373D] text-sm"
// // //       >
// // //         <FcGoogle size={22} />
// // //         Register with google
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Register;

// // // import React, { useState, useRef } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { FcGoogle } from 'react-icons/fc';
// // // import { LuUserPlus } from "react-icons/lu";

// // // const Register = () => {
// // //   const fileInputRef = useRef(null);
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     password: '',
// // //     photo: null, // এখানে ইমেজ ফাইল স্টোর হবে
// // //     photoUrl: '' // এখানে কনসোলে দেখানোর জন্য URL থাকবে
// // //   });

// // //   // ইনপুট চেঞ্জ হ্যান্ডলার
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({ ...formData, [name]: value });
// // //   };

// // //   // ইমেজ সিলেক্ট হ্যান্ডলার
// // //   const handleImageChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       const previewUrl = URL.createObjectURL(file);
// // //       setFormData({
// // //         ...formData,
// // //         photo: file,
// // //         photoUrl: previewUrl
// // //       });
// // //     }
// // //   };

// // //   // প্রোফাইল আইকনে ক্লিক করলে গ্যালারি ওপেন হবে
// // //   const triggerFileInput = () => {
// // //     fileInputRef.current.click();
// // //   };

// // //   // ফর্ম সাবমিট হ্যান্ডলার
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // কনসোলে সব ডেটা এবং ইমেজের লোকাল URL দেখা যাবে
// // //     console.log("Registration Data Submitted:", {
// // //       Name: formData.name,
// // //       Email: formData.email,
// // //       Password: formData.password,
// // //       ImageUrl: formData.photoUrl
// // //     });
// // //     alert("ALhamdulliah! Registration submitted. Check console for Image URL.");
// // //   };

// // //   return (
// // //     <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
// // //       {/* Header */}
// // //       <div className="mb-6">
// // //         <h1 className="text-3xl md:text-4xl font-bold text-[#03373D] mb-1 leading-tight">Create an Account</h1>
// // //         <p className="text-gray-500 text-sm">Register with ZapShift</p>
// // //       </div>

// // //       {/* Hidden File Input */}
// // //       <input 
// // //         type="file" 
// // //         ref={fileInputRef} 
// // //         onChange={handleImageChange} 
// // //         accept="image/*" 
// // //         className="hidden" 
// // //       />

// // //       {/* Profile Photo Upload Section */}
// // //       <div className="mb-6 flex justify-start">
// // //         <div 
// // //           onClick={triggerFileInput}
// // //           className="relative w-20 h-20 bg-[#F0F2F5] rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C6E87A] transition-all cursor-pointer overflow-hidden group"
// // //         >
// // //           {formData.photoUrl ? (
// // //             <img src={formData.photoUrl} alt="Preview" className="w-full h-full object-cover" />
// // //           ) : (
// // //             <LuUserPlus className="text-gray-400 group-hover:text-[#C6E87A]" size={28} />
// // //           )}
          
// // //           <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
// // //             <span className="text-[10px] text-white font-bold bg-[#03373D]/50 px-2 py-1 rounded">Change</span>
// // //           </div>

// // //           <div className="absolute right-0 bottom-1 bg-[#C6E87A] rounded-full p-1 border-2 border-white text-[12px] text-[#03373D] font-bold shadow-sm">
// // //             +
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         <div className="space-y-1.5">
// // //           <label className="block text-sm font-semibold text-[#03373D]">Name</label>
// // //           <input 
// // //             type="text" 
// // //             name="name"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //             placeholder="Enter your name" 
// // //             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 focus:border-[#C6E87A] transition-all bg-white"
// // //             required
// // //           />
// // //         </div>

// // //         <div className="space-y-1.5">
// // //           <label className="block text-sm font-semibold text-[#03373D]">Email</label>
// // //           <input 
// // //             type="email" 
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //             placeholder="Enter your email" 
// // //             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 focus:border-[#C6E87A] transition-all bg-white"
// // //             required
// // //           />
// // //         </div>

// // //         <div className="space-y-1.5">
// // //           <label className="block text-sm font-semibold text-[#03373D]">Password</label>
// // //           <input 
// // //             type="password" 
// // //             name="password"
// // //             value={formData.password}
// // //             onChange={handleChange}
// // //             placeholder="Create a password" 
// // //             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 focus:border-[#C6E87A] transition-all bg-white"
// // //             required
// // //           />
// // //         </div>

// // //         <button 
// // //           type="submit" 
// // //           className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-xl hover:bg-[#b5d66c] transition-all shadow-md shadow-lime-100 active:scale-[0.98] mt-2"
// // //         >
// // //           Register
// // //         </button>
// // //       </form>

// // //       <div className="mt-5 text-center text-sm text-gray-600">
// // //         Already have an account? <Link to="/login" className="text-[#88ad2a] font-bold hover:underline ml-1">Login</Link>
// // //       </div>

// // //       <div className="relative my-6">
// // //         <div className="absolute inset-0 flex items-center">
// // //           <div className="w-full border-t border-gray-100"></div>
// // //         </div>
// // //         <div className="relative flex justify-center text-xs uppercase">
// // //           <span className="px-3 bg-white text-gray-400 font-medium">Or continue with</span>
// // //         </div>
// // //       </div>

// // //       {/* Improved Google Register Button */}
// // //       <button 
// // //         type="button"
// // //         className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all font-semibold text-[#03373D] text-sm shadow-sm active:bg-gray-100"
// // //       >
// // //         <FcGoogle size={24} />
// // //         Register with Google
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Register;


// // import React, { useState, useRef } from 'react';
// // import { Link } from 'react-router-dom';
// // import { FcGoogle } from 'react-icons/fc';
// // import { LuUserPlus } from "react-icons/lu";

// // const Register = () => {
// //   const fileInputRef = useRef(null);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     photo: null, 
// //     photoUrl: '' 
// //   });

// //   // পাসওয়ার্ড ভ্যালিডেশন চেক ফাংশন
// //   const validatePassword = (password) => {
// //     // অন্তত ৬ অক্ষর, ১টি বড় হাতের অক্ষর, ১টি ছোট হাতের অক্ষর এবং ১টি স্পেশাল ক্যারেক্টার
// //     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
// //     return pattern.test(password);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const previewUrl = URL.createObjectURL(file);
// //       setFormData({
// //         ...formData,
// //         photo: file,
// //         photoUrl: previewUrl
// //       });
// //     }
// //   };

// //   const triggerFileInput = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // পাসওয়ার্ড চেক
// //     if (!validatePassword(formData.password)) {
// //       alert("Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character.");
// //       return;
// //     }

// //     console.log("Registration Data Submitted:", {
// //       Name: formData.name,
// //       Email: formData.email,
// //       Password: formData.password,
// //       ImageUrl: formData.photoUrl
// //     });
// //     alert("Alhamdulillah! Registration submitted.");
// //   };

// //   return (
// //     <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
// //       <div className="mb-6">
// //         <h1 className="text-3xl md:text-4xl font-bold text-[#03373D] mb-1 leading-tight">Create an Account</h1>
// //         <p className="text-gray-500 text-sm">Register with ZapShift</p>
// //       </div>

// //       <input 
// //         type="file" 
// //         ref={fileInputRef} 
// //         onChange={handleImageChange} 
// //         accept="image/*" 
// //         className="hidden" 
// //       />

// //       <div className="mb-6 flex justify-start">
// //         <div 
// //           onClick={triggerFileInput}
// //           className="relative w-20 h-20 bg-[#F0F2F5] rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C6E87A] transition-all cursor-pointer overflow-hidden group"
// //         >
// //           {formData.photoUrl ? (
// //             <img src={formData.photoUrl} alt="Preview" className="w-full h-full object-cover" />
// //           ) : (
// //             <LuUserPlus className="text-gray-400 group-hover:text-[#C6E87A]" size={28} />
// //           )}
          
// //           <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
// //             <span className="text-[10px] text-white font-bold bg-[#03373D]/50 px-2 py-1 rounded">Change</span>
// //           </div>

// //           <div className="absolute right-0 bottom-1 bg-[#C6E87A] rounded-full p-1 border-2 border-white text-[12px] text-[#03373D] font-bold shadow-sm">
// //             +
// //           </div>
// //         </div>
// //       </div>

// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-[#03373D]">Name</label>
// //           <input 
// //             type="text" 
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             placeholder="Enter your name" 
// //             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 focus:border-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-[#03373D]">Email</label>
// //           <input 
// //             type="email" 
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             placeholder="Enter your email" 
// //             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 focus:border-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-[#03373D]">Password</label>
// //           <input 
// //             type="password" 
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             placeholder="At least 6 chars, uppercase, lowercase & special char" 
// //             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 focus:border-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //           <p className="text-[10px] text-gray-400 mt-1">Min 6 chars: A, a, @</p>
// //         </div>

// //         <button 
// //           type="submit" 
// //           className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-xl hover:bg-[#b5d66c] transition-all shadow-md shadow-lime-100 active:scale-[0.98] mt-2"
// //         >
// //           Register
// //         </button>
// //       </form>

// //       <div className="mt-5 text-center text-sm text-gray-600">
// //         Already have an account? <Link to="/login" className="text-[#88ad2a] font-bold hover:underline ml-1">Login</Link>
// //       </div>

// //       <div className="relative my-6">
// //         <div className="absolute inset-0 flex items-center">
// //           <div className="w-full border-t border-gray-100"></div>
// //         </div>
// //         <div className="relative flex justify-center text-xs uppercase">
// //           <span className="px-3 bg-white text-gray-400 font-medium">Or continue with</span>
// //         </div>
// //       </div>

// //       <button 
// //         type="button"
// //         className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all font-semibold text-[#03373D] text-sm shadow-sm active:bg-gray-100"
// //       >
// //         <FcGoogle size={24} />
// //         Register with Google
// //       </button>
// //     </div>
// //   );
// // };

// // export default Register;


// // import React, { useState, useRef, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { FcGoogle } from 'react-icons/fc';
// // import { LuUserPlus } from "react-icons/lu";

// // const Register = () => {
// //   const fileInputRef = useRef(null);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     photo: null,
// //     photoUrl: ''
// //   });

// //   const [passwordError, setPasswordError] = useState('');

// //   // পাসওয়ার্ড ভ্যালিডেশন প্যাটার্ন
// //   const validatePassword = (password) => {
// //     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
// //     if (!password) {
// //       return ""; // খালি থাকলে মেসেজ দেখাবে না
// //     }
// //     if (!pattern.test(password)) {
// //       return "Password must be 6+ chars with uppercase, lowercase & special char.";
// //     }
// //     return "";
// //   };

// //   // পাসওয়ার্ড পরিবর্তন হওয়ার সাথে সাথে এরর চেক করবে
// //   useEffect(() => {
// //     const error = validatePassword(formData.password);
// //     setPasswordError(error);
// //   }, [formData.password]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const previewUrl = URL.createObjectURL(file);
// //       setFormData({
// //         ...formData,
// //         photo: file,
// //         photoUrl: previewUrl
// //       });
// //     }
// //   };

// //   const triggerFileInput = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     // সাবমিট করার আগে আবার চেক করা হচ্ছে
// //     const finalError = validatePassword(formData.password);
// //     if (finalError) {
// //       setPasswordError(finalError);
// //       return;
// //     }

// //     console.log("Registration Data Submitted:", {
// //       Name: formData.name,
// //       Email: formData.email,
// //       Password: formData.password,
// //       ImageUrl: formData.photoUrl
// //     });
// //     alert("Alhamdulillah! Registration successful.");
// //   };

// //   return (
// //     <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
// //       <div className="mb-6">
// //         <h1 className="text-3xl md:text-4xl font-bold text-[#03373D] mb-1 leading-tight">Create an Account</h1>
// //         <p className="text-gray-500 text-sm">Register with ZapShift</p>
// //       </div>

// //       <input 
// //         type="file" 
// //         ref={fileInputRef} 
// //         onChange={handleImageChange} 
// //         accept="image/*" 
// //         className="hidden" 
// //       />

// //       <div className="mb-6 flex justify-start">
// //         <div 
// //           onClick={triggerFileInput}
// //           className="relative w-20 h-20 bg-[#F0F2F5] rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C6E87A] transition-all cursor-pointer overflow-hidden group"
// //         >
// //           {formData.photoUrl ? (
// //             <img src={formData.photoUrl} alt="Preview" className="w-full h-full object-cover" />
// //           ) : (
// //             <LuUserPlus className="text-gray-400 group-hover:text-[#C6E87A]" size={28} />
// //           )}
          
// //           <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
// //             <span className="text-[10px] text-white font-bold bg-[#03373D]/50 px-2 py-1 rounded">Change</span>
// //           </div>

// //           <div className="absolute right-0 bottom-1 bg-[#C6E87A] rounded-full p-1 border-2 border-white text-[12px] text-[#03373D] font-bold shadow-sm">
// //             +
// //           </div>
// //         </div>
// //       </div>

// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-[#03373D]">Name</label>
// //           <input 
// //             type="text" 
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             placeholder="Enter your name" 
// //             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 focus:border-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-[#03373D]">Email</label>
// //           <input 
// //             type="email" 
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             placeholder="Enter your email" 
// //             className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 focus:border-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-[#03373D]">Password</label>
// //           <input 
// //             type="password" 
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             placeholder="Create a password" 
// //             className={`w-full px-4 py-3 rounded-xl border transition-all bg-white focus:outline-none focus:ring-2 ${passwordError ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#C6E87A]/50 focus:border-[#C6E87A]'}`}
// //             required
// //           />
// //           {/* পাসওয়ার্ড এরর মেসেজ */}
// //           {passwordError && (
// //             <p className="text-red-500 text-[11px] font-medium mt-1 animate-in fade-in duration-300">
// //               {passwordError}
// //             </p>
// //           )}
// //         </div>

// //         <button 
// //           type="submit" 
// //           className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-xl hover:bg-[#b5d66c] transition-all shadow-md shadow-lime-100 active:scale-[0.98] mt-2"
// //         >
// //           Register
// //         </button>
// //       </form>

// //       <div className="mt-5 text-center text-sm text-gray-600">
// //         Already have an account? <Link to="/login" className="text-[#88ad2a] font-bold hover:underline ml-1">Login</Link>
// //       </div>

// //       <div className="relative my-6">
// //         <div className="absolute inset-0 flex items-center">
// //           <div className="w-full border-t border-gray-100"></div>
// //         </div>
// //         <div className="relative flex justify-center text-xs uppercase">
// //           <span className="px-3 bg-white text-gray-400 font-medium">Or continue with</span>
// //         </div>
// //       </div>

// //       <button 
// //         type="button"
// //         className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all font-semibold text-[#03373D] text-sm shadow-sm active:bg-gray-100"
// //       >
// //         <FcGoogle size={24} />
// //         Register with Google
// //       </button>
// //     </div>
// //   );
// // };

// // export default Register;

// import React, { useState, useRef, useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FcGoogle } from 'react-icons/fc';
// import { LuUserPlus } from "react-icons/lu";
// import { AuthContext } from '../../../Contexts/Authcontexts/AuthContext'; // পাথটি চেক করে নিন

// const Register = () => {
//   const { registerUser } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     photo: null,
//     photoUrl: ''
//   });

//   const [passwordError, setPasswordError] = useState('');

//   const validatePassword = (password) => {
//     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
//     if (!password) return ""; 
//     if (!pattern.test(password)) {
//       return "Password must be 6+ chars with uppercase, lowercase & special char.";
//     }
//     return "";
//   };

//   useEffect(() => {
//     const error = validatePassword(formData.password);
//     setPasswordError(error);
//   }, [formData.password]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const previewUrl = URL.createObjectURL(file);
//       setFormData({ ...formData, photo: file, photoUrl: previewUrl });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const finalError = validatePassword(formData.password);
//     if (finalError) {
//       setPasswordError(finalError);
//       return;
//     }

//     // Firebase Registration Logic
//     registerUser(formData.email, formData.password)
//       .then(result => {
//           console.log("Registered User:", result.user);
//           alert("Alhamdulillah! Registration successful.");
//           navigate('/'); // সফল হলে হোম পেজে নিয়ে যাবে
//       })
//       .catch(error => {
//           console.error("Firebase Error:", error.message);
//           alert(error.message);
//       });
//   };

//   return (
//     <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
//       <div className="mb-6">
//         <h1 className="text-3xl md:text-4xl font-bold text-[#03373D] mb-1 leading-tight">Create an Account</h1>
//         <p className="text-gray-500 text-sm">Register with ZapShift</p>
//       </div>

//       <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />

//       <div className="mb-6 flex justify-start">
//         <div onClick={() => fileInputRef.current.click()} className="relative w-20 h-20 bg-[#F0F2F5] rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C6E87A] transition-all cursor-pointer overflow-hidden group">
//           {formData.photoUrl ? (
//             <img src={formData.photoUrl} alt="Preview" className="w-full h-full object-cover" />
//           ) : (
//             <LuUserPlus className="text-gray-400 group-hover:text-[#C6E87A]" size={28} />
//           )}
//           <div className="absolute right-0 bottom-1 bg-[#C6E87A] rounded-full p-1 border-2 border-white text-[12px] text-[#03373D] font-bold shadow-sm">+</div>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="space-y-1.5">
//           <label className="block text-sm font-semibold text-[#03373D]">Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 bg-white" required />
//         </div>

//         <div className="space-y-1.5">
//           <label className="block text-sm font-semibold text-[#03373D]">Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 bg-white" required />
//         </div>

//         <div className="space-y-1.5">
//           <label className="block text-sm font-semibold text-[#03373D]">Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" className={`w-full px-4 py-3 rounded-xl border transition-all bg-white focus:outline-none focus:ring-2 ${passwordError ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#C6E87A]/50'}`} required />
//           {passwordError && <p className="text-red-500 text-[11px] font-medium mt-1">{passwordError}</p>}
//         </div>

//         <button type="submit" className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-xl hover:bg-[#b5d66c] shadow-md active:scale-[0.98] mt-2">Register</button>
//       </form>

//       <div className="mt-5 text-center text-sm text-gray-600">
//         Already have an account? <Link to="/login" className="text-[#88ad2a] font-bold hover:underline ml-1">Login</Link>
//       </div>

//       <div className="relative my-6 text-center">
//         <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
//         <span className="relative px-3 bg-white text-gray-400 text-xs uppercase font-medium">Or continue with</span>
//       </div>

//       <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-xl hover:bg-gray-50 font-semibold text-[#03373D] text-sm shadow-sm">
//         <FcGoogle size={24} /> Register with Google
//       </button>
//     </div>
//   );
// };

// export default Register;


import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { LuUserPlus } from "react-icons/lu";
import { AuthContext } from '../../../Contexts/Authcontexts/AuthContext';

const Register = () => {
  const { registerUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', photo: null, photoUrl: ''
  });

  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!password) return ""; 
    if (!pattern.test(password)) return "Password must be 6+ chars with uppercase, lowercase & special char.";
    return "";
  };

  useEffect(() => {
    const error = validatePassword(formData.password);
    setPasswordError(error);
  }, [formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData({ ...formData, photo: file, photoUrl: previewUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalError = validatePassword(formData.password);
    if (finalError) {
      setPasswordError(finalError);
      return;
    }

    registerUser(formData.email, formData.password)
      .then(result => {
          alert("Alhamdulillah! Registration successful.");
          navigate('/'); 
      })
      .catch(error => alert(error.message));
  };

  // গুগল লগইন হ্যান্ডলার
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        alert("Alhamdulillah! Registration with Google Successful.");
        navigate('/');
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#03373D] mb-1 leading-tight">Create an Account</h1>
        <p className="text-gray-500 text-sm">Register with ZapShift</p>
      </div>

      <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />

      <div className="mb-6 flex justify-start">
        <div onClick={() => fileInputRef.current.click()} className="relative w-20 h-20 bg-[#F0F2F5] rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-[#C6E87A] transition-all cursor-pointer overflow-hidden group">
          {formData.photoUrl ? (
            <img src={formData.photoUrl} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <LuUserPlus className="text-gray-400 group-hover:text-[#C6E87A]" size={28} />
          )}
          <div className="absolute right-0 bottom-1 bg-[#C6E87A] rounded-full p-1 border-2 border-white text-[12px] text-[#03373D] font-bold shadow-sm">+</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-[#03373D]">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 bg-white" required />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-[#03373D]">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A]/50 bg-white" required />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-[#03373D]">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" className={`w-full px-4 py-3 rounded-xl border transition-all bg-white focus:outline-none focus:ring-2 ${passwordError ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-[#C6E87A]/50'}`} required />
          {passwordError && <p className="text-red-500 text-[11px] font-medium mt-1">{passwordError}</p>}
        </div>
        <button type="submit" className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-xl hover:bg-[#b5d66c] shadow-md active:scale-[0.98] mt-2">Register</button>
      </form>

      <div className="mt-5 text-center text-sm text-gray-600">
        Already have an account? <Link to="/login" className="text-[#88ad2a] font-bold hover:underline ml-1">Login</Link>
      </div>

      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
        <span className="relative px-3 bg-white text-gray-400 text-xs uppercase font-medium">Or continue with</span>
      </div>

      <button 
        onClick={handleGoogleLogin}
        type="button" 
        className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-xl hover:bg-gray-50 font-semibold text-[#03373D] text-sm shadow-sm"
      >
        <FcGoogle size={24} /> Register with Google
      </button>
    </div>
  );
};

export default Register;