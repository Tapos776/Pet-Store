import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";


const PrivateRouter = ({children}) => {
    const {user ,loading}=useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <> <h1 className="text-center">.........Loading.......</h1></>
    }
    if(!user){
        return <Navigate to={'/login'} state={location.pathname}></Navigate>
    }
    return children ;
        
    
};

export default PrivateRouter;