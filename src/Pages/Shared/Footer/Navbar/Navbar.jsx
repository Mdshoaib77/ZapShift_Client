// // // import React from 'react'
// // // import Logo from '../../../../Components/Logo/Logo'
// // // import { NavLink } from 'react-router'

// // // const Navbar = () => {
// // //   const links = <>
// // //     <li><NavLink to="">Services</NavLink></li>
// // //     <li><NavLink to="">About Us</NavLink></li>
// // //     <li><NavLink to="/coverage">Coverage</NavLink></li>
// // //   </>
// // //   return (
// // // <div className="navbar bg-base-100 shadow-sm">
// // //   <div className="navbar-start">
// // //     <div className="dropdown">
// // //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// // //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
// // //       </div>
// // //       <ul
// // //         tabIndex="-1"
// // //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
// // //        {links}
// // //       </ul>
// // //     </div>
// // //     <a className="btn btn-ghost text-xl"><Logo></Logo></a>
// // //   </div>
// // //   <div className="navbar-center hidden lg:flex">
// // //     <ul className="menu menu-horizontal px-1">
// // //     {links}
// // //     </ul>
// // //   </div>
// // //   <div className="navbar-end">
// // //     <a className="btn">Login</a>
// // //   </div>
// // // </div>
// // //   )
// // // }

// // // export default Navbar


// // import React from 'react'
// // import Logo from '../../../../Components/Logo/Logo'
// // import { NavLink, useNavigate } from 'react-router' // useNavigate add kora hoyeche

// // const Navbar = () => {
// //   const navigate = useNavigate();
  
// //   // Eikhane real user authentication thakbe (e.g., Firebase theke)
// //   // Temporarily ami ekta dummy user variable nichchi logic bujhanor jonno
// //   const user = null; // Jodi user login thake tahole eikhane user object thakbe

// //   const handleAuthClick = () => {
// //     if (user) {
// //       // Logout logic eikhane hobe
// //       console.log("Logging out...");
// //       // e.g., signOut(auth)
// //     } else {
// //       // Login page-e niye jabe
// //       navigate('/login');
// //     }
// //   }

// //   const links = <>
// //     <li><NavLink to="/services">Services</NavLink></li>
// //     <li><NavLink to="/about">About Us</NavLink></li>
// //     <li><NavLink to="/coverage">Coverage</NavLink></li>
// //   </>

// //   return (
// //     <div className="navbar bg-base-100 shadow-sm">
// //       <div className="navbar-start">
// //         <div className="dropdown">
// //           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
// //             </svg>
// //           </div>
// //           <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
// //             {links}
// //           </ul>
// //         </div>
// //         <a className="btn btn-ghost text-xl"><Logo /></a>
// //       </div>

// //       <div className="navbar-center hidden lg:flex">
// //         <ul className="menu menu-horizontal px-1">
// //           {links}
// //         </ul>
// //       </div>

// //       <div className="navbar-end">
// //         {/* Conditional Rendering: User thakle Logout, na thakle Login */}
// //         {
// //           user ? (
// //             <button onClick={handleAuthClick} className="btn btn-error text-white">Logout</button>
// //           ) : (
// //             <NavLink to="/login" className="btn btn-primary">Login</NavLink>
// //           )
// //         }
// //       </div>
// //     </div>
// //   )
// // }

// // export default Navbar

// import React, { useContext } from 'react'
// import Logo from '../../../../Components/Logo/Logo'
// import { NavLink } from 'react-router'
// // Eikhane path-ti thik kora hoyeche (৪ dhap pichone giye Context folder e dhuka hoyeche)
// import { AuthContext } from '../../../../Contexts/Authcontexts/AuthContext'

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         console.log("Logged out successfully");
//       })
//       .catch(error => console.error(error));
//   }

//   const links = <>
//     <li><NavLink to="/services">Services</NavLink></li>
//     <li><NavLink to="/about">About Us</NavLink></li>
//     <li><NavLink to="/coverage">Coverage</NavLink></li>
//   </>

//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
//             </svg>
//           </div>
//           <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//             {links}
//           </ul>
//         </div>
//         <NavLink to="/" className="btn btn-ghost text-xl">
//             <Logo />
//         </NavLink>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           {links}
//         </ul>
//       </div>

//       <div className="navbar-end">
//         {
//           user ? (
//             <button onClick={handleLogOut} className="bg-white btn btn-error text-black">Logout</button>
//           ) : (
//             <NavLink to="/login" className="btn btn-primary bg-white text-black">Login</NavLink>
//           )
//         }
//          <NavLink to="/rider" className="text-black btn btn-primary mx-4">Be A Rider</NavLink>
//       </div>
//     </div>
//   )
// }
// export default Navbar

import React, { useContext } from 'react'
import Logo from '../../../../Components/Logo/Logo'
import { NavLink } from 'react-router'
import { AuthContext } from '../../../../Contexts/Authcontexts/AuthContext'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch(error => console.error(error));
  }

  const links = <>
    <li><NavLink to="/services">Services</NavLink></li>
    <li><NavLink to="/about">About Us</NavLink></li>
    <li><NavLink to="/coverage">Coverage</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl"> <Logo /> </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1"> {links} </ul>
      </div>

      <div className="navbar-end">
        {user ? (
            <button onClick={handleLogOut} className="bg-white btn btn-error text-black">Logout</button>
          ) : (
            <NavLink to="/login" className="btn btn-primary bg-white text-black">Login</NavLink>
          )
        }
        <NavLink to="/rider" className="text-black btn btn-primary mx-4">Be A Rider</NavLink>
      </div>
    </div>
  )
}
export default Navbar;