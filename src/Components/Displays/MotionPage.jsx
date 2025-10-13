import pets from "../../../public/pet/pet105.jpg"
// eslint-disable-next-line no-unused-vars
import { motion, scale } from "motion/react"
const MotionPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center p-5 font-bold ">
                <motion.h1 initial={{ scale: 0 }} animate={{ scale: 3, transition: { duration: 3,repeat: Infinity } }}  > FOR THE <motion.span animate={{color:["#052CAB", "#AB2105" , "#3105AB", "#0BAB05","#FFFB05","#FF05F7","#AC05FF"], transition:{duration:15 , repeat:Infinity }} }>LOVE</motion.span> IN THEM
                    AND THE <motion.span animate={{color:["#AC05FF", "#0BAB05","#052CAB", "#AB2105" , "#3105AB", "#0BAB05","#FFFB05","#FF05F7","#AC05FF"], transition:{duration:15 , repeat:Infinity }} }>HUMANE</motion.span> IN US</motion.h1>
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
            <div className=" font-bold text-green-400 p-10">
                <marquee behavior="left" direction="5" repeat="infinity" className="text-3xl">With your support, we’ve changed lives in the community and promoted healthy relationships with the animals among us.There is still more work to do.</marquee>
            </div>

        </div >
    );
};

export default MotionPage;