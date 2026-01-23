// // import React from 'react'

// // const PaymentSucess = () => {
// //   return (
// //     <div>
// //       <h1>Alhamdulliah Prement Sucess</h1>
// //     </div>
// //   )
// // }

// // export default PaymentSucess


// // import React, { useEffect, useState } from 'react';
// // import { Link, useSearchParams } from 'react-router-dom';
// // import Confetti from 'react-confetti';
// // import { FaCheckCircle, FaBoxOpen, FaArrowRight } from 'react-icons/fa';

// // const PaymentSuccess = () => {
// //     const [searchParams] = useSearchParams();
// //     const sessionId = searchParams.get('session_id');
// //     const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });

// //     // উইন্ডো রিসাইজ হ্যান্ডেল করার জন্য
// //     const detectSize = () => {
// //         setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
// //     }

// //     useEffect(() => {
// //         window.addEventListener('resize', detectSize);
// //         return () => {
// //             window.removeEventListener('resize', detectSize);
// //         }
// //     }, [windowDimension]);

// //     return (
// //         <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
// //             {/* পেমেন্ট সাকসেস হলে কনফেটি এনিমেশন দেখাবে */}
// //             <Confetti
// //                 width={windowDimension.width}
// //                 height={windowDimension.height}
// //                 recycle={false}
// //                 numberOfPieces={500}
// //                 gravity={0.1}
// //             />

// //             <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-green-100 relative overflow-hidden">
// //                 {/* Decorative Background Element */}
// //                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full blur-3xl"></div>
                
// //                 <div className="flex justify-center mb-6">
// //                     <div className="bg-green-100 p-4 rounded-full animate-bounce">
// //                         <FaCheckCircle className="text-green-600 text-6xl" />
// //                     </div>
// //                 </div>

// //                 <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
// //                     Alhamdulillah!
// //                 </h1>
// //                 <p className="text-xl font-semibold text-green-600 mb-4">
// //                     Payment Successful
// //                 </p>
                
// //                 <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-dashed border-gray-300">
// //                     <p className="text-sm text-gray-500 mb-1">Transaction ID/Session:</p>
// //                     <p className="text-xs font-mono text-gray-700 break-all bg-white p-2 rounded shadow-sm">
// //                         {sessionId ? sessionId : "N/A"}
// //                     </p>
// //                 </div>

// //                 <p className="text-gray-600 mb-8">
// //                     আপনার পার্সেলটি সফলভাবে পেমেন্ট করা হয়েছে। আমরা দ্রুত এটি ডেলিভারি করার ব্যবস্থা করছি।
// //                 </p>

// //                 <div className="flex flex-col gap-3">
// //                     <Link 
// //                         to="/dashboard/my-parcels" 
// //                         className="flex items-center justify-center gap-2 bg-[#003d3d] hover:bg-[#005a5a] text-white font-bold py-3 px-6 rounded-xl transition-all transform active:scale-95"
// //                     >
// //                         <FaBoxOpen /> My Parcels
// //                     </Link>
                    
// //                     <Link 
// //                         to="/" 
// //                         className="flex items-center justify-center gap-2 text-[#003d3d] font-semibold hover:underline"
// //                     >
// //                         Go to Home <FaArrowRight size={12} />
// //                     </Link>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PaymentSuccess;

// // import React, { useEffect, useState } from "react";
// // import { useSearchParams, Link } from "react-router-dom";
// // import Confetti from "react-confetti";
// // import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// // import { FaCheckCircle, FaBoxOpen, FaArrowRight } from "react-icons/fa";

// // const PaymentSuccess = () => {
// //   const [searchParams] = useSearchParams();
// //   const sessionId = searchParams.get("session_id");
// //   const [sessionData, setSessionData] = useState(null);
// //   const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
// //   const axiosSecure = useAxiosSecure();

// //   useEffect(() => {
// //     const detectSize = () => setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
// //     window.addEventListener("resize", detectSize);
// //     return () => window.removeEventListener("resize", detectSize);
// //   }, []);

// //   useEffect(() => {
// //     if (sessionId) {
// //       axiosSecure.get(`/stripe-session/${sessionId}`)
// //         .then(res => setSessionData(res.data))
// //         .catch(err => console.error(err));
// //     }
// //   }, [sessionId]);

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
// //       <Confetti width={windowDimension.width} height={windowDimension.height} recycle={false} numberOfPieces={500} gravity={0.1} />
// //       <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-green-100 relative overflow-hidden">
// //         <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full blur-3xl"></div>
// //         <div className="flex justify-center mb-6">
// //           <div className="bg-green-100 p-4 rounded-full animate-bounce">
// //             <FaCheckCircle className="text-green-600 text-6xl" />
// //           </div>
// //         </div>
// //         <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Alhamdulillah!</h1>
// //         <p className="text-xl font-semibold text-green-600 mb-4">Payment Successful</p>

// //         <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-dashed border-gray-300">
// //           <p className="text-sm text-gray-500 mb-1">Transaction ID / Session:</p>
// //           <p className="text-xs font-mono text-gray-700 break-all bg-white p-2 rounded shadow-sm">{sessionId || "N/A"}</p>
// //         </div>

// //         {sessionData && (
// //           <div className="bg-green-50 p-3 rounded-xl mb-4">
// //             <p className="text-sm text-gray-700">Parcel ID: {sessionData.metadata.parcelId}</p>
// //             <p className="text-sm text-gray-700">Amount: ${sessionData.amount_total / 100}</p>
// //             <p className="text-sm text-gray-700">Email: {sessionData.customer_email}</p>
// //           </div>
// //         )}

// //         <p className="text-gray-600 mb-8">আপনার পার্সেলটি সফলভাবে পেমেন্ট করা হয়েছে। আমরা দ্রুত এটি ডেলিভারি করার ব্যবস্থা করছি।</p>

// //         <div className="flex flex-col gap-3">
// //           <Link to="/dashboard/my-parcels" className="flex items-center justify-center gap-2 bg-[#003d3d] hover:bg-[#005a5a] text-white font-bold py-3 px-6 rounded-xl transition-all transform active:scale-95">
// //             <FaBoxOpen /> My Parcels
// //           </Link>
// //           <Link to="/" className="flex items-center justify-center gap-2 text-[#003d3d] font-semibold hover:underline">
// //             Go to Home <FaArrowRight size={12} />
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentSuccess;


// import React, { useEffect, useState } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import Confetti from "react-confetti";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { FaCheckCircle, FaBoxOpen, FaArrowRight } from "react-icons/fa";

// const PaymentSuccess = () => {
//   const [searchParams] = useSearchParams();
//   const sessionId = searchParams.get("session_id");
//   const [sessionData, setSessionData] = useState(null);
//   const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
//   const axiosSecure = useAxiosSecure();

//   useEffect(() => {
//     const detectSize = () => setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
//     window.addEventListener("resize", detectSize);
//     return () => window.removeEventListener("resize", detectSize);
//   }, []);

//   useEffect(() => {
//     if (sessionId) {
//       axiosSecure.get(`/stripe-session/${sessionId}`)
//         .then(res => setSessionData(res.data))
//         .catch(err => console.error(err));
//     }
//   }, [sessionId]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <Confetti width={windowDimension.width} height={windowDimension.height} recycle={false} numberOfPieces={500} gravity={0.1} />
//       <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-green-100 relative overflow-hidden">
//         <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full blur-3xl"></div>
//         <div className="flex justify-center mb-6">
//           <div className="bg-green-100 p-4 rounded-full animate-bounce">
//             <FaCheckCircle className="text-green-600 text-6xl" />
//           </div>
//         </div>
//         <h1 className="text-3xl font-extrabold mb-2">Alhamdulillah!</h1>
//         <p className="text-xl font-semibold text-green-600 mb-4">Payment Successful</p>

//         <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-dashed border-gray-300">
//           <p className="text-sm text-gray-500 mb-1">Transaction ID / Session:</p>
//           <p className="text-xs font-mono break-all">{sessionId || "N/A"}</p>
//         </div>

//         {sessionData && (
//           <div className="bg-green-50 p-3 rounded-xl mb-4">
//             <p>Parcel ID: {sessionData.metadata.parcelId}</p>
//             <p>Amount: ${sessionData.amount_total / 100}</p>
//             <p>Email: {sessionData.customer_email}</p>
//           </div>
//         )}

//         <div className="flex flex-col gap-3">
//           <Link to="/dashboard/my-parcels" className="btn btn-primary flex justify-center gap-2"><FaBoxOpen /> My Parcels</Link>
//           <Link to="/" className="text-[#003d3d] font-semibold hover:underline flex items-center gap-2">Go to Home <FaArrowRight size={12} /></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccess;


import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Confetti from "react-confetti";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCheckCircle, FaBoxOpen, FaArrowRight } from "react-icons/fa";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionData, setSessionData] = useState(null);
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const detectSize = () => setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", detectSize);
    return () => window.removeEventListener("resize", detectSize);
  }, []);

  useEffect(() => {
    if (sessionId) {
      axiosSecure.get(`/stripe-session/${sessionId}`)
        .then(res => setSessionData(res.data))
        .catch(err => console.error(err));
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Confetti width={windowDimension.width} height={windowDimension.height} recycle={false} numberOfPieces={500} gravity={0.1} />
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-green-100 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full blur-3xl"></div>
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full animate-bounce">
            <FaCheckCircle className="text-green-600 text-6xl" />
          </div>
        </div>
        <h1 className="text-3xl font-extrabold mb-2">Alhamdulillah!</h1>
        <p className="text-xl font-semibold text-green-600 mb-4">Payment Successful</p>

        <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-dashed border-gray-300">
          <p className="text-sm text-gray-500 mb-1">Transaction ID / Session:</p>
          <p className="text-xs font-mono break-all">{sessionId || "N/A"}</p>
        </div>

        {sessionData && (
          <div className="bg-green-50 p-3 rounded-xl mb-4">
            <p>Parcel ID: {sessionData.metadata.parcelId}</p>
            <p>Amount: ${sessionData.amount_total / 100}</p>
            <p>Email: {sessionData.customer_email}</p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <Link to="/dashboard/my-parcels" className="btn btn-primary flex justify-center gap-2"><FaBoxOpen /> My Parcels</Link>
          <Link to="/" className="text-[#003d3d] font-semibold hover:underline flex items-center gap-2">Go to Home <FaArrowRight size={12} /></Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
