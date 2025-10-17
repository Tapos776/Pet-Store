import { useState } from "react";


const AboutPet = () => {
    const [pet, setPets] = useState([])
    fetch('pet.json')
        .then(res => res.json())
        .then(data => setPets (data))  
         
    return (
        <div className="bg-[#a44345]">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {
                pet.map(cart => <div key={cart.id} >

                    <div className="card h-[100%]">
                        <h2 className="m-5 text-center text-4xl font-black text-white">{cart.title}</h2>
                        <figure className="">
                            <img
                                src={cart.photo}
                                alt="Pet"
                                className="rounded-full w-[200px] h-[200px] " />
                        </figure>
                        <div className="card-body items-center text-center ">                          
                            <p className="text-white my-4"> {cart.details}</p>
                            <div className="card-actions">
                                <button className=" shadow px-3 py-2 font-bold rounded bg-[#cb8a4f]  text-black hover:text-white hover:bg-[#8B3A3A] hover:shadow mb-4 ">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            </div>
        </div>
    );
};

export default AboutPet;