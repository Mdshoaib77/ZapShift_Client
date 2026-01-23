// // // import React from 'react'
// // // import axios from 'axios'
// // // const  axiosSecure = axios.create({
// // //     baseURL: 'http://localhost:3000'
// // // })
// // // const useAxiosSecure = () => {
// // //   return axiosSecure;
// // // }

// // // export default useAxiosSecure


// // import axios from 'axios'
// // const axiosSecure = axios.create({ baseURL: 'http://localhost:3000' });
// // const useAxiosSecure = () => axiosSecure;
// // export default useAxiosSecure;


// import axios from 'axios';

// const axiosSecure = axios.create({
//   baseURL: 'http://localhost:3000',
// });

// const useAxiosSecure = () => axiosSecure;

// export default useAxiosSecure;


// import axios from 'axios';
// import { useEffect } from 'react';
// import useAuth from './useAuth'; // path ঠিক করো

// const axiosSecure = axios.create({
//   baseURL: 'http://localhost:3000',
// });

// const useAxiosSecure = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.request.use(
//       (config) => {
//         if (user?.accessToken) {
//           config.headers.authorization = `Bearer ${user.accessToken}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     // cleanup (very important)
//     return () => {
//       axiosSecure.interceptors.request.eject(interceptor);
//     };


//   }, [user]);

//   return axiosSecure;
// };

// export default useAxiosSecure;


import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth'; // path ঠিক করো

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth(); // 🔹 logOut লাগবে
  const navigate = useNavigate();

  useEffect(() => {
    // 🔐 REQUEST interceptor (same as before)
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        if (user?.accessToken) {
          config.headers.authorization = `Bearer ${user.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // 🚨 RESPONSE interceptor (NEW)
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          console.log('Unauthorized / Forbidden → logout');

          await logOut();          // 🔥 user logout
          navigate('/login');     // 🔥 login page redirect
        }

        return Promise.reject(error);
      }
    );

    // 🧹 cleanup (VERY IMPORTANT)
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
