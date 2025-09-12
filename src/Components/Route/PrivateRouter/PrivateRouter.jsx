import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";


const PrivateRouter = ({children}) => {
    const {user ,loading}=useContext(AuthContext);
    const navigate =useNavigate()
    if(loading){
        return <> <h1>.........Loading.......</h1></>
    }
    if(user){
        return children ;
    }
    return (
        navigate("/login")
    );
};

export default PrivateRouter;