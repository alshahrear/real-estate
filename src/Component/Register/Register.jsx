import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex justify-center items-center bg-[#ededf3] pt-10 pb-10">
                <form>
                    <div className="bg-white px-8 py-5 border-2 border-gray-200 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Create an account</h2>

                        <div className="mb-3">
                            <label className="block mb-2 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-[350px] rounded-sm border-b-2 border-gray-300 focus:outline-none focus:border-black py-2"
                                placeholder=" Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder=" Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Photo URL</label>
                            <input
                                type="text"
                                name="photoUrl"
                                className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                placeholder=" Enter your photo URL"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="w-full rounded-sm border-gray-300 focus:border-black py-2"
                                    placeholder=" Enter your password"
                                    required
                                />
                                <span className="absolute text-xl right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                        </div>
                        
                        {/* {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-700">{success}</p>
                        } */}
                        <button className="w-full bg-orange-500 text-gray-800 py-2 font-semibold rounded-md hover:bg-orange-600 transition">
                            Register
                        </button>

                        <p className="text-center font-bold mt-4 text-gray-800">
                            Already have an account?{" "}
                            <Link to="/login" className="text-orange-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
    );
};

export default Register;