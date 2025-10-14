// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import pets from "../../../public/pet/pet109.jpg"
import pets1 from "../../../public/pet/pet110.jpg"
const BannerMotion = () => {
    return (
        <div>
            <div className="hero bg-green-100 ">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <div className=" ">
                        <motion.img className="w-52  rounded rounded-bl-[50%] rounded-tr-[50%] shadow-2xl shadow-green-900   border-l-8 border-t-3 border-l-green-700 border-t-green-700"
                        animate={{
                            x:[0,-80,0,-80,0],
                            y:[0,120,0],
                            transition:{duration:8 , repeat:Infinity}
                        }}
                        src={pets}
                    />
                    <motion.img className="w-52 -mx-20 rounded rounded-br-[50%] rounded-tl-[50%] shadow-2xl shadow-green-900 border-l-8 border-b-3 border-l-green-700 border-b-green-700 "
                    animate={{
                            x:[0,80,0,80,0],
                            y:[0,-120,0],
                            transition:{duration:8 , repeat:Infinity}
                        }}
                        src={pets1}
                    />
                    </div>
                    
                    <motion.div className="p-20 " animate={{
                        y:50,
                        transition:{duration:1}
                    }} >
                        <h1 className="text-5xl font-bold text-green-600">Pet News!</h1>
                        <p   className="text-xl font-bold py-2" >
                            We always need volunteers at the  Humane Society Adoption Center and our Thrift Stores!Opportunities available include:
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </motion.div>
                </div>
            </div>  
        </div>
    );
};

export default BannerMotion;