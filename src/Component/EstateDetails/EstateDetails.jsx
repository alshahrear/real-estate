import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <div className="mt-16 w-[800px] mx-auto p-6 border rounded-lg shadow-lg">
            <img className="w-full h-[400px] rounded-lg" src={image} alt={estate_title} />
            <h2 className="text-3xl font-bold mt-4">{estate_title}</h2>
            <p className="mt-2">{description}</p>
            <p className="mt-2"><strong>Price:</strong> {price}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Area:</strong> {area}</p>
            <p><strong>Location:</strong> {location}</p>
            <h3 className="font-semibold mt-3">Facilities:</h3>
            <ul className="list-disc pl-5">
                {facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                ))}
            </ul>
        </div>
    );
};

export default EstateDetails;
