// // // import React from 'react'
// // // import { AuthContext } from './AuthContext'
// // // import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
// // // import { auth } from '../../Firebase/firebase.init'

// // // const AuthProvider = ({children}) => {

// // //     const registerUser = (email, password) =>{
// // //         return createUserWithEmailAndPassword(auth, email, password )
// // //     }

// // //     const signInUser = (email, password) =>{
// // //         return signInWithEmailAndPassword(auth, email, password)
// // //     }

// // //     const authInfo ={
// // // registerUser,
// // // signInUser
// // //     }

// // //   return (
// // //     <AuthContext value={authInfo}>
// // // {children}
// // //     </AuthContext>
// // //   )
// // // }

// // // export default AuthProvider


// // import React, { useState, useEffect } from 'react'
// // import { AuthContext } from './AuthContext'
// // import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
// // import { auth } from '../../Firebase/firebase.init'

// // const AuthProvider = ({children}) => {
// //     const [user, setUser] = useState(null);
// //     const [loading, setLoading] = useState(true);

// //     const registerUser = (email, password) =>{
// //         setLoading(true);
// //         return createUserWithEmailAndPassword(auth, email, password )
// //     }

// //     const signInUser = (email, password) =>{
// //         setLoading(true);
// //         return signInWithEmailAndPassword(auth, email, password)
// //     }

// //     const logOut = () => {
// //         setLoading(true);
// //         return signOut(auth);
// //     }

// //     // ইউজারের অবস্থা ট্র্যাক করা
// //     useEffect(() => {
// //         const unsubscribe = onAuthStateChanged(auth, currentUser => {
// //             setUser(currentUser);
// //             setLoading(false);
// //         });
// //         return () => unsubscribe();
// //     }, [])

// //     const authInfo = {
// //         user,
// //         loading,
// //         registerUser,
// //         signInUser,
// //         logOut
// //     }

// //   return (
// //     /* value প্রপস হিসেবে authInfo পাস করতে হবে */
// //     <AuthContext.Provider value={authInfo}>
// //         {children}
// //     </AuthContext.Provider>
// //   )
// // }

// // export default AuthProvider


// import React, { useState, useEffect } from 'react'
// import { AuthContext } from './AuthContext'
// import { 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword, 
//   onAuthStateChanged, 
//   signOut, 
//   GoogleAuthProvider, 
//   signInWithPopup 
// } from 'firebase/auth'
// import { auth } from '../../Firebase/firebase.init'

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const googleProvider = new GoogleAuthProvider();

//     // গুগল দিয়ে লগইন করার ফাংশন
//     const signInWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     const registerUser = (email, password) =>{
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password )
//     }

//     const signInUser = (email, password) =>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//         registerUser,
//         signInUser,
//         signInWithGoogle,
//         logOut
//     }

//   return (
//     <AuthContext.Provider value={authInfo}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider


import React, { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext' // Path thik rakhun
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup 
} from 'firebase/auth'
import { auth } from '../../Firebase/firebase.init'

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const registerUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); // User login hole eikhane data set hoy
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInWithGoogle,
        logOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider