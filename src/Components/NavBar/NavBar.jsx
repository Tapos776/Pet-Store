import { NavLink } from "react-router-dom";
import "../../Components/Style/Style.css"
import catLogo from "../../../public/pet/CatLogo.png"
import { useContext } from "react";
import { AuthContext } from "../Route/AuthProvider/AuthProvider";

const NavBar = () => {

    const { user, userOut } = useContext(AuthContext)
    console.log(user);

    const nav = <>
        <NavLink className={'mx-4 font-bold text-xl border-r-[1px] py-2 px-4 text-white '} to={"/"}>Home</NavLink>
        <NavLink className={'mx-4 font-bold text-xl border-r-[1px] py-2 px-4 text-white '} to={"/aboutUs"}>About us</NavLink>
        <NavLink className={'mx-4 font-bold text-xl border-r-[1px] py-2 px-4 text-white '} to={"/shop"}>Shope</NavLink>
        <NavLink className={'mx-4 font-bold text-xl border-r-[1px] py-2 px-4 text-white '} to={"/pets"}>Pets</NavLink>
        <NavLink className={'mx-4 font-bold text-xl border-r-[1px] py-2 px-4 text-white '} to={"/register"}>Register</NavLink>
        
    </>

    const handelLogOut = (e) => {
        e.preventDefault()
        userOut()
            .then(() => { })
            .catch((error) => { alert("ERROR", error.message) })
    }
    return (
        <div className="navbar bg-gray-700/20 shadow-lg flex justify-between items-center ">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-500 rounded-box z-1 mt-3 w-52 p-2 shadow  ">
                        {nav}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-orange-800 shadow-sm shadow-gray-100"><img className="w-8" src={catLogo} alt="" />Pet Store</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav}
                </ul>
            </div>
            <div>
                {
                    user ? <div className="flex items-center gap-2"><h1 className="text-xl font-bold text-green-600">{user?.email}</h1> <button onClick={handelLogOut} className="btn btn-error  text-white font-bold">LogOut</button> </div> : <NavLink className={'mx-4 font-bold text-xl border-r-[1px] py-2 px-4 text-white bg-green-600 rounded-2xl '} to={"/login"}>LogIn</NavLink>
                }
            </div>
        </div>
    );
};

export default NavBar;