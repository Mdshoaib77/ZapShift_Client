// // import React from 'react'
// // import useAuth from '../Hooks/useAuth'
// // import { Navigate } from 'react-router';

// // const PrivateRoutes = ({ children }) => {
// //     const {user, loading} = useAuth();
// //     if(loading){
// //         return <div>
// //             <span className="loading loading-spinner text-error"></span>
// //         </div>
// //     }

// //     if(!user){
// //         return <Navigate to="/login"></Navigate>
// //     }



// //   return children;
// // };

// // export default PrivateRoutes


// import React from 'react'
// import useAuth from '../Hooks/useAuth'
// import { Navigate, useLocation } from 'react-router';

// const PrivateRoutes = ({ children }) => {
//     const { user, loading } = useAuth();
//     const location = useLocation();

//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <span className="loading loading-spinner text-error"></span>
//             </div>
//         );
//     }

//     if (!user) {
//         // লগইন না থাকলে /login এ পাঠাবে এবং state-এ বর্তমান লোকেশন সেভ করবে
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }

//     return children;
// };

// export default PrivateRoutes;


import React from 'react'
import useAuth from '../Hooks/useAuth' // bracket chara import
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner text-error loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        // location state pathano holo jate login shesh hole ekhane fire asha jay
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoutes;