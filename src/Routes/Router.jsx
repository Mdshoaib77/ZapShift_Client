// import { createBrowserRouter } from "react-router";
// import RootLayout from "../Layouts/RootLayout";
// import Home from "../Pages/Home/Home/Home";
// import Coverage from "../Pages/Coverage/Coverage";
// import AuthLayout from "../Layouts/AuthLayout";
// import Register from "../Pages/Auth/Register/Register";
// import Login from "../Pages/Auth/Login/Login";
// import PrivateRoutes from "./PrivateRoutes";
// import Rider from "../Pages/Rider/Rider";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//   Component: RootLayout,
//   children: [
//     {
//       index: true,
//       Component: Home
//     },
//     {
//       path: 'coverage',
//       Component: Coverage
//     }
//   ]
//   },
//   {
//     path: '/',
//     Component: AuthLayout,
//     children: [
//       {
//         path: 'login',
//         Component: Login,
//       },
//       {
//           path: 'rider',
//           element: <PrivateRoutes><Rider></Rider></PrivateRoutes>
//       },
//       {
//         path: 'register',
//         Component: Register,
//       }
//     ]
//   }
// ]);

import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Auth/Register/Register";
import Login from "../Pages/Auth/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendAParcel/SendParcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashoboard/MyParcels/MyParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'coverage', Component: Coverage },
      // রাইডার এখন RootLayout এর অধীনে, তাই এখানে Navbar/Footer থাকবে
      {
        path: 'rider',
        element: <PrivateRoutes><Rider /></PrivateRoutes>
      },
      {
        path: 'sendparcel',
        element: <PrivateRoutes><SendParcel/></PrivateRoutes>
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      // এখান থেকে rider সরিয়ে ফেলা হয়েছে
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        path: 'my-parcels',
        Component: MyParcels
      }
    ]
  }
]);


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       { index: true, Component: Home },
//       { path: 'coverage', Component: Coverage }
//     ]
//   },
//   {
//     path: '/',
//     Component: AuthLayout,
//     children: [
//       { path: 'login', Component: Login },
//       { path: 'register', Component: Register },
//       {
//         path: 'rider',
//         // PrivateRoutes দিয়ে Rider পেজটিকে মুড়িয়ে দেওয়া হলো
//         element: <PrivateRoutes><Rider /></PrivateRoutes>
//       }
//     ]
//   }
// ]);