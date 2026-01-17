// // import { useQuery } from '@tanstack/react-query'
// // import React from 'react'
// // import useAuth from '../../../Hooks/useAuth'
// // import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// // const MyParcels = () => {
// //     const {user} = useAuth();
// //     const axiosSecure = useAxiosSecure();

// //     const {data: parcels = []} = useQuery({
// //         queryKey: ['myparcels', user?.email],
// //         queryFn: async() =>{

// //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// //             return res.data;
// //         }
// //     })

// //   return (
// //     <div>
// //       <h2>All of My parcels: {parcels.length}</h2>
// //     </div>
// //   )
// // }

// // export default MyParcels


// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import useAuth from '../../../Hooks/useAuth'
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// const MyParcels = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     const { data: parcels = [], isLoading } = useQuery({
//         // queryKey তে ইউজারের ইমেইল থাকা জরুরি যাতে ইউজার বদলালে ডাটা রিফ্রেশ হয়
//         queryKey: ['myparcels', user?.email],
//         enabled: !!user?.email, // ইমেইল না আসা পর্যন্ত কোয়েরি চলবে না
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
//             return res.data;
//         }
//     })

//     if (isLoading) {
//         return <div className="p-10 text-center">Loading Parcels...</div>;
//     }

//     return (
//         <div className="p-10">
//             <h2 className="text-2xl font-bold mb-5">All of My parcels: {parcels.length}</h2>
//             {/* এখানে ডাটাগুলো টেবিল আকারে দেখাতে পারেন */}
//             <div className="overflow-x-auto">
//                 <table className="table w-full">
//                     <thead>
//                         <tr>
//                             <th>Parcel Name</th>
//                             <th>Receiver</th>
//                             <th>Status</th>
//                             <th>Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {parcels.map(p => (
//                             <tr key={p._id}>
//                                 <td>{p.parcelName}</td>
//                                 <td>{p.receiverName}</td>
//                                 <td className="badge badge-ghost mt-3">{p.status}</td>
//                                 <td>৳{p.totalPrice}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default MyParcels;

// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import useAuth from '../../../Hooks/useAuth'
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// const MyParcels = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     const { data: parcels = [], isLoading } = useQuery({
//         queryKey: ['myparcels', user?.email],
//         enabled: !!user?.email, // change: user.email থাকলে তবেই রান হবে
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
//             return res.data;
//         }
//     })

//     if (isLoading) return <div className="p-10 text-center text-2xl">Loading...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6">All of My parcels: {parcels.length}</h2>
            
//             <div className="overflow-x-auto shadow-lg rounded-lg">
//                 <table className="table w-full bg-white">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th>#</th>
//                             <th>Parcel Name</th>
//                             <th>Receiver</th>
//                             <th>Status</th>
//                             <th>Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {parcels.map((p, index) => (
//                             <tr key={p._id} className="hover:bg-gray-50">
//                                 <th>{index + 1}</th>
//                                 <td>{p.parcelName}</td>
//                                 <td>{p.receiverName}</td>
//                                 <td>
//                                     <span className="badge badge-outline">{p.status}</span>
//                                 </td>
//                                 <td className="font-bold">৳{p.totalPrice}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default MyParcels;

// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import useAuth from '../../../Hooks/useAuth'
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // আইকন ইমপোর্ট
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';

// const MyParcels = () => {
//     const { user } = useAuth();
//     const axiosSecure = useAxiosSecure();

//     // refetch কে এখানে নিয়ে আসা হয়েছে অটো আপডেটের জন্য
//     const { data: parcels = [], isLoading, refetch } = useQuery({
//         queryKey: ['myparcels', user?.email],
//         enabled: !!user?.email,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
//             return res.data;
//         }
//     })

//     // ডিলিট করার ফাংশন
//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosSecure.delete(`/parcels/${id}`)
//                     .then(res => {
//                         if (res.data.deletedCount > 0) {
//                             // এটিই ম্যাজিক: ম্যানুয়াল রিফ্রেশ ছাড়াই ডাটা আপডেট করবে
//                             refetch(); 
//                             Swal.fire("Deleted!", "Your parcel has been removed.", "success");
//                         }
//                     })
//             }
//         });
//     }

//     if (isLoading) return <div className="p-10 text-center text-2xl">Loading...</div>;

//     return (
//         <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6 text-[#003d3d]">All of My parcels: {parcels.length}</h2>
            
//             <div className="overflow-x-auto shadow-lg rounded-lg">
//                 <table className="table w-full bg-white">
//                     <thead className="bg-gray-200">
//                         <tr>
//                             <th>#</th>
//                             <th>Parcel Name</th>
//                             <th>Receiver</th>
//                             <th>Status</th>
//                             <th>Price</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {parcels.map((p, index) => (
//                             <tr key={p._id} className="hover:bg-gray-50 text-sm">
//                                 <th>{index + 1}</th>
//                                 <td>{p.parcelName}</td>
//                                 <td>{p.receiverName}</td>
//                                 <td>
//                                     <span className={`badge badge-outline ${p.status === 'pending' ? 'badge-warning' : 'badge-success'}`}>
//                                         {p.status}
//                                     </span>
//                                 </td>
//                                 <td className="font-bold">৳{p.totalPrice}</td>
//                                 <td className="flex gap-2">
//                                     {/* Edit Button */}
//                                     {/* <Link to={`/dashboard/update-parcel/${p._id}`}>
//                                         <button className="btn btn-ghost btn-xs bg-orange-400 text-white">
//                                             <FaEdit />
//                                         </button>
//                                     </Link> */}
                                    
//                                     {/* Delete Button */}
//                                     <button 
//                                         onClick={() => handleDelete(p._id)}
//                                         className="btn btn-ghost btn-xs bg-red-500 text-white"
//                                     >
//                                         <FaTrashAlt />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default MyParcels;

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../../Hooks/useAuth'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa'; 
import Swal from 'sweetalert2';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // refetch কে এখানে নিয়ে আসা হয়েছে অটো আপডেটের জন্য
    const { data: parcels = [], isLoading, refetch } = useQuery({
        queryKey: ['myparcels', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })

    // ডিলিট করার ফাংশন
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch(); 
                            Swal.fire("Deleted!", "Your parcel has been removed.", "success");
                        }
                    })
            }
        });
    }

    if (isLoading) return <div className="p-5 md:p-10 text-center text-xl md:text-2xl font-bold text-[#003d3d]">Loading...</div>;

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Responsive Heading */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003d3d]">
                    My Parcels ({parcels.length})
                </h2>
                <div className="text-sm text-gray-500 italic">
                    Swipe left/right to view more on mobile →
                </div>
            </div>
            
            {/* Table Container with Responsive Scrolling */}
            <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-100 bg-white">
                <table className="table w-full min-w-[600px] md:min-w-full">
                    {/* Head */}
                    <thead className="bg-[#003d3d] text-white">
                        <tr>
                            <th className="rounded-tl-xl p-4">#</th>
                            <th className="p-4">Parcel Name</th>
                            <th className="p-4">Receiver</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Price</th>
                            <th className="rounded-tr-xl p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((p, index) => (
                            <tr key={p._id} className="hover:bg-gray-50 transition-colors border-b last:border-none">
                                <th className="p-4 font-medium text-gray-600">{index + 1}</th>
                                <td className="p-4 font-semibold text-gray-700">{p.parcelName}</td>
                                <td className="p-4 text-gray-600">{p.receiverName}</td>
                                <td className="p-4">
                                    <span className={`badge badge-sm sm:badge-md badge-outline px-3 py-3 font-semibold uppercase tracking-wider ${
                                        p.status === 'pending' ? 'badge-warning text-orange-600' : 'badge-success text-green-600'
                                    }`}>
                                        {p.status}
                                    </span>
                                </td>
                                <td className="p-4 font-bold text-[#003d3d]">৳{p.totalPrice}</td>
                                <td className="p-4 text-center">
                                    {/* Delete Button - Fully Styled */}
                                    <button 
                                        onClick={() => handleDelete(p._id)}
                                        className="btn btn-error btn-sm sm:btn-md btn-outline hover:!text-white transition-all transform active:scale-95 group"
                                        title="Delete Parcel"
                                    >
                                        <FaTrashAlt className="group-hover:shake" />
                                        <span className="hidden sm:inline ml-1">Delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                {/* Empty State UI */}
                {parcels.length === 0 && (
                    <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
                        <div className="text-5xl opacity-20 text-[#003d3d]">📦</div>
                        <p className="text-gray-500 text-lg italic font-medium">No parcels found. Book your first one!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyParcels;