// import React from 'react'

// const PaymentHistory = () => {
//   return (
//     <div>
//       <h1>ALhamdulliah Payment history</h1>
//     </div>
//   )
// }

// export default PaymentHistory


// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import useAuth from '../../../Hooks/useAuth';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import { FaFileInvoice } from 'react-icons/fa';

// const PaymentHistory = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     const { data: payments = [], isLoading } = useQuery({
//         queryKey: ['payment-history', user?.email],
//         enabled: !!user?.email,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
//             // শুধুমাত্র পেইড পার্সেলগুলো ফিল্টার করে দেখানো হচ্ছে
//             return res.data.filter(parcel => parcel.paymentStatus === 'paid');
//         }
//     });

//     if (isLoading) return <div className="p-10 text-center font-bold text-[#003d3d]">Loading History...</div>;

//     return (
//         <div className="p-4 md:p-10 bg-white min-h-screen">
//             {/* Header Area */}
//             <div className="mb-8">
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-[#003d3d] tracking-tight">
//                     Payment History
//                 </h2>
//             </div>

//             {/* Table Container */}
//             <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
//                 <table className="table w-full border-separate border-spacing-0">
//                     {/* Table Head */}
//                     <thead className="bg-[#003d3d] text-white">
//                         <tr>
//                             <th className="p-4 font-semibold text-sm">Parcel Info</th>
//                             <th className="p-4 font-semibold text-sm">Recipient Info</th>
//                             <th className="p-4 font-semibold text-sm text-center">Tracking Number</th>
//                             <th className="p-4 font-semibold text-sm text-center">Payment Info</th>
//                             <th className="p-4 font-semibold text-sm text-center">Action</th>
//                         </tr>
//                     </thead>

//                     {/* Table Body */}
//                     <tbody>
//                         {payments.length > 0 ? (
//                             payments.map((payment) => (
//                                 <tr key={payment._id} className="hover:bg-gray-50 transition-colors">
//                                     <td className="p-4 text-gray-600 font-medium border-b border-gray-50">
//                                         {payment.parcelName}
//                                     </td>
//                                     <td className="p-4 border-b border-gray-50">
//                                         <div className="text-sm">
//                                             <p className="font-bold text-gray-700">{payment.receiverName}</p>
//                                             <p className="text-gray-500 text-xs leading-relaxed">
//                                                 {payment.deliveryAddress}
//                                             </p>
//                                             <p className="text-gray-400 text-xs mt-1 font-mono">
//                                                 {payment.receiverPhone}
//                                             </p>
//                                         </div>
//                                     </td>
//                                     <td className="p-4 text-center text-gray-600 font-mono text-sm border-b border-gray-50">
//                                         {payment._id.slice(-6).toUpperCase()}
//                                     </td>
//                                     <td className="p-4 text-center border-b border-gray-50">
//                                         <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 font-bold text-sm">
//                                             ৳ {payment.totalPrice} <span className="text-[10px] uppercase opacity-70">(Paid)</span>
//                                         </div>
//                                     </td>
//                                     <td className="p-4 text-center border-b border-gray-50">
//                                         <button className="btn btn-sm bg-[#e0f2f1] hover:bg-[#b2dfdb] text-[#004d40] border-none px-6 rounded-lg capitalize font-bold shadow-sm transition-all">
//                                             View
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="5" className="p-0">
//                                     <div className="flex items-center justify-between p-6 bg-white">
//                                         <div className="flex items-center gap-4 text-gray-400">
//                                             <FaFileInvoice size={32} className="opacity-50" />
//                                             <span className="text-xl font-medium italic">No payment history found.</span>
//                                         </div>
//                                         <button className="btn btn-sm bg-[#e0f2f1] text-[#004d40] border-none px-6 opacity-50 cursor-not-allowed">
//                                             View
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default PaymentHistory;


import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaFileInvoice } from 'react-icons/fa';
import dayjs from 'dayjs'; // Paid At date format korar jonno

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payment-history', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            // শুধু paid parcels
            return res.data
                .filter(parcel => parcel.paymentStatus === 'paid')
                .sort((a, b) => new Date(b.paidAt) - new Date(a.paidAt)); // latest paid upore
        }
    });

    if (isLoading) return <div className="p-10 text-center font-bold text-[#003d3d]">Loading History...</div>;

    return (
        <div className="p-4 md:p-10 bg-white min-h-screen">
            {/* Header Area */}
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#003d3d] tracking-tight">
                    Payment History
                </h2>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                <table className="table w-full border-separate border-spacing-0">
                    {/* Table Head */}
                    <thead className="bg-[#003d3d] text-white">
                        <tr>
                            <th className="p-4 font-semibold text-sm">Parcel Info</th>
                            <th className="p-4 font-semibold text-sm">Recipient Info</th>
                            <th className="p-4 font-semibold text-sm text-center">Tracking Number</th>
                            <th className="p-4 font-semibold text-sm text-center">Payment Info</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {payments.length > 0 ? (
                            payments.map((payment) => (
                                <tr key={payment._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 text-gray-600 font-medium border-b border-gray-50">
                                        {payment.parcelName}
                                    </td>
                                    <td className="p-4 border-b border-gray-50">
                                        <div className="text-sm">
                                            <p className="font-bold text-gray-700">{payment.receiverName}</p>
                                            <p className="text-gray-500 text-xs leading-relaxed">
                                                {payment.deliveryAddress}
                                            </p>
                                            <p className="text-gray-400 text-xs mt-1 font-mono">
                                                {payment.receiverPhone}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center text-gray-600 font-mono text-sm border-b border-gray-50">
                                        {payment._id.slice(-6).toUpperCase()}
                                    </td>
                                    <td className="p-4 text-center border-b border-gray-50">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 font-bold text-sm">
                                                ৳ {payment.totalPrice} <span className="text-[10px] uppercase opacity-70">(Paid)</span>
                                            </div>
                                            <div className="text-xs text-gray-500 font-mono">
                                                Transaction ID: {payment.transactionId || 'N/A'}
                                            </div>
                                            <div className="text-xs text-gray-400 font-mono">
                                                Paid At: {payment.paidAt ? dayjs(payment.paidAt).format('DD/MM/YYYY HH:mm') : 'N/A'}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="p-0">
                                    <div className="flex items-center justify-between p-6 bg-white">
                                        <div className="flex items-center gap-4 text-gray-400">
                                            <FaFileInvoice size={32} className="opacity-50" />
                                            <span className="text-xl font-medium italic">No payment history found.</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
