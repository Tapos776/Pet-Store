
import { useLoaderData } from "react-router";
import ShopeUs from "./ShopeUs";

const Shop = () => {
    
    const shop =useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
            shop.map(cart => <ShopeUs cart={cart}></ShopeUs>)
           }
        </div>
    );
};

export default Shop;