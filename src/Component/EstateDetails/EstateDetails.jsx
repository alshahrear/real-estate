import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {
    const { id } = useParams();
    const [estate, setEstate] = useState(null);

    useEffect(() => {
        fetch('/residential.json')
            .then(res => res.json())
            .then(data => {
                const selectedEstate = data.find(item => item.id === parseInt(id));
                setEstate(selectedEstate);
            });
    }, [id]);

    if (!estate) {
        return <div className="text-center mt-16 text-xl">Loading...</div>;
    }

    const { estate_title, description, price, status, area, location, facilities, image } = estate;

    return (
        <div className="mt-10 mb-10 w-[1200px] mx-auto p-6 shadow-lg">
            <Helmet>
                <title>Estate Details: {id}</title>
            </Helmet>
            <div className="flex">
                <div className="">
                    <img className="w-[500px] h-[280px] rounded-lg" src={image} alt={estate_title} />
                </div>
                <div className="ml-10 ">
                    <h2 className="text-3xl font-bold ">{estate_title}</h2>
                        <div className="flex mt-3">
                            <div className="space-y-4 text-lg font-medium">
                                <p className="mt-2"><strong>Price:</strong> {price}</p>
                                <p><strong>Status:</strong> {status}</p>
                                <p><strong>Area:</strong> {area}</p>
                                <p><strong>Location:</strong> {location}</p>
                            </div>
                            <div className="ml-10">
                                <h3 className="font-bold text-lg ">Facilities:</h3>
                                <ul className="list-disc text-lg font-medium space-y-3 pl-5">
                                    {facilities.map((facility, index) => (
                                        <li key={index}>{facility}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <Link>
                        <button className="btn mt-3  text-lg text-white px-4 py-2 hover:bg-amber-500 bg-[#ed6325] rounded-lg w-full">Book Property</button>
                        </Link>
                </div>         
            </div>   
            <div>
                <p className="mt-4 text-lg text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default EstateDetails;
