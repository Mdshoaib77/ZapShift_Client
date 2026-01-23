// import React from 'react'

// const PaymentCancelled = () => {
//   return (
//     <div>
//       <h1>Alhamdulliah Payment Cancelled</h1>
//     </div>
//   )
// }

// export default PaymentCancelled


import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimesCircle, FaExclamationTriangle, FaArrowLeft, FaRedoAlt } from 'react-icons/fa';

const PaymentCancelled = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fff5f5] p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-red-100 relative overflow-hidden">
                
                {/* Decorative Background Element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-50 rounded-full blur-3xl"></div>
                
                {/* Error Icon Section */}
                <div className="flex justify-center mb-6">
                    <div className="bg-red-100 p-4 rounded-full animate-pulse">
                        <FaTimesCircle className="text-red-500 text-6xl" />
                    </div>
                </div>

                <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
                    Payment Cancelled
                </h1>
                
                <div className="flex items-center justify-center gap-2 text-amber-600 font-medium mb-4 bg-amber-50 py-2 px-4 rounded-full mx-auto w-fit">
                    <FaExclamationTriangle />
                    <span>পেমেন্টটি সম্পন্ন হয়নি</span>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    আপনার পেমেন্ট রিকোয়েস্টটি বাতিল করা হয়েছে। কারিগরি সমস্যা বা আপনি নিজে থেকে বাতিল করে থাকলে পুনরায় চেষ্টা করতে পারেন।
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                    <Link 
                        to="/dashboard/my-parcels" 
                        className="flex items-center justify-center gap-2 bg-[#003d3d] hover:bg-[#005a5a] text-white font-bold py-3 px-6 rounded-xl transition-all transform active:scale-95 shadow-lg shadow-gray-200"
                    >
                        <FaRedoAlt size={14} /> Try Again / Go Back
                    </Link>
                    
                    <Link 
                        to="/" 
                        className="flex items-center justify-center gap-2 text-gray-500 font-semibold hover:text-[#003d3d] transition-colors mt-2"
                    >
                        <FaArrowLeft size={12} /> Back to Home
                    </Link>
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-400">
                        যদি আপনার একাউন্ট থেকে টাকা কেটে নেওয়া হয়, তবে চিন্তার কিছু নেই। দ্রুত আমাদের সাপোর্ট টিমে যোগাযোগ করুন।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancelled;