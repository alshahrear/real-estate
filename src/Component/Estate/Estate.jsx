import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
    const { id, image, estate_title, description, price, status, area, location, facilities } = estate;

    return (
        <div className="border border-gray-300 p-4 rounded-xl shadow-lg flex">
            <div>
                <img className="w-[300px] h-[200px] rounded-xl" src={image} alt={estate_title} />
            </div>
            <div className="ml-3 space-y-1">
                <h3 className="text-xl font-bold">{estate_title}</h3>
                <p className="text-lg font-normal text-gray-600">{description}</p>
                <div className="flex items-center">
                    <p className="font-semibold text-lg">Price: <span className="font-medium">{price}</span></p>
                    <p className="text-lg font-semibold ml-5">Area: <span className="font-medium">{area}</span></p>

                </div>
                <div className="flex items-center">
                    <p className="text-lg font-semibold">Status: <span className="font-medium">{status}</span></p>
                    <p className="text-lg font-semibold ml-5">Location: <span className="font-medium">{location}</span></p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold">Facilities:</h4>
                    <ul className="list-disc font-medium pl-5">
                        {facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                </div>

                <Link to={`/estate/${id}`}>
                    <button className="btn mt-3 bg-blue-500 text-white px-4 py-2 rounded">
                        View Property
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Estate;
