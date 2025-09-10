import Lottie from "lottie-react";
import registerA from "../../../../public/pet/registerC.json"
const Register = () => {
    return (
        <div className="hero bg-base-200  ">
            <form >
                <h1 className=" mt-8 text-7xl font-bold bg-gradient-to-r from-green-500 via-green-900 to-green-900 bg-clip-text text-transparent  text-shadow-accent-content [text-shadow:0_5px_15px_rgb(255_0_0_/_0.8),0_-5px_15px_rgb(0_255_0_/_0.8)] text-center "> Register now!</h1>
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left w-[30%]">
                        <div className="py-6 ">
                            <Lottie animationData={registerA}></Lottie>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name="name" type="text" className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Phone</label>
                                <input name="phone" type="email" className="input" placeholder="Phone" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;