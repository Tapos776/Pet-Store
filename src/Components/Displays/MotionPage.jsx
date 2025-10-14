import Marquee from "react-fast-marquee";
import pets from "../../../public/pet/pet105.jpg"
// eslint-disable-next-line no-unused-vars
import { motion, scale } from "motion/react"
const MotionPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center p-5 font-bold  bg-yellow-200 ">
                <motion.h1 initial={{ scale: 0 }} animate={{ scale: [1, 3, 1], transition: { duration: 3, repeat: Infinity } }}  > FOR THE <motion.span animate={{ color: ["#052CAB", "#AB2105", "#3105AB", "#0BAB05", "#FFFB05", "#FF05F7", "#AC05FF"], transition: { duration: 15, repeat: Infinity } }}>LOVE</motion.span> IN THEM
                    AND THE <motion.span animate={{ color: ["#AC05FF", "#0BAB05", "#052CAB", "#AB2105", "#3105AB", "#0BAB05", "#FFFB05", "#FF05F7", "#AC05FF"], transition: { duration: 1, repeat: Infinity } }}>HUMANE</motion.span> IN US</motion.h1>
            </div>
            <div className="bg-yellow-200 grid grid-cols-2 md:grid-cols-3 justify-center">
                <div className="flex justify-center items-center ">
                    <motion.img
                        src={pets}
                        alt="React Logo"
                        className="w-100 h-100 rounded-full shadow-xl shadow-red-700"
                        animate={{ rotateX: 360, rotateY: 360, rotateZ: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                    />
                </div>
                <div className="flex justify-center items-center ">
                    <motion.img
                        src={pets}
                        alt="React Logo"
                        className="w-100 h-100 rounded-full shadow-xl shadow-red-700"
                        animate={{ rotateX: 360, rotateY: 360, rotateZ: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                    />
                </div>
                <div className="flex justify-center items-center ">
                    <motion.img
                        src={pets}
                        alt="React Logo"
                        className="w-100 h-100 rounded-full shadow-xl shadow-red-700"
                        animate={{ rotateX: 360, rotateY: 360, rotateZ: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                    />
                </div>
            </div>
            <div className="bg-gray-200 p-3">
                <div className=" font-bold text-green-400  flex bg-amber-50  gap-5  shadow-2xl shadow-gray-200 p-2 rounded-xl ">
                    <div>
                        <button className="btn btn-success text-xl font-bold text-amber-50">Pet</button>
                    </div>
                    <Marquee pauseOnHover={true} speed={200}><p className="shadow p-1">With your support, we’ve changed lives in the community and promoted healthy relationships with the animals among us.There is still more work to do.</p><p className="shadow p-1">With your support, we’ve changed lives in the community and promoted healthy relationships with the animals among us.There is still more work to do.</p><p className="shadow p-1">With your support, we’ve changed lives in the community and promoted healthy relationships with the animals among us.There is still more work to do.</p></Marquee>
                </div>
            </div>

        </div >
    );
};

export default MotionPage;