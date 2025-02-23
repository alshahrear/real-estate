import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";

const Estates = () => {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('/residential.json')
            .then(res => res.json())
            .then(data => setEstates(data));
    }, []);

    return (
        <div className="mt-16 mb-16 w-[1200px] mx-auto">
            <div className="text-center mb-5">
                <h2 className="text-2xl font-semibold">Find Your Dream Home - Buy or Rent with Ease</h2>
                <p className="text-lg font-normal pt-2">
                    Looking for the perfect home? Explore our exclusive collection of luxury villas, modern apartments, and cozy family houses. 
                    Whether you want to buy or rent, we have options to suit your needs. With top-notch amenities and prime locations, 
                    your dream home is just a click away! 🏡
                </p>
            </div>
            <div className="border-1 border-gray-300"></div>
            <div className="mt-5 grid grid-cols-2 gap-6">
                {estates.map(estate => <Estate key={estate.id} estate={estate} />)}
            </div>
        </div>
    );
};

export default Estates;
