

import fly1 from '../../../public/../public/pet/pet1.jpg'
import fly2 from '../../../public/../public/pet/pet2.jpg'
import fly3 from '../../../public/../public/pet/pet11.jpg'
import fly4 from '../../../public/../public/pet/pet4.jpg'
import fly5 from '../../../public/../public/pet/pet5.jpg'
import fly6 from '../../../public/../public/pet/pet6.jpg'
import fly7 from '../../../public/../public/pet/pet7.jpg'
import fly8 from '../../../public/../public/pet/pet8.jpg'
import fly9 from '../../../public/../public/pet/pet9.jpg'
import fly10 from '../../../public/../public/pet/pet10.jpg'
import MotionPage from './MotionPage'
import SomeMotion from './SomeMotion'
import AboutPet from './AboutPet'
const Displays = () => {
    const images = [
        fly1,
        fly2,
        fly3,
        fly4,
        fly5,
        fly6,
        fly7,
        fly8,
        fly9,
        fly10,
    ]

    // The total number of items is the length of the images array.
    const quantity = images.length;
    return (
        <>
            <div className=' '>
                {/* The style tag is used to embed the CSS directly in the React component for a single-file app */}
                <style>
                    {`
                .banner {
                    width: 100%;
                    height: 50vh;
                    text-align: center;
                    overflow: hidden;
                    position: relative;
                }

                .banner .slider {
                    position: absolute;
                    width: 200px;
                    height: 250px;
                    top: 10%;
                    left: calc(50% - 100px);
                    transform-style: preserve-3d;
                    transform: perspective(1000px);
                    animation: autoRun 5s linear infinite;
                }

                @keyframes autoRun {
                    from {
                        transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
                    }

                    to {
                        transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
                    }
                }

                .banner .slider .item {
                    position: absolute;
                    inset: 0 0 0 0;
                    transform:
                        rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg))
                        translateZ(300px);
                }

                .banner .slider .item img {
                    width: 100%;
                    height: 100%;
                    border-radius:10%;
                    box-shadow: 6px 0px 1px 5px red;
                    object-fit: cover;
                }
                `}
                </style>

                <div className='banner  '>
                    <img className='w-[100%] mx-auto shadow-2xl shadow-amber-400' src={fly10} alt="" />
                    {/* Correctly setting the CSS variable with the -- prefix and the correct quantity */}
                    <div className='slider' style={{ '--quantity': quantity }}>
                        {/* Using map to dynamically render each item */}
                        {images.map((src, index) => {
                            const position = index + 1;
                            return (
                                // The key prop is crucial for React to manage list items efficiently
                                // Correctly setting the --position CSS variable
                                <div className='item' key={position} style={{ '--position': position }}>
                                    <img src={src} alt={`Pet image ${position}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div >
                 <MotionPage></MotionPage>       
            </div>
            <div>
                <SomeMotion></SomeMotion>
            </div>
            <div>
                <AboutPet></AboutPet>
            </div>
        </>

    );
};

export default Displays;

