// // // // import React from 'react'

// // // // const Login = () => {
// // // //   return (
// // // //     <div>
// // // //       <h2>ALhamdulliah this is login page</h2>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Login


// // // import React from 'react'
// // // import { Link } from 'react-router-dom'
// // // import { FcGoogle } from 'react-icons/fc'; // npm install react-icons

// // // const Login = () => {
// // //   return (
// // //     <div className="w-full">
// // //       <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
// // //       <p className="text-gray-500 mb-8">Login with ZapShift</p>

// // //       <form className="space-y-5">
// // //         {/* Email Field */}
// // //         <div>
// // //           <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
// // //           <input 
// // //             type="email" 
// // //             placeholder="Email" 
// // //             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// // //           />
// // //         </div>

// // //         {/* Password Field */}
// // //         <div>
// // //           <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
// // //           <input 
// // //             type="password" 
// // //             placeholder="Password" 
// // //             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// // //           />
// // //         </div>

// // //         {/* Forget Password */}
// // //         <div className="text-right">
// // //           <Link to="/forget-password" name="forget-password" className="text-sm text-gray-400 hover:underline">
// // //             Forget Password?
// // //           </Link>
// // //         </div>

// // //         {/* Login Button */}
// // //         <button 
// // //           type="submit" 
// // //           className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3 rounded-lg hover:opacity-90 transition-all shadow-sm"
// // //         >
// // //           Login
// // //         </button>
// // //       </form>

// // //       {/* Register Link */}
// // //       <div className="mt-6 text-center text-gray-600">
// // //         Don't have any account? <Link to="/register" className="text-[#A3C644] font-semibold hover:underline">Register</Link>
// // //       </div>

// // //       {/* Divider */}
// // //       <div className="relative my-8">
// // //         <div className="absolute inset-0 flex items-center">
// // //           <div className="w-full border-t border-gray-100"></div>
// // //         </div>
// // //         <div className="relative flex justify-center text-sm">
// // //           <span className="px-2 bg-white text-gray-400">Or</span>
// // //         </div>
// // //       </div>

// // //       {/* Google Login Button */}
// // //       <button 
// // //         className="w-full flex items-center justify-center gap-3 bg-[#E9EDF2] py-3 rounded-lg hover:bg-gray-200 transition-all font-semibold text-[#03373D]"
// // //       >
// // //         <FcGoogle size={24} />
// // //         Login with google
// // //       </button>
// // //     </div>
// // //   )
// // // }

// // // export default Login

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { FcGoogle } from 'react-icons/fc';

// // const Login = () => {
// //   return (
// //     <div className="w-full">
// //       <div className="mb-6">
// //         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Welcome Back</h1>
// //         <p className="text-gray-500 text-sm">Login with ZapShift</p>
// //       </div>

// //       <form className="space-y-4">
// //         {/* Email Field */}
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
// //           <input 
// //             type="email" 
// //             placeholder="Email" 
// //             className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         {/* Password Field */}
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
// //           <input 
// //             type="password" 
// //             placeholder="Password" 
// //             className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         {/* Forget Password */}
// //         <div className="text-right">
// //           <Link to="/forget-password" name="forget-password" className="text-xs text-gray-400 hover:underline">
// //             Forget Password?
// //           </Link>
// //         </div>

// //         {/* Login Button */}
// //         <button 
// //           type="submit" 
// //           className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3 rounded-lg hover:opacity-90 transition-all shadow-sm mt-2"
// //         >
// //           Login
// //         </button>
// //       </form>

// //       {/* Register Link */}
// //       <div className="mt-4 text-center text-sm text-gray-600">
// //         Don't have any account? <Link to="/register" className="text-[#A3C644] font-semibold hover:underline">Register</Link>
// //       </div>

// //       {/* Divider */}
// //       <div className="relative my-6">
// //         <div className="absolute inset-0 flex items-center">
// //           <div className="w-full border-t border-gray-100"></div>
// //         </div>
// //         <div className="relative flex justify-center text-xs uppercase">
// //           <span className="px-2 bg-white text-gray-400">Or</span>
// //         </div>
// //       </div>

// //       {/* Google Login Button */}
// //       <button 
// //         type="button"
// //         className="w-full flex items-center justify-center gap-3 bg-[#E9EDF2] py-2.5 rounded-lg hover:bg-gray-200 transition-all font-semibold text-[#03373D] text-sm"
// //       >
// //         <FcGoogle size={20} />
// //         Login with google
// //       </button>
// //     </div>
// //   );
// // };

// // export default Login;

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { FcGoogle } from 'react-icons/fc';

// // const Login = () => {
// //   return (
// //     <div className="w-full animate-in fade-in duration-500">
// //       <div className="mb-6">
// //         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 leading-tight">Welcome Back</h1>
// //         <p className="text-gray-500 text-sm">Login with ZapShift</p>
// //       </div>

// //       <form className="space-y-4">
// //         {/* Email Field */}
// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-gray-700">Email</label>
// //           <input 
// //             type="email" 
// //             placeholder="Email" 
// //             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         {/* Password Field */}
// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-gray-700">Password</label>
// //           <input 
// //             type="password" 
// //             placeholder="Password" 
// //             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         {/* Forget Password */}
// //         <div className="flex justify-start">
// //           <Link to="/forget-password" name="forget-password" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
// //             Forget Password?
// //           </Link>
// //         </div>

// //         {/* Login Button */}
// //         <button 
// //           type="submit" 
// //           className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-lg hover:bg-[#b8da6d] transition-all shadow-sm active:scale-[0.98]"
// //         >
// //           Login
// //         </button>
// //       </form>

// //       {/* Register Link */}
// //       <div className="mt-5 text-center text-sm text-gray-600">
// //         Don't have any account? <Link to="/register" className="text-[#A3C644] font-bold hover:underline ml-1">Register</Link>
// //       </div>

// //       {/* Or Divider */}
// //       <div className="relative my-6">
// //         <div className="absolute inset-0 flex items-center">
// //           <div className="w-full border-t border-gray-100"></div>
// //         </div>
// //         <div className="relative flex justify-center text-xs uppercase">
// //           <span className="px-3 bg-white text-gray-400 font-medium">Or</span>
// //         </div>
// //       </div>

// //       {/* Google Login */}
// //       <button 
// //         type="button"
// //         className="w-full flex items-center justify-center gap-3 bg-[#E9EDF2] py-3 rounded-lg hover:bg-[#dee2e6] transition-all font-semibold text-[#03373D] text-sm"
// //       >
// //         <FcGoogle size={22} />
// //         Login with google
// //       </button>
// //     </div>
// //   );
// // };

// // export default Login;


// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { FcGoogle } from 'react-icons/fc';

// // const Login = () => {
// //   const navigate = useNavigate(); // লগইন সফল হলে অন্য পেজে যাওয়ার জন্য
  
// //   // ফর্ম ডেটা হ্যান্ডেল করার জন্য স্টেট
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: ''
// //   });

// //   // ইনপুট চেঞ্জ হ্যান্ডলার
// //   const handleChange = (e) => {
// //     const { type, value, name } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   // ফর্ম সাবমিট এবং ভ্যালিডেশন হ্যান্ডলার
// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     // স্যাম্পল চেক (আপনি এখানে আপনার আসল ডাটাবেজ চেক বসাবেন)
// //     const dummyEmail = "user@zapshift.com";
// //     const dummyPassword = "password123";

// //     console.log("Login Attempt with:", formData);

// //     if (formData.email === dummyEmail && formData.password === dummyPassword) {
// //       alert("Alhamdulillah! Login Successful.");
// //       // লগইন সফল হলে আপনি চাইলে ড্যাশবোর্ড বা হোমে পাঠাতে পারেন
// //       // navigate('/'); 
// //     } else {
// //       alert("Error: Data does not match! Use user@zapshift.com and password123");
// //     }
// //   };

// //   return (
// //     <div className="w-full animate-in fade-in duration-500">
// //       <div className="mb-6">
// //         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 leading-tight">Welcome Back</h1>
// //         <p className="text-gray-500 text-sm">Login with ZapShift</p>
// //       </div>

// //       <form onSubmit={handleLogin} className="space-y-4">
// //         {/* Email Field */}
// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-gray-700">Email</label>
// //           <input 
// //             type="email" 
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             placeholder="Email" 
// //             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         {/* Password Field */}
// //         <div className="space-y-1.5">
// //           <label className="block text-sm font-semibold text-gray-700">Password</label>
// //           <input 
// //             type="password" 
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             placeholder="Password" 
// //             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
// //             required
// //           />
// //         </div>

// //         {/* Forget Password */}
// //         <div className="flex justify-start">
// //           <Link to="/forget-password" name="forget-password" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
// //             Forget Password?
// //           </Link>
// //         </div>

// //         {/* Login Button */}
// //         <button 
// //           type="submit" 
// //           className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-lg hover:bg-[#b8da6d] transition-all shadow-sm active:scale-[0.98]"
// //         >
// //           Login
// //         </button>
// //       </form>

// //       {/* Register Link */}
// //       <div className="mt-5 text-center text-sm text-gray-600">
// //         Don't have any account? <Link to="/register" className="text-[#A3C644] font-bold hover:underline ml-1">Register</Link>
// //       </div>

// //       {/* Or Divider */}
// //       <div className="relative my-6">
// //         <div className="absolute inset-0 flex items-center">
// //           <div className="w-full border-t border-gray-100"></div>
// //         </div>
// //         <div className="relative flex justify-center text-xs uppercase">
// //           <span className="px-3 bg-white text-gray-400 font-medium">Or</span>
// //         </div>
// //       </div>

// //       {/* Google Login - Improved Design */}
// //       <button 
// //         type="button"
// //         className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold text-[#03373D] text-sm shadow-sm"
// //       >
// //         <FcGoogle size={22} />
// //         Login with google
// //       </button>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FcGoogle } from 'react-icons/fc';
// import { AuthContext } from '../../../Contexts/Authcontexts/AuthContext'; // আপনার সঠিক পাথটি চেক করে নিন

// const Login = () => {
//   const { signInUser } = useContext(AuthContext); // AuthContext থেকে লগইন ফাংশনটি নেওয়া হলো
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Firebase Login Logic
//     signInUser(formData.email, formData.password)
//       .then(result => {
//         const user = result.user;
//         console.log("Logged in user:", user);
//         alert("Alhamdulillah! Login Successful.");
//         navigate('/'); // লগইন সফল হলে হোম পেজে পাঠাবে
//       })
//       .catch(error => {
//         console.error("Login Error:", error.message);
//         // যদি ইউজার রেজিস্টার করা না থাকে বা পাসওয়ার্ড ভুল হয়
//         alert("Error: Invalid email or password. Please register first!");
//       });
//   };

//   return (
//     <div className="w-full animate-in fade-in duration-500">
//       <div className="mb-6">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 leading-tight">Welcome Back</h1>
//         <p className="text-gray-500 text-sm">Login with ZapShift</p>
//       </div>

//       <form onSubmit={handleLogin} className="space-y-4">
//         {/* Email Field */}
//         <div className="space-y-1.5">
//           <label className="block text-sm font-semibold text-gray-700">Email</label>
//           <input 
//             type="email" 
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email" 
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
//             required
//           />
//         </div>

//         {/* Password Field */}
//         <div className="space-y-1.5">
//           <label className="block text-sm font-semibold text-gray-700">Password</label>
//           <input 
//             type="password" 
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password" 
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white"
//             required
//           />
//         </div>

//         {/* Forget Password */}
//         <div className="flex justify-start">
//           <Link to="/forget-password" underline="hover" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
//             Forget Password?
//           </Link>
//         </div>

//         {/* Login Button */}
//         <button 
//           type="submit" 
//           className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-lg hover:bg-[#b8da6d] transition-all shadow-sm active:scale-[0.98]"
//         >
//           Login
//         </button>
//       </form>

//       {/* Register Link */}
//       <div className="mt-5 text-center text-sm text-gray-600">
//         Don't have any account? <Link to="/register" className="text-[#A3C644] font-bold hover:underline ml-1">Register</Link>
//       </div>

//       {/* Or Divider */}
//       <div className="relative my-6">
//         <div className="absolute inset-0 flex items-center">
//           <div className="w-full border-t border-gray-100"></div>
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="px-3 bg-white text-gray-400 font-medium">Or</span>
//         </div>
//       </div>

//       {/* Google Login */}
//       <button 
//         type="button"
//         className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold text-[#03373D] text-sm shadow-sm"
//       >
//         <FcGoogle size={22} />
//         Login with google
//       </button>
//     </div>
//   );
// };

// export default Login;


// import React, { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FcGoogle } from 'react-icons/fc';
// import { AuthContext } from '../../../Contexts/Authcontexts/AuthContext';

// const Login = () => {
//   const { signInUser, signInWithGoogle } = useContext(AuthContext); 
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     signInUser(formData.email, formData.password)
//       .then(result => {
//         console.log("Logged in user:", result.user);
//         alert("Alhamdulillah! Login Successful.");
//         navigate('/'); 
//       })
//       .catch(error => {
//         console.error("Login Error:", error.message);
//         alert("Error: Invalid email or password!");
//       });
//   };

//   // গুগল লগইন হ্যান্ডলার
//   const handleGoogleLogin = () => {
//     signInWithGoogle()
//       .then(result => {
//         console.log("Google User:", result.user);
//         alert("Alhamdulillah! Google Login Successful.");
//         navigate('/');
//       })
//       .catch(error => console.log(error.message));
//   };

//   return (
//     <div className="w-full animate-in fade-in duration-500">
//       <div className="mb-6">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 leading-tight">Welcome Back</h1>
//         <p className="text-gray-500 text-sm">Login with ZapShift</p>
//       </div>

//       <form onSubmit={handleLogin} className="space-y-4">
//         <div className="space-y-1.5">
//           <label className="block text-sm font-semibold text-gray-700">Email</label>
//           <input 
//             type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" 
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white" required
//           />
//         </div>
//         <div className="space-y-1.5">
//           <label className="block text-sm font-semibold text-gray-700">Password</label>
//           <input 
//             type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" 
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white" required
//           />
//         </div>
//         <div className="flex justify-start">
//           <Link to="/forget-password" underline="hover" className="text-xs text-gray-400 hover:text-gray-600">Forget Password?</Link>
//         </div>
//         <button type="submit" className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-lg hover:bg-[#b8da6d] shadow-sm active:scale-[0.98]">Login</button>
//       </form>

//       <div className="mt-5 text-center text-sm text-gray-600">
//         Don't have any account? <Link to="/register" className="text-[#A3C644] font-bold hover:underline ml-1">Register</Link>
//       </div>

//       <div className="relative my-6 text-center">
//         <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
//         <span className="relative px-3 bg-white text-gray-400 text-xs uppercase font-medium">Or</span>
//       </div>

//       <button 
//         onClick={handleGoogleLogin}
//         type="button" 
//         className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-lg hover:bg-gray-50 font-semibold text-[#03373D] text-sm shadow-sm"
//       >
//         <FcGoogle size={22} /> Login with google
//       </button>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Contexts/Authcontexts/AuthContext';

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext); 
  const navigate = useNavigate();
  const location = useLocation();

  // যদি প্রাইভেট রাউট থেকে রিডাইরেক্ট হয়ে আসে তবে সেই পাথ, নাহলে হোম পাথ
  const from = location.state?.from?.pathname || "/";
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(formData.email, formData.password)
      .then(result => {
        console.log("Logged in user:", result.user);
        alert("Alhamdulillah! Login Successful.");
        // ইউজারকে কাঙ্ক্ষিত পেজে পাঠিয়ে দেওয়া হচ্ছে
        navigate(from, { replace: true }); 
      })
      .catch(error => {
        console.error("Login Error:", error.message);
        alert("Error: Invalid email or password!");
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        alert("Alhamdulillah! Google Login Successful.");
        navigate(from, { replace: true });
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 leading-tight">Welcome Back</h1>
        <p className="text-gray-500 text-sm">Login with ZapShift</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-gray-700">Email</label>
          <input 
            type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white" required
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-gray-700">Password</label>
          <input 
            type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6E87A] transition-all bg-white" required
          />
        </div>
        <div className="flex justify-start">
          <Link to="/forget-password" underline="hover" className="text-xs text-gray-400 hover:text-gray-600">Forget Password?</Link>
        </div>
        <button type="submit" className="w-full bg-[#C6E87A] text-[#03373D] font-bold py-3.5 rounded-lg hover:bg-[#b8da6d] shadow-sm active:scale-[0.98]">Login</button>
      </form>

      <div className="mt-5 text-center text-sm text-gray-600">
        Don't have any account? <Link to="/register" className="text-[#A3C644] font-bold hover:underline ml-1">Register</Link>
      </div>

      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
        <span className="relative px-3 bg-white text-gray-400 text-xs uppercase font-medium">Or</span>
      </div>

      <button onClick={handleGoogleLogin} type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 rounded-lg hover:bg-gray-50 font-semibold text-[#03373D] text-sm shadow-sm">
        <FcGoogle size={22} /> Login with google
      </button>
    </div>
  );
};

export default Login;