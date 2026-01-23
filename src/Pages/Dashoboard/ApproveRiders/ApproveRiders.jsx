// // // import React from 'react'

// // // const ApproveRiders = () => {
// // //   return (
// // //     <div>
// // //       <h1>Pending  Riders</h1>
// // //     </div>
// // //   )
// // // }

// // // export default ApproveRiders



// // import React from 'react';
// // import { useQuery } from '@tanstack/react-query';
// // import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// // const ApproveRiders = () => {
// //   const axiosSecure = useAxiosSecure();

// //   const { data: riders = [], isLoading, error } = useQuery(
// //     ['pending-riders'],
// //     async () => {
// //       const res = await axiosSecure.get('/riders/pending');
// //       return res.data;
// //     }
// //   );

// //   if (isLoading) return <p className="text-center mt-10">Loading...</p>;
// //   if (error) return <p className="text-center mt-10 text-red-500">Error fetching riders</p>;

// //   return (
// //     <div className="min-h-screen bg-[#F3F4F6] p-6">
// //       <div className="max-w-7xl mx-auto bg-white p-8 rounded-[35px] shadow-xl">
// //         <h1 className="text-4xl font-black text-[#03373D] mb-8">Pending Riders</h1>

// //         {riders.length === 0 ? (
// //           <p className="text-gray-500 text-lg">No pending riders found.</p>
// //         ) : (
// //           <div className="overflow-x-auto">
// //             <table className="min-w-full divide-y divide-gray-200">
// //               <thead className="bg-[#C6E87A]/20">
// //                 <tr>
// //                   <th className="px-6 py-3 text-left text-sm font-bold text-[#03373D]">Name</th>
// //                   <th className="px-6 py-3 text-left text-sm font-bold text-[#03373D]">Email</th>
// //                   <th className="px-6 py-3 text-left text-sm font-bold text-[#03373D]">License</th>
// //                   <th className="px-6 py-3 text-left text-sm font-bold text-[#03373D]">Phone</th>
// //                   <th className="px-6 py-3 text-left text-sm font-bold text-[#03373D]">Region</th>
// //                   <th className="px-6 py-3 text-left text-sm font-bold text-[#03373D]">District</th>
// //                   <th className="px-6 py-3 text-left text-sm font-bold text-[#03373D]">Status</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white divide-y divide-gray-200">
// //                 {riders.map(rider => (
// //                   <tr key={rider._id}>
// //                     <td className="px-6 py-4">{rider.name}</td>
// //                     <td className="px-6 py-4">{rider.email}</td>
// //                     <td className="px-6 py-4">{rider.license}</td>
// //                     <td className="px-6 py-4">{rider.phone}</td>
// //                     <td className="px-6 py-4">{rider.region}</td>
// //                     <td className="px-6 py-4">{rider.district}</td>
// //                     <td className="px-6 py-4 text-yellow-600 font-bold">{rider.status}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ApproveRiders;


// // import React from 'react';
// // import { useQuery } from '@tanstack/react-query';
// // import useAuth from '../../../Hooks/useAuth';
// // import useAxiosSecure from '../../../Hooks/useAxiosSecure';

// // const ApproveRiders = () => {
// //   const { user } = useAuth();
// //   const axiosSecure = useAxiosSecure();

// //   const { data: pendingRiders = [], isLoading, error } = useQuery({
// //     queryKey: ['pending-riders', user?.email],
// //     enabled: !!user?.email,
// //     queryFn: async () => {
// //       const res = await axiosSecure.get('/riders/pending');
// //       return res.data;
// //     }
// //   });

// //   if (isLoading) return <p className="text-center mt-20 text-xl">Loading pending riders...</p>;
// //   if (error) return <p className="text-center mt-20 text-red-500">Failed to load data</p>;

// //   return (
// //     <div className="min-h-screen p-8 bg-[#F3F4F6]">
// //       <h1 className="text-3xl font-bold text-[#03373D] mb-6">Pending Riders</h1>
// //       {pendingRiders.length === 0 ? (
// //         <p className="text-gray-500">No pending riders found.</p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
// //             <thead className="bg-[#C6E87A] text-[#03373D]">
// //               <tr>
// //                 <th className="py-4 px-6 text-left">Name</th>
// //                 <th className="py-4 px-6 text-left">Email</th>
// //                 <th className="py-4 px-6 text-left">Phone</th>
// //                 <th className="py-4 px-6 text-left">License</th>
// //                 <th className="py-4 px-6 text-left">Region</th>
// //                 <th className="py-4 px-6 text-left">District</th>
// //                 <th className="py-4 px-6 text-left">Applied At</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {pendingRiders.map(rider => (
// //                 <tr key={rider._id} className="border-b last:border-none hover:bg-[#F0F9F0]">
// //                   <td className="py-4 px-6">{rider.name}</td>
// //                   <td className="py-4 px-6">{rider.email}</td>
// //                   <td className="py-4 px-6">{rider.phone}</td>
// //                   <td className="py-4 px-6">{rider.license}</td>
// //                   <td className="py-4 px-6">{rider.region}</td>
// //                   <td className="py-4 px-6">{rider.district}</td>
// //                   <td className="py-4 px-6">{new Date(rider.createdAt).toLocaleDateString()}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ApproveRiders;


// import React from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import useAuth from '../../../Hooks/useAuth';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import Swal from 'sweetalert2';
// import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';

// const ApproveRiders = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();

//   const { data: pendingRiders = [], isLoading, error } = useQuery({
//     queryKey: ['pending-riders', user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get('/riders/pending');
//       return res.data;
//     }
//   });

//   const handleAction = async (id, action, email = '') => {
//     try {
//       let res;
//       if (action === 'approve') {
//         res = await axiosSecure.patch(`/riders/approve/${id}`, { email });
//       } else if (action === 'reject') {
//         res = await axiosSecure.patch(`/riders/reject/${id}`);
//       } else if (action === 'delete') {
//         res = await axiosSecure.delete(`/riders/${id}`);
//       }

//       if (res.data.success) {
//         Swal.fire('Success', res.data.message, 'success');
//         queryClient.invalidateQueries(['pending-riders', user?.email]);
//       } else {
//         Swal.fire('Error', res.data.error || 'Something went wrong', 'error');
//       }
//     } catch (err) {
//       Swal.fire('Error', err.message || 'Something went wrong', 'error');
//     }
//   };

//   if (isLoading) return <p className="text-center mt-20 text-xl">Loading pending riders...</p>;
//   if (error) return <p className="text-center mt-20 text-red-500">Failed to load data</p>;

//   return (
//     <div className="min-h-screen p-8 bg-[#F3F4F6]">
//       <h1 className="text-3xl font-bold text-[#03373D] mb-6">Pending Riders</h1>
//       {pendingRiders.length === 0 ? (
//         <p className="text-gray-500">No pending riders found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
//             <thead className="bg-[#C6E87A] text-[#03373D]">
//               <tr>
//                 <th className="py-4 px-6 text-left">Name</th>
//                 <th className="py-4 px-6 text-left">Email</th>
//                 <th className="py-4 px-6 text-left">Phone</th>
//                 <th className="py-4 px-6 text-left">License</th>
//                 <th className="py-4 px-6 text-left">Region</th>
//                 <th className="py-4 px-6 text-left">District</th>
//                 <th className="py-4 px-6 text-left">Status</th>
//                 <th className="py-4 px-6 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingRiders.map(rider => (
//                 <tr key={rider._id} className="border-b last:border-none hover:bg-[#F0F9F0]">
//                   <td className="py-4 px-6">{rider.name}</td>
//                   <td className="py-4 px-6">{rider.email}</td>
//                   <td className="py-4 px-6">{rider.phone}</td>
//                   <td className="py-4 px-6">{rider.license}</td>
//                   <td className="py-4 px-6">{rider.region}</td>
//                   <td className="py-4 px-6">{rider.district}</td>
//                   <td className="py-4 px-6 font-bold">
//                     {rider.status.charAt(0).toUpperCase() + rider.status.slice(1)}
//                   </td>
//                   <td className="py-4 px-6 flex gap-3">
//                     <button
//                       onClick={() => handleAction(rider._id, 'approve', rider.email)}
//                       className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
//                       title="Approve"
//                     >
//                       <FaCheck />
//                     </button>
//                     <button
//                       onClick={() => handleAction(rider._id, 'reject')}
//                       className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full"
//                       title="Reject"
//                     >
//                       <FaTimes />
//                     </button>
//                     <button
//                       onClick={() => handleAction(rider._id, 'delete')}
//                       className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
//                       title="Delete"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApproveRiders;


// import React from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import useAuth from '../../../Hooks/useAuth';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import Swal from 'sweetalert2';
// import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';

// const ApproveRiders = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();

//   const { data: pendingRiders = [], isLoading, error } = useQuery({
//     queryKey: ['pending-riders', user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get('/riders/pending');
//       return res.data;
//     }
//   });

//   const handleAction = async (id, action, email = '') => {
//     try {
//       let res;
//       if (action === 'approve') res = await axiosSecure.patch(`/riders/approve/${id}`, { email });
//       else if (action === 'reject') res = await axiosSecure.patch(`/riders/reject/${id}`);
//       else if (action === 'delete') res = await axiosSecure.delete(`/riders/${id}`);

//       if (res.data.success) {
//         Swal.fire('Success', res.data.message, 'success');
//         queryClient.invalidateQueries(['pending-riders', user?.email]);
//       } else {
//         Swal.fire('Error', res.data.error || 'Something went wrong', 'error');
//       }
//     } catch (err) {
//       Swal.fire('Error', err.message || 'Something went wrong', 'error');
//     }
//   };

//   if (isLoading) return <p className="text-center mt-20 text-xl">Loading pending riders...</p>;
//   if (error) return <p className="text-center mt-20 text-red-500">Failed to load data</p>;

//   return (
//     <div className="min-h-screen p-8 bg-[#F3F4F6]">
//       <h1 className="text-3xl font-bold text-[#03373D] mb-6">Pending Riders</h1>
//       {pendingRiders.length === 0 ? (
//         <p className="text-gray-500">No pending riders found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
//             <thead className="bg-[#C6E87A] text-[#03373D]">
//               <tr>
//                 <th className="py-4 px-6 text-left">Name</th>
//                 <th className="py-4 px-6 text-left">Email</th>
//                 <th className="py-4 px-6 text-left">Phone</th>
//                 <th className="py-4 px-6 text-left">License</th>
//                 <th className="py-4 px-6 text-left">Region</th>
//                 <th className="py-4 px-6 text-left">District</th>
//                 <th className="py-4 px-6 text-left">Status</th>
//                 <th className="py-4 px-6 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingRiders.map(rider => (
//                 <tr key={rider._id} className="border-b last:border-none hover:bg-[#F0F9F0]">
//                   <td className="py-4 px-6">{rider.name}</td>
//                   <td className="py-4 px-6">{rider.email}</td>
//                   <td className="py-4 px-6">{rider.phone}</td>
//                   <td className="py-4 px-6">{rider.license}</td>
//                   <td className="py-4 px-6">{rider.region}</td>
//                   <td className="py-4 px-6">{rider.district}</td>
//                   <td className="py-4 px-6 font-bold">{rider.status.charAt(0).toUpperCase() + rider.status.slice(1)}</td>
//                   <td className="py-4 px-6 flex gap-3">
//                     <button onClick={() => handleAction(rider._id, 'approve', rider.email)} className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full" title="Approve"><FaCheck/></button>
//                     <button onClick={() => handleAction(rider._id, 'reject')} className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full" title="Reject"><FaTimes/></button>
//                     <button onClick={() => handleAction(rider._id, 'delete')} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full" title="Delete"><FaTrash/></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApproveRiders;


// import React, { useState } from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import useAuth from '../../../Hooks/useAuth';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import Swal from 'sweetalert2';
// import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';

// const ApproveRiders = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();

//   const { data: pendingRiders = [], isLoading, error } = useQuery({
//     queryKey: ['pending-riders', user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get('/riders/pending');
//       return res.data;
//     }
//   });

//   // Local state for live status update
//   const [ridersStatus, setRidersStatus] = useState({});

//   const handleAction = async (id, action, email = '') => {
//     try {
//       let res;
//       if (action === 'approve') res = await axiosSecure.patch(`/riders/approve/${id}`, { email });
//       else if (action === 'reject') res = await axiosSecure.patch(`/riders/reject/${id}`);
//       else if (action === 'delete') res = await axiosSecure.delete(`/riders/${id}`);

//       if (res.data.success) {
//         Swal.fire('Success', res.data.message, 'success');

//         // Update local status dynamically
//         if (action === 'approve' || action === 'reject') {
//           setRidersStatus(prev => ({ ...prev, [id]: action === 'approve' ? 'approved' : 'rejected' }));
//         } else if (action === 'delete') {
//           setRidersStatus(prev => {
//             const copy = { ...prev };
//             delete copy[id];
//             return copy;
//           });
//         }

//         queryClient.invalidateQueries(['pending-riders', user?.email]);
//       } else {
//         Swal.fire('Error', res.data.error || 'Something went wrong', 'error');
//       }
//     } catch (err) {
//       Swal.fire('Error', err.message || 'Something went wrong', 'error');
//     }
//   };

//   if (isLoading) return <p className="text-center mt-20 text-xl">Loading pending riders...</p>;
//   if (error) return <p className="text-center mt-20 text-red-500">Failed to load data</p>;

//   // Helper for dynamic color
//   const getStatusStyle = (status) => {
//     if (status === 'approved') return 'text-green-600 font-bold';
//     if (status === 'rejected') return 'text-red-600 font-bold';
//     return 'text-yellow-600 font-bold';
//   };

//   return (
//     <div className="min-h-screen p-8 bg-[#F3F4F6]">
//       <h1 className="text-3xl font-bold text-[#03373D] mb-6">Pending Riders</h1>
//       {pendingRiders.length === 0 ? (
//         <p className="text-gray-500">No pending riders found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
//             <thead className="bg-[#C6E87A] text-[#03373D]">
//               <tr>
//                 <th className="py-4 px-6 text-left">Name</th>
//                 <th className="py-4 px-6 text-left">Email</th>
//                 <th className="py-4 px-6 text-left">Phone</th>
//                 <th className="py-4 px-6 text-left">License</th>
//                 <th className="py-4 px-6 text-left">Region</th>
//                 <th className="py-4 px-6 text-left">District</th>
//                 <th className="py-4 px-6 text-left">Status</th>
//                 <th className="py-4 px-6 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingRiders.map(rider => {
//                 const liveStatus = ridersStatus[rider._id] || rider.status;
//                 return (
//                   <tr key={rider._id} className="border-b last:border-none hover:bg-[#F0F9F0]">
//                     <td className="py-4 px-6">{rider.name}</td>
//                     <td className="py-4 px-6">{rider.email}</td>
//                     <td className="py-4 px-6">{rider.phone}</td>
//                     <td className="py-4 px-6">{rider.license}</td>
//                     <td className="py-4 px-6">{rider.region}</td>
//                     <td className="py-4 px-6">{rider.district}</td>
//                     <td className={`py-4 px-6 ${getStatusStyle(liveStatus)}`}>
//                       {liveStatus.charAt(0).toUpperCase() + liveStatus.slice(1)}
//                     </td>
//                     <td className="py-4 px-6 flex gap-3">
//                       <button
//                         onClick={() => handleAction(rider._id, 'approve', rider.email)}
//                         className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
//                         title="Approve"
//                       ><FaCheck/></button>

//                       <button
//                         onClick={() => handleAction(rider._id, 'reject')}
//                         className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full"
//                         title="Reject"
//                       ><FaTimes/></button>

//                       <button
//                         onClick={() => handleAction(rider._id, 'delete')}
//                         className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
//                         title="Delete"
//                       ><FaTrash/></button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApproveRiders;



import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';

const ApproveRiders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: pendingRiders = [], isLoading, error } = useQuery({
    queryKey: ['pending-riders', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get('/riders/pending');
      return res.data;
    }
  });

  const [ridersStatus, setRidersStatus] = useState({});

  const handleAction = async (id, action, email = '') => {
    try {
      let res;
      if (action === 'approve') res = await axiosSecure.patch(`/riders/approve/${id}`, { email });
      else if (action === 'reject') res = await axiosSecure.patch(`/riders/reject/${id}`);
      else if (action === 'delete') res = await axiosSecure.delete(`/riders/${id}`);

      if (res.data.success) {
        Swal.fire('Success', res.data.message, 'success');
        if (action === 'approve' || action === 'reject') {
          setRidersStatus(prev => ({ ...prev, [id]: action === 'approve' ? 'approved' : 'rejected' }));
        } else if (action === 'delete') {
          setRidersStatus(prev => {
            const copy = { ...prev };
            delete copy[id];
            return copy;
          });
        }
        queryClient.invalidateQueries(['pending-riders', user?.email]);
      } else {
        Swal.fire('Error', res.data.error || 'Something went wrong', 'error');
      }
    } catch (err) {
      Swal.fire('Error', err.message || 'Something went wrong', 'error');
    }
  };

  if (isLoading) return <p className="text-center mt-20 text-xl">Loading pending riders...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">Failed to load data</p>;

  const getStatusStyle = (status) => {
    if (status === 'approved') return 'text-green-600 font-bold';
    if (status === 'rejected') return 'text-red-600 font-bold';
    return 'text-yellow-600 font-bold';
  };

  return (
    <div className="min-h-screen p-8 bg-[#F3F4F6]">
      <h1 className="text-3xl font-bold text-[#03373D] mb-6">Pending Riders</h1>
      {pendingRiders.length === 0 ? (
        <p className="text-gray-500">No pending riders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <thead className="bg-[#C6E87A] text-[#03373D]">
              <tr>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-left">Email</th>
                <th className="py-4 px-6 text-left">Phone</th>
                <th className="py-4 px-6 text-left">License</th>
                <th className="py-4 px-6 text-left">Region</th>
                <th className="py-4 px-6 text-left">District</th>
                <th className="py-4 px-6 text-left">Status</th>
                <th className="py-4 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingRiders.map(rider => {
                const liveStatus = ridersStatus[rider._id] || rider.status;
                return (
                  <tr key={rider._id} className="border-b last:border-none hover:bg-[#F0F9F0]">
                    <td className="py-4 px-6">{rider.name}</td>
                    <td className="py-4 px-6">{rider.email}</td>
                    <td className="py-4 px-6">{rider.phone}</td>
                    <td className="py-4 px-6">{rider.license}</td>
                    <td className="py-4 px-6">{rider.region}</td>
                    <td className="py-4 px-6">{rider.district}</td>
                    <td className={`py-4 px-6 ${getStatusStyle(liveStatus)}`}>
                      {liveStatus.charAt(0).toUpperCase() + liveStatus.slice(1)}
                    </td>
                    <td className="py-4 px-6 flex gap-3">
                      <button onClick={() => handleAction(rider._id, 'approve', rider.email)}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"><FaCheck/></button>
                      <button onClick={() => handleAction(rider._id, 'reject')}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full"><FaTimes/></button>
                      <button onClick={() => handleAction(rider._id, 'delete')}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"><FaTrash/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApproveRiders;
