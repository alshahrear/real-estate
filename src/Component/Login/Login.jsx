import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Google/GoogleLogin";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login Successful!", {
                    position: "top-right",
                    autoClose: 2000,
                });
                const redirectPath = location.state?.from?.pathname || "/";
                console.log("Redirecting to:", redirectPath);
                navigate(redirectPath);
            })
            .catch(error => {
                console.error(error);
                toast.error("Login Failed! Please check your credentials.", {
                    position: "top-right",
                    autoClose: 2000,
                });

            });
    }

    return (
        <div className="pt-10 pb-10 ">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="flex justify-center items-center bg-white ">
                <form onSubmit={handleLogin}>
                    <div className="bg-white p-6 border-2 border-gray-200 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Login</h2>

                        <div className="mb-3">
                            <label className="block mb-2 font-medium text-gray-700">Email</label>
                            <input
                                type="text"
                                name="email"
                                className="w-[350px] rounded-sm border-b-2 border-gray-300 focus:outline-none focus:border-black py-2"
                                placeholder=" Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700 font-medium">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-[350px] rounded-sm border-gray-300 focus:border-black py-2"
                                    placeholder=" Enter your password"
                                    required
                                />
                                <span className="absolute text-xl right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <button className="w-full bg-orange-500 text-gray-800 py-2 font-semibold rounded-md hover:bg-orange-600 transition">Login</button>
                        <div>
                            <p className="text-center font-bold mt-4 text-gray-800">
                                Don't have an account?{" "}
                                <Link to="/register" className="text-orange-500 hover:underline">Register</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <GoogleLogin />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
