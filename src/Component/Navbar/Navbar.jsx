import { Link, NavLink } from "react-router-dom";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    };

    return (
        <div className="bg-[#f9f9f9] py-4">
            <div className="w-[1200px] mx-auto mt-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Elite Estates</h2>

                    {/* Navigation Menu */}
                    <div className="flex items-center space-x-12 text-lg font-semibold">
                        <NavLink className="hover:bg-gray-200 px-2 py-1 rounded-lg">Home</NavLink>
                        <NavLink className="hover:bg-gray-200 px-2 py-1 rounded-lg">Blog</NavLink>
                        <NavLink to="/updateProfile" className="hover:bg-gray-200 px-2 py-1 rounded-lg">Update Profile</NavLink>

                        {/* User Profile with Hover Effect */}
                        
                    </div>

                    {/* Login/Logout Button */}
                    <div className="flex items-center">
                        <div className="text-lg font-semibold mr-3">
                        {
                            user && user.photoURL ? (
                                <div 
                                    className="w-32 flex items-center justify-center font-semibold cursor-pointer min-w-[100px] text-center whitespace-nowrap"
                                    onMouseEnter={() => setShowName(true)}
                                    onMouseLeave={() => setShowName(false)}
                                >
                                    {showName ? (
                                        <span className="text-gray-800">{user.displayName}</span>
                                    ) : (
                                        <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full object-cover" />
                                    )}
                                </div>
                            ) : (
                                <NavLink className="hover:bg-gray-200 px-2 py-1 rounded-lg">User Profile</NavLink>
                            )
                        }
                        </div>
                        <div>
                        {
                            user ?
                                <Link onClick={handleSignOut}>
                                    <button className="flex items-center gap-1 bg-[#ed6325] text-white px-4 py-2 rounded-lg hover:bg-amber-500">
                                        Log Out <BiSolidLogInCircle className="text-lg" />
                                    </button>
                                </Link> :
                                <Link to="/login">
                                    <button className="flex items-center gap-1 bg-[#ed6325] text-white px-4 py-2 rounded-lg hover:bg-amber-500">
                                        Login <BiSolidLogInCircle className="text-lg" />
                                    </button>
                                </Link>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
