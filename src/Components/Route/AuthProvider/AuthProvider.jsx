import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export  const AuthContext =  createContext(null)

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading , setLoading]=useState(true);
    const [user,setUser]=useState()

    const signInWithUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth ,provider)
    }
    const  loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }
    const userOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    
    const authInfo={
        user,
        loading,
        googleLogin,
        loginUser,
        userOut,
        signInWithUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;