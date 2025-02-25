import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get("email");
        const photoUrl = form.get("photoUrl");
        const password = form.get("password");

        console.log(name, email, photoUrl, password);

        // Password Validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long!", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }
        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase and one lowercase letter!", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Registration Successful!", {
                    position: "top-right",
                    autoClose: 2000,
                });
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then( () => console.log('Profile Updated'))
                .catch()

                const redirectPath = location.state?.from?.pathname || "/";
                console.log("Redirecting to:", redirectPath);
                navigate(redirectPath);
            })
            .catch(error => {
                console.error(error);
                toast.error("Registration Failed! Please try again.", {
                    position: "top-right",
                    autoClose: 2000,
                });
            });
    }



    return (
        <div className="flex justify-center items-center bg-[#ededf3] pt-10 pb-10">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <form onSubmit={handleRegister}>
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
                            <span className="absolute text-xl right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

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
            <ToastContainer />
        </div>
    );
};

export default Register;
