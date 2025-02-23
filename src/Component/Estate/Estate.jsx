import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
    const { id, image, estate_title, description, price, status, area, location, facilities } = estate;

    return (
        <div className="border border-gray-300 p-5 rounded-xl shadow-lg flex flex-col h-full">
            <div>
                <img className="w-[550px] h-[250px] rounded-xl" src={image} alt={estate_title} />
            </div>
            <div className="mt-5 space-y-2 flex-grow">
                <h3 className="text-xl font-bold">{estate_title}</h3>
                <p className="font-medium text-gray-600">
                    {description.split(" ").slice(0, 20).join(" ") + (description.split(" ").length > 20 ? "..." : "")}
                </p>

                <div className="flex items-center">
                    <p className="font-semibold">Price: <span className="font-medium">{price}</span></p>
                    <p className="font-semibold ml-5">Area: <span className="font-medium">{area}</span></p>
                </div>
                <div className="flex items-center">
                    <p className="font-semibold">Status: <span className="font-medium">{status}</span></p>
                    <p className="font-semibold ml-5">Location: <span className="font-medium">{location}</span></p>
                </div>
                <div className="mb-2">
                    <h4 className="text-lg font-semibold">Facilities:</h4>
                    <ul className="list-disc font-medium pl-5">
                        {facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-auto">
                <Link to={`/estate/${id}`}>
                    <button className="btn bg-cyan-500 text-lg text-white px-4 py-2 rounded-lg w-full">
                        View Property
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Estate;
