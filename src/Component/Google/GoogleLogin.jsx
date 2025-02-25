import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { auth } from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                const redirectPath = location.state?.from?.pathname || "/";
                console.log("Redirecting to:", redirectPath);
                navigate(redirectPath);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                const redirectPath = location.state?.from?.pathname || "/";
                console.log("Redirecting to:", redirectPath);
                navigate(redirectPath);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="flex justify-center">
            <div className="">
                <div className="flex items-center my-4">
                    <div className="flex-1 h-[1px] bg-gray-400"></div>
                    <span className="px-3 font-medium text-gray-600">Or</span>
                    <div className="flex-1 h-[1px] bg-gray-400"></div>
                </div>
                <button onClick={handleGoogleLogin} className="btn  px-[110px] rounded-2xl bg-white text-black">
                    <span><FcGoogle /></span> Continue With Google
                </button>
                <br />
                <button onClick={handleGithubLogin} className="btn px-[110px] rounded-2xl bg-white text-black mt-2">
                    <span><SiGithub /></span> Continue With Github
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;
