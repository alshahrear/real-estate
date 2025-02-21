import { Link, NavLink } from "react-router-dom";
import { BiSolidLogInCircle } from "react-icons/bi";



const Navbar = () => {
    return (
        <div className="bg-[#f9f9f9] py-3">
            <div className="w-[1200px] mx-auto mt-2 ">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                   
                    <h2 className="text-2xl font-bold">Elite Estates</h2>
                </div>
                <div className="text-lg font-semibold">
                    <NavLink className="mr-12 py-1 px-2 rounded-lg hover:bg-gray-200" activeClassName="">Home</NavLink>
                    <NavLink className="mr-12 py-1 px-2 rounded-lg hover:bg-gray-200">Update Profile</NavLink>
                    <NavLink className="mr-12 py-1 px-2 rounded-lg hover:bg-gray-200">User Profile</NavLink>
                </div>
                <div>
                    <Link>
                    <button className="btn items-center hover:bg-amber-500 bg-[#ed6325] py-3 px-4 rounded-lg text-white">Login <span><BiSolidLogInCircle className="text-lg"></BiSolidLogInCircle></span></button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;