import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../../../firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export  const AuthContext =  createContext(null)

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const loginUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleLogin =()=>{
        return signInWithPopup(auth ,provider)
    }
    
    const authInfo={
        googleLogin,
        loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;