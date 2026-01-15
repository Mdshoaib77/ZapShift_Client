// import React, { use } from 'react'
// import { AuthContext } from '../Contexts/Authcontexts/AuthContext'

// const useAuth = () => {
//     const authInfo = use(AuthContext);

//   return authInfo;
// };

// export default useAuth


import { useContext } from 'react'; // 'use' er poriborte 'useContext' import korun
import { AuthContext } from '../Contexts/Authcontexts/AuthContext';

const useAuth = () => {
    // useContext diye AuthContext theke data nite hobe
    const authInfo = useContext(AuthContext);

    return authInfo;
};

export default useAuth; // Eita oboshoy thakte hobe