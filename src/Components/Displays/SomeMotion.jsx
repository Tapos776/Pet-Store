// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import pet1 from '../../../public/pet/pet101.jpg'
import pet3 from '../../../public/pet/pet104.jpg'
const SomeMotion = () => {
    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <div className=" ">
                        <motion.img className="w-52  rounded rounded-bl-[50%] rounded-tr-[50%] shadow-2xl shadow-red-900   border-l-8 border-t-3 border-l-red-700 border-t-red-700"
                        animate={{
                            x:[0,-80,0,-80,0],
                            y:[0,120,0],
                            transition:{duration:8 , repeat:Infinity}
                        }}
                        src={pet1}
                    />
                    <motion.img className="w-52 -mx-20 rounded rounded-br-[50%] rounded-tl-[50%] shadow-2xl shadow-red-900 border-l-8 border-b-3 border-l-red-700 border-b-red-700 "
                    animate={{
                            x:[0,80,0,80,0],
                            y:[0,-120,0],
                            transition:{duration:8 , repeat:Infinity}
                        }}
                        src={pet3}
                    />
                    </div>
                    
                    <motion.div className="p-20 " animate={{
                        y:50,
                        transition:{duration:4}
                    }} >
                        <h1 className="text-5xl font-bold">Pet News!</h1>
                        <p   className="py-6 " >
                            We always need volunteers at the  Humane Society Adoption Center and our Thrift Stores!Opportunities available include:
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </motion.div>
                </div>
            </div>

            
        </div>
    );
};

export default SomeMotion;