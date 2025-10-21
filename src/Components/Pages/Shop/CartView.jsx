import { useLoaderData } from 'react-router';

const CartView = () => {
    const cart = useLoaderData()
    const { title ,description,category,petType,location,company_logo} = cart

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure className='w-[50%]'>
                    <img
                        src={company_logo}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{category}</p>
                    <p>{petType}</p>
                    <p>{description}</p>
                    <p>{location}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartView;