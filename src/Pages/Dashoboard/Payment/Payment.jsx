// import { useQuery } from '@tanstack/react-query';
// import React from 'react'
// import { useParams } from 'react-router'
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import MyParcels from '../MyParcels/MyParcels';

// const Payment = () => {
//     const {parcelId} = useParams();
//     const axiosSecure = useAxiosSecure();
//     const {isLoading, data: parcel } = useQuery({
//         queryKey: ['parcels', parcelId],
//         queryFn: async() =>{
//             const res = await axiosSecure.get(`/my-parcels/${parcelId}`);
//             return res.data;
//         }
//     })

// if(isLoading){
//     return <div className="min-h-screen flex items-center justify-center">
//                 <span className="loading loading-spinner text-error loading-lg"></span>
//             </div>
// }

//   return (
//     <div>
//       <h1>Alhamdulliah please pay : {MyParcels.parcelName}</h1>
//     </div>
//   )
// }

// export default Payment


// import { useQuery } from '@tanstack/react-query';
// import React from 'react'
// import { useParams } from 'react-router'
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// const Payment = () => {
//     const { parcelId } = useParams(); // রাউটার থেকে parcelId নেওয়া হচ্ছে
//     const axiosSecure = useAxiosSecure();

//     const { isLoading, data: parcel } = useQuery({
//         queryKey: ['parcel', parcelId],
//         queryFn: async () => {
//             // ব্যাকএন্ডের নতুন API এন্ডপয়েন্ট ব্যবহার করা হয়েছে
//             const res = await axiosSecure.get(`/parcels/${parcelId}`);
//             return res.data;
//         }
//     })


//     const handlePayment = async() =>{
// const paymentInfo = {
//     cost: parcel.cost,
//     parcelId: parcel._id,
//     senderEmail: parcel.senderEmail,
//     parcelName: parcel.parcelName
// }

// const res= await axiosSecure.post('/create-checkout-sessio', paymentInfo);
// console.log(res.data);

//     }

//     if (isLoading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <span className="loading loading-spinner text-error loading-lg"></span>
//             </div>
//         )
//     }

//     return (
//         <div className="p-8">
//             <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
//                 <h1 className="text-2xl font-bold text-[#003d3d] mb-4 text-center">
//                     Parcel Payment
//                 </h1>
                
//                 <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                     <p className="text-gray-600 font-medium">Parcel Name:</p>
//                     {/* এখানে আপনার কাঙ্ক্ষিত পার্সেল নাম শো করবে */}
//                     <h2 className="text-xl font-bold text-gray-800">{parcel?.parcelName}</h2>
                    
//                     <div className="mt-3 flex justify-between items-center">
//                         <span className="text-gray-600">Total Price:</span>
//                         <span className="text-xl font-extrabold text-[#003d3d]">৳{parcel?.totalPrice}</span>
//                     </div>
//                 </div>

//                 <div className="text-center">
//                     <p className="text-sm text-gray-500 italic mb-4">
//                         Alhamdulliah, please proceed to pay.
//                     </p>
//                     {/* এখানে আপনার পেমেন্ট গেটওয়ে বা Stripe Form বসবে */}
//                     <button onClick={handlePayment} className="btn btn-wide bg-[#c5e76d] border-none text-[#003d3d] hover:bg-[#b0d15a]">
//                         Pay Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Payment;


import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })

    const handlePayment = async () => {
        const paymentInfo = {
            // আপনার ডাটাবেজে যদি totalPrice থাকে তবে parcel.totalPrice দিন
            cost: parcel?.totalPrice || parcel?.cost, 
            parcelId: parcel?._id,
            senderEmail: parcel?.senderEmail,
            parcelName: parcel?.parcelName
        }

        try {
            // ব্যাকএন্ডে রিকোয়েস্ট পাঠানো হচ্ছে
            const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
            
            if (res.data.url) {
                // Stripe-এর পেমেন্ট পেজে ইউজারকে পাঠিয়ে দেওয়া হবে
                window.location.replace(res.data.url);
            }
        } catch (error) {
            console.error("Payment Error:", error);
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner text-error loading-lg"></span>
            </div>
        )
    }

    return (
        <div className="p-8">
            <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
                <h1 className="text-2xl font-bold text-[#003d3d] mb-4 text-center">
                    Parcel Payment
                </h1>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-gray-600 font-medium">Parcel Name:</p>
                    <h2 className="text-xl font-bold text-gray-800">{parcel?.parcelName}</h2>
                    
                    <div className="mt-3 flex justify-between items-center">
                        <span className="text-gray-600">Total Price:</span>
                        <span className="text-xl font-extrabold text-[#003d3d]">৳{parcel?.totalPrice || parcel?.cost}</span>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-500 italic mb-4">
                        Alhamdulliah, please proceed to pay.
                    </p>
                    <button
                        onClick={handlePayment}
                        className="btn btn-wide bg-[#c5e76d] border-none text-[#003d3d] hover:bg-[#b0d15a] font-bold"
                    >
                        Pay with Stripe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payment;