// // import React from 'react'
// // import Logo from '../Components/Logo/Logo'
// // import { Outlet } from 'react-router'
// // import AuthImg from '../assets/authImage.png'

// // const AuthLayout = () => {
// //   return (
// //     <div className='max-w-7xl mx-auto'>
// //         <Logo></Logo>
// //         <div className='flex'>
// //             <div className='flex-1'>
// //                 <Outlet></Outlet>
// //             </div>
// //             <div className='flex-1'>
// //                 <img src={AuthImg} alt="" />
// //             </div>
// //         </div>

// //     </div>
// //   )
// // }

// // export default AuthLayout


// import React from 'react'
// import Logo from '../Components/Logo/Logo'
// import { Outlet } from 'react-router-dom'
// import AuthImg from '../assets/authImage.png'

// const AuthLayout = () => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       {/* বাম পাশ: ফর্ম সেকশন */}
//       <div className="flex-1 flex flex-col p-8 md:p-16 lg:p-24 bg-white">
//         <div className="mb-12">
//           <Logo />
//         </div>
//         <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
//           <Outlet />
//         </div>
//       </div>

//       {/* ডান পাশ: ইমেজ সেকশন */}
//       <div className="hidden md:flex flex-1 bg-[#F8FAF3] items-center justify-center p-12">
//         <img 
//           src={AuthImg} 
//           alt="Authentication Illustration" 
//           className="max-w-full h-auto object-contain"
//         />
//       </div>
//     </div>
//   )
// }

// export default AuthLayout

import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import AuthImg from '../assets/authImage.png';

const AuthLayout = () => {
  return (
    // h-screen নিশ্চিত করে যে পেজটি ডিভাইসের উচ্চতার সমান হবে
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white">
      
      {/* বাম পাশ: ফর্ম সেকশন */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-20 overflow-y-auto">
        <div className="mb-8">
          <Logo />
        </div>
        
        {/* কন্টেন্ট যেন মাঝখানে থাকে */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>

      {/* ডান পাশ: ইমেজ সেকশন */}
      <div className="hidden md:flex flex-1 bg-[#F8FAF3] items-center justify-center p-10">
        <img 
          src={AuthImg} 
          alt="Authentication Illustration" 
          className="max-w-[85%] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AuthLayout;