// // // // import { useQuery } from '@tanstack/react-query'
// // // // import React from 'react'
// // // // import useAuth from '../../../Hooks/useAuth'
// // // // import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// // // // const MyParcels = () => {
// // // //     const {user} = useAuth();
// // // //     const axiosSecure = useAxiosSecure();

// // // //     const {data: parcels = []} = useQuery({
// // // //         queryKey: ['myparcels', user?.email],
// // // //         queryFn: async() =>{

// // // //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// // // //             return res.data;
// // // //         }
// // // //     })

// // // //   return (
// // // //     <div>
// // // //       <h2>All of My parcels: {parcels.length}</h2>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default MyParcels


// // // import { useQuery } from '@tanstack/react-query'
// // // import React from 'react'
// // // import useAuth from '../../../Hooks/useAuth'
// // // import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// // // const MyParcels = () => {
// // //     const { user } = useAuth();
// // //     const axiosSecure = useAxiosSecure();

// // //     const { data: parcels = [], isLoading } = useQuery({
// // //         // queryKey তে ইউজারের ইমেইল থাকা জরুরি যাতে ইউজার বদলালে ডাটা রিফ্রেশ হয়
// // //         queryKey: ['myparcels', user?.email],
// // //         enabled: !!user?.email, // ইমেইল না আসা পর্যন্ত কোয়েরি চলবে না
// // //         queryFn: async () => {
// // //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// // //             return res.data;
// // //         }
// // //     })

// // //     if (isLoading) {
// // //         return <div className="p-10 text-center">Loading Parcels...</div>;
// // //     }

// // //     return (
// // //         <div className="p-10">
// // //             <h2 className="text-2xl font-bold mb-5">All of My parcels: {parcels.length}</h2>
// // //             {/* এখানে ডাটাগুলো টেবিল আকারে দেখাতে পারেন */}
// // //             <div className="overflow-x-auto">
// // //                 <table className="table w-full">
// // //                     <thead>
// // //                         <tr>
// // //                             <th>Parcel Name</th>
// // //                             <th>Receiver</th>
// // //                             <th>Status</th>
// // //                             <th>Price</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {parcels.map(p => (
// // //                             <tr key={p._id}>
// // //                                 <td>{p.parcelName}</td>
// // //                                 <td>{p.receiverName}</td>
// // //                                 <td className="badge badge-ghost mt-3">{p.status}</td>
// // //                                 <td>৳{p.totalPrice}</td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default MyParcels;

// // // import { useQuery } from '@tanstack/react-query'
// // // import React from 'react'
// // // import useAuth from '../../../Hooks/useAuth'
// // // import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// // // const MyParcels = () => {
// // //     const { user } = useAuth();
// // //     const axiosSecure = useAxiosSecure();

// // //     const { data: parcels = [], isLoading } = useQuery({
// // //         queryKey: ['myparcels', user?.email],
// // //         enabled: !!user?.email, // change: user.email থাকলে তবেই রান হবে
// // //         queryFn: async () => {
// // //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// // //             return res.data;
// // //         }
// // //     })

// // //     if (isLoading) return <div className="p-10 text-center text-2xl">Loading...</div>;

// // //     return (
// // //         <div className="p-8">
// // //             <h2 className="text-2xl font-bold mb-6">All of My parcels: {parcels.length}</h2>
            
// // //             <div className="overflow-x-auto shadow-lg rounded-lg">
// // //                 <table className="table w-full bg-white">
// // //                     <thead className="bg-gray-200">
// // //                         <tr>
// // //                             <th>#</th>
// // //                             <th>Parcel Name</th>
// // //                             <th>Receiver</th>
// // //                             <th>Status</th>
// // //                             <th>Price</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {parcels.map((p, index) => (
// // //                             <tr key={p._id} className="hover:bg-gray-50">
// // //                                 <th>{index + 1}</th>
// // //                                 <td>{p.parcelName}</td>
// // //                                 <td>{p.receiverName}</td>
// // //                                 <td>
// // //                                     <span className="badge badge-outline">{p.status}</span>
// // //                                 </td>
// // //                                 <td className="font-bold">৳{p.totalPrice}</td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default MyParcels;

// // // import { useQuery } from '@tanstack/react-query'
// // // import React from 'react'
// // // import useAuth from '../../../Hooks/useAuth'
// // // import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// // // import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // আইকন ইমপোর্ট
// // // import Swal from 'sweetalert2';
// // // import { Link } from 'react-router-dom';

// // // const MyParcels = () => {
// // //     const { user } = useAuth();
// // //     const axiosSecure = useAxiosSecure();

// // //     // refetch কে এখানে নিয়ে আসা হয়েছে অটো আপডেটের জন্য
// // //     const { data: parcels = [], isLoading, refetch } = useQuery({
// // //         queryKey: ['myparcels', user?.email],
// // //         enabled: !!user?.email,
// // //         queryFn: async () => {
// // //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// // //             return res.data;
// // //         }
// // //     })

// // //     // ডিলিট করার ফাংশন
// // //     const handleDelete = (id) => {
// // //         Swal.fire({
// // //             title: "Are you sure?",
// // //             text: "You won't be able to revert this!",
// // //             icon: "warning",
// // //             showCancelButton: true,
// // //             confirmButtonColor: "#3085d6",
// // //             cancelButtonColor: "#d33",
// // //             confirmButtonText: "Yes, delete it!"
// // //         }).then((result) => {
// // //             if (result.isConfirmed) {
// // //                 axiosSecure.delete(`/parcels/${id}`)
// // //                     .then(res => {
// // //                         if (res.data.deletedCount > 0) {
// // //                             // এটিই ম্যাজিক: ম্যানুয়াল রিফ্রেশ ছাড়াই ডাটা আপডেট করবে
// // //                             refetch(); 
// // //                             Swal.fire("Deleted!", "Your parcel has been removed.", "success");
// // //                         }
// // //                     })
// // //             }
// // //         });
// // //     }

// // //     if (isLoading) return <div className="p-10 text-center text-2xl">Loading...</div>;

// // //     return (
// // //         <div className="p-8">
// // //             <h2 className="text-2xl font-bold mb-6 text-[#003d3d]">All of My parcels: {parcels.length}</h2>
            
// // //             <div className="overflow-x-auto shadow-lg rounded-lg">
// // //                 <table className="table w-full bg-white">
// // //                     <thead className="bg-gray-200">
// // //                         <tr>
// // //                             <th>#</th>
// // //                             <th>Parcel Name</th>
// // //                             <th>Receiver</th>
// // //                             <th>Status</th>
// // //                             <th>Price</th>
// // //                             <th>Actions</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {parcels.map((p, index) => (
// // //                             <tr key={p._id} className="hover:bg-gray-50 text-sm">
// // //                                 <th>{index + 1}</th>
// // //                                 <td>{p.parcelName}</td>
// // //                                 <td>{p.receiverName}</td>
// // //                                 <td>
// // //                                     <span className={`badge badge-outline ${p.status === 'pending' ? 'badge-warning' : 'badge-success'}`}>
// // //                                         {p.status}
// // //                                     </span>
// // //                                 </td>
// // //                                 <td className="font-bold">৳{p.totalPrice}</td>
// // //                                 <td className="flex gap-2">
// // //                                     {/* Edit Button */}
// // //                                     {/* <Link to={`/dashboard/update-parcel/${p._id}`}>
// // //                                         <button className="btn btn-ghost btn-xs bg-orange-400 text-white">
// // //                                             <FaEdit />
// // //                                         </button>
// // //                                     </Link> */}
                                    
// // //                                     {/* Delete Button */}
// // //                                     <button 
// // //                                         onClick={() => handleDelete(p._id)}
// // //                                         className="btn btn-ghost btn-xs bg-red-500 text-white"
// // //                                     >
// // //                                         <FaTrashAlt />
// // //                                     </button>
// // //                                 </td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default MyParcels;

// // // import { useQuery } from '@tanstack/react-query'
// // // import React from 'react'
// // // import useAuth from '../../../Hooks/useAuth'
// // // import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// // // import { FaTrashAlt } from 'react-icons/fa'; 
// // // import Swal from 'sweetalert2';

// // // const MyParcels = () => {
// // //     const { user } = useAuth();
// // //     const axiosSecure = useAxiosSecure();

// // //     // refetch কে এখানে নিয়ে আসা হয়েছে অটো আপডেটের জন্য
// // //     const { data: parcels = [], isLoading, refetch } = useQuery({
// // //         queryKey: ['myparcels', user?.email],
// // //         enabled: !!user?.email,
// // //         queryFn: async () => {
// // //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// // //             return res.data;
// // //         }
// // //     })

// // //     // ডিলিট করার ফাংশন
// // //     const handleDelete = (id) => {
// // //         Swal.fire({
// // //             title: "Are you sure?",
// // //             text: "You won't be able to revert this!",
// // //             icon: "warning",
// // //             showCancelButton: true,
// // //             confirmButtonColor: "#3085d6",
// // //             cancelButtonColor: "#d33",
// // //             confirmButtonText: "Yes, delete it!"
// // //         }).then((result) => {
// // //             if (result.isConfirmed) {
// // //                 axiosSecure.delete(`/parcels/${id}`)
// // //                     .then(res => {
// // //                         if (res.data.deletedCount > 0) {
// // //                             refetch(); 
// // //                             Swal.fire("Deleted!", "Your parcel has been removed.", "success");
// // //                         }
// // //                     })
// // //             }
// // //         });
// // //     }

// // //     if (isLoading) return <div className="p-5 md:p-10 text-center text-xl md:text-2xl font-bold text-[#003d3d]">Loading...</div>;

// // //     return (
// // //         <div className="p-4 sm:p-6 md:p-8 lg:p-10">
// // //             {/* Responsive Heading */}
// // //             <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // //                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003d3d]">
// // //                     My Parcels ({parcels.length})
// // //                 </h2>
// // //                 <div className="text-sm text-gray-500 italic">
// // //                     Swipe left/right to view more on mobile →
// // //                 </div>
// // //             </div>
            
// // //             {/* Table Container with Responsive Scrolling */}
// // //             <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-100 bg-white">
// // //                 <table className="table w-full min-w-[600px] md:min-w-full">
// // //                     {/* Head */}
// // //                     <thead className="bg-[#003d3d] text-white">
// // //                         <tr>
// // //                             <th className="rounded-tl-xl p-4">#</th>
// // //                             <th className="p-4">Parcel Name</th>
// // //                             <th className="p-4">Receiver</th>
// // //                             <th className="p-4">Status</th>
// // //                             <th className="p-4">Price</th>
// // //                             <th className="rounded-tr-xl p-4 text-center">Actions</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {parcels.map((p, index) => (
// // //                             <tr key={p._id} className="hover:bg-gray-50 transition-colors border-b last:border-none">
// // //                                 <th className="p-4 font-medium text-gray-600">{index + 1}</th>
// // //                                 <td className="p-4 font-semibold text-gray-700">{p.parcelName}</td>
// // //                                 <td className="p-4 text-gray-600">{p.receiverName}</td>
// // //                                 <td className="p-4">
// // //                                     <span className={`badge badge-sm sm:badge-md badge-outline px-3 py-3 font-semibold uppercase tracking-wider ${
// // //                                         p.status === 'pending' ? 'badge-warning text-orange-600' : 'badge-success text-green-600'
// // //                                     }`}>
// // //                                         {p.status}
// // //                                     </span>
// // //                                 </td>
// // //                                 <td className="p-4 font-bold text-[#003d3d]">৳{p.totalPrice}</td>
// // //                                 <td className="p-4 text-center">
// // //                                     {/* Delete Button - Fully Styled */}
// // //                                     <button 
// // //                                         onClick={() => handleDelete(p._id)}
// // //                                         className="btn btn-error btn-sm sm:btn-md btn-outline hover:!text-white transition-all transform active:scale-95 group"
// // //                                         title="Delete Parcel"
// // //                                     >
// // //                                         <FaTrashAlt className="group-hover:shake" />
// // //                                         <span className="hidden sm:inline ml-1">Delete</span>
// // //                                     </button>
// // //                                 </td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
                
// // //                 {/* Empty State UI */}
// // //                 {parcels.length === 0 && (
// // //                     <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
// // //                         <div className="text-5xl opacity-20 text-[#003d3d]">📦</div>
// // //                         <p className="text-gray-500 text-lg italic font-medium">No parcels found. Book your first one!</p>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default MyParcels;


// // // import { useQuery } from '@tanstack/react-query'
// // // import React from 'react'
// // // import useAuth from '../../../Hooks/useAuth'
// // // import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// // // import { FaTrashAlt, FaCreditCard } from 'react-icons/fa'; 
// // // import Swal from 'sweetalert2';
// // // import { Link } from 'react-router-dom';

// // // const MyParcels = () => {
// // //     const { user } = useAuth();
// // //     const axiosSecure = useAxiosSecure();

// // //     const { data: parcels = [], isLoading, refetch } = useQuery({
// // //         queryKey: ['myparcels', user?.email],
// // //         enabled: !!user?.email,
// // //         queryFn: async () => {
// // //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// // //             return res.data;
// // //         }
// // //     })

// // //     const handleDelete = (id) => {
// // //         Swal.fire({
// // //             title: "Are you sure?",
// // //             text: "You won't be able to revert this!",
// // //             icon: "warning",
// // //             showCancelButton: true,
// // //             confirmButtonColor: "#3085d6",
// // //             cancelButtonColor: "#d33",
// // //             confirmButtonText: "Yes, delete it!"
// // //         }).then((result) => {
// // //             if (result.isConfirmed) {
// // //                 axiosSecure.delete(`/parcels/${id}`)
// // //                     .then(res => {
// // //                         if (res.data.deletedCount > 0) {
// // //                             refetch(); 
// // //                             Swal.fire("Deleted!", "Your parcel has been removed.", "success");
// // //                         }
// // //                     })
// // //             }
// // //         });
// // //     }

// // //     if (isLoading) return <div className="p-5 md:p-10 text-center text-xl md:text-2xl font-bold text-[#003d3d]">Loading...</div>;

// // //     return (
// // //         <div className="p-4 sm:p-6 md:p-8 lg:p-10">
// // //             <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // //                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003d3d]">
// // //                     My Parcels ({parcels.length})
// // //                 </h2>
// // //                 <div className="text-sm text-gray-500 italic">
// // //                     Swipe left/right to view more on mobile →
// // //                 </div>
// // //             </div>
            
// // //             <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-100 bg-white">
// // //                 <table className="table w-full min-w-[800px] md:min-w-full">
// // //                     <thead className="bg-[#003d3d] text-white text-center">
// // //                         <tr>
// // //                             <th className="rounded-tl-xl p-4">#</th>
// // //                             <th className="p-4 text-left">Parcel Name</th>
// // //                             <th className="p-4">Status</th>
// // //                             <th className="p-4">Price</th>
// // //                             <th className="p-4">Payment</th>
// // //                             <th className="rounded-tr-xl p-4">Actions</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody className="text-center">
// // //                         {parcels.map((p, index) => (
// // //                             <tr key={p._id} className="hover:bg-gray-50 transition-colors border-b last:border-none">
// // //                                 <th className="p-4 font-medium text-gray-600">{index + 1}</th>
// // //                                 <td className="p-4 text-left">
// // //                                     <div className="font-semibold text-gray-700">{p.parcelName}</div>
// // //                                     <div className="text-xs text-gray-500">To: {p.receiverName}</div>
// // //                                 </td>
// // //                                 <td className="p-4">
// // //                                     <span className={`badge badge-sm sm:badge-md badge-outline px-3 py-3 font-semibold uppercase tracking-wider ${
// // //                                         p.status === 'pending' ? 'badge-warning text-orange-600' : 'badge-success text-green-600'
// // //                                     }`}>
// // //                                         {p.status}
// // //                                     </span>
// // //                                 </td>
// // //                                 <td className="p-4 font-bold text-[#003d3d]">৳{p.totalPrice}</td>
                                
// // //                                 {/* Payment Column */}
// // //                                 <td className="p-4">
// // //                                     <Link to={`/dashboard/payment/${p._id}`}>
// // //                                         <button 
// // //                                             disabled={p.status === 'delivered' || p.paymentStatus === 'paid'}
// // //                                             className="btn btn-sm md:btn-md bg-[#c5e76d] hover:bg-[#b0d15a] text-[#003d3d] border-none flex items-center gap-2 mx-auto disabled:bg-gray-200"
// // //                                         >
// // //                                             <FaCreditCard />
// // //                                             {p.paymentStatus === 'paid' ? 'Paid' : 'Pay'}
// // //                                         </button>
// // //                                     </Link>
// // //                                 </td>

// // //                                 <td className="p-4">
// // //                                     <button 
// // //                                         onClick={() => handleDelete(p._id)}
// // //                                         disabled={p.status !== 'pending'}
// // //                                         className="btn btn-error btn-sm md:btn-md btn-outline hover:!text-white transition-all transform active:scale-95 disabled:bg-transparent disabled:text-gray-300"
// // //                                         title="Delete Parcel"
// // //                                     >
// // //                                         <FaTrashAlt />
// // //                                     </button>
// // //                                 </td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
                
// // //                 {parcels.length === 0 && (
// // //                     <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
// // //                         <div className="text-5xl opacity-20 text-[#003d3d]">📦</div>
// // //                         <p className="text-gray-500 text-lg italic font-medium">No parcels found. Book your first one!</p>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default MyParcels;


// // // import { useQuery } from '@tanstack/react-query'
// // // import React from 'react'
// // // import useAuth from '../../../Hooks/useAuth'
// // // import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// // // import { FaTrashAlt, FaCreditCard } from 'react-icons/fa'; 
// // // import Swal from 'sweetalert2';
// // // import { Link } from 'react-router-dom';

// // // const MyParcels = () => {
// // //     const { user } = useAuth();
// // //     const axiosSecure = useAxiosSecure();

// // //     // refetch কে এখানে নিয়ে আসা হয়েছে অটো আপডেটের জন্য
// // //     const { data: parcels = [], isLoading, refetch } = useQuery({
// // //         queryKey: ['myparcels', user?.email],
// // //         enabled: !!user?.email,
// // //         queryFn: async () => {
// // //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// // //             return res.data;
// // //         }
// // //     })

// // //     // ডিলিট করার ফাংশন
// // //     const handleDelete = (id) => {
// // //         Swal.fire({
// // //             title: "Are you sure?",
// // //             text: "You won't be able to revert this!",
// // //             icon: "warning",
// // //             showCancelButton: true,
// // //             confirmButtonColor: "#3085d6",
// // //             cancelButtonColor: "#d33",
// // //             confirmButtonText: "Yes, delete it!"
// // //         }).then((result) => {
// // //             if (result.isConfirmed) {
// // //                 axiosSecure.delete(`/parcels/${id}`)
// // //                     .then(res => {
// // //                         if (res.data.deletedCount > 0) {
// // //                             refetch(); 
// // //                             Swal.fire("Deleted!", "Your parcel has been removed.", "success");
// // //                         }
// // //                     })
// // //             }
// // //         });
// // //     }

// // //     if (isLoading) return <div className="p-5 md:p-10 text-center text-xl md:text-2xl font-bold text-[#003d3d]">Loading...</div>;

// // //     return (
// // //         <div className="p-4 sm:p-6 md:p-8 lg:p-10">
// // //             {/* Responsive Heading */}
// // //             <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // //                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003d3d]">
// // //                     My Parcels ({parcels.length})
// // //                 </h2>
// // //                 <div className="text-sm text-gray-500 italic">
// // //                     Swipe left/right to view more on mobile →
// // //                 </div>
// // //             </div>
            
// // //             {/* Table Container with Responsive Scrolling */}
// // //             <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-100 bg-white">
// // //                 <table className="table w-full min-w-[800px] md:min-w-full">
// // //                     {/* Head */}
// // //                     <thead className="bg-[#003d3d] text-white">
// // //                         <tr>
// // //                             <th className="rounded-tl-xl p-4">#</th>
// // //                             <th className="p-4">Parcel Name</th>
// // //                             <th className="p-4">Receiver</th>
// // //                             <th className="p-4 text-center">Payment</th> {/* Receiver এর পরে Payment */}
// // //                             <th className="p-4">Status</th>
// // //                             <th className="p-4">Price</th>
// // //                             <th className="rounded-tr-xl p-4 text-center">Actions</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {parcels.map((p, index) => (
// // //                             <tr key={p._id} className="hover:bg-gray-50 transition-colors border-b last:border-none">
// // //                                 <th className="p-4 font-medium text-gray-600">{index + 1}</th>
// // //                                 <td className="p-4 font-semibold text-gray-700">{p.parcelName}</td>
// // //                                 <td className="p-4 text-gray-600">{p.receiverName}</td>
                                
// // //                                 {/* Payment Column with Pay Button */}
// // //                                 <td className="p-4 text-center">
// // //                                     <Link to={`/dashboard/payment/${p._id}`}>
// // //                                         <button 
// // //                                             disabled={p.paymentStatus === 'paid'}
// // //                                             className="btn btn-sm bg-[#c5e76d] hover:bg-[#b0d15a] text-[#003d3d] border-none flex items-center gap-2 mx-auto disabled:bg-gray-200"
// // //                                         >
// // //                                             <FaCreditCard size={14} />
// // //                                             {p.paymentStatus === 'paid' ? 'Paid' : 'Pay'}
// // //                                         </button>
// // //                                     </Link>
// // //                                 </td>

// // //                                 <td className="p-4">
// // //                                     <span className={`badge badge-sm sm:badge-md badge-outline px-3 py-3 font-semibold uppercase tracking-wider ${
// // //                                         p.status === 'pending' ? 'badge-warning text-orange-600' : 'badge-success text-green-600'
// // //                                     }`}>
// // //                                         {p.status}
// // //                                     </span>
// // //                                 </td>
// // //                                 <td className="p-4 font-bold text-[#003d3d]">৳{p.totalPrice}</td>
// // //                                 <td className="p-4 text-center">
// // //                                     {/* Delete Button */}
// // //                                     <button 
// // //                                         onClick={() => handleDelete(p._id)}
// // //                                         disabled={p.status !== 'pending'}
// // //                                         className="btn btn-error btn-sm sm:btn-md btn-outline hover:!text-white transition-all transform active:scale-95 group disabled:bg-transparent disabled:text-gray-300"
// // //                                         title="Delete Parcel"
// // //                                     >
// // //                                         <FaTrashAlt className="group-hover:shake" />
// // //                                         <span className="hidden sm:inline ml-1">Delete</span>
// // //                                     </button>
// // //                                 </td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
                
// // //                 {/* Empty State UI */}
// // //                 {parcels.length === 0 && (
// // //                     <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
// // //                         <div className="text-5xl opacity-20 text-[#003d3d]">📦</div>
// // //                         <p className="text-gray-500 text-lg italic font-medium">No parcels found. Book your first one!</p>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default MyParcels;

// // // import { useQuery } from '@tanstack/react-query'
// // // import React from 'react'
// // // import useAuth from '../../../Hooks/useAuth'
// // // import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// // // import { FaTrashAlt, FaCreditCard } from 'react-icons/fa'; 
// // // import Swal from 'sweetalert2';
// // // import { Link } from 'react-router-dom';

// // // const MyParcels = () => {
// // //     const { user } = useAuth();
// // //     const axiosSecure = useAxiosSecure();

// // //     const { data: parcels = [], isLoading, refetch } = useQuery({
// // //         queryKey: ['myparcels', user?.email],
// // //         enabled: !!user?.email,
// // //         queryFn: async () => {
// // //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// // //             return res.data;
// // //         }
// // //     })

// // //     const handleDelete = (id) => {
// // //         Swal.fire({
// // //             title: "Are you sure?",
// // //             text: "You won't be able to revert this!",
// // //             icon: "warning",
// // //             showCancelButton: true,
// // //             confirmButtonColor: "#3085d6",
// // //             cancelButtonColor: "#d33",
// // //             confirmButtonText: "Yes, delete it!"
// // //         }).then((result) => {
// // //             if (result.isConfirmed) {
// // //                 axiosSecure.delete(`/parcels/${id}`)
// // //                     .then(res => {
// // //                         if (res.data.deletedCount > 0) {
// // //                             refetch(); 
// // //                             Swal.fire("Deleted!", "Your parcel has been removed.", "success");
// // //                         }
// // //                     })
// // //             }
// // //         });
// // //     }

// // //     if (isLoading) return <div className="p-5 md:p-10 text-center text-xl md:text-2xl font-bold text-[#003d3d]">Loading...</div>;

// // //     return (
// // //         <div className="p-4 sm:p-6 md:p-8 lg:p-10">
// // //             <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // //                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003d3d]">
// // //                     My Parcels ({parcels.length})
// // //                 </h2>
// // //                 <div className="text-sm text-gray-500 italic">
// // //                     Swipe left/right to view more on mobile →
// // //                 </div>
// // //             </div>
            
// // //             <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-100 bg-white">
// // //                 <table className="table w-full min-w-[850px] md:min-w-full">
// // //                     <thead className="bg-[#003d3d] text-white">
// // //                         <tr>
// // //                             <th className="rounded-tl-xl p-4 text-center">#</th>
// // //                             <th className="p-4 text-left">Parcel Name</th>
// // //                             <th className="p-4 text-left">Receiver</th>
// // //                             <th className="p-4 text-center">Payment</th> 
// // //                             <th className="p-4 text-center">Status</th>
// // //                             <th className="p-4 text-center">Price</th>
// // //                             <th className="rounded-tr-xl p-4 text-center">Actions</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {parcels.map((p, index) => (
// // //                             <tr key={p._id} className="hover:bg-gray-50 transition-colors border-b last:border-none">
// // //                                 <th className="p-4 font-medium text-gray-600 text-center">{index + 1}</th>
// // //                                 <td className="p-4 font-semibold text-gray-700 text-left">{p.parcelName}</td>
// // //                                 <td className="p-4 text-gray-600 text-left">{p.receiverName}</td>
                                
// // //                                 <td className="p-4 text-center">
// // //                                     {/* এখানে আপনার রাউটার অনুযায়ী /dashboard/payment/${p._id} ব্যবহার করা হয়েছে */}
// // //                                     <Link to={`/dashboard/payment/${p._id}`}>
// // //                                         <button 
// // //                                             disabled={p.paymentStatus === 'paid'}
// // //                                             className="btn btn-sm bg-[#c5e76d] hover:bg-[#b0d15a] text-[#003d3d] border-none flex items-center gap-2 mx-auto disabled:bg-gray-200"
// // //                                         >
// // //                                             <FaCreditCard size={14} />
// // //                                             {p.paymentStatus === 'paid' ? 'Paid' : 'Pay'}
// // //                                         </button>
// // //                                     </Link>
// // //                                 </td>

// // //                                 <td className="p-4 text-center">
// // //                                     <span className={`badge badge-sm sm:badge-md badge-outline px-3 py-3 font-semibold uppercase tracking-wider ${
// // //                                         p.status === 'pending' ? 'badge-warning text-orange-600' : 'badge-success text-green-600'
// // //                                     }`}>
// // //                                         {p.status}
// // //                                     </span>
// // //                                 </td>
// // //                                 <td className="p-4 font-bold text-[#003d3d] text-center">৳{p.totalPrice}</td>
// // //                                 <td className="p-4 text-center">
// // //                                     <button 
// // //                                         onClick={() => handleDelete(p._id)}
// // //                                         disabled={p.status !== 'pending'}
// // //                                         className="btn btn-error btn-sm sm:btn-md btn-outline hover:!text-white transition-all transform active:scale-95 group disabled:bg-transparent disabled:text-gray-300"
// // //                                         title="Delete Parcel"
// // //                                     >
// // //                                         <FaTrashAlt className="group-hover:shake" />
// // //                                         <span className="hidden sm:inline ml-1">Delete</span>
// // //                                     </button>
// // //                                 </td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
// // //                 {parcels.length === 0 && (
// // //                     <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
// // //                         <div className="text-5xl opacity-20 text-[#003d3d]">📦</div>
// // //                         <p className="text-gray-500 text-lg italic font-medium">No parcels found.</p>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     )
// // // }

// // // export default MyParcels;

// // import { useQuery } from '@tanstack/react-query'
// // import React from 'react'
// // import useAuth from '../../../Hooks/useAuth'
// // import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// // import { FaTrashAlt, FaCreditCard } from 'react-icons/fa'; 
// // import Swal from 'sweetalert2';
// // import { useNavigate } from 'react-router-dom';

// // const MyParcels = () => {
// //     const { user } = useAuth();
// //     const axiosSecure = useAxiosSecure();
// //     const navigate = useNavigate();

// //     const { data: parcels = [], isLoading, refetch } = useQuery({
// //         queryKey: ['myparcels', user?.email],
// //         enabled: !!user?.email,
// //         queryFn: async () => {
// //             const res = await axiosSecure.get(`/parcels?email=${user.email}`);
// //             return res.data;
// //         }
// //     })

// //     // Payment handler
// //     const handlePayment = async (parcel) => {
// //         const paymentInfo = {
// //             cost: parcel.totalPrice, 
// //             parcelId: parcel._id,
// //             senderEmail: user?.email,
// //             parcelName: parcel.parcelName
// //         };

// //         try {
// //             const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
// //             if (res.data.url) {
// //                 // redirect to Stripe checkout
// //                 window.location.replace(res.data.url);
// //             }
// //         } catch (error) {
// //             console.error("Payment Error:", error);
// //             Swal.fire("Error", "Could not initiate payment", "error");
// //         }
// //     }

// //     const handleDelete = (id) => {
// //         Swal.fire({
// //             title: "Are you sure?",
// //             text: "You won't be able to revert this!",
// //             icon: "warning",
// //             showCancelButton: true,
// //             confirmButtonColor: "#3085d6",
// //             cancelButtonColor: "#d33",
// //             confirmButtonText: "Yes, delete it!"
// //         }).then((result) => {
// //             if (result.isConfirmed) {
// //                 axiosSecure.delete(`/parcels/${id}`)
// //                     .then(res => {
// //                         if (res.data.deletedCount > 0) {
// //                             refetch(); 
// //                             Swal.fire("Deleted!", "Your parcel has been removed.", "success");
// //                         }
// //                     })
// //             }
// //         });
// //     }

// //     if (isLoading) return <div className="p-5 md:p-10 text-center text-xl md:text-2xl font-bold text-[#003d3d]">Loading...</div>;

// //     return (
// //         <div className="p-4 sm:p-6 md:p-8 lg:p-10">
// //             <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// //                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#003d3d]">
// //                     My Parcels ({parcels.length})
// //                 </h2>
// //                 <div className="text-sm text-gray-500 italic">
// //                     Swipe left/right to view more on mobile →
// //                 </div>
// //             </div>
            
// //             <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-100 bg-white">
// //                 <table className="table w-full min-w-[850px] md:min-w-full">
// //                     <thead className="bg-[#003d3d] text-white">
// //                         <tr>
// //                             <th className="rounded-tl-xl p-4 text-center">#</th>
// //                             <th className="p-4 text-left">Parcel Name</th>
// //                             <th className="p-4 text-left">Receiver</th>
// //                             <th className="p-4 text-center">Payment</th> 
// //                             <th className="p-4 text-center">Status</th>
// //                             <th className="p-4 text-center">Price</th>
// //                             <th className="rounded-tr-xl p-4 text-center">Actions</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {parcels.map((p, index) => (
// //                             <tr key={p._id} className="hover:bg-gray-50 transition-colors border-b last:border-none">
// //                                 <th className="p-4 font-medium text-gray-600 text-center">{index + 1}</th>
// //                                 <td className="p-4 font-semibold text-gray-700 text-left">{p.parcelName}</td>
// //                                 <td className="p-4 text-gray-600 text-left">{p.receiverName}</td>
                                
// //                                 <td className="p-4 text-center">
// //                                     <button 
// //                                         onClick={() => handlePayment(p)}
// //                                         disabled={p.paymentStatus === 'paid'}
// //                                         className="btn btn-sm bg-[#c5e76d] hover:bg-[#b0d15a] text-[#003d3d] border-none flex items-center gap-2 mx-auto disabled:bg-gray-200"
// //                                     >
// //                                         <FaCreditCard size={14} />
// //                                         {p.paymentStatus === 'paid' ? 'Paid' : 'Pay'}
// //                                     </button>
// //                                 </td>

// //                                 <td className="p-4 text-center">
// //                                     <span className={`badge badge-sm sm:badge-md badge-outline px-3 py-3 font-semibold uppercase tracking-wider ${
// //                                         p.status === 'pending' ? 'badge-warning text-orange-600' : 'badge-success text-green-600'
// //                                     }`}>
// //                                         {p.status}
// //                                     </span>
// //                                 </td>
// //                                 <td className="p-4 font-bold text-[#003d3d] text-center">৳{p.totalPrice}</td>
// //                                 <td className="p-4 text-center">
// //                                     <button 
// //                                         onClick={() => handleDelete(p._id)}
// //                                         disabled={p.status !== 'pending'}
// //                                         className="btn btn-error btn-sm sm:btn-md btn-outline hover:!text-white transition-all transform active:scale-95 group disabled:bg-transparent disabled:text-gray-300"
// //                                         title="Delete Parcel"
// //                                     >
// //                                         <FaTrashAlt className="group-hover:shake" />
// //                                         <span className="hidden sm:inline ml-1">Delete</span>
// //                                     </button>
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //                 {parcels.length === 0 && (
// //                     <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
// //                         <div className="text-5xl opacity-20 text-[#003d3d]">📦</div>
// //                         <p className="text-gray-500 text-lg italic font-medium">No parcels found.</p>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     )
// // }

// // export default MyParcels;


// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAuth from '../../../Hooks/useAuth';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import { FaTrashAlt, FaCreditCard } from 'react-icons/fa';
// import Swal from 'sweetalert2';

// const MyParcels = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const { data: parcels = [], isLoading, refetch } = useQuery({
//     queryKey: ['myparcels', user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/parcels?email=${user.email}`);
//       return res.data;
//     },
//   });

//   const handlePayment = async (parcel) => {
//     try {
//       const res = await axiosSecure.post('/create-checkout-session', {
//         cost: parcel.totalPrice,
//         parcelId: parcel._id,
//         senderEmail: user?.email,
//         parcelName: parcel.parcelName
//       });
//       if (res.data.url) window.location.replace(res.data.url);
//     } catch (err) {
//       console.error(err);
//       Swal.fire("Error", "Could not initiate payment", "error");
//     }
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then(result => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/parcels/${id}`).then(res => {
//           if (res.data.deletedCount > 0) {
//             refetch();
//             Swal.fire("Deleted!", "Your parcel has been removed.", "success");
//           }
//         });
//       }
//     });
//   };

//   if (isLoading) return <div className="p-5 text-center font-bold text-xl text-[#003d3d]">Loading...</div>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold text-[#003d3d] mb-4">My Parcels ({parcels.length})</h2>
//       <div className="overflow-x-auto bg-white rounded-xl shadow-xl border border-gray-100">
//         <table className="table w-full">
//           <thead className="bg-[#003d3d] text-white">
//             <tr>
//               <th>#</th><th>Parcel Name</th><th>Receiver</th><th>Payment</th><th>Status</th><th>Price</th><th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {parcels.map((p, idx) => (
//               <tr key={p._id} className="hover:bg-gray-50 border-b">
//                 <td>{idx+1}</td>
//                 <td>{p.parcelName}</td>
//                 <td>{p.receiverName}</td>
//                 <td>
//                   <button
//                     onClick={() => handlePayment(p)}
//                     disabled={p.paymentStatus === 'paid'}
//                     className="btn btn-sm bg-[#c5e76d] hover:bg-[#b0d15a] text-[#003d3d]"
//                   >
//                     {p.paymentStatus === 'paid' ? 'Paid' : 'Pay'} <FaCreditCard size={14}/>
//                   </button>
//                 </td>
//                 <td>{p.status}</td>
//                 <td>৳{p.totalPrice}</td>
//                 <td>
//                   <button onClick={() => handleDelete(p._id)}> <FaTrashAlt /> </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyParcels;


import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrashAlt, FaCreditCard } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], isLoading, refetch } = useQuery({
    queryKey: ['myparcels', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handlePayment = async (parcel) => {
    try {
      const res = await axiosSecure.post('/create-checkout-session', {
        cost: parcel.totalPrice,
        parcelId: parcel._id,
        senderEmail: user?.email,
        parcelName: parcel.parcelName
      });
      if (res.data.url) window.location.replace(res.data.url);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Could not initiate payment", "error");
    }
  };

  const handleDelete = (id, status) => {
    if(status === 'paid') return; // ✅ prevent delete for paid

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your parcel has been removed.", "success");
          }
        });
      }
    });
  };

  if (isLoading) return <div className="p-5 text-center font-bold text-xl text-[#003d3d]">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-[#003d3d] mb-4">My Parcels ({parcels.length})</h2>
      <div className="overflow-x-auto bg-white rounded-xl shadow-xl border border-gray-100">
        <table className="table w-full">
          <thead className="bg-[#003d3d] text-white">
            <tr>
              <th>#</th><th>Parcel Name</th><th>Receiver</th><th>Payment</th><th>Status</th><th>Price</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((p, idx) => (
              <tr key={p._id} className="hover:bg-gray-50 border-b">
                <td>{idx+1}</td>
                <td>{p.parcelName}</td>
                <td>{p.receiverName}</td>
                <td>
                  {p.paymentStatus === 'paid' ? (
                    <span className="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                      Paid
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePayment(p)}
                      className="btn btn-sm bg-[#c5e76d] hover:bg-[#b0d15a] text-[#003d3d]"
                    >
                      Pay <FaCreditCard size={14} />
                    </button>
                  )}
                </td>
                <td>{p.status}</td>
                <td>৳{p.totalPrice}</td>
                <td>
                  <button
                    onClick={() => handleDelete(p._id, p.paymentStatus)}
                    disabled={p.paymentStatus === 'paid'}
                    className="disabled:opacity-40"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
