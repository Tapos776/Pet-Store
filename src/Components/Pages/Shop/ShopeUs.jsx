import { Link } from "react-router";



const ShopeUs = ({ cart }) => {

    const { title, location, jobType ,company_logo ,_id} = cart;

    return (
        <div>
            <div className="card bg-base-100  shadow-sm h-[500px]">
                <figure className="px-10 pt-10">
                    <img
                        src={company_logo}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">{jobType}</h2>
                    <p>{location}</p>
                    <div className="card-actions">
                        <Link to={`${_id}`}><button className="btn btn-primary">View Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopeUs;